import { describe, expect, it } from "vitest";
import { DEFAULT_PROVIDER_CONFIG, parseProviderConfig, providerToRagConfig } from "../src/core/providerConfig.js";

describe("provider config", () => {
  it("defaults to offline provider config", () => {
    expect(parseProviderConfig({})).toEqual(DEFAULT_PROVIDER_CONFIG);
  });

  it("converts offline provider config to a RAG config", () => {
    const config = providerToRagConfig(parseProviderConfig({ provider: "offline", topK: 2 }), "offline-test");
    expect(config).toEqual({
      name: "offline-test",
      retriever: "keyword",
      generator: "extractive",
      topK: 2
    });
  });

  it("rejects unknown providers", () => {
    expect(() => parseProviderConfig({ provider: "watts-ai" })).toThrow(/Unsupported provider/);
  });

  it("requires API keys for real providers", () => {
    const previous = process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_API_KEY;
    expect(() => parseProviderConfig({ provider: "openai" })).toThrow(/OPENAI_API_KEY/);
    if (previous === undefined) {
      delete process.env.OPENAI_API_KEY;
    } else {
      process.env.OPENAI_API_KEY = previous;
    }
  });
});
