import { readdir, readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import type { EvaluationRun, TestSuite } from "../core/types.js";

export interface DashboardTestRow {
  testId: string;
  question: string;
  baselineScore: number | null;
  candidateScore: number;
  delta: number | null;
  status: string;
  passed: boolean;
  tags: string[];
  difficulty?: string;
  baseline?: EvaluationRun["results"][number];
  candidate: EvaluationRun["results"][number];
}

export interface HistoricalRunSummary {
  runId: string;
  timestamp: string;
  suiteName: string;
  averageOverall: number;
  regressed: number;
  failed: number;
  reportPath?: string;
  sourcePath: string;
}

export interface DashboardData {
  empty: boolean;
  message?: string;
  latestReportPath?: string;
  latestLedgerPath?: string;
  latestReportMarkdownPath?: string;
  reportMarkdown?: string;
  ledgerMarkdown?: string;
  recoveryContext?: string;
  run?: EvaluationRun;
  baselineRun?: EvaluationRun;
  rows: DashboardTestRow[];
  history: HistoricalRunSummary[];
  suiteCases: Array<{ id: string; tags: string[]; difficulty?: string }>;
}

export async function loadDashboardData(rootDir = process.cwd()): Promise<DashboardData> {
  const latestReportPath = await findLatestJson(join(rootDir, "reports"), "rag-regression-report-");
  const latestLedgerPath = join(rootDir, "agentrun-ledger", "latest-run.json");
  const latestLedgerMarkdownPath = join(rootDir, "agentrun-ledger", "latest-run.md");
  const recoveryPath = join(rootDir, "agentrun-ledger", "recovery-context.md");
  const suitePath = join(rootDir, "data", "demo-suite.json");

  if (!latestReportPath && !(await fileExists(latestLedgerPath))) {
    return {
      empty: true,
      message: "No runs found yet. Run npm run demo to generate your first regression report.",
      rows: [],
      history: [],
      suiteCases: []
    };
  }

  const runPath = latestReportPath ?? latestLedgerPath;
  const run = await readJson<EvaluationRun>(runPath);
  const baselineRun = run.metadata.baselineRunId
    ? await findRunById(rootDir, run.metadata.baselineRunId)
    : undefined;
  const suite = await readJson<TestSuite>(suitePath).catch(() => undefined);
  const latestReportMarkdownPath = latestReportPath?.replace(/\.json$/, ".md");

  return {
    empty: false,
    latestReportPath,
    latestLedgerPath,
    latestReportMarkdownPath,
    reportMarkdown: latestReportMarkdownPath ? await readTextIfExists(latestReportMarkdownPath) : undefined,
    ledgerMarkdown: await readTextIfExists(latestLedgerMarkdownPath),
    recoveryContext: await readTextIfExists(recoveryPath),
    run,
    baselineRun,
    rows: buildRows(run, baselineRun, suite),
    history: await listHistoricalRuns(rootDir),
    suiteCases:
      suite?.cases.map((testCase) => ({
        id: testCase.id,
        tags: testCase.tags ?? [],
        difficulty: testCase.difficulty
      })) ?? []
  };
}

export async function listHistoricalRuns(rootDir = process.cwd()): Promise<HistoricalRunSummary[]> {
  const reportRuns = await readRunSummaries(join(rootDir, "reports"), "rag-regression-report-");
  const ledgerRuns = await readRunSummaries(join(rootDir, "agentrun-ledger", "runs"));
  const byId = new Map<string, HistoricalRunSummary>();
  for (const item of [...ledgerRuns, ...reportRuns]) {
    byId.set(item.runId, { ...byId.get(item.runId), ...item });
  }
  return [...byId.values()].sort((left, right) => right.timestamp.localeCompare(left.timestamp));
}

export async function findLatestJson(dir: string, prefix?: string): Promise<string | undefined> {
  const files = await readJsonFiles(dir, prefix);
  return files.sort((left, right) => right.mtimeMs - left.mtimeMs)[0]?.path;
}

export async function findRunById(rootDir: string, runId: string): Promise<EvaluationRun | undefined> {
  const candidates = [
    join(rootDir, "agentrun-ledger", "runs", `${runId}.json`),
    join(rootDir, "reports", `rag-regression-report-${runId}.json`)
  ];
  for (const candidate of candidates) {
    if (await fileExists(candidate)) {
      return readJson<EvaluationRun>(candidate);
    }
  }
  return undefined;
}

function buildRows(run: EvaluationRun, baselineRun: EvaluationRun | undefined, suite?: TestSuite): DashboardTestRow[] {
  const baselineById = new Map(baselineRun?.results.map((result) => [result.testId, result]) ?? []);
  const suiteById = new Map(suite?.cases.map((testCase) => [testCase.id, testCase]) ?? []);

  return run.results.map((candidate) => {
    const baseline = baselineById.get(candidate.testId);
    const suiteCase = suiteById.get(candidate.testId);
    const baselineScore = baseline?.metrics.overallScore ?? null;
    return {
      testId: candidate.testId,
      question: candidate.question,
      baselineScore,
      candidateScore: candidate.metrics.overallScore,
      delta: baselineScore === null ? null : Number((candidate.metrics.overallScore - baselineScore).toFixed(4)),
      status: candidate.regressionStatus,
      passed: candidate.passed,
      tags: suiteCase?.tags ?? [],
      difficulty: suiteCase?.difficulty,
      baseline,
      candidate
    };
  });
}

async function readRunSummaries(dir: string, prefix?: string): Promise<HistoricalRunSummary[]> {
  const files = await readJsonFiles(dir, prefix);
  const summaries = await Promise.all(
    files.map(async (file) => {
      const run = await readJson<EvaluationRun>(file.path);
      const averageOverall =
        run.results.length === 0
          ? 0
          : Number((run.results.reduce((sum, result) => sum + result.metrics.overallScore, 0) / run.results.length).toFixed(4));
      return {
        runId: run.metadata.runId,
        timestamp: run.metadata.timestamp,
        suiteName: run.metadata.suiteName,
        averageOverall,
        regressed: run.summary.regressed,
        failed: run.summary.failed,
        reportPath: prefix ? file.path : undefined,
        sourcePath: file.path
      };
    })
  );
  return summaries;
}

async function readJsonFiles(dir: string, prefix?: string): Promise<Array<{ path: string; mtimeMs: number }>> {
  try {
    const names = await readdir(dir);
    const jsonNames = names.filter((name) => name.endsWith(".json") && (!prefix || name.startsWith(prefix)));
    return Promise.all(
      jsonNames.map(async (name) => {
        const path = join(dir, name);
        const info = await stat(path);
        return { path, mtimeMs: info.mtimeMs };
      })
    );
  } catch {
    return [];
  }
}

async function readJson<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, "utf8")) as T;
}

async function readTextIfExists(path: string): Promise<string | undefined> {
  try {
    return await readFile(path, "utf8");
  } catch {
    return undefined;
  }
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}
