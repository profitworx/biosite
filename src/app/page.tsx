import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail, ExternalLink, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
            <AvatarImage src="/images/profile-avatar.jpg" alt="John Deacon Profile" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10">JD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            John Deacon
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Architecting Semantic Systems | Building Tools That Align Software with Human Intention
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary">Semantic Interface Architecture</Badge>
            <Badge variant="secondary">Metacognitive System Design</Badge>
            <Badge variant="secondary">Intent Modeling &amp; Alignment</Badge>
            <Badge variant="secondary">XEMATIX Framework</Badge>
          </div>
          
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Kenton-on-Sea, Eastern Cape, South Africa</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2" asChild>
              <a href="mailto:john@profitworx.com">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <a href="https://johndeacon.co.za" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Read Articles
              </a>
            </Button>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* About Section */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="text-2xl">About</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m designing systems that align with how humans actually think - not just how machines process input. 
                At the center of that vision is XEMATIX - a cognitive interface architecture that bridges natural language, 
                structured logic, and contextual reasoning. It&apos;s not a product. It&apos;s a foundation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Underneath it sits the Core Alignment Model (CAM) - a metacognitive framework I developed over years 
                of systems design, cognitive modeling, and strategic problem-solving. CAM brings structure to human 
                intent through a Mission. Vision. Strategy. Tactics. Conscious Awareness scaffold, allowing systems 
                to interpret, reason, and execute based on semantic alignment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m now sharing these ideas publicly - through content, scripts, templates, and systems - helping 
                independent professionals and creators apply structured thinking, automation, and semantic design 
                to their own workflows.
              </p>
            </CardContent>
          </Card>

          {/* Featured Highlights Section */}
          <Card className="col-span-full bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 border-primary/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Design Systems That Think Like You Do
              </CardTitle>
              <CardDescription className="text-lg text-foreground/80 max-w-3xl mx-auto">
                From alignment to execution - where language becomes logic.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center max-w-4xl mx-auto space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Visibility is no longer the metric that matters. Alignment is the new foundation of intelligence.</strong>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Digital Thought Leadership is evolving—from content and visibility toward semantic structure and cognitive clarity. 
                  My work sits at the intersection of interface logic and intentional system design, helping thinkers, technologists, 
                  and builders structure systems that scale meaning—not just output.
                </p>
                
                <div className="my-8 flex justify-center">
                  <img 
                    src="/images/john-deacon-featured.png" 
                    alt="John Deacon - Cognitive Systems Architect"
                    className="rounded-lg shadow-lg max-w-md w-full h-auto border border-primary/20"
                  />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  If you&apos;re driven by ideas that deserve semantic structure and intelligent execution, 
                  you&apos;re already thinking like a cognitive architect. I help you build it—strategically, structurally, and systemically.
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">XEMATIX Architecture</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Cognitive interface architecture that bridges natural language, structured logic, and contextual reasoning.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/xematix">
                        Explore XEMATIX &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">CAM Framework</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Core Alignment Model - a metacognitive framework for structuring Mission, Vision, Strategy, and Tactics.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/cam">
                        Learn CAM &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">DTLM System</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Digital Thought Leadership Model for creating meaningful influence through aligned systems.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/dtlm">
                        Discover DTLM &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">The Journey</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      From analogue systems to digital architectures - the path to purposeful transformation.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#journey">
                        Read Story &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Blog &amp; Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Ongoing thoughts, tools, and frameworks for structured thinking and semantic design.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="https://johndeacon.co.za" target="_blank" rel="noopener noreferrer">
                        Visit Blog &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow border-primary/10">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Digital Tools</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Schema-driven tools, automation scripts, and microsite templates for creators and professionals.
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/tools">
                        View Tools &rarr;
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>


        <div className="grid gap-8 md:grid-cols-2 mt-12">
          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold">Founder • XEMATIX</h3>
                <p className="text-sm text-muted-foreground">January 2025 - Present</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Building semantic control systems that interpret human intent through structured language and contextual logic. 
                  Developing the Core Alignment Model (CAM) framework for cognitive interface software.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Founder &amp; Strategist • ProfitWorx</h3>
                <p className="text-sm text-muted-foreground">May 2008 - Present (17+ years)</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Strategic consulting in semantic SEO, content engineering, and digital systems. 
                  Productized automation solutions for writers, creators, and marketers.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Head of Product &amp; Business Development • PageMatix</h3>
                <p className="text-sm text-muted-foreground">March 2018 - Present (7+ years)</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Microsite platform empowering professionals to launch personal brands using CAM framework principles.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Global Account Executive • Bentley Systems</h3>
                <p className="text-sm text-muted-foreground">November 2004 - May 2008 (3.5 years)</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Managed global accounts for oil and gas industry including Anglo American, De Beers, Rio Tinto. 
                  Awarded winners circle for consecutive years in sales performance.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Expertise Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Expertise</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Semantic Systems Architecture</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">XEMATIX Framework</Badge>
                  <Badge variant="outline" className="text-xs">Core Alignment Model (CAM)</Badge>
                  <Badge variant="outline" className="text-xs">Intent Modeling</Badge>
                  <Badge variant="outline" className="text-xs">Cognitive Interface Design</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Digital Systems &amp; Automation</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Schema Design</Badge>
                  <Badge variant="outline" className="text-xs">Google Apps Script</Badge>
                  <Badge variant="outline" className="text-xs">Prompt Engineering</Badge>
                  <Badge variant="outline" className="text-xs">Workflow Automation</Badge>
                  <Badge variant="outline" className="text-xs">Microsite Development</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Strategic Consulting &amp; SEO</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Semantic SEO</Badge>
                  <Badge variant="outline" className="text-xs">Content Engineering</Badge>
                  <Badge variant="outline" className="text-xs">Digital Transformation</Badge>
                  <Badge variant="outline" className="text-xs">Business Development</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Engineering &amp; Technical</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Instrumentation Design</Badge>
                  <Badge variant="outline" className="text-xs">CAD Systems</Badge>
                  <Badge variant="outline" className="text-xs">Industrial Software</Badge>
                  <Badge variant="outline" className="text-xs">Project Management</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold">Bachelor of Arts - Business Administration &amp; Project Management</h3>
                <p className="text-sm text-muted-foreground">The University of Western Australia • 2005 - 2006</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Bachelor of Arts - Law &amp; Politics</h3>
                <p className="text-sm text-muted-foreground">University of South Africa • 2002 - 2005</p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Bachelor Juris - Law</h3>
                <p className="text-sm text-muted-foreground">Nelson Mandela University • 1990 - 1993</p>
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="text-xl">Current R&amp;D &amp; Thought Leadership</CardTitle>
              <CardDescription>
                Exploring the intersection of semantic systems, cognitive modeling, and human-computer interaction
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">XEMATIX: Cognitive Interface Architecture</h3>
                  <p className="text-xs text-muted-foreground">
                    Building semantic control systems that bridge natural language, structured logic, and contextual reasoning. 
                    Not just another AI feature set, but a foundation for intent-aligned computing.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Learn More &rarr;
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Core Alignment Model (CAM)</h3>
                  <p className="text-xs text-muted-foreground">
                    A metacognitive framework using Mission. Vision. Strategy. Tactics. Conscious Awareness scaffolding 
                    to structure human intent for semantic system alignment.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Explore Framework &rarr;
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Structured Thinking for AI Era</h3>
                  <p className="text-xs text-muted-foreground">
                    Helping independent professionals apply structured thinking, automation, and semantic design 
                    to create monetizable infrastructure and aligned workflows.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Read Articles &rarr;
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Digital Independence Tools</h3>
                  <p className="text-xs text-muted-foreground">
                    Schema-driven tools, automation scripts, and microsite templates that save time and generate revenue 
                    for creators who value clarity and control.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    View Tools &rarr;
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Links Footer */}
        <div className="mt-12 text-center">
          <Separator className="mb-8" />
          <div className="flex justify-center gap-4 mb-8">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/jdeaconx" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://profitworx.com" target="_blank" rel="noopener noreferrer" title="ProfitWorx Blog">
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:john@profitworx.com" title="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 John Deacon. Built with Next.js and shadcn/ui.
          </p>
        </div>
      </div>
    </div>
  );
}
