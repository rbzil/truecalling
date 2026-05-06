# SEO Audit Reports — TrueCalling

**Audit date:** 2026-05-06
**URL audited:** https://truecalling-lyart.vercel.app/en
**Production canonical:** https://truecalling.app
**Type detected:** SaaS B2B (recruiting AI), 8 locales

## Files

| File | Score | Source agent |
|---|---|---|
| [`01-summary.md`](./01-summary.md) | **50/100** overall | Aggregated cross-agent |
| [`02-technical.md`](./02-technical.md) | 51/100 | claude-seo:seo-technical |
| [`03-schema.md`](./03-schema.md) | 45/100 | claude-seo:seo-schema |
| [`04-geo.md`](./04-geo.md) | 38/100 | claude-seo:seo-geo |
| [`05-sxo.md`](./05-sxo.md) | 41/100 | claude-seo:seo-sxo |
| [`06-hreflang.md`](./06-hreflang.md) | (qualitative) | inline analysis |
| [`07-partial-content-sitemap-perf-visual.md`](./07-partial-content-sitemap-perf-visual.md) | partial | 4 agents (short outputs) |

## Print-ready

[`../seo-audit-report.html`](../seo-audit-report.html) — single-file HTML version of the consolidated report. Open in browser, Cmd+P → Save as PDF.

## Re-running individual reports

```bash
# Per-skill commands (require claude-seo plugin loaded):
/seo technical https://truecalling-lyart.vercel.app/en
/seo schema https://truecalling-lyart.vercel.app/en
/seo geo https://truecalling-lyart.vercel.app/en
/seo sxo https://truecalling-lyart.vercel.app/en
/seo content https://truecalling-lyart.vercel.app/en
/seo sitemap https://truecalling-lyart.vercel.app/sitemap.xml
/seo performance https://truecalling-lyart.vercel.app/en
/seo hreflang https://truecalling-lyart.vercel.app
```

## Raw agent transcripts

The full subagent JSONL conversation logs (debug-level, harder to read) live at:

```
/private/tmp/claude-501/-Users-raphaelbouaziz/<conversation-id>/tasks/<agent-id>.output
```

These are throwaway temp files and may be cleaned up by the OS. The clean .md exports in this directory are the canonical record.
