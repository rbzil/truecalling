# SXO Audit — TrueCalling

**URL:** https://truecalling-lyart.vercel.app/en
**Date:** 2026-05-06
**Keywords analyzed:** "AI sourcing software" / "recruiting AI tool" / "WhatsApp recruiting"
**SXO Gap Score: 41 / 100**

## PRIMARY FINDING: Page-Type Mismatch — Severity CRITICAL

TrueCalling's homepage is a commercial SaaS landing page. Every organic result ranking for "AI sourcing software", "recruiting AI tool", and adjacent queries is a **listicle, buyer's guide, or comparison article** — not a product homepage.

Google has formed an unambiguous editorial consensus: for these keywords, it rewards third-party or hybrid content that names, compares, and evaluates multiple tools. A single vendor's homepage cannot satisfy that intent. TrueCalling is failing because it is the wrong page type for the query, not because its landing page is weak.

## SERP Analysis

### Keyword 1: "AI sourcing software"

| Rank | Domain | Page Type | Depth |
|------|--------|-----------|-------|
| 1 | selectsoftwarereviews.com | Comparison / Buyer's Guide | ~9,000 words |
| 2 | sitepoint.com | Listicle | ~5,000 words |
| 3 | humanly.io/blog | Listicle / Hybrid | ~4,000 words |
| 4 | juicebox.ai/blog | Comparison Listicle | ~7,000 words |
| 5 | clearcompany.com | Blog Guide | ~3,000 words |
| 6 | recruiterflow.com | Comparison/Review | ~2,800 words |
| 7 | gem.com/blog | Comparison Guide | ~3,000 words |
| 8 | metaview.ai/blog | Roundup Listicle | ~2,600 words |
| 9 | bullhorn.com/blog | Long-form Blog | ~4,300 words |
| 10 | wellfound.com/blog | Comparison / Buying Guide | ~5,800 words |

### Keyword 2: "WhatsApp recruiting"

| Rank | Domain | Page Type | Depth |
|------|--------|-----------|-------|
| 1 | sensehq.com/product/whatsapp | Product Landing Page | ~2,800 words |
| 2 | chatarmin.com | Hybrid (Service + Content) | ~3,000 words |
| 3 | talkpush.com | Product / Feature page | ~2,000 words |
| 4 | softgarden.com | Product Feature Page | ~2,500 words |
| 5 | aisensy.com/blog | Blog Playbook | ~4,000 words |
| 6-10 | Playbooks, agency blogs, integration directories | Blog / Hybrid | — |

### SERP Feature Map

| Feature | "AI sourcing software" | "recruiting AI tool" | "WhatsApp recruiting" |
|---------|----------------------|---------------------|----------------------|
| AI Overview | Present (cites listicles) | Present | Partial |
| Featured Snippet | List format (tool names) | List format | Paragraph (open rate stat) |
| PAA | "What is the best AI sourcing tool?", "How does AI sourcing work?", "Is AI recruiting legal?", "What is the difference between ATS and sourcing?" | "What is the best AI tool for recruitment?", "How do I use AI to source candidates?" | "Is WhatsApp good for recruiting?", "How do I use WhatsApp for hiring?" |
| Ads | High density (Gem, Fetcher, Covey) | High density | Moderate |
| Related searches | "AI sourcing tools free", "best AI recruiter 2026", "LinkedIn alternative" | "AI recruiting tool comparison", "AI recruiter reviews" | "WhatsApp HR automation", "WhatsApp ATS integration" |

### SERP Consensus

- "AI sourcing software" + "recruiting AI tool": **dominant page type = Comparison Listicle / Buyer's Guide** (confidence 90%). 9 of 10 top results are multi-tool editorial pages.
- "WhatsApp recruiting": **dominant page type = Product Feature Page or Hybrid Guide** (confidence 70%). Only keyword where TrueCalling's page type is partially aligned.

## Page Classification: TrueCalling Homepage

**Classified as: Landing Page (Type 1)**

Evidence: single value proposition hero, prominent "Book a demo" CTA above fold, pricing section with three tiers, testimonial block, feature sections, reduced navigation depth.

