# John Deacon Bio - Personal Portfolio & AI-Enabled Biography

A modern, AI-powered personal biography and portfolio website built with Next.js 15 and TypeScript. This site showcases John Deacon's work in semantic systems architecture, cognitive interface design, and the XEMATIX framework.

## Features

- **Modern Tech Stack**: Next.js 15 with App Router, TypeScript, Tailwind CSS 4
- **AI Integration**: MCP (Model Context Protocol) endpoints for AI-powered interactions
- **Semantic SEO**: Comprehensive structured data and SEO optimization
- **Dark/Light Theme**: Built-in theme switching with `next-themes`
- **Responsive Design**: Mobile-first design with shadcn/ui components

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **TypeScript**: Strict mode enabled
- **MCP Integration**: AI tool endpoints via mcp-handler
- **Schema Validation**: Zod for API validation
- **UI Components**: Radix UI primitives via shadcn/ui

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## SEO, Robots, and Sitemap

- Set `NEXT_PUBLIC_SITE_URL` in your environment to your production URL (for example, `https://bio.johndeacon.co.za`). This is used to build absolute canonicals, robots sitemap URL, and OpenGraph/Twitter image URLs.
- Canonical tags are defined per page using the Next.js Metadata API. See the `export const metadata` at the top of each `src/app/*/page.tsx`.
- A dynamic robots.txt is served from `src/app/robots.ts` and allows all crawlers. It also points to the sitemap.
- A dynamic sitemap is served from `src/app/sitemap.ts` and includes: `/`, `/cam`, `/dtlm`, `/insights`, `/tools`, `/xematix`.

### Google Search Console

1. Deploy the site to production and ensure `NEXT_PUBLIC_SITE_URL` is set.
2. Verify your domain in Google Search Console.
3. Add the sitemap URL: `${NEXT_PUBLIC_SITE_URL}/sitemap.xml`.
4. Confirm that `robots.txt` at `${NEXT_PUBLIC_SITE_URL}/robots.txt` is accessible and lists the sitemap.

### Notes

- Open Graph and Twitter card metadata are configured globally in `src/app/layout.tsx`. Update titles/descriptions if needed.
- If you add new top-level routes, update `src/app/sitemap.ts` with the new paths.

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/                      # API endpoints
│   │   ├── [transport]/          # Public MCP endpoints
│   │   └── protected/[transport]/ # Protected MCP endpoints
│   ├── cam/                      # Core Alignment Model page
│   ├── dtlm/                     # Digital Thought Leadership page
│   ├── insights/                 # Insights/blog page
│   ├── professional/             # Professional page
│   ├── tools/                    # Tools page
│   ├── xematix/                  # XEMATIX framework page
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # Dynamic robots.txt
│   └── sitemap.xml/route.ts     # Dynamic sitemap
├── components/
│   ├── seo/                     # SEO components (JSON-LD)
│   ├── ui/                      # shadcn/ui components
│   └── theme-provider.tsx       # Theme provider
└── lib/
    ├── schema.ts               # Zod validation schemas
    └── utils.ts                # Utility functions
```

## MCP (Model Context Protocol) Integration

The site exposes AI tool endpoints for enhanced interaction:

### Public API (`/api/[transport]`)
- `submit_contact` - Process contact form submissions
- `generate_content_ideas` - Generate thought leadership content
- `analyze_professional_profile` - Professional positioning analysis
- `generate_industry_insights` - Industry trend insights

### Protected API (`/api/protected/[transport]`)
- `update_biography_content` - Admin content management
- `get_site_analytics` - Site analytics access
- `manage_thought_leadership` - Content publication management

## Testing MCP Endpoints

```bash
# Test public MCP endpoint
curl -X GET "http://localhost:3000/api/mcp"

# Test protected MCP endpoint
curl -X GET "http://localhost:3000/api/protected/mcp" \
  -H "Authorization: Bearer bio_admin_test"

# Submit contact form
curl -X POST "http://localhost:3000/api/mcp" \
  -H "Content-Type: application/json" \
  -d '{"method": "tools/call", "params": {"name": "submit_contact", "arguments": {"name": "Test", "email": "test@example.com", "subject": "Test", "message": "Test message"}}}'
```

## Deployment

The site is optimized for deployment on Vercel with:
- Automatic builds on push
- Environment variable support for `NEXT_PUBLIC_SITE_URL`
- Built-in sitemap and robots.txt generation
- Optimized image handling and caching

## About John Deacon

John Deacon is a South Africa-based semantic systems architect and the creator of:
- **XEMATIX**: Cognitive interface architecture for intent-aligned computing
- **CAM (Core Alignment Model)**: Metacognitive framework for structured thinking
- **DTLM**: Digital Thought Leadership methodology

For more information, visit [johndeacon.co.za](https://johndeacon.co.za)
