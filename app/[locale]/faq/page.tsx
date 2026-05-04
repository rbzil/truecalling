"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useT } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";

/* ============================================================
   FAQ — /faq
   Semantic HTML accordion (button + aria-expanded + region)
   + JSON-LD FAQPage schema for rich results.
   ============================================================ */

/* ----- Animation primitives ----- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};
const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <FAQJsonLd />
      <BackgroundDecor />
      <Navbar />
      <FAQSection />
      <Footer />
    </main>
  );
}

/* ----- JSON-LD (locale-aware via t()) ----- */
function FAQJsonLd() {
  const t = useT();
  const items = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
    { q: t("faq_q6"), a: t("faq_a6") },
  ];
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
    />
  );
}

/* ----- Background ----- */
function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/30 blur-[60px] sm:blur-[120px] animate-blob-1" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-violet-300/40 dark:bg-surface/80 blur-[60px] sm:blur-[130px] animate-blob-2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgb(var(--bg))_85%)]" />
    </div>
  );
}

/* ----- FAQ section ----- */
function FAQSection() {
  const t = useT();
  const items = [
    { q: t("faq_q1"), a: t("faq_a1") },
    { q: t("faq_q2"), a: t("faq_a2") },
    { q: t("faq_q3"), a: t("faq_a3") },
    { q: t("faq_q4"), a: t("faq_a4") },
    { q: t("faq_q5"), a: t("faq_a5") },
    { q: t("faq_q6"), a: t("faq_a6") },
  ];

  return (
    <section
      aria-labelledby="faq-heading"
      className="relative px-5 pb-24 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
            {t("nav_faq")}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            id="faq-heading"
            className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            {t("faq_h1")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {t("faq_subtitle_a")}{" "}
            <Link
              href="/contact"
              className="text-accent underline-offset-4 hover:underline"
            >
              {t("faq_subtitle_link")}
            </Link>
            .
          </motion.p>

          <motion.ul
            variants={stagger}
            role="list"
            className="mt-10 divide-y divide-ink/[0.06] rounded-2xl border border-ink/[0.08] bg-surface/30 backdrop-blur-md"
          >
            {items.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-start gap-3 rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="text-[14px] font-semibold text-ink">{t("faq_cta_box_title")}</div>
              <p className="mt-1 text-[13px] text-ink-muted">
                {t("faq_cta_box_desc")}
              </p>
            </div>
            <Link
              href="/reserver-une-demo"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
            >
              {t("cta_book_demo")}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ----- Accordion item — accessible disclosure pattern ----- */
function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-trigger-${index}`;

  return (
    <motion.li variants={fadeUp} className="group">
      <h2 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-ink/[0.02] focus:outline-none focus-visible:bg-ink/[0.03] cursor-pointer"
        >
          <span className="text-[15px] font-medium leading-snug text-ink sm:text-base">
            {q}
          </span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
            className={`flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
              open
                ? "border-accent/60 bg-accent/15 text-accent"
                : "border-ink/15 bg-ink/[0.03] text-ink-muted group-hover:text-ink"
            }`}
          >
            <PlusIcon />
          </motion.span>
        </button>
      </h2>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 pr-14 text-[14px] leading-relaxed text-ink-muted sm:text-[14.5px]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

function PlusIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
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
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">{t("rd_footer_home")}</Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink cursor-pointer">{t("nav_pricing")}</Link>
          <Link href="/contact" className="transition-colors hover:text-ink cursor-pointer">{t("nav_contact")}</Link>
        </div>
      </div>
    </footer>
  );
}
