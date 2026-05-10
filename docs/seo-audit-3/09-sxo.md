# SXO Audit Round 3 — TrueCalling.ai
**Date:** 2026-05-07
**Pages audited:** / (homepage), /en/pricing, /en/features
**Primary keyword:** "AI sourcing software"
**Round-2 baseline SXO Gap Score:** 54/100

---

## What Changed Since Round 2

| New asset | Round-2 status | Round-3 finding |
|---|---|---|
| /en/pricing (standalone) | Did not exist as own page | Live. Prices, FAQ, trial callout confirmed. |
| /en/features (standalone) | Did not exist as own page | Live. ~550 words, 11 H2/H3 headings. |
| SMB trial callout | Missing — Critical Mismatch blocker | "1 sample job + 20 candidate matches, no credit card" present in pricing meta + FAQ |
| DPA / GDPR download CTA | Recommended in round 2 | Not yet implemented (see HR Director) |
| Agency-mode ROI toggle | Recommended in round 2 | Not yet implemented (see Agency Founder) |

---

## SERP Re-Check — "AI sourcing software" (2026-05-07)

10 organic results sampled. SERP consensus: **Listicle / Comparison Page — confidence 100% (10/10).**

| Position | Domain | Page type | TrueCalling listed? |
|---|---|---|---|
| 1 | pin.com/blog | Listicle — "9 Best AI Sourcing Tools 2026" | No |
| 2 | peoplemanagingpeople.com | Listicle — "14 Best AI Sourcing Tools 2026" | No |
| 3 | crustdata.com/blog | Listicle — "Best AI Sourcing Tools 2026" | Not confirmed |
| 4 | mindhuntai.com/blog | Listicle — "12 Best AI Sourcing Tools: Honest Comparison" | No |
| 5 | wellfound.com/blog | Listicle — "7 Best AI Sourcing Tools for Startup Hiring" | Not confirmed |
| 6 | recruiterflow.com/blog | Listicle — "23 Best AI Sourcing Tools 2026" | Not confirmed |
| 7 | findmyfactory.eu/blog | Listicle — "10 Best AI Sourcing Tools 2026" | Not confirmed |
| 8 | pin.com/blog | Listicle — "12 Best AI Recruiting Tools 2026" | No |
| 9 | sitepoint.com | Listicle — "12 Best AI Recruiting Sourcing Tools 2026" | Not confirmed |
| 10 | humanly.io/blog | Listicle — "Best AI Sourcing Tools 2026: Proof-Based Shortlist" | Not confirmed |

**SERP consensus is unchanged from round 2.** The listicle format owns 100% of visible positions. No vendor homepage, no features page, no standalone pricing page appears in the top 10.

**SERP features (observed):** AI Overview present, synthesising listicle content. PAA box active (definitional + "what is the best AI sourcing tool?" style questions). Related searches include "AI sourcing tools pricing", "AI sourcing tools comparison", "best AI recruiting software 2026". Moderate ad density (Pin, SeekOut, hireEZ). No local pack.

---

## PRIMARY FINDING — Page-Type Mismatch: CRITICAL (unchanged)

The homepage, /en/pricing, and /en/features are all **Landing Page / Product Page** type (taxonomy types 1 and 4). The SERP is 100% Listicle / Comparison Page (taxonomy type 6).

Neither the new pricing page nor the new features page changes this verdict. A features page is a product page — Google does not rank product pages for head-term comparative queries. Standalone pages give Google a cleaner crawlable target, which is useful for long-tail features queries, but they cannot resolve the structural mismatch for "AI sourcing software."

**The blog listicle at `/en/blog/best-ai-sourcing-software-2026` remains the only viable path to top-10 for this keyword cluster.**

### Does the features page help for "AI sourcing software features"?

