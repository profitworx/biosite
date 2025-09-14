import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Wrench, FileText, Bot, Zap, Globe, Briefcase } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionPageSchema, faqSchema, absoluteUrl } from "@/lib/schema";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <JsonLd
          id="schema-tools"
          data={[
            collectionPageSchema({
              name: 'Digital Tools — John Deacon',
              description:
                'Schema-driven tools, automation scripts, and microsite templates aligned with metacognitive software principles.',
              keywords: ['Digital Tools', 'Automation', 'Semantic Design'],
              url: absoluteUrl('/tools'),
            }),
            faqSchema([
              {
                question: 'What kind of tools are these?',
                answer:
                  'Utilities and templates that embody structured thinking, semantic design, and intelligent automation.',
              },
              {
                question: 'Are the tools production-ready?',
                answer:
                  'Some are live, others are in development; each card indicates availability and purpose.',
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

        {/* Digital Tools Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Digital Tools
          </h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Schema-driven tools, automation scripts, and microsite templates for creators and professionals
          </p>
          <div className="flex justify-center gap-2 mb-6">
            <Badge variant="secondary">AI-Powered</Badge>
            <Badge variant="secondary">Automation</Badge>
            <Badge variant="secondary">Brand Building</Badge>
            <Badge variant="secondary">Content Creation</Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              These tools embody the principles of structured thinking, semantic design, and intelligent automation.
              Each solution is built to save time, generate value, and maintain alignment with your core purpose
              while scaling your digital presence and professional capabilities.
            </p>
          </CardContent>
        </Card>

        {/* Tools Grid */}
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 mb-12">
          {/* CyberKinesis WORKBENCH */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">CyberKinesis WORKBENCH</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      AI-Powered Analysis & Document Generation
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">AI-Powered</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Transform your observations into actionable insights with AI-powered analysis, intelligent synthesis,
                and automated document generation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>AI-powered observation analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Intelligent data synthesis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Automated document generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Actionable insight extraction</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="w-full gap-2" disabled>
                  <FileText className="w-4 h-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* ResumeToBrand */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">ResumeToBrand</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      Instant Professional Brand Transformation
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">Brand Building</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Transform Your Resume in Minutes. Upload your LinkedIn PDF or resume and instantly receive
                a comprehensive brand document plus a modern, ATS-optimized resume template.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>LinkedIn PDF & resume upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Comprehensive brand document generation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>ATS-optimized resume templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>No design experience required</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="w-full gap-2" disabled>
                  <Briefcase className="w-4 h-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* XEMATIX Post Automation Pipeline */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                    <Bot className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">XEMATIX Post Automation Pipeline</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      Complete Content Publishing Automation
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">Automation</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                A Google Apps Script-based system that automates the entire content creation and publishing
                workflow from user input to WordPress publication.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Google Apps Script automation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>End-to-end content workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Direct WordPress publishing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>User input to publication automation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="w-full gap-2" disabled>
                  <Bot className="w-4 h-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pagematix */}
          <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-primary">Pagematix</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground mt-1">
                      All-in-One Microsite Builder Platform
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">Platform</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Unleash Your Business Potential: Effortlessly Create, Market, and Sell with Our Dynamic Page Builder!
                All-in-one microsite builder platform for professionals.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-sm">Key Features:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Dynamic page builder interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Integrated marketing tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>E-commerce capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>Professional microsite creation</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4">
                <Button className="w-full gap-2" disabled>
                  <Globe className="w-4 h-4" />
                  Coming Soon
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Philosophy Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">Built on Core Principles</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Structured Thinking</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Every tool is built around CAM principles, ensuring your actions align with your core purpose and vision.
              </CardContent>
            </Card>

            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Intelligent Automation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Leverage AI and automation to scale your capabilities while maintaining semantic alignment and quality.
              </CardContent>
            </Card>

            <Card className="border-primary/10 text-center">
              <CardHeader>
                <div className="p-3 rounded-full bg-primary/10 w-fit mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Semantic Design</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Tools that understand meaning and context, not just process data, creating truly intelligent workflows.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Workflow?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These tools represent the future of intelligent, purpose-driven automation. Stay tuned as we launch
                each solution, designed to help creators and professionals scale their impact while staying true to their core mission.
              </p>
              <div className="flex gap-4 justify-center">
                <Button asChild>
                  <Link href="/">
                    Learn More About Our Philosophy
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/xematix">
                    Explore XEMATIX Framework
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* About the Creator */}
        <div className="text-center">
          <Separator className="mb-8" />
          <div className="flex items-center justify-center gap-4 mb-6">
            <Avatar className="w-12 h-12 border-2 border-primary/20">
              <AvatarImage src="/images/profile-avatar.jpg" alt="John Deacon" />
              <AvatarFallback className="bg-primary/10">JD</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <p className="font-semibold">John Deacon</p>
              <p className="text-sm text-muted-foreground">Creator of Digital Independence Tools</p>
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
