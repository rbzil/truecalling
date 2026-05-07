# GEO / AI Search Audit — TrueCalling

**URL:** https://truecalling-lyart.vercel.app/en
**Date:** 2026-05-06
**Site type:** B2B SaaS — AI Recruiting / Talent Sourcing
**Scope:** Homepage, Blog (10 articles sampled, 3 deep-analyzed), FAQ, Demo page

## GEO Readiness Score: 38 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 32/100 | 8.0 |
| Structural Readability | 20% | 52/100 | 10.4 |
| Multi-Modal Content | 15% | 20/100 | 3.0 |
| Authority & Brand Signals | 20% | 28/100 | 5.6 |
| Technical Accessibility | 20% | 55/100 | 11.0 |

## 1. AI Crawler Access Status

**robots.txt: HTTP 404** — no robots.txt file at all. Single most damaging technical finding.

| Crawler | Status |
|---|---|
| GPTBot (OpenAI) | Unspecified |
| OAI-SearchBot (ChatGPT Search) | Unspecified |
| ClaudeBot (Anthropic) | Unspecified |
| PerplexityBot | Unspecified |
| Google-Extended (Gemini/AIO training) | Unspecified |
| CCBot (Common Crawl) | Unspecified |

**Priority: Critical.** robots.txt explicitly allowing GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended must be created immediately.

## 2. llms.txt Status

**Result: Missing (404).** No `/llms.txt` file. Significant GEO gap for a B2B SaaS with multiple named AI entities (EMILY, TrueFit 360) that need structured discoverability.

No RSL 1.0 licensing declaration found.

## 3. Citability Analysis

### Homepage Citability — 22/100

H1 "The AI sourcing software that hires with precision" is a brand statement, not a direct answer to a user query. No section opens with a 40-60 word direct answer to an implied question. Workflow, pricing, performance claims (90 % WhatsApp open rate, 1.2B profiles, 48-hour engagement) are the strongest candidates — but appear without source attribution, suppressing AI citation confidence.

### Blog Article Citability — 42/100

**Positive signals:**
- Question-based H2 headings ("What is an AI copilot for recruiters?", "Should we worry that AI will replace recruiters?") match query patterns.
- Concrete case study passages in the WhatsApp GDPR article are within the 134-167 word optimal citation window and self-contained.
- "AI sourcing agent" article has a 156-word passage on EMILY's collaborative model that is citation-ready.
- Specific numeric claims (98% WhatsApp open rate, 45% reply rate, 22-day time-to-hire).

**Critical deficiencies:**
- **Zero author attribution** across all 10 blog posts. Single most damaging citability factor for content marketing sites.
- **All statistics unattributed.** Claims like "98 % WhatsApp open rate", "InMail 35 % → 18-22 %", "1.2B+ profiles" appear without primary-source links.
- **No last-updated dates.** Penalizes recency scoring in Google AIO and Perplexity.
- **No table of contents.** Reduces section-level deep links Perplexity cites.

### FAQ Citability — 18/100

6 well-formed questions, but JavaScript-rendered collapsible answers are invisible to AI crawlers without JS execution. No FAQPage schema markup compensates. Highest-density citability asset on the site, effectively invisible.

## 4. Structural Readability — 52/100

### Works
- Blog articles use H1 + sequential H2 with H3 sub-points — clean hierarchy maps to AI chunking.
- "Day with vs. day without" contrast format in AI copilot article is high-recall for AI summaries.
- Numbered lists ("The 5 tasks", "The 3 mistakes", "5 questions to ask") produce extractable enumerations.
- Article lengths (~1,200-1,800 words) appropriate.

### Broken
- FAQ answers rendered client-side. Hidden behind JS — not read by major AI crawlers.
- No table of contents with anchor links on any article.
- Homepage sections lack semantic section labeling.
- No "Key Takeaways" or "TL;DR" block at article tops. Perplexity and Claude look for summary blocks in first 100 words.

