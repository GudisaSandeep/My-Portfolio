import type { MetadataRoute } from "next";
import { absoluteUrl, allowIndexing } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!allowIndexing) return [];
  return ["/", "/about", "/projects/fixyt"].map((path) => ({
    url: absoluteUrl(path),
  }));
}
