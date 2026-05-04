"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "./_i18n/locale-context";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";

export function Providers({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
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
        {children}
      </LocaleProvider>
    </ThemeProvider>
  );
}
