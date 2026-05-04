"use client";

import { motion, AnimatePresence, type Variants } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

/* ============================================================
   FAQ — /faq
   Semantic HTML accordion (button + aria-expanded + region)
   + JSON-LD FAQPage schema for rich results.
   ============================================================ */

const FAQ: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce que TrueCalling et à quoi sert ce logiciel de sourcing IA ?",
    a: "TrueCalling est un logiciel de sourcing IA conçu pour les équipes Talent Acquisition et les cabinets de recrutement. La plateforme combine un copilote IA (EMILY), un score de matching candidat (TrueFit 360) et un outreach multicanal (WhatsApp, email, téléphone) pour transformer un brief en candidats qualifiés en quelques minutes — sans changer d'outil.",
  },
  {
    q: "Comment fonctionne le sourcing par IA chez TrueCalling ?",
    a: "Vous décrivez le poste en langage naturel. EMILY, notre copilote IA, analyse le brief, interroge les viviers pertinents et applique plus de cent critères (compétences, contexte, soft skills) pour remonter une shortlist classée par score de matching. Le sourcing IA réduit le time-to-hire en ciblant immédiatement les profils les plus pertinents.",
  },
  {
    q: "Sur quels canaux puis-je contacter les candidats — WhatsApp, email, téléphone ?",
    a: "WhatsApp, email et téléphone, depuis la même interface. C'est notre signature : un outreach multicanal où chaque candidat est contacté sur le canal où il a le plus de chances de répondre. WhatsApp atteint 98 % de taux d'ouverture vs 20 % pour l'email — d'où sa place centrale chez TrueCalling. Les messages sont pré-rédigés selon le profil et le poste, et le suivi est automatisé.",
  },
  {
    q: "TrueCalling s'intègre-t-il à mon ATS (Lever, Greenhouse, Recruitee, Teamtailor, Workable) ?",
    a: "Oui. Le plan Core inclut une intégration ATS et le plan Enterprise en propose un nombre illimité. Les candidats sourcés et leurs interactions se synchronisent automatiquement avec votre pipeline existant — TrueCalling vient enrichir votre ATS, pas le remplacer.",
  },
  {
    q: "Quel est le prix d'un logiciel de sourcing IA comme TrueCalling et y a-t-il un essai ?",
    a: "Le plan Starter démarre à 595 $ par utilisateur et par mois, sans engagement et sans frais cachés. Le plan Core est à 895 $ et le plan Enterprise est sur devis. Plutôt qu'un essai gratuit en libre-service, nous proposons une démo guidée de 20 minutes pendant laquelle nous travaillons sur l'un de vos postes ouverts en réel.",
  },
  {
    q: "Combien de temps faut-il pour démarrer avec TrueCalling et obtenir des candidats ?",
    a: "Moins de 24 heures entre la signature et le premier brief en production. L'onboarding couvre l'import des fiches de poste, le paramétrage des canaux d'outreach et l'intégration ATS. Un Customer Success est dédié sur le plan Enterprise. La plupart des clients reçoivent leur première shortlist le jour même.",
  },
];

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
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />
      <BackgroundDecor />
      <SiteNav />
      <FAQSection />
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

/* ----- Top nav ----- */
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

/* ----- FAQ section ----- */
function FAQSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative px-5 pb-24 pt-10 sm:px-8 sm:pt-16"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
            FAQ
          </motion.span>

          <motion.h1
            variants={fadeUp}
            id="faq-heading"
            className="mt-5 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Questions fréquentes.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            Tout ce qu'il faut savoir avant de tester TrueCalling. Une question manquante&nbsp;?{" "}
            <Link
              href="/contact"
              className="text-accent underline-offset-4 hover:underline"
            >
              écrivez-nous
            </Link>
            .
          </motion.p>

          <motion.ul
            variants={stagger}
            role="list"
            className="mt-10 divide-y divide-ink/[0.06] rounded-2xl border border-ink/[0.08] bg-surface/30 backdrop-blur-md"
          >
            {FAQ.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-col items-start gap-3 rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-6 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <div className="text-[14px] font-semibold text-ink">Encore une hésitation&nbsp;?</div>
              <p className="mt-1 text-[13px] text-ink-muted">
                20 minutes en démo et vous saurez exactement si TrueCalling vous convient.
              </p>
            </div>
            <Link
              href="/reserver-une-demo"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-accent px-5 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-colors hover:bg-accent/90 cursor-pointer"
            >
              Réserver une démo
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
  return (
    <footer className="relative border-t border-ink/[0.06] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-xs text-ink-muted sm:flex-row sm:px-8">
        <span>© 2026 TrueCalling. Tous droits réservés.</span>
        <div className="flex items-center gap-5">
          <Link href="/" className="transition-colors hover:text-ink cursor-pointer">Accueil</Link>
          <Link href="/#pricing" className="transition-colors hover:text-ink cursor-pointer">Tarifs</Link>
          <Link href="/contact" className="transition-colors hover:text-ink cursor-pointer">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
