import { readFile } from "node:fs/promises";
import type { RagConfig } from "./types.js";

export type ProviderName = "offline" | "openai" | "groq";

export interface ProviderConfig {
  provider: ProviderName;
  model: string;
  retriever: RagConfig["retriever"];
  generator: RagConfig["generator"];
  topK: number;
}

export const DEFAULT_PROVIDER_CONFIG: ProviderConfig = {
  provider: "offline",
  model: "mock-extractive",
  retriever: "keyword",
  generator: "extractive",
  topK: 3
};

export async function loadProviderConfig(path?: string): Promise<ProviderConfig> {
  if (!path) {
    return { ...DEFAULT_PROVIDER_CONFIG };
  }

  const raw = await readFile(path, "utf8");
  return parseProviderConfig(JSON.parse(raw));
}

export function parseProviderConfig(value: unknown): ProviderConfig {
  if (!value || typeof value !== "object") {
    throw new Error("Provider config must be an object.");
  }

  const input = value as Partial<ProviderConfig>;
  const provider = input.provider ?? DEFAULT_PROVIDER_CONFIG.provider;
  if (!["offline", "openai", "groq"].includes(provider)) {
    throw new Error(`Unsupported provider "${provider}". Use offline, openai, or groq.`);
  }

  if (provider === "openai" && !process.env.OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is required when provider is openai.");
  }
  if (provider === "groq" && !process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is required when provider is groq.");
  }

  const topK = Number(input.topK ?? DEFAULT_PROVIDER_CONFIG.topK);
  if (!Number.isFinite(topK) || topK < 1) {
    throw new Error("Provider config topK must be a positive number.");
  }

  return {
    provider,
    model: input.model ?? (provider === "offline" ? "mock-extractive" : "not-implemented"),
    retriever: input.retriever ?? "keyword",
    generator: input.generator ?? "extractive",
    topK
  };
}

export function providerToRagConfig(config: ProviderConfig, name = `${config.provider}-${config.model}`): RagConfig {
  if (config.provider !== "offline") {
    throw new Error(`${config.provider} provider is configured but network generation is not implemented yet.`);
  }

  return {
    name,
    retriever: config.retriever,
    generator: config.generator,
    topK: config.topK
  };
}
