import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Gauge, Activity, Target, Layers, Rocket, CheckCircle2, ExternalLink } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JsonLd } from "@/components/seo/json-ld";
import { creativeWorkSchema, faqSchema, absoluteUrl } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Performance Strategy | John Deacon",
  description:
    "Digital Performance Strategy that aligns Mission, Vision, Strategy, Tactics with Conscious Awareness. Build AI-native operating systems that scale outcomes.",
  alternates: { canonical: absoluteUrl('/professional') },
};

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <JsonLd
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

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Digital Performance Strategy
          </h1>
          <p className="text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            The Brutal Truth About AI and Performance
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary">Alignment</Badge>
            <Badge variant="secondary">Evidence</Badge>
            <Badge variant="secondary">AI-Native</Badge>
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
              <h4 className="font-semibold text-primary uppercase tracking-wide text-sm">Call to Action</h4>
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

