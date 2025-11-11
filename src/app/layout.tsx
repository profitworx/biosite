import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/seo/json-ld";
import { personSchema } from "@/lib/schema";
// Prefer explicit site URL via env for canonicals and OG tags
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bio.johndeacon.co.za";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "John Deacon | Semantic Systems Architect, XEMATIX and CAM",
    template: "%s | John Deacon",
  },
  description:
    "Metacognitive software, semantic systems, XEMATIX framework and the Core Alignment Model (CAM). Digital thought leadership, intent modeling and alignment.",
  applicationName: "John Deacon Bio",
  authors: [{ name: "John Deacon", url: "https://johndeacon.co.za" }],
  keywords: [
    "John Deacon",
    "Semantic Systems",
    "XEMATIX",
    "Core Alignment Model",
    "CAM",
    "Metacognition",
    "Intent Modeling",
    "Digital Thought Leadership",
  ],
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
    siteName: "John Deacon",
    title: "John Deacon | Semantic Systems Architect, XEMATIX and CAM",
    description:
      "Metacognitive software, semantic systems, XEMATIX framework and the Core Alignment Model (CAM).",
    images: [
      {
        url: "/images/john-deacon-featured.png",
        width: 1200,
        height: 630,
        alt: "John Deacon",
      },
    ],
    locale: "en_ZA",
  },
  twitter: {
    card: "summary_large_image",
    site: "@jdeaconx",
    creator: "@jdeaconx",
    title: "John Deacon | Semantic Systems Architect",
    description:
      "Metacognitive software, semantic systems, XEMATIX and CAM.",
    images: ["/images/john-deacon-featured.png"],
  },
  alternates: {
    // Do not set a global canonical for all routes; handled per-page
    // types or languages could be added here if needed
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd data={personSchema()} id="schema-person" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

