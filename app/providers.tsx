"use client";

import { ThemeProvider } from "next-themes";
import { LocaleProvider } from "./_i18n/locale-context";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LocaleProvider>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
