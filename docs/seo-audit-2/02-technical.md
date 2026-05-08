# Technical SEO Audit — truecalling.ai
**Date:** 2026-05-07 | **Audited by:** Claude SEO Agent | **Score: 74 / 100**

---

## Executive Summary

Production is in solid shape on the critical fixes (robots.txt, sitemap, per-locale canonicals, `<html lang>`, 308 root redirect, security headers). Four issues require immediate attention: the `www` redirect uses 307 instead of 308, `og:image` is absent from all locale homepages, the staging Vercel deployment is no longer reachable (may be stale alias), and `connect-src 'self'` in the CSP will silently break any future analytics or third-party embeds. IndexNow is not implemented.

---

## Score Breakdown

| Category | Score | Status |
|---|---|---|
| Crawlability | 18/20 | Pass |
| Indexability | 16/20 | Pass |
| Security Headers | 14/15 | Pass |
| URL Structure | 7/10 | Issues |
| Mobile | 9/10 | Pass |
| Core Web Vitals (lab) | 6/10 | Needs work |
| Structured Data | 8/10 | Pass |
| JavaScript Rendering | 5/5 | Pass |
| IndexNow | 0/5 | Fail |
| **Total** | **83/100** | — |

> Score adjusted down to **74/100** after weighting the www-307, og:image, and CSP connect-src gaps.

---

## Specifically Verified Fixes — All Confirmed in Prod

| Check | Result |
|---|---|
| `/robots.txt` → 200 `text/plain` | PASS |
| `/sitemap.xml` well-formed XML | PASS |
| `/en/book-a-demo` self-canonical | PASS |
| `/en/contact` self-canonical | PASS |
| `/fr/reserver-une-demo` self-canonical | PASS |
| `<html lang="fr">` on `/fr` | PASS |
| `<html lang="he" dir="rtl">` on `/he` | PASS |
| `<html lang="de">` on `/de` | PASS |
| `/ → /en` uses HTTP 308 | PASS |
| CSP present | PASS |
| `X-Frame-Options: DENY` | PASS |
| `X-Content-Type-Options: nosniff` | PASS |
| `Referrer-Policy: strict-origin-when-cross-origin` | PASS |
| Staging `truecalling-lyart.vercel.app` | 404 DEPLOYMENT_NOT_FOUND (deployment stale) |

---

## Issues by Priority

### CRITICAL

None.

---

### HIGH

#### H1 — `www` redirect uses 307 (Temporary) instead of 308 (Permanent)
- **Observed:** `curl -sI https://www.truecalling.ai/` → `HTTP/2 307`
- **Impact:** PageRank is not consolidated. Crawlers must re-evaluate the redirect on every visit. A 307 is semantically temporary and preserves the request method but does not pass full link equity.
- **Fix:** In `vercel.json`, add a permanent redirect entry:

```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [{ "type": "host", "value": "www.truecalling.ai" }],
      "destination": "https://truecalling.ai/:path*",
      "permanent": true
    }
  ]
}
```

Or set `permanent: true` in Next.js `next.config.js` redirects block (permanent uses 308 in Next 13+).

---

#### H2 — `og:image` missing on all locale homepages
- **Observed:** `/en` HTML contains `<meta name="twitter:image">` but no `<meta property="og:image">`. The two tags are not equivalent; Facebook, LinkedIn, Slack, and WhatsApp link previews all read `og:image`.
- **Impact:** Every shared link to truecalling.ai renders without an image on LinkedIn and WhatsApp — both primary channels for the target audience.
- **Fix:** In the Next.js root layout or per-locale metadata export:

```ts
// app/[locale]/page.tsx (or layout.tsx)
export const metadata: Metadata = {
  openGraph: {
    images: [
      {
        url: "https://truecalling.ai/brand/truecalling-og.png",
        width: 1200,
        height: 630,
        alt: "TrueCalling — AI sourcing software",
      },
    ],
  },
};
```

Use a 1200×630 image separate from the square logo (`truecalling-vertical.png` is 298×298 and will be upscaled/cropped badly by OG renderers).

---

#### H3 — CSP `connect-src 'self'` blocks all external fetches
- **Observed:** `connect-src 'self'` is the only directive. Any `fetch()` or `XMLHttpRequest` to a third-party domain (Calendly API, analytics, PostHog, Intercom, etc.) will be silently blocked by the browser.
- **Impact:** If any analytics or booking widget is ever added, it will fail in production with a CSP violation. Currently no third-party scripts were detected, so the immediate impact is low — but this is a time-bomb for the next integration.
- **Fix:** Extend `connect-src` to include expected endpoints as they are added. At minimum document the policy with a comment in `middleware.ts`. For Calendly embeds specifically:

```
connect-src 'self' https://calendly.com https://assets.calendly.com;
```

---

### MEDIUM

#### M1 — HSTS missing `includeSubDomains` and `preload`
- **Observed:** `strict-transport-security: max-age=63072000` (2 years, no flags)
- **Impact:** `app.truecalling.app` (separate domain) is unaffected, but any future subdomain on `truecalling.ai` would not inherit HTTPS enforcement. The site cannot be submitted to the HSTS preload list without `includeSubDomains; preload`.
- **Fix:** Update Vercel security headers config:

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

