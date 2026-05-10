# Sitemap Audit — Round 3
**Date:** 2026-05-07
**File:** https://truecalling.ai/sitemap.xml
**Score: 68 / 100**

---

## Summary

| Metric | Value |
|--------|-------|
| Total URLs | 102 |
| HTTP 200 | 102 (100%) |
| HTTP 4xx / 3xx | 0 |
| Locales covered | 8 (fr, en, he, pt-BR, es, de, it, nl) |
| .app domain remnants | 0 |
| Deprecated tags (priority/changefreq) | Still present — all 102 URLs |

---

## Check Results

### PASS — URL limit (50k max)
102 URLs, well within bounds.

### PASS — All URLs return HTTP 200
Every URL in the sitemap was tested. Zero 404s, zero redirects.

### PASS — No .app domain remnants
All canonical `<loc>` values use `https://truecalling.ai`. No `truecalling.app` references found.

### PASS — x-default present on all URL blocks
All 102 `<url>` blocks carry an `hreflang="x-default"` pointing to the `/en` equivalent. Target is correct on every block.

### PASS — lastmod accuracy (blog articles)
Blog article lastmod values are staggered across 10 distinct dates (2025-09-15 through 2026-04-22), matching plausible publish cadence. FR and EN counterparts share matching dates. This is correctly implemented.

### PASS (partial) — lastmod for non-blog pages
All 80 non-blog URLs carry `2026-05-08T08:10:01.073Z` — a single identical timestamp, consistent with a build-time stamp rather than real modification dates. Low severity since Google ignores unreliable lastmod, but a real per-page modification date would carry more weight.

### PASS — 16 new features + pricing URLs present
All 8 locale-specific features pages confirmed:
`/fr/fonctionnalites`, `/en/features`, `/he/features`, `/pt-BR/funcionalidades`, `/es/caracteristicas`, `/de/funktionen`, `/it/funzionalita`, `/nl/functies`

All 8 locale-specific pricing pages confirmed:
`/fr/tarifs`, `/en/pricing`, `/he/pricing`, `/pt-BR/precos`, `/es/precios`, `/de/preise`, `/it/prezzi`, `/nl/prijzen`

### FAIL — Blog locale parity (Round 2 issue NOT resolved)
This was the primary unresolved finding from Round 2. Status is **unchanged**.

Blog content (index + 10 articles) exists only in FR and EN. The 6 remaining locales — HE, ES, DE, IT, NL, pt-BR — have zero blog entries in the sitemap.

| Locale | Blog URLs in sitemap |
|--------|----------------------|
| fr | 11 (index + 10 articles) |
| en | 11 (index + 10 articles) |
| he | 0 |
| pt-BR | 0 |
| es | 0 |
| de | 0 |
| it | 0 |
| nl | 0 |

Impact: Google cannot associate any blog signal with the HE/ES/DE/IT/NL/pt-BR locale trees. Internal link equity from blog articles never reaches those locale homepages.

### FAIL — Blog hreflang alternates incomplete (new finding this round)
Blog URL blocks — both FR and EN — carry only 3 hreflang alternates: `fr`, `en`, `x-default`. The other 6 locales are absent because no translated blog versions exist. This is a consequence of the locale parity gap above, but it creates a concrete hreflang problem: blog pages are not reciprocally linked into the full 8-locale graph. If translated blog content is ever added, the alternates must expand to all 8 locales.

This is structurally correct given the current state (you cannot list a locale alternate that does not exist), but it means blog pages are isolated from the 6-locale cluster that non-blog pages benefit from.

### INFO — Deprecated tags still present
`<changefreq>` and `<priority>` are on all 102 entries. Google ignores both. No crawl harm, but they add ~20% byte overhead to the file. Recommended to remove on next sitemap regeneration.

---

## Round 2 Regression Check

| Round 2 Fix | Status |
|-------------|--------|
| x-default added | Holding — present on all 102 blocks |
| lastmod with real dates (blog) | Holding — 10 staggered dates on articles |
| hreflang alternates (non-blog) | Holding — 9 alternates per block on all 80 non-blog URLs |
| Blog parity (HE/ES/DE/IT/NL/pt-BR) | Not fixed — 0 blog URLs in those 6 locales |

---

## Scoring Breakdown

| Area | Weight | Score |
|------|--------|-------|
| HTTP status (all 200) | 20 | 20/20 |
| Domain cleanliness (no .app) | 10 | 10/10 |
| x-default correctness | 10 | 10/10 |
| hreflang completeness (non-blog) | 15 | 15/15 |
| hreflang completeness (blog) | 15 | 5/15 — only fr+en, 6 locales missing |
| Blog locale parity | 15 | 0/15 — unresolved from Round 2 |
| lastmod quality | 10 | 5/10 — articles good, non-blog all identical |
| Deprecated tag hygiene | 5 | 3/5 — present but low harm |

**Total: 68/100**

---

## Priority Actions

1. **[High]** Add translated blog content for HE, ES, DE, IT, NL, pt-BR, or make an explicit product decision to keep the blog EN/FR only and document the hreflang limitation. Leaving 6 locales with 0 blog coverage was the Round 2 action item — it remains open.

2. **[Medium]** Once translated blog exists, expand blog hreflang alternates from 3 to 9 entries per block to match non-blog pages.

3. **[Low]** Remove `<changefreq>` and `<priority>` on next sitemap build to reduce file size.

4. **[Low]** Replace the identical `2026-05-08` build-stamp on non-blog pages with actual CMS last-modified dates if the framework supports it.
