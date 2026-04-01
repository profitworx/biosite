import { llmsManifest } from "./llms-manifest";

export type LlmsManifest = {
  technical_environment?: {
    ai_models?: unknown;
  };
};

export function loadLlmsManifestFromPublic(): LlmsManifest | null {
  try {
    return llmsManifest as LlmsManifest;
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

