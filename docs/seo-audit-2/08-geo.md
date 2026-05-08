# GEO / AI-Search Audit — TrueCalling.ai
**Date:** 2026-05-07  
**Auditor:** Claude Sonnet 4.6 (automated)  
**Scope:** https://truecalling.ai — AI crawler access, llms.txt, citability, schema, brand signals, per-platform readiness

---

## 1. GEO Health Score — Summary

| Dimension | Weight | Raw Score | Weighted |
|---|---|---|---|
| Citability | 25% | 52 / 100 | 13.0 |
| Structural Readability | 20% | 68 / 100 | 13.6 |
| Multi-Modal Content | 15% | 35 / 100 | 5.3 |
| Authority & Brand Signals | 20% | 45 / 100 | 9.0 |
| Technical Accessibility | 20% | 72 / 100 | 14.4 |

**Overall GEO Readiness Score: 55 / 100**

---

## 2. AI Crawler Access Status

Source: `https://truecalling.ai/robots.txt` (verified 2026-05-07)

| Crawler | Directive | Status |
|---|---|---|
| GPTBot | `Allow: /` | PASS |
| OAI-SearchBot | `Allow: /` | PASS |
| ChatGPT-User | `Allow: /` | PASS |
| ClaudeBot | `Allow: /` | PASS |
| Claude-Web | `Allow: /` | PASS |
| anthropic-ai | `Allow: /` | PASS — note: training crawler, allowed (see gap #4) |
| PerplexityBot | `Allow: /` | PASS |
| Perplexity-User | `Allow: /` | PASS |
| Google-Extended | `Allow: /` | PASS |
| Applebot-Extended | `Allow: /` | PASS |
| Bingbot | `Allow: /` | PASS |
| CCBot | `Disallow: /` | PASS — correctly blocked |

**Verdict: FULL PASS.** All 7 required AI search bots are explicitly allowed. CCBot (Common Crawl, used for LLM training) is explicitly blocked. `Host:` and `Sitemap:` directives are present and correct.

**Remaining gap:** `anthropic-ai` is the Anthropic training crawler (distinct from `ClaudeBot` which is the search/retrieval bot). Allowing it is a policy choice, not an error — but the team should confirm intent. If training opt-out is desired, add `Disallow: /` under `User-Agent: anthropic-ai`.

---

## 3. llms.txt Status

Source: `https://truecalling.ai/llms.txt` (verified 2026-05-07)

**Status: PRESENT**

### What is correctly implemented

- Product definition is concise and machine-parseable
- EMILY named entity defined with functional description
- TrueFit 360 named entity defined with methodology description
- Key performance claims present (1.2B profiles, 90% WhatsApp open rate, 48h engagement, 40% TTH reduction)
- Data provenance label: "TrueCalling internal data, 2026" — PASS
- Multichannel stack (WhatsApp + email + phone) enumerated
- Organization context (founded 2024, France, B2B SaaS targets) present
- Resource links section exists (sourcing guides, GDPR, multichannel)

### Gaps in llms.txt

| Gap | Impact | Priority |
|---|---|---|
| No `# Version` or `# Updated` header — AI agents cannot detect staleness | Medium | P2 |
| No canonical URL for EMILY (`https://truecalling.ai/en/...`) — reduces entity resolution | High | P1 |
| No canonical URL for TrueFit 360 | High | P1 |
| No pricing anchors (Starter / Growth / Scale tiers) for shopping-intent queries | Medium | P2 |
| No explicit `# License` field (RSL 1.0 or CC-BY) | Low | P3 |
| Resource links not verified as absolute URLs in raw file | Medium | P2 |

**llms.txt Quality Score: 68 / 100**

---

## 4. Citability Analysis

### 4a. Passage Length

Blog articles reviewed: `ai-sourcing-guide-2026`, `ai-copilot-for-recruiters-daily`, `truecalling-vs-linkedin-recruiter`

Observed passage structure: paragraphs are typically 80–200 words. The target window for AI citation is **134–167 words**. Most intro paragraphs undershoot (60–90 words); most body paragraphs overshoot (180–240 words). Net effect: AI extractors frequently either get incomplete context or must truncate.

**Passage length score: 45 / 100** — requires editorial pass to hit the 134–167 word sweet spot.

### 4b. Direct Answers in First 40–60 Words

- `ai-sourcing-guide-2026`: first 60 words are definitional framing, not a direct answer — FAIL
- `ai-copilot-for-recruiters-daily`: opens with a functional definition within the first 40 words — PASS
- `truecalling-vs-linkedin-recruiter`: opens with problem framing, no direct answer — FAIL

**2 of 3 sampled articles fail the 40–60 word direct-answer rule.**

### 4c. Q&A / FAQ Blocks

- Homepage: no FAQ schema block detected
- Blog articles: no FAQ sections found in sampled articles
- `/en/faq` page: FAQ questions present but **no FAQPage JSON-LD schema** detected

All FAQ content is invisible to AI extractors that rely on structured markup. This is the single highest-citability gap on the site.

**FAQ schema score: 0 / 100 — critical gap**

### 4d. Named Entity Presence (EMILY / TrueFit 360)

| Entity | Homepage | Blog articles | llms.txt | Schema |
|---|---|---|---|---|
| EMILY | Yes (EMILY™) | Yes | Yes | No |
| TrueFit 360 | Yes (pricing) | Yes (matching refs) | Yes | No |
| TrueCalling (org) | Yes | Yes | Yes | No structured Organization schema confirmed |

Named entities appear in prose but are not anchored to structured data (`@type: Product`, `@type: SoftwareApplication`). AI engines that resolve entities via schema will not connect mentions to a canonical definition.

### 4e. Statistics and Source Attribution

All performance statistics (90% WhatsApp open rate, 40% TTH reduction, 1.2B profiles, 48h engagement) appear in prose and llms.txt with the label "TrueCalling internal data, 2026". However:

- No inline citation markup (`<cite>`, `data-source` attribute, or footnote pattern)
- No methodology page linked from statistics
- Statistics in blog articles carry **no source attribution** at all (the llms.txt attribution does not propagate to individual pages)

**Statistics citability score: 40 / 100**

---

## 5. Structural Readability

### 5a. Heading Architecture

Blog headings follow a clear interrogative and action pattern (e.g. "What is an AI copilot for recruiters?", "Why LinkedIn Recruiter is no longer enough"). This is strong — question-based H2/H3 headings directly match AI snippet extraction patterns.

**Heading quality: 75 / 100** — Good use of question-form headings. Gap: no headings explicitly match high-volume query patterns (e.g. "What is TrueFit 360?", "How does EMILY work?").

### 5b. Self-Contained Answer Blocks

No dedicated callout boxes, blockquotes formatted as answers, or "TL;DR" summary blocks found. Every answer requires reading surrounding context. This reduces extractability for AI that generates zero-click answers.

### 5c. Internal Linking to Entity Pages

EMILY and TrueFit 360 are mentioned in prose but do not link to dedicated landing pages. There are no `/en/emily` or `/en/truefit-360` pages in the sitemap. AI agents that follow links to verify entity claims hit dead ends.

---

## 6. Authority & Brand Signals

### 6a. Authorship

**Critical gap.** All 10 blog articles use the collective byline "TrueCalling Editorial · Talent Intelligence Team." There are no named individual authors.

| Signal | Status | Impact |
|---|---|---|
| Named Person author (visible byline) | ABSENT | High — E-E-A-T and AI citation confidence |
| AuthorBio component with photo | ABSENT | High |
| Person schema (`@type: Person`) | ABSENT | Critical |
| `author.url` linking to author profile | ABSENT | Medium |
| `sameAs` linking to LinkedIn/Twitter | ABSENT | Medium |

The "verified fixes" checklist item — "Blog articles now have named author Person schema + visible bylines + AuthorBio" — **is NOT confirmed**. The editorial team label is present but it does not satisfy Person schema requirements and does not constitute a named individual author.

### 6b. BlogPosting / Article Schema

Across all blog pages sampled, **no JSON-LD structured data was detected**. This means:

- `@type: BlogPosting` — ABSENT
- `datePublished` / `dateModified` in schema — ABSENT (dates exist in HTML but are not machine-readable via schema)
- `author` with `@type: Person` — ABSENT
- `@id` graph linking — ABSENT (cannot be evaluated as no schema exists)
- `publisher` with logo — ABSENT
- `headline`, `description`, `image` in schema — ABSENT

The "verified fixes" checklist item — "BlogPosting schema is graph-linked via @id" — **is NOT confirmed.** No BlogPosting schema was found on any sampled page.

### 6c. FAQ Page Schema

`/en/faq` contains FAQ content but no `@type: FAQPage` JSON-LD. Google AIO, ChatGPT Search, and Perplexity all use FAQPage schema as a direct citation source.

### 6d. Off-Site Brand Mentions

| Platform | Status | Notes |
|---|---|---|
| Wikipedia | Not verified — no entity page found | Correlation with AI citations: High |
| Reddit | Not verified | Correlation: High |
| YouTube | Not verified | Strongest correlation (~0.737) with AI citations |
| LinkedIn | Company page expected (France, 2024) | Verify `sameAs` in Organization schema |

Brand was founded 2024 — Wikipedia entry is unlikely at this stage. YouTube presence (demo videos, how-to content) would be the highest-ROI off-site investment for AI citation frequency.

---

## 7. Technical Accessibility for AI Crawlers

### 7a. Rendering Method

Page uses a CSR-capable framework (interactive demo component at `app.truecalling.ai` embedded, form elements). The main marketing site appears to be SSR or hybrid-rendered — content is visible to the WebFetch tool (a proxy for AI crawler behavior), confirming core content is accessible without JavaScript execution.

**Assessment: PASS for content accessibility.** AI crawlers can read headings, body text, and navigation without JS.

### 7b. Sitemap

Sitemap present at `https://truecalling.ai/sitemap.xml`. 168 URLs indexed across 8 languages. Blog articles present in sitemap — PASS.

Gap: sitemap does not appear to include `lastmod` dates (not confirmed from XML response). Without `lastmod`, crawlers cannot prioritize re-crawl of updated content.

### 7c. Hreflang / Multilingual

8-language implementation (FR, EN, HE, PT-BR, ES, DE, IT, NL). This is a strong positive signal for international AI search (Perplexity in particular indexes multilingual content aggressively).

Gap: hreflang correctness not fully verified — confirm that alternate tags are present in `<head>` and not only in the sitemap.

### 7d. Core Web Vitals / Page Speed

Not measured in this audit. Slow TTFB can prevent AI crawlers from fully rendering pages within their timeout windows.

---

## 8. Per-Platform Readiness Scores

| Platform | Score | Key Bottleneck |
|---|---|---|
| Google AI Overviews | 48 / 100 | No BlogPosting schema, no FAQPage schema, no Person author schema |
| ChatGPT Search | 55 / 100 | llms.txt present helps; no FAQ blocks, no named author, stats unsourced |
| Perplexity | 62 / 100 | SSR content accessible, multilingual, llms.txt present; gains blocked by missing entity schemas |
| Bing Copilot | 50 / 100 | robots.txt allows Bingbot; no schema means no rich result eligibility |
| Apple Intelligence | 52 / 100 | Applebot-Extended allowed; content accessible; schema gaps apply equally |

---

## 9. Verified Fixes Checklist

| Item | Expected | Verified | Notes |
|---|---|---|---|
| robots.txt: AI bots explicitly Allowed | Yes | YES | All 7 target bots + ChatGPT-User, Claude-Web confirmed |
| robots.txt: CCBot Disallowed | Yes | YES | Confirmed |
| llms.txt: exists | Yes | YES | Present and substantive |
| llms.txt: EMILY entity defined | Yes | YES | Defined with functional description |
| llms.txt: TrueFit 360 entity defined | Yes | YES | Methodology described |
| llms.txt: claims labeled "TrueCalling internal data, 2026" | Yes | YES | Label present |
| Blog: named author Person schema | Yes | NO | Only team editorial label; no Person schema |
| Blog: visible named bylines | Yes | NO | "TrueCalling Editorial" is not a named person |
| Blog: AuthorBio component | Yes | NO | Bio text exists but for collective team, not individual |
| BlogPosting schema on articles | Yes | NO | Zero JSON-LD detected on all sampled pages |
| BlogPosting schema graph-linked via @id | Yes | NO | No schema = no @id |

**4 of 11 fixes confirmed. 7 remain unimplemented or partially implemented.**

---

## 10. Top 5 Highest-Impact Recommendations

### P1-A — Add BlogPosting JSON-LD to every article (Effort: Medium, 1–2 days)

Implement on all 10 EN blog posts (FR equivalents via hreflang). Minimum viable schema block per article:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": "https://truecalling.ai/en/blog/[slug]#article",
  "headline": "...",
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD",
  "author": {
    "@type": "Person",
    "@id": "https://truecalling.ai/en/team/[author-slug]#person",
    "name": "[Author First Last]",
    "url": "https://truecalling.ai/en/team/[author-slug]",
    "sameAs": "https://www.linkedin.com/in/[handle]"
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://truecalling.ai/#organization",
    "name": "TrueCalling",
    "logo": { "@type": "ImageObject", "url": "https://truecalling.ai/logo.png" }
  },
  "mainEntityOfPage": "https://truecalling.ai/en/blog/[slug]"
}
```

**Impact:** Unlocks Google AIO rich snippets, ChatGPT Search article indexing, Bing Copilot article cards. Directly addresses the largest single schema gap.

### P1-B — Assign named individual authors to blog posts (Effort: Low, 1 day)

Replace the collective "TrueCalling Editorial" byline with at least 1–2 real named individuals (e.g., founding team members, product leads). Create an `/en/team/[author]` page per person. Link from articles. Add `@type: Person` schema.

**Impact:** E-E-A-T signal for Google AIO. ChatGPT Search and Perplexity weight named-author content higher for citation. Addresses the single most prominent authority gap.

### P1-C — Add FAQPage JSON-LD to `/en/faq` and targeted blog articles (Effort: Low, 0.5 days)

The FAQ page has 6 questions already written. Adding FAQPage schema is a single JSON-LD block. Additionally, add 2–3 FAQ items at the bottom of the top 3 blog articles (matching intent: "What is TrueFit 360?", "How much does TrueCalling cost?", "How does EMILY work?").

**Impact:** Google AIO pulls FAQ blocks directly into AI Overviews. Perplexity surfaces these as standalone answer cards. Highest citability ROI per hour of effort.

### P2-A — Fix llms.txt: add canonical URLs for EMILY and TrueFit 360 (Effort: Low, 1 hour)

Add entity canonical fields:
```
- EMILY canonical: https://truecalling.ai/en/emily
- TrueFit 360 canonical: https://truecalling.ai/en/truefit-360
```
Also add `# Updated: 2026-05-07` and `# Version: 1.1` headers.

