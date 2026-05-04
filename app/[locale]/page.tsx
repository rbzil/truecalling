"use client";

import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate as framerAnimate,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useT, useLocalizedHref } from "../_i18n/locale-context";
import { Navbar, FingerprintMark, CTAButton } from "../../components/SiteNavbar";

/* ============================================================
   TrueCalling — Landing Page
   Single-file page (sub-components below) per user spec.
   Stack: Next.js 14 App Router + TS + Tailwind + Framer Motion
   ============================================================ */

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <DemoAndCaseStudy />
      <Pricing />
      <FinalCTA />
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
   HERO — Aurora gradient + H1 + subtitle + CTAs
---------------------------------------------------------- */
function Hero() {
  const t = useT();
  const href = useLocalizedHref();
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-20 sm:pt-24">
      <AuroraBackground />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8 py-10 sm:py-16">
        <Reveal className="flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 sm:px-3.5 py-1.5 text-[11px] sm:text-xs text-ink-muted backdrop-blur-md"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(233,30,140,0.8)]" />
            {t("hero_badge")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-balance font-semibold leading-[1.05] sm:leading-[1.02] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 7vw, 5.5rem)" }}
          >
            {t("hero_h1_a")}{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              {t("hero_h1_b")}
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-5 sm:mt-7 max-w-2xl space-y-2 sm:space-y-3"
          >
            <p className="text-balance text-[15px] sm:text-lg leading-relaxed text-ink-muted">
              {t("hero_subtitle_line1")}
            </p>
            <p className="text-balance text-[15px] sm:text-lg leading-relaxed text-ink-muted">
              {t("hero_subtitle_line2")}
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-7 sm:mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <CTAButton href={href("book-a-demo")} size="lg">
              {t("hero_cta_demo")}
            </CTAButton>
            <CTAButton href="#demo" size="lg" variant="outline">
              <PlayIcon /> {t("hero_cta_video")}
            </CTAButton>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-col items-center gap-4 text-xs uppercase tracking-[0.2em] text-ink-muted/70"
          >
            <span>{t("hero_social")}</span>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
              {["Lattice", "Notion", "Alan", "Doctolib", "Qonto", "Spendesk"].map((c) => (
                <span key={c} className="text-sm font-semibold tracking-normal text-ink/55">
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
  // Static-but-randomized particles (deterministic seed → SSR-safe)
  const particles = [
    { left: 12, top: 22, delay: 0, size: 4 },
    { left: 41, top: 34, delay: 2.4, size: 5 },
    { left: 71, top: 18, delay: 3.1, size: 4 },
    { left: 84, top: 55, delay: 1.7, size: 5 },
    { left: 19, top: 60, delay: 2.9, size: 3 },
    { left: 65, top: 8, delay: 2.0, size: 5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      {/* Blob 1 — magenta. Lower opacity + smaller blur on mobile to save GPU. */}
      <motion.div
        aria-hidden
        className="absolute left-[8%] top-[8%] size-[55vw] max-w-[780px] rounded-full bg-accent/30 sm:bg-accent/40 blur-[60px] sm:blur-[80px] will-change-transform"
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 2 — navy in dark / violet pastel in light, counter motion */}
      <motion.div
        aria-hidden
        className="absolute right-[5%] top-[28%] size-[55vw] max-w-[740px] rounded-full bg-violet-300/30 dark:bg-surface/60 sm:bg-violet-300/40 sm:dark:bg-surface/70 blur-[60px] sm:blur-[80px] will-change-transform"
        animate={{ x: [0, -35, 25, 0], y: [0, 35, -15, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blob 3 — fuchsia top-right accent (static, decorative) */}
      <div
        aria-hidden
        className="absolute right-[20%] top-[-10%] size-[40vw] max-w-[520px] rounded-full bg-fuchsia-500/20 sm:bg-fuchsia-500/25 blur-[70px] sm:blur-[90px]"
      />

      {/* Floating particles drifting upward */}
      {particles.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="absolute rounded-full bg-accent shadow-[0_0_12px_rgba(233,30,140,0.7)] will-change-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0, 0.85, 0],
          }}
          transition={{
            duration: 8 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Comet streak — single, less frequent */}
      <motion.div
        aria-hidden
        className="absolute -left-[15%] top-[22%] h-[2px] w-[260px] rotate-[18deg] bg-gradient-to-r from-transparent via-pink-300 to-transparent will-change-transform"
        animate={{ x: ["0vw", "130vw"], opacity: [0, 1, 0] }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          repeatDelay: 12,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Soft radial vignette — much wider falloff than before. Uses --bg so it adapts to theme. */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 70% at 50% 35%, transparent 35%, rgb(var(--bg) / 0.55) 75%, rgb(var(--bg) / 0.95) 100%)",
        }}
      />
      {/* Smooth bottom blend into next section — eliminates the hard cut */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[45%]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgb(var(--bg) / 0.4) 35%, rgb(var(--bg) / 0.85) 75%, rgb(var(--bg)) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
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
   Section ambience — soft glowing orbs at section transitions
   to keep the aurora vibe flowing through the whole page.
---------------------------------------------------------- */
function SectionAmbience({
  top = false,
  bottom = false,
  intensity = 0.4,
}: {
  top?: boolean;
  bottom?: boolean;
  intensity?: number;
}) {
  // Static blurred orbs — same premium glow without per-section animation cost.
  // (Animating blur-[110px] elements in 5 sections at once was the main lag source.)
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {top && (
        <>
          <div
            className="absolute -top-[30%] left-[10%] size-[55vw] max-w-[700px] rounded-full bg-accent blur-[80px]"
            style={{ opacity: intensity * 0.35 }}
          />
          <div
            className="absolute -top-[40%] right-[5%] size-[50vw] max-w-[640px] rounded-full bg-fuchsia-500 blur-[80px]"
            style={{ opacity: intensity * 0.22 }}
          />
        </>
      )}
      {bottom && (
        <div
          className="absolute -bottom-[30%] left-1/2 size-[60vw] max-w-[760px] -translate-x-1/2 rounded-full bg-accent blur-[80px]"
          style={{ opacity: intensity * 0.3 }}
        />
      )}
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

/* ----- Extended icon set used by Features, HowItWorks and Benefits ----- */
function BrainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 0 7 4.5v15A2.5 2.5 0 0 0 9.5 22a2.5 2.5 0 0 0 2.5-2.5V4.5A2.5 2.5 0 0 0 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5V4.5A2.5 2.5 0 0 1 14.5 2z" />
      <path d="M3 10h4M3 14h4M17 10h4M17 14h4" />
    </svg>
  );
}
function DatabaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" />
    </svg>
  );
}
function WhatsAppCircleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.94 11.94 0 0 0 1.62 6L0 24l6.18-1.62A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.94 11.94 0 0 0-3.48-8.52zM12 21.82a9.8 9.8 0 0 1-5-1.36l-.36-.21-3.66.96.98-3.57-.24-.37A9.83 9.83 0 1 1 12 21.82zm5.4-7.36c-.3-.15-1.74-.86-2-.96-.27-.1-.46-.15-.66.15s-.76.96-.93 1.16-.34.22-.64.07a8.05 8.05 0 0 1-2.37-1.46 8.86 8.86 0 0 1-1.64-2.04c-.17-.3 0-.46.13-.6.13-.13.3-.34.45-.5.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52s-.66-1.6-.9-2.18c-.24-.58-.48-.5-.66-.5h-.56a1.07 1.07 0 0 0-.78.36 3.27 3.27 0 0 0-1.02 2.43 5.7 5.7 0 0 0 1.18 3 13 13 0 0 0 4.92 4.36c.69.3 1.23.48 1.65.6a4 4 0 0 0 1.83.12 3 3 0 0 0 1.97-1.4 2.45 2.45 0 0 0 .17-1.4c-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
function RobotIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="3" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" />
      <path d="M12 4v4M9 4h6" />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}
function SparkleIconSmall() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-accent" aria-hidden="true">
      <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z" />
    </svg>
  );
}
function UploadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}
function UsersGroupIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ChatBubbleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}
function TransferIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <polyline points="7 23 3 19 7 15" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
function DollarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
function TrendingUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function RocketIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function TwoWayIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="17 1 21 5 17 9" />
      <line x1="3" y1="5" x2="21" y2="5" />
      <polyline points="7 23 3 19 7 15" />
      <line x1="3" y1="19" x2="21" y2="19" />
    </svg>
  );
}
function SyncIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}
function CogIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9 1.65 1.65 0 0 0 4.27 7.18l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

