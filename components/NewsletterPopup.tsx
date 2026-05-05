"use client";

import { useEffect, useState, useTransition } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";
import { createPortal } from "react-dom";
import { X, Mail, Check } from "lucide-react";
import { useT, useLocalizedHref } from "../app/_i18n/locale-context";
import { subscribeToNewsletter } from "../app/actions/newsletter";

/* ============================================================
   NewsletterPopup — auto-triggered modal with statistical hook
   on the cost of bad hires + email signup (Beehiiv backend).

   Triggers (whichever fires first):
   - 20s of presence on the page
   - 50% scroll depth

   Throttled to once per visitor every 30 days via localStorage.

   Statistics in the dictionary keys (newsletter_popup_hook /
   newsletter_popup_hook_context) are sourced — see
   docs/sources-statistiques.md for the underlying studies.
   Update both the dict AND that doc when figures change.
   ============================================================ */

const POPUP_SHOWN_KEY = "tc_newsletter_popup_shown";
const POPUP_EXPIRY_DAYS = 30;
const TIME_TRIGGER_MS = 20_000;
const SCROLL_TRIGGER_PERCENT = 50;

export function NewsletterPopup() {
  const t = useT();
  const href = useLocalizedHref();
  const reduce = useReducedMotion();

  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<
    { success: boolean; error?: string } | null
  >(null);

  // createPortal needs document — only mount on the client.
  useEffect(() => setMounted(true), []);

  // Trigger logic: timer + scroll, throttled to once per 30 days
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem(POPUP_SHOWN_KEY);
    if (stored) {
      const shownAt = parseInt(stored, 10);
      const expiryMs = POPUP_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
      if (!Number.isNaN(shownAt) && Date.now() - shownAt < expiryMs) return;
    }

    let alreadyTriggered = false;
    const trigger = () => {
      if (alreadyTriggered) return;
      alreadyTriggered = true;
      setIsOpen(true);
    };

    const timeoutId = window.setTimeout(trigger, TIME_TRIGGER_MS);

    const onScroll = () => {
      if (alreadyTriggered) return;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const percent = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (percent >= SCROLL_TRIGGER_PERCENT) trigger();
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Mark as shown the moment the popup actually opens
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      localStorage.setItem(POPUP_SHOWN_KEY, Date.now().toString());
    }
  }, [isOpen]);

  // ESC closes the popup
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setResult(null);
    startTransition(async () => {
      const fd = new FormData();
      fd.append("email", email.trim());
      const res = await subscribeToNewsletter(fd);
      setResult(res);
    });
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset after the exit animation in case the user reopens via dev tools
    window.setTimeout(() => {
      setEmail("");
      setResult(null);
    }, 300);
  };

  const motionProps = reduce
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.15 },
      }
    : {
        initial: { opacity: 0, scale: 0.95, y: 20 },
        animate: { opacity: 1, scale: 1, y: 0 },
        exit: { opacity: 0, scale: 0.95, y: 20 },
        transition: { type: "spring" as const, damping: 25, stiffness: 300 },
      };

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="np-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            key="np-modal"
            {...motionProps}
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-popup-title"
            className="fixed left-1/2 top-1/2 z-[9999] w-[90vw] max-w-md max-h-[90vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-ink/[0.08] p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] sm:p-8"
            style={{ backgroundColor: "rgb(var(--bg))" }}
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label={t("newsletter_popup_close_label")}
              className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-ink/[0.06] hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            >
              <X size={18} />
            </button>

            {result?.success ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex size-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-400/40">
                  <Check size={32} className="text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  {t("newsletter_popup_success_title")}
                </h2>
                <p className="mt-2 text-ink-muted">
                  {t("newsletter_popup_success_message")}
                </p>
              </div>
            ) : (
              <>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1">
                  <Mail size={13} className="text-accent" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                    {t("newsletter_popup_badge")}
                  </span>
                </div>

                <h2
                  id="newsletter-popup-title"
                  className="mb-3 text-balance text-2xl font-bold leading-tight tracking-tight text-ink sm:text-[28px]"
                >
                  {t("newsletter_popup_hook")}
                </h2>

                <p className="mb-5 leading-relaxed text-ink-muted">
                  {t("newsletter_popup_hook_context")}
                </p>

                <div className="mb-5 h-px bg-ink/[0.08]" />

                <p className="mb-5 font-medium leading-relaxed text-ink">
                  {t("newsletter_popup_promise")}
                </p>

                <form onSubmit={handleSubmit} className="space-y-3" noValidate>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder={t("newsletter_popup_placeholder")}
                    autoComplete="email"
                    autoFocus
                    className="w-full rounded-lg border border-ink/10 bg-ink/[0.02] px-4 py-3 text-[14px] text-ink placeholder:text-ink-muted/60 transition-all focus:border-accent/60 focus:outline-none focus:ring-2 focus:ring-accent/30"
                  />

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full rounded-lg bg-accent px-4 py-3 text-[14px] font-semibold text-white shadow-[0_8px_30px_rgba(233,30,140,0.35)] transition-all hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
                  >
                    {isPending
                      ? t("newsletter_popup_submitting")
                      : t("newsletter_popup_button")}
                  </button>

                  {result && !result.success && result.error && (
                    <p
                      role="alert"
                      className="text-center text-[13px] text-rose-400"
                    >
                      {result.error === "INVALID_EMAIL"
                        ? t("newsletter_popup_error_invalid_email")
                        : t("newsletter_popup_error_generic")}
                    </p>
                  )}
                </form>

                <p className="mt-4 text-center text-[11.5px] leading-relaxed text-ink-muted">
                  {t("newsletter_popup_privacy_note")}{" "}
                  <a
                    href={href("privacy")}
                    className="underline-offset-2 hover:text-accent hover:underline"
                  >
                    {t("newsletter_popup_privacy_link_text")}
                  </a>
                  .
                </p>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(overlay, document.body);
}
