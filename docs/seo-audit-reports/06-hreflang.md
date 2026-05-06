# Hreflang / i18n SEO Audit — TrueCalling

**URL:** https://truecalling-lyart.vercel.app
**Date:** 2026-05-06
**Method:** Direct SSR HTML inspection across locale variants and route types

## Findings summary

| # | Severity | Issue |
|---|---|---|
| 1 | **Critical** | `<html lang="en">` hardcoded across all locales. Google reads `lang=en` on /fr, /he, /de at SSR. The `<div lang={locale}>` child does not compensate for SEO + a11y. |
| 2 | **Critical** | Canonical wrong on **all sub-routes**. `/fr/reserver-une-demo` canonicalizes to `/fr` (locale home). Idem `/fr/contact`, `/fr/politique-de-confidentialite`. Sub-routes inherit `generateMetadata` from the home layout. |
| 3 | **Critical** | Hreflang wrong on sub-routes. `/fr/reserver-une-demo` declares `hrefLang="de"` → `/de` (home), not `/de/demo-buchen`. Google will ignore or penalize. |
| 4 | **Critical** | Blog article `/fr/blog/<slug>` has no hreflang at all. `generateMetadata` for blog articles doesn't set `alternates.languages`. |
| 5 | **High** | Sitemap missing `x-default` in every `xhtml:link rel="alternate"` block. |
| 6 | Low | Attribute `hrefLang` (camelCase, Next/React style) instead of `hreflang` (lowercase, HTML5 standard). HTML is case-insensitive — not blocking. |

## Working correctly

- ✅ Hreflang home pages: 8 locales + x-default rendered in `<head>` with correct slugs
- ✅ Self-reference present (each page declares itself as alternate of itself)
- ✅ Sitemap emits `xhtml:link rel="alternate"` per URL with localized slugs (`/fr/reserver-une-demo` ↔ `/de/demo-buchen` ↔ `/it/prenota-una-demo` etc.)
- ✅ `dir="rtl"` correctly applied on HE pages
- ✅ All locale codes valid per RFC 5646 / BCP 47 (including `pt-BR` correctly hyphenated)

## Verification commands used

```bash
# Hreflang in <head> for each locale
curl -sS https://truecalling-lyart.vercel.app/en | \
  grep -oE '<link rel="alternate" hrefLang="[^"]+" href="[^"]+"' | sort -u

# Per route type (home vs sub-route vs blog article)
for route in "/fr" "/fr/blog" "/fr/blog/sourcing-ia-guide-2026" \
             "/fr/reserver-une-demo" "/fr/contact" \
             "/fr/politique-de-confidentialite"; do
  echo "=== $route ==="
  curl -sS "https://truecalling-lyart.vercel.app$route" | \
    grep -oE '<link rel="(alternate|canonical)"[^>]+>'
done

# Confirm <html lang> at SSR
for loc in fr en he de; do
  curl -sS "https://truecalling-lyart.vercel.app/$loc" | \
    grep -oE '<html [^>]*lang="[^"]+"' | head -1
done

# Sitemap
curl -sS https://truecalling-lyart.vercel.app/sitemap.xml | head -50
```

## Detailed observations

### `<html lang>` at SSR (Critical 1)

```
/fr → <html lang="en"   ← WRONG (should be lang="fr")
/en → <html lang="en"
/he → <html lang="en"   ← WRONG (should be lang="he")
/de → <html lang="en"   ← WRONG
```

The `<div lang={locale} dir={dir}>` inside the locale layout sets the right values, but Google + assistive tech read the root `<html lang>`. The `useEffect` in `app/_i18n/locale-context.tsx` that mutates `document.documentElement.lang = locale` runs post-hydration on the client — too late for SEO.

### Canonical + hreflang on home pages (Working)

```
/fr canonical → https://truecalling.app/fr ✅
/fr hreflang →
  fr → /fr ✅
  en → /en ✅
  he → /he ✅
  pt-BR → /pt-BR ✅
  es → /es ✅
  de → /de ✅
  it → /it ✅
  nl → /nl ✅
  x-default → /en ✅
```

### Canonical + hreflang on sub-routes (Critical 2 + 3)

```
/fr/reserver-une-demo
  canonical → https://truecalling.app/fr  ← WRONG (should be /fr/reserver-une-demo)
  hreflang fr → /fr                  ← WRONG (should be /fr/reserver-une-demo)
  hreflang en → /en                  ← WRONG (should be /en/book-a-demo)
  hreflang de → /de                  ← WRONG (should be /de/demo-buchen)
  hreflang nl → /nl                  ← WRONG (should be /nl/demo-boeken)
  ... etc
```

Same pattern on `/fr/contact` and `/fr/politique-de-confidentialite`.

### Blog index `/fr/blog` (Working — partial)

```
canonical → https://truecalling.app/fr/blog ✅
hreflang fr → /fr/blog ✅
hreflang en → /en/blog ✅
```

Only 2 hreflang because blog is gated to FR + EN only (via `blogEnabledLocales`). Correct.

### Blog article `/fr/blog/sourcing-ia-guide-2026` (Critical 4)

