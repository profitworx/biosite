import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function XematixPage() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back to Home */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="gap-2">
            <Link href="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* XEMATIX Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            XEMATIX
          </h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Your Intuitive Thinking Operating System
          </p>
        </div>

        {/* Main Content */}
        <Card className="col-span-full bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
          <CardContent className="space-y-8 max-w-5xl mx-auto p-8">
            <div className="text-center">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Imagine a system that <strong>understands your deepest intentions</strong>, helps you <strong>organize your thoughts</strong>,
                and then <strong>translates those ideas into real-world actions</strong> – all while constantly checking to make sure everything
                stays true to your original purpose.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This is the essence of <strong>XEMATIX</strong>, a groundbreaking metacognitive software infrastructure that empowers
                systems to <strong>think about their own thinking</strong>. It acts like a thinking OS or the brain and nervous system
                for creators, strategists, and organizations, bridging the gap between abstract human ideas, expressed in everyday language,
                and the concrete logic needed to make things happen.
              </p>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-3xl font-semibold text-center mb-6">The Core Idea: Structured Thought, Dynamic Action</h3>
              <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto text-lg">
                XEMATIX is built on three main pillars that work together seamlessly:
              </p>

              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">1. Core Alignment Model (CAM)</CardTitle>
                    <CardDescription className="font-semibold text-base">Your Internal Compass</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      At its heart, CAM provides the system with an internal compass or DNA for structural logic and integrity.
                      It helps XEMATIX understand <strong>why</strong> something needs to be done, <strong>what</strong> the desired
                      future looks like, <strong>how</strong> to get there, and <strong>what specific actions</strong> are required.
                    </p>
                    <p className="mt-4">
                      It includes a Conscious Awareness element, allowing the system to actively monitor itself, reflect on its
                      coherence, and make adjustments over time, transforming a static plan into a dynamic, living system.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">2. Abstract Language Objects (ALOs)</CardTitle>
                    <CardDescription className="font-semibold text-base">Living Knowledge</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <p>
                      Think of an ALO as a live representation of your entire brand, a policy document, or any structured knowledge,
                      treating it as a dynamic, editable object. This is not just a static document; it&apos;s a living, thinking schema
                      that evolves with you — and corrects itself.
                    </p>
                    <p className="mt-4">
                      Your ideas, strategies, and content pieces are stored as modular sub-objects within the ALO, all carefully
                      linked to your CAM framework to ensure consistent alignment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">3. Five-Layered Flow</CardTitle>
                    <CardDescription className="font-semibold text-base">From Intent to Execution</CardDescription>
                  </CardHeader>
                  <CardContent className="text-muted-foreground leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Purpose (Anchor):</strong> Defines your core intent</p>
                      <p><strong>Projection (Vision):</strong> Outlines expected results</p>
                      <p><strong>Pathway (Orientation):</strong> Guides decision-making</p>
                      <p><strong>Actuator (Execution):</strong> Generates final actions</p>
                      <p><strong>Governor (Oversight):</strong> Ensures system integrity</p>
                    </div>
                    <p className="mt-4 text-sm">
                      This flow ensures continuous monitoring and refinement from initial thought to final action.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <Separator className="my-8" />

            <div>
              <h3 className="text-3xl font-semibold text-center mb-8">Why XEMATIX Matters</h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Self-Aware and Self-Correcting</h4>
                      <p className="text-muted-foreground">A system that thinks about its own thinking, constantly adapting and optimizing based on structured reasoning.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">From Thought to Action</h4>
                      <p className="text-muted-foreground">Seamlessly bridges high-level natural language intent to concrete, actionable logic capable of controlling diverse systems.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Unwavering Consistency</h4>
                      <p className="text-muted-foreground">By defining your core purpose once, ensures all outputs remain consistent and aligned with your brand and strategic goals.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Flexible and Future-Proof</h4>
                      <p className="text-muted-foreground">Decouples purpose from interface - your core ideas are independent of how they are delivered, offering immense agility.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Ethical by Design</h4>
                      <p className="text-muted-foreground">Anchors AI actions to a CAM schema aligned with human intent and values, enhancing ethical operation and trustworthiness.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold mb-2">Intelligent Framework</h4>
                      <p className="text-muted-foreground">More than software - it&apos;s a framework that helps give shape to thoughts and empowers systems to act with clarity and consistency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl font-semibold text-primary mb-6 max-w-4xl mx-auto">
                XEMATIX is more than just software; it&apos;s an intelligent framework that helps you give shape to your thoughts,
                maintain alignment across all your endeavors, and empower systems to act on your behalf with unparalleled clarity and consistency.
              </p>

              <Button size="lg" className="gap-2" asChild>
                <a href="https://xematix.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Explore XEMATIX.com
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* About the Creator */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src="/images/profile-avatar.jpg" alt="John Deacon" />
              <AvatarFallback className="bg-primary/10">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">John Deacon</p>
              <p className="text-sm text-muted-foreground">Founder & Architect of XEMATIX</p>
            </div>
          </div>
          <Button variant="outline" asChild>
            <Link href="/">
              Learn more about John &rarr;
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}