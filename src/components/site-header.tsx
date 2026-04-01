"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { getPrimaryNavigationRoutes } from "@/lib/site";

const navigationRoutes = getPrimaryNavigationRoutes();

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="container mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <Link href="/" className="inline-flex items-center text-lg font-semibold tracking-tight">
            John Deacon Bio
          </Link>
          <p className="text-sm text-muted-foreground">
            Entity hub for XEMATIX, CAM, digital systems, and strategic thought leadership.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <nav aria-label="Primary" className="flex flex-wrap justify-end gap-2">
            {navigationRoutes.map((route) => {
              const isActive = route.path === "/"
                ? pathname === "/"
                : pathname === route.path || pathname.startsWith(`${route.path}/`);

              return (
                <Link
                  key={route.key}
                  href={route.path}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {route.navigationLabel}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
