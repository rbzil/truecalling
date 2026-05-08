# SEO Audit Summary — TrueCalling.ai

**Date:** 2026-05-08
**URL:** https://truecalling.ai
**Type:** B2B SaaS (AI recruiting), 8 locales
**SEO Health Score:** **64 / 100** (was 50 in round 1)

## Headline

The previous audit's blocker tier is now resolved. Robots, canonical, hreflang,
schema graph, security headers, llms.txt, and the GDPR trust strip have all
landed in production and verified live. What's left is a different category of
work: **conversion / persona** issues (SMB persona at 39/100, no listicle
ranking path), **discovery** (no `og:image` for social shares,
www subdomain still 307, no IndexNow), and **content depth** (no individual
named authors, blog images still use the brand logo, comparison pages don't
exist yet).

## Score breakdown

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 55 (est.) | 12.7 |
| On-Page SEO | 20% | 70 (est.) | 14.0 |
| Schema / Structured Data | 10% | 61 | 6.1 |
| Performance (CWV) | 10% | 55 (est., PSI quota) | 5.5 |
| AI Search Readiness (GEO) | 10% | 55 | 5.5 |
| Images | 5% | 70 (est.) | 3.5 |
| **Total** | **100%** | — | **63.6 ≈ 64** |

## What's working (verified live)

- robots.txt: 200, text/plain, AI bots whitelisted, CCBot disallowed
- /sitemap.xml well-formed, x-default present per URL, lastmod = publishedAt
- All sub-routes self-canonicalize
- `<html lang>` matches URL locale (incl. `dir="rtl"` on `/he`)
- Root `/` → `/<locale>` uses 308 (not 307)
- CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, HSTS in place
- /llms.txt with EMILY + TrueFit 360 entity definitions and "internal data, 2026" labels
- Schema.org graph: Organization (with @id) + WebSite + SoftwareApplication
  on home only + BlogPosting with image / dateModified / publisher.logo +
  Person author with @id, jobTitle, sameAs, worksFor + BreadcrumbList per route
- Logo carousel scrolls seamlessly in LTR + RTL
- Demo (web + mobile mockups) localized for all 8 locales — names, cities,
  companies, WhatsApp messages, mock-app UI
- GDPR / Compliance trust strip on home (HR Director persona unblocked)
- ROI calculator on home (Agency Founder persona partially unblocked, no email gate)

## Top 5 critical / high issues remaining

1. **`og:image` missing on every locale homepage.** Twitter card image is
   present but Open Graph is not — LinkedIn, WhatsApp, Slack, Facebook all
   render imageless link previews. (Technical H2)
2. **Homepage cannot rank for "AI sourcing software" / "AI recruiting software" /
   "AI candidate sourcing" — SERP intent is listicle, 90 % of top 10 are
   comparison pages.** Fix is a dedicated `/en/blog/best-ai-sourcing-software-2026`
   listicle. (SXO Critical)
3. **`www.truecalling.ai` redirect is 307 (temporary), should be 308 (permanent).**
   Does not consolidate PageRank. (Technical H1)
4. **Sitemap locale parity: HE/ES/DE/IT/NL/pt-BR have only 8 URLs each (universal
   routes), missing all 10 blog posts and the blog index.** Googlebot can't
   discover blog content for those locales via sitemap. (Technical M4)
5. **Solo/SMB Recruiter persona scored 39/100 (Critical Mismatch).** Pricing at
   $595/user/mo with no free trial / sandbox creates a hard wall. Not flagged
   in round 1 because the persona wasn't isolated. (SXO Critical)

## Top 5 quick wins (≤ 30 min each)

1. Add `og:image` (1200×630) to root layout metadata. **30 min.**
2. Fix `www` redirect to 308 in middleware/`vercel.json`. **10 min.**
3. Add `aggregateRating` placeholder to SoftwareApplication once 3+ G2 reviews exist. **15 min after reviews.**
4. Replace `BlogPosting.author.url` (currently `/en`) with a real author bio
   page or remove the field. **15 min.**
5. Convert `BlogPosting.keywords` from a single string to an array. **5 min.**

## Verified delta vs. round 1

| Round 1 critical (50/100 audit) | Status today |
|---|---|
| robots.txt 404 | RESOLVED |
| Canonical collapse on sub-routes | RESOLVED |
| Hreflang sub-routes broken | RESOLVED |
| `<html lang="en">` hardcoded everywhere | RESOLVED |
| Staging indexable | RESOLVED (also: deployment now 404) |
| BlogPosting missing image / dateModified / publisher.logo | RESOLVED |
| Sitemap missing x-default | RESOLVED |
| robots.txt no AI bot allow | RESOLVED |
| llms.txt missing | RESOLVED |
| Author bylines + Person schema missing | RESOLVED (one editorial author for now) |
| GDPR section on home missing | RESOLVED |
| Self-serve CTA missing | RESOLVED (ROI calculator) |
| Comparison page (Action #15) | NOT DONE — biggest remaining gap |
| Per-article statistics sourcing (Action #14) | NOT DONE |

13 of 14 round-1 actions are closed. Only the two heaviest content efforts
(comparison page + per-article statistic sourcing) remain.

## Where the score will go next

Implementing the 5 critical / high items above would lift the aggregate to
~74/100. Adding the comparison listicle and individual named authors with bio
pages takes it to ~80/100 — the realistic ceiling without backlink work and
without per-article hero images.
