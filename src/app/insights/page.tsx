import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "Insights — Latest Posts",
  description:
    "Latest 6 posts from johndeacon.co.za — titles, excerpts, and tags.",
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
  _embedded?: {
    [key: string]: any;
    ["wp:term"]?: Array<WpTag[]>; // array of term groups (categories, tags, etc.)
  };
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
  } catch (e: any) {
    error = e?.message ?? "Unable to fetch posts.";
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Insights</h1>
        <p className="text-muted-foreground">
          Latest articles from johndeacon.co.za
        </p>
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
                        Read on Blog →
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

