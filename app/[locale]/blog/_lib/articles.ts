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
