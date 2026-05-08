"use client";

import Link from "next/link";
import { useT, useLocalizedHref } from "../../_i18n/locale-context";
import { Navbar, CTAButton } from "@/components/SiteNavbar";

/* ============================================================
   Standalone Pricing page — /[locale]/tarifs etc.
   The home page has a Pricing section; this page exists as a
   real, indexable surface that tabulates the 3 tiers, surfaces
   the no-credit-card demo trial offer, and answers a Pricing FAQ
   so it can rank for "TrueCalling pricing", "AI sourcing pricing",
   "AI recruiting software cost", etc.
   ============================================================ */

type Tier = {
  id: string;
  name: string;
  price: string;
  unit: string;
  tagline: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
  badge?: string;
};

export default function PricingPage() {
  const t = useT();
  const href = useLocalizedHref();

  const tiers: Tier[] = [
    {
      id: "starter",
      name: "Starter",
      price: "$595",
      unit: t("pricing_per_user"),
      tagline: t("starter_tagline"),
      features: [
        t("starter_f1"),
        t("starter_f2"),
        t("starter_f3"),
        t("starter_f4"),
        t("starter_f5"),
        t("starter_f6"),
        t("starter_f7"),
      ],
      ctaLabel: t("hero_cta_demo"),
      ctaHref: href("book-a-demo"),
    },
    {
      id: "core",
      name: "Core",
      price: "$895",
      unit: t("pricing_per_user"),
      tagline: t("core_tagline"),
      features: [
        t("core_f1"),
        t("core_f2"),
        t("core_f3"),
        t("core_f4"),
      ],
      ctaLabel: t("hero_cta_demo"),
      ctaHref: href("book-a-demo"),
      highlighted: true,
      badge: t("pricing_most_popular"),
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: t("pricing_quote"),
      unit: "",
      tagline: t("enterprise_tagline"),
      features: [
        t("ent_f1"),
        t("ent_f2"),
        t("ent_f3"),
        t("ent_f4"),
      ],
      ctaLabel: t("cta_contact"),
      ctaHref: href("contact"),
    },
  ];

  const faq: { q: string; a: string }[] = [
    { q: t("pricing_faq_q1"), a: t("pricing_faq_a1") },
    { q: t("pricing_faq_q2"), a: t("pricing_faq_a2") },
    { q: t("pricing_faq_q3"), a: t("pricing_faq_a3") },
    { q: t("pricing_faq_q4"), a: t("pricing_faq_a4") },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-bg text-ink">
      <BackgroundDecor />
      <Navbar />

      {/* Hero */}
      <section className="relative px-5 pt-28 pb-12 sm:px-8 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-ink/[0.03] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-ink-muted backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(233,30,140,0.7)]" />
            {t("pricing_eyebrow")}
          </span>
          <h1
            className="mx-auto mt-5 max-w-3xl text-balance font-semibold leading-[1.05] tracking-tighter2"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            {t("pricing_h2")}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            {t("pricing_subtitle")}
          </p>
        </div>
      </section>

      {/* Trial callout — no credit card demo */}
      <section className="relative px-5 pb-12 sm:px-8 sm:pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/[0.14] via-accent/[0.05] to-transparent p-6 backdrop-blur-md sm:p-8">
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-[11.5px] font-medium text-emerald-300">
                  <CheckIcon className="size-3" /> {t("pricing_trial_eyebrow")}
                </span>
                <h2 className="mt-3 text-balance text-[20px] font-semibold leading-snug tracking-tight sm:text-[22px]">
                  {t("pricing_trial_h")}
                </h2>
                <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-ink-muted">
                  {t("pricing_trial_lede")}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {[t("pricing_trial_b1"), t("pricing_trial_b2"), t("pricing_trial_b3")].map(
                    (b) => (
                      <li key={b} className="flex items-center gap-2 text-[13.5px] text-ink">
                        <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                          <CheckIcon className="size-2.5" />
                        </span>
                        {b}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="shrink-0">
                <CTAButton href={href("book-a-demo")} size="lg">
                  {t("pricing_trial_cta")}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="relative px-5 pb-14 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            {tiers.map((tier) => (
              <article
                key={tier.id}
                className={`relative flex flex-col rounded-3xl border p-7 backdrop-blur-md transition-colors ${
                  tier.highlighted
                    ? "border-accent/50 bg-gradient-to-br from-accent/[0.10] via-accent/[0.03] to-transparent"
                    : "border-ink/[0.08] bg-surface/30"
                }`}
              >
                {tier.badge ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white">
                    {tier.badge}
                  </span>
                ) : null}
                <header>
                  <div className="text-[14px] font-semibold tracking-tight text-ink">{tier.name}</div>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-muted">{tier.tagline}</p>
                </header>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-[36px] font-semibold tracking-tight text-ink">
                    {tier.price}
                  </span>
                  {tier.unit ? (
                    <span className="text-[12.5px] text-ink-muted">{tier.unit}</span>
                  ) : null}
                </div>
                <ul className="mt-5 space-y-2.5">
                  {tier.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-[13px] leading-snug text-ink/85"
                    >
                      <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                        <CheckIcon className="size-2.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 grow" />
                <CTAButton
                  href={tier.ctaHref}
                  size="md"
                  variant={tier.highlighted ? undefined : "outline"}
                  className="w-full"
                >
                  {tier.ctaLabel}
                </CTAButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="relative px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2
            className="text-balance font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.5rem, 2.6vw, 2rem)" }}
          >
            {t("pricing_faq_h")}
          </h2>
          <dl className="mt-8 space-y-5">
            {faq.map((row) => (
              <div
                key={row.q}
                className="rounded-2xl border border-ink/[0.08] bg-surface/30 p-5 backdrop-blur-md"
              >
                <dt className="text-[14.5px] font-semibold tracking-tight text-ink">{row.q}</dt>
                <dd className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">{row.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-accent/30 bg-gradient-to-br from-accent/[0.12] via-accent/[0.04] to-transparent p-8 text-center backdrop-blur-md sm:p-12">
          <h2
            className="mx-auto max-w-2xl text-balance font-semibold tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)" }}
          >
            {t("final_h2")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[14.5px] leading-relaxed text-ink-muted">
            {t("final_subtitle")}
          </p>
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            <CTAButton href={href("book-a-demo")} size="lg">
              {t("hero_cta_demo")}
            </CTAButton>
            <Link
              href={href("features")}
              className="inline-flex h-11 items-center justify-center rounded-full border border-ink/15 bg-ink/[0.03] px-5 text-[14px] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.06]"
            >
              {t("nav_features") || "See features"}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
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
