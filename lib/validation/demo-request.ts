import { z } from "zod";

export const demoRequestSchema = z.object({
  firstName: z.string().min(1, "Required").max(100),
  lastName: z.string().min(1, "Required").max(100),
  email: z.string().email("Invalid email").max(200),
  phone: z.string().max(50).optional().or(z.literal("")),
  jobTitle: z.string().max(150).optional().or(z.literal("")),
  company: z.string().min(1, "Required").max(200),
  teamSize: z.string().min(1, "Required").max(100),
  recruitmentsPerYear: z.string().min(1, "Required").max(100),
  timing: z.enum(["this-week", "next-week", "later"]),
  message: z.string().max(2000).optional().or(z.literal("")),
  // Honeypot anti-spam: hidden field that must stay empty.
  honeypot: z.string().max(0).optional(),
  locale: z.string().min(2).max(10),
});

export type DemoRequestData = z.infer<typeof demoRequestSchema>;
