import type { Metadata } from "next";
import {
  getLocalizedPath,
  locales,
  blogEnabledLocales,
  type Locale,
  type RouteKey,
} from "./i18n-config";

export const SITE_URL = "https://truecalling.app";

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
