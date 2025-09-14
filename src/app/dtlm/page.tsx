import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Zap, Target, Unlock, Star, TrendingUp, Compass, Focus, Users, BarChart3, Lightbulb } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function DTLMPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
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

        {/* DTLM Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Digital Thought Leadership Model
          </h1>
          <p className="text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto">
            Unlock Hidden Features for Mastery in Digital Influence
          </p>
          <div className="flex justify-center gap-2 mb-6 flex-wrap">
            <Badge variant="secondary">Personal Branding</Badge>
            <Badge variant="secondary">Digital Innovation</Badge>
            <Badge variant="secondary">Core Alignment</Badge>
            <Badge variant="secondary">Thought Leadership</Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <p className="text-xl font-semibold text-primary mb-4">
                DTLM is more than a model—it&apos;s a toolkit.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I am making the <strong>Digital Thought Leadership Model (DTLM)</strong> accessible and actionable
                for those who want to be guided by knowledge-based using a proprietary model support. By uncovering
                and defining the hidden features of DTLM, you&apos;ll have the practical tools and a roadmap for mastery.
              </p>
            </div>
            <div className="bg-background/50 rounded-lg p-6">
              <p className="text-muted-foreground text-center">
                Each part has hidden features that, once unlocked, transform how you lead and engage digitally.
                Whether it&apos;s reaching new audiences through Digital Innovation or staying true to your mission
                with the Core Alignment Model, DTLM powers your path to thought leadership.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Three Core Components */}
        <div className="mb-16">
          <h2 className="text-4xl font-semibold text-center mb-12">Unlockable Features of DTLM</h2>

          <div className="space-y-12">
            {/* Personal Branding */}
            <div>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                      <User className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-primary">Personal Branding</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Establish a unique, authentic digital presence that aligns with thought leadership goals
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Functions */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Unlock className="w-5 h-5 text-primary" />
                        Functions
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">DefineValueProposition</h5>
                          <p className="text-sm text-muted-foreground">
                            Help users identify what makes them unique and how to communicate that value effectively.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">DevelopContentStrategy</h5>
                          <p className="text-sm text-muted-foreground">
                            Guide them to create a content plan with themes, formats, and frequency.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">CommunityEngagement</h5>
                          <p className="text-sm text-muted-foreground">
                            Provide methods to grow an online following and foster active engagement.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Powers */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Powers
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Focus className="w-4 h-4" />
                            Clarity
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Users gain a clear, strong personal brand that resonates with their audience.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Authenticity
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Builds trust by aligning brand messaging with their core values and mission.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            Influence
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Establishes a recognized digital presence that attracts and retains an engaged audience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Digital Innovation */}
            <div>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                      <Zap className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-primary">Digital Innovation</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Leverage digital tools and data to amplify reach and optimize engagement
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Functions */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Unlock className="w-5 h-5 text-primary" />
                        Functions
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">CreatePersonalWebsite</h5>
                          <p className="text-sm text-muted-foreground">
                            Teach users how to build a simple, brand-aligned website as a digital anchor.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">IntegrateDigitalPlatforms</h5>
                          <p className="text-sm text-muted-foreground">
                            Show how to link social profiles and website for consistent messaging.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">EnhanceVisibilityWithSEO</h5>
                          <p className="text-sm text-muted-foreground">
                            Provide basics of SEO and analytics to boost visibility.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Powers */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Powers
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Reach
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Expands their visibility, reaching more of their target audience.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Consistency
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Creates a cohesive digital experience across platforms.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <BarChart3 className="w-4 h-4" />
                            Insight
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Enables data-driven adjustments for better engagement and impact.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Core Alignment Model */}
            <div>
              <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardHeader className="text-center pb-6">
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10">
                      <Compass className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-primary">Core Alignment Model (CAM)</CardTitle>
                      <CardDescription className="text-lg mt-2">
                        Serve as a compass that aligns every action with mission, vision, strategy, and tactics
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Functions */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Unlock className="w-5 h-5 text-primary" />
                        Functions
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">ClarifyPurpose (Mission)</h5>
                          <p className="text-sm text-muted-foreground">
                            Help users define their fundamental purpose and values.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">DefineVision</h5>
                          <p className="text-sm text-muted-foreground">
                            Set long-term, aspirational goals that align with their mission.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">DevelopStrategicPlan</h5>
                          <p className="text-sm text-muted-foreground">
                            Outline the broad methods and platforms they&apos;ll use.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">ExecuteTactics</h5>
                          <p className="text-sm text-muted-foreground">
                            Map out actionable steps to implement strategy, such as content calendar creation.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2">AlignAndReflect</h5>
                          <p className="text-sm text-muted-foreground">
                            Create a feedback loop to reassess and make adjustments.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Powers */}
                    <div>
                      <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Powers
                      </h4>
                      <div className="space-y-4">
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Focus className="w-4 h-4" />
                            Focus
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Provides a structured way to prioritize and focus efforts.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            Alignment
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            Ensures all actions reinforce a clear purpose and vision.
                          </p>
                        </div>
                        <div className="bg-background/70 rounded-lg p-4">
                          <h5 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4" />
                            Sustainability
                          </h5>
                          <p className="text-sm text-muted-foreground">
                            By aligning with mission and values, they build a long-lasting, resilient strategy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Tools Integration */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-8">DTLM-Powered Digital Tools</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto text-lg">
            Our digital tools are built directly into the DTLM framework, making thought leadership accessible and actionable.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  ResumeToBrand Integration
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  ResumeToBrand solution incorporates DTLM principles to transform your professional experience
                  into a comprehensive thought leadership brand document.
                </p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>Personal Branding:</strong> Extracts and defines your unique value proposition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>Digital Innovation:</strong> Creates optimized digital presence templates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span><strong>CAM Alignment:</strong> Structures your mission, vision, strategy and tactics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Complete Tool Ecosystem
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                <p className="mb-4">
                  All our digital tools are designed around DTLM principles, creating a comprehensive
                  thought leadership toolkit.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>CyberKinesis WORKBENCH for insight analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>XEMATIX Pipeline for content automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span>Pagematix for digital presence building</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 border-primary/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-4">Ready to Unlock Your DTLM Potential?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Each component of DTLM contains unlockable features that transform how you lead and engage digitally.
                Start your journey with our integrated tools and frameworks.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild>
                  <Link href="/tools">
                    Explore DTLM Tools
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/cam">
                    Learn Core Alignment Model
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
              <p className="text-sm text-muted-foreground">Creator of the Digital Thought Leadership Model</p>
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