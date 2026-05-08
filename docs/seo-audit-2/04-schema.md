# Schema.org Audit — TrueCalling.ai
**Date:** 2026-05-07
**Score: 61 / 100**

---

## Routes Audited

| Route | Types Found |
|---|---|
| `/en` | Organization, WebSite, SoftwareApplication, BreadcrumbList |
| `/fr` | Organization, WebSite, SoftwareApplication, BreadcrumbList |
| `/he` | Organization, WebSite, SoftwareApplication, BreadcrumbList |
| `/en/book-a-demo` | Organization, WebSite, BreadcrumbList |
| `/en/faq` | Organization, WebSite, BreadcrumbList, FAQPage |
| `/en/blog` | Organization, WebSite, BreadcrumbList |
| `/en/blog/ai-sourcing-guide-2026` | Organization, WebSite, BlogPosting, BreadcrumbList |

No Microdata or RDFa detected on any route. All schema uses JSON-LD. Format is correct.

---

## Validation by Schema Type

### Organization `https://truecalling.ai/#organization`
Present on all 7 routes. Same block repeated identically.

| Check | Result |
|---|---|
| `@context` is `https://schema.org` | PASS |
| `@id` uses canonical `#organization` fragment | PASS |
| `name` present | PASS |
| `url` present and absolute | PASS |
| `logo` is ImageObject with `url`, `width`, `height` | PASS |
| `logo` dimensions (298×298) meet Google minimum (112px) | PASS |
| `sameAs` array present | PASS |
| `sameAs` covers LinkedIn and Instagram | PASS |
| `foundingDate` ISO 8601 (`"2024"`) | PASS (year-only accepted) |
| Missing: `@type` array or `SoftwareOrganization` for product clarity | INFO |
| Missing: Twitter/X profile in `sameAs` | INFO |
| Missing: `contactPoint` | INFO |

**Sub-issue — `logo.url` points to a square PNG (298×298).** Google recommends a logo that is at least 112×112 and no larger than 600×60 for the `logo` property on Organization. A square icon is valid for `logo` but Google's NewsArticle logo guidelines prefer a wide rectangular lockup (≤600px wide, ≤60px tall). For a SaaS product this is acceptable at Organization level; flag for future when pursuing News eligibility.

---

### WebSite `https://truecalling.ai/#website`
Present on all 7 routes.

| Check | Result |
|---|---|
| `@context` is `https://schema.org` | PASS |
| `@id` uses `#website` fragment | PASS |
| `url` is root canonical | PASS |
| `publisher` references `#organization` via `@id` | PASS |
| Missing: `potentialAction` (SearchAction for Sitelinks Searchbox) | WARN |
| Missing: `@graph` wrapping to formally link Organization ↔ WebSite | WARN |

**Note on `@graph`:** Organization and WebSite blocks are emitted as separate `<script>` tags rather than a single `@graph` array. Google can resolve the `@id` cross-references without a graph envelope, but best practice is to co-locate them inside one `@graph` block for unambiguous node linking.

---

### SoftwareApplication
Present on: `/en`, `/fr`, `/he`. **Absent on `/en/book-a-demo`, `/en/faq`, `/en/blog`, `/en/blog/ai-sourcing-guide-2026`.**

| Check | Result |
|---|---|
| Not bleeding to sub-routes | PASS |
| `applicationCategory` = `"BusinessApplication"` | PASS |
| `operatingSystem` = `"Web"` | PASS |
| `offers` AggregateOffer with `lowPrice`, `highPrice`, `offerCount` | PASS |
| `priceCurrency` = `"USD"` | PASS |
| `publisher` references `#organization` via `@id` | PASS |
| Missing: `aggregateRating` (Google requires this for rich results eligibility) | CRITICAL |
| Missing: `@id` on the SoftwareApplication node itself | WARN |
| Missing: `screenshot` property | INFO |
| `image` present | PASS |
| `offers.url` pointing to pricing page | INFO |

**Critical:** Google's rich result for SoftwareApplication requires either `aggregateRating` or `offers`. Offers are present, so the block is eligible, but adding `aggregateRating` (even a minimal one once reviews exist) would strengthen the rich result and unlock star display in SERPs.

---

### FAQPage on `/en/faq`

| Check | Result |
|---|---|
| `@type` is `FAQPage` | PASS |
| `mainEntity` is array of `Question` + `Answer` pairs | PASS |
| All 6 questions have `acceptedAnswer.@type` = `Answer` | PASS |
| All answers have non-empty `text` | PASS |
| No deprecated types used | PASS |
| **Google rich results restriction (Aug 2023): FAQPage eligible only for government/healthcare sites** | INFO |

This is a commercial SaaS site. Google will not render FAQ rich results for this page. The block is not harmful, and FAQPage retains value for AI/LLM answer surfacing (ChatGPT, Perplexity, Google AI Overviews). Retain as-is unless clean page weight is a priority. Do not add FAQPage to additional commercial sub-pages.

