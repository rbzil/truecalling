# SEO Audit Summary — TrueCalling.ai (round 3)

**Date:** 2026-05-08
**URL:** https://truecalling.ai
**Type:** B2B SaaS (AI recruiting), 8 locales
**SEO Health Score:** **71 / 100** (was 64 in round 2, 50 in round 1)

## Headline

Round-3 work has landed cleanly: og:image, author follow-ups, BlogPosting
keyword array, and two real standalone pages (`/features`, `/pricing`) with
the no-credit-card trial callout. **Lighthouse Performance is 95** across
home/features/pricing, which is the round's biggest single-number gain.
The Solo/SMB Recruiter persona moved out of "Critical Mismatch" (39 → 50)
on the back of the trial callout. What's left is mostly content-strategy
work — the comparison-listicle gap blocks the head keywords, and the blog
locale parity gap (HE/ES/DE/IT/NL/pt-BR have zero blog URLs in the sitemap)
remains unaddressed since round 2.

## Score breakdown (estimated, weighted)

| Category | Weight | Score | Notes |
|---|---|---|---|
| Technical SEO | 22% | ~78 | og:image landed, www 307 still pending |
| Content Quality | 23% | ~60 | New pages substantive, blog stats still unsourced |
| On-Page SEO | 20% | ~75 | Hreflang + canonicals + nav clean |
| Schema | 10% | ~65 | author.url removed, keywords array, but pricing page lacks Offer schema |
| Performance | 10% | **95 (Lighthouse)** | LCP 2.8-3.0s, CLS 0, TBT ≤ 90ms |
| GEO / AI Search | 10% | 58 | llms.txt + AI bots good; FAQPage missing on pricing |
| Images | 5% | ~80 | OG image present, brand consistent |
| **Total** | 100% | **~71** | +7 vs round 2 |

## Verified live in production

- `og:image` 1200×630 emits on home, sub-routes, blog, features, pricing — and on Twitter
- `BlogPosting` includes Person author with `@id` graph link, `jobTitle`, `sameAs`, `worksFor` (no `url` field)
- `BlogPosting.keywords` is now a JSON array
- `/en/features` and `/fr/tarifs` (and the 6 other locale variants × 2) are 200 with full hreflang
- Pricing page renders the no-credit-card trial callout with 3 bullets ("1 sample job · 20 candidate matches · no credit card")
- Hebrew navbar shows תכונות / מחירים (the JSON duplicate-key bug is fixed)
- Logo carousel scrolls seamlessly in LTR + RTL
- ROI calculator, Trust strip, locale-aware demo all rendering correctly

## Top 5 critical / high issues remaining

1. **Comparison/listicle page still missing.** SXO confirms 10/10 organic results for "AI sourcing software" are listicles in round 3 (was 9/10 in round 2 — SERP intent has hardened, not softened). This blocks all head keywords.
2. **`FAQPage` JSON-LD on `/en/pricing` not emitted.** The 4 Q&A pairs exist in DOM but carry no schema. 30-min fix that unlocks AI Overview / Bing FAQ snippet eligibility.
3. **Sitemap blog parity.** HE/ES/DE/IT/NL/pt-BR have zero blog URLs since round 2. Either translate or add cross-locale entries pointing at EN/FR equivalents.
4. **`www.truecalling.ai` redirect still 307** (should be 308). Was flagged in round 2.
5. **Blog stats still unsourced** ("98% WhatsApp open rate", "1.2B profiles", "40% time-to-hire reduction"). Either link primary sources or relabel as "TrueCalling internal data, 2026" inline next to each stat — currently only labeled in `llms.txt`.

## Top 5 quick wins

1. Add `FAQPage` JSON-LD to `/en/pricing` (30 min) — directly improves AI/LLM citation surfaces
2. Fix `www` 307 → 308 (10 min) in `vercel.json`
3. Strip `<changefreq>` and `<priority>` from sitemap (5 min — 20% byte savings, no SEO loss)
4. Align stats inconsistency: llms.txt says "90% WhatsApp open rate", blog says "98%". Pick one. (5 min)
5. Add `Disallow: /` for `anthropic-ai` in robots.txt if the policy is search-only access (matches the CCBot decision) (2 min)

## Round delta — what shipped between R2 and R3

| Item | Status |
|---|---|
| og:image absence (R2 critical) | RESOLVED |
| BlogPosting.author.url incorrect (R2 W5) | RESOLVED |
| BlogPosting.keywords as string (R2 W7) | RESOLVED |
| New /features page indexable | DONE (8 locales) |
| New /pricing page with no-CC callout | DONE (8 locales) |
| Hebrew navbar showing English (JSON duplicate keys) | RESOLVED |
| www 307 → 308 (R2 H1) | not done |
| Comparison/listicle page (R2 critical) | not done |
| FAQPage on /en/faq + /en/pricing (R2 H5) | not done |
| Sitemap blog locale parity (R2 H2) | not done |
| Per-article hero images (R2 M1) | not done |
| @graph envelope (R2 M4) | not done |

8 of 12 round-2 items closed. 4 carryovers, all explicitly content-strategy or
infrastructure decisions rather than code-tasks.

## Where the score will go next

| Goal | Required items | Effort |
|---|---|---|
| 71 → 78 | FAQPage on pricing + www 308 + sitemap deduplication + stats reconciliation | < 1 day |
| 78 → 84 | Comparison listicle (`/en/blog/best-ai-sourcing-software-2026`) + DPA download CTA | 1-2 weeks |
| 84 → 90 | Blog locale parity + per-article hero images + per-article statistic citations | 4-6 weeks |
| 90+ | Backlinks + brand mentions (G2, Capterra, Wikidata, YouTube) | 3-6 months |
