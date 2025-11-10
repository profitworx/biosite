import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { JsonLd } from "@/components/seo/json-ld";
import { collectionPageSchema, faqSchema, absoluteUrl } from "@/lib/schema";

export const metadata = {
  title: "Insights | Semantic Systems and Metacognitive Software | John Deacon",
  description: "Latest articles on semantic systems, metacognitive software, XEMATIX and CAM curated from johndeacon.co.za.",
  alternates: { canonical: absoluteUrl('/insights') },
};

type WpRendered = { rendered: string };

type WpTag = {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy?: string;
};

type WpPost = {
  id: number;
  date: string;
  link: string;
  title: WpRendered;
  excerpt: WpRendered;
  content?: WpRendered;
  _embedded?: ({
    ["wp:term"]?: Array<WpTag[]>; // array of term groups (categories, tags, etc.)
  } & Record<string, unknown>);
};

async function getPosts(): Promise<WpPost[]> {
  const url =
    "https://johndeacon.co.za/wp-json/wp/v2/posts?per_page=6&_embed=1";

  const res = await fetch(url, {
    // Revalidate hourly
    next: { revalidate: 3600 },
    headers: { Accept: "application/json" },
  });

  if (!res.ok) {
    throw new Error(`Failed to load posts (${res.status})`);
  }

  return (await res.json()) as WpPost[];
}

function extractTags(post: WpPost): WpTag[] {
  const groups = post._embedded?.["wp:term"] ?? [];
  // WordPress returns multiple term groups. Tags are usually the group with taxonomy === 'post_tag'.
  const tagsGroup = groups.find((group) =>
    group.some((t) => (t as WpTag).taxonomy === "post_tag")
  );
  return (tagsGroup as WpTag[] | undefined) ?? [];
}

function italicLeadParagraph(html?: string): string | null {
  if (!html) return null;
  // Remove WordPress more tag if present
  const cleaned = html.replace(/<!--\s*more\s*-->/gi, "");
  // Find all paragraph blocks
  const paragraphs = cleaned.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || [];
  // Prefer the first paragraph containing italics (<em> or <i>)
  const italicPara = paragraphs.find((p) => /<\s*(em|i)\b/i.test(p));
  if (italicPara) return italicPara;
  // Fallback: first paragraph if no italic paragraph exists
  return paragraphs[0] ?? null;
}

export default async function InsightsPage() {
  let posts: WpPost[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch (e: unknown) {
    if (e instanceof Error) {
      error = e.message;
    } else if (typeof e === "string") {
      error = e;
    } else {
      try {
        error = JSON.stringify(e);
      } catch {
        error = "Unable to fetch posts.";
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <JsonLd
        id="schema-insights"
        data={[
          collectionPageSchema({
            name: 'Insights - Latest Articles',
            description:
              'Latest posts curated from johndeacon.co.za on semantic systems, metacognition, and alignment frameworks.',
            keywords: ['Insights', 'Metacognitive Software', 'Semantic Systems'],
            url: absoluteUrl('/insights'),
          }),
          faqSchema([
            {
              question: 'Where do these articles come from?',
              answer:
                'They are pulled from johndeacon.co.za via the WordPress REST API and presented here for quick browsing.',
            },
            {
              question: 'How often is content updated?',
              answer:
                'The feed revalidates approximately hourly to surface the latest published posts.',
            },
          ]),
        ]}
      />
      {/* Theme Toggle */}
      <div className="flex justify-end mb-4">
        <ThemeToggle />
      </div>
      {/* Profile Header */}
      <div className="text-center mb-10">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
          <AvatarImage src="/images/john_deacon_profile_2025.png" alt="John Deacon Profile" />
          <AvatarFallback className="font-bold bg-primary/10">JD</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" style={{lineHeight: '1.3', paddingBottom: '0.1em'}}>
          John Deacon
        </h1>
        <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
          Architecting Semantic Systems | Building Tools That Align Software with Human Intention
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <Badge variant="secondary">Semantic Interface Architecture</Badge>
          <Badge variant="secondary">Metacognitive System Design</Badge>
          <Badge variant="secondary">Intent Modeling &amp; Alignment</Badge>
          <Badge variant="secondary">XEMATIX Framework</Badge>
        </div>
        <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-6">
          <MapPin className="w-4 h-4" />
          <span>Kenton-on-Sea, Eastern Cape, South Africa</span>
        </div>
        <div className="flex justify-center gap-3">
          <Button variant="default" className="gap-2" asChild>
            <a href="mailto:john@profitworx.com">
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://johndeacon.co.za" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Read Articles
            </a>
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Latest Insights</h2>
        <p className="text-muted-foreground">Six most recent posts</p>
      </div>

      {error ? (
        <Card>
          <CardHeader>
            <CardTitle>Unable to load posts</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <a
                href="https://johndeacon.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Blog
              </a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 auto-rows-fr">
          {posts.map((post) => {
            const tags = extractTags(post);
            const firstPara = italicLeadParagraph(post.content?.rendered);
            return (
              <Card key={post.id} className="h-full flex flex-col border-primary/10">
                <CardHeader>
                  <CardTitle className="leading-snug">
                    <a
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </CardTitle>
                  <CardDescription>
                    {new Date(post.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col space-y-3">
                  {firstPara ? (
                    <div
                      className="prose dark:prose-invert max-w-none text-sm text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: firstPara }}
                    />
                  ) : (
                    <div
                      className="prose dark:prose-invert max-w-none text-sm text-muted-foreground"
                      // WordPress provides sanitized HTML excerpts; render as provided
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  )}
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag.id} variant="secondary" asChild>
                          <a
                            href={tag.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={tag.name}
                          >
                            #{tag.name}
                          </a>
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto">
          <Button variant="link" className="p-0 h-auto" asChild>
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on Blog &rarr;
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      <div className="mt-10 flex items-center justify-between flex-wrap gap-3">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/">{/* internal navigation */}
            ← Back to Home
          </Link>
        </Button>

        <a
          href="https://johndeacon.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:underline"
        >
          Visit full blog on johndeacon.co.za ↗
        </a>
      </div>
    </div>
  );
}
