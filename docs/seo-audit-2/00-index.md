# SEO Audit — TrueCalling.ai (round 2)

**Audit date:** 2026-05-08
**URL audited:** https://truecalling.ai
**Type detected:** B2B SaaS (AI recruiting), 8 locales
**SEO Health Score:** **64 / 100**

This is the second audit, after merging the `seo-schemas-csp-v2` work
(Schema.org graph, CSP, llms.txt, bylines, GDPR trust strip, ROI calculator,
locale-aware demo). Compare with the first audit at
[../seo-audit-reports/](../seo-audit-reports/) which scored 50/100.

## Files

| File | Score | Status |
|---|---|---|
| [`01-summary.md`](./01-summary.md) | **64/100** overall | Aggregated cross-agent |
| [`02-technical.md`](./02-technical.md) | 74/100 | Full report |
| [`03-content.md`](./03-content.md) | partial | Agent stopped mid-task |
| [`04-schema.md`](./04-schema.md) | 61/100 | Full report |
| [`05-sitemap.md`](./05-sitemap.md) | partial | Agent stopped mid-task |
| [`06-performance.md`](./06-performance.md) | partial | PSI quota exhausted |
| [`07-visual.md`](./07-visual.md) | partial | Screenshots captured, no .md |
| [`08-geo.md`](./08-geo.md) | 55/100 | Full report |
| [`09-sxo.md`](./09-sxo.md) | 54/100 | Full report |
| [`10-backlinks.md`](./10-backlinks.md) | partial | Common Crawl partial |
| [`ACTION-PLAN.md`](./ACTION-PLAN.md) | — | Critical / High / Medium / Low |

## Per-agent score deltas vs. first audit

| Dimension | Round 1 | Round 2 | Δ |
|---|---|---|---|
| Technical | 51 | 74 | **+23** |
| Schema | 45 | 61 | **+16** |
| GEO / AI search | 38 | 55 | **+17** |
| SXO | 41 | 54 | **+13** |
| Aggregate | 50 | 64 | **+14** |

The two largest jumps are Technical (canonical + hreflang + robots fixes
landed in prod) and GEO (llms.txt + AI bot allow + named author + graph schema
all confirmed live).

## Re-run individual reports

```bash
/seo technical https://truecalling.ai
/seo schema https://truecalling.ai
/seo geo https://truecalling.ai
/seo sxo https://truecalling.ai
/seo content https://truecalling.ai
/seo sitemap https://truecalling.ai/sitemap.xml
/seo performance https://truecalling.ai
/seo backlinks https://truecalling.ai
```
