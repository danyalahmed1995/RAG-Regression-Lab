import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { renderMarkdownReport, writeJsonFile } from "../core/reportWriter.js";
import type { EvaluationRun } from "../core/types.js";

export async function writeAgentRunLedger(options: {
  run: EvaluationRun;
  rootDir?: string;
  changedFiles: string[];
  passedCommands: string[];
  failedCommands: string[];
  unresolvedIssues: string[];
}): Promise<{ latestMarkdownPath: string; latestJsonPath: string; recoveryPath: string; runMarkdownPath: string; runJsonPath: string }> {
  const rootDir = options.rootDir ?? "agentrun-ledger";
  const runsDir = join(rootDir, "runs");
  await mkdir(runsDir, { recursive: true });

  const latestMarkdownPath = join(rootDir, "latest-run.md");
  const latestJsonPath = join(rootDir, "latest-run.json");
  const recoveryPath = join(rootDir, "recovery-context.md");
  const runMarkdownPath = join(runsDir, `${options.run.metadata.runId}.md`);
  const runJsonPath = join(runsDir, `${options.run.metadata.runId}.json`);

  const markdown = renderMarkdownReport(options.run);
  await writeFile(latestMarkdownPath, markdown, "utf8");
  await writeFile(runMarkdownPath, markdown, "utf8");
  await writeJsonFile(latestJsonPath, options.run);
  await writeJsonFile(runJsonPath, options.run);
  await writeFile(recoveryPath, renderRecoveryContext(options), "utf8");

  return { latestMarkdownPath, latestJsonPath, recoveryPath, runMarkdownPath, runJsonPath };
}

export function renderRecoveryContext(options: {
  run: EvaluationRun;
  changedFiles: string[];
  passedCommands: string[];
  failedCommands: string[];
  unresolvedIssues: string[];
}): string {
  const { run } = options;
  return `# Agent Recovery Context

Last updated: ${new Date().toISOString()}

## What Was Built

RAG Regression Lab is implemented as a local-first TypeScript CLI plus a Material-inspired web dashboard. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, exposes dashboard data APIs, and updates AgentRun Ledger artifacts.

## Latest Run

- Run id: ${run.metadata.runId}
- Timestamp: ${run.metadata.timestamp}
- Suite: ${run.metadata.suiteName}
- Baseline run id: ${run.metadata.baselineRunId ?? "none"}
- Config: ${run.config.name}, top_k=${run.config.topK}
- Passed: ${run.summary.passed}/${run.summary.totalTests}
- Failed: ${run.summary.failed}
- Regressed: ${run.summary.regressed}
- Improved: ${run.summary.improved}

## Commands Passed

${options.passedCommands.length > 0 ? options.passedCommands.map((command) => `- \`${command}\``).join("\n") : "- None recorded yet."}

## Commands Failed

${options.failedCommands.length > 0 ? options.failedCommands.map((command) => `- \`${command}\``).join("\n") : "- None recorded."}

## Dashboard And Commands Added

- \`npm.cmd run dashboard\` starts the local Express dashboard server.
- \`npm.cmd run dev\` starts Vite for frontend development with \`/api\` proxied to the dashboard server.
- \`npm.cmd run dashboard:build\` builds the React dashboard into \`dist-dashboard/\`.
- \`npm.cmd run ci:rag\` runs the demo-friendly regression gate.

## Unresolved Issues

${options.unresolvedIssues.length > 0 ? options.unresolvedIssues.map((issue) => `- ${issue}`).join("\n") : "- None known."}

## Known Limitations

- Real OpenAI and Groq providers are represented by validated config stubs only; the default offline provider is the working implementation.
- The dashboard reads local generated artifacts and is intended for local portfolio/demo use, not multi-user hosting.

## Important Files Changed

${options.changedFiles.map((file) => `- ${file}`).join("\n")}

## How To Continue After Reset

1. Re-read \`rag-regression-lab-codex-task.md\`.
2. Read the \`agent-recipes/\` files and follow the matching recipe for the next work type.
3. Inspect \`agentrun-ledger/latest-run.md\` and \`agentrun-ledger/latest-run.json\`.
4. Run \`npm.cmd run test\`, \`npm.cmd run build\`, \`npm.cmd run dashboard:build\`, \`npm.cmd run demo\`, and \`npm.cmd run ci:rag\`.
5. Continue from the first failing requirement or validation command.
`;
}
