#!/usr/bin/env node
/**
 * SEO Blog Autopilot — generates 2 SEO blog articles in EN + FR using
 * Claude API and inserts them into app/[locale]/blog/_lib/articles.{en,fr}.tsx.
 *
 * Designed to run from a GitHub Action twice a week (or manually) and
 * commit the resulting articles to a new branch for human review.
 *
 * Why locked to EN + FR: the blog routing (`blogEnabledLocales`) currently
 * publishes only those two locales. Generating 8-language articles would
 * waste API tokens until the blog opens up.
 *
 * Required env:
 *   ANTHROPIC_API_KEY   — Claude API key
 *
 * Optional env:
 *   ARTICLES_PER_RUN    — default 2
 *   CLAUDE_MODEL        — default claude-sonnet-4-6
 *   DRY_RUN             — if "1", does not write files (prints generated content)
 *
 * Usage:
 *   node scripts/seo-blog-autopilot.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Anthropic from "@anthropic-ai/sdk";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");

const ARTICLES_FR = path.join(REPO_ROOT, "app/[locale]/blog/_lib/articles.fr.tsx");
const ARTICLES_EN = path.join(REPO_ROOT, "app/[locale]/blog/_lib/articles.en.tsx");
const KEYWORDS_DOC = path.join(REPO_ROOT, "seo-keywords-true-calling.md");

const N = Number(process.env.ARTICLES_PER_RUN ?? 2);
const MODEL = process.env.CLAUDE_MODEL ?? "claude-sonnet-4-6";
const DRY_RUN = process.env.DRY_RUN === "1";

const SITE_CONTEXT = `
TrueCalling — AI sourcing software for recruiting teams.
Brand: EMILY™ (AI copilot, WhatsApp/email/phone outreach), TrueFit 360 (candidate matching methodology).
Stat (canonical): 90% WhatsApp open rate, 1.2B+ profiles indexed, 40% time-to-hire reduction (TrueCalling internal data, 2026).
Audience: Talent Acquisition Managers, Agency Founders, HR Directors, Solo/SMB Recruiters.
`;

const today = () => new Date().toISOString().slice(0, 10);

async function readArticlesFile(p) {
  const src = await fs.readFile(p, "utf8");
  // Extract slugs and titles for cannibalization avoidance
  const slugs = [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  const titles = [...src.matchAll(/title:\s*"([^"]+)"/g)].map((m) => m[1]);
  return { src, slugs, titles };
}

async function readKeywordDoc() {
  try {
    return await fs.readFile(KEYWORDS_DOC, "utf8");
  } catch {
    return "";
  }
}

/**
 * Ask Claude for N article briefs in EN+FR with full content as JSX strings.
 * Strict JSON output to make insertion safe.
 */
