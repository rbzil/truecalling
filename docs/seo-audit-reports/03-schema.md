# Schema.org Audit — TrueCalling

**URL:** https://truecalling-lyart.vercel.app/en
**Date:** 2026-05-06
**Score: 45 / 100**

## 1. Existing Schema — Detection Summary

| Route | Format | Type | Source file |
|---|---|---|---|
| `/en` (all locales) | JSON-LD | `SoftwareApplication` | `app/[locale]/layout.tsx` |
| `/en/blog/[slug]` | JSON-LD | `BlogPosting` | `app/[locale]/blog/[slug]/page.tsx` |
| `/en/faq` | JSON-LD (client) | `FAQPage` | `app/[locale]/faq/page.tsx` |
| `/en/blog` | None | — | `app/[locale]/blog/page.tsx` |
| `/en/contact` | None | — | `app/[locale]/contact/page.tsx` |
| `/en/book-a-demo` | None | — | `app/[locale]/book-a-demo/page.tsx` |

No Microdata or RDFa detected anywhere in the codebase.

## 2. Validation — Existing Blocks

### 2.1 `SoftwareApplication` — `/en` via `app/[locale]/layout.tsx`

**Rendered output (reconstructed):**
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrueCalling",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Built for recruiting teams, TrueCalling turns a job description into qualified candidates in minutes. EMILY™, our AI copilot, handles matching and multichannel outreach on WhatsApp, email, and phone.",
  "url": "https://truecalling.app/en",
  "image": "https://truecalling.app/brand/truecalling-vertical.png",
  "inLanguage": "en",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "595",
    "highPrice": "895",
    "offerCount": "3"
  }
}
```

**Validation:**
- `@context` is `https://schema.org` — PASS
- `@type` is valid and not deprecated — PASS
- `url` is absolute — PASS
- `image` is absolute — PASS
- No placeholder text — PASS
- **FAIL — Missing `logo`:** `image` is a vertical brand lockup; needs separate square `logo` for crawlers.
- **FAIL — Missing `publisher` / `creator`:** No Organization node linked anywhere — single largest gap.
- **FAIL — `offers.offerCount: "3"`** but only 2 plans (Starter $595, Core $895) have numeric prices; Enterprise is custom-quoted. Should be `"2"` or include Enterprise with `priceSpecification` showing no numeric price.
- **FAIL — No `dateModified` / `datePublished`:** Recommended for freshness signal.
- **FAIL — Block injected in shared `LocaleLayout`** → renders on EVERY page including `/blog/[slug]`, creating a type collision with the co-present `BlogPosting`. Move to `app/[locale]/page.tsx` (home only).

**Priority: Critical**

### 2.2 `BlogPosting` — `/en/blog/[slug]`

**Rendered output (example: `ai-sourcing-guide-2026`):**
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "AI Sourcing in 2026: The Complete Guide for Recruiters (Methods, Tools, Examples)",
  "description": "AI sourcing in 2026: methods, tools, real-world examples...",
  "datePublished": "2026-04-22",
  "author": { "@type": "Organization", "name": "TrueCalling" },
  "publisher": {
    "@type": "Organization",
    "name": "TrueCalling",
    "url": "https://truecalling.app"
  },
  "keywords": "AI sourcing",
  "inLanguage": "en",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://truecalling.app/en/blog/ai-sourcing-guide-2026"
  }
}
```

**Validation:**
- `@context` is `https://schema.org` — PASS
- `datePublished` is ISO 8601 — PASS
- `mainEntityOfPage` uses absolute `@id` — PASS
- **FAIL — Missing `image`:** Google's Article/BlogPosting rich results **require** `image`. Without it, the article is ineligible for Google rich results (Top Stories, article carousel). Most impactful missing property.
- **FAIL — Missing `dateModified`:** Google treats absence as "never refreshed". Should equal `datePublished` at minimum.
- **FAIL — `author` has no `url` or `@id`:** When author is Organization, link to canonical URL for entity disambiguation.
- **FAIL — `publisher` has no `logo`:** Google requires `publisher.logo` for Article rich results. Must be `ImageObject` with `url`, `width`, `height`.

**Priority: Critical** (missing `image` blocks rich result eligibility entirely)

### 2.3 `FAQPage` — `/en/faq`

