"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate as framerAnimate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ============================================================
   True Calling — Landing Page
   Single-file page (sub-components below) per user spec.
   Stack: Next.js 14 App Router + TS + Tailwind + Framer Motion
   ============================================================ */

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <Navbar />
      <Hero />
      <Features />
      <ProductDemo />
      <Pricing />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* ----------------------------------------------------------
   Animation primitives
---------------------------------------------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ----------------------------------------------------------
   Logo — fingerprint mark matching brand PDF (magenta) + wordmark
---------------------------------------------------------- */
function FingerprintMark({ size = 28, color = "#E91E8C" }: { size?: number; color?: string }) {
  const sw = 2.2; // stroke width tuned to logo style
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Outer ridge — open U */}
      <path d="M3.5 22 C 3.5 11, 8 4, 16 4 C 24 4, 28.5 11, 28.5 22" />
      {/* 2nd ridge */}
      <path d="M6.5 24 C 6.5 13, 10 7, 16 7 C 22 7, 25.5 13, 25.5 24" />
      {/* 3rd ridge */}
      <path d="M9.5 26 C 9.5 15, 12 10, 16 10 C 20 10, 22.5 15, 22.5 26" />
      {/* 4th ridge */}
      <path d="M12.5 27 C 12.5 17, 14 13, 16 13 C 18 13, 19.5 17, 19.5 27" />
      {/* Central loop — small "9" curl */}
      <path d="M16.5 27 L 16.5 19 C 16.5 17, 14.8 16, 13.7 17 C 12.6 18, 13 20, 14.5 20 L 16 20" />
      {/* Side accents (broken ridges feel) */}
      <path d="M3.8 25.5 C 4.1 24, 4.4 22.5, 4.7 21.2" />
      <path d="M28.2 25.5 C 27.9 24, 27.6 22.5, 27.3 21.2" />
    </svg>
  );
}

