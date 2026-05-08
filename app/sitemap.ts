import type { MetadataRoute } from "next";
import {
  locales,
  blogEnabledLocales,
  getLocalizedPath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n-config";
import { getArticles } from "./[locale]/blog/_lib/articles";

const SITE_URL = "https://truecalling.ai";

function withXDefault(
  languages: Record<string, string>,
  defaultLocale: Locale,
  defaultUrl: string,
): Record<string, string> {
  return { ...languages, "x-default": defaultUrl };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Routes published on every locale
  const universalRoutes: RouteKey[] = [
    "home",
    "features",
    "pricing",
    "book-a-demo",
    "contact",
    "faq",
    "terms",
    "legal-notice",
    "privacy",
    "cookies",
  ];

  for (const locale of locales) {
    for (const route of universalRoutes) {
      const languages = Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}${getLocalizedPath(route, l)}`]),
      );
      entries.push({
        url: `${SITE_URL}${getLocalizedPath(route, locale)}`,
        lastModified: now,
        changeFrequency: route === "home" ? "weekly" : "monthly",
        priority: route === "home" ? 1 : 0.7,
        alternates: {
          languages: withXDefault(
            languages,
            "en",
            `${SITE_URL}${getLocalizedPath(route, "en")}`,
          ),
        },
      });
    }

    // Blog index — only on enabled locales (fr, en)
    if ((blogEnabledLocales as readonly Locale[]).includes(locale)) {
      const languages = Object.fromEntries(
        blogEnabledLocales.map((l) => [
          l,
          `${SITE_URL}${getLocalizedPath("blog", l)}`,
        ]),
      );
      entries.push({
        url: `${SITE_URL}${getLocalizedPath("blog", locale)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: {
          languages: withXDefault(
            languages,
            "en",
            `${SITE_URL}${getLocalizedPath("blog", "en")}`,
          ),
        },
      });

      // Individual blog articles
      for (const article of getArticles(locale)) {
        const articleUrl = `${SITE_URL}${getLocalizedPath("blog", locale)}/${article.slug}`;
        // Build per-article hreflang map across blog-enabled locales
        const articleLanguages: Record<string, string> = {};
        for (const l of blogEnabledLocales) {
          const equivalent = getArticles(l).find(
            (a) => a.canonicalId === article.canonicalId,
          );
          if (equivalent) {
            articleLanguages[l] =
              `${SITE_URL}${getLocalizedPath("blog", l)}/${equivalent.slug}`;
          }
        }
        const enEquivalent = getArticles("en").find(
          (a) => a.canonicalId === article.canonicalId,
        );
        const xDefaultUrl = enEquivalent
          ? `${SITE_URL}${getLocalizedPath("blog", "en")}/${enEquivalent.slug}`
          : articleUrl;

        entries.push({
          url: articleUrl,
          lastModified: new Date(article.publishedAt),
          changeFrequency: "monthly",
          priority: 0.5,
          alternates: {
            languages: { ...articleLanguages, "x-default": xDefaultUrl },
          },
        });
      }
    }
  }

  return entries;
}