/* ----------------------------------------------------------
   FEATURES — 6 cards (Core Capabilities) + Meet EMILY subsection
---------------------------------------------------------- */
function Features() {
  const t = useT();
  const features = [
    { icon: <BrainIcon />, title: t("f1_title"), desc: t("f1_desc") },
    { icon: <SparkleIcon />, title: t("f2_title"), desc: t("f2_desc") },
    { icon: <TargetIcon />, title: t("f3_title"), desc: t("f3_desc") },
    { icon: <DatabaseIcon />, title: t("f4_title"), desc: t("f4_desc") },
    { icon: <WhatsAppCircleIcon />, title: t("f5_title"), desc: t("f5_desc") },
    { icon: <BoltIcon />, title: t("f6_title"), desc: t("f6_desc") },
  ];

  return (
    <section id="features" className="relative overflow-hidden py-20 sm:py-24">
      {/* Ambient bleed from hero — a soft top glow that continues the aurora */}
      <SectionAmbience top intensity={0.5} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            {t("features_eyebrow")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {t("features_h2_a")}{" "}
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              TrueCalling
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
            {t("features_subtitle")}
          </motion.p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 backdrop-blur-md transition-shadow hover:shadow-[0_0_0_1px_rgba(233,30,140,0.35),0_20px_60px_-20px_rgba(233,30,140,0.35)]"
            >
              <motion.div
                className="mb-6 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_20px_-6px_rgba(233,30,140,0.45)]"
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                {f.icon}
              </motion.div>
              <h3 className="text-[17px] font-semibold leading-snug tracking-tight">{f.title}</h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{f.desc}</p>
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 size-32 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ transitionDelay: `${i * 30}ms` }}
              />
            </motion.div>
          ))}
        </Reveal>

        <MeetEmily />
      </div>
    </section>
  );
}

/* ----- Meet EMILY subsection ----- */
function MeetEmily() {
  const t = useT();
  const cards = [
    { icon: <WhatsAppCircleIcon />, title: t("emily_c1_title"), desc: t("emily_c1_desc") },
    { icon: <RobotIcon />, title: t("emily_c2_title"), desc: t("emily_c2_desc") },
    { icon: <CalendarIcon />, title: t("emily_c3_title"), desc: t("emily_c3_desc") },
  ];

  return (
    <div className="relative mt-20 overflow-hidden rounded-3xl border border-ink/[0.06] bg-bg/40 px-5 py-14 sm:px-10 sm:py-16">
      {/* Soft animated glow background */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-[60%] -translate-x-1/2 rounded-full bg-accent/30 blur-[100px]"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-20 right-[10%] size-[40%] rounded-full bg-fuchsia-500/20 blur-[80px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <Reveal className="relative text-center">
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-ink-muted backdrop-blur-md"
        >
          <SparkleIconSmall /> {t("emily_eyebrow")}
        </motion.span>

        <motion.h3
          variants={fadeUp}
          className="mt-5 font-semibold leading-[1.05] tracking-tighter2"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          {t("emily_h3_lead")}{" "}
          <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
            EMILY™
          </span>
        </motion.h3>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted">
          {t("emily_subtitle")}
        </motion.p>

        <Reveal className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="group relative overflow-hidden rounded-2xl border border-ink/[0.08] bg-surface/40 p-7 text-left backdrop-blur-md hover:border-accent/40"
            >
              <motion.div
                className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-white shadow-[0_8px_20px_-6px_rgba(233,30,140,0.45)]"
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
              >
                {c.icon}
              </motion.div>
              <div className="text-[17px] font-semibold tracking-tight">{c.title}</div>
              <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">{c.desc}</p>
            </motion.div>
          ))}
        </Reveal>
      </Reveal>
    </div>
  );
}