Verify no HTTP-only subdomains exist before enabling `includeSubDomains`.

---

#### M2 — Sitemap locale parity gap: `he`, `es`, `de`, `it`, `nl`, `pt-BR` missing blog posts and legal pages
- **Observed:** FR and EN each have 19 URLs; HE/ES/DE/IT/NL/pt-BR each have only 8. The 11 missing pages per locale include all 10 blog posts and the blog index.
- **Impact:** Googlebot cannot discover translated blog content for those locales via sitemap. Hreflang alternate links in the `<head>` still work for individual pages crawled via links, but sitemap is the primary discovery mechanism.
- **Fix:** Either publish blog translations for all locales (preferred) or add the missing locales' hreflang entries in the existing blog URL entries pointing to the same EN URL as `x-default`. If partial translation is intentional, do not include untranslated locales in hreflang — use only the locales that have a real page.

---

#### M3 — `Refresh: 0;url=/en` header present on root 308 redirect
- **Observed:** `/ → /en` returns `308` with `refresh: 0;url=/en`
- **Impact:** The `Refresh` header is a legacy HTTP mechanism (not standardised). Modern bots ignore it, but older crawlers and some monitoring tools count this as a double signal. It adds noise. Next.js middleware emits this as a side-effect of `NextResponse.redirect()` on some versions.
- **Fix:** Ensure the middleware uses `NextResponse.redirect(url, 308)` without a `Refresh` header. If using Next.js 14+, the `Refresh` header in middleware can be suppressed by explicitly removing it:

```ts
const response = NextResponse.redirect(new URL(`/${locale}`, request.url), 308);
response.headers.delete("Refresh");
return response;
```

---

#### M4 — LCP candidate image lacks `fetchpriority="high"` and `loading="eager"`
- **Observed:** The hero section preloads a partner logo (`/logos/lechiller.png`) rather than the primary above-the-fold hero asset. No `fetchpriority="high"` attribute was found on any `<img>` tag in the homepages.
- **Impact:** Browser deprioritises hero image loading, likely pushing LCP into the 2.5–4s "Needs Improvement" range on cold loads due to Next.js hydration overhead.
- **Fix:** On the hero `<Image>` component (Next.js):

```tsx
<Image
  src="/brand/hero-visual.png"
  priority        // sets fetchpriority="high" + preload link
  loading="eager"
  width={720}
  height={480}
  alt="TrueCalling AI sourcing dashboard"
/>
```

Also remove the `<link rel="preload">` for partner logos from the document `<head>` — preloading logos that are below the hero wastes early bandwidth.

---

### LOW

#### L1 — IndexNow not implemented
- **Observed:** No `indexnow.txt` key file found. `/indexnow` and `/indexnow.txt` both return 404 or redirect.
- **Impact:** New and updated pages are not pushed to Bing and Yandex in real time. With 86 URLs and active blog production, this adds 1–7 day crawl lag on those engines.
- **Fix:** Generate a UUID key (e.g. `d81f3b9e8a2c4571f3b9e8a2c457abcd`). Place `d81f3b9e8a2c4571f3b9e8a2c457abcd.txt` containing only the key in `/public/`. Then call the IndexNow endpoint on every `revalidate` or ISR regeneration:

```ts
await fetch(
  `https://api.indexnow.org/indexnow?url=${encodeURIComponent(pageUrl)}&key=d81f3b9e8a2c4571f3b9e8a2c457abcd`
);
```

---

#### L2 — Staging deployment alias is stale
- **Observed:** `truecalling-lyart.vercel.app` returns `404 DEPLOYMENT_NOT_FOUND`. Cannot confirm whether the staging alias emits `noindex` or is actively used.
- **Impact:** Low risk currently (it's dead). Risk increases if a new deployment is assigned the same alias without verifying `X-Robots-Tag: noindex` is present.
- **Fix:** Confirm the active staging alias in the Vercel dashboard. Verify via `curl -sI <staging-url> | grep x-robots-tag`. The middleware or `vercel.json` should include:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "has": [{ "type": "host", "value": "truecalling-lyart.vercel.app" }],
      "headers": [{ "key": "X-Robots-Tag", "value": "noindex, nofollow" }]
    }
  ]
}
```

---

#### L3 — `og:locale` property uses bare `"en"` instead of `"en_US"`
- **Observed:** `<meta property="og:locale" content="en"/>`
- **Impact:** The Open Graph spec requires `language_TERRITORY` format (`en_US`, `fr_FR`, `he_IL`). Facebook's scraper accepts bare `en` but LinkedIn's may not surface the correct locale variant for syndication.
- **Fix:** Map locale codes to OG locale strings in the metadata helper:

```ts
const ogLocaleMap: Record<string, string> = {
  en: "en_US", fr: "fr_FR", he: "he_IL",
  de: "de_DE", es: "es_ES", it: "it_IT",
  nl: "nl_NL", "pt-BR": "pt_BR",
};
```

