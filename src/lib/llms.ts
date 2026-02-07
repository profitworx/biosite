import fs from "node:fs";
import path from "node:path";

export type LlmsManifest = {
  technical_environment?: {
    ai_models?: unknown;
  };
};

function extractFirstJsonObject(text: string): string | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;
  return text.slice(start, end + 1);
}

export function loadLlmsManifestFromPublic(): LlmsManifest | null {
  try {
    const filePath = path.join(process.cwd(), "public", "llms.txt");
    const raw = fs.readFileSync(filePath, "utf8");
    const json = extractFirstJsonObject(raw);
    if (!json) return null;
    return JSON.parse(json) as LlmsManifest;
  } catch {
    return null;
  }
}

export function getDeclaredAiModels(): string[] {
  const manifest = loadLlmsManifestFromPublic();
  const models = manifest?.technical_environment?.ai_models;
  if (!Array.isArray(models)) return [];
  return models
    .filter((value): value is string => typeof value === "string")
    .map((model) => model.trim())
    .filter(Boolean);
}

