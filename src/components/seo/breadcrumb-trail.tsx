import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getBreadcrumbItems, type PublicRouteKey } from "@/lib/site";

type BreadcrumbTrailProps = {
  routeKey: PublicRouteKey;
};

export function BreadcrumbTrail({ routeKey }: BreadcrumbTrailProps) {
  if (routeKey === "home") {
    return null;
  }

  const items = getBreadcrumbItems(routeKey);

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        {items.map((item, index) => (
          <li key={item.item} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight className="h-4 w-4" aria-hidden="true" /> : null}
            {index === items.length - 1 ? (
              <span className="font-medium text-foreground">{item.name}</span>
            ) : (
              <Link href={item.item} className="hover:text-foreground hover:underline underline-offset-4">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