/* ----------------------------------------------------------
   HOW IT WORKS — vertical timeline
---------------------------------------------------------- */
function HowItWorks() {
  const t = useT();
  const steps = [
    { icon: <UploadIcon />, title: t("s1_title"), desc: t("s1_desc") },
    { icon: <BrainIcon />, title: t("s2_title"), desc: t("s2_desc") },
    { icon: <UsersGroupIcon />, title: t("s3_title"), desc: t("s3_desc") },
    { icon: <ChatBubbleIcon />, title: t("s4_title"), desc: t("s4_desc") },
    { icon: <TransferIcon />, title: t("s5_title"), desc: t("s5_desc") },
  ];

  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 sm:py-24">
      <SectionAmbience top intensity={0.35} />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            {t("how_eyebrow")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {t("how_h2_a")}{" "}
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              TrueCalling
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            {t("how_subtitle")}
          </motion.p>
        </Reveal>

        <Timeline steps={steps} />
      </div>
    </section>
  );
}

function Timeline({
  steps,
}: {
  steps: { icon: React.ReactNode; title: string; desc: string }[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative">
      {/* Animated central line */}
      <motion.span
        aria-hidden
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "top" }}
        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-accent/0 via-accent/50 to-accent/0 md:block"
      />

      <ol className="relative space-y-10 md:space-y-16">
        {steps.map((s, i) => (
          <TimelineItem key={s.title} step={s} index={i} total={steps.length} />
        ))}
      </ol>
    </div>
  );
}

function TimelineItem({
  step,
  index,
  total,
}: {
  step: { icon: React.ReactNode; title: string; desc: string };
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isLeft = index % 2 === 0;
  void total;

  const card = (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20, y: 8 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-2xl border border-ink/[0.08] bg-surface/40 p-6 backdrop-blur-md transition-colors hover:border-accent/40 ${
        isLeft ? "md:text-right" : ""
      }`}
    >
      <div className={`flex items-center gap-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-accent/15 text-accent ring-1 ring-accent/30">
          {step.icon}
        </span>
        <h3 className="text-[16px] font-semibold tracking-tight">{step.title}</h3>
      </div>
      <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{step.desc}</p>
    </motion.div>
  );

  const dot = (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.45, delay: index * 0.1 + 0.15, type: "spring", stiffness: 240, damping: 18 }}
      className="relative z-10 hidden md:flex md:items-center md:justify-center"
    >
      <div
        className="relative flex size-12 items-center justify-center rounded-full bg-accent text-[13px] font-bold text-white"
        style={{
          boxShadow:
            "0 0 0 4px rgb(var(--bg)), 0 0 30px rgba(233,30,140,0.6)",
        }}
      >
        <motion.span
          aria-hidden
          className="absolute inset-0 rounded-full bg-accent"
          animate={{ scale: [1, 1.5, 1], opacity: [0.45, 0, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: index * 0.3 }}
        />
        <span className="relative">{String(index + 1).padStart(2, "0")}</span>
      </div>
    </motion.div>
  );

  return (
    <li
      ref={ref}
      className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6"
    >
      {/* Mobile-only inline number — always first in DOM, hidden on md+ */}
      <div className="mb-3 flex items-center gap-2 md:hidden">
        <span className="flex size-8 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="h-px flex-1 bg-ink/10" />
      </div>

      {/* Desktop layout — DOM order matches column order so the grid keeps everything on row 1 */}
      {isLeft ? (
        <>
          {card}
          {dot}
          <div className="hidden md:block" aria-hidden />
        </>
      ) : (
        <>
          <div className="hidden md:block" aria-hidden />
          {dot}
          {card}
        </>
      )}
    </li>
  );
}

