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
import { BreadcrumbTrail } from "@/components/seo/breadcrumb-trail";
import { JsonLd } from "@/components/seo/json-ld";
import { RelatedHubs } from "@/components/seo/related-hubs";
import { buildRouteMetadata } from "@/lib/seo";
import { collectionPageSchema, routeBreadcrumbSchema } from "@/lib/schema";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = buildRouteMetadata("insights");

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
    ["wp:term"]?: Array<WpTag[]>;
  } & Record<string, unknown>);
};

async function getPosts(): Promise<WpPost[]> {
  const url = "https://johndeacon.co.za/wp-json/wp/v2/posts?per_page=6&_embed=1";

  const res = await fetch(url, {
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
  const tagsGroup = groups.find((group) =>
    group.some((term) => (term as WpTag).taxonomy === "post_tag")
  );
  return (tagsGroup as WpTag[] | undefined) ?? [];
}

function italicLeadParagraph(html?: string): string | null {
  if (!html) return null;

  const cleaned = html.replace(/<!--\s*more\s*-->/gi, "");
  const paragraphs = cleaned.match(/<p\b[^>]*>[\s\S]*?<\/p>/gi) || [];
  const italicParagraph = paragraphs.find((paragraph) => /<\s*(em|i)\b/i.test(paragraph));

  return italicParagraph ?? paragraphs[0] ?? null;
}

export default async function InsightsPage() {
  let posts: WpPost[] = [];
  let error: string | null = null;

  try {
    posts = await getPosts();
  } catch (issue: unknown) {
    if (issue instanceof Error) {
      error = issue.message;
    } else if (typeof issue === "string") {
      error = issue;
    } else {
      try {
        error = JSON.stringify(issue);
      } catch {
        error = "Unable to fetch posts.";
      }
    }
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <JsonLd
        id="schema-insights"
        data={[
          collectionPageSchema({
            routeKey: "insights",
            name: "Insights | Latest Articles",
            description:
              "Latest posts curated from johndeacon.co.za on semantic systems, metacognition, and alignment frameworks.",
            keywords: ["Insights", "Metacognitive Software", "Semantic Systems"],
          }),
          routeBreadcrumbSchema("insights"),
        ]}
      />

      <BreadcrumbTrail routeKey="insights" />

      <div className="text-center mb-10">
        <Avatar className="mx-auto mb-4 h-24 w-24 border-4 border-primary/20">
          <AvatarImage src="/images/john_deacon_profile_2026.png" alt="John Deacon Profile" />
          <AvatarFallback className="bg-primary/10 font-bold">JD</AvatarFallback>
        </Avatar>
        <h1 className="mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text pb-[0.1em] text-3xl font-bold text-transparent md:text-4xl">
          Insights
        </h1>
        <p className="mx-auto mb-4 max-w-2xl text-base text-muted-foreground md:text-lg">
          Curated articles on semantic systems, metacognitive software, XEMATIX, and CAM from the primary publishing
          source at johndeacon.co.za.
        </p>
        <div className="mb-4 flex flex-wrap justify-center gap-2">
          <Badge variant="secondary">Semantic Systems</Badge>
          <Badge variant="secondary">Metacognitive Software</Badge>
          <Badge variant="secondary">XEMATIX</Badge>
          <Badge variant="secondary">Core Alignment Model</Badge>
        </div>
        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>Kenton-on-Sea, Eastern Cape, South Africa</span>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="default" className="gap-2" asChild>
            <a href="mailto:john@profitworx.com">
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          <Button variant="outline" className="gap-2" asChild>
            <a href="https://johndeacon.co.za" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Visit Full Blog
            </a>
          </Button>
        </div>
      </div>

      <Card className="mb-6 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5">
        <CardContent className="p-6 text-sm text-muted-foreground">
          This page is a curated discovery hub. Full article authority stays on{" "}
          <a
            href="https://johndeacon.co.za"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            johndeacon.co.za
          </a>
          , while this site focuses on entity clarity, framework discovery, and conversion intent.
        </CardContent>
      </Card>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Latest Insights</h2>
        <p className="text-muted-foreground">Six most recent posts, refreshed approximately hourly.</p>
      </div>

      {error ? (
        <Card>
          <CardHeader>
            <CardTitle>Unable to load posts</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild variant="outline">
              <a href="https://johndeacon.co.za" target="_blank" rel="noopener noreferrer">
                Visit Blog
              </a>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {posts.map((post) => {
            const tags = extractTags(post);
            const firstParagraph = italicLeadParagraph(post.content?.rendered);

            return (
              <Card key={post.id} className="flex h-full flex-col border-primary/10">
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
                  <CardDescription>{new Date(post.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col space-y-3">
                  {firstParagraph ? (
                    <div
                      className="prose max-w-none text-sm text-muted-foreground dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: firstParagraph }}
                    />
                  ) : (
                    <div
                      className="prose max-w-none text-sm text-muted-foreground dark:prose-invert"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                  )}
                  {tags.length > 0 ? (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tags.slice(0, 3).map((tag) => (
                        <Badge key={tag.id} variant="secondary" asChild>
                          <a href={tag.link} target="_blank" rel="noopener noreferrer" title={tag.name}>
                            #{tag.name}
                          </a>
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                  <div className="mt-auto">
                    <Button variant="link" className="h-auto p-0" asChild>
                      <a href={post.link} target="_blank" rel="noopener noreferrer">
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

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3">
        <Button asChild variant="ghost" className="gap-2">
          <Link href="/">Back to Home</Link>
        </Button>

        <a
          href="https://johndeacon.co.za"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:underline"
        >
          Visit full blog on johndeacon.co.za
        </a>
      </div>

      <RelatedHubs routeKey="insights" />
    </div>
  );
}
