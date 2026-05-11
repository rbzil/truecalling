"use client";

import { useRegion } from "./region-context";
import type { Region } from "@/lib/region-data";

/* ============================================================
   Dev-only floating switcher to preview each region without
   touching DevTools cookies. Visible only when NODE_ENV !== "production"
   so it cannot ship to prod.

   Set/clear the cookie tc_region and hard-reload so the server
   component layout re-runs getRegion().
   ============================================================ */

const REGIONS: { value: Region; label: string }[] = [
  { value: "EU", label: "🇪🇺 Europe (default)" },
  { value: "US", label: "🇺🇸 United States" },
  { value: "APAC_PREMIUM", label: "🇸🇬 APAC Premium (SG/JP/KR/HK)" },
  { value: "APAC_VOLUME", label: "🇮🇳 APAC Volume (IN/SEA)" },
  { value: "AFRICA", label: "🌍 Africa" },
];

function setRegionCookie(region: Region) {
  // 7-day cookie, path = / so every route picks it up. Hard-reload to
  // force the server layout (which reads cookies()) to re-run.
  document.cookie = `tc_region=${region}; path=/; max-age=${60 * 60 * 24 * 7}`;
  window.location.reload();
}

function clearRegionCookie() {
  document.cookie = "tc_region=; path=/; max-age=0";
  window.location.reload();
}

export function RegionDebugSwitcher() {
  // Hide in production builds — tree-shaken via the env check below.
  if (process.env.NODE_ENV === "production") return null;
  return <RegionDebugSwitcherInner />;
}

function RegionDebugSwitcherInner() {
  const current = useRegion();
  return (
    <div className="fixed bottom-4 right-4 z-[9999] rounded-2xl border border-accent/40 bg-black/85 px-3 py-2 text-xs text-white shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="mb-1 flex items-center justify-between gap-3">
        <span className="text-[10px] uppercase tracking-[0.18em] text-accent">
          Region (dev)
        </span>
        <button
          type="button"
          onClick={clearRegionCookie}
          className="text-[10px] uppercase tracking-[0.14em] text-white/60 hover:text-white"
          title="Clear cookie — defer to IP geo"
        >
          reset
        </button>
      </div>
      <select
        value={current}
        onChange={(e) => setRegionCookie(e.target.value as Region)}
        className="w-full cursor-pointer rounded-md border border-white/15 bg-black/60 px-2 py-1 text-xs text-white outline-none focus:border-accent"
      >
        {REGIONS.map((r) => (
          <option key={r.value} value={r.value}>
            {r.label}
          </option>
        ))}
      </select>
    </div>
  );
}
