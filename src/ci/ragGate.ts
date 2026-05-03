import { loadDashboardData } from "../dashboard/dataAdapter.js";
import { fileURLToPath } from "node:url";

export interface RagGateThresholds {
  maxRegressions: number;
  minAverageOverall: number;
  maxNewlyFailing: number;
}

export interface RagGateResult {
  passed: boolean;
  averageOverall: number;
  regressions: number;
  newlyFailing: number;
  failures: string[];
  thresholds: RagGateThresholds;
}

export function loadThresholds(env: NodeJS.ProcessEnv = process.env): RagGateThresholds {
  return {
    maxRegressions: Number(env.RAG_MAX_REGRESSIONS ?? "10"),
    minAverageOverall: Number(env.RAG_MIN_AVERAGE_OVERALL ?? "0.72"),
    maxNewlyFailing: Number(env.RAG_MAX_NEWLY_FAILING ?? "2")
  };
}

export function evaluateGate(input: {
  averageOverall: number;
  regressions: number;
  newlyFailing: number;
  thresholds: RagGateThresholds;
}): RagGateResult {
  const failures: string[] = [];
  if (input.regressions > input.thresholds.maxRegressions) {
    failures.push(`regression count ${input.regressions} exceeds ${input.thresholds.maxRegressions}`);
  }
  if (input.averageOverall < input.thresholds.minAverageOverall) {
    failures.push(`average overall ${input.averageOverall} is below ${input.thresholds.minAverageOverall}`);
  }
  if (input.newlyFailing > input.thresholds.maxNewlyFailing) {
    failures.push(`newly failing count ${input.newlyFailing} exceeds ${input.thresholds.maxNewlyFailing}`);
  }

  return {
    passed: failures.length === 0,
    averageOverall: input.averageOverall,
    regressions: input.regressions,
    newlyFailing: input.newlyFailing,
    failures,
    thresholds: input.thresholds
  };
}

export async function runGate(rootDir = process.cwd(), env: NodeJS.ProcessEnv = process.env): Promise<RagGateResult> {
  const dashboardData = await loadDashboardData(rootDir);
  if (dashboardData.empty || !dashboardData.run) {
    return {
      passed: false,
      averageOverall: 0,
      regressions: 0,
      newlyFailing: 0,
      failures: ["No latest run found. Run npm run demo first."],
      thresholds: loadThresholds(env)
    };
  }

  const averageOverall =
    dashboardData.run.results.length === 0
      ? 0
      : Number(
          (
            dashboardData.run.results.reduce((sum, result) => sum + result.metrics.overallScore, 0) /
            dashboardData.run.results.length
          ).toFixed(4)
        );
  const newlyFailing = dashboardData.run.results.filter((result) => result.regressionStatus === "newly_failing").length;
  return evaluateGate({
    averageOverall,
    regressions: dashboardData.run.summary.regressed,
    newlyFailing,
    thresholds: loadThresholds(env)
  });
}

if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const result = await runGate();
  console.log(`RAG CI gate: ${result.passed ? "passed" : "failed"}`);
  console.log(`Average overall: ${result.averageOverall}`);
  console.log(`Regressions: ${result.regressions}`);
  console.log(`Newly failing: ${result.newlyFailing}`);
  if (!result.passed) {
    console.error(result.failures.join("\n"));
    process.exitCode = 1;
  }
}