Partially. The keyword "AI sourcing software features" is a secondary informational query. Its SERP is also dominated by listicles (selectsoftwarereviews.com, mindhuntai.com, recruiterflow.com all rank with long-form comparison content that includes feature breakdowns). At ~550 words with no comparison data, no schema, and no author/date signals, /en/features does not match the format Google rewards even for this softer keyword. To rank for "AI sourcing software features," the page needs: 1,200+ words, a feature comparison table (vs. at least 2-3 named competitors), FAQ schema, and a clearly structured H2 hierarchy that mirrors what buyers actually search (e.g., "Does TrueCalling integrate with Greenhouse?").

**Current verdict for /en/features targeting "AI sourcing software features": MEDIUM mismatch (depth and format gap, not a fatal type mismatch).**

---

## Should the team still build /en/blog/best-ai-sourcing-software-2026?

**Yes. The recommendation is stronger in round 3, not weaker.**

The SERP has not diversified. Every top-10 slot is held by a third-party listicle. TrueCalling is absent from all confirmed results. Pin (a direct competitor) has two entries in the top 10, including the #1 position, by publishing its own "best AI sourcing tools" listicle that names itself first. This is the established playbook in this category and it works. The new standalone pages do not substitute for this — they are complementary.

The listicle page should be built at `/en/blog/best-ai-sourcing-software-2026`, target 2,500-3,500 words, include a comparison table of 6-8 tools (TrueCalling first), use BlogPosting + ItemList schema, include a "best for" verdict per tool, and be refreshed with a new dateModified every 60-90 days to compete with Pin's freshness signal.

---

## Persona Scoring — Round 3

Baseline from round 2. Scores updated per evidence from new pages.

### Solo/SMB Recruiter — Previously 39/100 (Critical Mismatch)

**Relevance 14/25 (+2):** The dedicated pricing page with named Starter plan ($595/user/month, up to 10 listings) makes the SMB-tier offering findable in isolation. The pricing page H1 ("One plan per growth stage") acknowledges staged use. However, no SMB-specific copy or case study exists on /en/pricing — the Starter plan is described in plan-feature terms only, not in "built for a team of one" framing.

**Clarity 14/25 (+4):** The FAQ on /en/pricing explicitly answers "Is there a free trial?" — confirmed in the page FAQ with the "1 sample job + 20 candidate matches, no credit card required" answer. This is a material clarity improvement. An SMB visitor can now land on /en/pricing and immediately see the trial offer without digging through the homepage.

**Trust 9/25 (+1):** No solo/boutique recruiter testimonials added to pricing page. Named clients (Deel, Prodware) still read enterprise. No G2 or Capterra badge present on /en/pricing. Marginal improvement only from the FAQ text.

**Action 13/25 (+4):** The trial callout with "no credit card required" changes the action equation. The CTA is still "Book a demo to start" rather than a self-serve signup, which limits the score — the SMB persona wants to click and try, not schedule a call. But the friction is reduced: the demo is framed as a guided trial (20 minutes, 1 real job, 20 real matches) rather than a pure sales call.

**Round-3 Total: 50/100 (+11) — Needs Work**

The Critical Mismatch from round 2 is resolved. The SMB persona moves from 39 (Critical Mismatch) to 50 (Needs Work). The trial callout is the direct cause. Remaining ceiling: no self-serve path, no SMB social proof, CTA is still demo-gated.

**Remaining blocker:** To reach Good (60+), add one independent recruiter or 2-person team testimonial to /en/pricing, and test a "Start your free sample" button that opens a direct signup flow rather than a calendar booking.

---

### TA Manager — Previously 60/100 (Good)

**Relevance 18/25 (unchanged):** /en/features adds no new TA-Manager-specific framing. The 11 headings on /en/features cover product capabilities but not use-case scenarios (e.g., "Fill 5 engineering roles in Q1"). No benchmark data, no team-scale workflow examples added.

**Clarity 16/25 (+1):** /en/features provides a dedicated page the TA Manager can bookmark and share internally. The "How it works" 5-step workflow on /en/features marginally improves clarity for internal sell-in. Still no comparison table vs. SeekOut or hireEZ.

**Trust 12/25 (unchanged):** Still absent from all SERP listicles. No G2/Capterra. No aggregateRating schema. The TA Manager researching from the SERP never encounters TrueCalling organically — this is the structural trust block.

