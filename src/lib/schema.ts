import {
  ARTICLE_SOURCE_URL,
  DEFAULT_OG_IMAGE,
  ENTITY_IDS,
  PERSON_DESCRIPTION,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  PROFILE_IMAGE,
  SITE_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  getBreadcrumbId,
  getBreadcrumbItems,
  getPageId,
  getPublicRoute,
  type PublicRouteKey,
} from "./site";

type WithOptional<T> = {
  [K in keyof T]?: T[K];
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type PageSchemaOptions = {
  routeKey: PublicRouteKey;
  name?: string;
  description?: string;
  type?: "WebPage" | "CollectionPage" | "ProfilePage";
  primaryImagePath?: string;
  breadcrumb?: boolean;
  mainEntityId?: string;
};

export { SITE_URL, absoluteUrl };

export function personSchema(overrides: WithOptional<Record<string, unknown>> = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": ENTITY_IDS.person,
    name: PERSON_NAME,
    jobTitle: PERSON_JOB_TITLE,
    description: PERSON_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl(PROFILE_IMAGE.path),
    sameAs: [
      SITE_URL,
      ARTICLE_SOURCE_URL,
      "https://www.linkedin.com/in/jdeaconx",
      "https://x.com/jdeaconx",
      "https://profitworx.com",
      "https://pagematix.com",
      "https://resumetobrand.com",
      "https://cyberkinesis.com",
    ],
    worksFor: {
      "@id": ENTITY_IDS.organization,
    },
    ...overrides,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ENTITY_IDS.organization,
    name: "ProfitWorx",
    url: "https://profitworx.com",
    founder: {
      "@id": ENTITY_IDS.person,
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": ENTITY_IDS.website,
    url: absoluteUrl("/"),
    name: SITE_NAME,
    description: PERSON_DESCRIPTION,
    inLanguage: SITE_LANGUAGE,
    publisher: {
      "@id": ENTITY_IDS.person,
    },
    about: {
      "@id": ENTITY_IDS.person,
    },
    sameAs: [ARTICLE_SOURCE_URL],
  };
}

export function breadcrumbListSchema(items: BreadcrumbItem[], id?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    ...(id ? { "@id": id } : {}),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

export function pageSchema({
  routeKey,
  name,
  description,
  type,
  primaryImagePath = DEFAULT_OG_IMAGE.path,
  breadcrumb = true,
  mainEntityId,
}: PageSchemaOptions) {
  const route = getPublicRoute(routeKey);

  return {
    "@context": "https://schema.org",
    "@type": type ?? route.schemaType,
    "@id": getPageId(routeKey),
    url: absoluteUrl(route.path),
    name: name ?? route.title,
    description: description ?? route.description,
    isPartOf: {
      "@id": ENTITY_IDS.website,
    },
    about: {
      "@id": ENTITY_IDS.person,
    },
    inLanguage: SITE_LANGUAGE,
    primaryImageOfPage: absoluteUrl(primaryImagePath),
    dateModified: route.lastModified,
    ...(breadcrumb
      ? {
          breadcrumb: {
            "@id": getBreadcrumbId(routeKey),
          },
        }
      : {}),
    ...(mainEntityId
      ? {
          mainEntity: {
            "@id": mainEntityId,
          },
        }
      : {}),
  };
}

export function routeBreadcrumbSchema(routeKey: PublicRouteKey) {
  return breadcrumbListSchema(getBreadcrumbItems(routeKey), getBreadcrumbId(routeKey));
}

export function creativeWorkSchema(opts: {
  name: string;
  description: string;
  url?: string;
  keywords?: string[];
  id?: string;
  isPartOfId?: string;
}) {
  const { name, description, url, keywords, id, isPartOfId } = opts;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    ...(id ? { "@id": id } : {}),
    name,
    description,
    ...(url ? { url } : {}),
    ...(keywords ? { keywords: keywords.join(", ") } : {}),
    author: {
      "@id": ENTITY_IDS.person,
    },
    about: {
      "@id": ENTITY_IDS.person,
    },
    ...(isPartOfId
      ? {
          isPartOf: {
            "@id": isPartOfId,
          },
        }
      : {}),
  };
}

export function collectionPageSchema(opts: {
  routeKey: PublicRouteKey;
  name: string;
  description: string;
  keywords?: string[];
}) {
  const { routeKey, name, description, keywords } = opts;
  return {
    ...pageSchema({
      routeKey,
      name,
      description,
      type: "CollectionPage",
    }),
    ...(keywords ? { keywords: keywords.join(", ") } : {}),
  };
}

export function faqSchema(qa: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: qa.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}
