/* ============================================================
   Pure data — region tiers + pricing.
   This file has no server-only side effects, so it is safe to
   import from client components. The server-side region
   detection lives in lib/region.ts.
   ============================================================ */

export type Region = "EU" | "US" | "APAC_PREMIUM" | "APAC_VOLUME" | "AFRICA";

export const REGION_LABELS: Record<Region, string> = {
  EU: "Europe",
  US: "United States",
  APAC_PREMIUM: "APAC Premium",
  APAC_VOLUME: "APAC Volume",
  AFRICA: "Africa",
};

/** Per-tier monthly price + currency symbol. Enterprise is always on quote. */
export const REGION_PRICES: Record<
  Region,
  { starter: number; core: number; symbol: string; currency: string }
> = {
  EU:           { starter: 595, core: 895,  symbol: "€", currency: "EUR" },
  US:           { starter: 795, core: 1095, symbol: "$", currency: "USD" },
  APAC_PREMIUM: { starter: 695, core: 995,  symbol: "$", currency: "USD" },
  APAC_VOLUME:  { starter: 495, core: 795,  symbol: "$", currency: "USD" },
  AFRICA:       { starter: 395, core: 695,  symbol: "$", currency: "USD" },
};

/** Render a tier amount with thousands grouping: 1095 -> "1,095". */
export function formatPrice(amount: number, region: Region): string {
  const { symbol } = REGION_PRICES[region];
  // Locale-agnostic thousands grouping with a comma — matches the marketing
  // copy already on the page ($1,095) and avoids the long-form Intl
  // NumberFormat surprises (e.g. NBSP separators in fr-FR).
  const grouped = amount.toLocaleString("en-US");
  return `${symbol}${grouped}`;
}