---

### BreadcrumbList — per route

| Route | Items | `item` URLs absolute | `position` sequential | Result |
|---|---|---|---|---|
| `/en` | 1 item (root only) | YES | YES | WARN — single-item breadcrumb adds no navigational value; Google ignores single-node breadcrumbs for rich results |
| `/fr` | 1 item | YES | YES | WARN — same as above |
| `/he` | 1 item | YES | YES | WARN — same as above |
| `/en/book-a-demo` | 2 items | YES | YES | PASS |
| `/en/faq` | 2 items | YES | YES | PASS |
| `/en/blog` | 2 items | YES | YES | PASS |
| `/en/blog/ai-sourcing-guide-2026` | 3 items | YES | YES | PASS |

**Fix for home routes:** Either omit BreadcrumbList on the root locale redirect pages (`/en`, `/fr`, `/he`) or expand to at least 2 items if a meaningful parent exists.

---

### BlogPosting on `/en/blog/ai-sourcing-guide-2026`

| Check | Result |
|---|---|
| `@context` is `https://schema.org` | PASS |
| `@type` = `BlogPosting` | PASS |
| `headline` present and under 110 chars | PASS |
| `description` present | PASS |
| `image` present and is array with absolute URL | PASS |
| `datePublished` ISO 8601 | PASS |
| `dateModified` present and ISO 8601 | PASS |
| `author.@type` = `Person` | PASS |
| `author.@id` present (`#author-editorial`) | PASS |
| `author.name` present | PASS |
| `author.jobTitle` present | PASS |
| `author.sameAs` present (LinkedIn company URL) | WARN — `author.sameAs` should point to a **Person** profile, not the company LinkedIn page |
| `author.worksFor` references `#organization` via `@id` | PASS |
| `author.url` points to `/en` homepage, not an author bio page | WARN |
| `publisher` is Organization with `@id` and `logo` ImageObject | PASS |
| `publisher.logo` dimensions (298×298) present | PASS |
| `mainEntityOfPage` is WebPage with `@id` matching page URL | PASS |
| `url` present and absolute | PASS |
| `keywords` present (single value) | WARN — use an array for multiple keywords |
| Missing: `wordCount` | INFO |
| Missing: `articleSection` | INFO |
| Missing: `isPartOf` linking to the blog WebPage | INFO |
| Image is brand logo, not article-specific OG image | WARN |

**`author.sameAs` fix:** The value `https://www.linkedin.com/company/truecalling-app` is a company page. For a `Person` author, `sameAs` should be a personal LinkedIn profile URL, a Wikipedia page, or another person-level identifier. Use the company `@id` reference on `worksFor` only.

---

### Blog Index `/en/blog`

| Check | Result |
|---|---|
| Organization present | PASS |
| WebSite present | PASS |
| BreadcrumbList present | PASS |
| Missing: `CollectionPage` or `Blog` type for the index | WARN |
| Missing: `ItemList` of articles (enables sitelink-style rich results for blog listing) | INFO |

---

### No Deprecated Types

| Type | Present | Status |
|---|---|---|
| HowTo | NO | PASS |
| SpecialAnnouncement | NO | PASS |
| CourseInfo / EstimatedSalary / LearningVideo | NO | PASS |

---

## Consolidated Error List

### Critical (blocks rich result eligibility)
1. **`SoftwareApplication` missing `aggregateRating`** — block is technically eligible via `offers`, but `aggregateRating` is the primary signal Google uses for star display in SERPs. Add once the product has public reviews.

### Warnings (reduce quality / missed opportunities)
2. **No `@graph` envelope** — Organization and WebSite are emitted as separate `<script>` tags. Consolidate into one `@graph` array for explicit node linking.
3. **`WebSite` missing `potentialAction` SearchAction** — required for Sitelinks Searchbox eligibility.
4. **Single-item BreadcrumbList on `/en`, `/fr`, `/he`** — Google ignores single-node breadcrumbs. Remove or expand.
5. **`BlogPosting.author.sameAs` points to company LinkedIn** — must be a person-level URL to comply with Google's author credibility guidelines.
6. **`BlogPosting.author.url` points to homepage `/en`** — should point to a dedicated author bio page (e.g., `/en/team/editorial`).
7. **`BlogPosting.image` is the brand logo** — Google requires article images to be representative of the article content, not a logo, for Article rich results. Use a unique OG/hero image per article.
8. **`BlogPosting.keywords`** is a single string; use a JSON array: `["AI sourcing","recruiting automation","talent acquisition"]`.
9. **Blog index `/en/blog` missing `CollectionPage` + `ItemList`** — opportunity for sitelink-style article listing in SERPs.

