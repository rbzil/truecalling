# Technical SEO Audit — TrueCalling

**URL:** https://truecalling-lyart.vercel.app/en
**Production canonical:** https://truecalling.ai
**Stack:** Next.js 14 App Router, Vercel, 8 locales
**Date:** 2026-05-06
**Score: 51 / 100**

## Executive summary

The site has a solid SSR foundation and correct per-locale title/description differentiation, but carries five issues that will materially block indexing or ranking across all eight locales. Three are Critical. The most severe is a global canonical collapse that tells Google every sub-page is a duplicate of the homepage. Combined with a missing robots.txt, absent hreflang link tags on all pages, and a staging environment that is openly crawlable with full `index, follow`, the site is not ready for production SEO until these are resolved.

## Category scores

| Category | Score | Status |
|---|---|---|
| Crawlability | 25/100 | FAIL |
| Indexability | 30/100 | FAIL |
| Security (HTTPS / headers) | 70/100 | PARTIAL |
| URL Structure | 65/100 | PARTIAL |
| Mobile Optimization | 80/100 | PASS |
| Core Web Vitals (potential) | 60/100 | PARTIAL |
| Structured Data | 55/100 | PARTIAL |
| JavaScript Rendering (SSR) | 90/100 | PASS |
| IndexNow | 0/100 | FAIL |

## CRITICAL Issues

### C1 — robots.txt Does Not Exist (returns HTML 404)

**Impact:** Google cannot discover crawl directives, cannot locate the sitemap declaratively, and the [locale] catch-all route is intercepting the `/robots.txt` path and rendering an HTML error page with `content-type: text/html`. Googlebot expects `text/plain`.

**Observed:**
```
GET /robots.txt → HTTP 404, content-type: text/html
x-matched-path: /[locale]   ← the locale catch-all is eating the path
```

The Next.js App Router catch-all `app/[locale]/page.tsx` is matching `/robots.txt` before the file-system route. This also means `/sitemap.xml` would have the same problem if it weren't generated as a Next.js route — verify it returns `content-type: application/xml`.

**Fix:** Add `app/robots.ts` using Next.js Metadata API:
```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://truecalling.ai/sitemap.xml',
  }
}
```
Alternatively, add `robots.txt` to the `/public` directory and ensure the Next.js middleware or `matcher` config excludes static paths from the locale catch-all.

### C2 — Canonical Tag Collapse: All Sub-pages Canonicalize to the Homepage

**Impact:** Google will treat `/en/book-a-demo`, `/en/faq`, `/en/contact`, `/fr/reserver-une-demo`, `/fr/faq`, `/fr/contact`, and all equivalent locale variants as duplicates of the homepage and will not index them independently. This affects an estimated 48+ URLs across all locales.

**Observed:**
```
/en/book-a-demo  →  canonical: https://truecalling.ai/en   ← WRONG
/en/faq          →  canonical: https://truecalling.ai/en   ← WRONG
/en/contact      →  canonical: https://truecalling.ai/en   ← WRONG
/fr/reserver-une-demo → canonical: https://truecalling.ai/fr  ← WRONG
```
The only exception is `/en/blog` which correctly self-canonicalizes to `https://truecalling.ai/en/blog`.

The root cause is likely a static `canonical` being set in the root layout (`app/[locale]/layout.tsx`) pointing to the locale homepage, rather than being computed dynamically per-page.

