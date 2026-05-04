/* ============================================================
   i18n configuration
   - Single source of truth for supported locales
   - Path translations (e.g. EN "book-a-demo" ↔ FR "reserver-une-demo")
   ============================================================ */

export const locales = ["fr", "en", "he", "pt-BR", "es", "de", "it", "nl"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const rtlLocales: readonly Locale[] = ["he"] as const;

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  en: "English",
  he: "עברית",
  "pt-BR": "Português",
  es: "Español",
  de: "Deutsch",
  it: "Italiano",
  nl: "Nederlands",
};

export const localeFlags: Record<Locale, string> = {
  fr: "🇫🇷",
  en: "🇬🇧",
  he: "🇮🇱",
  "pt-BR": "🇧🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  it: "🇮🇹",
  nl: "🇳🇱",
};

/**
 * Locales where the /blog section is published.
 * For other locales, the blog link is hidden from nav and any direct visit
 * to /<locale>/blog redirects to the home of that locale.
 *
 * NOTE: only "fr" for now. EN articles to be translated in a dedicated session
 * (~20 000 words across 10 articles).
 */
export const blogEnabledLocales: readonly Locale[] = ["fr"] as const;

/* ----------------------------------------------------------
   Route keys → file-system paths (canonical, what Next.js routes to)
   These match the folders under app/[locale]/ (e.g. "book-a-demo")
---------------------------------------------------------- */
export type RouteKey = "home" | "book-a-demo" | "contact" | "faq" | "terms" | "blog";

/**
 * Canonical (file-system) slug per route key. The folder under
 * app/[locale]/ uses this slug. Middleware rewrites localized URLs to it.
 */
export const canonicalSlug: Record<Exclude<RouteKey, "home">, string> = {
  "book-a-demo": "book-a-demo",
  contact: "contact",
  faq: "faq",
  terms: "terms",
  blog: "blog",
};

/**
 * URL slug per route, per locale (what shows up in the browser).
 * `home` is "" because the home page is at /<locale>.
 *
 * For locales where translating the slug doesn't add UX value (he uses Latin
 * URLs by convention), we keep the English canonical to avoid uglier
 * transliterations.
 */
export const localizedSlug: Record<RouteKey, Record<Locale, string>> = {
  home: {
    fr: "", en: "", he: "", "pt-BR": "", es: "", de: "", it: "", nl: "",
  },
  "book-a-demo": {
    fr: "reserver-une-demo",
    en: "book-a-demo",
    he: "book-a-demo",
    "pt-BR": "agendar-uma-demo",
    es: "reservar-una-demo",
    de: "demo-buchen",
    it: "prenota-una-demo",
    nl: "demo-boeken",
  },
  contact: {
    fr: "contact",
    en: "contact",
    he: "contact",
    "pt-BR": "contato",
    es: "contacto",
    de: "kontakt",
    it: "contatti",
    nl: "contact",
  },
  faq: {
    fr: "faq", en: "faq", he: "faq", "pt-BR": "faq",
    es: "faq", de: "faq", it: "faq", nl: "faq",
  },
  terms: {
    fr: "cgu",
    en: "terms",
    he: "terms",
    "pt-BR": "termos",
    es: "terminos",
    de: "agb",
    it: "termini",
    nl: "voorwaarden",
  },
  blog: {
    fr: "blog", en: "blog", he: "blog", "pt-BR": "blog",
    es: "blog", de: "blog", it: "blog", nl: "blog",
  },
};

/**
 * Build a localized URL for a route key + locale. Use this everywhere instead
 * of hardcoding `/fr/contact` etc.
 *
 * @example getLocalizedPath("book-a-demo", "en") // "/en/book-a-demo"
 * @example getLocalizedPath("home", "fr")        // "/fr"
 */
export function getLocalizedPath(route: RouteKey, locale: Locale): string {
  const slug = localizedSlug[route][locale];
  return slug ? `/${locale}/${slug}` : `/${locale}`;
}

/**
 * Reverse: given a localized URL slug like "reserver-une-demo" and a locale,
 * return the canonical RouteKey. Used by the middleware to rewrite URLs.
 * Returns null if the slug doesn't match any known route in that locale.
 */
export function resolveRouteFromSlug(slug: string, locale: Locale): RouteKey | null {
  if (slug === "" || slug === "/") return "home";
  for (const key of Object.keys(localizedSlug) as RouteKey[]) {
    if (localizedSlug[key][locale] === slug) return key;
  }
  return null;
}

/**
 * Switch the locale on the current path while preserving the route.
 * Used by the LanguageSwitcher when the user picks a different language.
 *
 * @example switchLocaleOnPath("/fr/reserver-une-demo", "en") // "/en/book-a-demo"
 */
export function switchLocaleOnPath(currentPath: string, newLocale: Locale): string {
  // Strip leading slash + split
  const parts = currentPath.replace(/^\/+/, "").split("/");
  const currentLocale = parts[0] as Locale;
  if (!locales.includes(currentLocale)) return `/${newLocale}`;

  // Rest of the path after locale segment
  const rest = parts.slice(1);
  if (rest.length === 0) return `/${newLocale}`;

  // First segment is a route slug — translate it
  const firstSlug = rest[0];
  const route = resolveRouteFromSlug(firstSlug, currentLocale);
  if (!route) return `/${newLocale}`;

  // Re-assemble with the new locale's slug + any deeper segments (e.g. blog/[slug])
  const newSlug = localizedSlug[route][newLocale];
  const tail = rest.slice(1).join("/");
  if (newSlug === "") return tail ? `/${newLocale}/${tail}` : `/${newLocale}`;
  return tail ? `/${newLocale}/${newSlug}/${tail}` : `/${newLocale}/${newSlug}`;
}
