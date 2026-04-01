export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://bio.johndeacon.co.za").replace(/\/$/, "");
export const SITE_NAME = "John Deacon Bio";
export const SITE_LOCALE = "en_ZA";
export const SITE_LANGUAGE = "en";
export const PERSON_NAME = "John Deacon";
export const PERSON_JOB_TITLE = "Semantic Systems Architect and Digital Thought Leader";
export const PERSON_DESCRIPTION =
  "Semantic systems architect focused on metacognitive software, the XEMATIX framework, and the Core Alignment Model (CAM) for aligning human intent with executable system logic.";
export const ARTICLE_SOURCE_URL = "https://johndeacon.co.za";
export const DEFAULT_OG_IMAGE = {
  path: "/images/john_deacon_presentation.jpg",
  width: 1200,
  height: 630,
  alt: "John Deacon presenting semantic systems thinking",
} as const;
export const PROFILE_IMAGE = {
  path: "/images/john_deacon_profile_2026.png",
  width: 1200,
  height: 1200,
  alt: "John Deacon profile portrait",
} as const;

export type PublicRouteKey =
  | "home"
  | "xematix"
  | "cam"
  | "dtlm"
  | "professional"
  | "tools"
  | "insights";

export type PublicRouteDefinition = {
  key: PublicRouteKey;
  path: string;
  label: string;
  navigationLabel: string;
  title: string;
  description: string;
  keywords: string[];
  metadataType: "website" | "profile";
  schemaType: "WebPage" | "CollectionPage" | "ProfilePage";
  changeFrequency: "weekly" | "monthly";
  priority: number;
  lastModified: string;
  relatedSummary: string;
};

export const PUBLIC_ROUTES: Record<PublicRouteKey, PublicRouteDefinition> = {
  home: {
    key: "home",
    path: "/",
    label: "Home",
    navigationLabel: "Home",
    title: "John Deacon | Semantic Systems Architect, XEMATIX and CAM",
    description: PERSON_DESCRIPTION,
    keywords: [
      "John Deacon",
      "Semantic Systems Architect",
      "XEMATIX",
      "Core Alignment Model",
      "CAM",
      "Metacognitive Software",
    ],
    metadataType: "website",
    schemaType: "WebPage",
    changeFrequency: "weekly",
    priority: 1,
    lastModified: "2026-04-01",
    relatedSummary: "Entity hub for John Deacon, XEMATIX, CAM, and the surrounding digital systems ecosystem.",
  },
  xematix: {
    key: "xematix",
    path: "/xematix",
    label: "XEMATIX",
    navigationLabel: "XEMATIX",
    title: "XEMATIX: The Architecture of Intent | John Deacon",
    description:
      "A pre-execution semantic control layer that governs intent lineage, meaning integrity, and authorization before autonomous execution.",
    keywords: [
      "XEMATIX",
      "Semantic Control Layer",
      "Intent Lineage",
      "AI Governance",
      "Abstract Language Objects",
      "XSALF",
    ],
    metadataType: "website",
    schemaType: "WebPage",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-04-01",
    relatedSummary: "Architecture hub for pre-execution semantic control, intent lineage, and governed autonomy.",
  },
  cam: {
    key: "cam",
    path: "/cam",
    label: "CAM",
    navigationLabel: "CAM",
    title: "Core Alignment Model (CAM): Align Purpose to Execution | John Deacon",
    description:
      "Metacognitive scaffold for mission, vision, strategy, tactics, and conscious awareness to align intent to execution.",
    keywords: [
      "Core Alignment Model",
      "CAM",
      "Metacognitive Framework",
      "Mission Vision Strategy Tactics",
      "Conscious Awareness",
    ],
    metadataType: "website",
    schemaType: "WebPage",
    changeFrequency: "weekly",
    priority: 0.9,
    lastModified: "2026-04-01",
    relatedSummary: "Framework hub for the Core Alignment Model and the reasoning scaffold behind aligned execution.",
  },
  dtlm: {
    key: "dtlm",
    path: "/dtlm",
    label: "DTLM",
    navigationLabel: "DTLM",
    title: "Digital Thought Leadership Model (DTLM) | John Deacon",
    description:
      "Toolkit for authentic digital influence: personal branding, digital innovation, and alignment grounded in purpose.",
    keywords: [
      "DTLM",
      "Digital Thought Leadership",
      "Personal Branding",
      "Thought Leadership Framework",
      "Digital Influence",
    ],
    metadataType: "website",
    schemaType: "WebPage",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-04-01",
    relatedSummary: "Digital thought leadership hub connecting brand systems, frameworks, and practical activation.",
  },
  professional: {
    key: "professional",
    path: "/professional",
    label: "Professional",
    navigationLabel: "Professional",
    title: "Digital Performance Strategy | John Deacon",
    description:
      "Digital performance strategy that aligns mission, vision, strategy, tactics, and conscious awareness to build AI-native operating systems that scale outcomes.",
    keywords: [
      "Digital Performance Strategy",
      "AI-Native Operating Systems",
      "Metacognition Coaching",
      "Framework Architecture",
      "Professional Services",
    ],
    metadataType: "profile",
    schemaType: "ProfilePage",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-04-01",
    relatedSummary: "Commercial hub for services, advisory, and engagement models grounded in CAM and XEMATIX.",
  },
  tools: {
    key: "tools",
    path: "/tools",
    label: "Tools",
    navigationLabel: "Tools",
    title: "Digital Tools | Automation and Semantic Design | John Deacon",
    description:
      "Schema-driven tools, AI automation, and microsite templates for creators using semantic, intent-aligned design.",
    keywords: [
      "Digital Tools",
      "Semantic Design",
      "AI Automation",
      "Microsite Templates",
      "Workflow Automation",
    ],
    metadataType: "website",
    schemaType: "CollectionPage",
    changeFrequency: "weekly",
    priority: 0.8,
    lastModified: "2026-04-01",
    relatedSummary: "Product and capability hub for automation tools, templates, and semantic design systems.",
  },
  insights: {
    key: "insights",
    path: "/insights",
    label: "Insights",
    navigationLabel: "Insights",
    title: "Insights | Semantic Systems and Metacognitive Software | John Deacon",
    description:
      "Curated latest articles from johndeacon.co.za on semantic systems, metacognitive software, XEMATIX, and CAM.",
    keywords: [
      "Insights",
      "Semantic Systems",
      "Metacognitive Software",
      "XEMATIX Articles",
      "CAM Articles",
    ],
    metadataType: "website",
    schemaType: "CollectionPage",
    changeFrequency: "weekly",
    priority: 0.7,
    lastModified: "2026-04-01",
    relatedSummary: "Curated article hub that bridges this entity site to the primary WordPress publishing source.",
  },
};

