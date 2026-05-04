"use client";

import Link from "next/link";
import { useT, useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar } from "../../../components/SiteNavbar";

/* ============================================================
   Privacy policy — stub. Doubles as the GDPR target via #rgpd.
   TODO (owner): replace placeholder copy with content drafted by a
   lawyer or via a dedicated GDPR review before launch.
   ============================================================ */

export default function Page() {
  const t = useT();
  const href = useLocalizedHref();

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <Navbar />

      <article className="relative px-5 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            href={href("home")}
            className="inline-flex items-center gap-1.5 text-[13px] text-ink-muted transition-colors hover:text-ink cursor-pointer"
          >
            ← {t("legal_back_home")}
          </Link>

          <h1
            className="mt-7 text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            {t("privacy_title")}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
            {t("privacy_intro")}
          </p>

          <section
            id="rgpd"
            className="mt-12 rounded-2xl border border-ink/[0.08] bg-surface/30 p-6 backdrop-blur-md sm:p-8"
          >
            <h2 className="text-2xl font-semibold tracking-tight">
              {t("privacy_gdpr_anchor_title")}
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">
              {t("privacy_gdpr_anchor_body")}
            </p>
          </section>

          <div className="mt-10 rounded-2xl border border-amber-400/30 bg-amber-500/5 p-6 text-[14px] leading-relaxed text-ink/90">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
              TODO
            </span>
            <p className="mt-2">{t("privacy_todo")}</p>
          </div>
        </div>
      </article>
    </main>
  );
}

function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute -left-20 top-[5%] size-[55vw] max-w-[700px] rounded-full bg-accent/20 blur-[60px] sm:blur-[120px]" />
      <div className="absolute right-[-5%] top-[35%] size-[50vw] max-w-[640px] rounded-full bg-surface/60 blur-[60px] sm:blur-[130px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgb(var(--bg))_85%)]" />
    </div>
  );
}