async function generateArticles(client, { existingSlugs, existingTitles, keywordDoc }) {
  const system = `You are TrueCalling's SEO blog editor. You produce production-ready blog articles in English and French.

${SITE_CONTEXT}

OUTPUT REQUIREMENTS — return STRICT JSON only, no markdown fences, no prose. Schema:
{
  "articles": [
    {
      "canonicalId": "kebab-case-id-shared-across-locales",
      "category": "Sourcing IA" | "Outreach" | "ATS" | "Matching IA" | "Comparatif" | "Méthode",
      "publishedAt": "${today()}",
      "readingMinutes": <integer 6-10>,
      "en": {
        "slug": "kebab-case-en-slug",
        "title": "<60 chars",
        "description": "<155 chars meta description",
        "excerpt": "1-2 sentence excerpt for blog index card",
        "keyword": "primary keyword (lowercase)",
        "homepageAnchor": "short CTA copy linking back to /en",
        "contentJsx": "<JSX content as a string — see RULES>"
      },
      "fr": {
        "slug": "kebab-case-fr-slug",
        "title": "<60 chars",
        "description": "<155 chars",
        "excerpt": "1-2 phrases",
        "keyword": "mot-clé principal en français",
        "homepageAnchor": "copie courte du CTA retour /fr",
        "contentJsx": "<JSX content as a string — see RULES>"
      }
    }
  ]
}

CONTENT RULES (contentJsx field):
- 800-1500 words per article. Mix \`<p>\`, \`<h2>\`, \`<h3>\`, \`<ul><li>\`, \`<strong>\`, \`<em>\`, \`<a href>\` tags.
- Wrap the entire content in a Fragment: start with \`<>\` and end with \`</>\`.
- NO MARKDOWN. NO TRIPLE BACKTICKS. Pure JSX-compatible HTML inside the Fragment.
- Use straight ASCII apostrophes \\' (escaped) — never curly quotes inside JSX strings (TSX-incompatible).
- Use \`{" "}\` between adjacent inline tags only when grammatically required. Default: don't use it.
- Include 2-3 internal links via \`<Link href="/<locale>/<path>">…</Link>\`. Use \`<Link>\` not \`<a>\` for internal. Available paths: /<locale>, /<locale>/book-a-demo (en) | /<locale>/reserver-une-demo (fr), /<locale>/features (en) | /<locale>/fonctionnalites (fr), /<locale>/pricing (en) | /<locale>/tarifs (fr), /<locale>/blog.
- Embed 2-3 statistics. ALWAYS label TrueCalling-specific numbers as "(TrueCalling internal data, 2026)".
- Cite primary sources for industry stats (LinkedIn earnings, SHRM, Meta Business) — use \`<a href="https://...">\` for external.
- End with a CTA paragraph linking to the demo page in the locale.

SEO RULES:
- canonicalId is kebab-case, descriptive, locale-neutral.
- Slugs differ per locale (e.g. en: "ai-recruiting-stack-2026", fr: "stack-recrutement-ia-2026").
- Avoid these existing slugs/titles: ${JSON.stringify({ slugs: existingSlugs.slice(0, 30), titles: existingTitles.slice(0, 20) })}
- Pick keywords with clear search intent. Avoid cannibalizing existing posts.
- Targets: search volume + low difficulty + HR/AI/talent relevance.

REFERENCE KEYWORD DOC (excerpt): ${keywordDoc.slice(0, 4000)}

Generate exactly ${N} articles.`;

  const user = `Generate ${N} TrueCalling SEO articles for ${today()}. Return strict JSON per the schema. No prose around the JSON.`;

  console.log(`[autopilot] calling ${MODEL} for ${N} article(s)…`);
  const resp = await client.messages.create({
    model: MODEL,
    max_tokens: 16000,
    system,
    messages: [{ role: "user", content: user }],
  });

  const text = resp.content.map((b) => (b.type === "text" ? b.text : "")).join("");
  const jsonStart = text.indexOf("{");
  const jsonEnd = text.lastIndexOf("}");
  if (jsonStart === -1 || jsonEnd === -1) {
    throw new Error(`Claude did not return JSON. First 500 chars: ${text.slice(0, 500)}`);
  }
  const json = text.slice(jsonStart, jsonEnd + 1);
  let parsed;
  try {
    parsed = JSON.parse(json);
  } catch (e) {
    throw new Error(`Failed to parse JSON: ${e.message}\nPayload start: ${json.slice(0, 500)}`);
  }
  if (!Array.isArray(parsed.articles) || parsed.articles.length === 0) {
    throw new Error("No articles in response");
  }
  return parsed.articles;
}

/**
 * Build a TSX article entry string for insertion into articles.<locale>.tsx.
 * The contentJsx is embedded inline as `content: (<>...</>),`.
 */
function buildEntry(article, locale) {
  const data = article[locale];
  const escape = (s) => String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  return `  {
    slug: "${escape(data.slug)}",
    canonicalId: "${escape(article.canonicalId)}",
    title: "${escape(data.title)}",
    description:
      "${escape(data.description)}",
    excerpt:
      "${escape(data.excerpt)}",
    keyword: "${escape(data.keyword)}",
    category: "${escape(article.category)}",
    publishedAt: "${article.publishedAt}",
    readingMinutes: ${Number(article.readingMinutes) || 8},
    homepageAnchor: "${escape(data.homepageAnchor)}",
    content: (
${data.contentJsx
  .split("\n")
  .map((l) => "      " + l)
  .join("\n")}
    ),
  },`;
}

