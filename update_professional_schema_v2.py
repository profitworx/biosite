from pathlib import Path

path = Path('src/app/professional/page.tsx')
text = path.read_text(encoding='utf-8')
text = text.replace('import { creativeWorkSchema, faqSchema, absoluteUrl } from "@/lib/schema";',
                    'import { absoluteUrl } from "@/lib/schema";')

old_decl = 'export default function ProfessionalPage() {\n'
new_decl = '''export default function ProfessionalPage() {
  const baseUrl = "https://bio.johndeacon.co.za";
  const professionalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": ${baseUrl}/#john-deacon,
        name: "John Deacon",
        url: ${baseUrl}/,
        image: ${baseUrl}/static/john-deacon.jpg,
        jobTitle: "Metacognition Coach and Framework Architect",
        nationality: "South Africa",
        address: {
          "@type": "PostalAddress",
          addressCountry: "ZA",
        },
        description:
          "South Africa-based researcher and digital practitioner focused on cognitive systems, AI, and metacognitive software infrastructure. Creator of the Core Alignment Model (CAM) and the XEMATIX framework.",
        knowsAbout: [
          "Metacognition",
          "AI cognition and alignment",
          "Semantic systems and Abstract Language Objects (ALO)",
          "Process automation and workflow engineering",
          "Personal brand strategy and digital thought leadership",
          "Information marketing and SEO",
          "Industrial instrumentation and process control",
        ],
        sameAs: [
          "https://www.linkedin.com/in/jdeaconx",
          "https://x.com/jdeaconx",
          "https://johndeacon.co.za",
          "https://ciabatta.co.za",
          "https://profitworx.com",
          "https://pagematix.com",
          "https://resumetobrand.com",
          "https://cyberkinesis.com",
        ],
        worksFor: {
          "@type": "Organization",
          name: "ProfitWorx",
          url: "https://profitworx.com",
        },
        brand: [
          { "@type": "Brand", name: "XEMATIX", url: ${baseUrl}/#xematix },
          { "@type": "Brand", name: "CAM (Core Alignment Model)", url: ${baseUrl}/#cam },
          { "@type": "Brand", name: "Pagematix", url: "https://pagematix.com" },
          { "@type": "Brand", name: "ResumeToBrand", url: "https://resumetobrand.com" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": ${baseUrl}/#website,
        url: ${baseUrl}/,
        name: "John Deacon — Bio",
        inLanguage: "en",
        publisher: { "@id": ${baseUrl}/#john-deacon },
        isFamilyFriendly: true,
        about: { "@id": ${baseUrl}/#john-deacon },
        sameAs: ["https://johndeacon.co.za"],
      },
      {
        "@type": "ProfilePage",
        "@id": ${baseUrl}/professional#webpage,
        url: ${baseUrl}/professional,
        name: "Professional — John Deacon",
        isPartOf: { "@id": ${baseUrl}/#website },
        about: { "@id": ${baseUrl}/#john-deacon },
        primaryImageOfPage: ${baseUrl}/static/john-deacon-professional.jpg,
        description:
          "Professional profile of John Deacon - services, methods, and engagement model for metacognitive frameworks (CAM) and XEMATIX process control.",
        datePublished: "2025-01-01",
        dateModified: "2025-09-16",
        inLanguage: "en",
        speakable: {
          "@type": "SpeakableSpecification",
          xpath: ["/html/head/title", "/html/body//h1"],
        },
        breadcrumb: { "@id": ${baseUrl}/professional#breadcrumb },
        mainEntity: { "@id": ${baseUrl}/professional#catalog },
      },
      {
        "@type": "BreadcrumbList",
        "@id": ${baseUrl}/professional#breadcrumb,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: ${baseUrl}/,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Professional",
            item: ${baseUrl}/professional,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": ${baseUrl}/professional#catalog,
        name: "Professional Services — John Deacon",
        url: ${baseUrl}/professional,
        provider: { "@id": ${baseUrl}/#john-deacon },
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Metacognition coaching and brand alignment",
              serviceType: "Advisory",
              provider: { "@id": ${baseUrl}/#john-deacon },
              areaServed: [
                { "@type": "Country", name: "South Africa" },
                { "@type": "GeoCircle", name: "Global" },
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Corporate professionals and thought leaders",
              },
              description:
                "Use CAM to align Mission, Vision, Strategy, and Tactics with a governing layer of Conscious Awareness - translating nuanced thinking into practical outputs.",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Research ALO and Writing ALO development",
              serviceType: "Framework engineering",
              provider: { "@id": ${baseUrl}/#john-deacon },
              description:
                "Design and instrument Abstract Language Objects that encode voice, logic, and method, producing structured briefs and publication-ready writing aligned to CAM and XEMATIX.",
            },
            availability: "https://schema.org/LimitedAvailability",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "XEMATIX metacognitive process control",
              serviceType: "System design",
              provider: { "@id": ${baseUrl}/#john-deacon },
              description:
                "Map intent to execution across XEMATIX layers (Anchor, Projection, Pathway, Actuator, Governor) to reduce drift and make automation accountable to Mission and Vision.",
            },
            availability: "https://schema.org/LimitedAvailability",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "ResumeToBrand strategy",
              serviceType: "Personal brand system",
              provider: { "@id": ${baseUrl}/#john-deacon },
              description:
                "Transform resumes and LinkedIn profiles into CAM-aligned personal brand systems with usable, market-ready positioning.",
            },
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pagematix microsite blueprint",
              serviceType: "Information product and implementation guide",
              provider: { "@id": ${baseUrl}/#john-deacon },
              description:
                "One-page template strategy for rapid, aligned digital presence with integrated CRM and content workflows.",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": ${baseUrl}/professional#john-deacon-alo,
        name: "John Deacon ALO (Abstract Language Object)",
        creator: { "@id": ${baseUrl}/#john-deacon },
        isPartOf: { "@id": ${baseUrl}/professional#webpage" },
        keywords: [
          "ALO",
          "Core Alignment Model",
          "XEMATIX",
          "Digital Thought Leadership",
          "Semantic Resonance",
          "Metacognitive process control",
        ],
        description:
          "Encodes voice, logic, and frameworks (CAM and XEMATIX) to produce aligned research, briefs, and writing. Structures Mission, Vision, Strategy, Tactics, and Conscious Awareness as a recursive scaffold.",
      },
      {
        "@type": "FAQPage",
        "@id": ${baseUrl}/professional#faq,
        url: ${baseUrl}/professional#faq,
        mainEntity: [
          {
            "@type": "Question",
            name: "What problems do you solve for corporate professionals?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "I align intent with execution. Using CAM and XEMATIX, we turn ambiguous goals into precise, accountable workflows that ship - from positioning and content systems to measurement and iteration.",
            },
          },
          {
            "@type": "Question",
            name: "How do engagements typically work?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Short, outcome-focused sprints. We articulate Mission and Vision, decide on Strategy, and deploy Tactics with explicit guardrails. The meta-layer is Conscious Awareness to prevent drift.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer full-service consulting?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "The primary focus is frameworks and information products. Hands-on advisory is selectively available where there is strong strategic fit and clear ROI.",
            },
          },
          {
            "@type": "Question",
            name: "Where can I read more of your work?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "See the main blog at https://johndeacon.co.za for articles on metacognition, AI cognition, semantic systems, and practical workflows.",
            },
          },
          {
            "@type": "Question",
            name: "Are you South Africa-based and do you work globally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. I'm based in South Africa and work globally through digital channels.",
            },
          },
        ],
      },
    ],
  };
'''

