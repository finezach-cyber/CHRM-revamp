import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/colors_and_type.css";
import "../styles/marketing.css";
import A11y from "@/components/A11y";
import { SITE_URL, DESCRIPTION, TAGLINE } from "@/lib/site";

const TITLE = "2nd Closer — AI account executive for HubSpot & Pipedrive";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — 2nd Closer",
  },
  description: DESCRIPTION,
  applicationName: "2nd Closer",
  keywords: [
    "AI account executive",
    "AI sales agent",
    "second AE",
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
    siteName: "2nd Closer",
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
    name: "2nd Closer",
    alternateName: "CHRM",
    url: SITE_URL + "/",
    logo: SITE_URL + "/assets/2nd-closer-lockup-day.svg",
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
    name: "2nd Closer",
    url: SITE_URL + "/",
    description: "The execution layer for CRM. An AI account executive that does the after-call work on HubSpot or Pipedrive. Live in under a day.",
    publisher: { "@type": "Organization", name: "2nd Closer" },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "2nd Closer",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE_URL + "/",
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "2nd Closer" },
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
