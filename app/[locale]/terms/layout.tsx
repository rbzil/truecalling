import { type Locale, locales } from "@/lib/i18n-config";
import { SubRouteLayout } from "@/components/SubRouteLayout";

export default function TermsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale as Locale;
  if (!(locales as readonly string[]).includes(locale)) return children;
  return (
    <SubRouteLayout route="terms" locale={locale}>
      {children}
    </SubRouteLayout>
  );
}