function Logo({
  variant = "light",
  showTagline = false,
  className,
  size = 26,
}: {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: number;
}) {
  const wordColor = variant === "light" ? "#FFFFFF" : "#0A1628";
  const taglineColor = variant === "light" ? "rgba(255,255,255,0.55)" : "rgba(10,22,40,0.7)";
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <FingerprintMark size={size} color="#E91E8C" />
      <div className="flex flex-col leading-none">
        <span
          className="font-bold uppercase tracking-[0.06em]"
          style={{ color: wordColor, fontSize: size * 0.62, letterSpacing: "0.04em" }}
        >
          True Calling
        </span>
        {showTagline && (
          <span
            className="mt-1 text-[9px] uppercase tracking-[0.28em]"
            style={{ color: taglineColor }}
          >
            Hire with precision
          </span>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   NAVBAR
---------------------------------------------------------- */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Démo", href: "#demo" },
    { label: "Tarifs", href: "#pricing" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-white/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" aria-label="True Calling — accueil" className="cursor-pointer">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-muted transition-colors hover:text-ink cursor-pointer"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden text-sm text-ink-muted transition-colors hover:text-ink sm:inline-block cursor-pointer"
          >
            Se connecter
          </a>
          <CTAButton href="#demo" size="sm">
            Réserver une démo
          </CTAButton>
        </div>
      </div>
    </header>
  );
}

/* ----------------------------------------------------------
   Buttons
---------------------------------------------------------- */
function CTAButton({
  children,
  href,
  size = "md",
  variant = "primary",
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "white";
  onClick?: () => void;
  className?: string;
}) {
  const sizeCls =
    size === "sm"
      ? "h-9 px-4 text-sm"
      : size === "lg"
      ? "h-14 px-8 text-base"
      : "h-12 px-6 text-[15px]";

  const variantCls =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90 shadow-[0_8px_30px_rgba(233,30,140,0.35)]"
      : variant === "outline"
      ? "bg-transparent border border-white/15 text-ink hover:bg-white/[0.04]"
      : "bg-white text-bg hover:bg-white/90";

  const Inner = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tighter2 transition-colors cursor-pointer ${sizeCls} ${variantCls} ${
        className ?? ""
      }`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} aria-label={typeof children === "string" ? children : undefined}>
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} type="button">
      {Inner}
    </button>
  );
}

/* ----------------------------------------------------------
   HERO — Aurora gradient + H1 + subtitle + CTAs
---------------------------------------------------------- */
function Hero() {
  // Variantes alternatives de H1 (gardées en commentaire pour A/B):
  // "Recrutez sans chasser."
  // "L'IA trouve. Vous choisissez. Ils répondent."
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24">
      <AuroraBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 py-16">
        <Reveal className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-ink-muted backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(233,30,140,0.8)]" />
            Sourcing IA pour équipes recrutement
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance font-semibold leading-[1.02] tracking-tighter2"
            style={{ fontSize: "clamp(3rem, 6.5vw, 5.5rem)" }}
          >
            Le bon candidat.{" "}
            <span className="text-ink-muted">Au bon moment.</span>
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              Sur le bon canal.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            True Calling combine sourcing IA, matching intelligent et outreach multi-canal pour
            transformer le recrutement en conversations qui aboutissent.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <CTAButton href="#pricing" size="lg">
              Réserver une démo
            </CTAButton>
            <CTAButton href="#demo" size="lg" variant="outline">
              <PlayIcon /> Voir la démo produit
            </CTAButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col items-center gap-4 text-xs uppercase tracking-[0.2em] text-ink-muted/70"
          >
            <span>Utilisé par des équipes recrutement de</span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
              {["Lattice", "Notion", "Alan", "Doctolib", "Qonto", "Spendesk"].map((c) => (
                <span key={c} className="text-sm font-semibold tracking-normal text-white/55">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      {/* Blob 1 — magenta */}
      <div
        aria-hidden
        className="absolute left-[10%] top-[10%] size-[60vw] max-w-[820px] rounded-full bg-accent/40 blur-[60px] sm:blur-[110px] animate-blob-1"
      />
      {/* Blob 2 — navy surface */}
      <div
        aria-hidden
        className="absolute right-[5%] top-[35%] size-[55vw] max-w-[740px] rounded-full bg-surface/70 blur-[60px] sm:blur-[120px] animate-blob-2"
      />
      {/* Blob 3 — soft accent low */}
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-[30%] size-[50vw] max-w-[680px] rounded-full bg-accent/25 blur-[70px] sm:blur-[140px] animate-blob-1"
        style={{ animationDelay: "-8s" }}
      />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#0A1628_85%)]" />
      {/* Noise / grid feel */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
    </div>
  );
}

/* ----------------------------------------------------------
   Icônes (inline SVG — pas d'emoji)
---------------------------------------------------------- */
function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}
function SparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}
function ChannelsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 11.5a8.4 8.4 0 0 1-1.05 4.06A8.5 8.5 0 0 1 12 20a8.4 8.4 0 0 1-4.06-1.05L3 20l1.05-4.94A8.5 8.5 0 1 1 21 11.5z" />
    </svg>
  );
}
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="4 12 10 18 20 6" />
    </svg>
  );
}

/* ----------------------------------------------------------
   FEATURES — 3 cards
---------------------------------------------------------- */
function Features() {
  const features = [
    {
      icon: <SparkleIcon />,
      title: "Sourcing piloté par EMILY™",
      desc: "Notre IA copilote analyse vos briefs, sonde les bons viviers et remonte les profils qui matchent vraiment. Vous arrêtez de chercher, vous commencez à choisir.",
    },
    {
      icon: <TargetIcon />,
      title: "Matching TrueFit 360",
      desc: "Au-delà du CV : compétences, contexte, soft skills. Chaque candidat reçoit un score de compatibilité avec votre poste, basé sur ce qui compte vraiment pour réussir.",
    },
    {
      icon: <ChannelsIcon />,
      title: "Outreach multi-canal",
      desc: "WhatsApp, email, téléphone — atteignez chaque candidat sur le canal où il répond. Messages pré-rédigés, suivi automatisé, taux de réponse multiplié.",
    },
  ];

  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 max-w-2xl">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            Plateforme
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Trois piliers pour recruter sans friction.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 text-lg text-ink-muted">
            Conçu pour les équipes qui veulent passer moins de temps à chercher et plus de temps à
            convaincre.
          </motion.p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-surface/40 p-7 backdrop-blur-md transition-shadow hover:shadow-[0_0_0_1px_rgba(233,30,140,0.35),0_20px_60px_-20px_rgba(233,30,140,0.35)]"
            >
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at var(--x,50%) var(--y,0%), rgba(233,30,140,0.18), transparent 40%)",
                }}
              />
              <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-accent/30">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold tracking-tighter2">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{f.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   PRODUCT DEMO — animated 4-step mockup styled after the real app
---------------------------------------------------------- */
type Candidate = {
  rank: number;
  initials: string;
  name: string;
  role: string;
  company: string;
  city: string;
  years: number;
  score: number;
  matched: string[];
  missing: string[];
  avatar: string;
};

const CANDIDATES: Candidate[] = [
  {
    rank: 1, initials: "MD", name: "M. Dubois", role: "Senior Product Designer",
    company: "Doctolib", city: "Paris", years: 7.2, score: 96,
    matched: ["Figma", "Design Systems", "User Research", "Prototyping"],
    missing: [],
    avatar: "from-pink-500 to-fuchsia-600",
  },
  {
    rank: 2, initials: "SK", name: "S. Klein", role: "Lead Product Designer",
    company: "Alan", city: "Remote FR", years: 5.8, score: 92,
    matched: ["Figma", "Design Systems", "User Research", "Prototyping"],
    missing: ["Motion"],
    avatar: "from-violet-500 to-indigo-600",
  },
  {
    rank: 3, initials: "LP", name: "L. Petit", role: "Senior UX Designer",
    company: "Qonto", city: "Lyon", years: 6.4, score: 88,
    matched: ["Figma", "User Research", "Prototyping"],
    missing: ["Design Systems"],
    avatar: "from-cyan-500 to-blue-600",
  },
  {
    rank: 4, initials: "AB", name: "A. Bernard", role: "Product Designer",
    company: "Spendesk", city: "Bordeaux", years: 4.1, score: 85,
    matched: ["Figma", "Design Systems", "Prototyping"],
    missing: ["Accessibility"],
    avatar: "from-amber-500 to-orange-600",
  },
];

const BRIEF_TITLE = "Senior Product Designer";

const WHATSAPP_MSG =
  "Bonjour M., je vous contacte au sujet d'un poste de Senior Product Designer chez [Client]. Votre profil correspond très précisément à ce qu'ils cherchent — auriez-vous 15 min cette semaine pour en discuter ?";

function ProductDemo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0); // 0..3
  const [runId, setRunId] = useState(0); // bumps to restart

  // Step machine — disabled when user prefers reduced motion (jumps to final state)
  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setStep(3);
      return;
    }
    setStep(0);
    const t1 = setTimeout(() => setStep(1), 3000);
    const t2 = setTimeout(() => setStep(2), 7000);
    const t3 = setTimeout(() => setStep(3), 10000);
    const t4 = setTimeout(() => setRunId((r) => r + 1), 13000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [inView, runId, reduced]);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative py-28 sm:py-36 border-t border-white/[0.06]"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            Démo produit
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Voyez True Calling en action.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            Du brief au candidat qui répond, en moins d'une minute.
          </motion.p>
        </Reveal>

        <div className="relative mx-auto max-w-5xl">
          <BrowserChrome>
            <DemoStage step={step} runId={runId} />
          </BrowserChrome>

          <div className="mt-6 flex items-center justify-center gap-3">
            <StepDots step={step} />
            <button
              onClick={() => setRunId((r) => r + 1)}
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-ink-muted transition-colors hover:bg-white/[0.06] hover:text-ink cursor-pointer"
              aria-label="Rejouer la démo"
            >
              <ReplayIcon /> Rejouer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReplayIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="1 4 1 10 7 10" />
      <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
    </svg>
  );
}

function StepDots({ step }: { step: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {[0, 1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === step ? "w-8 bg-accent" : "w-1.5 bg-white/15"
          }`}
        />
      ))}
    </div>
  );
}

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0E1F37] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-bg/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-4 flex h-6 flex-1 items-center justify-center rounded-md bg-white/[0.04] px-3 text-[11px] text-ink-muted">
          app.truecalling.app/advanced-search
        </div>
      </div>
      <div className="relative aspect-[16/10] w-full bg-[#F7F8FA]">
        {children}
      </div>
    </div>
  );
}

