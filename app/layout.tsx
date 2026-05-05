import type { Metadata, Viewport } from "next";
import { Inter, Instrument_Serif, Frank_Ruhl_Libre } from "next/font/google";
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

const siteUrl = "https://truecalling.app";
const titleDefault = "TrueCalling — AI sourcing software for recruiters";
const description =
  "TrueCalling turns a brief into qualified candidates in minutes. AI copilot EMILY, TrueFit 360 matching, multichannel outreach (WhatsApp, email, phone).";
const ogImage = "/brand/truecalling-vertical.png";
const ogImageAlt =
  "TrueCalling — AI sourcing software with WhatsApp outreach";

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
    images: [{ url: ogImage, width: 1080, height: 1080, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A1628",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${frankRuhlLibre.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
