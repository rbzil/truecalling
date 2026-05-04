import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  locales,
  rtlLocales,
  getLocalizedPath,
  type Locale,
} from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { Providers } from "../providers";
import { SiteFooter } from "@/components/SiteFooter";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const SITE_URL = "https://truecalling.app";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return {};
  const dict = await getDictionary(locale);

  // Hreflang alternates for every supported locale
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${SITE_URL}${getLocalizedPath("home", l)}`;
  }
  languages["x-default"] = `${SITE_URL}/en`;

  return {
    title: dict.hero_h1_a + " " + dict.hero_h1_b,
    description: dict.meta_description,
    alternates: {
      canonical: `${SITE_URL}${getLocalizedPath("home", locale)}`,
      languages,
    },
    openGraph: {
      locale: locale.replace("-", "_"),
      url: `${SITE_URL}${getLocalizedPath("home", locale)}`,
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

  // Locale-aware structured data (one per locale page)
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrueCalling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: `${dictionary.hero_subtitle_line1} ${dictionary.hero_subtitle_line2}`,
    url: `${SITE_URL}${getLocalizedPath("home", locale)}`,
    image: `${SITE_URL}/brand/truecalling-vertical.png`,
    inLanguage: locale,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "595",
      highPrice: "895",
      offerCount: "3",
    },
  };

  return (
    <Providers locale={locale} dictionary={dictionary}>
      {/* The locale provider syncs <html lang dir> via effect; we also set
         dir here on a wrapper so SSR markup is correct for RTL flipping. */}
      <div dir={dir} lang={locale}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
        {children}
        <SiteFooter />
      </div>
    </Providers>
  );
}
