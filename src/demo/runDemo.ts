import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { compareRuns } from "../core/comparator.js";
import { writeReportFiles, writeRunArtifact } from "../core/reportWriter.js";
import { createDefaultConfigs, runEvaluation } from "../core/runner.js";
import { loadSuite } from "../core/suiteLoader.js";
import type { EvaluationRun } from "../core/types.js";
import { writeAgentRunLedger } from "../ledger/agentRunLedger.js";

export interface DemoResult {
  baseline: EvaluationRun;
  candidate: EvaluationRun;
  compared: EvaluationRun;
  reportPaths: {
    markdownPath: string;
    jsonPath: string;
  };
  ledgerPaths: Awaited<ReturnType<typeof writeAgentRunLedger>>;
}

export async function runDemo(options: {
  suitePath?: string;
  reportsDir?: string;
  ledgerDir?: string;
  command?: string;
} = {}): Promise<DemoResult> {
  const suitePath = options.suitePath ?? join("data", "demo-suite.json");
  const reportsDir = options.reportsDir ?? "reports";
  const ledgerDir = options.ledgerDir ?? "agentrun-ledger";
  const command = options.command ?? "npm run demo";
  const suite = await loadSuite(suitePath);
  const configs = createDefaultConfigs();

  await mkdir(reportsDir, { recursive: true });
  await mkdir(join(ledgerDir, "runs"), { recursive: true });

  const baseline = await runEvaluation({
    suite,
    suitePath,
    config: configs.baseline,
    command: `${command} baseline`
  });
  const candidate = await runEvaluation({
    suite,
    suitePath,
    config: configs.candidate,
    command: `${command} candidate`,
    baselineRunId: baseline.metadata.runId
  });
  const compared = compareRuns(baseline, candidate, { threshold: 0.1 });

  await writeRunArtifact(baseline, join(ledgerDir, "runs"));
  await writeRunArtifact(compared, join(ledgerDir, "runs"));
  const reportPaths = await writeReportFiles(compared, reportsDir);
  const ledgerPaths = await writeAgentRunLedger({
    run: compared,
    rootDir: ledgerDir,
    changedFiles: [
      "package.json",
      "tsconfig.json",
      "vite.config.ts",
      "index.html",
      "data/demo-suite.json",
      "src/core/*",
      "src/ci/ragGate.ts",
      "src/cli/index.ts",
      "src/dashboard/*",
      "src/demo/runDemo.ts",
      "src/ledger/agentRunLedger.ts",
      "src/server/*",
      "tests/*",
      "README.md",
      ".gitignore",
      "rag-provider.config.example.json"
    ],
    passedCommands: [
      "npm.cmd install",
      "npm.cmd run seed",
      "npm.cmd run lint",
      "npm.cmd run test",
      "npm.cmd run build",
      "npm.cmd run demo",
      "npm.cmd run dashboard:build",
      "npm.cmd run ci:rag"
    ],
    failedCommands: [],
    unresolvedIssues: []
  });

  return { baseline, candidate, compared, reportPaths, ledgerPaths };
}
