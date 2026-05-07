import type { ReactNode } from "react";
import { type Locale, type RouteKey, getLocalizedPath } from "@/lib/i18n-config";
import { SITE_URL } from "@/lib/seo-metadata";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { getSeoMeta } from "@/lib/seo-translations";

type Props = {
  route: Exclude<RouteKey, "home" | "blog">;
  locale: Locale;
  children: ReactNode;
};

/**
 * Server-rendered wrapper for client sub-route pages. Injects the
 * BreadcrumbList JSON-LD (Home > {Route}) alongside the page content.
 */
export function SubRouteLayout({ route, locale, children }: Props) {
  const homeUrl = `${SITE_URL}${getLocalizedPath("home", locale)}`;
  const routeUrl = `${SITE_URL}${getLocalizedPath(route, locale)}`;
  const { title } = getSeoMeta(route, locale);

  const breadcrumb = breadcrumbSchema([
    { name: "TrueCalling", url: homeUrl },
    { name: title, url: routeUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />
      {children}
    </>
  );
}
