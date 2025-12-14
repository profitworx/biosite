import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Eye, Map, Zap, Brain } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JsonLd } from "@/components/seo/json-ld";
import { creativeWorkSchema, faqSchema, absoluteUrl } from "@/lib/schema";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Alignment Model (CAM): Align Purpose to Execution | John Deacon",
  description: "Metacognitive scaffold for mission, vision, strategy and tactics with continuous awareness to align intent to execution.",
  alternates: { canonical: absoluteUrl('/cam') },
};export default function CAMPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <JsonLd
          id="schema-cam"
          data={[
            creativeWorkSchema({
              name: 'Core Alignment Model (CAM)',
              description:
                'A metacognitive scaffold that aligns intent to execution through Mission, Vision, Strategy, Tactics, and Conscious Awareness.',
              keywords: ['CAM', 'Core Alignment Model', 'Metacognitive Framework'],
              url: absoluteUrl('/cam'),
            }),
            faqSchema([
              {
                question: 'What is CAM?',
                answer:
                  'CAM is a framework for aligning purpose with execution using a structured mental model and continuous awareness.',
              },
              {
                question: 'How does CAM help?',
                answer:
                  'It ensures clarity and consistency by anchoring decisions and actions to a shared structure of intent.',
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

        {/* CAM Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Core Alignment Model
          </h1>
          <p className="text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Your Compass for Clarity and Purpose in the Digital Age
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary">Mission</Badge>
            <Badge variant="secondary">Vision</Badge>
            <Badge variant="secondary">Strategy</Badge>
            <Badge variant="secondary">Tactics</Badge>
            <Badge variant="secondary">Conscious Awareness</Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              In today&apos;s fast-paced digital world, maintaining a clear sense of who you are, what you stand for,
              and what you aim to achieve can be incredibly challenging. The Core Alignment Model (CAM) is a powerful,
              visionary framework designed to be your <strong>personal compass for the mind</strong>, helping you navigate
              this complexity with intention and clarity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              CAM provides a structured way to align your deepest purpose with your everyday actions, ensuring that your
              digital presence and communications genuinely reflect your authentic self. It&apos;s about being proactive and
              intentional with technology, using it to amplify your genuine purpose rather than letting trends or external
              pressures define you.
            </p>
          </CardContent>
        </Card>

        {/* The Four Pillars */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">The Four Pillars: A Dynamic System</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            These aren&apos;t just buzzwords; they represent different, interconnected layers of thinking and doing,
            forming a dynamic system where every action is rooted in a clear understanding of your purpose.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Mission</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Your Core Purpose</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  This is your core purpose, the <strong>why</strong> behind everything you do. It&apos;s your fundamental
                  aim, your reason for being, serving as your ultimate anchor.
                </p>
                <p>
                  For an individual, it might be your personal calling or the key values you live by.
                  For a business, it&apos;s the central purpose or value proposition.
                </p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Key Question:</p>
                  <p className="text-sm">What ultimate purpose are we serving?</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Eye className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Vision</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Your Inspiring Future</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  This is the imagined future you seek – the inspiring <strong>what</strong> you want to create or become.
                  It&apos;s aspirational and vivid, providing a clear picture of success or fulfillment.
                </p>
                <p>
                  Your Vision acts as your guiding star, always aligned with your Mission, painting a compelling
                  picture of what fulfillment looks like.
                </p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Key Question:</p>
                  <p className="text-sm">What does the fulfilled mission look like in the future?</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Map className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Strategy</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Your Coherent Plan</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  This is your coherent plan, the high-level <strong>how</strong> you&apos;ll move from your current
                  reality to your desired future. Informed by knowledge and insight.
                </p>
                <p>
                  Strategy outlines the broad objectives and chosen paths you&apos;ll take to achieve your Vision,
                  in light of your Mission.
                </p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Key Question:</p>
                  <p className="text-sm">How do we move from where we are toward our vision, in light of our mission?</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-primary">Tactics</CardTitle>
                </div>
                <CardDescription className="font-semibold text-base">Your Concrete Actions</CardDescription>
              </CardHeader>
              <CardContent className="text-muted-foreground leading-relaxed">
                <p className="mb-3">
                  These are the concrete, day-to-day actions and <strong>doings</strong> that implement your Strategy.
                  They are the immediate steps, tools, and techniques.
                </p>
                <p>
                  Tactics are the execution level of your plan – the specific, measurable actions that move
                  you forward right now.
                </p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm font-medium">Key Question:</p>
                  <p className="text-sm">What specific actions do we take right now to advance the strategy?</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Conscious Awareness */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                <Brain className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-semibold">Conscious Awareness</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Living Glue of Alignment
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Beyond the four structural pillars, CAM introduces a crucial fifth element: <strong>Conscious Awareness</strong>.
                If Mission, Vision, Strategy, and Tactics are the framework, Conscious Awareness is the living glue that holds
                them together and keeps them vibrant.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">What It Is</h4>
                  <p className="text-muted-foreground mb-4">
                    An active, self-monitoring, and reflective capacity. Think of it as an internal compass
                    constantly checking alignment and coherence across all four pillars.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-primary">What It Does</h4>
                  <p className="text-muted-foreground mb-4">
                    It transforms CAM from a static plan into a dynamic, living system, making alignment
                    an ongoing practice rather than a one-time task.
                  </p>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-6 mt-6">
                <h4 className="font-semibold mb-3 text-center">Continuous Self-Reflection Questions</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Am I staying true to my mission?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Is my vision still inspiring?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Are my strategies effective and ethical?</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Do I need to adjust my approach?</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12" />

        {/* CAM in Action */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">CAM in Action: Your Blueprint for Digital Coherence</h2>

          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            As a cognitive architecture, CAM is more than just a planning tool; it&apos;s a mental model that helps
            structure your perception, guide your decision-making, and solidify your identity.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-primary/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Purposeful Perception</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground text-center">
                You naturally filter information, noticing what is meaningful to your Mission and Vision,
                effectively distinguishing signal from noise.
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Aligned Decision-Making</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground text-center">
                Your long-term Strategy and short-term Tactics work in sync, constantly monitored by
                Conscious Awareness to ensure every choice advances your goals.
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg">Integrated Identity</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground text-center">
                Your Mission and Vision are integrated into every decision, ensuring your actions feel
                authentic and align with who you truly are.
              </CardContent>
            </Card>
          </div>

          {/* Application Areas */}
          <h3 className="text-2xl font-semibold text-center mb-6">Real-World Applications</h3>

          <div className="space-y-6">
            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Personal Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                CAM helps you craft and maintain a consistent voice, message, and values across all your online channels.
                Your Mission becomes your north star, your Vision directs your aspirations, your Strategy informs how you
                present yourself, and your Tactics are your daily actions.
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Digital Communication</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Every marketing campaign, social media post, or internal message can be rooted in a clear core message (Mission),
                aimed at a specific audience impact (Vision), guided by a consistent communication plan (Strategy), and
                meticulously aligned in its creation (Tactics).
              </CardContent>
            </Card>

            <Card className="border-primary/10">
              <CardHeader>
                <CardTitle className="text-lg">Organizational Coherence</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                CAM enables organizations to combat silos by establishing Mission and Vision as cultural cornerstones.
                It aligns departmental strategies with overarching goals, ensuring that every tactical implementation
                contributes purposefully to unity and shared purpose.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8">
              <p className="text-xl font-semibold text-primary mb-4 max-w-4xl mx-auto">
                In essence, CAM helps you consistently align what you experience, what you plan, and what you do
                with a conscious sense of who you are.
              </p>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                It empowers you to design your mental frameworks thoughtfully and to steer through the torrent of
                the digital age with confidence, adaptability, and unwavering purpose.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About the Creator */}
        <div className="text-center">
          <Separator className="mb-8" />
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src="/images/john_deacon_profile_2026.png" alt="John Deacon" />
              <AvatarFallback className="bg-primary/10">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">John Deacon</p>
              <p className="text-sm text-muted-foreground">Developer of the Core Alignment Model</p>
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
