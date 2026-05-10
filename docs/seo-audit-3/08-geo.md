# GEO / AI-Search Audit — Round 3
**Site:** https://truecalling.ai
**Date:** 2026-05-07
**Auditor:** Claude Code (claude-sonnet-4-6)

---

## GEO Readiness Score: 58 / 100

| Dimension              | Weight | Score | Weighted |
|------------------------|--------|-------|---------|
| Citability             | 25%    | 60    | 15.0    |
| Structural Readability | 20%    | 65    | 13.0    |
| Multi-Modal Content    | 15%    | 35    | 5.25    |
| Authority & Brand Signals | 20% | 52    | 10.4    |
| Technical Accessibility| 20%    | 72    | 14.4    |
| **Total**              |        |       | **58.0**|

---

## Round-2 Fix Verification

| Item | Status | Detail |
|------|--------|--------|
| GPTBot / OAI-SearchBot / ChatGPT-User Allow | PASS | All present in robots.txt |
| ClaudeBot / Claude-Web Allow | PASS | Both entries present |
| anthropic-ai Allow | PASS | Present (training bot — intentional open policy) |
| PerplexityBot / Perplexity-User Allow | PASS | Both entries present |
| Google-Extended / Applebot-Extended Allow | PASS | Both present |
| Bingbot Allow | PASS | Present |
| CCBot Disallow | PASS | Correctly blocked |
| /llms.txt present | PASS | Served at truecalling.ai/llms.txt |
| llms.txt EMILY entity definition | PASS | Present with description |
| llms.txt TrueFit 360 entity definition | PASS | Present with description |
| llms.txt stats labeled "TrueCalling internal data, 2026" | PASS | All 4 key claims carry that label |
| BlogPosting JSON-LD on blog posts | FAIL | No JSON-LD detected on any blog post fetched |
| Person author with @id / jobTitle / sameAs / worksFor | FAIL | Author rendered as plain HTML text only |
| FAQPage JSON-LD on /en/pricing | FAIL | 4 Q&A pairs present in markup but zero structured data |

**Round-2 score: 11 / 14 items verified.**
Three structural-data items remain unimplemented despite being listed as fixed.

---

## AI Crawler Access Status

| Crawler | Purpose | Status |
|---------|---------|--------|
| GPTBot | ChatGPT training + search index | ALLOWED |
| OAI-SearchBot | ChatGPT Search live retrieval | ALLOWED |
| ChatGPT-User | ChatGPT Browse with Bing | ALLOWED |
| ClaudeBot | Anthropic search index | ALLOWED |
| anthropic-ai | Anthropic training | ALLOWED |
| PerplexityBot | Perplexity index | ALLOWED |
| Perplexity-User | Perplexity real-time fetch | ALLOWED |
| Google-Extended | Gemini / AI Overviews | ALLOWED |
| Applebot-Extended | Apple Intelligence | ALLOWED |
| Bingbot | Bing Copilot index | ALLOWED |
| CCBot | Common Crawl (training resale) | BLOCKED |

Note: `anthropic-ai` is the Anthropic training crawler, separate from `ClaudeBot` (search). Allowing it is fine but worth a deliberate policy decision.

---

## /llms.txt Status

**Present: YES**
**RSL 1.0 / reuse notice:** Attribution clause present ("Reuse with attribution to https://truecalling.ai") — not formal RSL 1.0 syntax but functionally equivalent for most AI pipelines.
**Entity coverage:** TrueCalling (product), EMILY (AI copilot), TrueFit 360 (methodology) — all defined.
**Key claims:** 4 stats with "TrueCalling internal data, 2026" attribution.
**Gap:** No `# Optional` / `# Full` section markers per llms.txt spec. Parsers expecting the Hierarchy spec format may not correctly classify content sections.
**Gap:** Authoritative Resources section lists "Seven blog posts and main product page" but does not provide actual URLs — machine-parsers cannot follow.

---

## Citability Analysis

### Passage Length
Blog posts run 1,200–1,400 words per article across ~8–10 sections, giving average section length of ~130–175 words — within the optimal 134–167-word citation window for most AI retrieval systems. No action needed on length.

### Direct Answer Placement
The WhatsApp and AI Copilot articles open each section with the direct answer within the first 1–2 sentences. The vs-LinkedIn-Recruiter article is less consistent: declarative headings rather than question headings reduce AI extractability for FAQ-style queries.

### Self-Contained Blocks
Statistics ("90% WhatsApp open rate", "40% time-to-hire reduction") appear in body text but lack inline source attribution on the page (attribution exists in llms.txt but not at the point of citation). AI systems pulling a passage get the stat without provenance.

### Question-Based Headings
Only ~20% of H2/H3 headings across sampled posts are phrased as questions. Comparison and methodology posts use declarative headings ("The 4 major limits of LinkedIn Recruiter"), which reduces match probability for question-form queries in AI Overviews.

---

## Authority & Brand Signal Analysis