## 5. Multi-Modal Content — 20/100

Weakest scoring dimension.

- **No YouTube channel or embedded video.** YouTube presence has the strongest single correlation with AI citation rate (~0.737).
- No podcast embeds, video demos, visual content.
- No image alt text visible in crawled content.
- No infographics with embedded text data.
- LinkedIn presence exists (52 followers — insufficient brand authority signal).
- No Reddit presence (no r/recruiting or r/humanresources threads).
- No Wikipedia entity page for TrueCalling, EMILY, or TrueFit 360.

## 6. Authority & Brand Signals — 28/100

### Wikipedia
No entry for TrueCalling. Material GEO gap. Wikipedia is one of highest-weighted training sources for all major LLMs. Without an entity page, TrueCalling, EMILY, TrueFit 360 are essentially unknown to underlying models.

### LinkedIn
52 followers (founded 2024). Real but negligible at this size.

### Reddit
No detected presence. Recruiting subreddits (r/recruiting, r/humanresources, r/talentacquisition) are high-correlation AI citation sources.

### YouTube
No channel. Highest-correlation missing signal (0.737 with AI citation rate).

### Named Entity Recognition
- "TrueCalling" (one word) usable.
- "EMILY" risks confusion with the common name — needs ™ symbol consistently AND a definitional anchor sentence on every page where it appears: "EMILY is TrueCalling's AI recruiting copilot that manages candidate outreach via WhatsApp, email, and phone."
- "TrueFit 360" mentioned only briefly. No dedicated page, no definition block, no independent content — uncitable as a named methodology.

## 7. Technical Accessibility — 55/100

### Server-Side Rendering
Homepage and blog articles return full text via WebFetch — SSR or static generation. Positive for AI crawlability.
However: FAQ uses CSR collapsible components → answers inaccessible.

### sitemap.xml
Well-formed, 73 URLs across 8 language versions, proper hreflang, lastmod, priority. Genuine positive signal.

### robots.txt
Missing entirely (404).

### llms.txt
Missing entirely (404).

### Schema Markup
Only `SoftwareApplication` + `BlogPosting` + `FAQPage` (client-rendered). Missing `Organization`, `BreadcrumbList`, no schema on FAQ. Critical gap.

### Canonical & Hreflang
Hreflang correctly implemented in sitemap. Canonical broken on sub-pages (see [`02-technical.md`](./02-technical.md)).

### Meta Description
Title tag well-formed. Meta description not extractable from fetch — may be missing or empty.

## 8. Per-Platform Scores

| Platform | Score | Bottleneck |
|---|---|---|
| Google AI Overviews | 28/100 | No schema, no E-E-A-T, no sourced statistics |
| ChatGPT Search | 35/100 | No GPTBot Allow, no author attribution, no Wikipedia entity |
| Perplexity | 42/100 | Blog-friendly but no anchor ToC, no sourced citations |
| Bing Copilot | 33/100 | Missing Org + Article schema, no authority signals |

Perplexity is most achievable short-term (crawler favors structured long-form, blog already provides). Google AIO requires most foundational work.

## 9. Top 5 Highest-Impact Changes

### Priority 1 — Create robots.txt with Explicit AI Crawler Permissions

**Impact:** High | **Effort:** 30 min | **Affects:** All 4 platforms

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: CCBot
Disallow: /

