import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Inter, Instrument_Serif, Frank_Ruhl_Libre } from "next/font/google";
import { defaultLocale, locales, rtlLocales, type Locale } from "@/lib/i18n-config";
import { organizationSchema, websiteSchema, jsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Editorial serif used by the newsletter popup hook (Latin scripts).
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

// Hebrew-capable serif fallback for the same hook on /he.
// Loaded as the same --font-serif-he variable; the AnimatedHook
// component picks it for RTL locales.
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["hebrew", "latin"],
  weight: ["500", "700"],
  variable: "--font-serif-he",
  display: "swap",
});

const siteUrl = "https://truecalling.ai";
const titleDefault = "TrueCalling — AI sourcing software for recruiters";
const description =
  "TrueCalling turns a brief into qualified candidates in minutes. AI copilot EMILY, TrueFit 360 matching, multichannel outreach (WhatsApp, email, phone).";
const ogImage = "/brand/og-image.png";
const ogImageAlt =
  "TrueCalling — AI sourcing software for recruiters. EMILY copilot for WhatsApp, email and phone outreach.";

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: titleDefault, template: "%s · TrueCalling" },
  description,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TrueCalling",
    title: titleDefault,
    description,
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: [ogImage],
  },
  // Belt-and-braces: noindex previews/staging at the meta level too.
  // Production deployments still get default index, follow.
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

function resolveLocale(): Locale {
  // Middleware sets x-locale on every locale-prefixed request.
  // Falls back to parsing x-pathname, then defaultLocale.
  const h = headers();
  const fromHeader = h.get("x-locale");
  if (fromHeader && (locales as readonly string[]).includes(fromHeader)) {
    return fromHeader as Locale;
  }
  const pathname = h.get("x-pathname") ?? "";
  const first = pathname.split("/").filter(Boolean)[0];
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = resolveLocale();
  const dir = (rtlLocales as readonly Locale[]).includes(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${inter.variable} ${instrumentSerif.variable} ${frankRuhlLibre.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(organizationSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(websiteSchema()) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
