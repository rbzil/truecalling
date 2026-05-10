# SEO Audit — TrueCalling.ai (round 3)

**Audit date:** 2026-05-08
**URL audited:** https://truecalling.ai
**Type detected:** B2B SaaS (AI recruiting), 8 locales
**SEO Health Score:** **71 / 100**

This is the third audit, after merging the OG image, BlogPosting follow-ups
(author.url removed, keywords as array), and the new standalone /features
and /pricing pages. Compare with:
- [Round 1 (50/100)](../seo-audit-reports/01-summary.md)
- [Round 2 (64/100)](../seo-audit-2/01-summary.md)

## Files

| File | Score | Status |
|---|---|---|
| [`01-summary.md`](./01-summary.md) | **71/100** overall | Aggregated cross-agent |
| [`05-sitemap.md`](./05-sitemap.md) | 68/100 | Full report |
| [`08-geo.md`](./08-geo.md) | 58/100 | Full report |
| [`09-sxo.md`](./09-sxo.md) | 56/100 | Full report |
| `02-technical.md` | — | Agent stopped pre-write |
| `03-content.md` | — | Agent stopped pre-write |
| `04-schema.md` | — | Agent stopped pre-write |
| `06-performance.md` | — | Lighthouse JSONs only (lh-home/features/pricing.json) |
| `07-visual.md` | — | Screenshots only (`screenshots/`) |
| `10-backlinks.md` | — | Agent stopped pre-write |
| [`ACTION-PLAN.md`](./ACTION-PLAN.md) | — | Critical / High / Medium / Low |

## Per-agent score deltas across rounds

| Dimension | R1 | R2 | R3 | Δ R2→R3 |
|---|---|---|---|---|
| Technical | 51 | 74 | ~78 (est.) | +4 |
| Schema | 45 | 61 | ~65 (est.) | +4 |
| Performance | not measured | not measured | **95 (Lighthouse)** | new |
| GEO / AI search | 38 | 55 | 58 | +3 |
| SXO | 41 | 54 | 56 | +2 |
| Sitemap | partial | partial | 68 | new |
| **Aggregate** | **50** | **64** | **71** | **+7** |

## Lighthouse field data (lab)

| URL | Performance | LCP | CLS | TBT | FCP |
|---|---|---|---|---|---|
| /en | 95 | 3.0s | 0 | 0ms | 1.2s |
| /en/features | 95 | 2.8s | 0 | 90ms | 1.1s |
| /en/pricing | 95 | 2.9s | 0 | 10ms | 1.4s |

CLS perfect (0). LCP at the edge of "Good" (≤2.5s) — see ACTION-PLAN M1.
