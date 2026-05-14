"use server";

import { z } from "zod";
import { headers } from "next/headers";
import { Resend } from "resend";
import { getSupabaseAdmin } from "@/lib/supabase";
import { NewsletterWelcomeEmail } from "@/emails/NewsletterWelcomeEmail";

/* ============================================================
   Newsletter subscription — Supabase backend + Resend welcome.
   Source of truth for subscribers is the public.newsletter_subscribers
   table (see supabase/migrations/0001_newsletter_subscribers.sql).
   The Beehiiv backend has been retired.
   Returns abstract error codes; the popup translates them via the
   locale dictionary on the client side.
   ============================================================ */

const inputSchema = z.object({
  email: z.string().email().max(200),
  locale: z.string().min(2).max(10).optional().default("en"),
  source: z.string().max(100).optional().default("popup_landing"),
});

const WELCOME_SUBJECT_BY_LOCALE: Record<string, string> = {
  fr: "Bienvenue dans la newsletter TrueCalling",
  en: "Welcome to the TrueCalling newsletter",
  he: "ברוכים הבאים לניוזלטר TrueCalling",
  "pt-BR": "Boas-vindas à newsletter TrueCalling",
  es: "Bienvenido a la newsletter de TrueCalling",
  de: "Willkommen beim TrueCalling-Newsletter",
  it: "Benvenuto nella newsletter di TrueCalling",
  nl: "Welkom bij de TrueCalling-nieuwsbrief",
};

export type NewsletterResult =
  | { success: true }
  | { success: false; error: "INVALID_EMAIL" | "GENERIC" };

export async function subscribeToNewsletter(
  formData: FormData,
): Promise<NewsletterResult> {
  const raw = {
    email: formData.get("email")?.toString() ?? "",
    locale: formData.get("locale")?.toString() ?? "en",
    source: formData.get("source")?.toString() ?? "popup_landing",
  };

  const parsed = inputSchema.safeParse(raw);
  if (!parsed.success) {
    return { success: false, error: "INVALID_EMAIL" };
  }
  const data = parsed.data;

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    console.error(
      "[newsletter] missing env vars (SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY)",
    );
    console.log("[newsletter] LEAD BACKUP:", JSON.stringify(data));
    return { success: false, error: "GENERIC" };
  }

  // Capture lightweight context. We deliberately do NOT store the raw
  // IP (GDPR — personal data, requires legal basis + retention policy).
  // The two-letter country code from the edge is enough for analytics
  // and is considered non-identifying.
  const h = headers();
  const ipCountry =
    h.get("x-vercel-ip-country") || h.get("cf-ipcountry") || null;
  const userAgent = h.get("user-agent") || null;

  // Upsert behavior: store every signup attempt, but never duplicate
  // an email (unique index on lower(email) in the DB). If they already
  // exist, the conflict is swallowed silently — we still consider the
  // submission successful from the visitor's perspective.
  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({
      email: data.email,
      locale: data.locale,
      source: data.source,
      utm_source: "popup_landing",
      utm_medium: "website",
      utm_campaign: "newsletter_signup",
      ip_country: ipCountry,
      user_agent: userAgent,
    });

  if (error) {
    const isDuplicate = error.code === "23505";
    if (!isDuplicate) {
      console.error("[newsletter] supabase insert failed:", error);
      console.log("[newsletter] LEAD BACKUP:", JSON.stringify(data));
      return { success: false, error: "GENERIC" };
    }
    // Already subscribed — no welcome email re-send to avoid abuse.
    return { success: true };
  }

  // Fire-and-forget welcome email. A welcome-email failure must not
  // block the signup — the subscriber is already in the DB.
  void sendWelcomeEmail(data.email, data.locale).catch((err) => {
    const msg = err instanceof Error ? err.message : String(err);
    console.warn("[newsletter] welcome email failed:", msg);
  });

  return { success: true };
}

async function sendWelcomeEmail(email: string, locale: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFICATION_EMAIL_FROM;
  if (!apiKey || !from) {
    console.warn(
      "[newsletter] welcome email skipped: missing RESEND_API_KEY / NOTIFICATION_EMAIL_FROM",
    );
    return;
  }

  const resend = new Resend(apiKey);
  const subject =
    WELCOME_SUBJECT_BY_LOCALE[locale] ?? WELCOME_SUBJECT_BY_LOCALE.en;

  const res = await resend.emails.send({
    from: `TrueCalling <${from}>`,
    to: [email],
    subject,
    react: NewsletterWelcomeEmail({ locale }),
  });
  if (res.error) {
    throw new Error(res.error.message);
  }
}
