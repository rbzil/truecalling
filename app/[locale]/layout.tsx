import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  locales,
  rtlLocales,
  getLocalizedPath,
  type Locale,
} from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { buildAlternates, SITE_URL } from "@/lib/seo-metadata";
import { Providers } from "../providers";
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
      locale: locale.replace("-", "_"),
      url: alternates.canonical as string,
    },
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

  // Organization schema
  const organizationLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TrueCalling",
    url: SITE_URL,
    logo: `${SITE_URL}/brand/truecalling-vertical.png`,
    description: "AI sourcing software for recruiters",
    foundingDate: "2023",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: locales,
    },
  };

  // WebSite schema
  const websiteLdJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TrueCalling",
    url: SITE_URL,
    description: "AI sourcing software for recruiters",
    inLanguage: locale,
  };

  return (
    <Providers locale={locale} dictionary={dictionary}>
      {/* The locale provider syncs <html lang dir> via effect; we also set
         dir here on a wrapper so SSR markup is correct for RTL flipping. */}
      <div dir={dir} lang={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLdJson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLdJson) }}
        />
        {children}
        <SiteFooter />
      </div>
    </Providers>
  );
}
