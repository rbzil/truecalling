import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import {
  locales,
  defaultLocale,
  localizedSlug,
  canonicalSlug,
  resolveRouteFromSlug,
  blogEnabledLocales,
  type Locale,
  type RouteKey,
} from "@/lib/i18n-config";

/* ============================================================
   Middleware — three jobs:
   1. Pick a locale (cookie > Accept-Language > default) and redirect
      `/` (and unprefixed paths) to `/<locale>...`.
   2. Rewrite localized URLs (e.g. /fr/reserver-une-demo) to the canonical
      file-system path (/fr/book-a-demo) so Next.js can serve from
      app/[locale]/book-a-demo/page.tsx.
   3. Block /<locale>/blog for locales that don't publish the blog.
   ============================================================ */

const COOKIE_NAME = "NEXT_LOCALE";

function getLocale(request: NextRequest): Locale {
  // 1. Explicit cookie wins (set by the language switcher)
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value;
  if (cookieLocale && (locales as readonly string[]).includes(cookieLocale)) {
    return cookieLocale as Locale;
  }
  // 2. Negotiate from Accept-Language
  const acceptLang = request.headers.get("accept-language") ?? "";
  const negotiated = new Negotiator({ headers: { "accept-language": acceptLang } }).languages();
  try {
    return matchLocale(negotiated, locales as readonly string[], defaultLocale) as Locale;
  } catch {
    return defaultLocale;
  }
}

function withRequestHeaders(request: NextRequest, locale: Locale) {
  // Forwarded to RSC so the root <html lang> can be set per request.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-locale", locale);
  return requestHeaders;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip framework, API, public files
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/brand") ||
    pathname.includes(".") // favicon, images, robots.txt, sitemap.xml…
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  const isLocalePrefixed = first && (locales as readonly string[]).includes(first);

  // 1. No locale prefix → detect & redirect (308 = permanent, preserves PageRank)
  if (!isLocalePrefixed) {
    const locale = getLocale(request);
    const targetUrl = new URL(`/${locale}${pathname === "/" ? "" : pathname}`, request.url);
    targetUrl.search = request.nextUrl.search;
    return NextResponse.redirect(targetUrl, 308);
  }

  // 2. Locale-prefixed: handle slug rewrite
  const locale = first as Locale;
  const slug = segments[1];
  const requestHeaders = withRequestHeaders(request, locale);

  // /<locale> (home) — nothing to rewrite, but forward headers
  if (!slug) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // Resolve the localized slug → canonical route key
  const route = resolveRouteFromSlug(slug, locale);

  if (!route) {
    // Unknown slug under this locale (e.g. visiting /en/reserver-une-demo).
    // Try resolving as if it were any other locale's slug — this lets users
    // share a URL across locales gracefully. If we find a match, redirect to
    // the locale-correct URL.
    for (const otherLocale of locales) {
      if (otherLocale === locale) continue;
      const r = resolveRouteFromSlug(slug, otherLocale);
      if (r) {
        const correctSlug = localizedSlug[r][locale];
        const tail = segments.slice(2).join("/");
        const correctPath = correctSlug
          ? `/${locale}/${correctSlug}${tail ? "/" + tail : ""}`
          : `/${locale}${tail ? "/" + tail : ""}`;
        return NextResponse.redirect(new URL(correctPath, request.url));
      }
    }
    return NextResponse.next(); // 404 will be handled by Next.js
  }

  // 3. Blog gating: only blogEnabledLocales publish the blog
  if (route === "blog" && !(blogEnabledLocales as readonly Locale[]).includes(locale)) {
    // Silently redirect to home for that locale
    return NextResponse.redirect(new URL(`/${locale}`, request.url));
  }

  // 4. If the slug is already canonical, no rewrite needed (forward headers)
  if (route === "home") {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }
  const canonical = canonicalSlug[route as Exclude<RouteKey, "home">];
  if (slug === canonical) {
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  // 5. Rewrite localized → canonical (URL stays as-is in the browser, headers forwarded)
  const tail = segments.slice(2).join("/");
  const canonicalPath = `/${locale}/${canonical}${tail ? "/" + tail : ""}`;
  const rewriteUrl = new URL(canonicalPath, request.url);
  rewriteUrl.search = request.nextUrl.search;
  return NextResponse.rewrite(rewriteUrl, {
    request: { headers: requestHeaders },
  });
}

export const config = {
  // Match everything except framework internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico|brand|.*\\..*).*)"],
};
