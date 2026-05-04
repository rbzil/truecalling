"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useT, useLocale, useLocalizedHref } from "../app/_i18n/locale-context";
import { LanguageSwitcher } from "../app/_i18n/language-switcher";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { blogEnabledLocales } from "../lib/i18n-config";

/* ----------------------------------------------------------
   FingerprintMark — magenta brand mark
---------------------------------------------------------- */
export function FingerprintMark({
  size = 28,
  color = "#E91E8C",
}: {
  size?: number;
  color?: string;
}) {
  const sw = 2.2;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke={color}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3.5 22 C 3.5 11, 8 4, 16 4 C 24 4, 28.5 11, 28.5 22" />
      <path d="M6.5 24 C 6.5 13, 10 7, 16 7 C 22 7, 25.5 13, 25.5 24" />
      <path d="M9.5 26 C 9.5 15, 12 10, 16 10 C 20 10, 22.5 15, 22.5 26" />
      <path d="M12.5 27 C 12.5 17, 14 13, 16 13 C 18 13, 19.5 17, 19.5 27" />
      <path d="M16.5 27 L 16.5 19 C 16.5 17, 14.8 16, 13.7 17 C 12.6 18, 13 20, 14.5 20 L 16 20" />
      <path d="M3.8 25.5 C 4.1 24, 4.4 22.5, 4.7 21.2" />
      <path d="M28.2 25.5 C 27.9 24, 27.6 22.5, 27.3 21.2" />
    </svg>
  );
}

/* ----------------------------------------------------------
   Logo — fingerprint + wordmark, theme-aware
---------------------------------------------------------- */
export function Logo({
  variant = "light",
  showTagline = false,
  className,
  size = 26,
  alwaysShowWordmark = false,
}: {
  variant?: "light" | "dark";
  showTagline?: boolean;
  className?: string;
  size?: number;
  /** If false (default) the wordmark hides on mobile. Footer/full headers can override. */
  alwaysShowWordmark?: boolean;
}) {
  const wordColor = "rgb(var(--ink))";
  const taglineColor = "rgb(var(--ink) / 0.6)";
  void variant;
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <FingerprintMark size={size} color="#E91E8C" />
      <div className={`flex-col leading-none ${alwaysShowWordmark ? "flex" : "hidden sm:flex"}`}>
        <span
          className="font-bold uppercase tracking-[0.06em]"
          style={{ color: wordColor, fontSize: size * 0.62, letterSpacing: "0.04em" }}
        >
          TrueCalling
        </span>
        {showTagline && (
          <span
            className="mt-1 text-[9px] uppercase tracking-[0.28em]"
            style={{ color: taglineColor }}
          >
            Hire with precision
          </span>
        )}
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   CTAButton — primary / outline / white variants
---------------------------------------------------------- */
export function CTAButton({
  children,
  href,
  size = "md",
  variant = "primary",
  onClick,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline" | "white";
  onClick?: () => void;
  className?: string;
}) {
  const sizeCls =
    size === "sm"
      ? "h-9 px-4 text-sm"
      : size === "lg"
        ? "h-14 px-8 text-base"
        : "h-12 px-6 text-[15px]";

  const variantCls =
    variant === "primary"
      ? "bg-accent text-white hover:bg-accent/90 shadow-[0_8px_30px_rgba(233,30,140,0.35)]"
      : variant === "outline"
        ? "bg-transparent border border-ink/15 text-ink hover:bg-ink/[0.04]"
        : "bg-ink text-bg hover:bg-ink/90";

  const Inner = (
    <motion.span
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tighter2 transition-colors cursor-pointer ${sizeCls} ${variantCls} ${
        className ?? ""
      }`}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} aria-label={typeof children === "string" ? children : undefined}>
        {Inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} type="button">
      {Inner}
    </button>
  );
}

/* ----------------------------------------------------------
   Navbar — fixed top, logo + center nav + theme + lang + login + CTA
---------------------------------------------------------- */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = useT();
  const { locale } = useLocale();
  const href = useLocalizedHref();
  const showBlog = (blogEnabledLocales as readonly string[]).includes(locale);
  const links = [
    { label: t("nav_features"), href: href("home", { hash: "#features" }) },
    { label: t("nav_how"), href: href("home", { hash: "#how-it-works" }) },
    { label: t("nav_benefits"), href: href("home", { hash: "#benefits" }) },
    { label: t("nav_demo"), href: href("home", { hash: "#demo" }) },
    { label: t("nav_pricing"), href: href("home", { hash: "#pricing" }) },
    ...(showBlog ? [{ label: t("nav_blog"), href: href("blog") }] : []),
    { label: t("nav_faq"), href: href("faq") },
    { label: t("nav_contact"), href: href("contact") },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-bg/70 backdrop-blur-xl border-b border-ink/[0.08]"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-16 items-center justify-between px-5 sm:px-8">
        <a href={href("home")} aria-label="TrueCalling" className="shrink-0 cursor-pointer">
          <Logo />
        </a>

        <nav className="hidden items-center gap-0.5 rounded-full border border-ink/[0.06] bg-ink/[0.02] p-1 backdrop-blur-md xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-[12px] font-medium text-ink-muted transition-colors hover:bg-ink/[0.06] hover:text-ink cursor-pointer 2xl:px-3.5 2xl:text-[13px]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          {/* Desktop-only: theme toggle, lang switcher, login button */}
          <div className="hidden md:flex items-center gap-2.5">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="https://truecalling.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center rounded-full border border-ink/15 bg-ink/[0.03] px-4 text-[13px] font-medium text-ink transition-colors hover:border-ink/30 hover:bg-ink/[0.06] lg:inline-flex cursor-pointer"
            >
              {t("nav_login")}
            </a>
          </div>

          {/* Always visible CTA — text shortens on mobile */}
          <CTAButton href={href("book-a-demo")} size="sm">
            <span className="md:hidden">{t("nav_demo")}</span>
            <span className="hidden md:inline">{t("nav_book")}</span>
          </CTAButton>

          {/* Mobile-only hamburger */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
