"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* ----- Animation primitives ----- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};
const slideRight: Variants = {
  hidden: { opacity: 0, x: 16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/* ============================================================
   Contact — /contact
   Lighter form than /reserver-une-demo: name, email, subject, message.
   ============================================================ */

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const SUBJECTS = [
  "Question produit",
  "Tarification",
  "Partenariat",
  "Presse",
  "Autre",
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <SiteNav />
      <Section />
      <Footer />
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/30 blur-[60px] sm:blur-[120px] animate-blob-1" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/80 blur-[60px] sm:blur-[130px] animate-blob-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,#0A1628_85%)]" />
    </div>
  );
}

function SiteNav() {
  return (
    <header className="relative z-10 flex h-16 items-center justify-between px-5 sm:px-8">
      <Link href="/" aria-label="Retour à l'accueil" className="cursor-pointer">
        <Logo />
      </Link>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink cursor-pointer"
      >
        <ArrowLeft /> Retour
      </Link>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#E91E8C" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 22 C 3.5 11, 8 4, 16 4 C 24 4, 28.5 11, 28.5 22" />
        <path d="M6.5 24 C 6.5 13, 10 7, 16 7 C 22 7, 25.5 13, 25.5 24" />
        <path d="M9.5 26 C 9.5 15, 12 10, 16 10 C 20 10, 22.5 15, 22.5 26" />
        <path d="M12.5 27 C 12.5 17, 14 13, 16 13 C 18 13, 19.5 17, 19.5 27" />
        <path d="M16.5 27 L 16.5 19 C 16.5 17, 14.8 16, 13.7 17 C 12.6 18, 13 20, 14.5 20 L 16 20" />
      </svg>
      <span className="text-[16px] font-bold uppercase tracking-[0.04em] text-ink">
        TrueCalling
      </span>
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

function Section() {
  const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);

  return (
    <section className="relative px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="order-2 lg:order-1">
          <AnimatePresence mode="wait">
            {submitted ? (
              <SuccessCard key="success" {...submitted} />
            ) : (
              <FormCard key="form" onDone={(d) => setSubmitted(d)} />
            )}
          </AnimatePresence>
        </div>
        <div className="order-1 lg:order-2 lg:pt-6">
          <SidePanel />
        </div>
      </div>
    </section>
  );
}

function FormCard({ onDone }: { onDone: (d: { name: string; email: string }) => void }) {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: SUBJECTS[0],
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((s) => ({ ...s, [k]: v }));

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) e.name = "Requis";
    if (!form.email.trim()) e.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (!form.message.trim()) e.message = "Requis";
    else if (form.message.trim().length < 10) e.message = "Au moins 10 caractères";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    onDone({ name: form.name, email: form.email });
  };

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, y: -8 }}
    >
      <motion.span
        variants={fadeUp}
        className="relative inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md"
      >
        <span className="relative flex size-1.5">
          <motion.span
            className="absolute inline-flex h-full w-full rounded-full bg-accent"
            animate={{ scale: [1, 1.6, 1], opacity: [0.55, 0, 0.55] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <span className="relative inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
        </span>
        Contact
        <FloatingSparkle delay={0.2} className="-right-3 -top-2" />
        <FloatingSparkle delay={0.9} className="-right-1 top-3 size-[3px]" />
      </motion.span>

      <motion.h1
        variants={fadeUp}
        className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
        style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
      >
        Une question&nbsp;? Parlons-en.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
      >
        Notre équipe répond sous 24 heures ouvrées. Pour une démo guidée,{" "}
        <Link href="/reserver-une-demo" className="text-accent underline-offset-4 hover:underline">
          réservez plutôt un créneau
        </Link>
        .
      </motion.p>

      <motion.form
        variants={fadeUp}
        onSubmit={onSubmit}
        noValidate
        className="mt-8 space-y-5 rounded-2xl border border-white/[0.08] bg-surface/30 p-6 backdrop-blur-md sm:p-7"
      >
        <motion.div variants={stagger} initial="hidden" animate="show" className="space-y-5">
          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field
              label="Nom complet"
              name="name"
              value={form.name}
              error={errors.name}
              onChange={(v) => set("name", v)}
              autoComplete="name"
              required
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              error={errors.email}
              onChange={(v) => set("email", v)}
              autoComplete="email"
              placeholder="vous@entreprise.com"
              required
            />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Label>Sujet</Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {SUBJECTS.map((s, i) => (
                <motion.button
                  key={s}
                  type="button"
                  onClick={() => set("subject", s)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 + i * 0.05, duration: 0.4 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative rounded-full border px-3.5 py-1.5 text-[12.5px] font-medium transition-colors cursor-pointer ${
                    form.subject === s
                      ? "border-accent/60 bg-accent/10 text-ink"
                      : "border-white/10 bg-white/[0.02] text-ink-muted hover:text-ink"
                  }`}
                >
                  {form.subject === s && (
                    <motion.span
                      layoutId="subject-pill"
                      className="absolute inset-0 rounded-full ring-1 ring-accent/60"
                      transition={{ type: "spring", stiffness: 320, damping: 26 }}
                    />
                  )}
                  <span className="relative">{s}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Label>
              Message <span className="text-accent">*</span>
            </Label>
            <textarea
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              rows={5}
              placeholder="Votre besoin, votre contexte, votre stack…"
              aria-invalid={!!errors.message}
              className={`mt-2 w-full resize-none rounded-lg border bg-white/[0.02] px-3.5 py-2.5 text-[14px] text-ink placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
                errors.message
                  ? "border-rose-500/60 focus:border-rose-400"
                  : "border-white/10 focus:border-accent/60"
              }`}
            />
            {errors.message && <p className="mt-1.5 text-[11px] text-rose-400">{errors.message}</p>}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-stretch gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[11.5px] text-ink-muted/80">
              Vos données ne sont jamais revendues.
            </p>
            <SubmitButton submitting={submitting} />
          </motion.div>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}

/* ----- Floating sparkle decoration ----- */
function FloatingSparkle({ delay = 0, className }: { delay?: number; className?: string }) {
  return (
    <motion.span
      aria-hidden
      animate={{ y: [-2, -6, -2], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      className={`pointer-events-none absolute size-[5px] rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)] ${className ?? ""}`}
    />
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
}) {
  const id = `f-${name}`;
  return (
    <div>
      <label htmlFor={id} className="block text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
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
        className={`mt-2 h-11 w-full rounded-lg border bg-white/[0.02] px-3.5 text-[14px] text-ink placeholder:text-ink-muted/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 ${
          error
            ? "border-rose-500/60 focus:border-rose-400"
            : "border-white/10 focus:border-accent/60"
        }`}
      />
      {error && <p className="mt-1.5 text-[11px] text-rose-400">{error}</p>}
    </div>
  );
}

function SubmitButton({ submitting }: { submitting: boolean }) {
  return (
    <motion.button
      type="submit"
      disabled={submitting}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-accent px-7 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 disabled:cursor-wait disabled:opacity-80 cursor-pointer"
    >
      {/* Shimmer sweep */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{ x: ["0%", "300%"] }}
        transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 1.6, ease: "easeInOut" }}
      />
      <span className="relative inline-flex items-center gap-2">
        {submitting ? (
          <>
            <Spinner /> Envoi…
          </>
        ) : (
          <>
            Envoyer le message
            <motion.span
              className="inline-flex"
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight />
            </motion.span>
          </>
        )}
      </span>
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

function SuccessCard({ name, email }: { name: string; email: string }) {
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
          width="26" height="26" viewBox="0 0 24 24" fill="none"
          stroke="#10B981" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"
          aria-hidden="true"
        >
          <motion.polyline points="4 12 10 18 20 6" />
        </motion.svg>
      </div>
      <h2
        className="mt-6 font-semibold leading-tight tracking-tighter2"
        style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
      >
        Message envoyé, {name}.
      </h2>
      <p className="mt-3 max-w-md text-base leading-relaxed text-ink-muted">
        Nous vous répondons sous{" "}
        <span className="text-ink">24 heures ouvrées</span> à{" "}
        <span className="text-ink">{email}</span>.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-[14px] font-medium text-ink transition-colors hover:bg-white/[0.08] cursor-pointer"
        >
          <ArrowLeft /> Retour à l'accueil
        </Link>
        <Link
          href="/reserver-une-demo"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
        >
          Réserver une démo <ArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}

function SidePanel() {
  const channels = [
    {
      icon: <MailIcon />,
      label: "Email direct",
      value: "hello@truecalling.ai",
      href: "mailto:hello@truecalling.ai",
    },
    {
      icon: <SalesIcon />,
      label: "Ventes",
      value: "sales@truecalling.ai",
      href: "mailto:sales@truecalling.ai",
    },
    {
      icon: <SupportIcon />,
      label: "Support clients",
      value: "support@truecalling.ai",
      href: "mailto:support@truecalling.ai",
    },
  ];
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="show"
      className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 backdrop-blur-md"
    >
      {/* Soft ambient blob behind the panel */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.span
        variants={slideRight}
        className="relative text-[11px] uppercase tracking-[0.22em] text-accent"
      >
        Autres canaux
      </motion.span>
      <motion.h2
        variants={slideRight}
        className="relative mt-3 text-2xl font-semibold leading-tight tracking-tighter2 sm:text-[28px]"
      >
        Plusieurs façons de nous joindre.
      </motion.h2>

      <motion.ul variants={stagger} className="relative mt-6 space-y-3">
        {channels.map((c) => (
          <motion.li key={c.label} variants={slideRight}>
            <motion.a
              href={c.href}
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group flex items-center gap-3.5 rounded-xl border border-white/[0.06] bg-bg/40 p-4 transition-colors hover:border-accent/40 hover:bg-bg/60 cursor-pointer"
            >
              <motion.span
                whileHover={{ rotate: -6, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="flex size-9 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-accent/30 group-hover:bg-accent/20"
              >
                {c.icon}
              </motion.span>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                  {c.label}
                </div>
                <div className="truncate text-[14px] font-medium text-ink group-hover:text-accent">
                  {c.value}
                </div>
              </div>
              <motion.span
                className="text-ink-muted/70 group-hover:text-accent"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight />
              </motion.span>
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div variants={slideRight} className="relative mt-6 grid grid-cols-2 gap-3">
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="rounded-xl border border-white/[0.06] bg-bg/40 p-4"
        >
          <div className="text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">Réponse</div>
          <div className="mt-1 text-[14px] font-semibold text-ink">&lt; 24 h ouvrées</div>
        </motion.div>
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="rounded-xl border border-white/[0.06] bg-bg/40 p-4"
        >
          <div className="text-[10.5px] uppercase tracking-[0.14em] text-ink-muted">Bureau</div>
          <div className="mt-1 text-[14px] font-semibold text-ink">Paris · Tel Aviv</div>
        </motion.div>
      </motion.div>

      <motion.div variants={slideRight} className="relative mt-6 flex items-center gap-2">
        {[
          { href: "https://www.instagram.com/truecalling.ai/", label: "Instagram", icon: <InstagramIcon /> },
          { href: "https://www.linkedin.com/company/truecalling-ai/", label: "LinkedIn", icon: <LinkedInIcon /> },
          { href: "https://x.com/TruecallinAI", label: "X / Twitter", icon: <XIcon /> },
        ].map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            whileHover={{ y: -2, scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-muted sm:flex-row sm:px-8">
        <span>© 2026 TrueCalling. Tous droits réservés.</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">Accueil</Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink cursor-pointer">Tarifs</Link>
          <Link href="/reserver-une-demo" className="transition-colors hover:text-ink cursor-pointer">Démo</Link>
        </div>
      </div>
    </footer>
  );
}

/* ----- Icons ----- */
function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
function SalesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function SupportIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-1.05 4.06A8.5 8.5 0 0 1 12 20a8.4 8.4 0 0 1-4.06-1.05L3 20l1.05-4.94A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}
function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22zM8 8h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.31h-4.56v-7.37c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.9V23H8z" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.55 8.63L23 22h-6.84l-5.36-7.02L4.66 22H1.4l8.07-9.22L1 2h7.01l4.84 6.4L18.244 2zm-2.4 18h1.94L7.27 4H5.21l10.633 16z" />
    </svg>
  );
}