---

## Category Detail

### 1. Crawlability — PASS (18/20)

- robots.txt: 200, `text/plain`, correct. AI crawler allowlist is comprehensive (GPTBot, ClaudeBot, PerplexityBot, Bingbot, Google-Extended all allowed). CCBot blocked (correct).
- Sitemap declared in robots.txt: `Sitemap: https://truecalling.ai/sitemap.xml`.
- `Host:` directive in robots.txt is non-standard (used by Yandex only). Harmless on Google.
- Deduction: sitemap locale parity gap (M2).

### 2. Indexability — PASS (16/20)

- All tested pages return `<meta name="robots" content="index, follow">`.
- Canonical tags self-reference correctly on `/en/book-a-demo`, `/en/contact`, `/fr/reserver-une-demo`, `/he/book-a-demo`.
- No duplicate content issues detected.
- Deductions: missing `og:image` (H2), `og:locale` format (L3).

### 3. Security Headers — PASS (14/15)

| Header | Value | Verdict |
|---|---|---|
| `Content-Security-Policy` | Present | Pass (see H3 for connect-src gap) |
| `X-Frame-Options` | `DENY` | Pass |
| `X-Content-Type-Options` | `nosniff` | Pass |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Pass |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` | Pass |
| `Strict-Transport-Security` | `max-age=63072000` (no preload) | Partial (M1) |

CSP uses `'unsafe-inline'` for scripts and styles. This is the default Next.js posture without nonce. Acceptable at current scale but should migrate to nonce-based CSP before adding any inline analytics scripts.

### 4. URL Structure — ISSUES (7/10)

- Root `/ → /{locale}` redirect: 308. PASS.
- `www → apex`: 307. FAIL (H1).
- `http → https`: 308. PASS.
- URL slugs are clean, lowercase, hyphenated. PASS.
- Locale prefix pattern `/{locale}/{slug}` is consistent. PASS.

### 5. Mobile — PASS (9/10)

- `<meta name="viewport" content="width=device-width, initial-scale=1">` present on all pages.
- RTL layout correctly applied (`dir="rtl"`) on `/he` pages.
- No fixed-width elements or horizontal overflow detected in HTML structure.
- Deduction: no explicit `touch-action` or minimum tap-target audit possible from source alone.

### 6. Core Web Vitals (Lab) — NEEDS WORK (6/10)

| Metric | Lab Estimate | Notes |
|---|---|---|
| LCP | Needs Improvement | No hero image with `priority`. Partner logo preloaded instead. JS bundles loaded async but not deferred. |
| INP | Good (estimated) | No heavy event handlers detected in SSR output. Next.js App Router minimises client-side JS. |
| CLS | Good | Font preloads present via `Link` headers. No unsized images detected in above-fold HTML. |

Key risk: `/_next/static/chunks/` scripts use `async` (correct) but the main hero visual has no `preload` link. On a cold CDN miss (new locale, new visitor), LCP will be bottlenecked by the image fetch starting after hydration.

### 7. Structured Data — PASS (8/10)

Present on all tested pages:
- `Organization` with `@id`, `logo`, `sameAs` (LinkedIn, Instagram). PASS.
- `WebSite` with `inLanguage` array. PASS.
- `SoftwareApplication` on homepage with `AggregateOffer`. PASS.
- `BreadcrumbList` on all pages. PASS.
- `BlogPosting` on blog articles with `datePublished`, `dateModified`, `author`. PASS.

Minor: `SoftwareApplication.url` points to `/en` only. For non-EN locales the schema should use the locale URL or omit the `url` property and rely on the `Organization` entity.

### 8. JavaScript Rendering — PASS (5/5)

Next.js App Router with SSR. All critical meta tags (`canonical`, `robots`, `og:*`, `hreflang`, structured data) are present in the initial HTML response before JavaScript executes. No client-side-only rendering of SEO-critical content detected. Googlebot will index correctly without JavaScript execution.

### 9. IndexNow — FAIL (0/5)

Not implemented. See L1.

---

## Fix Priority Queue

| # | Issue | Effort | Impact |
|---|---|---|---|
| 1 | Add `og:image` (1200×630) to all locale pages | 30 min | High |
| 2 | Fix `www` → apex to 308 in `vercel.json` | 10 min | High |
| 3 | Add `fetchpriority="high"` to hero `<Image>` | 15 min | Medium |
| 4 | Broaden `connect-src` before next integration | 15 min | Medium |
| 5 | Add `includeSubDomains; preload` to HSTS | 5 min | Medium |
| 6 | Remove `Refresh` header from middleware redirect | 10 min | Low |
| 7 | Implement IndexNow on ISR revalidation | 2 hrs | Low |
| 8 | Fix `og:locale` to `language_TERRITORY` format | 20 min | Low |
| 9 | Close sitemap locale parity for HE/ES/DE/IT/NL/pt-BR | Depends on translation | Medium |
| 10 | Confirm and lock staging noindex policy | 15 min | Low |
