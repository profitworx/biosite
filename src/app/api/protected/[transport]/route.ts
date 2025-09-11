import type { AuthInfo } from "@modelcontextprotocol/sdk/server/auth/types.js";
import { createMcpHandler, withMcpAuth } from "mcp-handler";
import { z } from "zod";

// Create handler with protected tools
const handler = createMcpHandler(
  (server) => {
    // Admin tool - manage biography content
    server.tool(
      "update_biography_content",
      "Update biography content sections (admin only)",
      {
        section: z.enum(["about", "experience", "expertise", "insights"]),
        content: z.string().min(1, "Content is required"),
        action: z.enum(["update", "add", "remove"]).default("update")
      },
      async ({ section, content, action }, extra) => {
        const authInfo = extra.authInfo;
        
        // In a real implementation, you'd update a database or CMS
        const result = {
          section,
          action,
          content: action === "remove" ? "[REMOVED]" : content,
          timestamp: new Date().toISOString(),
          updatedBy: authInfo?.clientId || "system",
          success: true
        };

        return {
          content: [
            {
              type: "text",
              text: `Biography ${section} section ${action}d successfully by ${authInfo?.clientId}.\n\nContent preview: ${result.content.substring(0, 100)}${result.content.length > 100 ? '...' : ''}\n\nTimestamp: ${result.timestamp}`
            }
          ],
        };
      }
    );

    // Analytics tool - get site analytics (protected)
    server.tool(
      "get_site_analytics",
      "Retrieve biography site analytics and visitor insights",
      {
        timeframe: z.enum(["day", "week", "month", "year"]).default("month"),
        metrics: z.array(z.enum(["visitors", "pageviews", "engagement", "contacts"])).default(["visitors", "pageviews"])
      },
      async ({ timeframe, metrics }, extra) => {
        const authInfo = extra.authInfo;
        
        // Simulated analytics data
        const analyticsData = {
          timeframe,
          data: {
            visitors: { day: 45, week: 210, month: 850, year: 12400 },
            pageviews: { day: 67, week: 320, month: 1240, year: 18600 },
            engagement: { day: "3.2m", week: "18.5m", month: "76.3m", year: "845.2m" },
            contacts: { day: 2, week: 8, month: 24, year: 156 }
          },
          requestedBy: authInfo?.clientId,
          generatedAt: new Date().toISOString()
        };

        const results = metrics.map(metric => 
          `${metric}: ${analyticsData.data[metric][timeframe]}`
        ).join('\n');

        return {
          content: [
            {
              type: "text",
              text: `Site Analytics (${timeframe}):\n\n${results}\n\nGenerated for: ${authInfo?.clientId}\nTimestamp: ${analyticsData.generatedAt}`
            }
          ],
        };
      }
    );

    // Content management tool
    server.tool(
      "manage_thought_leadership",
      "Manage thought leadership content and publications",
      {
        action: z.enum(["list", "create", "update", "delete", "publish"]),
        title: z.string().optional(),
        content: z.string().optional(),
        status: z.enum(["draft", "review", "published"]).optional(),
        tags: z.array(z.string()).optional()
      },
      async ({ action, title, content, status = "draft", tags = [] }, extra) => {
        const authInfo = extra.authInfo;
        
        // Simulated content management
        const contentItem = {
          id: `content_${Date.now()}`,
          title: title || "New Thought Leadership Piece",
          content: content || "",
          status,
          tags,
          author: authInfo?.clientId,
          createdAt: new Date().toISOString(),
          action
        };

        return {
          content: [
            {
              type: "text",
              text: `Content Management Action: ${action}\n\nTitle: ${contentItem.title}\nStatus: ${contentItem.status}\nTags: ${contentItem.tags.join(", ") || "None"}\nAuthor: ${contentItem.author}\nID: ${contentItem.id}\nTimestamp: ${contentItem.createdAt}`
            }
          ],
        };
      }
    );
  },
  {
    capabilities: {
      tools: {
        update_biography_content: {
          description: "Update biography content sections",
        },
        get_site_analytics: {
          description: "Get site analytics and insights",
        },
        manage_thought_leadership: {
          description: "Manage thought leadership content",
        },
      },
    },
  },
  {
    basePath: "/api/protected",
    verboseLogs: true,
    maxDuration: 60,
  }
);

// Token verification function
const verifyToken = async (
  req: Request,
  bearerToken?: string
): Promise<AuthInfo | undefined> => {
  if (!bearerToken) return undefined;

  // Simple token verification for development
  // In production, implement proper JWT verification, database lookup, etc.
  if (bearerToken.startsWith("bio_admin_")) {
    return {
      token: bearerToken,
      scopes: ["admin", "read:analytics", "write:content"],
      clientId: bearerToken.replace("bio_admin_", ""),
      extra: {
        role: "admin",
        permissions: ["manage_content", "view_analytics", "update_site"]
      },
    };
  }

  if (bearerToken.startsWith("bio_user_")) {
    return {
      token: bearerToken,
      scopes: ["read:content"],
      clientId: bearerToken.replace("bio_user_", ""),
      extra: {
        role: "user",
        permissions: ["view_content"]
      },
    };
  }

  return undefined;
};

// Apply authentication with required admin scope
const authHandler = withMcpAuth(handler, verifyToken, {
  required: true,
  requiredScopes: ["admin"],
  resourceMetadataPath: "/.well-known/oauth-protected-resource",
});

export { authHandler as GET, authHandler as POST };