**Fix:** In each page's `generateMetadata()`, set the canonical to the page's own URL:
```ts
// app/[locale]/book-a-demo/page.tsx
export async function generateMetadata({ params }: Props) {
  return {
    alternates: {
      canonical: `https://truecalling.ai/${params.locale}/book-a-demo`,
    },
  }
}
```
Use a helper that maps `[locale]/[slug]` to the correct localized path for pages with translated slugs (e.g., `/fr/reserver-une-demo`).

### C3 — Staging Environment Is Indexable

**Impact:** `truecalling-lyart.vercel.app` is live, returns `index, follow` on all pages, has a sitemap referencing `truecalling.ai`, and is reachable by Googlebot. This creates a duplicate content risk and can split PageRank. The production domain `truecalling.ai` would compete with staging for every crawled URL.

**Observed:**
```
GET https://truecalling-lyart.vercel.app/en
→ meta name="robots" content="index, follow"
→ No X-Robots-Tag: noindex header
```

**Fix (two layers):**

1. In `next.config.js`, add a `X-Robots-Tag: noindex` header conditionally for non-production hostnames:
```js
async headers() {
  const isProduction = process.env.VERCEL_ENV === 'production'
  if (isProduction) return []
  return [{
    source: '/(.*)',
    headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
  }]
}
```
2. In `generateMetadata()`, check `process.env.VERCEL_ENV` and set `robots: { index: false }` for preview/staging deployments.

## HIGH Priority Issues

### H1 — Hreflang Link Tags

**Status:** Hreflang link tags ARE rendered on home pages and on routes that have their own `generateMetadata` (blog index). They are MISSING or POINT TO WRONG TARGETS on sub-routes. See [`06-hreflang.md`](./06-hreflang.md) for the full hreflang-specific analysis.

### H2 — Sub-pages Share the Homepage Title and Meta Description

**Impact:** Google uses unique titles and descriptions as strong ranking signals. Pages sharing the same title are treated as near-duplicates and compete against each other.

**Observed:**
```
/en/book-a-demo  title: "The AI sourcing software that hires with precision. · TrueCalling"
/en/faq          title: "The AI sourcing software that hires with precision. · TrueCalling"
/en/contact      title: "The AI sourcing software that hires with precision. · TrueCalling"
```
All three sub-pages share the homepage title and a 147-character description. Only `/en/blog` has a unique title (`Blog · TrueCalling`).

**Fix:** Add `generateMetadata()` per sub-page with page-specific titles:
- `/en/book-a-demo`: "Book a Demo · TrueCalling — See AI sourcing in action"
- `/en/faq`: "FAQ · TrueCalling — Common questions about AI recruiting software"
- `/en/contact`: "Contact TrueCalling — Talk to the AI sourcing team"

### H3 — og:url Static and Wrong on Sub-pages

```
/en/book-a-demo  og:url: "https://truecalling.ai/en"  ← homepage, not book-a-demo
/en/faq          og:url: "https://truecalling.ai/en"  ← same
/fr/reserver-une-demo  og:url: "https://truecalling.ai/fr"  ← wrong
```

Same fix as H2 / C2 — set `og:url` per page in `generateMetadata`.

### H4 — Sitemap Domain Mismatch

The sitemap is served at `truecalling-lyart.vercel.app/sitemap.xml` but all 66 `<loc>` URLs point to `https://truecalling.ai`. When Googlebot discovers the sitemap from staging, it cannot verify ownership of `truecalling.ai` via the staging domain. Sitemap is only usable once submitted directly to Search Console under the production property.

**Additional:** Missing `x-default` hreflang in every sitemap URL block.

### H5 — `/logos/lechiller.png` Returns 404

The logo image preloaded as the probable LCP candidate (`<link rel="preload" as="image" href="/logos/lechiller.png">`) returns HTTP 404. The preload hint fires but loads nothing, the image renders broken, and LCP timing is destroyed.

```
GET /logos/lechiller.png → HTTP 404, content-type: text/html; charset=utf-8
x-matched-path: /404
```

**Fix:** Ensure `public/logos/lechiller.png` exists and is committed. Also use Next.js `<Image priority>` to get a proper `fetchpriority="high"` attribute.

## MEDIUM Priority Issues

### M1 — Missing Security Headers

**Present:**
- `strict-transport-security: max-age=63072000; includeSubDomains; preload` — PASS

