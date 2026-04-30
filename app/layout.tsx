import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://truecalling.app";
const title = "True Calling — Sourcing IA, matching et outreach pour les recruteurs";
const description =
  "True Calling combine sourcing IA, matching intelligent et outreach multi-canal pour transformer le recrutement en conversations qui aboutissent.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "True Calling",
    title,
    description,
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "True Calling",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "595",
      highPrice: "895",
    },
    inLanguage: "fr-FR",
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
