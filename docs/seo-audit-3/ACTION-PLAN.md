# Action Plan — TrueCalling.ai (round 3)

**Date:** 2026-05-08
**SEO Health Score:** 71/100 (R2: 64, R1: 50)

## Critical (fix now)

### C1 — Build `/en/blog/best-ai-sourcing-software-2026` listicle
SXO confirms 10/10 organic results for "AI sourcing software" are now
listicles (was 9/10 in R2 — SERP has hardened). Pin owns 2 of those 10
slots by publishing their own listicle. The standalone /features and
/pricing pages cannot rank for the head keyword cluster regardless of
how good they are — wrong page type.
- Format: 2,500-3,500 words, TrueCalling listed first
- Compare 6-8 tools: TrueCalling, Gem, Fetcher, hireEZ, HireSweet, juicebox.ai, MindHunt, Pin
- Schema: BlogPosting + ItemList + per-tool ratings (if reviews exist)
- Add "Best for X" verdicts (best for SMB, best for enterprise, best for WhatsApp outreach…)
- **Effort:** 1-2 weeks (research + writing + design)
- **Impact:** Only path to organic visibility for the primary keyword cluster

## High (fix this week)

### H1 — `FAQPage` JSON-LD on `/en/pricing`
The 4 Q&A pairs (free trial / plan switch / Enterprise / GDPR) already
exist in the DOM. Wrapping them in FAQPage costs 30 min and unlocks AI
Overview + Bing FAQ snippet eligibility. (Note: Aug 2023 Google
restriction means no SERP rich result for commercial sites — but the
schema still helps AI/LLM citation surfaces.)
- **Where:** `app/[locale]/pricing/page.tsx` — emit a `<script type="application/ld+json">` with `FAQPage`
- **Effort:** 30 min
- **Impact:** GEO P1, SXO action 2

### H2 — `www.truecalling.ai` 307 → 308
Carryover from R2 H1. Permanent redirect consolidates PageRank.
- **Where:** `vercel.json` redirect rule with `host: www.truecalling.ai` and `permanent: true`
- **Effort:** 10 min

### H3 — Reconcile stats: 90 % vs 98 % WhatsApp open rate
`llms.txt` says 90 %, blog posts say 98 %. AI assistants will surface the
inconsistency to users and suppress citation confidence. Pick one figure
and propagate.
- **Effort:** 5 min
- **Impact:** GEO citation trust

### H4 — Per-article inline stat labels
Stats like "1.2B profiles", "40 % time-to-hire reduction" are labeled
"TrueCalling internal data, 2026" only in `llms.txt`. Add the label
inline next to each stat in blog articles + on the home — tiny grey
parenthetical: "(TrueCalling internal data, 2026)". Solves R1's
unsourced-stats finding without doing the heavier work of attributing
to primary sources.
- **Effort:** 1 hour
- **Impact:** Content E-E-A-T, GEO citation

### H5 — Sitemap deduplication
Strip `<changefreq>` and `<priority>` from sitemap output. Google ignores
both. Currently ~20 % byte overhead on 102 URL blocks.
- **Where:** `app/sitemap.ts`
- **Effort:** 5 min

## Medium (fix this month)

### M1 — LCP 3.0s → < 2.5s on home
Lighthouse Performance is 95 but LCP is at the "Good" boundary. The hero
visual loads from `next/image` without `priority`. Adding `priority` on
the hero `<Image>` should drop LCP by 300-500ms.
- **Effort:** 15 min

### M2 — Pricing page Offer schema per tier
The pricing page lists Starter/Core/Enterprise but doesn't emit
`Product`/`Offer` schema. Add an Offer per tier so AI assistants can cite
"TrueCalling Starter starts at $595/user/month" with structured grounding.
- **Effort:** 1 hour

### M3 — Sitemap blog locale parity decision
HE/ES/DE/IT/NL/pt-BR have zero blog URLs since R1. Two valid paths:
either translate the 10 articles, OR add `xhtml:link rel="alternate"`
entries pointing at the EN/FR equivalents from the other 6 locales'
universal-route blocks (no new URLs, just hreflang completeness).
- **Effort:** 30 min config OR 4 weeks translation

### M4 — DPA download CTA
HR Director persona action gap (round-2 SXO carryover). Replace generic
CTA in the home Compliance & data strip with a "Download DPA" link
returning the actual DPA PDF.
- **Effort:** 1 day (write + legal sign-off + wire CTA)

### M5 — `/features` page word-count + comparison block
Currently ~550 words. Competing pages are 3,000-5,000-word buyer guides.
Grow to 1,200+ words and add a feature matrix vs Gem / Fetcher / hireEZ
to give the page enough body to compete on secondary keywords.
- **Effort:** 1 week

### M6 — Per-article hero images (1200×630)
Carryover from R2 M1. `BlogPosting.image` is still the brand logo.
Generate 10 hero images.
- **Effort:** 0.5 day with image-gen skill

### M7 — `@graph` envelope for site-wide schema
Carryover from R2 M4. Co-locate Organization + WebSite in one
`@graph: [...]` array instead of two `<script>` tags.
- **Effort:** 15 min

### M8 — `anthropic-ai` policy decision
robots.txt currently Allows `anthropic-ai` (training crawler, separate
from ClaudeBot search). If the policy is "search-only", add `Disallow: /`
for `anthropic-ai` to match the CCBot decision.
- **Effort:** 2 min

### M9 — Question-form blog headings
~20 % of blog H2/H3 are question-form. Target 50 % on comparison and
methodology posts. Question-form headings match how users query AI
assistants, increasing passage retrieval.
- **Effort:** 2 hours editorial

## Low (backlog)

### L1 — Real `lastmod` per non-blog page
All 80 non-blog URLs share the same build-time stamp. Wire actual git
commit dates per route via the Next.js metadata layer.
- **Effort:** 2 hours

### L2 — `og:locale` `language_TERRITORY` format
Carryover from R2 L1.
- **Effort:** 15 min

### L3 — HSTS `includeSubDomains; preload`
Carryover from R2 L2.
- **Effort:** 10 min

### L4 — IndexNow protocol
Carryover from R2 M7. Generate UUID key, place in `/public/{key}.txt`,
ping `api.indexnow.org` from revalidation hook.
- **Effort:** 2 hours

### L5 — YouTube channel + 3 videos
Highest-correlation off-site GEO signal (0.737 with AI citation rate)
that TrueCalling lacks. Even short EMILY screen-capture demos build
entity corroboration. Long lead time but compounds.
- **Effort:** 2-3 weeks

### L6 — Wikidata entry
Wikipedia is too early (notability threshold not met yet) but Wikidata
is achievable now and gives structured-data graphs an authoritative
sameAs anchor.
- **Effort:** 1 hour

### L7 — G2 / Capterra listings
Unlocks `aggregateRating` on SoftwareApplication, addresses TA Manager
trust gap.
- **Effort:** 0.5 day each

## Estimate to next score milestone

| Goal | Required | Effort |
|---|---|---|
| 71 → 78 | H1 + H2 + H3 + H4 + H5 | < 1 day total |
| 78 → 84 | C1 (listicle) + M2 + M4 | 1-2 weeks |
| 84 → 90 | M3 + M5 + M6 + L5 + L6 + L7 | 4-6 weeks |
| 90+ | Sustained backlink + content velocity | 3-6 months |