**Missing:**
- `X-Frame-Options` / `frame-ancestors` CSP
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy`

**Fix:** Add in `next.config.js`:
```js
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
    ],
  }]
}
```

### M2 — No Preconnect Hints for External Resources

Zero preconnect tags. Five font files preloaded (good) but DNS lookup for any third-party resource is not pre-warmed.

**Fix:** Add to root `<head>`:
```html
<link rel="preconnect" href="https://assets.calendly.com" />
<link rel="dns-prefetch" href="https://www.linkedin.com" />
```

### M3 — LCP Image Not Using fetchpriority="high"

Current preload doesn't include `fetchpriority="high"`. Without it, the browser may deprioritize the image behind 5 fonts being preloaded simultaneously, delaying LCP.

### M4 — Five Font Files Preloaded Simultaneously

Five `.woff2` files preloaded in `<head>` before the LCP image. Each preload competes for connection bandwidth. On mobile 4G this can add 200-400ms to LCP. `font-display: swap` is correctly set, mitigating worst-case.

**Fix:** Audit which font weights/subsets are actually used above the fold. Preload only the subset used in hero.

### M5 — Structured Data Missing Key Fields

See [`03-schema.md`](./03-schema.md) for full schema analysis.

### M6 — Root URL Issues a 307 Temporary Redirect (Should Be 308)

A 307 (Temporary) does not transfer full PageRank. Root `/` should issue 308 (Permanent).

```
GET / → HTTP 307 → Location: /en
```

**Fix:** In middleware:
```ts
return NextResponse.redirect(new URL('/en', request.url), 308)
```

## LOW Priority Issues

- **L1** — Sitemap lastmod is dynamic `now`, treated as noise by Googlebot. Use git/CMS timestamps.
- **L2** — Missing `<html lang>` on 404 error pages (when path is not a valid locale).
- **L3** — Page HTML is 119KB uncompressed. Verify Brotli/gzip at Vercel CDN edge.
- **L4** — No IndexNow protocol. Generate key at https://www.bing.com/indexnow, place at `/public/{key}.txt`, POST on each content deploy.

## Passes

- HTTPS with HSTS preload (best-in-class)
- SSR fully operational — Googlebot does not need JS execution
- Locale titles unique and translated (8 distinct titles, including Hebrew RTL)
- `font-display: swap` on all preloaded fonts
- Sitemap valid XML with hreflang alternates per URL
- Viewport meta correctly set
- Image alt text present on the one `<img>` in SSR HTML
- OG image sized (1080×1080) with explicit width/height
- 404 returns real HTTP 404 (no soft-404)

## Prioritized Fix Checklist

| Priority | Issue | Effort |
|---|---|---|
| C1 | Add `app/robots.ts` | 30 min |
| C2 | Fix canonical to be self-referencing per-page | 2 h |
| C3 | Add `X-Robots-Tag: noindex` on non-production deployments | 30 min |
| H1 | Add `alternates.languages` (hreflang) per sub-page | 3 h |
| H2 | Unique titles + descriptions per sub-page (8 locales) | 4 h |
| H3 | Fix `og:url` dynamic per-page | 1 h |
| H4 | Add x-default to sitemap | 30 min |
| H5 | Verify `/public/logos/lechiller.png` exists; switch to `<Image priority>` | 30 min |
| M1 | Add security headers in `next.config.js` | 30 min |
| M2 | Add `<link rel="preconnect">` for critical third parties | 20 min |
| M3 | Add `fetchpriority="high"` to LCP image | 15 min |
| M4 | Audit font preloads — reduce to 1-2 above-fold subsets | 1 h |
| M5 | Add `Organization` + `FAQPage` JSON-LD | 1 h |
| M6 | Change 307 root redirect to 308 | 15 min |
| L1 | Use real `lastmod` timestamps in sitemap | 1 h |
| L4 | Implement IndexNow for blog publish pipeline | 2 h |
