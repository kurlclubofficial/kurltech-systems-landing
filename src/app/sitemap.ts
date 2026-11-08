import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export const dynamic = "force-dynamic";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) {
    throw new Error(
      "Set SITE_URL to the production origin to generate sitemap.xml.",
    );
  }

  return ["/", "/enquiry", "/privacy-policy"].map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
