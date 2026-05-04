"use server";

import { Resend } from "resend";
import { demoRequestSchema, type DemoRequestData } from "@/lib/validation/demo-request";
import { NotificationEmail } from "@/emails/NotificationEmail";
import { ConfirmationEmail } from "@/emails/ConfirmationEmail";

const SUBJECT_BY_LOCALE: Record<string, string> = {
  fr: "Votre demande de démo TrueCalling — bien reçue",
  en: "Your TrueCalling demo request — confirmed",
  he: "בקשת הדמו של TrueCalling שלך התקבלה",
  "pt-BR": "Sua solicitação de demo TrueCalling foi recebida",
  es: "Tu solicitud de demo TrueCalling — recibida",
  de: "Ihre TrueCalling Demo-Anfrage — bestätigt",
  it: "La tua richiesta di demo TrueCalling — ricevuta",
  nl: "Je TrueCalling demo-aanvraag — ontvangen",
};

export type DemoRequestResult =
  | { success: true }
  | {
      success: false;
      error: string;
      fieldErrors?: Partial<Record<keyof DemoRequestData, string[]>>;
    };

export async function submitDemoRequest(
  formData: FormData,
): Promise<DemoRequestResult> {
  const raw = Object.fromEntries(formData);
  const parsed = demoRequestSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      error: "validation",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  // Honeypot triggered → silently return success so the bot doesn't retry.
  if (data.honeypot) {
    console.warn("[demo-request] honeypot triggered, ignoring submission");
    return { success: true };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NOTIFICATION_EMAIL_TO;
  const from = process.env.NOTIFICATION_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    console.error(
      "[demo-request] missing env vars (RESEND_API_KEY / NOTIFICATION_EMAIL_TO / NOTIFICATION_EMAIL_FROM)",
    );
    console.log("[demo-request] LEAD BACKUP:", JSON.stringify(data, null, 2));
    return {
      success: false,
      error: "server-config",
    };
  }

  const resend = new Resend(apiKey);
  const fullName = `${data.firstName} ${data.lastName}`;
  const confirmationSubject =
    SUBJECT_BY_LOCALE[data.locale] ?? SUBJECT_BY_LOCALE.en;

  try {
    // 1. Notification to the TrueCalling team
    const teamRes = await resend.emails.send({
      from: `TrueCalling Demo <${from}>`,
      to: [to],
      replyTo: data.email,
      subject: `🚀 Nouvelle demande de démo — ${fullName} (${data.company})`,
      react: NotificationEmail({ data }),
    });
    if (teamRes.error) {
      throw new Error(`team email: ${teamRes.error.message}`);
    }

    // 2. Confirmation to the prospect (in their locale)
    const prospectRes = await resend.emails.send({
      from: `TrueCalling <${from}>`,
      to: [data.email],
      subject: confirmationSubject,
      react: ConfirmationEmail({ data }),
    });
    if (prospectRes.error) {
      // Team email already sent — surface the partial failure but don't fail the
      // whole submission, the lead is in.
      console.warn(
        "[demo-request] confirmation email failed:",
        prospectRes.error.message,
      );
    }

    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[demo-request] failed to send:", msg);
    console.log("[demo-request] LEAD BACKUP:", JSON.stringify(data, null, 2));
    return { success: false, error: "send-failed" };
  }
}
