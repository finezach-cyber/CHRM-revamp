import type { Metadata } from "next";
import "../styles/fonts.css";
import "../styles/colors_and_type.css";
import "../styles/marketing.css";
import A11y from "@/components/A11y";
import { SITE_URL, META_DESCRIPTION } from "@/lib/site";
import { organization, website, softwareApplication, serialize } from "@/lib/jsonld";

const TITLE = "2nd Closer — AI account executive for HubSpot & Pipedrive";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s — 2nd Closer",
  },
  description: META_DESCRIPTION,
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
    description: META_DESCRIPTION,
    url: SITE_URL,
    images: ["/assets/og-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: META_DESCRIPTION,
    images: ["/assets/og-cover.png"],
  },
};

const JSON_LD = [organization(), website(), softwareApplication()];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <A11y />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(JSON_LD) }}
        />
      </body>
    </html>
  );
}
