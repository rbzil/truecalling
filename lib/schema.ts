/**
 * Schema.org JSON-LD generators for TrueCalling.
 * All emit Schema.org-compliant objects ready for JSON.stringify().
 *
 * Usage:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }} />
 */

import { SITE_URL } from "./seo-metadata";
import { getLocalizedPath, type Locale } from "./i18n-config";

const LOGO_URL = `${SITE_URL}/brand/truecalling-vertical.png`;
const LOGO_WIDTH = 298;
const LOGO_HEIGHT = 298;

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/**
 * Single Organization node referenced by every other schema via @id.
 * Renders site-wide (root layout).
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "TrueCalling",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
      width: LOGO_WIDTH,
      height: LOGO_HEIGHT,
    },
    description:
      "AI sourcing software for recruiters. AI copilot EMILY, TrueFit 360 candidate matching, multichannel outreach (WhatsApp, email, phone).",
    foundingDate: "2024",
    sameAs: [
      "https://www.linkedin.com/company/truecalling-app",
      "https://www.instagram.com/truecalling.ai/",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE_URL,
    name: "TrueCalling",
    publisher: { "@id": ORG_ID },
    inLanguage: ["en", "fr", "he", "pt-BR", "es", "de", "it", "nl"],
  };
}

/** Home-page only. */
export function softwareApplicationSchema(
  locale: Locale,
  description: string,
  offers?: { priceCurrency: string; lowPrice: number; highPrice: number },
) {
  const o = offers ?? { priceCurrency: "EUR", lowPrice: 595, highPrice: 895 };
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrueCalling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: `${SITE_URL}${getLocalizedPath("home", locale)}`,
    image: LOGO_URL,
    inLanguage: locale,
    publisher: { "@id": ORG_ID },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: o.priceCurrency,
      lowPrice: String(o.lowPrice),
      highPrice: String(o.highPrice),
      offerCount: "3",
    },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export type BlogPostingInput = {
  title: string;
  description: string;
  url: string;
  slug: string;
  publishedAt: string;
  modifiedAt?: string;
  /**
   * One or more keywords describing the article. Accepts a comma-separated
   * string ("AI sourcing, recruiting, talent acquisition") or a pre-split
   * array. The schema always emits a JSON array of strings, never a comma
   * string — Google's BlogPosting / Article rich-results parser handles
   * both but the array form is the spec-correct shape.
   */
  keyword?: string | string[];
  locale: Locale;
  image?: string;
  /** Named author for E-E-A-T. Falls back to Organization (@id) when absent. */
  author?: {
    id: string;
    name: string;
    url?: string;
    sameAs?: string[];
    jobTitle?: string;
  };
};

/**
 * BlogPosting compliant with Google Article structured data:
 * - image (required)
 * - dateModified (recommended; falls back to datePublished)
 * - publisher.logo with explicit ImageObject + dimensions
 */
function normalizeKeywords(k: string | string[] | undefined): string[] | undefined {
  if (!k) return undefined;
  const arr = Array.isArray(k) ? k : k.split(",").map((s) => s.trim());
  const cleaned = arr.filter(Boolean);
  return cleaned.length ? cleaned : undefined;
}

export function blogPostingSchema(input: BlogPostingInput) {
  const image = input.image ?? `${SITE_URL}/brand/truecalling-vertical.png`;
  const keywords = normalizeKeywords(input.keyword);
  const author = input.author
    ? {
        "@type": "Person" as const,
        "@id": `${SITE_URL}/#author-${input.author.id}`,
        name: input.author.name,
        ...(input.author.jobTitle ? { jobTitle: input.author.jobTitle } : {}),
        ...(input.author.url ? { url: input.author.url } : {}),
        ...(input.author.sameAs ? { sameAs: input.author.sameAs } : {}),
        worksFor: { "@id": ORG_ID },
      }
    : { "@id": ORG_ID };
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: [image],
    datePublished: input.publishedAt,
    dateModified: input.modifiedAt ?? input.publishedAt,
    author,
    publisher: {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "TrueCalling",
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
        width: LOGO_WIDTH,
        height: LOGO_HEIGHT,
      },
    },
    ...(keywords ? { keywords } : {}),
    inLanguage: input.locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    url: input.url,
  };
}

export type FaqEntry = { question: string; answer: string };

/**
 * FAQPage schema. Per Google's Aug 2023 update, FAQ rich results in SERPs
 * are restricted to government and healthcare sites. On a commercial SaaS
 * site this WILL NOT render a SERP rich snippet — but it still benefits
 * AI/LLM citation surfaces (Google AIO, ChatGPT Search, Perplexity, Bing
 * Copilot) which read structured data to ground their answers.
 */
export function faqPageSchema(faqs: FaqEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Stringify + escape `</script>` so it's safe in dangerouslySetInnerHTML. */
export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