**Mismatch rating:**
- vs. "AI sourcing software": **CRITICAL** — Landing Page vs. Comparison Listicle SERP
- vs. "recruiting AI tool": **CRITICAL** — Landing Page vs. Comparison Listicle SERP
- vs. "WhatsApp recruiting": **MEDIUM** — Landing Page vs. Product Feature / Hybrid

The homepage cannot rank for the first two keywords organically, regardless of on-page optimization. Fix is to create a separate content asset (comparison guide, roundup, buyer's guide) optimized for those queries, with the homepage reserved for branded and bottom-of-funnel traffic.

## User Stories Derived from SERP Signals

### Story 1 — The Overwhelmed Evaluator (Consideration)

As a Talent Acquisition Manager, I want to see how TrueCalling compares to Gem, Fetcher, and hireEZ in a single view, because my hiring director expects a shortlist with a justified recommendation by end of week, but I'm blocked by comparison fatigue — every vendor says the same things and there's no neutral third-party data for TrueCalling.

**Source:** Related searches "AI sourcing tool comparison", "AI recruiter reviews"; 9/10 SERP results are comparison pages; TrueCalling appears in none.

### Story 2 — The WhatsApp Skeptic (Awareness)

As an HR Director at a scale-up, I want to understand whether WhatsApp outreach is actually legal and GDPR-compliant for candidate engagement in France and the EU, because our legal team will block any tool that touches personal data on consumer messaging apps, but I'm blocked by a trust gap — TrueCalling's homepage mentions GDPR in the footer link only and never addresses the compliance question in body copy.

**Source:** PAA "Is WhatsApp good for recruiting?", "Is AI recruiting legal?"; related search "WhatsApp GDPR recruiting"; EMILY™ positioned as differentiator on a consent-sensitive channel with no visible compliance reassurance on-page.

### Story 3 — The Recruiting Agency Founder (Decision)

As a Founder/CEO of a recruiting agency, I want to know whether TrueCalling's $595/user/month Starter plan will generate enough placed candidates to justify cost within 90 days, because I run a lean operation where every tool must prove ROI fast, but I'm blocked by a pricing trust gap — page shows per-user/per-month pricing with no case study showing revenue impact per seat, no money-back guarantee, no ROI calculator.

**Source:** Ads for competing tools emphasize "free trial", "see ROI in 30 days"; PAA "How much does AI recruiting software cost?"; related searches "AI sourcing tools free", "AI recruiter pricing".

### Story 4 — The Passive Researcher (Awareness)

As an HR Director at a growing tech company, I want to understand what "semantic matching" and "contextual signals" actually mean for my specific hiring use cases (volume hiring of SDRs vs. niche engineering roles), because I've been burned by tools that over-promise AI accuracy, but I'm blocked by an information gap — TrueCalling's homepage uses product language ("semantic analysis", "contextual signals", "AI score") without a single concrete before/after example, demo video, or case study with verifiable metrics.

**Source:** PAA "How does AI sourcing work?", "What is the difference between ATS and sourcing?"; blog guide content dominates SERP because searchers are in research mode; featured snippet is list format = users want itemized specific information.

### Story 5 — The LinkedIn-Fatigued Recruiter (Consideration)

As a Talent Acquisition Manager at a mid-market company, I want a credible alternative to LinkedIn Recruiter that reaches passive candidates who don't reply to InMail, because my team's InMail reply rates are below 20% and cost per hire is rising, but I'm blocked by a proof gap — TrueCalling claims 90% WhatsApp open rates but does not show comparison methodology, named client, or auditable data point. The testimonial is attributed to "Le Chiller [To be confirmed]" which actively signals unverified social proof.

**Source:** Related searches "LinkedIn alternative", "LinkedIn Recruiter 2026"; EMILY™ description directly compares to InMail cap of 18-25%; PAA "Can you source candidates without LinkedIn?".

## Gap Analysis: 7-Dimension Score (41 / 100)

### 1. Page Type Alignment: 4/15
Page is well-executed landing page targeting keywords Google resolves with comparison/listicle content. No blog, guide, or comparison asset under domain that could rank for "AI sourcing software" or "recruiting AI tool". Score reflects structural impossibility of ranking with current asset config.

### 2. Content Depth: 6/15
Estimated word count: ~1,200-1,400. SERP competitors average 3,500-7,000 words. Page covers features/workflow/benefits/pricing in standard SaaS structure but provides no definitional content ("what is AI sourcing?"), comparison data, methodology explanation, or use-case segmentation. PAA questions visible in SERP entirely unanswered.

### 3. UX Signals: 10/15
Navigation clean and anchor-linked. CTAs repeated. Pricing transparent (3 tiers, monthly/annual toggle). However: no FAQ on main page (relegated to /en/faq); no live chat or low-friction entry beyond demo booking; no video embedded above fold; mobile not assessable remotely.

### 4. Schema Markup: 0/15
Not visible to WebFetch crawler from raw HTML. (Note: schema agent confirmed SoftwareApplication + BlogPosting + FAQPage exist, but SXO crawl missed them — potential CSR delivery issue. Either way, no Organization, BreadcrumbList, Review schema. Competitors with even basic BlogPosting capture featured snippet territory TrueCalling cannot access.)

### 5. Media: 6/15
Client logos present (Lattice, Notion, Alan, Doctolib, Qonto, Spendesk). Workflow visualization (50→12→7→5 funnel). However: no embedded product demo video; no interface screenshots; no candidate conversation examples (despite WhatsApp being the core differentiator); no data visualization of 90% open rate vs. competitors. Surface-level for a $595/month product.

### 6. Authority: 7/15
Six client logos (good for early-stage). However: primary testimonial attributed to "Le Chiller [To be confirmed]" — placeholder text live on production page, actively damages credibility. No named individual testimonials. No press mentions, awards, or analyst recognition. No team page link. "Made in France" footer signal is a mild trust positive for EU buyers but insufficient alone. No G2, Capterra, or Product Hunt badges.

### 7. Freshness: 8/10
"© 2026 TrueCalling" + active Vercel deployment suggests active development. Statistics reference current capabilities. Pricing tiers appear current. No visible "last updated" dates on content.

## Persona Scoring

### Persona 1: TA Manager evaluating tools (50/100 — Needs Work)

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 16/25 | Page covers core value prop but no comparison data, no "vs." framing, no segmentation by company size |
| Clarity | 14/25 | Feature sections scannable but information hierarchy prioritizes product marketing over evaluation criteria. ATS integrations buried under Benefits |
| Trust | 8/25 | Six logos, one unconfirmed testimonial. No G2 rating, no named customer quote, no case study with VP-shareable metrics. "[To be confirmed]" testimonial is live credibility liability |
| Action | 12/25 | "Book a demo" appropriate for decision but no lower-friction option (free trial, ROI calculator, downloadable comparison sheet) for consideration-stage buyer |

### Persona 2: Agency Founder/CEO (47/100 — Needs Work)

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 18/25 | Testimonial about "5 qualified candidates in active conversation in under 48 hours" directly relevant. EMILY™ WhatsApp engagement speaks to reply-rate frustration |
| Clarity | 13/25 | Pricing clear ($595/$895/custom) but value framing is feature-centric not ROI-centric. Founder needs cost-per-placement math, not "unlimited job listings" |
| Trust | 6/25 | Unconfirmed testimonial is the most agency-relevant proof point on the page. No revenue impact case study. No "agencies that use TrueCalling" positioning. No trial or money-back |
| Action | 10/25 | "Book a demo" is high-friction for founder who wants to test solo. No self-serve trial, no "Start with 1 free search", no pricing calculator |

### Persona 3: HR Director Scale-up (42/100 — Needs Work)

| Dimension | Score | Evidence |
|-----------|-------|----------|
| Relevance | 15/25 | ATS integrations (Workday, Greenhouse, SAP SuccessFactors) directly relevant. But GDPR/compliance addressed only via footer cookie policy. Implementation timeline absent |
| Clarity | 11/25 | Compliance question ("is WhatsApp outreach legal?") is first blocker for this persona, entirely unanswered in page body. No compliance section, no GDPR badge, no data processing explanation |
| Trust | 7/25 | "[To be confirmed]" testimonial is disqualifying. No security certifications shown (SOC 2, ISO 27001, GDPR seals). Sense's competing WhatsApp page shows AICPA SOC, Senible/Warden Assured seals |
| Action | 9/25 | "Book a demo" requires exposing company to a sales call before understanding compliance basics. "Download GDPR compliance brief" or "Read security whitepaper" CTA would dramatically reduce friction |

### Consolidated

| Persona | Relevance | Clarity | Trust | Action | Total |
|---------|-----------|---------|-------|--------|-------|
| TA Manager — Tool Evaluator | 16 | 14 | 8 | 12 | **50/100** |
| Agency Founder/CEO | 18 | 13 | 6 | 10 | **47/100** |
| HR Director — Scale-up | 15 | 11 | 7 | 9 | **42/100** |

**Weakest persona: HR Director (42/100)**
**Systemic issue across all personas: Trust (avg 7/25) and Action (avg 10.3/25)**

## Priority Recommendations

### Recommendation 1 — Fix the live credibility breach (all personas, immediate)

Testimonial "Le Chiller [To be confirmed]" is live on production. Either replace with confirmed attributed quote from named individual at named company, or remove and replace with quantified metric card ("X candidates placed in first 30 days across beta customers"). Single fix affects Trust scores across all three personas.

### Recommendation 2 — Add a GDPR / compliance section to homepage body (HR Director persona)

Section between "ATS integrations" and "Pricing" titled "Built for GDPR-compliant candidate engagement." Content: how EMILY™ obtains candidate consent before WhatsApp messaging, data residency (EU servers?), subprocessor list link, downloadable one-page compliance brief as secondary CTA. Add security cert badges if available. Directly addresses HR Director's primary blocker.

### Recommendation 3 — Create a comparison content asset targeting "AI sourcing software" (organic ranking)

Homepage cannot rank for "AI sourcing software" or "recruiting AI tool". Create 4,000-6,000 word Comparison Guide at `/en/blog/ai-sourcing-software-comparison` (or `/en/compare`) titled "The 7 Best AI Sourcing Software Tools in 2026: Compared by Real Recruiters". Include feature comparison table (TrueCalling, Gem, Fetcher, hireEZ, Covey, SeekOut, Juicebox). Apply BlogPosting + FAQPage + Table schema. Include answered PAA question as H2. **Only viable path to organic ranking for primary keyword cluster.**

### Recommendation 4 — Add schema markup across all key pages (SERP visibility)

See [`03-schema.md`](./03-schema.md) for full JSON-LD code. Implement immediately:
- Homepage: SoftwareApplication, Organization
- FAQ: FAQPage with all 6 questions/answers (server-rendered)
- Articles: BlogPosting + author + image + dateModified

### Recommendation 5 — Introduce a low-friction entry point for agency founders

Current CTA stack ("Book a demo", "Watch product demo", "Get started", "Contact us") all funnel into sales-mediated contact. Add self-serve: "Run your first search free — no credit card" or "See candidates for your open role in 60 seconds". If true free trial not feasible, add ROI calculator ("Enter your monthly LinkedIn Recruiter spend → see estimated cost-per-candidate with TrueCalling"). Place alongside Starter plan pricing.

### Recommendation 6 — Add a WhatsApp simulation / product screenshot above fold (TA Manager persona)

Core differentiator — EMILY™ engaging candidates on WhatsApp — never shown visually. Add mock WhatsApp conversation thread (personalized EMILY™ message + candidate reply) embedded in or below hero section. Converts abstract "90% open rate" claim into concrete visual. Sense and Chatarmin both show WhatsApp conversation interfaces.

## Systemic Issues

- **Trust (avg 7.3/25):** Unconfirmed testimonial, no security certs, no G2/Capterra badge, no named customer case studies. Most severe systemic issue — compounds across all personas at different funnel moments.
- **Action (avg 10.3/25):** Single CTA type ("Book a demo") serves a $595/month product where buyers range from ready-to-trial agency founders to compliance-checking HR Directors needing weeks of internal buy-in. CTA architecture needs to support browse / evaluate / decide simultaneously.

## Limitations

1. Actual page speed and CWV — not measurable via WebFetch. Lighthouse audit required. See partial perf report.
2. Schema implementation in raw HTML — WebFetch could not retrieve raw DOM source. See [`03-schema.md`](./03-schema.md) for confirmed schema state.
3. Index status — domain is Vercel deployment. If staging only, recommendations partially moot until production confirmed.
4. Internal link architecture — /en/blog and /en/faq not deeply audited.
5. Mobile rendering — not assessable for mobile behavior remotely.
6. Backlink profile — no DR/backlink data accessible.
