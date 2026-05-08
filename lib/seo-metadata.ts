import type { Metadata } from "next";
import {
  getLocalizedPath,
  locales,
  blogEnabledLocales,
  type Locale,
  type RouteKey,
} from "./i18n-config";

export const SITE_URL = "https://truecalling.ai";

/**
 * Site-wide Open Graph / Twitter card image. 1200×630 PNG, hosted at
 * /brand/og-image.png. Referenced by every generateMetadata so social shares
 * (LinkedIn, WhatsApp, Slack, Facebook, X) render the branded preview card.
 *
 * Next.js does NOT deep-merge `openGraph` across nested layouts — when a
 * child layout returns its own `openGraph: { ... }`, the parent's `images`
 * are dropped. So we must spread OG_IMAGE from every consumer's metadata,
 * not rely on inheritance from the root layout.
 */
export const OG_IMAGE = {
  url: `${SITE_URL}/brand/og-image.png`,
  width: 1200,
  height: 630,
  alt:
    "TrueCalling — AI sourcing software for recruiters. EMILY copilot for WhatsApp, email and phone outreach.",
  type: "image/png",
} as const;

/**
 * The `images` array shape OpenGraph and Twitter expect.
 * Re-use in every `generateMetadata` so previews never go blank.
 */
export const OG_IMAGES = [OG_IMAGE] as const;

/**
 * Build the canonical URL + complete hreflang `languages` map (incl. x-default)
 * for a route key in a given locale. Optionally restrict to a subset of locales
 * (e.g. blog routes only emit fr + en).
 */
export function buildAlternates(
  route: RouteKey,
  locale: Locale,
  options: { localeSubset?: readonly Locale[] } = {},
): NonNullable<Metadata["alternates"]> {
  const subset = options.localeSubset ?? locales;
  const canonical = `${SITE_URL}${getLocalizedPath(route, locale)}`;
  const languages: Record<string, string> = {};
  for (const l of subset) {
    languages[l] = `${SITE_URL}${getLocalizedPath(route, l)}`;
  }
  // x-default → English variant. Google uses this when no locale matches.
  const defaultLocale: Locale = subset.includes("en") ? "en" : subset[0];
  languages["x-default"] = `${SITE_URL}${getLocalizedPath(route, defaultLocale)}`;
  return { canonical, languages };
}

/**
 * Same as buildAlternates but for blog articles, which use per-article slugs
 * and only render in `blogEnabledLocales`. Pass a `slugByLocale` map of the
 * equivalent slug per language; missing entries are skipped.
 */
export function buildArticleAlternates(
  slugByLocale: Partial<Record<Locale, string>>,
  currentLocale: Locale,
): NonNullable<Metadata["alternates"]> {
  const currentSlug = slugByLocale[currentLocale];
  const canonical = currentSlug
    ? `${SITE_URL}${getLocalizedPath("blog", currentLocale)}/${currentSlug}`
    : `${SITE_URL}${getLocalizedPath("blog", currentLocale)}`;

  const languages: Record<string, string> = {};
  for (const l of blogEnabledLocales) {
    const s = slugByLocale[l];
    if (s) {
      languages[l] = `${SITE_URL}${getLocalizedPath("blog", l)}/${s}`;
    }
  }
  const enSlug = slugByLocale.en;
  if (enSlug) {
    languages["x-default"] = `${SITE_URL}${getLocalizedPath("blog", "en")}/${enSlug}`;
  }
  return { canonical, languages };
}
