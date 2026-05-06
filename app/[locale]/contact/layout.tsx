import type { Metadata } from "next";
import { type Locale, locales } from "@/lib/i18n-config";
import { buildAlternates } from "@/lib/seo-metadata";
import { getSeoMeta } from "@/lib/seo-translations";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return {};

  const { title, description } = getSeoMeta("contact", locale);
  const alternates = buildAlternates("contact", locale);

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
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
