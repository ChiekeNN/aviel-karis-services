import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@fontsource-variable/manrope";
import "@fontsource/instrument-serif/latin-400.css";
import "@fontsource/instrument-serif/latin-400-italic.css";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";
import MotionProvider from "@/components/MotionProvider";
import { PHONE_TEL } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const SITE_TITLE =
  "Aviel Karis Services Ltd | Oil & Gas, Marine & Industrial Engineering";
const SITE_DESCRIPTION =
  "Indigenous Nigerian upstream and midstream oil & gas services, procurement, pipeline fabrication, marine and industrial engineering contractor headquartered in Port Harcourt since 2015.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Aviel Karis Services Ltd",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Aviel Karis Services Ltd",
  keywords: [
    "oil and gas services Nigeria",
    "pipeline fabrication Port Harcourt",
    "offshore marine support Niger Delta",
    "procurement and logistics Nigeria",
    "CIPSMN certified supply chain",
    "PPE supply EN standards",
    "industrial engineering contractor",
    "Nigerian local content",
  ],
  authors: [{ name: "Aviel Karis Services Ltd" }],
  category: "Oil & Gas Services",
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "Aviel Karis Services Ltd",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/images/hero-offshore.jpg",
        width: 1536,
        height: 864,
        alt: "Offshore production platform at dusk — Aviel Karis Services Ltd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/hero-offshore.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#060b12",
  colorScheme: "light",
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aviel Karis Services Ltd",
  description: SITE_DESCRIPTION,
  foundingDate: "2015",
  telephone: PHONE_TEL,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: PHONE_TEL,
    contactType: "sales",
    availableLanguage: ["en"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "No 19 Obudu Street, Mile 1 Rumuwoji",
    addressLocality: "Port Harcourt",
    addressRegion: "Rivers State",
    addressCountry: "NG",
  },
  areaServed: ["Niger Delta", "Nigeria", "Sub-Saharan Africa"],
  knowsAbout: [
    "Procurement and logistics",
    "Pipeline construction and fabrication",
    "Offshore marine services",
    "Flow control and measurement",
    "Fire fighting and safety installation",
    "Personal protective equipment",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory font-sans text-ink antialiased">
        <MotionProvider>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        </MotionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organisationSchema) }}
        />
      </body>
    </html>
  );
}
