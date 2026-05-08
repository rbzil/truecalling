"use client";

import Link from "next/link";
import { useT, useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar, CTAButton } from "@/components/SiteNavbar";

/* ============================================================
   Standalone Features page — /[locale]/fonctionnalites etc.
   The home page has a Features grid; this page exists as a
   real, indexable surface that goes deeper on each capability
   and can rank for keyword variants like "AI sourcing features",
   "TrueFit 360", "EMILY copilot", etc.
   ============================================================ */

export default function FeaturesPage() {
  const t = useT();
  const href = useLocalizedHref();

  const featureCards: { key: string; title: string; desc: string }[] = [
    { key: "f1", title: t("f1_title"), desc: t("f1_desc") },
    { key: "f2", title: t("f2_title"), desc: t("f2_desc") },
    { key: "f3", title: t("f3_title"), desc: t("f3_desc") },
    { key: "f4", title: t("f4_title"), desc: t("f4_desc") },
    { key: "f5", title: t("f5_title"), desc: t("f5_desc") },
    { key: "f6", title: t("f6_title"), desc: t("f6_desc") },
  ];

  const workflowSteps: { n: string; title: string; desc: string }[] = [
    { n: "01", title: t("s1_title"), desc: t("s1_desc") },
    { n: "02", title: t("s2_title"), desc: t("s2_desc") },
    { n: "03", title: t("s3_title"), desc: t("s3_desc") },
    { n: "04", title: t("s4_title"), desc: t("s4_desc") },
    { n: "05", title: t("s5_title"), desc: t("s5_desc") },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
            {t("features_eyebrow")}
          </span>
          <h1
            className="mx-auto mt-5 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            {t("features_h2_a")}{" "}
            <span className="bg-gradient-to-r from-accent via-pink-400 to-accent bg-clip-text text-transparent">
              TrueCalling
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {t("features_subtitle")}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton href={href("book-a-demo")} size="lg">
              {t("hero_cta_demo")}
            </CTAButton>
            <Link
              href={href("pricing")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] px-5 text-[14px] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.06]"
            >
              {t("nav_pricing") || "See pricing"}
            </Link>
          </div>
        </div>
      </section>

      {/* Capability grid — 6 cards */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((f) => (
              <article
                key={f.key}
                className="group rounded-2xl border border-ink/[0.08] bg-surface/30 p-6 backdrop-blur-md transition-colors hover:border-accent/40"
              >
                <h2 className="text-[16px] font-semibold leading-tight tracking-tight text-ink">
                  {f.title}
                </h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-ink-muted">
                  {f.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* End-to-end workflow */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11.5px] font-medium text-accent">
              {t("how_eyebrow")}
            </span>
            <h2
              className="mt-4 max-w-3xl text-balance font-semibold tracking-tight"
              style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)" }}
            >
              {t("how_subtitle")}
            </h2>
          </div>
          <ol className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-ink/[0.06] bg-surface/30 p-6 backdrop-blur-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {s.n}
                </div>
                <h3 className="mt-2 text-[16px] font-semibold leading-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] via-accent/[0.04] to-transparent p-8 text-center backdrop-blur-md sm:p-12">
          <h2
            className="mx-auto max-w-2xl text-balance font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)" }}
          >
            {t("hero_h1_a")} {t("hero_h1_b")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-ink-muted">
            {t("hero_subtitle_line1")}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton href={href("book-a-demo")} size="lg">
              {t("hero_cta_demo")}
            </CTAButton>
            <Link
              href={href("pricing")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] px-5 text-[14px] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.06]"
            >
              {t("nav_pricing") || "See pricing"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

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
