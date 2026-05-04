import type { MetadataRoute } from "next";
import {
  locales,
  blogEnabledLocales,
  getLocalizedPath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n-config";

const SITE_URL = "https://truecalling.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Routes published on every locale
  const universalRoutes: RouteKey[] = [
    "home",
    "book-a-demo",
    "contact",
    "faq",
    "terms",
    "legal-notice",
    "privacy",
  ];

  for (const locale of locales) {
    for (const route of universalRoutes) {
      entries.push({
        url: `${SITE_URL}${getLocalizedPath(route, locale)}`,
        lastModified: now,
        changeFrequency: route === "home" ? "weekly" : "monthly",
        priority: route === "home" ? 1 : 0.7,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}${getLocalizedPath(route, l)}`]),
          ),
        },
      });
    }

    // Blog index — only on enabled locales (fr, en)
    if ((blogEnabledLocales as readonly Locale[]).includes(locale)) {
      entries.push({
        url: `${SITE_URL}${getLocalizedPath("blog", locale)}`,
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.6,
        alternates: {
          languages: Object.fromEntries(
            blogEnabledLocales.map((l) => [l, `${SITE_URL}${getLocalizedPath("blog", l)}`]),
          ),
        },
      });
    }
  }

  return entries;
}
