import { describe, expect, it } from "vitest";
import { evaluateGate, loadThresholds } from "../src/ci/ragGate.js";

describe("RAG CI gate", () => {
  it("passes with demo-friendly default thresholds", () => {
    const result = evaluateGate({
      averageOverall: 0.75,
      regressions: 7,
      newlyFailing: 2,
      thresholds: loadThresholds({})
    });
    expect(result.passed).toBe(true);
  });

  it("fails when strict thresholds are exceeded", () => {
    const result = evaluateGate({
      averageOverall: 0.75,
      regressions: 1,
      newlyFailing: 1,
      thresholds: {
        maxRegressions: 0,
        minAverageOverall: 0.8,
        maxNewlyFailing: 0
      }
    });
    expect(result.passed).toBe(false);
    expect(result.failures).toHaveLength(3);
  });
});
