import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Twitter, Mail, ExternalLink, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/20">
            <AvatarImage src="/avatar.jpg" alt="Profile" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10">JD</AvatarFallback>
          </Avatar>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            John Doe
          </h1>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Thought Leader • Technology Strategist • Innovation Catalyst
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <Badge variant="secondary">AI & ML</Badge>
            <Badge variant="secondary">Digital Transformation</Badge>
            <Badge variant="secondary">Product Strategy</Badge>
            <Badge variant="secondary">Leadership</Badge>
          </div>
          
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>San Francisco, CA</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <ExternalLink className="w-4 h-4" />
              View Resume
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
                I&apos;m a visionary technology leader with over 15 years of experience driving digital transformation 
                and innovation across Fortune 500 companies. My passion lies in leveraging emerging technologies 
                to solve complex business challenges and create meaningful impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As a thought leader in AI and machine learning, I&apos;ve helped organizations navigate the rapidly 
                evolving tech landscape, from implementing cutting-edge solutions to building high-performing 
                teams that deliver exceptional results.
              </p>
            </CardContent>
          </Card>

          {/* Experience Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold">Chief Technology Officer</h3>
                <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Leading digital transformation initiatives and AI strategy for a $2B technology company.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">VP of Product Strategy</h3>
                <p className="text-sm text-muted-foreground">InnovateLabs • 2018 - 2021</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Drove product innovation and go-to-market strategy for emerging tech solutions.
                </p>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold">Senior Director, Engineering</h3>
                <p className="text-sm text-muted-foreground">StartupXYZ • 2015 - 2018</p>
                <p className="text-sm mt-2 text-muted-foreground">
                  Built and scaled engineering teams from 10 to 100+ people across multiple products.
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
                <h3 className="font-semibold mb-2">Technology Leadership</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Strategic Planning</Badge>
                  <Badge variant="outline" className="text-xs">Team Building</Badge>
                  <Badge variant="outline" className="text-xs">Digital Transformation</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Technical Skills</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">AI/ML</Badge>
                  <Badge variant="outline" className="text-xs">Cloud Architecture</Badge>
                  <Badge variant="outline" className="text-xs">Data Science</Badge>
                  <Badge variant="outline" className="text-xs">DevOps</Badge>
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="font-semibold mb-2">Business Strategy</h3>
                <div className="flex flex-wrap gap-1">
                  <Badge variant="outline" className="text-xs">Product Management</Badge>
                  <Badge variant="outline" className="text-xs">Innovation</Badge>
                  <Badge variant="outline" className="text-xs">Market Analysis</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Insights */}
          <Card className="col-span-full">
            <CardHeader>
              <CardTitle className="text-xl">Recent Insights & Thought Leadership</CardTitle>
              <CardDescription>
                Sharing perspectives on technology trends and industry insights
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">The Future of AI in Enterprise</h3>
                  <p className="text-xs text-muted-foreground">
                    Exploring how artificial intelligence will reshape business operations and strategy in the next decade.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Read More →
                  </Button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-sm">Building Resilient Tech Teams</h3>
                  <p className="text-xs text-muted-foreground">
                    Strategies for creating high-performing engineering teams that thrive in uncertain times.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-xs">
                    Read More →
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
            <Button variant="ghost" size="icon">
              <Twitter className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 John Doe. Built with Next.js and shadcn/ui.
          </p>
        </div>
      </div>
    </div>
  );
}
