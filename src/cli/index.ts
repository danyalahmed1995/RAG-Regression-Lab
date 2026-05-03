#!/usr/bin/env node
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { compareRuns } from "../core/comparator.js";
import { readRun, writeReportFiles, writeRunArtifact } from "../core/reportWriter.js";
import { createDefaultConfigs, runEvaluation } from "../core/runner.js";
import { loadSuite } from "../core/suiteLoader.js";
import type { EvaluationRun, RagConfig } from "../core/types.js";
import { runDemo } from "../demo/runDemo.js";

const args = process.argv.slice(2);
const command = args[0] ?? "help";

async function main(): Promise<void> {
  switch (command) {
    case "seed":
      await seed();
      break;
    case "run":
      await runSingle(args.slice(1));
      break;
    case "compare":
      await compare(args.slice(1));
      break;
    case "report":
      await report(args.slice(1));
      break;
    case "demo":
      await demo();
      break;
    case "help":
    default:
      printHelp();
      break;
  }
}

async function seed(): Promise<void> {
  await mkdir("reports", { recursive: true });
  await mkdir(join("agentrun-ledger", "runs"), { recursive: true });
  const suite = await loadSuite(join("data", "demo-suite.json"));
  console.log(`Seed suite ready: ${suite.name} (${suite.cases.length} tests)`);
}

async function runSingle(rawArgs: string[]): Promise<void> {
  const suitePath = getArg(rawArgs, "--suite") ?? join("data", "demo-suite.json");
  const configName = getArg(rawArgs, "--config") ?? "baseline";
  const outputDir = getArg(rawArgs, "--out") ?? join("agentrun-ledger", "runs");
  const suite = await loadSuite(suitePath);
  const config = resolveConfig(configName);
  const run = await runEvaluation({
    suite,
    suitePath,
    config,
    command: `rag-lab run --suite ${suitePath} --config ${configName}`
  });
  const runPath = await writeRunArtifact(run, outputDir);
  console.log(formatRunSummary(run));
  console.log(`Run artifact: ${runPath}`);
}

async function compare(rawArgs: string[]): Promise<void> {
  const baselinePath = requireArg(rawArgs, "--baseline");
  const candidatePath = requireArg(rawArgs, "--candidate");
  const outputDir = getArg(rawArgs, "--out") ?? join("agentrun-ledger", "runs");
  const threshold = Number(getArg(rawArgs, "--threshold") ?? "0.1");
  const baseline = await readRun(baselinePath);
  const candidate = await readRun(candidatePath);
  const compared = compareRuns(baseline, candidate, { threshold });
  const runPath = await writeRunArtifact(compared, outputDir);
  console.log(formatRunSummary(compared));
  console.log(`Compared run artifact: ${runPath}`);
}

async function report(rawArgs: string[]): Promise<void> {
  const runPath = requireArg(rawArgs, "--run");
  const outputDir = getArg(rawArgs, "--out") ?? "reports";
  const run = await readRun(runPath);
  const paths = await writeReportFiles(run, outputDir);
  console.log(`Markdown report: ${paths.markdownPath}`);
  console.log(`JSON report: ${paths.jsonPath}`);
}

async function demo(): Promise<void> {
  const result = await runDemo({ command: "npm run demo" });
  console.log("RAG Regression Lab demo complete.");
  console.log(formatRunSummary(result.compared));
  console.log(`Report: ${result.reportPaths.markdownPath}`);
  console.log(`Ledger markdown: ${result.ledgerPaths.latestMarkdownPath}`);
  console.log(`Ledger JSON: ${result.ledgerPaths.latestJsonPath}`);
  console.log(`Recovery context: ${result.ledgerPaths.recoveryPath}`);
}

function resolveConfig(name: string): RagConfig {
  const configs = createDefaultConfigs();
  if (name === "baseline" || name === configs.baseline.name) {
    return configs.baseline;
  }
  if (name === "candidate" || name === configs.candidate.name) {
    return configs.candidate;
  }
  throw new Error(`Unknown config "${name}". Use baseline or candidate.`);
}

function getArg(rawArgs: string[], name: string): string | undefined {
  const index = rawArgs.indexOf(name);
  return index >= 0 ? rawArgs[index + 1] : undefined;
}

function requireArg(rawArgs: string[], name: string): string {
  const value = getArg(rawArgs, name);
  if (!value) {
    throw new Error(`Missing required argument ${name}.`);
  }
  return value;
}

function formatRunSummary(run: EvaluationRun): string {
  return [
    `Run: ${run.metadata.runId}`,
    `Suite: ${run.suite.name}`,
    `Passed: ${run.summary.passed}/${run.summary.totalTests}`,
    `Failed: ${run.summary.failed}`,
    `Regressed: ${run.summary.regressed}`,
    `Improved: ${run.summary.improved}`,
    `Average overall: ${averageOverall(run)}`
  ].join("\n");
}

function averageOverall(run: EvaluationRun): number {
  if (run.results.length === 0) {
    return 0;
  }
  return Number(
    (run.results.reduce((sum, result) => sum + result.metrics.overallScore, 0) / run.results.length).toFixed(4)
  );
}

function printHelp(): void {
  console.log(`RAG Regression Lab

Commands:
  rag-lab seed
  rag-lab run --suite data/demo-suite.json --config baseline
  rag-lab compare --baseline <baseline.json> --candidate <candidate.json>
  rag-lab report --run <run.json>
  rag-lab demo
`);
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});