### Info (no eligibility impact, GEO/AIO upside)
10. **`FAQPage` on `/en/faq`** — no Google rich result for commercial sites (Aug 2023). Retain for AI/LLM citations.
11. **`Organization` missing Twitter/X in `sameAs`** — add if account exists.
12. **`SoftwareApplication` missing `screenshot`** — recommended by Google for app-panel display.
13. **`BlogPosting` missing `wordCount`, `articleSection`, `isPartOf`** — increases AIO eligibility signals.
14. **`Organization` logo** is square (298×298); consider adding a wide lockup variant for future News/Publisher eligibility.

---

## Recommended JSON-LD Fixes

### Fix 1 — @graph consolidation + WebSite SearchAction (global head, all routes)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://truecalling.ai/#organization",
      "name": "TrueCalling",
      "url": "https://truecalling.ai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://truecalling.ai/brand/truecalling-vertical.png",
        "width": 298,
        "height": 298
      },
      "description": "AI sourcing software for recruiters. AI copilot EMILY, TrueFit 360 candidate matching, multichannel outreach (WhatsApp, email, phone).",
      "foundingDate": "2024",
      "sameAs": [
        "https://www.linkedin.com/company/truecalling-app",
        "https://www.instagram.com/truecalling.ai/"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://truecalling.ai/#website",
      "url": "https://truecalling.ai",
      "name": "TrueCalling",
      "publisher": { "@id": "https://truecalling.ai/#organization" },
      "inLanguage": ["en","fr","he","pt-BR","es","de","it","nl"],
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://truecalling.ai/en/blog?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ]
}
```

### Fix 2 — BlogPosting corrections (article pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "AI Sourcing in 2026: The Complete Guide for Recruiters (Methods, Tools, Examples)",
  "description": "AI sourcing in 2026: methods, tools, real-world examples, matching scores, and the recommended stack to hire twice as fast without sacrificing quality.",
  "image": [
    "https://truecalling.ai/blog/og/ai-sourcing-guide-2026.jpg"
  ],
  "datePublished": "2026-04-22",
  "dateModified": "2026-04-22",
  "author": {
    "@type": "Person",
    "@id": "https://truecalling.ai/#author-editorial",
    "name": "TrueCalling Editorial",
    "jobTitle": "Talent Intelligence Team",
    "url": "https://truecalling.ai/en/team",
    "worksFor": { "@id": "https://truecalling.ai/#organization" }
  },
  "publisher": {
    "@type": "Organization",
    "@id": "https://truecalling.ai/#organization",
    "name": "TrueCalling",
    "logo": {
      "@type": "ImageObject",
      "url": "https://truecalling.ai/brand/truecalling-vertical.png",
      "width": 298,
      "height": 298
    }
  },
  "keywords": ["AI sourcing","recruiting automation","talent acquisition","EMILY AI copilot"],
  "inLanguage": "en",
  "articleSection": "Guides",
  "wordCount": 3500,
  "isPartOf": { "@id": "https://truecalling.ai/en/blog" },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://truecalling.ai/en/blog/ai-sourcing-guide-2026"
  },
  "url": "https://truecalling.ai/en/blog/ai-sourcing-guide-2026"
}
```

### Fix 3 — Blog index CollectionPage + ItemList (`/en/blog`)

```json
{
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://truecalling.ai/en/blog",
  "name": "Blog · TrueCalling",
  "url": "https://truecalling.ai/en/blog",
  "inLanguage": "en",
  "isPartOf": { "@id": "https://truecalling.ai/#website" },
  "publisher": { "@id": "https://truecalling.ai/#organization" },
  "hasPart": [
    {
      "@type": "BlogPosting",
      "@id": "https://truecalling.ai/en/blog/ai-sourcing-guide-2026",
      "headline": "AI Sourcing in 2026: The Complete Guide for Recruiters (Methods, Tools, Examples)",
      "url": "https://truecalling.ai/en/blog/ai-sourcing-guide-2026",
      "datePublished": "2026-04-22"
    }
  ]
}
```

---

## Score Breakdown

| Category | Max | Score | Notes |
|---|---|---|---|
| Organization (id, logo, sameAs) | 15 | 12 | Missing @graph envelope, no Twitter sameAs |
| WebSite (id, publisher, SearchAction) | 10 | 5 | SearchAction absent |
| SoftwareApplication (eligibility, correct routes) | 15 | 10 | No aggregateRating, no @id on node |
| BlogPosting (all required + recommended fields) | 20 | 12 | author.sameAs wrong, image is logo not article art, keywords string not array |
| BreadcrumbList (all routes, multi-node) | 15 | 10 | Single-node on 3 home routes |
| Blog index schema (CollectionPage/ItemList) | 10 | 0 | Entirely missing |
| No deprecated types | 10 | 10 | Clean |
| FAQPage handling | 5 | 2 | Present on commercial page (info-level, not critical) |
| **Total** | **100** | **61** | |
