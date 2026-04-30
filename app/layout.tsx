import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://truecalling.app";
const titleDefault = "True Calling — Sourcing IA, matching et outreach pour les recruteurs";
const description =
  "True Calling combine sourcing IA, matching intelligent et outreach multi-canal pour transformer le recrutement en conversations qui aboutissent.";
const ogImage = "/brand/truecalling-vertical.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: titleDefault, template: "%s · True Calling" },
  description,
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "True Calling",
    title: titleDefault,
    description,
    locale: "fr_FR",
    images: [{ url: ogImage, width: 1080, height: 1080, alt: "True Calling — Hire with precision" }],
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
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "True Calling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    url: siteUrl,
    image: `${siteUrl}${ogImage}`,
    inLanguage: "fr-FR",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "595",
      highPrice: "895",
      offerCount: "3",
    },
  };

  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-ink">{children}</body>
    </html>
  );
}
