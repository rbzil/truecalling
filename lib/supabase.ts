import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/* ============================================================
   Supabase server client — uses the service_role key so RLS is
   bypassed for inserts coming from trusted server actions and
   route handlers. This file must NEVER be imported from a
   client component.
   ============================================================ */

let cachedClient: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient | null {
  if (cachedClient) return cachedClient;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;

  cachedClient = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cachedClient;
}