/**
 * Insert new entries at the START of the articles array (newest first).
 * The script locates `export const articles: Article[] = [` and inserts
 * the new entries right after that opening bracket.
 */
function insertEntries(src, entries) {
  const marker = "export const articles: Article[] = [";
  const idx = src.indexOf(marker);
  if (idx === -1) {
    throw new Error(`Marker not found: ${marker}`);
  }
  const insertAt = idx + marker.length;
  const block = "\n" + entries.join("\n");
  return src.slice(0, insertAt) + block + src.slice(insertAt);
}

async function main() {
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("[autopilot] ANTHROPIC_API_KEY is not set");
    process.exit(1);
  }
  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  const [fr, en, kw] = await Promise.all([
    readArticlesFile(ARTICLES_FR),
    readArticlesFile(ARTICLES_EN),
    readKeywordDoc(),
  ]);

  // Dedup-aware existing index across locales
  const existingSlugs = [...new Set([...fr.slugs, ...en.slugs])];
  const existingTitles = [...new Set([...fr.titles, ...en.titles])];

  const articles = await generateArticles(client, {
    existingSlugs,
    existingTitles,
    keywordDoc: kw,
  });

  console.log(`[autopilot] generated ${articles.length} article(s)`);
  for (const a of articles) {
    console.log(`  • ${a.canonicalId} — ${a.en.title}`);
  }

  // Refuse to insert duplicates
  for (const a of articles) {
    if (existingSlugs.includes(a.en.slug) || existingSlugs.includes(a.fr.slug)) {
      throw new Error(`Slug already exists: ${a.en.slug} or ${a.fr.slug}`);
    }
  }

  if (DRY_RUN) {
    console.log("[autopilot] DRY_RUN=1 — not writing files. Generated payload:");
    console.log(JSON.stringify(articles, null, 2).slice(0, 4000));
    return;
  }

  const enEntries = articles.map((a) => buildEntry(a, "en"));
  const frEntries = articles.map((a) => buildEntry(a, "fr"));

  const newEnSrc = insertEntries(en.src, enEntries);
  const newFrSrc = insertEntries(fr.src, frEntries);

  await fs.writeFile(ARTICLES_EN, newEnSrc);
  await fs.writeFile(ARTICLES_FR, newFrSrc);

  console.log(`[autopilot] inserted ${articles.length} article(s) into both locales`);

  // Write PR body to /tmp for the workflow to consume via gh --body-file
  const prBody = buildPrBody(articles);
  await fs.writeFile("/tmp/autopilot-pr-body.md", prBody);
  console.log("[autopilot] wrote /tmp/autopilot-pr-body.md");
}

function buildPrBody(articles) {
  const lines = [
    `## Autopilot SEO blog — ${today()}`,
    "",
    `${articles.length} article(s) generated by Claude (${MODEL}).`,
    "",
    "### Articles",
  ];
  for (const a of articles) {
    lines.push(`- **${a.canonicalId}**`);
    lines.push(`  - EN: \`/${a.en.slug}\` — ${a.en.title} *(keyword: ${a.en.keyword})*`);
    lines.push(`  - FR: \`/${a.fr.slug}\` — ${a.fr.title} *(mot-clé: ${a.fr.keyword})*`);
  }
  lines.push(
    "",
    "### Review checklist",
    "- [ ] Title + meta description per locale read naturally (no machine-y phrasing)",
    "- [ ] Internal links go to live pages (book-a-demo, features, pricing, blog)",
    "- [ ] Stats are sourced or labeled '(TrueCalling internal data, 2026)'",
    "- [ ] No keyword cannibalization with existing posts",
    "- [ ] JSX renders without TypeScript errors (`npm run build` passed in CI)",
    "- [ ] Hreflang alternates resolve (canonicalId is shared across en/fr)",
    "",
    "_Generated by `.github/workflows/seo-blog-autopilot.yml`._",
  );
  return lines.join("\n") + "\n";
}

main().catch((e) => {
  console.error("[autopilot] failed:", e);
  process.exit(1);
});