function DemoStage({ step, runId }: { step: number; runId: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#F7F8FA] text-slate-900">
      <DemoSidebar step={step} />

      <div className="absolute inset-y-0 left-[58px] right-0 flex flex-col">
        <DemoTopBar />
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <BriefModal key={`brief-${runId}`} />
            ) : (
              <ResultsView key={`results-${runId}`} step={step} runId={runId} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 2 && (
              <WhatsAppOverlay key={`wa-${runId}`} runId={runId} showResponse={step >= 3} />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 3 && <ResponseToast key={`toast-${runId}`} />}
          </AnimatePresence>
        </div>
      </div>

      <EmilyFAB />
    </div>
  );
}

/* ----- Sidebar (mini) ----- */
function DemoSidebar({ step }: { step: number }) {
  const items: { id: string; icon: React.ReactNode; active: boolean }[] = [
    { id: "workspace", icon: <NavDashIcon />, active: false },
    { id: "jobs", icon: <NavDocIcon />, active: step === 0 },
    { id: "candidates", icon: <NavUsersIcon />, active: false },
    { id: "search", icon: <NavSearchIcon />, active: step >= 1 },
    { id: "follow", icon: <NavBellIcon />, active: false },
    { id: "settings", icon: <NavGearIcon />, active: false },
  ];
  return (
    <aside className="absolute inset-y-0 left-0 flex w-[58px] flex-col items-center gap-1 border-r border-slate-200 bg-white py-3">
      <div className="mb-2">
        <FingerprintMark size={22} color="#E91E8C" />
      </div>
      {items.map((it) => (
        <div
          key={it.id}
          className={`flex size-9 items-center justify-center rounded-lg transition-colors ${
            it.active
              ? "bg-pink-50 text-accent ring-1 ring-pink-100"
              : "text-slate-400"
          }`}
        >
          {it.icon}
        </div>
      ))}
    </aside>
  );
}

