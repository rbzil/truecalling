"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_META, type Locale } from "./dictionary";
import { useLocale } from "./locale-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const current = LOCALE_META[locale];

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 text-[12.5px] font-medium text-ink-muted transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-ink cursor-pointer"
      >
        <span className="text-[14px] leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`transition-transform ${open ? "rotate-180" : ""}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            role="listbox"
            className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0E1F37]/95 p-1.5 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            {LOCALES.map((l) => {
              const m = LOCALE_META[l];
              const active = l === locale;
              return (
                <li key={l} role="option" aria-selected={active}>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale(l as Locale);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] transition-colors cursor-pointer ${
                      active
                        ? "bg-accent/15 text-accent"
                        : "text-ink-muted hover:bg-white/[0.06] hover:text-ink"
                    }`}
                  >
                    <span className="text-[16px] leading-none">{m.flag}</span>
                    <span className="flex-1 truncate font-medium">{m.native}</span>
                    {active && (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="4 12 10 18 20 6" />
                      </svg>
                    )}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
