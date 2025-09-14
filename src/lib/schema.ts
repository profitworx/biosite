type WithOptional<T> = {
  [K in keyof T]?: T[K]
}

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://bio.johndeacon.co.za'
export function absoluteUrl(path = '/') {
  try {
    return new URL(path, SITE_URL).toString()
  } catch {
    return SITE_URL
  }
}

export function personSchema(overrides: WithOptional<Record<string, unknown>> = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Deacon',
    jobTitle: 'Digital Thought Leader',
    description:
      'Semantic systems architect and digital thought leader focused on metacognitive software and alignment frameworks.',
    url: SITE_URL,
    sameAs: [
      'https://bio.johndeacon.co.za',
      'https://www.linkedin.com/in/jdeaconx',
    ],
    ...overrides,
  }
}

export function creativeWorkSchema(opts: {
  name: string
  description: string
  url?: string
  keywords?: string[]
}) {
  const { name, description, url, keywords } = opts
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name,
    description,
    ...(url ? { url } : {}),
    ...(keywords ? { keywords: keywords.join(', ') } : {}),
    author: {
      '@type': 'Person',
      name: 'John Deacon',
    },
  }
}

export function collectionPageSchema(opts: {
  name: string
  description: string
  url?: string
  keywords?: string[]
}) {
  const { name, description, url, keywords } = opts
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    ...(url ? { url } : {}),
    ...(keywords ? { keywords: keywords.join(', ') } : {}),
  }
}

export function faqSchema(qa: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  }
}