/* ----- Top bar ----- */
function DemoTopBar() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-2.5">
      <div className="flex items-center gap-2 text-[12px]">
        <span className="font-semibold text-slate-900">TrueCalling</span>
        <span className="text-slate-300">·</span>
        <span className="text-slate-500">{BRIEF_TITLE}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[10.5px] text-slate-600">
          English
        </span>
        <div className="flex size-7 items-center justify-center rounded-full bg-accent text-[10.5px] font-semibold text-white">
          R
        </div>
      </div>
    </div>
  );
}

/* ----- Step 0: New position modal ----- */
function BriefModal() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(BRIEF_TITLE.slice(0, i));
      if (i >= BRIEF_TITLE.length) clearInterval(id);
    }, 60);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="absolute inset-0 flex items-center justify-center bg-slate-900/15 px-4 backdrop-blur-[1px]"
    >
      <motion.div
        initial={{ scale: 0.96, y: 8 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 8 }}
        transition={{ type: "spring", stiffness: 240, damping: 24 }}
        className="w-full max-w-[560px] overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.3),0_8px_24px_-8px_rgba(15,23,42,0.15)] ring-1 ring-slate-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <h3 className="text-[15px] font-semibold tracking-tight text-slate-900">New position</h3>
          <span className="text-[16px] leading-none text-slate-400">×</span>
        </div>
        {/* Tabs */}
        <div className="flex items-center gap-5 border-b border-slate-100 px-5">
          {["Information", "Description", "Training", "Advanced"].map((t, i) => (
            <span
              key={t}
              className={`relative py-2.5 text-[12px] ${
                i === 0 ? "font-semibold text-accent" : "text-slate-500"
              }`}
            >
              {t}
              {i === 0 && (
                <motion.span
                  layoutId="brief-tab"
                  className="absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-accent"
                />
              )}
            </span>
          ))}
        </div>
        {/* Body */}
        <div className="space-y-3 px-5 py-4">
          <div>
            <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-slate-500">
              Job title <span className="text-accent">*</span>
            </label>
            <div className="mt-1 flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-[12.5px] text-slate-900">
              {typed}
              <span className="ml-0.5 inline-block h-3.5 w-[1.5px] bg-accent animate-pulse" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-slate-500">
                Location
              </label>
              <div className="mt-1 flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-[12.5px] text-slate-700">
                Paris · Remote FR
              </div>
            </div>
            <div className="flex items-center gap-2 self-end pb-1.5">
              <span className="flex size-3.5 items-center justify-center rounded-[3px] border border-pink-300 bg-pink-50">
                <CheckIcon className="size-2.5 text-accent" />
              </span>
              <span className="text-[11px] text-slate-700">Remote</span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-slate-500">
                Recruiter
              </label>
              <div className="mt-1 flex h-9 items-center justify-between rounded-md border border-slate-200 bg-white px-3 text-[12.5px] text-slate-700">
                <span>Raphaël · raphael@truecalling.ai</span>
                <ChevronIcon />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-slate-500">
                Contact email
              </label>
              <div className="mt-1 flex h-9 items-center rounded-md border border-slate-200 bg-white px-3 text-[12.5px] text-slate-400">
                recruteur@entreprise.com
              </div>
            </div>
          </div>
          <div className="flex items-end justify-between gap-3">
            <div>
              <label className="text-[10px] font-medium uppercase tracking-[0.06em] text-slate-500">
                Min score
              </label>
              <div className="mt-1 flex h-9 w-24 items-center rounded-md border border-slate-200 bg-white px-3 text-[12.5px] text-slate-700">
                0
              </div>
            </div>
            <div className="flex items-center gap-2 pb-1.5">
              <span className="flex h-5 w-9 items-center rounded-full bg-accent p-0.5">
                <span className="ml-auto block size-4 rounded-full bg-white shadow-sm" />
              </span>
              <span className="text-[11.5px] text-slate-700">Active position</span>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-slate-100 bg-slate-50 px-5 py-3">
          <button className="rounded-md px-3 py-1.5 text-[11.5px] text-slate-600">Cancel</button>
          <button className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[11.5px] text-slate-700 shadow-sm">
            Next <ChevronIcon />
          </button>
          <button className="rounded-md bg-accent px-3 py-1.5 text-[11.5px] font-semibold text-white shadow-sm">
            Create position
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ----- Step 1+ : Advanced Search results ----- */
function ResultsView({ step, runId }: { step: number; runId: number }) {
  const analyzing = step === 1;
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 overflow-hidden p-4 sm:p-5"
    >
      {/* Filter strip */}
      <div className="mb-3 flex items-center gap-2 text-[10.5px]">
        <span className="rounded-full bg-pink-50 px-2.5 py-1 font-semibold text-accent ring-1 ring-pink-100">
          {BRIEF_TITLE}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">Paris</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">Remote</span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-slate-700">Figma · Design Systems · UX +2</span>
      </div>

      {/* Status line */}
      <div className="mb-3 flex items-center gap-2 text-[11px]">
        {analyzing ? (
          <>
            <span className="inline-flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-1 rounded-full bg-accent animate-pulse-soft"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
            <span className="font-medium text-slate-700">
              AI analysis in progress…{" "}
              <span className="text-slate-400">(12/50)</span>
            </span>
          </>
        ) : (
          <>
            <span className="size-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">
              50 candidats analysés ·{" "}
              <span className="text-slate-500">top 4 affichés</span>
            </span>
          </>
        )}
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {CANDIDATES.map((c, i) => (
            <ResultCard
              key={`${runId}-${c.initials}`}
              c={c}
              index={i}
              highlighted={step >= 2 && c.rank === 1}
              showCursor={step === 2 && c.rank === 1}
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

const RANK_COLORS: Record<number, string> = {
  1: "bg-pink-100 text-pink-700",
  2: "bg-blue-100 text-blue-700",
  3: "bg-emerald-100 text-emerald-700",
  4: "bg-amber-100 text-amber-700",
};

function ResultCard({
  c,
  index,
  highlighted,
  showCursor,
}: {
  c: Candidate;
  index: number;
  highlighted: boolean;
  showCursor: boolean;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ delay: index * 0.12, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`relative rounded-lg border bg-white p-3 transition-all ${
        highlighted
          ? "border-accent shadow-[0_0_0_2px_rgba(233,30,140,0.18),0_12px_28px_-14px_rgba(233,30,140,0.45)]"
          : "border-slate-200"
      }`}
    >
      <span
        className={`absolute -top-2 left-2.5 rounded-full px-1.5 py-0.5 text-[9.5px] font-bold tracking-tight ${RANK_COLORS[c.rank]}`}
      >
        #{c.rank}
      </span>

      <div className="flex items-start gap-2.5">
        <div
          className={`flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br text-[10.5px] font-bold text-white ${c.avatar}`}
        >
          {c.initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="truncate text-[12px] font-semibold text-slate-900">{c.name}</span>
            <ScoreBadge value={c.score} />
            {highlighted && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.25 }}
                className="ml-auto rounded-full bg-accent px-2.5 py-1 text-[9.5px] font-semibold text-white shadow-sm"
              >
                + Pipeline
              </motion.button>
            )}
          </div>
          <div className="mt-0.5 truncate text-[10.5px] text-slate-500">
            {c.role} · {c.company} · {c.city} · {c.years.toFixed(1)}a exp.
          </div>
        </div>
      </div>

      <div className="mt-2.5 flex flex-wrap gap-1">
        {c.matched.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 text-[9.5px] font-medium text-emerald-700"
          >
            <CheckIcon className="size-2.5" /> {s}
          </span>
        ))}
        {c.missing.map((s) => (
          <span
            key={s}
            className="inline-flex items-center gap-0.5 rounded-md bg-rose-50 px-1.5 py-0.5 text-[9.5px] font-medium text-rose-700"
          >
            <XSmallIcon /> {s}
          </span>
        ))}
      </div>

      {showCursor && <Cursor />}
    </motion.div>
  );
}

