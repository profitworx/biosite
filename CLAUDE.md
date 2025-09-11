# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern personal biography/portfolio website built with **Next.js 15** and **TypeScript**, featuring **MCP (Model Context Protocol)** integration for AI-powered interactions. The site serves as both a professional portfolio and an AI-enabled content management platform.

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **TypeScript**: Strict mode enabled
- **MCP Integration**: mcp-handler for AI tool endpoints
- **Schema Validation**: Zod for API validation
- **UI Components**: Radix UI primitives via shadcn/ui

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### App Router Structure
- `src/app/` - Next.js App Router pages and layouts
- `src/app/api/[transport]/` - Public MCP endpoints (GET/POST)
- `src/app/api/protected/[transport]/` - Protected MCP endpoints with auth
- `src/app/.well-known/` - OAuth metadata endpoint

### Component Architecture
- `src/components/ui/` - shadcn/ui components (Button, Card, Avatar, etc.)
- `src/lib/utils.ts` - Utility functions (cn for className merging)
- Uses `@/` path alias for src imports

### MCP Integration
The application exposes two MCP servers:

**Public API** (`/api/[transport]`)
- `submit_contact` - Process contact form submissions
- `generate_content_ideas` - Generate thought leadership content
- `analyze_professional_profile` - Professional positioning analysis
- `generate_industry_insights` - Industry trend insights

**Protected API** (`/api/protected/[transport]`)
- `update_biography_content` - Admin content management
- `get_site_analytics` - Site analytics access
- `manage_thought_leadership` - Content publication management
- Requires authentication with `bio_admin_*` or `bio_user_*` tokens

## Key Configuration Files

- `next.config.ts` - Next.js configuration with output file tracing
- `tsconfig.json` - TypeScript config with `@/*` path mapping
- `components.json` - shadcn/ui configuration (New York style, neutral theme)
- `vercel.json` - Vercel deployment configuration

## Development Patterns

### Component Style
- Uses shadcn/ui components with consistent styling
- Dark theme by default (`className="dark"`)
- Responsive design with Tailwind CSS
- Component composition with proper TypeScript types

### API Development
- MCP handlers use Zod validation schemas
- All endpoints support both GET and POST methods
- Protected endpoints implement token-based authentication
- Comprehensive error handling and response formatting

### Authentication
- Simple token-based auth for development
- Admin tokens: `bio_admin_<username>`
- User tokens: `bio_user_<username>`
- OAuth metadata exposed at `/.well-known/oauth-protected-resource`

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

## Important Notes

- The site uses mock data for analytics and content management
- Authentication is simplified for development (implement proper JWT/OAuth for production)
- All MCP tools include comprehensive Zod validation
- The biography content is hardcoded in the main page component
- Site supports both HTTP and SSE transport types for MCP