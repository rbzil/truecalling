"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useTransition } from "react";
import { useT, useLocale } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";
import { submitDemoRequest } from "./actions";

/* ============================================================
   Réservation de démo — /reserver-une-demo
   Form posts to a Server Action that emails team + prospect via Resend.
   ============================================================ */

type Timing = "this-week" | "next-week" | "later";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  teamSize: string;
  hiresPerYear: string;
  timing: Timing;
  message: string;
  honeypot: string;
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}

/* ----- Background ----- */
function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/30 blur-[60px] sm:blur-[120px] animate-blob-1" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/80 blur-[60px] sm:blur-[130px] animate-blob-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgb(var(--bg))_85%)]" />
    </div>
  );
}

function ArrowLeft() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

/* ----- Hero / form section ----- */
function Hero() {
  const [submitted, setSubmitted] = useState<{ firstName: string; email: string } | null>(null);

  return (
    <section className="relative px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Left — form or success */}
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessCard key="success" {...submitted} />
            ) : (
              <FormCard key="form" onDone={(d) => setSubmitted(d)} />
            )}
          </AnimatePresence>
        </div>

        {/* Right — what to expect */}
        <div className="order-1 lg:order-2 lg:pt-6">
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

/* ----- Form card ----- */
function FormCard({ onDone }: { onDone: (d: { firstName: string; email: string }) => void }) {
  const t = useT();
  const { locale } = useLocale();
  const TEAM_SIZES = [t("rd_team_solo"), t("rd_team_2_5"), t("rd_team_5_15"), t("rd_team_15p")];
  const HIRES = [t("rd_hires_lt_10"), t("rd_hires_10_50"), t("rd_hires_50_200"), t("rd_hires_200p")];
  const SLOTS: { key: Timing; label: string }[] = [
    { key: "this-week", label: t("rd_slot_this_week") },
    { key: "next-week", label: t("rd_slot_next_week") },
    { key: "later", label: t("rd_slot_later") },
  ];

  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    teamSize: "",
    hiresPerYear: "",
    timing: "this-week",
    message: "",
    honeypot: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) e.firstName = t("rd_required_short");
    if (!form.lastName.trim()) e.lastName = t("rd_required_short");
    if (!form.email.trim()) e.email = t("rd_required_short");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("rd_email_invalid");
    if (!form.company.trim()) e.company = t("rd_required_short");
    if (!form.teamSize) e.teamSize = t("rd_select_short");
    if (!form.hiresPerYear) e.hiresPerYear = t("rd_select_short");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setServerError(null);
    if (!validate()) {
      setServerError(t("demo_form_error_validation"));
      return;
    }

    const fd = new FormData();
    fd.set("firstName", form.firstName.trim());
    fd.set("lastName", form.lastName.trim());
    fd.set("email", form.email.trim());
    fd.set("phone", form.phone.trim());
    fd.set("jobTitle", form.role.trim());
    fd.set("company", form.company.trim());
    fd.set("teamSize", form.teamSize);
    fd.set("recruitmentsPerYear", form.hiresPerYear);
    fd.set("timing", form.timing);
    fd.set("message", form.message.trim());
    fd.set("honeypot", form.honeypot);
    fd.set("locale", locale);

    startTransition(async () => {
      const res = await submitDemoRequest(fd);
      if (res.success) {
        onDone({ firstName: form.firstName, email: form.email });
      } else if (res.error === "validation") {
        setServerError(t("demo_form_error_validation"));
      } else {
        setServerError(t("demo_form_error_generic"));
      }
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
        <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
        {t("rd_eyebrow")}
      </span>
      <h1
        className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
        style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
      >
        {t("rd_h1")}
      </h1>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
        {t("rd_subtitle")}
      </p>

      <form
        onSubmit={onSubmit}
        noValidate
        className="mt-8 space-y-5 rounded-2xl border border-ink/[0.08] bg-surface/30 p-6 backdrop-blur-md sm:p-7"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label={t("rd_first_name")}
            name="firstName"
            value={form.firstName}
            error={errors.firstName}
            onChange={(v) => set("firstName", v)}
            autoComplete="given-name"
            required
          />
          <Field
            label={t("rd_last_name")}
            name="lastName"
            value={form.lastName}
            error={errors.lastName}
            onChange={(v) => set("lastName", v)}
            autoComplete="family-name"
            required
          />
        </div>

        <Field
          label={t("rd_email")}
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          onChange={(v) => set("email", v)}
          autoComplete="email"
          placeholder={t("rd_email_placeholder")}
          required
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field
            label={t("rd_phone")}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(v) => set("phone", v)}
            autoComplete="tel"
            placeholder={t("rd_phone_placeholder")}
            optional
          />
          <Field
            label={t("rd_role")}
            name="role"
            value={form.role}
            onChange={(v) => set("role", v)}
            placeholder={t("rd_role_placeholder")}
            optional
          />
        </div>

        <Field
          label={t("rd_company")}
          name="company"
          value={form.company}
          error={errors.company}
          onChange={(v) => set("company", v)}
          autoComplete="organization"
          required
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <SelectField
            label={t("rd_team_size")}
            options={TEAM_SIZES}
            value={form.teamSize}
            error={errors.teamSize}
            onChange={(v) => set("teamSize", v)}
            required
          />
          <SelectField
            label={t("rd_hires_per_year")}
            options={HIRES}
            value={form.hiresPerYear}
            error={errors.hiresPerYear}
            onChange={(v) => set("hiresPerYear", v)}
            required
          />
        </div>

        <div>
          <Label>{t("rd_when_label")}</Label>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {SLOTS.map((s) => (
              <button
                key={s.key}
                type="button"
                onClick={() => set("timing", s.key)}
                className={`relative rounded-lg border px-3 py-2.5 text-[13px] font-medium transition-colors cursor-pointer ${
                  form.timing === s.key
                    ? "border-accent/60 bg-accent/10 text-ink"
                    : "border-ink/10 bg-ink/[0.02] text-ink-muted hover:text-ink"
                }`}
              >
                {form.timing === s.key && (
                  <motion.span
                    layoutId="slot-pill"
                    className="absolute inset-0 rounded-lg ring-1 ring-accent/60"
                    transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  />
                )}
                <span className="relative">{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label>
            {t("rd_share_label")} <span className="text-ink-muted/70">{t("rd_optional")}</span>
          </Label>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            rows={3}
            placeholder={t("rd_message_placeholder")}
            className="mt-2 w-full resize-none rounded-lg border border-ink/10 bg-ink/[0.02] px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-muted/60 focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
          />
        </div>

        {/* Honeypot — must stay empty. Hidden from users + assistive tech. */}
        <input
          type="text"
          name="honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          value={form.honeypot}
          onChange={(e) => set("honeypot", e.target.value)}
          className="absolute left-[-9999px] top-[-9999px] h-0 w-0 opacity-0"
        />

        {serverError && (
          <div
            role="alert"
            className="rounded-lg border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-[13px] text-rose-300"
          >
            {serverError}
          </div>
        )}

        <div className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11.5px] text-ink-muted/80">
            {t("rd_consent")}
          </p>
          <SubmitButton submitting={isPending} />
        </div>
      </form>
    </motion.div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  autoComplete,
  required,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean;
  optional?: boolean;
}) {
  const t = useT();
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
        {optional && <span className="ml-1 text-ink-muted/70">{t("rd_optional")}</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={!!error}
        className={`mt-2 h-11 w-full rounded-lg border bg-ink/[0.02] px-3.5 text-[14px] text-ink placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error
            ? "border-rose-500/60 focus:border-rose-400"
            : "border-ink/10 focus:border-accent/60"
        }`}
      />
      {error && <p className="mt-1.5 text-[11px] text-rose-400">{error}</p>}
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
}) {
  const t = useT();
  const id = `f-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </label>
      <div className="relative mt-2">
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={!!error}
          className={`h-11 w-full appearance-none rounded-lg border bg-ink/[0.02] pl-3.5 pr-9 text-[14px] text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
            error
              ? "border-rose-500/60 focus:border-rose-400"
              : "border-ink/10 focus:border-accent/60"
          } ${value ? "" : "text-ink-muted/60"}`}
        >
          <option value="" disabled>
            {t("rd_choose")}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="bg-bg text-ink">
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </div>
      {error && <p className="mt-1.5 text-[11px] text-rose-400">{error}</p>}
    </div>
  );
}

function SubmitButton({ submitting }: { submitting: boolean }) {
  const t = useT();
  return (
    <motion.button
      type="submit"
      disabled={submitting}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 disabled:cursor-wait disabled:opacity-80 cursor-pointer"
    >
      {submitting ? (
        <>
          <Spinner /> {t("rd_submitting")}
        </>
      ) : (
        <>
          {t("rd_submit")} <ArrowRight />
        </>
      )}
    </motion.button>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" strokeOpacity="0.25" />
      <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ----- Success card ----- */
function SuccessCard({ firstName, email }: { firstName: string; email: string }) {
  const t = useT();
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-2xl border border-emerald-400/20 bg-surface/40 p-8 backdrop-blur-md sm:p-10"
    >
      <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-400/40">
        <motion.svg
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10B981"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <motion.polyline points="4 12 10 18 20 6" />
        </motion.svg>
      </div>
      <h2
        className="mt-6 font-semibold leading-tight tracking-tighter2"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
      >
        {t("rd_success_thanks").replace("{name}", firstName)}
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted">
        {t("rd_success_msg_a")}{" "}
        <span className="text-ink">{t("rd_success_business_hours")}</span>{" "}
        {t("rd_success_msg_b")}{" "}
        <span className="text-ink">{email}</span>{t("rd_success_msg_c")}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/15 bg-ink/[0.04] px-5 text-[14px] font-medium text-ink transition-colors hover:bg-ink/[0.08] cursor-pointer"
        >
          <ArrowLeft /> {t("rd_back_home")}
        </Link>
        <Link
          href="/#demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          {t("rd_replay_demo")}
        </Link>
      </div>
    </motion.div>
  );
}

/* ----- Right column ----- */
function SidePanel() {
  const t = useT();
  const points = [
    { title: t("rd_p1_title"), desc: t("rd_p1_desc") },
    { title: t("rd_p2_title"), desc: t("rd_p2_desc") },
    { title: t("rd_p3_title"), desc: t("rd_p3_desc") },
    { title: t("rd_p4_title"), desc: t("rd_p4_desc") },
  ];
  return (
    <div className="rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-7 backdrop-blur-md">
      <span className="text-[11px] uppercase tracking-[0.22em] text-accent">{t("rd_program")}</span>
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tighter2 sm:text-[28px]">
        {t("rd_program_h2")}
      </h2>

      <ul className="mt-6 space-y-5">
        {points.map((p, i) => (
          <li key={p.title} className="flex gap-3.5">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-[11px] font-bold text-accent ring-1 ring-accent/30">
              {i + 1}
            </span>
            <div>
              <div className="text-[14px] font-medium text-ink">{p.title}</div>
              <p className="mt-1 text-[13px] leading-relaxed text-ink-muted">{p.desc}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-7 rounded-xl border border-ink/[0.06] bg-bg/40 p-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-[12px] font-bold text-white">
            CD
          </div>
          <div className="min-w-0">
            <div className="truncate text-[13px] font-medium text-ink">Camille Dupont</div>
            <div className="truncate text-[11px] text-ink-muted">{t("rd_quote_role")}</div>
          </div>
        </div>
        <p className="mt-3 text-[13px] leading-relaxed text-ink/85">
          {t("rd_quote")}
        </p>
      </div>
    </div>
  );
}

/* ----- Footer ----- */
function Footer() {
  const t = useT();
  return (
    <footer className="relative border-t border-ink/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-muted sm:flex-row sm:px-8">
        <span>{t("footer_copyright")}</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">
            {t("rd_footer_home")}
          </Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink cursor-pointer">
            {t("nav_pricing")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