```
canonical → https://truecalling.app/fr/blog/sourcing-ia-guide-2026 ✅
hreflang → (none)  ← MISSING
```

The article's `generateMetadata` sets `alternates.canonical` but not `alternates.languages`. Should include FR + EN article URLs (matching the localized slug) plus x-default.

### Sitemap (Working — partial)

```xml
<url>
  <loc>https://truecalling.app/fr/reserver-une-demo</loc>
  <xhtml:link rel="alternate" hreflang="fr" href="https://truecalling.app/fr/reserver-une-demo" />
  <xhtml:link rel="alternate" hreflang="en" href="https://truecalling.app/en/book-a-demo" />
  <xhtml:link rel="alternate" hreflang="he" href="https://truecalling.app/he/book-a-demo" />
  <xhtml:link rel="alternate" hreflang="pt-BR" href="https://truecalling.app/pt-BR/agendar-uma-demo" />
  <xhtml:link rel="alternate" hreflang="es" href="https://truecalling.app/es/reservar-una-demo" />
  <xhtml:link rel="alternate" hreflang="de" href="https://truecalling.app/de/demo-buchen" />
  <xhtml:link rel="alternate" hreflang="it" href="https://truecalling.app/it/prenota-una-demo" />
  <xhtml:link rel="alternate" hreflang="nl" href="https://truecalling.app/nl/demo-boeken" />
  ... no x-default ← HIGH (missing for every URL block)
</url>
```

## Fix code

### Critical 1 — Dynamic `<html lang>` per locale

Two viable approaches:

**Option A — Move `<html>` from root to `[locale]/layout.tsx`:**

Next 14 requires `<html>` and `<body>` in the root layout. Workaround: keep root layout as a minimal pass-through and use a custom approach. Cleanest is to make the root layout not render `<html>` and let the locale layout do it. Requires moving the root layout's `<html>` rendering to `app/[locale]/layout.tsx` (keeps `<html>` only in the locale layout) — Next.js Beta handles this, but check version compatibility.

**Option B — Read pathname via `headers()` in root layout:**

```tsx
// app/layout.tsx
import { headers } from "next/headers";
import { locales } from "@/lib/i18n-config";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = headers().get("x-pathname") ?? "/";
  const locale = locales.find((l) => pathname.startsWith(`/${l}`)) ?? "en";
  return (
    <html lang={locale} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
```

Requires middleware to set `x-pathname` header on every request.

### Critical 2 + 3 — `generateMetadata` per sub-route

For each sub-page, add a `generateMetadata` that sets canonical and full hreflang map:

```tsx
// app/[locale]/book-a-demo/page.tsx
import type { Metadata } from "next";
import { locales, getLocalizedPath, type Locale } from "@/lib/i18n-config";

const SITE = "https://truecalling.app";

export async function generateMetadata({
  params,
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const url = `${SITE}${getLocalizedPath("book-a-demo", params.locale)}`;
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE}${getLocalizedPath("book-a-demo", l)}`;
  }
  languages["x-default"] = `${SITE}${getLocalizedPath("book-a-demo", "en")}`;

  return {
    alternates: { canonical: url, languages },
    openGraph: { url },
  };
}
```

Repeat for: `book-a-demo`, `contact`, `faq`, `terms`, `legal-notice`, `privacy`, `cookies`, `blog/[slug]`, `blog/page.tsx`.

### Critical 4 — Blog article hreflang

```tsx
// app/[locale]/blog/[slug]/page.tsx
export async function generateMetadata({ params }: { params: { locale: Locale; slug: string } }): Promise<Metadata> {
  const article = getArticle(params.slug, params.locale);
  if (!article) return {};
  
  const url = `${SITE}${getLocalizedPath("blog", params.locale)}/${article.slug}`;
  const languages: Record<string, string> = {};
  for (const l of blogEnabledLocales) {
    // Try to find the equivalent article in this locale (by slug map or article ID)
    const equivalent = getArticleByCanonicalId(article.canonicalId, l);
    if (equivalent) {
      languages[l] = `${SITE}${getLocalizedPath("blog", l)}/${equivalent.slug}`;
    }
  }
  languages["x-default"] = `${SITE}${getLocalizedPath("blog", "en")}/${article.slug}`;
  
  return {
    title: `${article.title} · TrueCalling`,
    description: article.description,
    alternates: { canonical: url, languages },
    // ...
  };
}
```

Requires the article data model to track which articles are translations of each other (a `canonicalId` field shared across locales). Without this, each locale's article is treated as standalone — currently the case.

### High 5 — Sitemap x-default

In `app/sitemap.ts`, when building `alternates.languages`, add an `x-default` entry:

```ts
// Inside the sitemap loop:
const altLanguages = Object.fromEntries(
  locales.map((l) => [l, `${SITE_URL}${getLocalizedPath(route, l)}`]),
);
altLanguages["x-default"] = `${SITE_URL}${getLocalizedPath(route, "en")}`;

entries.push({
  url: `${SITE_URL}${getLocalizedPath(route, locale)}`,
  // ...
  alternates: { languages: altLanguages },
});
```