export const PRIMARY_NAVIGATION: PublicRouteKey[] = [
  "home",
  "xematix",
  "cam",
  "dtlm",
  "professional",
  "tools",
  "insights",
];

export const RELATED_ROUTE_MAP: Record<PublicRouteKey, PublicRouteKey[]> = {
  home: ["xematix", "cam", "professional"],
  xematix: ["cam", "dtlm", "tools"],
  cam: ["xematix", "dtlm", "professional"],
  dtlm: ["cam", "tools", "professional"],
  professional: ["tools", "xematix", "insights"],
  tools: ["professional", "xematix", "dtlm"],
  insights: ["xematix", "cam", "professional"],
};

export const ENTITY_IDS = {
  person: `${SITE_URL}/#john-deacon`,
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#profitworx`,
} as const;

export function absoluteUrl(path = "/") {
  try {
    return new URL(path, `${SITE_URL}/`).toString();
  } catch {
    return SITE_URL;
  }
}

export function getPublicRoute(routeKey: PublicRouteKey) {
  return PUBLIC_ROUTES[routeKey];
}

export function getRouteByPath(pathname: string) {
  return Object.values(PUBLIC_ROUTES).find((route) => route.path === pathname);
}

export function getBreadcrumbItems(routeKey: PublicRouteKey) {
  if (routeKey === "home") {
    return [{ name: PUBLIC_ROUTES.home.label, item: absoluteUrl("/") }];
  }

  const route = getPublicRoute(routeKey);
  return [
    { name: PUBLIC_ROUTES.home.label, item: absoluteUrl("/") },
    { name: route.label, item: absoluteUrl(route.path) },
  ];
}

export function getBreadcrumbId(routeKey: PublicRouteKey) {
  const route = getPublicRoute(routeKey);
  return route.path === "/" ? `${SITE_URL}/#breadcrumb` : `${SITE_URL}${route.path}#breadcrumb`;
}

export function getPageId(routeKey: PublicRouteKey) {
  const route = getPublicRoute(routeKey);
  return route.path === "/" ? `${SITE_URL}/#webpage` : `${SITE_URL}${route.path}#webpage`;
}

export function getPrimaryNavigationRoutes() {
  return PRIMARY_NAVIGATION.map(getPublicRoute);
}

export function getRelatedRoutes(routeKey: PublicRouteKey) {
  return RELATED_ROUTE_MAP[routeKey].map(getPublicRoute);
}
