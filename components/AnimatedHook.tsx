"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

/* ============================================================
   AnimatedHook — editorial hook for the newsletter popup.

   Renders three text segments (before · highlight · after) with
   per-word stagger, an italic-serif highlight in brand accent,
   and a gradient underline that draws in after the highlight
   lands. Honors prefers-reduced-motion (collapses to a single
   fade-in with no stagger / overshoot).
   ============================================================ */

interface AnimatedHookProps {
  before: string;
  highlight: string;
  after: string;
  isRTL?: boolean;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const containerVariantsReduced: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const highlightVariants: Variants = {
  hidden: { opacity: 0, y: 16, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.34, 1.56, 0.64, 1], // subtle overshoot
      delay: 0.4,
    },
  },
};

const underlineVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.9 },
  },
};

const reducedSimple: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export function AnimatedHook({
  before,
  highlight,
  after,
  isRTL = false,
}: AnimatedHookProps) {
  const reduce = useReducedMotion();

  const beforeWords = before.split(/\s+/).filter(Boolean);
  const afterWords = after.split(/\s+/).filter(Boolean);

  const fontFamily = isRTL ? "font-serif-he" : "font-serif";

  return (
    <motion.h2
      id="newsletter-popup-title"
      variants={reduce ? containerVariantsReduced : containerVariants}
      initial="hidden"
      animate="visible"
      className={`mb-4 text-balance text-3xl font-normal tracking-tight text-ink ${fontFamily} sm:text-[40px]`}
      style={{ lineHeight: isRTL ? 1.3 : 1.1 }}
    >
      {beforeWords.map((word, i) => (
        <motion.span
          key={`before-${i}`}
          variants={reduce ? reducedSimple : wordVariants}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}

      <motion.span
        variants={reduce ? reducedSimple : highlightVariants}
        className={`relative mr-[0.25em] inline-block italic text-accent ${fontFamily}`}
        style={{ letterSpacing: "-0.01em" }}
      >
        {highlight}
        <motion.span
          variants={reduce ? reducedSimple : underlineVariants}
          aria-hidden="true"
          className={`absolute -bottom-1 left-0 right-0 h-[3px] rounded-full ${
            isRTL ? "origin-right" : "origin-left"
          }`}
          style={{
            background:
              "linear-gradient(90deg, rgb(var(--accent)) 0%, rgb(var(--accent) / 0.6) 60%, rgb(var(--accent) / 0) 100%)",
          }}
        />
      </motion.span>

      {afterWords.map((word, i) => (
        <motion.span
          key={`after-${i}`}
          variants={reduce ? reducedSimple : wordVariants}
          className="mr-[0.25em] inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.h2>
  );
}