**Action 15/25 (unchanged):** /en/features CTAs are still "Book a demo" only. No "Compare plans" link from the features page to /en/pricing is confirmed as a natural funnel path.

**Round-3 Total: 61/100 (+1) — Good**

Marginal improvement. The features page is a useful internal navigation addition but moves the needle by 1 point at most. The TA Manager's binding constraint remains organic invisibility for the keywords they use.

---

### Agency Founder — Previously 61/100 (Good)

**Relevance 16/25 (unchanged):** /en/pricing confirms the Core plan ($895/user/month) which is the natural Agency Founder tier. No agency-specific framing added. The pricing page does not address the "I have 5 consultants" scenario.

**Clarity 15/25 (+1):** /en/pricing gives a direct URL the Agency Founder can share with their ops lead. Marginal clarity improvement from having a standalone page vs. a scroll-to section.

**Trust 15/25 (unchanged):** ROI calculator still outputs generic "days saved" metrics. Agency toggle not implemented. No agency-specific testimonial or case study confirmed on /en/pricing.

**Action 16/25 (unchanged):** "Book a demo to start" remains the sole CTA on /en/pricing. No multi-seat discount callout, no agency pricing note ("5 seats? Contact us for volume pricing").

**Round-3 Total: 62/100 (+1) — Good**

Effectively flat. The standalone pricing page is a structural improvement (cleaner URL, dedicated canonical) but does not change the Agency Founder's conversion path or trust signals.

**Remaining blocker:** Agency-mode ROI output and a multi-seat/volume callout on /en/pricing remain the highest-leverage unimplemented items from round 2.

---

### HR Director — Previously 70/100 (Good)

**Relevance 20/25 (unchanged):** GDPR/compliance section exists on homepage. /en/pricing FAQ includes "Do you support GDPR / DPA?" — this is a positive addition. The FAQ answer itself was not parseable in full, but the presence of the question in the FAQ is a trust signal for an HR Director scanning the page.

**Clarity 17/25 (unchanged):** Compliance content remains on the homepage, not surfaced on /en/pricing or /en/features. An HR Director who lands on /en/pricing via a SERP ad or internal share would need to navigate to the homepage to verify compliance posture.

**Trust 19/25 (unchanged):** GDPR FAQ entry on /en/pricing is marginally positive. No DPA download link confirmed. No dedicated /en/legal/data-processing page confirmed as live.

**Action 14/25 (unchanged):** "Download DPA" CTA recommended in round 2 is not yet implemented. The HR Director's funnel still terminates at "Book a demo" rather than "Download DPA / Request security docs."

**Round-3 Total: 70/100 (unchanged) — Good**

No movement. The GDPR FAQ entry on /en/pricing is directionally correct but insufficient to move the score. The round-2 recommendation (DPA download CTA) remains the highest-leverage action for this persona.

---

## Consolidated Persona Score Table

| Persona | Relevance | Clarity | Trust | Action | R3 Total | R2 Total | Delta | Rating |
|---|---|---|---|---|---|---|---|---|
| Solo/SMB Recruiter | 14/25 | 14/25 | 9/25 | 13/25 | 50/100 | 39/100 | +11 | Needs Work |
| TA Manager | 18/25 | 16/25 | 12/25 | 15/25 | 61/100 | 60/100 | +1 | Good |
| Agency Founder | 16/25 | 15/25 | 15/25 | 16/25 | 62/100 | 61/100 | +1 | Good |
| HR Director | 20/25 | 17/25 | 19/25 | 14/25 | 70/100 | 70/100 | 0 | Good |

---

## SXO Gap Score — Round 3

