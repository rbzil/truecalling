/**
 * Schema.org JSON-LD generators for TrueCalling.
 * All emit Schema.org-compliant objects ready for JSON.stringify().
 *
 * Usage:
 *   <script type="application/ld+json"
 *     dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }} />
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

/**
 * WebSite node, also rendered site-wide.
 * Carries an empty SearchAction stub Google ignores until/unless we add a site-search.
 */
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

/**
 * Home-page only. Describes the TrueCalling SaaS product.
 */
export function softwareApplicationSchema(
  locale: Locale,
  description: string,
) {
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
      priceCurrency: "USD",
      lowPrice: "595",
      highPrice: "895",
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
  keyword?: string;
  locale: Locale;
  image?: string;
};

/**
 * BlogPosting compliant with Google's Article structured data requirements:
 * - image (required)
 * - dateModified (recommended; falls back to datePublished)
 * - publisher.logo with explicit ImageObject + dimensions
 * - mainEntityOfPage @id matching the canonical URL
 */
export function blogPostingSchema(input: BlogPostingInput) {
  const image = input.image ?? `${SITE_URL}/brand/truecalling-vertical.png`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.title,
    description: input.description,
    image: [image],
    datePublished: input.publishedAt,
    dateModified: input.modifiedAt ?? input.publishedAt,
    author: { "@id": ORG_ID },
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
    keywords: input.keyword,
    inLanguage: input.locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": input.url },
    url: input.url,
  };
}

/**
 * Convenience: stringify + escape `</script>` so it's safe in
 * dangerouslySetInnerHTML across browsers.
 */
export function jsonLd(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
