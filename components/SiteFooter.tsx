"use client";

import { useT, useLocale, useLocalizedHref } from "../app/_i18n/locale-context";
import { Logo } from "./SiteNavbar";
import { blogEnabledLocales } from "../lib/i18n-config";

/* ============================================================
   SiteFooter — shared footer for every page.
   Mounted once in app/[locale]/layout.tsx so any new page picks
   it up automatically.

   Layout: 4 columns on desktop (brand wide + product + resources +
   legal), single column on mobile. Bottom bar with copyright and a
   discreet "made in" line.
   ============================================================ */

export function SiteFooter() {
  const t = useT();
  const href = useLocalizedHref();
  const { locale } = useLocale();
  const showBlog = (blogEnabledLocales as readonly string[]).includes(locale);

  const productLinks = [
    { label: t("nav_features"), href: href("home", { hash: "#features" }) },
    { label: t("nav_how"), href: href("home", { hash: "#how-it-works" }) },
    { label: t("nav_benefits"), href: href("home", { hash: "#benefits" }) },
    { label: t("nav_demo"), href: href("home", { hash: "#demo" }) },
    { label: t("nav_pricing"), href: href("home", { hash: "#pricing" }) },
  ];
  const resourceLinks = [
    ...(showBlog ? [{ label: t("nav_blog"), href: href("blog") }] : []),
    { label: t("nav_faq"), href: href("faq") },
    { label: t("nav_contact"), href: href("contact") },
    { label: t("nav_book"), href: href("book-a-demo") },
  ];
  const legalLinks = [
    { label: t("footer_terms"), href: href("terms") },
    { label: t("footer_legal_mentions"), href: href("legal-notice") },
    { label: t("footer_privacy"), href: href("privacy") },
    { label: t("footer_gdpr"), href: href("privacy", { hash: "#rgpd" }) },
  ];

  return (
    <footer className="relative border-t border-ink/[0.06] bg-deep py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Logo size={28} showTagline alwaysShowWordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              {t("footer_tagline")}
            </p>
            <div className="mt-5 flex items-center gap-2">
              <SocialLink
                href="https://www.linkedin.com/company/truecalling-ai/"
                label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialLink>
              <SocialLink href="https://x.com/TruecallinAI" label="X / Twitter">
                <XIcon />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/truecalling.ai/"
                label="Instagram"
              >
                <InstagramIcon />
              </SocialLink>
            </div>
          </div>

          <FooterColumn
            title={t("footer_col_product")}
            links={productLinks}
          />
          <FooterColumn
            title={t("footer_col_resources")}
            links={resourceLinks}
          />
          <FooterColumn title={t("footer_col_legal")} links={legalLinks} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-ink/[0.06] pt-6 text-xs text-ink-muted sm:flex-row sm:items-center">
          <span>{t("footer_copyright")}</span>
          <span>{t("footer_made")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <div className="mb-4 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-ink/80 transition-colors hover:text-accent cursor-pointer"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full border border-ink/10 bg-ink/[0.03] text-ink-muted transition-colors hover:border-accent/40 hover:text-accent cursor-pointer"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v15H.22zM8 8h4.37v2.05h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.31h-4.56v-7.37c0-1.76-.03-4.02-2.45-4.02-2.45 0-2.83 1.92-2.83 3.9V23H8z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2H21.5l-7.55 8.63L23 22h-6.84l-5.36-7.02L4.66 22H1.4l8.07-9.22L1 2h7.01l4.84 6.4L18.244 2zm-2.4 18h1.94L7.27 4H5.21l10.633 16z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
