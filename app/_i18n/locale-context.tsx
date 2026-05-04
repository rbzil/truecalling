"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import {
  locales,
  rtlLocales,
  getLocalizedPath,
  type Locale,
  type RouteKey,
} from "@/lib/i18n-config";
import type { Dictionary, DictKey } from "@/lib/get-dictionary";

/* ============================================================
   Locale context — fed from the server-rendered `app/[locale]/layout.tsx`.
   Source of truth is the URL locale segment (no localStorage anymore).
   This file's API (`useT`, `useLocale`) stays the same so existing
   `useT()` callers continue to work without changes.
   ============================================================ */

type Ctx = {
  locale: Locale;
  t: (key: DictKey) => string;
  isRTL: boolean;
};

const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Dictionary;
  children: React.ReactNode;
}) {
  // Reflect locale onto <html> for accessibility + RTL.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = rtlLocales.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  const value = useMemo<Ctx>(
    () => ({
      locale,
      t: (key) => dictionary[key] ?? key,
      isRTL: rtlLocales.includes(locale),
    }),
    [locale, dictionary],
  );

  return <LocaleCtx.Provider value={value}>{children}</LocaleCtx.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleCtx);
  if (!ctx) throw new Error("useLocale must be used inside LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}

/** Build a locale-correct href for a known route + optional hash/sub-path. */
export function useLocalizedHref() {
  const { locale } = useLocale();
  return (route: RouteKey, opts?: { hash?: string; subPath?: string }) => {
    const base = getLocalizedPath(route, locale);
    const sub = opts?.subPath ? `/${opts.subPath}` : "";
    const hash = opts?.hash ?? "";
    return `${base}${sub}${hash}`;
  };
}

/* Re-export locale list for convenience (some components iterate over it). */
export { locales };
export type { Locale };
