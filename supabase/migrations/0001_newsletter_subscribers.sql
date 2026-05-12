-- =============================================================
-- Newsletter subscribers table
-- =============================================================
-- Stores every email collected from the website newsletter popup
-- and other lead-capture surfaces. The source-of-truth lives here;
-- Resend handles the welcome email at signup time.
-- =============================================================

create extension if not exists "uuid-ossp";

create table if not exists public.newsletter_subscribers (
  id            uuid primary key default uuid_generate_v4(),
  email         text not null,
  locale        text,
  source        text default 'popup_landing',
  utm_source    text,
  utm_medium    text,
  utm_campaign  text,
  subscribed_at timestamptz not null default now(),
  confirmed_at  timestamptz,
  unsubscribed_at timestamptz,
  ip_country    text,
  user_agent    text,
  notes         text
);

-- Case-insensitive uniqueness on email so we don't store duplicates
-- when the same person signs up twice with different casing.
create unique index if not exists newsletter_subscribers_email_lower_unique
  on public.newsletter_subscribers (lower(email));

create index if not exists newsletter_subscribers_subscribed_at_idx
  on public.newsletter_subscribers (subscribed_at desc);

-- Row Level Security: lock the table down. Inserts/reads from the
-- website are done with the service_role key which bypasses RLS by
-- design. Direct anon/authenticated access is forbidden.
alter table public.newsletter_subscribers enable row level security;

-- No public policies on purpose. Adjust if you later open the table
-- to authenticated dashboards.
