import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gauge, Activity, Target, Layers, Rocket, CheckCircle2, ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Performance Strategy | John Deacon",
  description:
    "Digital Performance Strategy that aligns Mission, Vision, Strategy, Tactics with Conscious Awareness. Build AI-native operating systems that scale outcomes.",
  alternates: { canonical: absoluteUrl('/professional') },
};

export default function ProfessionalPage() {
  const baseUrl = "https://bio.johndeacon.co.za";
  const professionalSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#john-deacon`,
        name: "John Deacon",
        url: `${baseUrl}/`,
        image: `${baseUrl}/static/john-deacon.jpg`,
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
          { "@type": "Brand", name: "XEMATIX", url: `${baseUrl}/#xematix` },
          { "@type": "Brand", name: "CAM (Core Alignment Model)", url: `${baseUrl}/#cam` },
          { "@type": "Brand", name: "Pagematix", url: "https://pagematix.com" },
          { "@type": "Brand", name: "ResumeToBrand", url: "https://resumetobrand.com" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: `${baseUrl}/`,
        name: "John Deacon - Bio",
        inLanguage: "en",
        publisher: { "@id": `${baseUrl}/#john-deacon` },
        isFamilyFriendly: true,
        about: { "@id": `${baseUrl}/#john-deacon` },
        sameAs: ["https://johndeacon.co.za"],
      },
      {
        "@type": "ProfilePage",
        "@id": `${baseUrl}/professional#webpage`,
        url: `${baseUrl}/professional`,
        name: "Professional - John Deacon",
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: { "@id": `${baseUrl}/#john-deacon` },
        primaryImageOfPage: `${baseUrl}/static/john-deacon-professional.jpg`,
        description:
          "Professional profile of John Deacon - services, methods, and engagement model for metacognitive frameworks (CAM) and XEMATIX process control.",
        datePublished: "2025-01-01",
        dateModified: "2025-09-16",
        inLanguage: "en",
        speakable: {
          "@type": "SpeakableSpecification",
          xpath: ["/html/head/title", "/html/body//h1"],
        },
        breadcrumb: { "@id": `${baseUrl}/professional#breadcrumb` },
        mainEntity: { "@id": `${baseUrl}/professional#catalog` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/professional#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${baseUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Professional",
            item: `${baseUrl}/professional`,
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        "@id": `${baseUrl}/professional#catalog`,
        name: "Professional Services - John Deacon",
        url: `${baseUrl}/professional`,
        provider: { "@id": `${baseUrl}/#john-deacon` },
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Metacognition coaching and brand alignment",
              serviceType: "Advisory",
              provider: { "@id": `${baseUrl}/#john-deacon` },
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
              provider: { "@id": `${baseUrl}/#john-deacon` },
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
              provider: { "@id": `${baseUrl}/#john-deacon` },
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
              provider: { "@id": `${baseUrl}/#john-deacon` },
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
              provider: { "@id": `${baseUrl}/#john-deacon` },
              description:
                "One-page template strategy for rapid, aligned digital presence with integrated CRM and content workflows.",
            },
            availability: "https://schema.org/InStock",
          },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${baseUrl}/professional#john-deacon-alo`,
        name: "John Deacon ALO (Abstract Language Object)",
        creator: { "@id": `${baseUrl}/#john-deacon` },
        isPartOf: { "@id": `${baseUrl}/professional#webpage` },
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
        "@id": `${baseUrl}/professional#faq`,
        url: `${baseUrl}/professional#faq`,
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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <JsonLd
          id="schema-professional"
          data={professionalSchema}
        />

        {/* Theme Toggle */}
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        {/* Back to Home */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Professional Header */}
        <div className="text-center mb-12">
          <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
            <AvatarImage src="/images/john_deacon_profile_2025.png" alt="John Deacon" />
            <AvatarFallback className="font-bold bg-primary/10">JD</AvatarFallback>
          </Avatar>
          <h1
            className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
            style={{ lineHeight: "1.3", paddingBottom: "0.1em" }}
          >
            Digital Performance Strategy
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
            Discipline before digital. Align mission, vision, strategy, tactics, and conscious awareness before automation or AI.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <Badge variant="secondary">Digital Performance Management</Badge>
            <Badge variant="secondary">Core Alignment Model</Badge>
            <Badge variant="secondary">XEMATIX</Badge>
            <Badge variant="secondary">AI Governance</Badge>
          </div>
          <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-6">
            <MapPin className="w-4 h-4" />
            <span>Kenton-on-Sea, Eastern Cape, South Africa</span>
          </div>
          <div className="flex justify-center gap-3">
            <Button variant="default" className="gap-2" asChild>
              <a href="mailto:john@profitworx.com">
                <Mail className="w-4 h-4" />
                Start Alignment
              </a>
            </Button>
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/cam">
                <ExternalLink className="w-4 h-4" />
                Explore CAM
              </Link>
            </Button>
          </div>
        </div>
        {/* Truth */}
        <Card className="mb-8 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              AI doesn&apos;t fix broken strategy - it amplifies it. Most companies bolt shiny tools onto brittle processes and call it innovation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The result? Millions burned, customers frustrated, teams demoralized, and leadership still wondering why performance lags.
            </p>
          </CardContent>
        </Card>

        {/* Digital Performance Management */}
        <Card className="mb-12 border-primary/25 bg-gradient-to-br from-background via-primary/5 to-primary/10">
          <CardHeader className="space-y-2">
            <div className="flex items-center gap-2 text-primary">
              <Gauge className="w-5 h-5" />
              <CardTitle className="text-2xl">Digital Performance Management</CardTitle>
            </div>
            <CardDescription className="text-base">
              Aligning strategy, process, and technology for measurable results.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">
            <p>Most companies don&apos;t have a technology problem - they have an alignment problem.</p>
            <p>
              AI has exposed this brutally: automate a broken process, and you break it faster. Cut staff to appear &quot;efficient,&quot; and you accelerate dysfunction. The truth is simple: technology amplifies what already exists - whether that&apos;s clarity or chaos.
            </p>
            <p>
              Digital Performance Management is about discipline before digital. Fix the fundamentals - Mission, Vision, Strategy, and Tactics - before layering on AI or automation.
            </p>
            <div>
              <h4 className="font-semibold text-primary uppercase tracking-wide text-sm">My Approach</h4>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li><strong>Mission</strong> - Identify the real problem behind the noise.</li>
                <li><strong>Vision</strong> - Define outcomes that matter, not vanity metrics.</li>
                <li><strong>Strategy</strong> - Map process integrity before automation.</li>
                <li><strong>Tactics</strong> - Deploy digital tools that make top performers win bigger, not prop up weak systems.</li>
                <li><strong>Conscious Awareness</strong> - Continuously monitor alignment so every initiative drives value.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary uppercase tracking-wide text-sm">Why This Matters Now</h4>
              <ul className="mt-2 space-y-2 list-disc list-inside">
                <li>Companies have burned $400M+ on failed AI projects by skipping this step.</li>
                <li>Leaders face pressure to &quot;go AI&quot; but lack frameworks to measure ROI beyond pilot hype.</li>
                <li>Boards and investors demand quarterly results, not multi-year promises - alignment is the only way to deliver.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary uppercase tracking-wide text-sm">The XEMATIX Edge</h4>
              <p className="mt-2">
                XEMATIX is my metacognitive process control framework. It doesn&apos;t promise AI magic - it keeps every digital initiative tethered to intent, process integrity, and measurable outcomes.
              </p>
            </div>
            <div className="space-y-2 font-medium text-foreground">
              <p>Where others chase tools, we manage cognition.</p>
              <p>Where others amplify dysfunction, we engineer alignment.</p>
              <p>That is Digital Performance Management done right.</p>
            </div>
            <Separator className="my-4" />
            <div>
              <h4 className="font-semibold text-primary uppercase tracking-wide text-sm">Follow</h4>
              <p className="mt-2 font-semibold text-foreground">
                If you&apos;re ready to stop burning money on hype and start building durable performance, I help leaders embed alignment into every digital decision.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Where I Operate */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-semibold">Where I Operate</h2>
          </div>
          <Card className="border-primary/20">
            <CardContent className="p-6 text-muted-foreground leading-relaxed">
              <p>
                I architect Digital Performance Strategy at the level that matters - aligning <strong>Mission</strong>, <strong>Vision</strong>, <strong>Strategy</strong>, <strong>Tactics</strong>, and <strong>Conscious Awareness</strong> through my Core Alignment Model (CAM).
              </p>
              <p className="mt-3">
                With this foundation, digital systems stop being vanity projects and start becoming performance engines.
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-10" />

        {/* Why This Matters */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Why This Matters</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Gauge className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">Alignment before Automation</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">CAM builds the foundation</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                CAM ensures processes work before they&apos;re optimized. Fix the flow, then scale it.
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">Augmentation over Replacement</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">XEMATIX as leverage</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                XEMATIX, my metacognitive process control system, gives top performers exponential leverage - not band-aids for dysfunction.
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Activity className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">Evidence, not Hype</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Outcomes that matter</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                Every digital strategy ties to measurable outcomes: reduced churn, faster cash flow, higher retention, scalable growth.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Edge */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold">My Edge</h3>
          </div>
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
            <CardContent className="p-8 text-muted-foreground leading-relaxed">
              <p>
                I&apos;ve spent two decades at the intersection of automation, cognitive systems, and performance architecture. While others chase &quot;AI-ready&quot; slogans, I design <strong>AI-native operating systems</strong> - where intent, process, and technology interlock.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What You Get */}
        <div className="mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold">What You Get</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">Clarity Map</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Foundation scan</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                A clear map of your digital foundation: what&apos;s working, what&apos;s broken, and what needs realignment.
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Rocket className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">AI as Amplifier</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Excellence, scaled</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                A strategy that uses AI to amplify excellence - not a band-aid for dysfunction.
              </CardContent>
            </Card>
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-2 mb-1">
                  <Layers className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg text-primary">Durable Architecture</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Built to scale</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                A performance architecture you can trust to scale - not just another tool deployment.
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-10" />

        {/* In Plain Terms */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold mb-3">In Plain Terms</h3>
          <p className="text-lg text-muted-foreground">
            I make sure your Ferrari has wheels before we fire up the engine.
          </p>
        </div>

        {/* CTA: Read more on the blog */}
        <Card className="mb-6 border-primary/20">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xl font-semibold">Dive Deeper: Digital Performance Management</h4>
                <p className="text-muted-foreground">Read more on the blog about identity and performance.</p>
              </div>
              <Button variant="outline" className="gap-2" asChild>
                <a href="https://johndeacon.co.za/thought-leadership-identity/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Visit the Blog
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

