# Partial Reports — Content, Sitemap, Performance, Visual

**URL:** https://truecalling-lyart.vercel.app/en
**Date:** 2026-05-06
**Status:** These four agents returned only partial output during the orchestrated audit. This file consolidates what each did report and recommends the exact re-run command to obtain a full report.

---

## Why these are partial

Inside the parallel `/seo audit` orchestration, four of the eight subagents either hit external rate limits, fell back to slower local methods, or returned only short investigation summaries instead of full reports. Their findings are still useful as directional signals, but should not be considered a complete audit for those dimensions.

| Agent | Cause of partial output | Re-run command |
|---|---|---|
| `claude-seo:seo-content` | Returned investigation notes only, no formal scoring rubric output | `/seo content https://truecalling-lyart.vercel.app/en` |
| `claude-seo:seo-sitemap` | Inspected sitemap but did not emit full structured report | `/seo sitemap https://truecalling-lyart.vercel.app/sitemap.xml` |
| `claude-seo:seo-performance` | PageSpeed Insights API quota exhausted; fell back to local Lighthouse, did not finalize | `/seo performance https://truecalling-lyart.vercel.app/en` |
| `claude-seo:seo-visual` | Captured screenshots but did not produce mobile-vs-desktop comparison report | `/seo images https://truecalling-lyart.vercel.app/en` |

---

## 1. Content / E-E-A-T (partial)

### What was observed

- **Word counts:** Blog articles range ~1,200–1,800 words. Adequate for the topic ("AI sourcing", "WhatsApp recruiting", "InMail decline"). No thin-content pages detected on the blog.
- **Heading hierarchy:** Clean H1 → H2 → H3 chain on all 10 sampled blog articles. No heading skips.
- **Author attribution:** **Zero** named authors across all 10 blog posts. No bio block, no LinkedIn link, no photo.
- **Last-updated dates:** Missing on all blog articles. Only `datePublished` is rendered.
- **Internal linking:** Sparse. Articles do not cross-reference one another. No pillar/cluster structure visible.
- **External citations:** Statistics ("90% WhatsApp open rate", "1.2B profiles", "InMail decline 35% → 18-22%") appear without primary-source links.
- **Readability:** French and English copy reads at approximately Flesch 50-60 (college-level). Acceptable for B2B SaaS audience but harder than industry leaders (Lever, Greenhouse blogs sit at ~60-70).

### What was NOT delivered

- Per-article E-E-A-T scoring (Experience / Expertise / Authoritativeness / Trust dimensions)
- Per-article AI-citation-readiness rubric
- Per-article thin-content flags with passage selection
- Comparison against competitor content depth (Greenhouse, Lever, Ashby blogs)

### Confirmed action items

These overlap with [`04-geo.md`](./04-geo.md) Priority 3:

1. Add named author + bio + LinkedIn to every blog post
2. Add `dateModified` field, render last-updated date in article header
3. Add primary-source citations to every numeric stat OR label clearly as "TrueCalling internal data, [year], n=[sample]"
4. Add a "Key Takeaways" / "TL;DR" block in the first 100 words of each article
5. Add a clickable Table of Contents with anchor links

### Re-run

```
/seo content https://truecalling-lyart.vercel.app/en
```

Recommend running per-article (not just homepage) for full E-E-A-T scoring:

```
/seo content https://truecalling-lyart.vercel.app/en/blog/sourcing-ia-guide-2026
/seo content https://truecalling-lyart.vercel.app/en/blog/whatsapp-recruiting-gdpr
/seo content https://truecalling-lyart.vercel.app/en/blog/ai-copilot-recruiters
```

---

## 2. Sitemap (partial)

### What was observed

- **Location:** `https://truecalling-lyart.vercel.app/sitemap.xml`
- **Validity:** Valid XML, well-formed, no parsing errors.
- **URL count:** 73 URLs across 8 locales.
- **Hreflang alternates:** `xhtml:link rel="alternate"` blocks present for each URL.
- **`lastmod`:** Dynamic `now()` timestamp — Googlebot treats this as low-signal noise. Should reflect git/CMS-derived modification dates.
- **`priority`:** Set per URL (homepage 1.0, sub-pages 0.8, blog 0.7, legal 0.3). Note: `priority` is a hint Google largely ignores.
- **`changefreq`:** Set per URL. Same: Google largely ignores.
- **Domain mismatch:** Sitemap served on `truecalling-lyart.vercel.app` but `<loc>` URLs all point to `https://truecalling.ai`. Cannot be auto-discovered by Googlebot from staging — must be submitted manually in Search Console under the production property.
- **`x-default`:** **Missing** in every URL block. Should be added — see [`06-hreflang.md`](./06-hreflang.md) High 5.

### What was NOT delivered

- Index sitemap analysis (single file vs. split — currently single, fine for 73 URLs)
- Image sitemap presence check (none detected — recommended for blog if articles use unique images)
- Video sitemap presence check (N/A — no video content)
- Per-URL coverage audit against actual rendered pages (orphan check)
- News sitemap eligibility (N/A — not a news publisher)

### Confirmed action items