**Rendered structure:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is TrueCalling and what is this AI sourcing software for?",
      "acceptedAnswer": { "@type": "Answer", "text": "TrueCalling is an AI sourcing software..." }
    }
    // … 5 more items
  ]
}
```

**Validation:**
- All fields PASS
- **INFO — Google Rich Results restriction (Aug 2023):** Commercial sites no longer get FAQPage SERP accordion (restricted to gov + healthcare). NOT a bug. **Retain block** because:
  1. Correctly structured and valid.
  2. Provides AI/LLM citation benefit (Perplexity, ChatGPT, Gemini parse FAQPage JSON-LD).
- **MINOR — Block injected client-side** via `useT()`. JSON-LD not in initial server-rendered HTML. Googlebot executes JS, so it works, but slower to index. Move to server component.

**Priority: Info** (no Google action; minor SSR migration as low-priority improvement)

## 3. Missing Schema Opportunities

### 3.1 `Organization` — Site-wide (Critical Gap)

No `Organization` block anywhere. Needed as:
- Canonical entity for `publisher.logo` in `BlogPosting`
- `author.url` reference for articles
- Standalone entity for Google's Knowledge Panel
- Basis for `sameAs` social profile linking

**Recommended placement:** `app/[locale]/layout.tsx` alongside or replacing the current `SoftwareApplication`. Single English-language Organization block injected once at root layout level is sufficient (no per-locale duplication).

**Priority: Critical**

### 3.2 `WebSite` with `SearchAction` — Home page

Not present. Even without internal search, a bare `WebSite` block provides `url` and `name` for sitelinks search box eligibility.

**Priority: Medium**

### 3.3 `BreadcrumbList` — `/en/blog` and `/en/blog/[slug]`

No breadcrumb schema. Google uses `BreadcrumbList` for SERP breadcrumbs. Confirmed Google rich result type with no restrictions.

**Priority: Medium**

### 3.4 `Service` — Home page (additive)

Optional. `Service` schema can help surface for service-intent queries. **Priority: Low.**

### 3.5 `Event` (Webinar/Demo) — `/en/book-a-demo`

`Event` not appropriate (no fixed dates). Breadcrumb (3.3) is the better priority here.

**Priority: Low**

## 4. Recommended JSON-LD — Copy-Paste Ready

### Fix A — `SoftwareApplication` to home page only + improvements

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TrueCalling",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Built for recruiting teams, TrueCalling turns a job description into qualified candidates in minutes. EMILY™, our AI copilot, handles matching and multichannel outreach on WhatsApp, email, and phone.",
  "url": "https://truecalling.app/en",
  "image": {
    "@type": "ImageObject",
    "url": "https://truecalling.app/brand/truecalling-vertical.png",
    "width": 800,
    "height": 600
  },
  "inLanguage": "en",
  "datePublished": "2025-01-01",
  "dateModified": "2026-05-06",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "595",
    "highPrice": "895",
    "offerCount": "2"
  }
}
```

Move from `app/[locale]/layout.tsx` to `app/[locale]/page.tsx`. `offerCount` corrected to `"2"`.

### Fix B — Add `Organization` + `WebSite` to root layout (uses @graph)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://truecalling.app/#organization",
      "name": "TrueCalling",
      "url": "https://truecalling.app",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://truecalling.app/#logo",
        "url": "https://truecalling.app/brand/truecalling-vertical.png",
        "width": 512, "height": 512,
        "caption": "TrueCalling"
      },
      "image": { "@id": "https://truecalling.app/#logo" },
      "description": "AI sourcing, matching and multi-channel outreach for modern recruiting teams.",
      "email": "hello@truecalling.ai",
      "foundingDate": "2024",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.instagram.com/truecalling.ai/",
        "https://www.linkedin.com/company/truecalling-ai/",
        "https://x.com/TruecallinAI"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://truecalling.app/#website",
      "url": "https://truecalling.app",
      "name": "TrueCalling",
      "description": "AI sourcing software for recruiting teams.",
      "publisher": { "@id": "https://truecalling.app/#organization" },
      "inLanguage": "en"
    }
  ]
}
```

Update `foundingDate` and logo dimensions per actual values.

### Fix C — Add `image`, `dateModified`, `logo` to `BlogPosting`

In `app/[locale]/blog/[slug]/page.tsx`, update `ldJson` to include missing fields:

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "AI Sourcing in 2026: The Complete Guide for Recruiters (Methods, Tools, Examples)",
  "description": "AI sourcing in 2026: methods, tools, real-world examples...",
  "image": {
    "@type": "ImageObject",
    "url": "https://truecalling.app/og/ai-sourcing-guide-2026.jpg",
    "width": 1200,
    "height": 630
  },
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "author": {
    "@type": "Organization",
    "name": "TrueCalling",
    "url": "https://truecalling.app",
    "@id": "https://truecalling.app/#organization"
  },
  "publisher": {
    "@type": "Organization",
    "name": "TrueCalling",
    "url": "https://truecalling.app",
    "@id": "https://truecalling.app/#organization",
    "logo": {
      "@type": "ImageObject",
      "url": "https://truecalling.app/brand/truecalling-vertical.png",
      "width": 512, "height": 512
    }
  },
  "keywords": "AI sourcing",
  "inLanguage": "en",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://truecalling.app/en/blog/ai-sourcing-guide-2026"
  }
}
```

**Implementation:** Add optional `image` field to the `Article` type and populate per article. Fall back to generic blog OG image when missing. `image` is **required** for Google Article rich results.

### Fix D — `BreadcrumbList` for Blog Index

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://truecalling.app/en" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://truecalling.app/en/blog" }
  ]
}
```

### Fix E — `BreadcrumbList` for Blog Articles

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://truecalling.app/en" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://truecalling.app/en/blog" },
    { "@type": "ListItem", "position": 3, "name": "AI Sourcing in 2026: …", "item": "https://truecalling.app/en/blog/ai-sourcing-guide-2026" }
  ]
}
```

`name` and `item` at position 3 dynamically rendered from `article.title` and constructed slug URL.

## 5. Implementation Priority Summary

| Priority | Issue | Fix |
|---|---|---|
| Critical | `SoftwareApplication` injected on every locale page → type collision | Move to `page.tsx` (home only) |
| Critical | No `Organization` block site-wide | Add Fix B to layout |
| Critical | `BlogPosting` missing `image` → ineligible for Google rich results | Add `image` field + Fix C |
| Critical | `BlogPosting` missing `publisher.logo` | Covered by Fix C + Fix B `@id` ref |
| Medium | `BlogPosting` missing `dateModified` | Add to Fix C (= `datePublished` minimum) |
| Medium | No `BreadcrumbList` on blog | Fix D + Fix E |
| Medium | No `WebSite` block | Covered by Fix B |
| Info | `FAQPage` on commercial site — no Google rich result, AI citation value retained | No action; consider SSR migration |
| Info | `FAQPage` injected client-side | Refactor `FAQJsonLd` to server component |
| Low | `SoftwareApplication.offers.offerCount: "3"` | Correct to `"2"` |
| Low | No `Service` schema | Optional additive |
