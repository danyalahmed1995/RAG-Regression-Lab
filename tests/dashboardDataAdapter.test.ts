import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { compareRuns } from "../src/core/comparator.js";
import { writeReportFiles, writeRunArtifact } from "../src/core/reportWriter.js";
import { createDefaultConfigs, runEvaluation } from "../src/core/runner.js";
import { loadSuite } from "../src/core/suiteLoader.js";
import { findLatestJson, listHistoricalRuns, loadDashboardData } from "../src/dashboard/dataAdapter.js";
import { writeAgentRunLedger } from "../src/ledger/agentRunLedger.js";

describe("dashboard data adapter", () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), "rag-dashboard-"));
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("returns an empty state when no run artifacts exist", async () => {
    const data = await loadDashboardData(dir);
    expect(data.empty).toBe(true);
    expect(data.message).toContain("No runs found");
  });

  it("finds the newest report JSON by modification time", async () => {
    const reportsDir = join(dir, "reports");
    await mkdir(reportsDir, { recursive: true });
    const older = join(reportsDir, "rag-regression-report-old.json");
    const newer = join(reportsDir, "rag-regression-report-new.json");
    await writeFile(older, "{}", "utf8");
    await new Promise((resolve) => setTimeout(resolve, 10));
    await writeFile(newer, "{}", "utf8");
    expect(await findLatestJson(reportsDir, "rag-regression-report-")).toBe(newer);
  });

  it("loads latest run, baseline scores, markdown, ledger, and history", async () => {
    await mkdir(join(dir, "data"), { recursive: true });
    await writeFile(join(dir, "data", "demo-suite.json"), await readFile("data/demo-suite.json", "utf8"), "utf8");

    const suite = await loadSuite("data/demo-suite.json");
    const configs = createDefaultConfigs();
    const baseline = await runEvaluation({
      suite,
      suitePath: "data/demo-suite.json",
      config: configs.baseline,
      command: "test baseline"
    });
    const candidate = await runEvaluation({
      suite,
      suitePath: "data/demo-suite.json",
      config: configs.candidate,
      command: "test candidate",
      baselineRunId: baseline.metadata.runId
    });
    const compared = compareRuns(baseline, candidate);
    await writeRunArtifact(baseline, join(dir, "agentrun-ledger", "runs"));
    await writeReportFiles(compared, join(dir, "reports"));
    await writeAgentRunLedger({
      run: compared,
      rootDir: join(dir, "agentrun-ledger"),
      changedFiles: [],
      passedCommands: [],
      failedCommands: [],
      unresolvedIssues: []
    });

    const data = await loadDashboardData(dir);
    expect(data.empty).toBe(false);
    expect(data.rows).toHaveLength(8);
    expect(data.rows[0]?.baselineScore).not.toBeNull();
    expect(data.reportMarkdown).toContain("RAG Regression Report");
    expect(data.recoveryContext).toContain("Agent Recovery Context");
    expect(data.history.length).toBeGreaterThanOrEqual(1);
  });

  it("lists historical run summaries from report and ledger folders", async () => {
    await mkdir(join(dir, "data"), { recursive: true });
    await writeFile(join(dir, "data", "demo-suite.json"), await readFile("data/demo-suite.json", "utf8"), "utf8");
    const suite = await loadSuite("data/demo-suite.json");
    const run = await runEvaluation({
      suite,
      suitePath: "data/demo-suite.json",
      config: createDefaultConfigs().baseline,
      command: "history"
    });
    await writeRunArtifact(run, join(dir, "agentrun-ledger", "runs"));
    const history = await listHistoricalRuns(dir);
    expect(history[0]?.runId).toBe(run.metadata.runId);
    expect(history[0]?.averageOverall).toBeGreaterThan(0);
  });
});
