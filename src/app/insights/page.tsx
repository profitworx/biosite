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

export const metadata = {
  title: "Insights - Latest Posts",
  description:
    "Latest 6 posts from johndeacon.co.za - titles, excerpts, and tags.",
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
      {/* Profile Header */}
      <div className="text-center mb-10">
        <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
          <AvatarImage src="/images/profile-avatar.jpg" alt="John Deacon Profile" />
          <AvatarFallback className="font-bold bg-primary/10">JD</AvatarFallback>
        </Avatar>
        <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
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
        <div className="grid gap-6">
          {posts.map((post) => {
            const tags = extractTags(post);
            return (
              <Card key={post.id} className="border-primary/10">
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
                <CardContent className="space-y-3">
                  <div
                    className="prose dark:prose-invert max-w-none text-sm text-muted-foreground"
                    // WordPress provides sanitized HTML excerpts; render as provided
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {tags.map((tag) => (
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
                  <div>
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

      <div className="mt-10">
        <Button asChild>
          <a
            href="https://johndeacon.co.za"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Blog
          </a>
        </Button>
      </div>
    </div>
  );
}
