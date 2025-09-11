import {
  protectedResourceHandler,
  metadataCorsOptionsRequestHandler,
} from "mcp-handler";

const handler = protectedResourceHandler({
  // For development, you can use a placeholder auth server
  // In production, replace with your actual OAuth authorization server
  authServerUrls: ["https://auth.example.com"], // Replace with actual auth server
});

export { handler as GET, metadataCorsOptionsRequestHandler as OPTIONS };