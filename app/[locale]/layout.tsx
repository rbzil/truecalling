import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, rtlLocales, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { buildAlternates, OG_IMAGES } from "@/lib/seo-metadata";
import { getRegion } from "@/lib/region";
import { Providers } from "../providers";
import { RegionDebugSwitcher } from "../_region/region-debug-switcher";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const dict = await getDictionary(locale);

  const alternates = buildAlternates("home", locale);

  return {
    title: dict.hero_h1_a + " " + dict.hero_h1_b,
    description: dict.meta_description,
    alternates,
    openGraph: {
      type: "website",
      locale: locale.replace("-", "_"),
      url: alternates.canonical as string,
      siteName: "TrueCalling",
      images: [...OG_IMAGES],
    },
    twitter: { card: "summary_large_image", images: [OG_IMAGES[0].url] },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) notFound();

  const dictionary = await getDictionary(locale);
  const dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
  const region = getRegion();

  return (
    <Providers locale={locale} dictionary={dictionary} region={region}>
      {/* Organization + WebSite schemas live in the root layout so they
         render once site-wide rather than per locale. Per-page schemas
         (SoftwareApplication on home, BlogPosting on articles, BreadcrumbList
         per route) are injected from each page/layout. */}
      <div dir={dir} lang={locale}>
        {children}
        <SiteFooter />
        <RegionDebugSwitcher />
      </div>
    </Providers>
  );
}
