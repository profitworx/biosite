import type { Metadata } from "next";
import { absoluteUrl } from "./schema";

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

const DEFAULT_OG_IMAGE = {
  url: "/images/john_deacon_presentation.png",
  width: 1200,
  height: 630,
  alt: "John Deacon",
};

type BuildPageMetadataArgs = {
  path: string;
  title: string;
  description: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
};

export function buildPageMetadata({
  path,
  title,
  description,
  keywords = [],
  type = "website",
}: BuildPageMetadataArgs): Metadata {
  const url = absoluteUrl(path);
  const mergedKeywords = Array.from(new Set([...BASE_KEYWORDS, ...keywords]));

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: "John Deacon Bio",
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
    keywords: mergedKeywords,
  };
}
