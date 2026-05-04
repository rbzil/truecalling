import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://truecalling.app";
const titleDefault = "Logiciel de sourcing IA pour recruteurs · TrueCalling";
const description =
  "Logiciel de sourcing IA qui transforme un brief en candidats qualifiés. Copilote EMILY, matching TrueFit 360 et outreach WhatsApp, email, téléphone. Démo en 20 min.";
const ogImage = "/brand/truecalling-vertical.png";
const ogImageAlt = "TrueCalling — Logiciel de sourcing IA et copilote de recrutement avec outreach WhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: titleDefault, template: "%s · TrueCalling" },
  description,
  alternates: {
    canonical: "/",
    languages: { "fr-FR": "/" },
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "TrueCalling",
    title: titleDefault,
    description,
    locale: "fr_FR",
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
  const ldJson = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TrueCalling",
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
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </head>
      <body className="font-sans antialiased bg-bg text-ink">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
