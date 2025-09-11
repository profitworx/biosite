# MCP Handler Integration - Biography Site

This biography site now includes Model Context Protocol (MCP) integration, enabling AI-powered interactions and content management.

## Available MCP Tools

### Public Endpoints (`/api/mcp`)

#### 1. Contact Form Handler
**Tool:** `submit_contact`
- Processes contact form submissions intelligently
- Validates input and generates appropriate responses
- Categories: general, collaboration, speaking, consulting

**Example:**
```json
{
  "name": "John Smith",
  "email": "john@example.com", 
  "subject": "Speaking Opportunity",
  "message": "Would you be interested in speaking at our tech conference?",
  "type": "speaking"
}
```

#### 2. Content Ideas Generator
**Tool:** `generate_content_ideas`
- Generates thought leadership content ideas
- Customizable by topic, audience, format, and length
- Based on expertise in AI/ML, Digital Transformation, Product Strategy

**Example:**
```json
{
  "topic": "Digital Transformation",
  "audience": "business",
  "format": "article",
  "length": "medium"
}
```

#### 3. Professional Profile Analyzer
**Tool:** `analyze_professional_profile`
- Analyzes professional positioning and provides insights
- Identifies strengths, opportunities, and recommendations

**Example:**
```json
{
  "role": "Chief Technology Officer",
  "industry": "Technology",
  "years_experience": 15,
  "focus_areas": ["AI/ML", "Digital Transformation", "Leadership"]
}
```

#### 4. Industry Insights Generator
**Tool:** `generate_industry_insights`
- Generates current industry insights and trends
- Timeframes: current, 6months, 1year, 2years
- Perspectives: technical, strategic, market

### Protected Endpoints (`/api/protected/mcp`)

Requires authentication token (prefix: `bio_admin_` for admin access)

#### 1. Biography Content Manager
**Tool:** `update_biography_content`
- Update biography sections (admin only)
- Actions: update, add, remove
- Sections: about, experience, expertise, insights

#### 2. Site Analytics
**Tool:** `get_site_analytics`  
- Retrieve site analytics and visitor insights
- Timeframes: day, week, month, year
- Metrics: visitors, pageviews, engagement, contacts

#### 3. Thought Leadership Manager
**Tool:** `manage_thought_leadership`
- Manage thought leadership content and publications
- Actions: list, create, update, delete, publish
- Status tracking: draft, review, published

## Usage Examples

### Connecting with Claude Desktop

Add to `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "biography-site": {
      "command": "npx",
      "args": [
        "-y",
        "mcp-remote",
        "https://your-site.vercel.app/api/mcp"
      ]
    }
  }
}
```

### Connecting with Cursor

Add to `~/.cursor/mcp.json`:

```json
{
  "biography-site": {
    "url": "https://your-site.vercel.app/api/mcp"
  }
}
```

### Direct API Usage

**Submit Contact Form:**
```bash
curl -X POST "https://your-site.vercel.app/api/mcp" \
  -H "Content-Type: application/json" \
  -d '{
    "method": "tools/call",
    "params": {
      "name": "submit_contact",
      "arguments": {
        "name": "Jane Doe",
        "email": "jane@example.com",
        "subject": "Collaboration Inquiry",
        "message": "I would like to discuss a potential collaboration opportunity.",
        "type": "collaboration"
      }
    }
  }'
```

**Generate Content Ideas:**
```bash
curl -X POST "https://your-site.vercel.app/api/mcp" \
  -H "Content-Type: application/json" \
  -d '{
    "method": "tools/call",
    "params": {
      "name": "generate_content_ideas",
      "arguments": {
        "topic": "Artificial Intelligence",
        "audience": "technical",
        "format": "presentation"
      }
    }
  }'
```

**Protected Endpoint (with Auth):**
```bash
curl -X POST "https://your-site.vercel.app/api/protected/mcp" \
  -H "Authorization: Bearer bio_admin_yourname" \
  -H "Content-Type: application/json" \
  -d '{
    "method": "tools/call",
    "params": {
      "name": "get_site_analytics",
      "arguments": {
        "timeframe": "month",
        "metrics": ["visitors", "pageviews", "contacts"]
      }
    }
  }'
```

## Authentication

### Admin Access
- Token format: `bio_admin_<username>`
- Scopes: admin, read:analytics, write:content
- Permissions: manage_content, view_analytics, update_site

### User Access  
- Token format: `bio_user_<username>`
- Scopes: read:content
- Permissions: view_content

### OAuth Protected Resource
The site exposes OAuth metadata at:
`/.well-known/oauth-protected-resource`

## Development

### Test MCP Endpoints
```bash
# Start development server
npm run dev

# Test public endpoint
curl -X GET "http://localhost:3000/api/mcp"

# Test protected endpoint
curl -X GET "http://localhost:3000/api/protected/mcp" \
  -H "Authorization: Bearer bio_admin_test"
```

### Environment Variables (Optional)
```bash
REDIS_URL=redis://localhost:6379  # For SSE transport resumability
```

## Features

✅ **Contact Form Processing** - Intelligent handling of contact inquiries
✅ **Content Generation** - AI-powered content idea generation  
✅ **Professional Analysis** - Profile and positioning insights
✅ **Industry Insights** - Current and future trend analysis
✅ **Protected Content Management** - Admin tools for site management
✅ **Analytics Access** - Site performance and visitor insights
✅ **OAuth Support** - Secure authentication for protected resources
✅ **Multiple Transport Types** - HTTP and SSE support
✅ **Full TypeScript Support** - Type-safe implementations

## Next Steps

1. **Replace Mock Data**: Implement real database connections for analytics and content
2. **Add Real Authentication**: Replace simple token validation with proper OAuth/JWT
3. **Extend Tools**: Add more biography-specific tools as needed
4. **Monitor Usage**: Add logging and monitoring for MCP tool usage
5. **Custom Integration**: Connect with your preferred AI clients and tools