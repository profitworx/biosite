from pathlib import Path

path = Path('src/app/professional/page.tsx')
text = path.read_text(encoding='utf-8')

# adjust import
text = text.replace('import { creativeWorkSchema, faqSchema, absoluteUrl } from "@/lib/schema";',
                    'import { absoluteUrl } from "@/lib/schema";')

# insert schema constants inside component
marker = 'export default function ProfessionalPage() {'
insert = '''export default function ProfessionalPage() {
  const baseUrl = "https://bio.johndeacon.co.za";
  const professionalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": f"{baseUrl}/#john-deacon",
        "name": "John Deacon",
        "url": f"{baseUrl}/",
        "image": f"{baseUrl}/static/john-deacon.jpg",
        "jobTitle": "Metacognition Coach and Framework Architect",
        "nationality": "South Africa",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ZA"
        },
        "description": "South Africa-based researcher and digital practitioner focused on cognitive systems, AI, and metacognitive software infrastructure. Creator of the Core Alignment Model (CAM) and the XEMATIX framework.",
        "knowsAbout": [
          "Metacognition",
          "AI cognition and alignment",
          "Semantic systems and Abstract Language Objects (ALO)",
          "Process automation and workflow engineering",
          "Personal brand strategy and digital thought leadership",
          "Information marketing and SEO",
          "Industrial instrumentation and process control"
        ],
        "sameAs": [
          "https://www.linkedin.com/in/jdeaconx",
          "https://x.com/jdeaconx",
          "https://johndeacon.co.za",
          "https://ciabatta.co.za",
          "https://profitworx.com",
          "https://pagematix.com",
          "https://resumetobrand.com",
          "https://cyberkinesis.com"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "ProfitWorx",
          "url": "https://profitworx.com"
        },
        "brand": [
          { "@type": "Brand", "name": "XEMATIX", "url": f"{baseUrl}/#xematix" },
          { "@type": "Brand", "name": "CAM (Core Alignment Model)", "url": f"{baseUrl}/#cam" },
          { "@type": "Brand", "name": "Pagematix", "url": "https://pagematix.com" },
          { "@type": "Brand", "name": "ResumeToBrand", "url": "https://resumetobrand.com" }
        ]
      },
      {
        "@type": "WebSite",
        "@id": f"{baseUrl}/#website",
        "url": f"{baseUrl}/",
        "name": "John Deacon — Bio",
        "inLanguage": "en",
        "publisher": { "@id": f"{baseUrl}/#john-deacon" },
        "isFamilyFriendly": True,
        "about": { "@id": f"{baseUrl}/#john-deacon" },
        "sameAs": ["https://johndeacon.co.za"]
      },
      {
        "@type": "ProfilePage",
        "@id": f"{baseUrl}/professional#webpage",
        "url": f"{baseUrl}/professional",
        "name": "Professional — John Deacon",
        "isPartOf": { "@id": f"{baseUrl}/#website" },
        "about": { "@id": f"{baseUrl}/#john-deacon" },
        "primaryImageOfPage": f"{baseUrl}/static/john-deacon-professional.jpg",
        "description": "Professional profile of John Deacon — services, methods, and engagement model for metacognitive frameworks (CAM) and XEMATIX process control.",
        "datePublished": "2025-01-01",
        "dateModified": "2025-09-16",
        "inLanguage": "en",
        "speakable": {
          "@type": "SpeakableSpecification",
          "xpath": ["/html/head/title", "/html/body//h1"]
        },
        "breadcrumb": { "@id": f"{baseUrl}/professional#breadcrumb" },
        "mainEntity": { "@id": f"{baseUrl}/professional#catalog" }
      },
      {
        "@type": "BreadcrumbList",
        "@id": f"{baseUrl}/professional#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": f"{baseUrl}/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Professional",
            "item": f"{baseUrl}/professional"
          }
        ]
      },
      {
        "@type": "OfferCatalog",
        "@id": f"{baseUrl}/professional#catalog",
        "name": "Professional Services — John Deacon",
        "url": f"{baseUrl}/professional",
        "provider": { "@id": f"{baseUrl}/#john-deacon" },
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Metacognition coaching and brand alignment",
              "serviceType": "Advisory",
              "provider": { "@id": f"{baseUrl}/#john-deacon" },
              "areaServed": [
                { "@type": "Country", "name": "South Africa" },
                { "@type": "GeoCircle", "name": "Global" }
              ],
              "audience": {
                "@type": "Audience",
                "audienceType": "Corporate professionals and thought leaders"
              },
              "description": "Use CAM to align Mission, Vision, Strategy, and Tactics with a governing layer of Conscious Awareness — translating nuanced thinking into practical outputs."
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Research ALO and Writing ALO development",
              "serviceType": "Framework engineering",
              "provider": { "@id": f"{baseUrl}/#john-deacon" },
              "description": "Design and instrument Abstract Language Objects that encode voice, logic, and method, producing structured briefs and publication-ready writing aligned to CAM and XEMATIX."
            },
            "availability": "https://schema.org/LimitedAvailability"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "XEMATIX metacognitive process control",
              "serviceType": "System design",
              "provider": { "@id": f"{baseUrl}/#john-deacon" },
              "description": "Map intent to execution across XEMATIX layers (Anchor, Projection, Pathway, Actuator, Governor) to reduce drift and make automation accountable to Mission and Vision."
            },
            "availability": "https://schema.org/LimitedAvailability"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ResumeToBrand strategy",
              "serviceType": "Personal brand system",
              "provider": { "@id": f"{baseUrl}/#john-deacon" },
              "description": "Transform resumes and LinkedIn profiles into CAM-aligned personal brand systems with usable, market-ready positioning."
            },
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Pagematix microsite blueprint",
              "serviceType": "Information product and implementation guide",
              "provider": { "@id": f"{baseUrl}/#john-deacon" },
              "description": "One-page template strategy for rapid, aligned digital presence with integrated CRM and content workflows."
            },
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      {
        "@type": "CreativeWork",
        "@id": f"{baseUrl}/professional#john-deacon-alo",
        "name": "John Deacon ALO (Abstract Language Object)",
        "creator": { "@id": f"{baseUrl}/#john-deacon" },
        "isPartOf": { "@id": f"{baseUrl}/professional#webpage" },
        "keywords": [
          "ALO",
          "Core Alignment Model",
          "XEMATIX",
          "Digital Thought Leadership",
          "Semantic Resonance",
          "Metacognitive process control"
        ],
        "description": "Encodes voice, logic, and frameworks (CAM and XEMATIX) to produce aligned research, briefs, and writing. Structures Mission, Vision, Strategy, Tactics, and Conscious Awareness as a recursive scaffold."
      },
      {
        "@type": "FAQPage",
        "@id": f"{baseUrl}/professional#faq",
        "url": f"{baseUrl}/professional#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What problems do you solve for corporate professionals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "I align intent with execution. Using CAM and XEMATIX, we turn ambiguous goals into precise, accountable workflows that ship — from positioning and content systems to measurement and iteration."
            }
          },
          {
            "@type": "Question",
            "name": "How do engagements typically work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Short, outcome-focused sprints. We articulate Mission and Vision, decide on Strategy, and deploy Tactics with explicit guardrails. The meta-layer is Conscious Awareness to prevent drift."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer full-service consulting?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The primary focus is frameworks and information products. Hands-on advisory is selectively available where there is strong strategic fit and clear ROI."
            }
          },
          {
            "@type": "Question",
            "name": "Where can I read more of your work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "See the main blog at https://johndeacon.co.za for articles on metacognition, AI cognition, semantic systems, and practical workflows."
            }
          },
          {
            "@type": "Question",
            "name": "Are you South Africa-based and do you work globally?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. I'm based in South Africa and work globally through digital channels."
            }
          }
        ]
      }
    ]
  };
'''

if marker in text:
    text = text.replace(marker, insert, 1)
else:
    raise SystemExit('Function declaration not found')

old_block = "        <JsonLd\n          id=\"schema-professional\"\n          data={[\n            creativeWorkSchema({"
if old_block in text:
    text = text.replace(text[text.find(old_block):text.find('        />', text.find(old_block)) + len('        />')], '        <JsonLd\n          id="schema-professional"\n          data={professionalSchema}\n        />', 1)
else:
    # fallback simple replace
    text = text.replace('        <JsonLd\n          id="schema-professional"\n          data={[\n            creativeWorkSchema({
              name: ', '        <JsonLd\n          id="schema-professional"\n          data={professionalSchema}\n        />')

path.write_text(text, encoding='utf-8')
