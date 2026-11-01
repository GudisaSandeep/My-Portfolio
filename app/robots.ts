import type { MetadataRoute } from "next";
import { allowIndexing, absoluteUrl } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(allowIndexing ? { allow: "/" } : { disallow: "/" }),
    },
    ...(allowIndexing ? { sitemap: absoluteUrl("/sitemap.xml") } : {}),
  };
}
