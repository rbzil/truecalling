import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  contactRequestSchema,
  type ContactRequestData,
} from "@/lib/validation/contact-request";
import { ContactNotificationEmail } from "@/emails/ContactNotificationEmail";
import { ContactConfirmationEmail } from "@/emails/ContactConfirmationEmail";

/* ============================================================
   POST /api/contact
   Receives the lightweight contact-form payload, sends:
     1. Internal notification → contact@truecalling.ai
     2. Localized auto-reply  → visitor
   ============================================================ */

// Hardcoded per product spec — all contact form mail goes to the
// general contact inbox.
const CONTACT_RECIPIENT = "contact@truecalling.ai";

const CONFIRMATION_SUBJECT_BY_LOCALE: Record<string, string> = {
  fr: "Votre message à TrueCalling — bien reçu",
  en: "Your message to TrueCalling — received",
  he: "ההודעה שלך ל-TrueCalling התקבלה",
  "pt-BR": "Sua mensagem para a TrueCalling foi recebida",
  es: "Tu mensaje a TrueCalling — recibido",
  de: "Ihre Nachricht an TrueCalling — bestätigt",
  it: "Il tuo messaggio a TrueCalling — ricevuto",
  nl: "Je bericht aan TrueCalling — ontvangen",
};

type ContactResponse =
  | { success: true }
  | {
      success: false;
      error: "validation" | "server-config" | "send-failed";
      fieldErrors?: Partial<Record<keyof ContactRequestData, string[]>>;
    };

export async function POST(request: Request): Promise<NextResponse<ContactResponse>> {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "validation" },
      { status: 400 },
    );
  }

  const parsed = contactRequestSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "validation",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;

  // Honeypot tripped → silently return success so the bot doesn't retry.
  if (data.honeypot) {
    console.warn("[contact] honeypot triggered, ignoring submission");
    return NextResponse.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.NOTIFICATION_EMAIL_FROM;

  if (!apiKey || !from) {
    console.error(
      "[contact] missing env vars (RESEND_API_KEY / NOTIFICATION_EMAIL_FROM)",
    );
    console.log("[contact] LEAD BACKUP:", JSON.stringify(data, null, 2));
    return NextResponse.json(
      { success: false, error: "server-config" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const confirmationSubject =
    CONFIRMATION_SUBJECT_BY_LOCALE[data.locale] ??
    CONFIRMATION_SUBJECT_BY_LOCALE.en;

  try {
    // 1. Internal notification — to Patrick. Reply-To = visitor so hitting
    //    Reply writes directly to them.
    const teamRes = await resend.emails.send({
      from: `TrueCalling Contact <${from}>`,
      to: [CONTACT_RECIPIENT],
      replyTo: data.email,
      subject: `✉️ [${data.subject}] ${data.name}`,
      react: ContactNotificationEmail({ data }),
    });
    if (teamRes.error) {
      throw new Error(`team email: ${teamRes.error.message}`);
    }

    // 2. Auto-reply — to the visitor, in their locale.
    const visitorRes = await resend.emails.send({
      from: `TrueCalling <${from}>`,
      to: [data.email],
      subject: confirmationSubject,
      react: ContactConfirmationEmail({ data }),
    });
    if (visitorRes.error) {
      // Team email is already in — surface the partial failure but treat the
      // submission as successful (we have the lead).
      console.warn(
        "[contact] auto-reply failed:",
        visitorRes.error.message,
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[contact] failed to send:", msg);
    console.log("[contact] LEAD BACKUP:", JSON.stringify(data, null, 2));
    return NextResponse.json(
      { success: false, error: "send-failed" },
      { status: 500 },
    );
  }
}
