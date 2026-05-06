/* ============================================================
   Locale-aware article dispatcher.
   Pages call getArticles/getArticle/getRelatedArticles with the
   locale from the URL and receive the right per-language content.
   For locales without a dedicated table, falls back to French.
   ============================================================ */

import type { Locale } from "@/lib/i18n-config";
import { articles as frArticles, type Article } from "./articles.fr";
import { articles as enArticles } from "./articles.en";

export type { Article };

const byLocale: Partial<Record<Locale, Article[]>> = {
  fr: frArticles,
  en: enArticles,
};

export function getArticles(locale: Locale): Article[] {
  return byLocale[locale] ?? frArticles;
}

export function getArticle(slug: string, locale: Locale): Article | undefined {
  return getArticles(locale).find((a) => a.slug === slug);
}

/**
 * Find the equivalent article in a different locale using its stable
 * cross-locale canonicalId. Returns undefined if no translation exists.
 */
export function getArticleByCanonicalId(
  canonicalId: string,
  locale: Locale,
): Article | undefined {
  return getArticles(locale).find((a) => a.canonicalId === canonicalId);
}

/**
 * Build a map of locale → article slug for every locale that has a
 * translation of the given canonicalId. Used to render hreflang alternates
 * on blog article pages.
 */
export function getSlugByLocale(
  canonicalId: string,
): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = {};
  for (const l of Object.keys(byLocale) as Locale[]) {
    const article = getArticleByCanonicalId(canonicalId, l);
    if (article) out[l] = article.slug;
  }
  return out;
}

export function getRelatedArticles(
  slug: string,
  locale: Locale,
  limit = 3,
): Article[] {
  const all = getArticles(locale);
  const current = all.find((a) => a.slug === slug);
  if (!current) return all.slice(0, limit);
  return all
    .filter((a) => a.slug !== slug && a.category === current.category)
    .concat(all.filter((a) => a.slug !== slug && a.category !== current.category))
    .slice(0, limit);
}