/* ----------------------------------------------------------
   BENEFITS — Stats + ATS integrations + Case study
---------------------------------------------------------- */
function Benefits() {
  const t = useT();
  return (
    <section id="benefits" className="relative overflow-hidden py-20 sm:py-24">
      <SectionAmbience top intensity={0.4} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-16 text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            {t("benefits_eyebrow")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            {t("benefits_h2_a")}{" "}
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              TrueCalling
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            {t("benefits_subtitle")}
          </motion.p>
        </Reveal>

        <StatsGrid />
        <ATSBlock />
      </div>
    </section>
  );
}

function StatsGrid() {
  const t = useT();
  const STATS = [
    { value: 80, suffix: "%", icon: <ClockIcon />, title: t("st1_title"), desc: t("st1_desc") },
    { value: 90, suffix: "%", icon: <DollarIcon />, title: t("st2_title"), desc: t("st2_desc") },
    { value: 95, suffix: "%", icon: <TargetIcon />, title: t("st3_title"), desc: t("st3_desc") },
    { value: 60, suffix: "%", icon: <TrendingUpIcon />, title: t("st4_title"), desc: t("st4_desc") },
    { value: 70, suffix: "%", icon: <ShieldIcon />, title: t("st5_title"), desc: t("st5_desc") },
    { value: null as number | null, suffix: "∞", icon: <RocketIcon />, title: t("st6_title"), desc: t("st6_desc") },
  ];
  return (
    <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {STATS.map((s, i) => (
        <motion.div
          key={s.title}
          variants={fadeUp}
          whileHover={{ y: -3 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className={`group relative overflow-hidden rounded-2xl border bg-surface/40 p-6 backdrop-blur-md transition-colors ${
            i === 0 ? "border-accent/50 shadow-[0_0_0_1px_rgba(233,30,140,0.35),0_20px_60px_-20px_rgba(233,30,140,0.4)]" : "border-ink/[0.08] hover:border-accent/30"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-ink/[0.04] text-accent/80 ring-1 ring-ink/[0.06]">
              {s.icon}
            </span>
            <StatNumber value={s.value} suffix={s.suffix} />
          </div>
          <h3 className="mt-5 text-[16px] font-semibold tracking-tight">{s.title}</h3>
          <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{s.desc}</p>
        </motion.div>
      ))}
    </Reveal>
  );
}

function StatNumber({ value, suffix }: { value: number | null; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);
  const [display, setDisplay] = useState(value === null ? suffix : `0${suffix}`);

  useEffect(() => {
    if (value === null || !inView) return;
    const controls = framerAnimate(mv, value, { duration: 1.4, ease: [0.22, 1, 0.36, 1] });
    const unsub = rounded.on("change", (v) => setDisplay(String(v)));
    return () => {
      controls.stop();
      unsub();
    };
  }, [value, inView, mv, rounded]);

  return (
    <span
      ref={ref}
      className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-3xl font-bold tabular-nums text-transparent sm:text-4xl"
    >
      {value === null ? suffix : display}
    </span>
  );
}

/* ----- ATS Integrations block ----- */
function ATSBlock() {
  const t = useT();
  const items = [
    { icon: <TwoWayIcon />, title: t("ats1_title"), desc: t("ats1_desc") },
    { icon: <BoltIcon />, title: t("ats2_title"), desc: t("ats2_desc") },
    { icon: <SyncIcon />, title: t("ats3_title"), desc: t("ats3_desc") },
    { icon: <CogIcon />, title: t("ats4_title"), desc: t("ats4_desc") },
  ];

  return (
    <div className="mt-24">
      <Reveal className="mb-12 text-center">
        <motion.h3
          variants={fadeUp}
          className="font-semibold leading-tight tracking-tighter2"
          style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}
        >
          {t("ats_h3_a")}{" "}
          <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
            {t("ats_h3_b")}
          </span>
        </motion.h3>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-lg text-ink-muted">
          {t("ats_subtitle")}
        </motion.p>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {items.map((it) => (
          <motion.div
            key={it.title}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="rounded-2xl border border-ink/[0.08] bg-surface/40 p-6 backdrop-blur-md transition-colors hover:border-accent/30"
          >
            <div className="flex items-center gap-3">
              <motion.span
                whileHover={{ rotate: -6, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 280, damping: 18 }}
                className="inline-flex size-10 items-center justify-center rounded-lg bg-accent text-white shadow-[0_8px_20px_-6px_rgba(233,30,140,0.45)]"
              >
                {it.icon}
              </motion.span>
              <h4 className="text-[16px] font-semibold tracking-tight">{it.title}</h4>
            </div>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">{it.desc}</p>
          </motion.div>
        ))}
      </Reveal>

      <Reveal className="mt-8 rounded-2xl border border-ink/[0.06] bg-bg/40 p-6 backdrop-blur-md sm:p-8">
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11.5px] font-medium text-emerald-300">
          <CheckIcon className="size-3" /> {t("ats_compatible")}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-2 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
          {/* TrueCalling node */}
          <div className="flex flex-col items-center gap-2">
            <span className="flex size-14 items-center justify-center rounded-xl bg-accent text-white shadow-[0_10px_30px_-8px_rgba(233,30,140,0.55)]">
              <BoltIcon />
            </span>
            <div className="text-center">
              <div className="text-[14px] font-semibold">TrueCalling</div>
              <div className="text-[11.5px] text-ink-muted">{t("ats_node_tc_label")}</div>
            </div>
          </div>

          {/* Animated sync line — 3 glowing pink dots flowing left to
              right to evoke a continuous data stream between the
              TrueCalling and ATS nodes. */}
          <div className="relative h-1.5 w-32 sm:w-auto sm:flex-1 sm:max-w-md">
            <span
              aria-hidden
              className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.5) 50%, transparent 100%)",
              }}
            />
            {[0, 0.83, 1.66].map((delay, i) => (
              <motion.span
                key={i}
                aria-hidden
                className="absolute size-1.5 rounded-full"
                style={{
                  top: "50%",
                  background: "#ec4899",
                  boxShadow:
                    "0 0 8px #ec4899, 0 0 16px rgba(236,72,153,0.6)",
                }}
                initial={{ left: "0%", opacity: 0 }}
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                  y: "-50%",
                }}
                transition={{
                  duration: 2.5,
                  ease: "linear",
                  repeat: Infinity,
                  delay,
                  times: [0, 0.1, 0.9, 1],
                }}
              />
            ))}
          </div>

          {/* ATS node */}
          <div className="flex flex-col items-center gap-2">
            <span className="flex size-14 items-center justify-center rounded-xl bg-accent text-[12px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(233,30,140,0.55)]">
              ATS
            </span>
            <div className="text-center">
              <div className="text-[14px] font-semibold">ATS</div>
              <div className="text-[11.5px] text-ink-muted">{t("ats_node_ats_label")}</div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { label: t("ats_kpi1_label"), value: t("ats_kpi1_value") },
            { label: t("ats_kpi2_label"), value: t("ats_kpi2_value") },
            { label: t("ats_kpi3_label"), value: t("ats_kpi3_value") },
          ].map((it) => (
            <div
              key={it.label}
              className="rounded-xl border border-ink/[0.06] bg-surface/30 px-4 py-3 text-center"
            >
              <div className="text-[12.5px] font-semibold text-accent">{it.label}</div>
              <div className="mt-0.5 text-[12px] text-ink-muted">{it.value}</div>
            </div>
          ))}
        </motion.div>
      </Reveal>
    </div>
  );
}

/* ----------------------------------------------------------
   DEMO + CASE STUDY — unified section: animated mockup followed
   by Le Chiller case study (timeline + count-up + verbatim)
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
  locScore: number;
  matched: string[];
  missing: string[];
  avatar: string;
};

const CANDIDATES: Candidate[] = [
  {
    rank: 1, initials: "MD", name: "M. Dubois", role: "Senior Product Designer",
    company: "Doctolib", city: "Paris", years: 7.2, score: 96, locScore: 40,
    matched: ["Figma", "Design Systems", "User Research", "Prototyping"],
    missing: [],
    avatar: "from-pink-500 to-fuchsia-600",
  },
  {
    rank: 2, initials: "SK", name: "S. Klein", role: "Lead Product Designer",
    company: "Alan", city: "Remote FR", years: 5.8, score: 92, locScore: 40,
    matched: ["Figma", "Design Systems", "User Research", "Prototyping"],
    missing: ["Motion"],
    avatar: "from-violet-500 to-indigo-600",
  },
  {
    rank: 3, initials: "LP", name: "L. Petit", role: "Senior UX Designer",
    company: "Qonto", city: "Lyon", years: 6.4, score: 88, locScore: 40,
    matched: ["Figma", "User Research", "Prototyping"],
    missing: ["Design Systems"],
    avatar: "from-cyan-500 to-blue-600",
  },
  {
    rank: 4, initials: "AB", name: "A. Bernard", role: "Product Designer",
    company: "Spendesk", city: "Bordeaux", years: 4.1, score: 85, locScore: 40,
    matched: ["Figma", "Design Systems", "Prototyping"],
    missing: ["Accessibility"],
    avatar: "from-amber-500 to-orange-600",
  },
];

const BRIEF_TITLE = "Senior Product Designer";

const WHATSAPP_MSG =
  "Bonjour M., je vous contacte au sujet d'un poste de Senior Product Designer chez [Client]. Votre profil correspond très précisément à ce qu'ils cherchent — auriez-vous 15 min cette semaine pour en discuter ?";

function DemoAndCaseStudy() {
  const t = useT();
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: false, margin: "-100px" });
  const [step, setStep] = useState(0); // 0..3
  const [runId, setRunId] = useState(0); // bumps to restart
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, runId]);

  return (
    <section
      id="demo"
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-24"
    >
      <SectionAmbience top intensity={0.3} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Unified section header */}
        <Reveal className="mb-10 sm:mb-14 text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            {t("demo_eyebrow")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            {t("demo_h2")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-ink-muted">
            {t("demo_subtitle")}
          </motion.p>
        </Reveal>

        {/* BLOCK 1 — animated demo */}
        <div className="relative mx-auto max-w-5xl">
          {isMobile ? (
            <MobileDemoMockup step={step} runId={runId} />
          ) : (
            <BrowserChrome>
              <DemoStage step={step} runId={runId} />
            </BrowserChrome>
          )}

          <div className="mt-6 flex items-center justify-center gap-3">
            <StepDots step={step} />
            <button
              onClick={() => setRunId((r) => r + 1)}
              className="ml-3 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-4 py-1.5 text-xs text-ink-muted transition-colors hover:bg-ink/[0.06] hover:text-ink cursor-pointer"
              aria-label={t("demo_replay_aria")}
            >
              <ReplayIcon /> {t("demo_replay")}
            </button>
          </div>
        </div>

        {/* TRANSITION — fading line + micro-text. Bridges demo and case study */}
        <Reveal className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-3 sm:mt-20">
          <motion.span
            variants={fadeUp}
            className="text-[11.5px] uppercase tracking-[0.22em] text-ink-muted"
          >
            {t("demo_transition_label")}
          </motion.span>
          <motion.span
            variants={fadeUp}
            aria-hidden
            className="block h-px w-full max-w-[420px] bg-[linear-gradient(to_right,transparent,rgba(233,30,140,0.32),transparent)]"
          />
        </Reveal>

        {/* BLOCK 2 — case study (no second H2; continues the narrative) */}
        <div className="mt-10 sm:mt-12">
          <CaseStudyCard />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------
   Case study card — Le Chiller. Renders inside DemoAndCaseStudy,
   no top-level H2 (continues the demo narrative).
---------------------------------------------------------- */
function CaseStudyCard() {
  const t = useT();
  const stages = [
    { label: t("case_stage1_label"), value: t("case_stage1_value") },
    { label: t("case_stage2_label"), value: t("case_stage2_value") },
    { label: t("case_stage3_label"), value: t("case_stage3_value") },
    { label: t("case_stage4_label"), value: t("case_stage4_value") },
    { label: t("case_stage5_label"), value: t("case_stage5_value") },
  ];

  return (
    <Reveal className="overflow-hidden rounded-3xl border border-ink/[0.08] bg-surface/30 p-7 backdrop-blur-md sm:p-10">
      <motion.span
        variants={fadeUp}
        className="text-[11px] uppercase tracking-[0.2em] text-accent"
      >
        {t("case_eyebrow")}
      </motion.span>
      <motion.h3
        variants={fadeUp}
        className="mt-2 text-2xl font-semibold tracking-tight"
      >
        {t("case_h4")}
      </motion.h3>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
        {/* Timeline — 5 staggered steps */}
        <motion.ol
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
          className="space-y-4"
        >
          {stages.map((s, i) => (
            <motion.li
              key={s.label}
              variants={fadeUp}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
              className="group flex items-start gap-4"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-[13px] font-bold text-white shadow-[0_0_0_0_rgba(233,30,140,0)] transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(233,30,140,0.55)]">
                {i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] uppercase tracking-[0.14em] text-ink-muted">
                  {s.label}
                </div>
                <div className="mt-0.5 text-[15px] font-semibold tracking-tight">{s.value}</div>
              </div>
            </motion.li>
          ))}
        </motion.ol>

        <CaseResultCard />
      </div>

      <motion.blockquote
        variants={fadeUp}
        className="mt-10 rounded-2xl border-l-2 border-accent bg-bg/40 p-6 text-[14.5px] leading-relaxed text-ink/90"
      >
        <span className="text-accent">«</span> {t("case_quote")} <span className="text-accent">»</span>
        <footer className="mt-4 flex flex-wrap items-center gap-3 text-[12.5px] not-italic text-ink-muted">
          <LeChillerLogo />
          <span>{t("case_quote_author")}</span>
        </footer>
      </motion.blockquote>
    </Reveal>
  );
}

/* ----- Result card with count-up + pulse + shine sweep ----- */
function CaseResultCard() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{
        duration: 0.55,
        delay: 0.85, // after the 5 timeline steps (5 * 0.15 + 0.1 ≈ 0.85)
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex min-h-[200px] flex-col items-center justify-center overflow-hidden rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/15 via-bg/60 to-fuchsia-500/10 p-8 text-center"
    >
      {/* radial pulse */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,30,140,0.25),transparent_60%)]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* subtle scale pulse on the whole card */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* shine sweep — diagonal stripe of brightness every 6s */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-[40%] bg-[linear-gradient(115deg,transparent_0%,transparent_30%,rgba(255,255,255,0.18)_50%,transparent_70%,transparent_100%)]"
        initial={{ x: "-100%" }}
        animate={{ x: ["−100%", "260%"] }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 4.6,
          ease: "easeInOut",
        }}
      />
      <div className="relative">
        <div className="text-[11px] uppercase tracking-[0.22em] text-accent">{t("case_result")}</div>
        <AnimatedCount target={5} active={inView} />
        <p className="mx-auto mt-4 max-w-[20ch] text-[14px] leading-relaxed text-ink-muted">
          {t("case_result_caption")}
        </p>
      </div>
    </motion.div>
  );
}

function AnimatedCount({ target, active }: { target: number; active: boolean }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;
    const controls = framerAnimate(mv, target, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [active, target, mv, rounded]);

  return (
    <div className="mt-3 bg-gradient-to-r from-ink via-pink-300 to-ink bg-clip-text text-7xl font-bold leading-none tabular-nums text-transparent sm:text-8xl">
      {display}
    </div>
  );
}

/* ----- Le Chiller logo with graceful text fallback ----- */
function LeChillerLogo() {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <span className="inline-flex h-8 items-center rounded-md bg-slate-900 px-2.5 font-mono text-[11px] font-bold tracking-[0.2em] text-white">
        LECHILLER
      </span>
    );
  }
  return (
    <span className="inline-flex h-8 items-center justify-center rounded-md bg-slate-900 px-2 dark:bg-transparent dark:px-0">
      <img
        src="/logos/lechiller.png"
        alt="Le Chiller"
        className="h-6 w-auto object-contain"
        onError={() => setErrored(true)}
      />
    </span>
  );
}

/* ----- Blurred logo placeholder for anonymized companies ----- */
function BlurredLogoChip() {
  return (
    <span
      aria-label="Anonymized employer"
      className="inline-block h-[14px] w-10 shrink-0 rounded-md bg-gradient-to-r from-slate-400/70 via-slate-500/60 to-slate-400/70 opacity-50 [filter:blur(0.6px)]"
    />
  );
}

/* ----------------------------------------------------------
   useIsMobile — single matchMedia listener
---------------------------------------------------------- */
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);
  return isMobile;
}

/* ----------------------------------------------------------
   MobileDemoMockup — iPhone-shaped frame with the 4-step demo
   adapted for narrow screens. Mirrors the desktop sequence:
   1. brief typed → 2. EMILY analyses + cards appear → 3. WhatsApp
   bottom sheet → 4. iOS-style reply notification.
---------------------------------------------------------- */
function MobileDemoMockup({ step, runId }: { step: number; runId: number }) {
  return (
    <div className="relative mx-auto" style={{ maxWidth: 320 }}>
      {/* iPhone frame */}
      <div
        className="relative mx-auto overflow-hidden rounded-[44px] border border-ink/15 bg-[#0E1F37] p-[6px] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.6)]"
        style={{ aspectRatio: "9/19" }}
      >
        {/* Inner screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-[#F7F8FA]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-[#0E1F37]" />

          {/* Status bar */}
          <div className="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between px-7 pt-2.5 text-[10px] font-semibold text-slate-900">
            <span>9:41</span>
            <span className="opacity-70">●●● ▮</span>
          </div>

          {/* App content */}
          <div className="absolute inset-0 pt-12 pb-6">
            <MobileDemoContent step={step} runId={runId} />
          </div>

          {/* Reply notification — step 3 */}
          <AnimatePresence>
            {step >= 3 && (
              <motion.div
                key={`notif-${runId}`}
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -80, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 24 }}
                className="absolute inset-x-3 top-12 z-40 flex items-center gap-2.5 rounded-2xl bg-white/95 px-3 py-2.5 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] ring-1 ring-slate-200"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#25D366] text-white">
                  <WhatsAppCircleIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 text-[10px] text-slate-500">
                    <span className="font-semibold text-slate-700">M. Dubois</span>
                    <span>now</span>
                  </div>
                  <div className="truncate text-[12px] font-medium text-slate-900">
                    Sounds great — when do we chat?
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MobileDemoContent({ step, runId }: { step: number; runId: number }) {
  return (
    <div className="relative flex h-full flex-col gap-3 px-4">
      {/* App header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-accent text-white">
            <FingerprintMark size={14} color="#fff" />
          </span>
          <span className="text-[12px] font-bold uppercase tracking-wider text-slate-900">
            TrueCalling
          </span>
        </div>
        <span className="size-7 rounded-full bg-slate-200" />
      </div>

      {/* Step 0 — brief input */}
      {step === 0 && (
        <motion.div
          key={`brief-${runId}`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
        >
          <div className="text-[9.5px] uppercase tracking-[0.18em] text-slate-500">Brief</div>
          <div className="mt-1.5 min-h-[44px] text-[12.5px] leading-relaxed text-slate-900">
            <BriefTypewriter runId={runId} />
          </div>
          <button className="mt-3 w-full rounded-md bg-accent py-2 text-[11.5px] font-semibold text-white">
            Search
          </button>
        </motion.div>
      )}

      {/* Step 1 — EMILY analysing then candidate cards */}
      {(step === 1 || step === 2 || step === 3) && (
        <div className="mt-2 flex flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg bg-accent/10 px-2.5 py-1.5">
            <span className="flex size-5 items-center justify-center rounded-full bg-accent text-white text-[9px] font-bold">
              E
            </span>
            <span className="text-[10.5px] font-medium text-accent">
              EMILY analysed 1.2B profiles
            </span>
          </div>
          <MobileCandidateCard
            initials="MD"
            name="M. Dubois"
            role="Senior Product Designer"
            score={96}
            highlight={step >= 2}
            delay={0}
          />
          <MobileCandidateCard
            initials="SK"
            name="S. Klein"
            role="Lead Product Designer"
            score={92}
            delay={0.15}
          />
          <MobileCandidateCard
            initials="LP"
            name="L. Petit"
            role="Senior UX Designer"
            score={88}
            delay={0.3}
          />
        </div>
      )}

      {/* Step 2 — WhatsApp bottom sheet */}
      <AnimatePresence>
        {step === 2 && (
          <motion.div
            key={`wa-${runId}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute inset-x-0 bottom-0 z-30 flex flex-col rounded-t-3xl bg-[#EFEAE2] shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.2)]"
            style={{ height: "62%" }}
          >
            <div className="flex items-center gap-2.5 border-b border-black/5 bg-white px-4 py-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <WhatsAppCircleIcon />
              </span>
              <div className="flex-1">
                <div className="text-[12px] font-semibold text-slate-900">M. Dubois</div>
                <div className="text-[10px] text-slate-500">via WhatsApp</div>
              </div>
            </div>
            <div className="flex-1 overflow-hidden p-4">
              <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#D9FDD3] px-3 py-2 text-[11.5px] leading-relaxed text-slate-900 shadow-sm">
                <WaTypewriter runId={runId} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileCandidateCard({
  initials,
  name,
  role,
  score,
  highlight = false,
  delay = 0,
}: {
  initials: string;
  name: string;
  role: string;
  score: number;
  highlight?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-2.5 rounded-xl border bg-white p-2.5 transition-all ${
        highlight ? "border-accent/60 shadow-[0_8px_20px_-8px_rgba(233,30,140,0.4)]" : "border-slate-200"
      }`}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-[11px] font-bold text-white">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[12px] font-semibold text-slate-900">{name}</div>
        <div className="truncate text-[10.5px] text-slate-500">{role}</div>
      </div>
      <span className="rounded-md bg-accent/10 px-1.5 py-0.5 text-[10.5px] font-bold text-accent">
        {score}%
      </span>
    </motion.div>
  );
}

function BriefTypewriter({ runId }: { runId: number }) {
  const text = "Senior Product Designer, Paris, 5+ years, SaaS B2B";
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 45);
    return () => clearInterval(id);
  }, [runId]);
  return (
    <span>
      {shown}
      <span className="ml-0.5 inline-block h-3 w-px bg-slate-700 align-middle animate-pulse" />
    </span>
  );
}

function WaTypewriter({ runId }: { runId: number }) {
  const text =
    "Hi M., I have a Senior Product Designer role that fits your profile. 15 min this week to chat?";
  const [shown, setShown] = useState("");
  useEffect(() => {
    setShown("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [runId]);
  return <>{shown}</>;
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
            i === step ? "w-8 bg-accent" : "w-1.5 bg-ink/15"
          }`}
        />
      ))}
    </div>
  );
}

function BrowserChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-[#0E1F37] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-2 border-b border-ink/[0.06] bg-bg/60 px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#FF5F57]" />
        <span className="size-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="size-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-4 flex h-6 flex-1 items-center justify-center rounded-md bg-ink/[0.04] px-3 text-[11px] text-ink-muted">
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
      <div className="relative mb-2">
        <FingerprintMark size={22} color="#E91E8C" />
        <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-accent shadow-[0_0_6px_rgba(233,30,140,0.7)]" />
      </div>
      {items.map((it) => (
        <div
          key={it.id}
          className={`relative flex size-9 items-center justify-center rounded-lg transition-colors ${
            it.active
              ? "bg-pink-50 text-accent ring-1 ring-pink-100"
              : "text-slate-400"
          }`}
        >
          {it.active && (
            <motion.span
              layoutId="sidebar-active"
              className="absolute -left-1.5 h-5 w-[3px] rounded-r-full bg-accent"
              transition={{ type: "spring", stiffness: 280, damping: 26 }}
            />
          )}
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
      {/* Refine search criteria — inline text with pink links */}
      <div className="mb-3 flex items-center gap-2 text-[11px] text-slate-700">
        <FilterIcon />
        <span className="font-semibold text-slate-900">Refine search criteria</span>
        <span className="text-accent">Paris</span>
        <span className="text-slate-300">·</span>
        <span className="text-accent">Figma, Design Systems, User Research, Prototyping</span>
        <span className="text-slate-300">·</span>
        <span className="text-accent">Remote, Senior</span>
      </div>

      {/* Status line */}
      <div className="mb-3 flex items-center gap-2 text-[11px]">
        {analyzing ? (
          <>
            <SparkleIconSm />
            <span className="font-semibold text-violet-700">
              AI analysis in progress…{" "}
              <span className="font-medium text-violet-400">(12/50)</span>
            </span>
            <span className="ml-1 inline-flex gap-0.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="size-1 rounded-full bg-violet-500 animate-pulse-soft"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </span>
          </>
        ) : (
          <>
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold text-slate-700">
              50 candidats analysés{" "}
              <span className="font-medium text-slate-500">· top 4 affichés</span>
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
          <div className="flex items-center gap-1.5">
            <span className="truncate text-[12px] font-semibold text-slate-900">{c.name}</span>
            <ScoreBadge value={c.score} />
            <LocScoreBadge value={c.locScore} />
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
          <div className="mt-0.5 flex items-center gap-1 truncate text-[10.5px] text-slate-500">
            <span className="truncate">{c.role}</span>
            <span aria-hidden>·</span>
            <BlurredLogoChip />
            <span aria-hidden>·</span>
            <span className="truncate">
              {c.city} · {c.years.toFixed(1)}a exp.
            </span>
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
    <div className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-1.5 py-0.5 ring-1 ring-emerald-100">
      <CheckIcon className="size-2.5 text-emerald-600" />
      <motion.span className="text-[10px] font-bold tabular-nums text-emerald-700">
        {rounded}
      </motion.span>
    </div>
  );
}

function LocScoreBadge({ value }: { value: number }) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}%`);

  useEffect(() => {
    const controls = framerAnimate(mv, value, { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 });
    return () => controls.stop();
  }, [value, mv]);

  return (
    <div className="inline-flex items-center gap-0.5 rounded-full bg-cyan-50 px-1.5 py-0.5 ring-1 ring-cyan-100">
      <GlobeIcon />
      <motion.span className="text-[10px] font-bold tabular-nums text-cyan-700">
        {rounded}
      </motion.span>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500" aria-hidden="true">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function SparkleIconSm() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-violet-500" aria-hidden="true">
      <path d="M12 2l1.8 5.4L19 9l-5.2 1.6L12 16l-1.8-5.4L5 9l5.2-1.6L12 2z" />
    </svg>
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
      className="absolute inset-y-0 right-0 flex w-[58%] flex-col border-l border-slate-200 bg-white shadow-[-20px_0_60px_-20px_rgba(15,23,42,0.18)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-[#25D366]">
          <WhatsAppGlyph />
        </div>
        <div className="flex-1">
          <div className="text-[12.5px] font-semibold text-slate-900">M. Dubois</div>
          <div className="text-[10.5px] text-slate-500">WhatsApp · en ligne</div>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-100">
          <CheckIcon className="size-2.5" /> 96%
        </span>
      </div>

      {/* Messages — cream WhatsApp-style background */}
      <div
        className="flex-1 space-y-3 overflow-hidden p-4"
        style={{
          backgroundColor: "#EFEAE2",
          backgroundImage:
            "radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-accent px-3.5 py-2.5 text-[12px] leading-relaxed text-white shadow-[0_4px_12px_-6px_rgba(233,30,140,0.45)]"
        >
          {typed}
          {typed.length < WHATSAPP_MSG.length && (
            <span className="ml-0.5 inline-block h-3 w-[1.5px] translate-y-0.5 bg-ink/80 align-middle animate-pulse" />
          )}
        </motion.div>

        {showResponse && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-[75%] rounded-2xl rounded-bl-sm bg-white px-3.5 py-2.5 text-[12px] leading-relaxed text-slate-900 shadow-[0_2px_6px_-2px_rgba(15,23,42,0.12)]"
          >
            Bonjour, oui avec plaisir. Jeudi 14h ça vous convient&nbsp;?
          </motion.div>
        )}
      </div>

      {/* Composer */}
      <div className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-2.5">
        <div className="flex-1 rounded-full bg-slate-100 px-3 py-1.5 text-[11px] text-slate-400">
          Tapez un message…
        </div>
        <button className="flex size-7 items-center justify-center rounded-full bg-accent shadow-sm">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
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
function Pricing() {
  const t = useT();
  const href = useLocalizedHref();
  const [annual, setAnnual] = useState(false);

  const TIERS = [
    {
      name: "Starter",
      priceMonthly: 595 as number | null,
      tagline: t("starter_tagline"),
      features: [
        t("starter_f1"), t("starter_f2"), t("starter_f3"), t("starter_f4"),
        t("starter_f5"), t("starter_f6"), t("starter_f7"),
      ],
      cta: t("cta_start"),
      ctaVariant: "outline" as const,
      highlight: false,
    },
    {
      name: "Core",
      priceMonthly: 895 as number | null,
      tagline: t("core_tagline"),
      features: [t("core_f1"), t("core_f2"), t("core_f3"), t("core_f4")],
      cta: t("cta_book_demo"),
      ctaVariant: "primary" as const,
      highlight: true,
    },
    {
      name: "Enterprise",
      priceMonthly: null as number | null,
      tagline: t("enterprise_tagline"),
      features: [t("ent_f1"), t("ent_f2"), t("ent_f3"), t("ent_f4")],
      cta: t("cta_contact"),
      ctaVariant: "outline" as const,
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="relative overflow-hidden py-20 sm:py-24">
      <SectionAmbience top intensity={0.35} />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-accent">
            {t("pricing_eyebrow")}
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-3 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            {t("pricing_h2")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
            {t("pricing_subtitle")}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 inline-flex items-center gap-3">
            <BillingToggle annual={annual} onChange={setAnnual} />
          </motion.div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-stretch">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex flex-col rounded-2xl border p-7 ${
                tier.highlight
                  ? "border-accent/50 bg-surface/60 shadow-[0_0_0_1px_rgba(233,30,140,0.4),0_15px_40px_-20px_rgba(233,30,140,0.35)] sm:shadow-[0_0_0_1px_rgba(233,30,140,0.55),0_30px_80px_-30px_rgba(233,30,140,0.55)] lg:-translate-y-3 lg:py-9"
                  : "border-ink/[0.08] bg-surface/30"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                  {t("pricing_most_popular")}
                </span>
              )}

              <div className="mb-1 text-sm font-medium text-ink-muted">{tier.name}</div>

              <div className="mb-2 flex items-baseline gap-1">
                {tier.priceMonthly === null ? (
                  <span className="text-3xl font-semibold tracking-tighter2">{t("pricing_quote")}</span>
                ) : (
                  <>
                    <span className="text-4xl font-semibold tracking-tighter2 sm:text-5xl">
                      ${annual ? Math.round(tier.priceMonthly * 0.8) : tier.priceMonthly}
                    </span>
                    <span className="text-sm text-ink-muted">{t("pricing_per_user")}</span>
                  </>
                )}
              </div>

              <p className="mb-6 text-[13.5px] leading-relaxed text-ink-muted">{tier.tagline}</p>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] text-ink/90">
                    <span className="mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                      <CheckIcon className="size-3" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href={href("book-a-demo")} variant={tier.ctaVariant} size="md" className="w-full">
                {tier.cta}
              </CTAButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BillingToggle({ annual, onChange }: { annual: boolean; onChange: (v: boolean) => void }) {
  const t = useT();
  return (
    <div
      role="radiogroup"
      aria-label={t("pricing_billing_aria")}
      className="inline-flex items-center gap-2 rounded-full border border-ink/[0.08] bg-ink/[0.03] p-1 backdrop-blur-md"
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
            className="absolute inset-0 rounded-full bg-ink"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          />
        )}
        <span className="relative">{t("pricing_monthly")}</span>
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
            className="absolute inset-0 rounded-full bg-ink"
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          />
        )}
        <span className="relative inline-flex items-center gap-1.5">
          {t("pricing_annual")}
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
  const t = useT();
  const href = useLocalizedHref();
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-surface to-accent/40" />
        <div className="absolute -left-20 top-10 size-[60vw] max-w-[700px] rounded-full bg-accent/40 blur-[60px] sm:blur-[110px] animate-blob-1" />
        <div className="absolute -right-10 bottom-0 size-[55vw] max-w-[640px] rounded-full bg-fuchsia-500/35 blur-[70px] sm:blur-[120px] animate-blob-2" />
      </div>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 text-center">
        <Reveal>
          <motion.h2
            variants={fadeUp}
            className="text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            {t("final_h2")}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-4 sm:mt-5 max-w-xl text-base sm:text-lg text-ink/80">
            {t("final_subtitle")}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 sm:mt-10">
            <CTAButton href={href("book-a-demo")} variant="white" size="lg">
              {t("cta_book_demo")}
            </CTAButton>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

/* Footer is mounted globally in app/[locale]/layout.tsx */
