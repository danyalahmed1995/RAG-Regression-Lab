import { execFileSync } from "node:child_process";
import { randomUUID } from "node:crypto";
import { performance } from "node:perf_hooks";
import { generateExtractiveAnswer } from "./generator.js";
import { scoreResult } from "./metrics.js";
import { retrieveContexts } from "./retriever.js";
import type { EvaluationRun, RagConfig, RunSummary, TestResult, TestSuite } from "./types.js";

export const DEFAULT_PASS_THRESHOLD = 0.72;

export function createDefaultConfigs(): { baseline: RagConfig; candidate: RagConfig } {
  return {
    baseline: {
      name: "baseline-keyword-top3",
      retriever: "keyword",
      generator: "extractive",
      topK: 3
    },
    candidate: {
      name: "candidate-keyword-top1",
      retriever: "keyword",
      generator: "extractive",
      topK: 1
    }
  };
}

export async function runEvaluation(options: {
  suite: TestSuite;
  suitePath: string;
  config: RagConfig;
  command: string;
  baselineRunId?: string;
}): Promise<EvaluationRun> {
  const results: TestResult[] = options.suite.cases.map((testCase) => {
    const started = performance.now();
    try {
      const retrievedContext = retrieveContexts(testCase, options.config.topK);
      const generatedAnswer = generateExtractiveAnswer(testCase.question, retrievedContext);
      const metrics = scoreResult(testCase.expectedFacts, generatedAnswer, retrievedContext);
      const latencyMs = Math.round((performance.now() - started) * 100) / 100;
      return {
        testId: testCase.id,
        question: testCase.question,
        expectedFacts: testCase.expectedFacts,
        retrievedContext,
        generatedAnswer,
        metrics,
        passed: metrics.overallScore >= DEFAULT_PASS_THRESHOLD,
        latencyMs,
        regressionStatus: "baseline"
      };
    } catch (error) {
      return {
        testId: testCase.id,
        question: testCase.question,
        expectedFacts: testCase.expectedFacts,
        retrievedContext: [],
        generatedAnswer: "",
        metrics: {
          answerSimilarity: 0,
          expectedFactCoverage: 0,
          contextPrecision: 0,
          faithfulness: 0,
          overallScore: 0
        },
        passed: false,
        latencyMs: Math.round((performance.now() - started) * 100) / 100,
        regressionStatus: "baseline",
        error: error instanceof Error ? error.message : String(error)
      };
    }
  });

  const runId = `${options.config.name}-${new Date().toISOString().replace(/[:.]/g, "-")}-${randomUUID().slice(0, 8)}`;
  return {
    metadata: {
      runId,
      timestamp: new Date().toISOString(),
      appVersion: "0.1.0",
      gitBranch: getGitValue(["branch", "--show-current"]),
      gitCommit: getGitValue(["rev-parse", "--short", "HEAD"]),
      command: options.command,
      environment: `${process.platform} ${process.arch}, node ${process.version}`,
      suitePath: options.suitePath,
      suiteName: options.suite.name,
      baselineRunId: options.baselineRunId,
      modelProvider: "local deterministic mock",
      embeddingConfig: "none",
      retrieverConfig: options.config.retriever,
      topK: options.config.topK,
      scoringConfig: "heuristic-v1 overall=0.40 facts + 0.25 faithfulness + 0.20 context + 0.15 similarity"
    },
    config: options.config,
    suite: {
      id: options.suite.id,
      name: options.suite.name,
      testCount: options.suite.cases.length
    },
    results,
    summary: summarizeResults(results)
  };
}

export function summarizeResults(results: TestResult[]): RunSummary {
  const totalTests = results.length;
  const average = (selector: (result: TestResult) => number): number =>
    totalTests === 0
      ? 0
      : Number((results.reduce((sum, result) => sum + selector(result), 0) / totalTests).toFixed(4));

  const failedResults = results.filter((result) => !result.passed);
  return {
    totalTests,
    passed: results.filter((result) => result.passed).length,
    failed: failedResults.length,
    regressed: results.filter((result) => result.regressionStatus === "regressed" || result.regressionStatus === "newly_failing").length,
    improved: results.filter((result) => result.regressionStatus === "improved" || result.regressionStatus === "newly_passing").length,
    unchanged: results.filter((result) => result.regressionStatus === "unchanged").length,
    averageFaithfulness: average((result) => result.metrics.faithfulness),
    averageAnswerSimilarity: average((result) => result.metrics.answerSimilarity),
    averageContextPrecision: average((result) => result.metrics.contextPrecision),
    averageLatencyMs: average((result) => result.latencyMs),
    importantFailures: failedResults.slice(0, 5).map((result) => `${result.testId}: ${result.metrics.overallScore}`),
    nextRecommendedSteps: buildNextSteps(results)
  };
}

function buildNextSteps(results: TestResult[]): string[] {
  const steps = new Set<string>();
  if (results.some((result) => result.regressionStatus === "regressed" || result.regressionStatus === "newly_failing")) {
    steps.add("Inspect regressed tests and compare retrieved context coverage against the baseline.");
  }
  if (results.some((result) => result.metrics.contextPrecision < 0.7)) {
    steps.add("Tune retrieval ranking or increase top_k for cases with low context precision.");
  }
  if (results.some((result) => result.metrics.expectedFactCoverage < 0.7)) {
    steps.add("Check whether expected facts are split across documents that the candidate did not retrieve.");
  }
  if (steps.size === 0) {
    steps.add("No urgent action. Keep this run as a candidate baseline for future changes.");
  }
  return [...steps];
}

function getGitValue(args: string[]): string | undefined {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() || undefined;
  } catch {
    return undefined;
  }
}

