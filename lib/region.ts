/* ============================================================
   Region detection — server-side only.
   Reads request headers (Vercel/Cloudflare geo) + cookie
   override and resolves to a Region. Pure data (Region type,
   REGION_PRICES) lives in lib/region-data.ts so it can be
   imported from client components.
   ============================================================ */

import "server-only";
import { headers, cookies } from "next/headers";
import type { Region } from "./region-data";

const US_COUNTRIES = new Set(["US"]);
const APAC_PREMIUM = new Set(["SG", "JP", "KR", "HK"]);
const APAC_VOLUME = new Set([
  "IN", "ID", "VN", "TH", "PH", "MY", "KH", "LA", "MM", "BN", "TL",
]);
const AFRICA_COUNTRIES = new Set([
  "DZ", "AO", "BJ", "BW", "BF", "BI", "CM", "CV", "CF", "TD", "KM", "CG", "CD",
  "CI", "DJ", "EG", "GQ", "ER", "SZ", "ET", "GA", "GM", "GH", "GN", "GW", "KE",
  "LS", "LR", "LY", "MG", "MW", "ML", "MR", "MU", "MA", "MZ", "NA", "NE", "NG",
  "RW", "ST", "SN", "SC", "SL", "SO", "ZA", "SS", "SD", "TZ", "TG", "TN", "UG",
  "ZM", "ZW",
]);

/**
 * Crawlers and AI assistants always see Europe pricing so the publicly
 * indexed page is consistent. Googlebot crawls from the US — without this
 * override Google would index US pricing while every EU user sees EU pricing,
 * which is a (mild) cloaking signal and a confusing SERP snippet.
 */
const BOT_PATTERN =
  /googlebot|adsbot-google|google-extended|bingbot|duckduckbot|yandex|baiduspider|gptbot|claudebot|anthropic-ai|perplexitybot|chatgpt-user|oai-searchbot|applebot|ccbot/i;

function countryToRegion(country: string): Region {
  const c = country.toUpperCase();
  if (US_COUNTRIES.has(c)) return "US";
  if (APAC_PREMIUM.has(c)) return "APAC_PREMIUM";
  if (APAC_VOLUME.has(c)) return "APAC_VOLUME";
  if (AFRICA_COUNTRIES.has(c)) return "AFRICA";
  return "EU";
}

function isValidRegion(value: string | undefined): value is Region {
  return (
    value === "EU" ||
    value === "US" ||
    value === "APAC_PREMIUM" ||
    value === "APAC_VOLUME" ||
    value === "AFRICA"
  );
}

export function getRegion(): Region {
  const h = headers();

  // Local dev / QA override via cookie: set "tc_region=US" in DevTools
  // to preview a region without spoofing IP headers.
  const override = cookies().get("tc_region")?.value;
  if (isValidRegion(override)) return override;

  const ua = h.get("user-agent") || "";
  if (BOT_PATTERN.test(ua)) return "EU";

  const country =
    h.get("x-vercel-ip-country") ||
    h.get("cf-ipcountry") ||
    "";
  if (!country) return "EU";
  return countryToRegion(country);
}
