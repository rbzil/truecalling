"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useT, useLocale, useLocalizedHref } from "../app/_i18n/locale-context";
import { LanguageSwitcher } from "../app/_i18n/language-switcher";
import { ThemeToggle } from "./ThemeToggle";
import { blogEnabledLocales } from "../lib/i18n-config";

/* ============================================================
   MobileMenu — hamburger button + slide-from-right drawer.
   Visible only on < md (handled with `md:hidden` on the trigger).
   Inside: nav links + theme toggle + language switcher + login.
   ============================================================ */

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const t = useT();
  const { locale } = useLocale();
  const href = useLocalizedHref();
  const reduce = useReducedMotion();
  const showBlog = (blogEnabledLocales as readonly string[]).includes(locale);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links: { label: string; href: string }[] = [
    { label: t("nav_features"), href: href("home", { hash: "#features" }) },
    { label: t("nav_how"), href: href("home", { hash: "#how-it-works" }) },
    { label: t("nav_benefits"), href: href("home", { hash: "#benefits" }) },
    { label: t("nav_demo"), href: href("home", { hash: "#demo" }) },
    { label: t("nav_pricing"), href: href("home", { hash: "#pricing" }) },
    ...(showBlog ? [{ label: t("nav_blog"), href: href("blog") }] : []),
    { label: t("nav_faq"), href: href("faq") },
    { label: t("nav_contact"), href: href("contact") },
  ];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.03] text-ink transition-colors hover:border-ink/20 hover:bg-ink/[0.06] cursor-pointer"
      >
        <Menu size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0.1 : 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              initial={reduce ? { opacity: 0 } : { x: "100%" }}
              animate={reduce ? { opacity: 1 } : { x: 0 }}
              exit={reduce ? { opacity: 0 } : { x: "100%" }}
              transition={
                reduce
                  ? { duration: 0.15 }
                  : { type: "spring", damping: 28, stiffness: 230 }
              }
              className="fixed bottom-0 right-0 top-0 z-50 flex w-[85%] max-w-sm flex-col gap-6 overflow-y-auto bg-bg p-6 md:hidden border-l border-ink/[0.08]"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-muted">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.03] text-ink transition-colors hover:border-ink/20 hover:bg-ink/[0.06] cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Primary">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-[44px] items-center rounded-lg px-3 text-[16px] font-medium text-ink transition-colors hover:bg-ink/[0.06] cursor-pointer"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-3 border-t border-ink/[0.06] pt-5">
                <a
                  href="https://truecalling.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] px-4 text-[14px] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.06]"
                >
                  {t("nav_login")}
                </a>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                    {t("nav_features").length > 0 ? "Theme · Language" : ""}
                  </span>
                  <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
