"use server";

import { z } from "zod";

/* ============================================================
   Newsletter subscription — Beehiiv backend.
   Returns abstract error codes; the popup translates them via
   the locale dictionary on the client side.
   ============================================================ */

const emailSchema = z.string().email().max(200);

export type NewsletterResult =
  | { success: true }
  | { success: false; error: "INVALID_EMAIL" | "GENERIC" };

export async function subscribeToNewsletter(
  formData: FormData,
): Promise<NewsletterResult> {
  const email = formData.get("email")?.toString() ?? "";

  const parsed = emailSchema.safeParse(email);
  if (!parsed.success) {
    return { success: false, error: "INVALID_EMAIL" };
  }

  const apiKey = process.env.BEEHIIV_API_KEY;
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId) {
    console.error(
      "[newsletter] missing env vars (BEEHIIV_API_KEY / BEEHIIV_PUBLICATION_ID)",
    );
    console.log("[newsletter] LEAD BACKUP:", parsed.data);
    return { success: false, error: "GENERIC" };
  }

  try {
    const response = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: parsed.data,
          reactivate_existing: false,
          send_welcome_email: true,
          utm_source: "popup_landing",
          utm_medium: "website",
          utm_campaign: "newsletter_signup",
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(
        "[newsletter] Beehiiv API error:",
        response.status,
        errorData,
      );
      console.log("[newsletter] LEAD BACKUP:", parsed.data);
      return { success: false, error: "GENERIC" };
    }

    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[newsletter] subscribe failed:", msg);
    console.log("[newsletter] LEAD BACKUP:", parsed.data);
    return { success: false, error: "GENERIC" };
  }
}
