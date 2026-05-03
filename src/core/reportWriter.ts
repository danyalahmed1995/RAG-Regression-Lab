import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import type { EvaluationRun, TestResult } from "./types.js";

export async function writeJsonFile(path: string, value: unknown): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

export async function readRun(path: string): Promise<EvaluationRun> {
  return JSON.parse(await readFile(path, "utf8")) as EvaluationRun;
}

export async function writeRunArtifact(run: EvaluationRun, outputDir: string): Promise<string> {
  const path = join(outputDir, `${run.metadata.runId}.json`);
  await writeJsonFile(path, run);
  return path;
}

export async function writeReportFiles(
  run: EvaluationRun,
  outputDir = "reports"
): Promise<{ markdownPath: string; jsonPath: string }> {
  const markdownPath = join(outputDir, `rag-regression-report-${run.metadata.runId}.md`);
  const jsonPath = join(outputDir, `rag-regression-report-${run.metadata.runId}.json`);
  await mkdir(outputDir, { recursive: true });
  await writeFile(markdownPath, renderMarkdownReport(run), "utf8");
  await writeJsonFile(jsonPath, run);
  return { markdownPath, jsonPath };
}

export function renderMarkdownReport(run: EvaluationRun): string {
  const failedOrRegressed = run.results.filter(
    (result) =>
      !result.passed ||
      result.regressionStatus === "regressed" ||
      result.regressionStatus === "newly_failing"
  );

  return `# RAG Regression Report: ${run.metadata.runId}

Generated: ${run.metadata.timestamp}

Suite: ${run.suite.name} (${run.suite.testCount} tests)

## Configuration

- Run id: ${run.metadata.runId}
- Baseline run id: ${run.metadata.baselineRunId ?? "none"}
- Model/provider: ${run.metadata.modelProvider}
- Embedding config: ${run.metadata.embeddingConfig}
- Retriever: ${run.metadata.retrieverConfig}
- Generator: ${run.config.generator}
- Top K: ${run.metadata.topK}
- Scoring: ${run.metadata.scoringConfig}
- Command: \`${run.metadata.command}\`
- Environment: ${run.metadata.environment}

## Score Summary

- Passed: ${run.summary.passed}/${run.summary.totalTests}
- Failed: ${run.summary.failed}
- Regressed: ${run.summary.regressed}
- Improved: ${run.summary.improved}
- Unchanged: ${run.summary.unchanged}
- Average faithfulness: ${run.summary.averageFaithfulness}
- Average answer similarity: ${run.summary.averageAnswerSimilarity}
- Average context precision: ${run.summary.averageContextPrecision}
- Average latency: ${run.summary.averageLatencyMs}ms

## Failed Or Regressed Tests

${renderTable(failedOrRegressed)}

## Detailed Test Breakdown

${run.results.map(renderResultDetails).join("\n\n")}

## Recommended Next Actions

${run.summary.nextRecommendedSteps.map((step) => `- ${step}`).join("\n")}
`;
}

function renderTable(results: TestResult[]): string {
  if (results.length === 0) {
    return "No failed or regressed tests.";
  }

  const rows = results.map(
    (result) =>
      `| ${result.testId} | ${result.regressionStatus} | ${result.passed ? "yes" : "no"} | ${result.metrics.overallScore} | ${result.metrics.expectedFactCoverage} |`
  );
  return ["| Test | Status | Passed | Overall | Fact Coverage |", "| --- | --- | --- | ---: | ---: |", ...rows].join(
    "\n"
  );
}

function renderResultDetails(result: TestResult): string {
  const contexts = result.retrievedContext
    .map((context) => `  - ${context.id} (${context.score}): ${context.snippet}`)
    .join("\n");

  return `### ${result.testId}

- Question: ${result.question}
- Status: ${result.regressionStatus}
- Passed: ${result.passed ? "yes" : "no"}
- Scores: overall ${result.metrics.overallScore}, facts ${result.metrics.expectedFactCoverage}, faithfulness ${result.metrics.faithfulness}, context ${result.metrics.contextPrecision}, similarity ${result.metrics.answerSimilarity}
- Expected facts: ${result.expectedFacts.join("; ")}
- Retrieved context:
${contexts || "  - none"}
- Generated answer: ${result.generatedAnswer}
${result.error ? `- Error: ${result.error}` : ""}`;
}

