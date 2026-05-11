"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "./_i18n/locale-context";
import { RegionProvider } from "./_region/region-context";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";
import type { Region } from "@/lib/region-data";

export function Providers({
  locale,
  dictionary,
  region,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  region: Region;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LocaleProvider locale={locale} dictionary={dictionary}>
        <RegionProvider region={region}>{children}</RegionProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}
