import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME, absoluteUrl, getPublicRoute, type PublicRouteKey } from "./site";

export const BASE_KEYWORDS: string[] = [
  "John Deacon",
  "Semantic Systems",
  "XEMATIX",
  "Core Alignment Model",
  "CAM",
  "Metacognition",
  "Intent Modeling",
  "Digital Thought Leadership",
  "AI SEO",
  "Digital Business Strategy",
];

type BuildPageMetadataArgs = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  imagePath?: string;
};

export function buildPageMetadata({
  path,
  title,
  description,
  keywords = [],
  type = "website",
  imagePath = DEFAULT_OG_IMAGE.path,
}: BuildPageMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...BASE_KEYWORDS, ...keywords]));
  const imageUrl = absoluteUrl(imagePath);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: SITE_LOCALE,
      images: [
        {
          url: imageUrl,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      creator: "@jdeaconx",
      title,
      description,
      images: [imageUrl],
    },
    keywords: mergedKeywords,
  };
}

export function buildRouteMetadata(routeKey: PublicRouteKey): Metadata {
  const route = getPublicRoute(routeKey);
  return buildPageMetadata({
    path: route.path,
    title: route.title,
    description: route.description,
    keywords: route.keywords,
    type: route.metadataType,
  });
}
