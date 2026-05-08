# Action Plan — TrueCalling.ai (round 2)

**Date:** 2026-05-08
**SEO Health Score:** 64/100 (was 50)

Items grouped by priority. Effort estimates assume one engineer
+ one writer where applicable.

## Critical (fix now — blocks indexing, ranking, or social)

### C1 — Add Open Graph image
- **What:** Add `og:image` (1200×630) to root layout metadata.
  Currently only `twitter:image` is rendered, so LinkedIn / WhatsApp /
  Slack / Facebook share previews are blank.
- **Where:** `app/layout.tsx` → `metadata.openGraph.images`
- **Effort:** 30 min (re-use the brand visual or commission a 1200×630)
- **Source:** Technical audit H2

### C2 — Comparison / listicle page for the 3 head keywords
- **What:** New page `/en/blog/best-ai-sourcing-software-2026` and
  `/fr/blog/meilleurs-logiciels-sourcing-ia-2026`. Listicle format,
  TrueCalling listed first with a feature table vs Gem, Fetcher, hireEZ,
  HireSweet, juicebox.ai. 2,000+ words.
- **Why:** The homepage cannot rank for "AI sourcing software" — 9 of 10
  organic results are listicles. SXO Critical.
- **Effort:** 1 week (research + writing + design)
- **Source:** SXO Critical

## High (fix this week)

### H1 — `www.truecalling.ai` 307 → 308
- `vercel.json`: add a `host: www.truecalling.ai` permanent redirect
  rule, or set `"permanent": true` on the existing one.
- **Effort:** 10 min
- **Source:** Technical H1

### H2 — Sitemap locale parity for blog
- HE / ES / DE / IT / NL / pt-BR sitemap entries currently miss the
  blog index + all 10 articles (because `blogEnabledLocales` gates the
  sitemap loop). Either translate the blog or emit cross-locale entries
  pointing at the EN/FR equivalents.
- **Where:** `app/sitemap.ts` blog loop
- **Effort:** 30 min (config) or 2 weeks (translate posts)
- **Source:** Technical M4

### H3 — Solo/SMB Recruiter persona path
- Add a Starter sandbox / no-credit-card / free 5-search tier so the
  persona scoring 39/100 (Critical Mismatch) has an entry path.
- **Effort:** depends on product team — design + auth + quota
- **Source:** SXO Critical

### H4 — Individual named author per blog article
- Currently every article shows "TrueCalling Editorial". Add 2–3 real
  team members with `/en/team/[slug]` bio pages, point
  `BlogPosting.author.url` and `Person.sameAs` (personal LinkedIn) at
  them.
- **Effort:** 1 day per author (bio + photo + page)
- **Source:** Schema W4 + W5, GEO P1-B

### H5 — FAQPage JSON-LD on `/en/faq` + per-article FAQ blocks
- The page already has Q&A in the markup. Wrapping it in FAQPage
  JSON-LD costs an hour and unlocks AI-Overview citation surfaces
  even though Google restricted SERP rich results in 2023.
- **Effort:** 30 min for /en/faq, 2 hours for top 3 articles
- **Source:** GEO P1-C

## Medium (fix this month)

### M1 — Per-article hero images
- `BlogPosting.image` currently uses the brand logo (298×298). Google
  Article guidelines want article-specific 1200×630. Generate 10
  hero images.
- **Effort:** 0.5 day (brand-consistent SDXL prompts)
- **Source:** Schema W6

### M2 — `BlogPosting.keywords` as JSON array
- `"keywords": "AI sourcing"` → `"keywords": ["AI sourcing", "recruiting", "talent acquisition"]`
- **Where:** `lib/schema.ts` `blogPostingSchema()` — split on comma
  if `keyword` field contains commas.
- **Effort:** 5 min
- **Source:** Schema W7

### M3 — `WebSite` SearchAction (Sitelinks Searchbox)
- Add `potentialAction: SearchAction` to `websiteSchema()` once the
  app supports `?q=` deep link.
- **Effort:** 1 hour, blocked on app feature
- **Source:** Schema W2