function ScoreBadge({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    const controls = framerAnimate(mv, value, { duration: 0.8, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [value, mv]);

  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 ring-1 ring-emerald-100">
      <span className="size-1 rounded-full bg-emerald-500" />
      <motion.span className="text-[10px] font-bold tabular-nums text-emerald-700">
        {rounded}
      </motion.span>
    </div>
  );
}

/* ----- Cursor (animated pointer for the "click + Pipeline" gesture) ----- */
function Cursor() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 30 }}
      animate={{ opacity: [0, 1, 1, 1, 0], x: [-50, -10, -10], y: [30, -2, -2] }}
      transition={{ duration: 1.6, ease: "easeOut", times: [0, 0.4, 0.7, 0.9, 1] }}
      className="pointer-events-none absolute right-2 top-2"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="#0F172A" strokeWidth="1.4" aria-hidden="true">
        <path d="M5 3l14 8-6 1.5L9 19 5 3z" />
      </svg>
    </motion.div>
  );
}

/* ----- Step 2-3: WhatsApp panel slides from right (covers ~55%) ----- */
function WhatsAppOverlay({ runId, showResponse }: { runId: number; showResponse: boolean }) {
  void runId;
  const [typed, setTyped] = useState("");
  useEffect(() => {
    setTyped("");
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(WHATSAPP_MSG.slice(0, i));
      if (i >= WHATSAPP_MSG.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ x: "105%" }}
      animate={{ x: 0 }}
      exit={{ x: "105%" }}
      transition={{ type: "spring", stiffness: 220, damping: 28 }}
      className="absolute inset-y-0 right-0 flex w-[58%] flex-col border-l border-slate-200 bg-[#0B1A2E] shadow-[-20px_0_60px_-20px_rgba(15,23,42,0.35)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-[#142A48] px-4 py-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#25D366]">
          <WhatsAppGlyph />
        </div>
        <div className="flex-1">
          <div className="text-[12.5px] font-medium text-white">M. Dubois</div>
          <div className="text-[10.5px] text-white/60">WhatsApp · en ligne</div>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
          Score 96%
        </span>
      </div>

      {/* Messages */}
      <div
        className="flex-1 space-y-3 overflow-hidden p-4"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-[12px] leading-relaxed text-white shadow-[0_8px_24px_-8px_rgba(233,30,140,0.6)]"
        >
          {typed}
          {typed.length < WHATSAPP_MSG.length && (
            <span className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-0.5 bg-white/80 align-middle animate-pulse" />
          )}
        </motion.div>

        {showResponse && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white/[0.08] px-3.5 py-2.5 text-[12px] leading-relaxed text-white"
          >
            Bonjour, oui avec plaisir. Jeudi 14h ça vous convient&nbsp;?
          </motion.div>
        )}
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 border-t border-white/[0.06] bg-[#0F2240] px-3 py-2.5">
        <div className="flex-1 rounded-full bg-white/[0.06] px-3 py-1.5 text-[11px] text-white/55">
          Tapez un message…
        </div>
        <div className="flex size-7 items-center justify-center rounded-full bg-accent">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function WhatsAppGlyph() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.62 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.94 11.94 0 0 0-3.48-8.52zM12 21.82a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.66.96.98-3.57-.24-.37A9.83 9.83 0 1 1 12 21.82zm5.4-7.36c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.16-.34.22-.64.07a8.05 8.05 0 0 1-2.37-1.46 8.86 8.86 0 0 1-1.64-2.04c-.17-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52s-.66-1.6-.9-2.18c-.24-.58-.48-.5-.66-.5h-.56a1.07 1.07 0 0 0-.78.36 3.27 3.27 0 0 0-1.02 2.43 5.7 5.7 0 0 0 1.18 3 13 13 0 0 0 4.92 4.36c.69.3 1.23.48 1.65.6a4 4 0 0 0 1.83.12 3 3 0 0 0 1.97-1.4 2.45 2.45 0 0 0 .17-1.4c-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

/* ----- Step 3: response toast (light theme) ----- */
function ResponseToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="absolute right-4 top-3 z-10 flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 shadow-[0_20px_50px_-20px_rgba(15,23,42,0.3),0_4px_12px_-4px_rgba(15,23,42,0.15)]"
    >
      <span className="relative flex size-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
      </span>
      <div className="text-[11.5px]">
        <div className="font-semibold text-slate-900">M. Dubois a répondu</div>
        <div className="text-[10px] text-slate-500">il y a 2 minutes</div>
      </div>
    </motion.div>
  );
}