if old_decl not in text:
    raise SystemExit('Function declaration not found')
text = text.replace(old_decl, new_decl, 1)

old_jsonld = '''        <JsonLd
          id="schema-professional"
          data={[
            creativeWorkSchema({
              name: 'Digital Performance Strategy',
              description:
                'Align mission, vision, strategy and tactics with conscious awareness. Design AI-native operating systems that turn intent into measurable performance.',
              keywords: ['Digital Performance', 'Strategy', 'AI-native', 'CAM', 'XEMATIX'],
              url: absoluteUrl('/professional'),
            }),
            faqSchema([
              {
                question: 'Does AI fix broken strategy?',
                answer:
                  'No. AI amplifies what already exists. Without alignment, it scales inconsistency, waste, and confusion.',
              },
              {
                question: 'What is the Core Alignment Model (CAM)?',
                answer:
                  'CAM aligns Mission, Vision, Strategy, and Tactics through continuous Conscious Awareness so systems reflect intent before optimization.',
              },
              {
                question: 'What outcomes can this deliver?',
                answer:
                  'Reduced churn, faster cash flow, higher retention, and scalable growth through evidence-based digital performance design.',
              },
            ]),
          ]}
        />'''

text = text.replace(old_jsonld, '        <JsonLd\n          id="schema-professional"\n          data={professionalSchema}\n        />')

path.write_text(text, encoding='utf-8')