### M4 — `@graph` envelope for site-wide schema
- Co-locate Organization + WebSite in one `<script>` tag with
  `@graph: [...]` instead of two separate scripts. Cleaner for crawlers
  that resolve `@id` references.
- **Where:** `app/layout.tsx` `<head>` schema scripts
- **Effort:** 15 min
- **Source:** Schema W1

### M5 — Source statistics in blog articles
- Add primary-source links (Meta Business for WhatsApp open rate,
  LinkedIn earnings calls for InMail decline, SHRM for time-to-hire) OR
  explicitly label each as "TrueCalling internal data, 2026, n=…".
- **Effort:** 3-5 hours per article × 10 articles = ~1 week
- **Source:** Round 1 GEO Priority 5 (still unresolved)

### M6 — Hero image `priority` prop + `fetchpriority="high"`
- The `<link rel="preload" as="image">` in `<head>` points at a partner
  logo, not the hero. Add `priority` prop to the hero `<Image>`.
- **Effort:** 15 min
- **Source:** Technical M7

### M7 — IndexNow protocol
- Generate a UUID key, place in `/public/{key}.txt`, ping
  `api.indexnow.org` from the Next.js revalidation hook.
- **Effort:** 2 hours
- **Source:** Technical L8

### M8 — Agency toggle on ROI calculator
- Add a "Agency" mode that switches outputs from "days saved" to
  "placements / fee revenue" for the Agency Founder persona.
- **Effort:** 1 day
- **Source:** SXO action 3

### M9 — Download DPA CTA in trust strip
- Replace the generic CTA in the GDPR strip with a "Download DPA" link
  that returns the DPA PDF. HR Director persona action gap.
- **Effort:** 1 day (write + design DPA + sign off legal + wire CTA)
- **Source:** SXO action 2

## Low (backlog)

### L1 — `og:locale` `language_TERRITORY` format
- `en` → `en_US`, `fr` → `fr_FR`, etc. OG spec compliance, marginal impact.
- **Effort:** 15 min
- **Source:** Technical L9

### L2 — HSTS `includeSubDomains; preload`
- Update HSTS header so the site is preload-eligible. Affects future
  subdomains.
- **Effort:** 10 min
- **Source:** Technical M5

### L3 — Remove legacy `Refresh` header on root redirect
- `Refresh: 0;url=/en` is sent alongside `Location: /en`. Harmless but
  noisy.
- **Where:** middleware
- **Effort:** 5 min
- **Source:** Technical M6

### L4 — Remove single-item BreadcrumbList on `/en` etc.
- Google ignores 1-item breadcrumbs. Either drop the JSON-LD on home or
  expand to 2 items (TrueCalling > Home is meaningless — drop it).
- **Where:** `app/[locale]/page.tsx`
- **Effort:** 5 min
- **Source:** Schema W3

### L5 — `aggregateRating` on SoftwareApplication
- Once 3+ public reviews exist (G2, Capterra), add `aggregateRating` to
  the SoftwareApplication block. Unlocks star snippets.
- **Effort:** 15 min once reviews exist
- **Source:** Schema critical (deferred until G2 listing)

### L6 — `llms.txt` polish
- Add canonical URLs for EMILY and TrueFit 360, plus
  `Version:` and `Updated:` headers, and an explicit `License:` field.
- **Effort:** 30 min
- **Source:** GEO P2-A

### L7 — Twitter/X profile in Organization `sameAs`
- Add the Twitter handle once it exists.
- **Effort:** 1 min when ready
- **Source:** Schema info

## Estimate to next score milestone

| Goal | Required items | Effort |
|---|---|---|
| 64 → 74 | C1 + H1 + H2 + H4 + H5 + M1 + M2 + M5 (partial) | 1-2 weeks |
| 74 → 80 | C2 (listicle) + M3 + M4 + H3 (SMB tier) | 3-4 weeks |
| 80 → 85+ | Backlinks + brand mentions + 2nd named author + per-article stats | 3-6 months |
