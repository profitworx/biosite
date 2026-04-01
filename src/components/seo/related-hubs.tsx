import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRelatedRoutes, type PublicRouteKey } from "@/lib/site";

type RelatedHubsProps = {
  routeKey: PublicRouteKey;
  title?: string;
};

export function RelatedHubs({ routeKey, title = "Continue Through the SEO Spine" }: RelatedHubsProps) {
  const routes = getRelatedRoutes(routeKey);

  return (
    <section className="mt-12">
      <Card className="border-primary/20">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 md:grid-cols-3">
          {routes.map((route) => (
            <Link
              key={route.key}
              href={route.path}
              className="rounded-lg border border-primary/10 p-4 transition-colors hover:border-primary/40 hover:bg-accent/30"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="font-semibold">{route.label}</span>
                <ArrowRight className="h-4 w-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{route.relatedSummary}</p>
            </Link>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
