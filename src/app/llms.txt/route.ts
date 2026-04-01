import { buildLlmsManifestText } from "@/lib/llms-manifest";

export async function GET() {
  return new Response(buildLlmsManifestText(), {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, max-age=3600",
    },
  });
}
