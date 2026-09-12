import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/colors_and_type.css";
import "../styles/marketing.css";
import A11y from "@/components/A11y";
import { SITE_URL, DESCRIPTION, TAGLINE } from "@/lib/site";

const TITLE = "CHRM — A second AE for every closer. Works with HubSpot & Pipedrive.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — CHRM",
  },
  description: DESCRIPTION,
  applicationName: "CHRM",
  keywords: [
    "AI account executive",
    "AI sales assistant for HubSpot",
    "AI for Pipedrive",
    "CRM automation",
    "execution layer for CRM",
    "sales follow-up automation",
    "Attio alternative that works with HubSpot",
  ],
  robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  openGraph: {
    type: "website",
    siteName: "CHRM",
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    images: ["/assets/og-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/og-cover.png"],
  },
};

const JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CHRM",
    url: SITE_URL + "/",
    logo: SITE_URL + "/assets/logo-wordmark.svg",
    slogan: TAGLINE,
    description: DESCRIPTION,
    founder: {
      "@type": "Person",
      name: "Zach Fine",
      jobTitle: "Founder",
      url: "https://www.linkedin.com/in/finezach",
      sameAs: ["https://www.linkedin.com/in/finezach"],
    },
    sameAs: ["https://www.linkedin.com/company/chrm-app"],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CHRM",
    url: SITE_URL + "/",
    description: "The execution layer for CRM. A second AE for every closer on HubSpot or Pipedrive. Live in under a day.",
    publisher: { "@type": "Organization", name: "CHRM" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CHRM",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL + "/",
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "CHRM" },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <A11y />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </body>
    </html>
  );
}