/* ----- Emily floating button ----- */
function EmilyFAB() {
  return (
    <motion.button
      type="button"
      aria-label="Emily — assistante IA"
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
      className="absolute bottom-3 right-3 flex size-10 items-center justify-center rounded-full bg-violet-600 text-[13px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.55)] ring-2 ring-white"
    >
      E
    </motion.button>
  );
}

/* ----- Mini icons (sidebar) + Chevron + XSmall ----- */
function NavDashIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}
function NavDocIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="13" y2="17" />
    </svg>
  );
}
function NavUsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function NavSearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function NavBellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}
function NavGearIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function ChevronIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
function XSmallIcon() {
  return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ----------------------------------------------------------
   PRICING — toggle + 3 tiers
---------------------------------------------------------- */
const TIERS = [
  {
    name: "Starter",
    priceMonthly: 595,
    tagline: "Pour les équipes qui structurent leur sourcing.",
    features: [
      "Jusqu'à 10 fiches de poste",
      "Outreach multi-canal (WhatsApp, email, téléphone)",
      "Collaboration d'équipe",
      "Top Ranking",
      "EMILY™ AI Copilot",
      "Employer Branding",
      "TrueFit 360 Assessment ($5/test)",
    ],
    cta: "Commencer",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Core",
    priceMonthly: 895,
    tagline: "Pour les équipes qui scalent leurs recrutements.",
    features: [
      "Fiches de poste illimitées",
      "Tout ce qui est dans Starter",
      "1 intégration ATS",
      "Workflows IA personnalisés",
    ],
    cta: "Réserver une démo",
    ctaVariant: "primary" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    priceMonthly: null,
    tagline: "Pour les grandes organisations.",
    features: [
      "Tout ce qui est dans Core",
      "Intégrations ATS illimitées",
      "Recherche avancée",
      "Accompagnement dédié",
    ],
    cta: "Nous contacter",
    ctaVariant: "outline" as const,
    highlight: false,
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-28 sm:py-36 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            Tarifs
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Une offre par étape de croissance.
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            Sans engagement, sans frais cachés. Annulez à tout moment.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3">
            <BillingToggle annual={annual} onChange={setAnnual} />
          </motion.div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                t.highlight
                  ? "border-accent/50 bg-surface/60 shadow-[0_0_0_1px_rgba(233,30,140,0.55),0_30px_80px_-30px_rgba(233,30,140,0.55)] lg:-translate-y-3 lg:py-9"
                  : "border-white/[0.08] bg-surface/30"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  Most popular
                </span>
              )}

              <div className="mb-1 text-sm font-medium text-ink-muted">{t.name}</div>

              <div className="mb-2 flex items-baseline gap-1">
                {t.priceMonthly === null ? (
                  <span className="text-3xl font-semibold tracking-tighter2">Sur devis</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tighter2 sm:text-5xl">
                      ${annual ? Math.round(t.priceMonthly * 0.8) : t.priceMonthly}
                    </span>
                    <span className="text-sm text-ink-muted">/utilisateur/mois</span>
                  </>
                )}
              </div>

              <p className="mb-6 text-[13.5px] leading-relaxed text-ink-muted">{t.tagline}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink/90">
                    <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon className="size-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href="#" variant={t.ctaVariant} size="md" className="w-full">
                {t.cta}
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  return (
    <div
      role="radiogroup"
      aria-label="Période de facturation"
      className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-md"
    >
      <button
        type="button"
        role="radio"
        aria-checked={!annual}
        onClick={() => onChange(false)}
        className={`relative cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors ${
          !annual ? "text-bg" : "text-ink-muted hover:text-ink"
        }`}
      >
        {!annual && (
          <motion.span
            layoutId="bill-pill"
            className="absolute inset-0 rounded-full bg-white"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          />
        )}
        <span className="relative">Mensuel</span>
      </button>
      <button
        type="button"
        role="radio"
        aria-checked={annual}
        onClick={() => onChange(true)}
        className={`relative cursor-pointer rounded-full px-4 py-1.5 text-sm transition-colors ${
          annual ? "text-bg" : "text-ink-muted hover:text-ink"
        }`}
      >
        {annual && (
          <motion.span
            layoutId="bill-pill"
            className="absolute inset-0 rounded-full bg-white"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          />
        )}
        <span className="relative inline-flex items-center gap-1.5">
          Annuel
          <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[10px] font-semibold text-accent">
            -20%
          </span>
        </span>
      </button>
    </div>
  );
}

