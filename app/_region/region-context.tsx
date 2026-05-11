"use client";

import { createContext, useContext } from "react";
import type { Region } from "@/lib/region-data";

/* ============================================================
   Region context — fed from the server-rendered locale layout.
   getRegion() runs server-side (reads IP geo headers + cookie
   override) and the resolved Region travels here via props.
   Client components consume it with useRegion().
   ============================================================ */

const RegionCtx = createContext<Region>("EU");

export function RegionProvider({
  region,
  children,
}: {
  region: Region;
  children: React.ReactNode;
}) {
  return <RegionCtx.Provider value={region}>{children}</RegionCtx.Provider>;
}

export function useRegion(): Region {
  return useContext(RegionCtx);
}
