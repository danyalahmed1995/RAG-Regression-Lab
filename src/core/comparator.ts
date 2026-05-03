import { summarizeResults } from "./runner.js";
import type { ComparisonOptions, EvaluationRun, RegressionStatus, TestResult } from "./types.js";

export function compareRuns(
  baseline: EvaluationRun,
  candidate: EvaluationRun,
  options: ComparisonOptions = { threshold: 0.1 }
): EvaluationRun {
  const baselineById = new Map(baseline.results.map((result) => [result.testId, result]));
  const results = candidate.results.map((candidateResult) => {
    const baselineResult = baselineById.get(candidateResult.testId);
    if (!baselineResult) {
      return {
        ...candidateResult,
        regressionStatus: candidateResult.passed ? "newly_passing" : "newly_failing"
      } satisfies TestResult;
    }

    return {
      ...candidateResult,
      regressionStatus: getRegressionStatus(baselineResult, candidateResult, options.threshold)
    } satisfies TestResult;
  });

  return {
    ...candidate,
    metadata: {
      ...candidate.metadata,
      baselineRunId: baseline.metadata.runId
    },
    results,
    summary: summarizeResults(results)
  };
}

export function getRegressionStatus(
  baseline: TestResult,
  candidate: TestResult,
  threshold: number
): RegressionStatus {
  if (baseline.passed && !candidate.passed) {
    return "newly_failing";
  }
  if (!baseline.passed && candidate.passed) {
    return "newly_passing";
  }
  if (candidate.metrics.overallScore < baseline.metrics.overallScore - threshold) {
    return "regressed";
  }
  if (candidate.metrics.overallScore > baseline.metrics.overallScore + threshold) {
    return "improved";
  }
  return "unchanged";
}

