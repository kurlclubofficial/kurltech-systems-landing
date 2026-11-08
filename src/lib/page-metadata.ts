import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

const siteName = "KurlTech Systems";

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const siteUrl = getSiteUrl();
  const canonicalUrl = siteUrl ? new URL(path, siteUrl).toString() : undefined;
  const socialImage = siteUrl
    ? new URL("/opengraph-image", siteUrl).toString()
    : undefined;
  const socialTitle = `${title} | ${siteName}`;

  return {
    title: socialTitle,
    description,
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: socialTitle,
      description,
      type: "website",
      siteName,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
      ...(socialImage
        ? {
            images: [
              {
                url: socialImage,
                width: 1200,
                height: 630,
                alt: `${siteName} — custom internal tools for critical workflows`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      ...(socialImage ? { images: [socialImage] } : {}),
    },
  };
}