/* ----------------------------------------------------------
   FINAL CTA
---------------------------------------------------------- */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface to-accent/40" />
        <div className="absolute -left-20 top-10 size-[60vw] max-w-[700px] rounded-full bg-accent/40 blur-[60px] sm:blur-[110px] animate-blob-1" />
        <div className="absolute -right-10 bottom-0 size-[55vw] max-w-[640px] rounded-full bg-fuchsia-500/35 blur-[70px] sm:blur-[120px] animate-blob-2" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <Reveal>
          <motion.h2
            variants={fadeUp}
            className="text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}
          >
            Prêt à recruter autrement&nbsp;?
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-white/80">
            Voyez en 20 minutes ce que True Calling peut faire pour vos prochains recrutements.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10">
            <CTAButton href="#" variant="white" size="lg">
              Réserver une démo
            </CTAButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   FOOTER
---------------------------------------------------------- */
function Footer() {
  const cols = [
    {
      title: "Produit",
      links: [
        { label: "Fonctionnalités", href: "#features" },
        { label: "Tarifs", href: "#pricing" },
        { label: "Démo", href: "#demo" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { label: "À propos", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
    {
      title: "Légal",
      links: [
        { label: "CGU", href: "#" },
        { label: "Mentions légales", href: "#" },
        { label: "RGPD", href: "#" },
        { label: "Politique de confidentialité", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/[0.06] bg-deep py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo size={28} showTagline />
            <p className="mt-5 max-w-xs text-sm text-ink-muted">
              Sourcing IA, matching et outreach multi-canal pour les équipes recrutement modernes.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink href="#" label="LinkedIn">
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="#" label="X / Twitter">
                <XIcon />
              </SocialLink>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                {col.title}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink/80 transition-colors hover:text-ink cursor-pointer"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <span>© 2026 True Calling. Tous droits réservés.</span>
          <span>Fait avec attention pour les recruteurs.</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22zM8 8h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.31h-4.56v-7.37c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.9V23H8z" />
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
