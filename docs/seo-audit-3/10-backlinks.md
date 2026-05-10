# 10 — Backlink Profile · Round 3
**Domain:** truecalling.ai | **Date:** 2026-05-07 | **Audit tier:** 0 (Common Crawl + Verify crawler)

---

## Health Score

| Score | Confidence band | Scoring verdict |
|-------|----------------|-----------------|
| INSUFFICIENT DATA | 0.50 (CC domain-level only) | < 4 of 7 scoring factors have data — no numeric score issued |

Tier 0 covers 0 of 7 weighted factors with direct evidence (referring domain count, domain quality distribution, anchor text naturalness, toxic link ratio, link velocity, follow/nofollow ratio, geographic relevance). A numeric score would be false precision.

---

## Common Crawl — Domain Metrics

| Metric | Value | Source |
|--------|-------|--------|
| In CC crawl | Yes | CC cc-main-2026-jan-feb-mar (confidence: 0.50) |
| In PageRank rankings | No — below threshold | CC (confidence: 0.50) |
| PageRank score | n/a | CC (confidence: 0.50) |
| Harmonic centrality | n/a | CC (confidence: 0.50) |
| Referring domains (CC sample) | 0 detected | CC (confidence: 0.50) |
| Top referring domains | None returned | CC (confidence: 0.50) |
| app.truecalling.app | Not in CC crawl | CC (confidence: 0.50) |

**Data freshness:** CC release cc-main-2026-jan-feb-mar covers roughly Jan–Mar 2026; does not reflect links acquired after March 2026.

---

## New Referring Domains Since Round 2 (early May 2026)

The CC release used for this round (Jan–Mar 2026) predates Round 2. No delta comparison is possible via CC alone — a post-May crawl release would be needed. **No new referring domains detected.** Verify crawler found zero active inbound links to truecalling.ai across all probed sources.

---

## Tech-Press / VC Database Scan

| Source | URL probed | HTTP | Link to truecalling.ai | Notes |
|--------|-----------|------|------------------------|-------|
| TechCrunch (tag) | /tag/truecalling | 404 | None | Page does not exist |
| TechCrunch (search) | /?s=truecalling.ai | 200 | None | Search results page exists; no link found in parsed HTML |
| EU-Startups | /?s=truecalling | 200 | None | Search results page exists; no link found |
| The Org | /org/truecalling | 404 | None | Profile page does not exist |
| Crunchbase | /organization/truecalling | 403 | Unverifiable | Bot-blocked (403); existence cannot be confirmed or denied |
| YCombinator | /companies?q=truecalling | 200 | None | Search page exists; no link found |

**CC cross-check:** techcrunch.com has CC PageRank rank 375 and harmonic centrality rank 101 — a high-authority domain. No outbound link from TechCrunch to truecalling.ai was found in any source.

---

## Software Directory Scan

| Directory | URL probed | HTTP | Link to truecalling.ai | Notes |
|-----------|-----------|------|------------------------|-------|
| Product Hunt (product page) | /products/truecalling | 200 | None | Page renders (JS app); link not found in static HTML |
| Product Hunt (search) | /search?q=truecalling | 200 | None | No link found |
| Capterra | /p/truecalling | 404 | None | No listing |
| SourceForge | /software/product/truecalling | 404 | None | No listing |
| G2 | /products/truecalling/reviews | 403 | Unverifiable | Bot-blocked; cannot confirm |
| BetaList | /?s=truecalling | 200 | None | Search exists; no link found |

**Note on Product Hunt and G2:** Both render heavily via JavaScript. The verify crawler parses static HTML only. A JS-rendered result of "link_removed" means no link was found in static HTML — it does not rule out a JS-rendered link. Treat as **unverified**, not confirmed absent.

---

## Source Confidence Summary

| Source | Confidence | Freshness | Notes |
|--------|-----------|-----------|-------|
| Common Crawl (domain-level) | 0.50 | Quarterly (Jan–Mar 2026) | Domain present; below ranking threshold |
| Verify crawler (static HTML) | 0.95 | Real-time (2026-05-08) | Cannot parse JS-rendered pages |
| Bing Webmaster | Not available | — | Tier 1 required |
| Moz API | Not available | — | Tier 1 required |

---

## Findings Summary

| Finding | Priority | Detail |
|---------|----------|--------|
| Zero confirmed inbound links | Critical | CC and verify crawler find no referring domains pointing to truecalling.ai |
| No tech-press coverage detected | High | TechCrunch, EU-Startups, The Org: no pages or links found |
| No Crunchbase / G2 confirmation | Medium | Both return 403; existence is unverifiable at Tier 0 |
| Product Hunt page exists (HTTP 200) | Low | Page renders but no static link to truecalling.ai found; JS rendering may conceal it |
| No directory listings confirmed | Medium | Capterra and SourceForge return 404; no listing exists |

---

## Recommended Actions

1. **Submit to Product Hunt** — A /products/truecalling page returns 200 but contains no confirmed link. Claim or create a proper PH listing with the website URL set to truecalling.ai.
2. **Create Crunchbase profile** — Free self-service; provides a high-DA backlink and VC discoverability. Cannot confirm current state due to 403 block.
3. **Claim G2 free listing** — Same as Crunchbase; 403 prevents verification. Even a free listing adds a confirmed backlink.
4. **Submit to Capterra and SourceForge** — Both return 404, confirming no listing. Both are free and crawled by CC regularly.
5. **Upgrade to Tier 1 (Moz API)** — Free tier (2,500 rows/month) would provide DA, PA, spam score, and a referring domains index that would unlock a numeric health score.

---

## Validator

Automated validation: **PASS** (0 errors, 0 warnings) — `validate_backlink_report.py` run 2026-05-08.