| Signal | Status | Notes |
|--------|--------|-------|
| Wikipedia entity | MISSING | No Wikipedia article found (404) |
| Reddit presence | UNKNOWN | Reddit blocked fetch; no organic thread evidence found via indirect signals |
| YouTube channel / videos | NOT FOUND | No TrueCalling YouTube content detected |
| LinkedIn company page | PRESENT | 55 followers — very low authority signal weight |
| Domain backlink rating | NOT MEASURED | No DataForSEO access this session |
| Author LinkedIn profiles | PARTIAL | Blog byline links to LinkedIn but no named individual — "TrueCalling Editorial · Talent Intelligence Team" is a team attribution, not a Person entity |

**Brand mention correlation context:** YouTube mentions correlate ~0.737 with AI citations (strongest signal). TrueCalling has zero YouTube presence — this is the highest-leverage missing channel.

---

## Structured Data Gaps (Critical)

### 1. BlogPosting JSON-LD — Not Implemented
Every blog post audited shows plain-text author and date. No `<script type="application/ld+json">` blocks detected.
Minimum required schema per post:
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "...",
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "author": {
    "@type": "Person",
    "@id": "https://truecalling.ai/#author-team",
    "name": "TrueCalling Talent Intelligence Team",
    "jobTitle": "Editorial Team",
    "worksFor": { "@type": "Organization", "@id": "https://truecalling.ai/#org" },
    "sameAs": ["https://www.linkedin.com/company/truecalling-ai"]
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://truecalling.ai/#org",
    "name": "TrueCalling",
    "logo": { "@type": "ImageObject", "url": "https://truecalling.ai/logo.png" }
  }
}
```

### 2. FAQPage JSON-LD on /en/pricing — Not Implemented
4 Q&A pairs exist in the Pricing FAQ section. None are wrapped in FAQPage schema. This is a direct Google AIO and Bing Copilot eligibility requirement.

### 3. Organization / WebSite Schema on Homepage — Not Verified
No evidence of root-level Organization or WebSite schema (with SearchAction sitelinks searchbox). Should be present on the homepage.

---

## Per-Platform Readiness Scores

| Platform | Score | Key Bottleneck |
|----------|-------|----------------|
| Google AI Overviews | 52/100 | No FAQPage schema, no BlogPosting schema, weak E-E-A-T (team byline, no named authors) |
| ChatGPT Search | 61/100 | robots.txt fully open; llms.txt present; gap is lack of entity corroboration (no Wikipedia, low Reddit) |
| Perplexity | 64/100 | Strong: direct answers in sections, good passage length, llms.txt; gap is no named author for citation trust |
| Bing Copilot | 55/100 | No FAQPage JSON-LD blocks AIO-equivalent snippets; Bingbot allowed but structured data missing |

---

## Top 5 Highest-Impact Changes

### P1 — Add FAQPage JSON-LD to /en/pricing
**Effort:** 1 hour | **Impact:** High
4 Q&As already exist in the DOM. Wrap them in FAQPage + Question + acceptedAnswer schema. Directly unlocks Google AIO rich result eligibility and Bing Copilot FAQ snippets. No content changes required — markup only.

### P2 — Add BlogPosting JSON-LD to all 10 blog posts
**Effort:** 2–4 hours (template once, apply globally) | **Impact:** High
Implement at the CMS/template level. Use a shared `@id` for the author entity so all posts contribute to a single graph-linked Person node. This is the primary E-E-A-T signal Google uses for AI Overview source selection. Named author (even a consistent pseudonym with a stable `@id`) outperforms team bylines.

### P3 — Create a YouTube presence (minimum: 3 demo/explainer videos)
**Effort:** 1–2 weeks production | **Impact:** Very High (0.737 citation correlation)
The single highest-correlation brand signal for AI citations is zero on TrueCalling. Even short-form screen recordings of EMILY in action, uploaded under the `truecalling.ai` brand, build the off-site entity graph that ChatGPT and Perplexity use to corroborate brand trust.

### P4 — Fix llms.txt to include actual blog post URLs and use spec-compliant section markers
**Effort:** 30 minutes | **Impact:** Medium
Replace "Seven blog posts" prose with explicit `- URL: /en/blog/...` lines. Add `# Optional` header before the blog list per llms.txt hierarchy spec. This allows AI training pipelines to selectively index the blog content.

### P5 — Convert 50% of blog H2/H3 headings to question form
**Effort:** 2 hours editorial | **Impact:** Medium
Specifically target the comparison posts (vs LinkedIn Recruiter, vs HireSweet) and methodology posts. Rephrase declarative H2s to question H2s: "What are the limits of LinkedIn Recruiter?" instead of "The 4 major limits of LinkedIn Recruiter." Direct match to how users query AI assistants.

---

## Additional Observations

- **Stats inconsistency:** llms.txt cites "90% WhatsApp open rate" while blog posts cite "98% open rate." Align to a single figure with consistent attribution to remove conflicting signal.
- **LinkedIn authority:** 55 followers is too low to carry meaningful entity weight. Prioritize LinkedIn content publication (repurpose blog posts as native articles) to build follower base.
- **No Wikipedia:** For a brand founded 2024 this is expected, but a Wikidata entry (lower notability bar) can be created now and provides a `sameAs` anchor for structured data graph resolution.
- **`anthropic-ai` bot:** Currently allowed. This is the Anthropic model-training crawler. If the policy intent is search-only (not training), consider setting it to `Disallow: /` to match the CCBot decision, while keeping ClaudeBot allowed.

---

*GEO Round 3 — truecalling.ai — 2026-05-07*
