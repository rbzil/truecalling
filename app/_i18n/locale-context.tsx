"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { DICT, LOCALES, RTL_LOCALES, type Locale } from "./dictionary";

const STORAGE_KEY = "tc-locale";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: keyof (typeof DICT)["fr"]) => string;
  isRTL: boolean;
};

const LocaleCtx = createContext<Ctx | null>(null);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  // Hydrate from localStorage / browser language on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && LOCALES.includes(stored)) {
        setLocaleState(stored);
        return;
      }
      const nav = navigator.language;
      const match = LOCALES.find(
        (l) => l === nav || l.split("-")[0] === nav.split("-")[0],
      );
      if (match) setLocaleState(match);
    } catch {
      // localStorage unavailable — fall through
    }
  }, []);

  // Sync html dir + lang attributes for RTL and a11y
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.includes(locale) ? "rtl" : "ltr";
  }, [locale]);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    (key: keyof (typeof DICT)["fr"]) => DICT[locale][key] ?? DICT.fr[key],
    [locale],
  );

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, t, isRTL: RTL_LOCALES.includes(locale) }),
    [locale, setLocale, t],
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