1. Add `x-default` hreflang in every URL's `xhtml:link` block
2. Switch `lastmod` to actual content modification dates (git timestamps for static pages, CMS timestamps for blog)
3. Once production migrates from staging, ensure sitemap is served at `https://truecalling.ai/sitemap.xml` and submit to GSC

### Re-run

```
/seo sitemap https://truecalling-lyart.vercel.app/sitemap.xml
```

---

## 3. Performance / Core Web Vitals (partial)

### What was observed

- **PageSpeed Insights API:** Returned 429 (quota exhausted). No CrUX field data captured.
- **Local Lighthouse fallback:** Started but did not complete a full run before the audit timed out.
- **SSR confirmed:** Page returns full text via `curl -sS` — no JS execution required for content. Positive for LCP.
- **LCP candidate broken:** `/logos/lechiller.png` preloaded but returns HTTP 404 (see [`02-technical.md`](./02-technical.md) H5). This is the single most damaging performance finding currently observable without field data.
- **5 fonts preloaded simultaneously:** Competes with LCP image for connection bandwidth. `font-display: swap` mitigates worst-case but adds layout shift risk.
- **HTML size:** ~119 KB uncompressed. Verify Brotli at Vercel CDN edge (likely OK, not measured).
- **No `fetchpriority="high"`** on hero image preload.
- **No preconnect** for third-party origins (Calendly, LinkedIn, etc.).

### What was NOT delivered

- LCP / INP / CLS measured values (lab or field)
- Per-route performance scoring (homepage vs. blog vs. demo page)
- Mobile vs. desktop breakdown
- Render-blocking resource inventory
- JavaScript bundle analysis (largest chunks, unused code)
- Network waterfall analysis
- TTFB by region
- CDN cache hit rate

### Confirmed action items

1. **Fix `/logos/lechiller.png` 404** — highest immediate LCP win
2. Switch to `next/image` with `priority` prop (gets `fetchpriority="high"` automatically)
3. Audit font preloads — keep only the subsets used above the fold
4. Add `<link rel="preconnect" href="https://assets.calendly.com">` if Calendly embed used in hero
5. Verify Brotli compression enabled on Vercel edge

### Re-run

PageSpeed Insights quota resets at midnight Pacific Time. Re-run after reset:

```
/seo performance https://truecalling-lyart.vercel.app/en
```

For more reliable field data, configure Google Search Console + CrUX API:

```
/seo google cwv https://truecalling.ai
```

(Requires production traffic for CrUX to have data — staging won't.)

---

## 4. Visual / Mobile (partial)

### What was observed

- **Screenshots captured:** Yes (homepage at 1920×1080 desktop and 375×667 mobile)
- **Above-the-fold content:** Brand logo, H1 ("The AI sourcing software that hires with precision"), CTA button visible without scroll on both viewports
- **Mobile rendering:** No horizontal scroll detected. Hamburger menu present.
- **Viewport meta:** Correctly set (`<meta name="viewport" content="width=device-width, initial-scale=1">`)
- **Tap target sizing:** Not measured per element — visual inspection suggests CTAs are >44px (Apple HIG minimum), navigation links borderline on mobile.
- **Logo strip image broken:** `/logos/lechiller.png` returns 404 → renders as broken image icon on every page that includes the customer logo strip. Visible regression. (Same root cause as the LCP issue in §3.)

### What was NOT delivered

- Per-page above-the-fold screenshot comparison (mobile vs. desktop)
- CLS visual diff (before vs. after web fonts load)
- Tap target heatmap with per-element pixel measurements
- Image format audit (WebP/AVIF coverage vs. PNG/JPG)
- Image dimension audit (oversized images served to small viewports)
- Per-locale visual diff (RTL Hebrew layout regressions)
- Hero image CDN inspection (Vercel image optimization params)

### Confirmed action items

1. **Fix `/logos/lechiller.png` 404** — same fix as performance, also fixes visible broken-image bug
2. Verify Hebrew (`/he`) RTL layout doesn't break the customer logo strip or pricing cards
3. Audit hero image format — ensure WebP/AVIF served to supporting browsers
4. Measure tap targets on mobile nav

### Re-run

```
/seo images https://truecalling-lyart.vercel.app/en
```

For per-locale RTL inspection:

```
/seo images https://truecalling-lyart.vercel.app/he
```

---

## Summary

These four dimensions are **directionally covered** but not **rigorously scored**. The findings above overlap heavily with the Critical / High issues already documented in [`02-technical.md`](./02-technical.md) and [`04-geo.md`](./04-geo.md):

- The broken `/logos/lechiller.png` shows up across performance, visual, and technical reports — fixing it once resolves multiple symptoms
- The missing author bylines, dateModified, and external citations show up across content and GEO reports — fixing them once raises both scores
- The missing `x-default` shows up in sitemap and hreflang reports — fixing it once resolves both

So the partial coverage here does not block decision-making on the prioritized action list in [`01-summary.md`](./01-summary.md). It just means that *fine-grained scoring* on those four axes (e.g., "your CLS is 0.18", "this article scores 62 on AI citation readiness") is not yet available. Re-run the four commands above when you want those numbers.
