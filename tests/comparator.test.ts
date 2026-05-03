import { describe, expect, it } from "vitest";
import { compareRuns, getRegressionStatus } from "../src/core/comparator.js";
import type { EvaluationRun, TestResult } from "../src/core/types.js";

describe("comparator", () => {
  it("detects score regressions", () => {
    const baseline = result("case", 0.9, true);
    const candidate = result("case", 0.7, true);
    expect(getRegressionStatus(baseline, candidate, 0.1)).toBe("regressed");
  });

  it("detects newly failing tests before generic regression status", () => {
    const baseline = result("case", 0.9, true);
    const candidate = result("case", 0.65, false);
    expect(getRegressionStatus(baseline, candidate, 0.1)).toBe("newly_failing");
  });

  it("updates candidate summaries after comparison", () => {
    const baselineRun = run([result("case", 0.9, true)]);
    const candidateRun = run([result("case", 0.65, false)]);
    const compared = compareRuns(baselineRun, candidateRun);
    expect(compared.summary.regressed).toBe(1);
    expect(compared.metadata.baselineRunId).toBe(baselineRun.metadata.runId);
  });
});

function result(testId: string, score: number, passed: boolean): TestResult {
  return {
    testId,
    question: "Question?",
    expectedFacts: ["Fact"],
    retrievedContext: [],
    generatedAnswer: "Answer",
    metrics: {
      answerSimilarity: score,
      expectedFactCoverage: score,
      contextPrecision: score,
      faithfulness: score,
      overallScore: score
    },
    passed,
    latencyMs: 1,
    regressionStatus: "baseline"
  };
}

function run(results: TestResult[]): EvaluationRun {
  return {
    metadata: {
      runId: `run-${Math.random()}`,
      timestamp: "2026-05-03T00:00:00.000Z",
      appVersion: "0.1.0",
      command: "test",
      environment: "test",
      suitePath: "suite.json",
      suiteName: "Suite",
      modelProvider: "mock",
      embeddingConfig: "none",
      retrieverConfig: "keyword",
      topK: 1,
      scoringConfig: "test"
    },
    config: { name: "config", retriever: "keyword", generator: "extractive", topK: 1 },
    suite: { id: "suite", name: "Suite", testCount: results.length },
    results,
    summary: {
      totalTests: results.length,
      passed: results.filter((item) => item.passed).length,
      failed: results.filter((item) => !item.passed).length,
      regressed: 0,
      improved: 0,
      unchanged: 0,
      averageFaithfulness: 0,
      averageAnswerSimilarity: 0,
      averageContextPrecision: 0,
      averageLatencyMs: 1,
      importantFailures: [],
      nextRecommendedSteps: []
    }
  };
}

