"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useT } from "../app/_i18n/locale-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const t = useT();

  useEffect(() => setMounted(true), []);

  // Match the dropdown button size from LanguageSwitcher (h-9 w-9-ish) so the
  // navbar layout stays stable during hydration.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-block h-9 w-9 rounded-full border border-ink/10 bg-ink/[0.03]"
      />
    );
  }

  const isDark = theme === "dark";
  const transition = shouldReduceMotion
    ? { duration: 0.1 }
    : { duration: 0.25, ease: "easeOut" as const };

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? t("theme_to_light") : t("theme_to_dark")}
      className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-ink/10 bg-ink/[0.03] text-ink-muted transition-colors hover:border-ink/20 hover:bg-ink/[0.06] hover:text-ink cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { rotate: -90, opacity: 0, scale: 0.6 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: 1 }
              : { rotate: 0, opacity: 1, scale: 1 }
          }
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { rotate: 90, opacity: 0, scale: 0.6 }
          }
          transition={transition}
          className="absolute inline-flex"
        >
          {isDark ? <Moon size={16} /> : <Sun size={16} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
