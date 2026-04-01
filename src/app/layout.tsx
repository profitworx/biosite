import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BASE_KEYWORDS } from "@/lib/seo";
import { DEFAULT_OG_IMAGE, PERSON_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "John Deacon | Semantic Systems Architect, XEMATIX and CAM",
  description: PERSON_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "John Deacon", url: "https://johndeacon.co.za" }],
  keywords: BASE_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      
      // Allow rich results previews
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: "John Deacon | Semantic Systems Architect, XEMATIX and CAM",
    description: PERSON_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE.path,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jdeaconx",
    creator: "@jdeaconx",
    title: "John Deacon | Semantic Systems Architect",
    description: PERSON_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE.path],
  },
  alternates: {
    types: {
      "application/ld+json": `${SITE_URL}/`,
    },
  },
  category: "technology",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: [
      "/favicon.png",
    ],
    apple: [
      { url: "/favicon.png", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