Sitemap: https://truecalling.ai/sitemap.xml
```

CCBot disallow optional — limits training data scraping by Common Crawl while opening doors to product-search-integrated crawlers.

### Priority 2 — Create `/llms.txt` with Entity Definitions and Key Passages

**Impact:** High | **Effort:** 2-3 h | **Affects:** All LLM training pipelines

Especially critical for disambiguating EMILY (product vs. name) and establishing TrueFit 360 as a named methodology.

Include:
- 150-200 word entity description of TrueCalling as organization
- 100-150 word definition of EMILY™ as named AI product
- 100-word definition of TrueFit 360 as candidate assessment methodology
- Links to 5 most citation-ready blog articles
- Canonical claims (1.2B profiles, 90 % WhatsApp open rate) with internal sources

### Priority 3 — Add Named Author Bylines and Bios to All Blog Articles

**Impact:** High | **Effort:** 1-2 days | **Affects:** Google AIO (E-E-A-T), ChatGPT Search, Perplexity

Single factor most correlated with citation suppression for content marketing sites.

- Assign named author (real person with LinkedIn) per article
- Add 3-5 sentence author bio block at article bottom with credentials
- Add `author` field in Article JSON-LD schema
- Link author name to LinkedIn profile

Editorial attribution to a Head of Talent, CTO, or external recruiter consultant is standard and sufficient for E-E-A-T.

### Priority 4 — Add JSON-LD Schema Markup Across All Page Types

**Impact:** High | **Effort:** 1-2 days dev | **Affects:** Google AIO (primary), Bing Copilot

Site has no Organization schema. Implement minimum:
- **All pages:** Organization (name, url, logo, sameAs, foundingDate)
- **Blog articles:** Article (headline, author, datePublished, dateModified, description, publisher)
- **FAQ:** FAQPage with all 6 questions and answers — makes content available to AI engines regardless of CSR rendering, and qualifies for Google AIO direct answer boxes
- **Homepage:** SoftwareApplication for TrueCalling product, Product schema for TrueFit 360

See [`03-schema.md`](./03-schema.md) for full JSON-LD code.

### Priority 5 — Source All Statistics and Add External Citations to Blog Articles

**Impact:** Medium-High | **Effort:** 3-5 h per article | **Affects:** Perplexity (primary), ChatGPT Search, Google AIO

For each statistic: link to a primary source (Meta Business for WhatsApp, LinkedIn earnings calls for InMail decline, SHRM/EEOC for time-to-hire) OR explicitly label internal data as "TrueCalling internal data, [year], n=[sample size]." Latter is acceptable and builds proprietary data authority — must be labeled.

## 10. Additional Recommendations (Lower Priority)

- **YouTube channel.** Even 5 videos covering "AI sourcing in 2026", "How EMILY works", live demo walkthrough — meaningful improvement (~0.737 correlation).
- **Reddit participation.** Transparent helpful presence in r/recruiting, r/talentacquisition. 6-12 month effort, compounds.
- **Dedicated EMILY product page** at `/en/emily` or `/en/features/emily`.
- **Dedicated TrueFit 360 page.**
- **Add "Last Updated" dates** to all blog articles.
- **Add "Key Takeaways" box** in first 100 words of each blog article.
- **Pursue Wikipedia entity page** (3-6 month effort, requires notability evidence: TechCrunch / The Org / EU Startups mentions).

## Summary by Platform

- **Google AI Overviews:** Schema (Article, FAQPage, Organization), named authors with E-E-A-T, sourced statistics. Currently near-invisible.
- **ChatGPT Search:** robots.txt GPTBot Allow, llms.txt entity definitions, author attribution, Wikipedia. EMILY entity disambiguation = key bottleneck.
- **Perplexity:** Closest to citation-ready. Priority fixes: ToC anchor links, Key Takeaways blocks, sourced statistics. Movable from 42 to 65+ within 30 days with structural blog changes alone.
- **Bing Copilot:** Organization + Article schema, robots.txt, authority signals. Bing weighs external mentions (Reddit, YouTube, news) heavily — medium-term.

The site is in the bottom quartile of GEO readiness for a B2B SaaS, primarily because technical infrastructure (robots.txt, llms.txt, schema) is entirely absent and the blog's strong structural foundation is undermined by missing authorship and unsourced stats. The good news: content strategy is pointed in the right direction. Implementing Priority 1-4 would likely move overall GEO score from 38 to ~61-65 within 4-6 weeks.
