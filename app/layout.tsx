import type { Metadata } from "next";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
import { identityGraph } from "@/lib/identity";
import { pageMetadata, verificationMetadata } from "@/lib/seo";
import { allowIndexing, absoluteUrl, profile, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata(
    "Sandeep Gudisa | AI Engineer & Founder of Fixyt",
    profile.description,
    "/",
  ),
  metadataBase: new URL(siteUrl),
  verification: verificationMetadata(),
  applicationName: profile.name,
  authors: [{ name: profile.name, url: absoluteUrl("/about") }],
  creator: profile.name,
  publisher: profile.name,
  robots: {
    index: allowIndexing,
    follow: allowIndexing,
    googleBot: {
      index: allowIndexing,
      follow: allowIndexing,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: [{ url: "/mark.svg", type: "image/svg+xml" }],
    shortcut: "/mark.svg",
    apple: "/sandeep_hero_main.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-IN">
      <head>
        <StructuredData data={identityGraph} />
        <link
          rel="preload"
          href="/fonts/space-grotesk-500.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-400.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
