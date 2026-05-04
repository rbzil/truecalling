import "server-only";
import type { Locale } from "./i18n-config";

/* The dictionary shape is derived from en.json — every locale must match it. */
import type enDict from "../locales/en.json";
export type Dictionary = typeof enDict;
export type DictKey = keyof Dictionary;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  fr: () => import("../locales/fr.json").then((m) => m.default as Dictionary),
  en: () => import("../locales/en.json").then((m) => m.default as Dictionary),
  he: () => import("../locales/he.json").then((m) => m.default as Dictionary),
  "pt-BR": () => import("../locales/pt-BR.json").then((m) => m.default as Dictionary),
  es: () => import("../locales/es.json").then((m) => m.default as Dictionary),
  de: () => import("../locales/de.json").then((m) => m.default as Dictionary),
  it: () => import("../locales/it.json").then((m) => m.default as Dictionary),
  nl: () => import("../locales/nl.json").then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}
