import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JsonLd } from "@/components/seo/json-ld";
import { buildPageMetadata } from "@/lib/seo";
import { creativeWorkSchema, faqSchema, absoluteUrl } from "@/lib/schema";
import { getDeclaredAiModels } from "@/lib/llms";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = buildPageMetadata({
  path: "/xematix",
  title: "XEMATIX: The Architecture of Intent",
  description:
    "A pre-execution semantic control layer that governs intent lineage, meaning integrity, and authorization before autonomous execution.",
  keywords: [
    "Pre-execution Semantic Control",
    "Semantic Control Layer",
    "XSALF",
    "Abstract Language Objects",
    "AI Governance",
    "Semantic Drift",
    "Intent Lineage",
    "Core Alignment Model",
  ],
});

export default function XematixPage() {
  const aiModels = getDeclaredAiModels();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <JsonLd
          id="schema-xematix"
          data={[
            creativeWorkSchema({
              name: "XEMATIX: The Architecture of Intent",
              description:
                "A pre-execution semantic control layer that governs how human intent becomes authorized machine action.",
              keywords: [
                "XEMATIX",
                "Semantic Control",
                "Intent Alignment",
                "CAM",
                "Abstract Language Objects",
                "XSALF",
                "AI Governance",
              ],
              url: absoluteUrl("/xematix"),
            }),
            faqSchema([
              {
                question: "What is XEMATIX?",
                answer:
                  "XEMATIX is a pre-execution semantic control system that binds human intent to machine execution through traceable intent lineage and meaning integrity checks.",
              },
              {
                question: "How does XEMATIX relate to CAM and ALOs?",
                answer:
                  "CAM provides an intent hierarchy (Anchor, Projection, Pathway, Actuator, Governor), while Abstract Language Objects (ALOs) store living knowledge linked to that intent structure.",
              },
              {
                question: "What is XSALF?",
                answer:
                  "XSALF (XEMATIX Semantic Alignment Loss Function) measures meaning integrity before execution, allowing actions to be blocked or degraded if they drift from original purpose.",
              },
              {
                question: "Which LLMs does XEMATIX use?",
                answer:
                  "XEMATIX is model-agnostic; this site publishes a discovery manifest at /llms.txt that includes the currently declared models and integration context.",
              },
            ]),
          ]}
        />

        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>

        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            XEMATIX
          </h1>
          <p className="text-2xl text-muted-foreground mb-2 max-w-3xl mx-auto">
            The Architecture of Intent
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">Engineering responsibility for the AI age</p>
        </div>

        <Card className="col-span-full bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
          <CardContent className="space-y-10 max-w-5xl mx-auto p-8">
            <div className="space-y-4 text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <strong>XEMATIX</strong> is a rigorous <strong>pre-execution semantic control layer</strong> that defines the missing
                architecture between human intent and machine execution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                While LLMs are powerful proposal generators, they lack a governing frame that binds reasoning to purpose. XEMATIX provides
                this frame outside the model, governing how meaning is structured, preserved, and constrained before a single action runs.
              </p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-center">The Core Thesis: Judgment is Architectural</h2>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                XEMATIX asserts that judgment is not an internal property of a model, but a regulated relationship between intent, action,
                and consequence. It provides an external governance layer where intent lineage and authorization can be inspected and
                enforced.
              </p>
            </div>

            <Separator />

            <div>
              <h2 className="text-3xl font-semibold text-center mb-6">How it Works: Structural Integrity</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto text-lg">
                XEMATIX operates through architectural primitives that preserve meaning before execution.
              </p>

              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">1. Core Alignment Model (CAM)</CardTitle>
                    <CardDescription className="font-semibold text-base">Intent lineage</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      CAM formalizes five linked layers of intent: <strong>Anchor</strong>, <strong>Projection</strong>,{" "}
                      <strong>Pathway</strong>, <strong>Actuator</strong>, and <strong>Governor</strong>.
                    </p>
                    <p className="mt-4">
                      Every tactical action can be traced back to purpose, making execution accountable to mission-level intent.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">2. Abstract Language Objects (ALOs)</CardTitle>
                    <CardDescription className="font-semibold text-base">Living knowledge</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      ALOs are structured semantic containers that hold policy, brand logic, constraints, and reasoning style as a living
                      object—not a static document.
                    </p>
                    <p className="mt-4">
                      Because ALOs are linked to CAM, the system can enforce alignment at the data layer, not just in prompts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">3. XSALF Authorization Loop</CardTitle>
                    <CardDescription className="font-semibold text-base">Meaning integrity</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      XSALF (XEMATIX Semantic Alignment Loss Function) measures semantic drift <strong>before execution</strong>.
                    </p>
                    <p className="mt-4">
                      It can <strong>block</strong> or <strong>degrade</strong> actions if intent decay is detected, enforcing a simple
                      question: <strong>Is this action justified by its original purpose?</strong>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-3xl font-semibold text-center mb-8">Why This Matters</h2>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Pre-execution accountability</h3>
                      <p className="text-muted-foreground">
                        In an era of compounding inference, “it worked” is no longer the same as “it was aligned.”
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Traceable intent lineage</h3>
                      <p className="text-muted-foreground">
                        CAM makes every action traceable back through purpose, projection, and governance—so autonomy stays accountable.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Alignment as infrastructure</h3>
                      <p className="text-muted-foreground">
                        XEMATIX treats alignment as systems architecture, not prompt craft—and makes meaning safe to execute.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Model-agnostic governance</h3>
                      <p className="text-muted-foreground">
                        LLMs generate proposals. XEMATIX governs meaning and authorization outside any single model.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Governed autonomy</h3>
                      <p className="text-muted-foreground">
                        XSALF provides an authorization loop that can block or degrade actions when semantic drift is detected.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold mb-2">Operational consistency</h3>
                      <p className="text-muted-foreground">
                        ALOs encode voice, logic, and policy so outputs remain consistent as tools, interfaces, and models change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-6">
              <h2 className="text-3xl font-semibold text-center">A Note on the Metaphor</h2>
              <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
                To explain this to a non-technical audience: <strong>LLMs are like powerful engines</strong>, and <strong>agents are drivers</strong>.
                Without XEMATIX, the driver is often operating without a map or safety rails. XEMATIX is the rail system and the signaling
                logic—it doesn&apos;t drive the train, but it ensures the train cannot leave the track.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-semibold">LLMs and Discovery</h2>
              <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                This site publishes an LLM discovery manifest at <Link className="underline underline-offset-4" href="/llms.txt">/llms.txt</Link>.
              </p>
              {aiModels.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2">
                  {aiModels.map((model) => (
                    <Badge key={model} variant="secondary">
                      {model}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div className="text-center mt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="https://xematix.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Explore the Specification at XEMATIX.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src="/images/john_deacon_profile_2026.png" alt="John Deacon" />
              <AvatarFallback className="bg-primary/10">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">John Deacon</p>
              <p className="text-sm text-muted-foreground">Founder & Architect of XEMATIX</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">Learn more about John &rarr;</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