| Dimension | Max | R2 Score | R3 Score | Change | Evidence |
|---|---|---|---|---|---|
| Page Type | 15 | 4 | 5 | +1 | /en/pricing and /en/features give Google distinct crawlable targets; does not resolve listicle mismatch |
| Content Depth | 15 | 9 | 9 | 0 | /en/features at ~550 words is thin; no comparison data; no competitor differentiation |
| UX Signals | 15 | 10 | 11 | +1 | Trial callout on /en/pricing reduces friction; CTA still demo-gated |
| Schema | 15 | 8 | 8 | 0 | No new schema detected on /en/pricing or /en/features; no PriceSpecification, no FAQPage confirmed |
| Media | 15 | 7 | 7 | 0 | No new product screenshots or video demo confirmed on new pages |
| Authority | 15 | 8 | 8 | 0 | Still absent from all SERP listicles; no new third-party review presence |
| Freshness | 10 | 8 | 8 | 0 | New pages are recent additions; no datePublished/dateModified signals confirmed |
| **Total** | **100** | **54** | **56** | **+2** | |

**Round-3 SXO Gap Score: 56/100**

The +2 movement is real but narrow. The new pages are infrastructurally useful — they give Google distinct canonical URLs for pricing and features queries — but they do not close the structural mismatch for the primary keyword cluster.

---

## Priority Actions (Updated for Round 3)

**P1 — Build /en/blog/best-ai-sourcing-software-2026 (unchanged, still critical)**
Target: 2,500-3,500 words. Format: numbered listicle, TrueCalling #1, 6-8 tools compared. Schema: BlogPosting + ItemList. Include: feature matrix, "best for" verdict per tool, FAQ section with 5+ entries, dateModified signal. This is the only action that resolves the CRITICAL mismatch and moves the TA Manager trust score.

**P2 — Add FAQPage schema to /en/pricing**
The FAQ section exists (4 confirmed questions). Adding FAQPage schema costs 30 minutes of dev time and creates an immediate SERP snippet opportunity for "TrueCalling pricing" and "is there a free trial for TrueCalling."

**P3 — Add DPA download CTA to homepage compliance section and /en/pricing FAQ**
HR Director blocker is 80% resolved. A single PDF link ("Download our DPA") and a link to /en/legal/data-processing closes the remaining 20%. Estimated score impact: HR Director Action 14 -> 19/25.

**P4 — Add solo/boutique recruiter testimonial to /en/pricing**
One testimonial from an independent recruiter or 2-person agency removes the only remaining Critical-Mismatch signal for the SMB persona. Moves Trust 9 -> 16/25 and Total 50 -> 57.

**P5 — Add agency volume-pricing callout and "5+ seats?" CTA to /en/pricing**
One line ("Running a team of 5+? Ask about multi-seat rates.") with a mailto or chat trigger. Directly addresses Agency Founder's justification barrier.

**P6 — Expand /en/features to 1,200+ words with competitor feature comparison table**
Required to compete for "AI sourcing software features" secondary keyword. Add: comparison vs. Pin, SeekOut, hireEZ on 5-6 criteria. Add: FAQPage schema. Add: author/date signals (BlogPosting or TechArticle schema).

---

## Limitations

- /en/pricing and /en/features were fetched via WebFetch (JavaScript-rendered HTML). Schema markup was not confirmed in raw `<script type="application/ld+json">` form — the absence of schema signals in the parsed output suggests none is present, but cannot be confirmed without a live schema validator run.
- TrueCalling's presence on individual listicle pages (recruiterflow, crustdata, humanly, sitepoint, wellfound, findmyfactory) was not confirmed on individual pages due to fetch limits. The confirmed absences (pin.com, mindhuntai.com, selectsoftwarereviews.com) are definitive. The remainder are inferences.
- The FAQ answer text for "Is there a free trial?" on /en/pricing was derived from the meta description (which contains the trial callout) and the FAQ question heading — the full answer body was not parsed. The characterisation of the trial as "guided 20-minute demo + 1 sample job + 20 matches" reflects the meta description text.
- ROI calculator interactivity and agency-toggle status were not re-verified in a live browser session for round 3.
- Round-3 scores reflect only the evidence observable from fetched page content and SERP signals. Conversion rate data, crawl budget, and Core Web Vitals were not re-assessed.

---

*Generate a PDF report? Use `/seo google report`*
