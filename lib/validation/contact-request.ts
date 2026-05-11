import { z } from "zod";

/* ============================================================
   Contact form — POST /api/contact payload schema.
   The form is lighter than /book-a-demo: name, email, subject,
   message + the locale (passed from the client so the auto-reply
   is sent in the visitor's language).
   ============================================================ */

export const contactRequestSchema = z.object({
  name: z.string().min(1, "Required").max(150),
  email: z.string().email("Invalid email").max(200),
  subject: z.string().min(1, "Required").max(200),
  message: z.string().min(10, "Too short").max(4000),
  // Honeypot anti-spam: hidden field that must stay empty.
  honeypot: z.string().max(0).optional().or(z.literal("")),
  locale: z.string().min(2).max(10),
});

export type ContactRequestData = z.infer<typeof contactRequestSchema>;