**Impact:** AI agents that resolve named entities via llms.txt will find a canonical URL to verify claims. Increases citation reliability across ChatGPT and Perplexity.

### P2-B — Restructure blog intro paragraphs for 40–60 word direct answers (Effort: Medium, 2–3 days)

For each article, rewrite the first paragraph so it answers the article's primary question within 40–60 words — before any framing, context, or statistics. Example pattern:

> "TrueFit 360 is TrueCalling's candidate-scoring methodology that evaluates hard skills, contextual experience, soft skills, and engagement signals to produce a single match score between 0 and 100."

**Impact:** AI engines extract the first 1–2 sentences as the answer snippet. This change alone can double the number of articles that get cited in AI Overviews and Perplexity answer boxes.

---

## 11. Quick-Win Backlog (P3)

| Item | Effort | Gain |
|---|---|---|
| Add `dateModified` to sitemap `<lastmod>` fields | 1 hour | Crawler re-crawl prioritization |
| Add `Organization` JSON-LD to homepage with `sameAs` LinkedIn/Crunchbase | 2 hours | Brand entity resolution |
| Create dedicated `/en/emily` and `/en/truefit-360` product pages | 1–2 days | Entity anchor pages, internal link targets |
| Launch YouTube channel with demo/how-to content | Ongoing | Strongest off-site AI citation signal (r=0.737) |
| Add `data-source` attributes or inline `<cite>` to statistic claims | 1 day | Sourced statistics rank higher in AI answer confidence |
| Verify hreflang `<link>` tags in `<head>` (not only sitemap) | 2 hours | Multilingual AI indexing accuracy |

---

*Audit methodology: live HTTP fetch of robots.txt, llms.txt, homepage, /blog index, 3 article pages, /en/faq, sitemap.xml. Schema detection via JSON-LD script tag scan. No DataForSEO MCP tools used (not available in this environment). Scores are based on GEO rubric: Citability 25%, Structural Readability 20%, Multi-Modal 15%, Authority & Brand Signals 20%, Technical Accessibility 20%.*
