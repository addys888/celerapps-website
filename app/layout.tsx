import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://celerapps.com";
const siteName = "CelerApps";
const siteDesc = "Fast. Intelligent. Built for India. CelerApps builds AI-powered SaaS products — DialKaro (AI sales dialer) and BillKaro (WhatsApp invoicing) — that solve real Indian business problems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Fast. Intelligent. Built for India.`,
    template: `%s | ${siteName}`,
  },
  description: siteDesc,
  keywords: [
    "CelerApps", "DialKaro", "BillKaro", "Indian SaaS", "WhatsApp invoicing",
    "AI dialer", "sales automation India", "SME software India", "WhatsApp business tools",
    "auto dialer India", "invoice app India", "GST invoice WhatsApp",
  ],
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  openGraph: {
    title: "CelerApps - AI-Powered Business Apps",
    description: "Built for speed. Designed for India. Loved by thousands of businesses.",
    url: "https://celerapps.com",
    siteName: "CelerApps",
    locale: "en_IN",
    type: "website" as const,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Fast. Intelligent. Built for India.`,
    description: siteDesc,
    images: ["/og.png"],
    creator: "@celerapps",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: siteUrl },
};

export const viewport: Viewport = {
  themeColor: "#050810",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDesc,
  foundingLocation: "India",
  sameAs: ["https://twitter.com/celerapps", "https://linkedin.com/company/celerappsai"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CelerApps Product Suite",
    itemListElement: [
      {
        "@type": "SoftwareApplication",
        name: "DialKaro",
        applicationCategory: "BusinessApplication",
        description: "AI-powered auto-dialer and WhatsApp calling tool for Indian sales teams",
        url: `${siteUrl}/dialkaro`,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
      {
        "@type": "SoftwareApplication",
        name: "BillKaro",
        applicationCategory: "BusinessApplication",
        description: "WhatsApp-first smart invoicing and collections platform for Indian SMBs",
        url: `${siteUrl}/billkaro`,
        offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
      },
    ],
  },
};

import { LoadingProvider } from "@/components/providers/LoadingProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dmSans.variable} suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>

      {/* Google Analytics 4 (GA4) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y9DGG39MEZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y9DGG39MEZ');
        `}
      </Script>
      <body className="antialiased">
        <LoadingProvider>
          {children}
        </LoadingProvider>
      </body>
    </html>
  );
}
