import type { Metadata } from "next";
import { absoluteUrl, profile } from "./site";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      siteName: profile.name,
      locale: "en_IN",
      url: absoluteUrl(path),
      title,
      description,
      images: [
        {
          url: absoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${profile.name} — ${profile.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl("/opengraph-image")],
    },
  };
}

export function verificationMetadata(): Metadata["verification"] {
  const google = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  const bing = process.env.BING_SITE_VERIFICATION?.trim();
  if (!google && !bing) return undefined;
  return {
    ...(google ? { google } : {}),
    ...(bing ? { other: { "msvalidate.01": bing } } : {}),
  };
}
