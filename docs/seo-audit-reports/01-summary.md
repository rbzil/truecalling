# SEO Audit — Consolidated Summary

**URL:** https://truecalling-lyart.vercel.app/en
**Date:** 2026-05-06
**Type:** SaaS B2B (recruiting AI)

## SEO Health Score: **50 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 51/100 | 11.2 |
| Content Quality | 23% | 55/100 | 12.7 |
| On-Page SEO | 20% | 50/100 | 10.0 |
| Schema | 10% | 45/100 | 4.5 |
| Performance (CWV) | 10% | 50/100* | 5.0 |
| AI Search (GEO) | 10% | 38/100 | 3.8 |
| Images | 5% | 60/100 | 3.0 |

\* Performance partial (PSI quota exhausted).

## 5 Critical issues (cross-agent)

1. **Canonical collapse** — all sub-routes (`/en/book-a-demo`, `/en/contact`, etc.) canonicalize to the locale homepage. ~48 URLs at risk of de-indexing.
2. **Hreflang sub-routes broken** — `/fr/reserver-une-demo` declares `hreflang="de"` → `/de` (home) instead of `/de/demo-buchen`.
3. **`<html lang="en">` hardcoded** — Google sees `lang=en` on /fr, /he, /de at SSR.
4. **`robots.txt` 404** — `[locale]` catch-all intercepts the path. No AI bot directives.
5. **Staging Vercel indexable** — `truecalling-lyart.vercel.app` returns `index, follow`. Duplicate content vs production.

## Visible bugs to users (immediate fixes)

- **"[À confirmer], Le Chiller"** testimonial live on home (kills credibility)
- **`/logos/lechiller.png` returns 404** (broken image + LCP penalty)

## Prioritized action plan

### Critical — fix this week
1. `generateMetadata()` per sub-route (canonical + alternates.languages) — 3-4 h
2. Create `app/robots.ts` with AI bot allow + Sitemap declaration — 30 min
3. Block staging indexation (`X-Robots-Tag` conditional on `VERCEL_ENV`) — 30 min
4. Remove "[À confirmer], Le Chiller" testimonial — 15 min
5. Fix dynamic `<html lang>` per locale at SSR — 1-2 h
6. Fix `/logos/lechiller.png` 404 + `next/image priority` — 15 min

### High — fix this month
7. `Organization` + `WebSite` + `BreadcrumbList` schemas — 2-3 h
8. `BlogPosting` image + dateModified + publisher.logo — 2 h
9. Unique titles + meta descriptions per sub-page (8 locales) — 4 h
10. Sitemap x-default + real lastmod — 1 h
11. Security headers (CSP, X-Frame, etc.) — 30 min

### Medium — fix in 1-2 months
12. Create `llms.txt` with EMILY™ / TrueFit 360 entity definitions — 2-3 h
13. Author bylines + bios + author schema on blog (E-E-A-T) — 1-2 days
14. Source all statistics or label as "internal data, n=X" — 3-5 h/article
15. Comparison content asset "AI sourcing software vs Gem/Fetcher/hireEZ" — 1-2 weeks
16. GDPR / compliance section on home — 1 day
17. Self-serve CTA alternative to "Book a demo" — 2-3 days

### Low — backlog
- YouTube channel
- IndexNow on blog publish
- Reduce font preloads (5 → 2)
- 307 → 308 root redirect
- Wikipedia entity page (notability evidence required)
