import { describe, expect, it } from "vitest";
import {
  scoreContextPrecision,
  scoreExpectedFactCoverage,
  scoreFaithfulness,
  scoreResult
} from "../src/core/metrics.js";

describe("metrics", () => {
  const expectedFacts = ["Refunds are available within 30 days", "The item must be unused"];
  const contexts = [
    {
      id: "refund",
      title: "Refunds",
      snippet: "Refunds are available within 30 days. The item must be unused.",
      score: 1
    }
  ];

  it("scores expected fact coverage", () => {
    expect(scoreExpectedFactCoverage(expectedFacts, contexts[0]!.snippet)).toBe(1);
    expect(scoreExpectedFactCoverage(expectedFacts, "Refunds are available within 30 days.")).toBeLessThan(1);
  });

  it("scores context precision", () => {
    expect(scoreContextPrecision(expectedFacts, contexts)).toBe(1);
    expect(scoreContextPrecision(expectedFacts, [{ id: "x", title: "x", snippet: "Unrelated", score: 0 }])).toBe(0);
  });

  it("scores faithfulness from retrieved context", () => {
    expect(scoreFaithfulness(contexts[0]!.snippet, contexts)).toBe(1);
    expect(scoreFaithfulness("Customers receive free coffee.", contexts)).toBe(0);
  });

  it("computes weighted overall score between 0 and 1", () => {
    const scores = scoreResult(expectedFacts, contexts[0]!.snippet, contexts);
    expect(scores.overallScore).toBeGreaterThan(0.9);
    expect(scores.overallScore).toBeLessThanOrEqual(1);
  });
});

