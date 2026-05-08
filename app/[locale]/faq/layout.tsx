import type { Metadata } from "next";
import { type Locale, locales } from "@/lib/i18n-config";
import { buildAlternates, OG_IMAGES } from "@/lib/seo-metadata";
import { getSeoMeta } from "@/lib/seo-translations";
import { SubRouteLayout } from "@/components/SubRouteLayout";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return {};

  const { title, description } = getSeoMeta("faq", locale);
  const alternates = buildAlternates("faq", locale);

  return {
    title,
    description,
    alternates,
    openGraph: {
      type: "website",
      title,
      description,
      url: alternates.canonical as string,
      locale: locale.replace("-", "_"),
      siteName: "TrueCalling",
      images: [...OG_IMAGES],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGES[0].url] },
  };
}

export default function FaqLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return children;
  return (
    <SubRouteLayout route="faq" locale={locale}>
      {children}
    </SubRouteLayout>
  );
}
