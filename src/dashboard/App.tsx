import { Activity, BarChart3, BookOpenText, Database, FileText, Play, RefreshCw, ShieldCheck } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { DashboardData, DashboardTestRow } from "./dataAdapter.js";

type Tab = "overview" | "reports" | "ledger" | "history";

const statusLabels: Record<string, string> = {
  regressed: "Regressed",
  improved: "Improved",
  unchanged: "Unchanged",
  newly_passing: "Newly Passing",
  newly_failing: "Newly Failing",
  baseline: "Baseline"
};

export function App(): JSX.Element {
  const [data, setData] = useState<DashboardData | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>("overview");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [runningDemo, setRunningDemo] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = useMemo(() => {
    if (!data?.rows.length) {
      return undefined;
    }
    return data.rows.find((row) => row.testId === selectedId) ?? data.rows[0];
  }, [data, selectedId]);

  async function refresh(): Promise<void> {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/dashboard");
      if (!response.ok) {
        throw new Error(`Dashboard API failed with ${response.status}`);
      }
      const nextData = (await response.json()) as DashboardData;
      setData(nextData);
      setSelectedId((current) => current ?? nextData.rows[0]?.testId ?? null);
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : String(fetchError));
    } finally {
      setLoading(false);
    }
  }

  async function runDemoFromUi(): Promise<void> {
    setRunningDemo(true);
    setError(null);
    try {
      const response = await fetch("/api/run-demo", { method: "POST" });
      if (!response.ok) {
        throw new Error(`Run demo failed with ${response.status}`);
      }
      const nextData = (await response.json()) as DashboardData;
      setData(nextData);
      setSelectedId(nextData.rows[0]?.testId ?? null);
      setActiveTab("overview");
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : String(fetchError));
    } finally {
      setRunningDemo(false);
    }
  }

  useEffect(() => {
    void refresh();
  }, []);

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <Activity size={22} />
          </div>
          <div>
            <h1>RAG Regression Lab</h1>
            <p>Quality gates for RAG changes</p>
          </div>
        </div>
        <nav className="nav-list" aria-label="Dashboard sections">
          <NavButton icon={<BarChart3 size={18} />} label="Overview" active={activeTab === "overview"} onClick={() => setActiveTab("overview")} />
          <NavButton icon={<FileText size={18} />} label="Reports" active={activeTab === "reports"} onClick={() => setActiveTab("reports")} />
          <NavButton icon={<ShieldCheck size={18} />} label="Agent Ledger" active={activeTab === "ledger"} onClick={() => setActiveTab("ledger")} />
          <NavButton icon={<Database size={18} />} label="History" active={activeTab === "history"} onClick={() => setActiveTab("history")} />
        </nav>
        <div className="command-card">
          <span>Offline demo</span>
          <code>npm run demo</code>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <p className="eyebrow">Local-first regression dashboard</p>
            <h2>{data?.run?.metadata.suiteName ?? "Latest RAG run"}</h2>
          </div>
          <div className="topbar-actions">
            <button className="button secondary" onClick={() => void refresh()} disabled={loading}>
              <RefreshCw size={16} />
              Refresh
            </button>
            <button className="button primary" onClick={() => void runDemoFromUi()} disabled={runningDemo}>
              <Play size={16} />
              {runningDemo ? "Running..." : "Run Demo"}
            </button>
          </div>
        </header>

        {error ? <div className="error-banner">{error}</div> : null}
        {loading ? <div className="empty-state">Loading latest regression data...</div> : null}
        {!loading && data?.empty ? <EmptyState onRunDemo={runDemoFromUi} runningDemo={runningDemo} /> : null}
        {!loading && data && !data.empty ? (
          <>
            {activeTab === "overview" ? <Overview data={data} selected={selected} onSelect={setSelectedId} /> : null}
            {activeTab === "reports" ? <MarkdownPanel title="Latest Report" path={data.latestReportMarkdownPath} content={data.reportMarkdown} /> : null}
            {activeTab === "ledger" ? <LedgerPanel data={data} /> : null}
            {activeTab === "history" ? <HistoryPanel data={data} /> : null}
          </>
        ) : null}
      </section>
    </main>
  );
}

function Overview(props: {
  data: DashboardData;
  selected?: DashboardTestRow;
  onSelect: (testId: string) => void;
}): JSX.Element {
  const run = props.data.run!;
  const averageOverall = average(props.data.rows.map((row) => row.candidateScore));
  return (
    <div className="overview-layout">
      <section className="summary-grid">
        <MetricCard label="Latest Run" value={shortRunId(run.metadata.runId)} icon={<Activity size={18} />} />
        <MetricCard label="Total Tests" value={run.summary.totalTests} icon={<Database size={18} />} />
        <MetricCard label="Passed" value={run.summary.passed} tone="success" />
        <MetricCard label="Failed" value={run.summary.failed} tone="danger" />
        <MetricCard label="Regressed" value={run.summary.regressed} tone="warning" />
        <MetricCard label="Improved" value={run.summary.improved} tone="success" />
        <MetricCard label="Average Overall" value={averageOverall.toFixed(3)} icon={<BarChart3 size={18} />} />
      </section>

      <section className="run-strip">
        <InfoItem label="Timestamp" value={new Date(run.metadata.timestamp).toLocaleString()} />
        <InfoItem label="Baseline" value={`${props.data.baselineRun?.config.name ?? "Unknown"} top_k=${props.data.baselineRun?.config.topK ?? "?"}`} />
        <InfoItem label="Candidate" value={`${run.config.name} top_k=${run.config.topK}`} />
        <InfoItem label="Latest report" value={props.data.latestReportPath ?? "Not found"} />
        <InfoItem label="Latest ledger" value={props.data.latestLedgerPath ?? "Not found"} />
      </section>

      <div className="content-grid">
        <RegressionTable rows={props.data.rows} selectedId={props.selected?.testId} onSelect={props.onSelect} />
        {props.selected ? <DetailPanel row={props.selected} /> : null}
      </div>
    </div>
  );
}

function RegressionTable(props: {
  rows: DashboardTestRow[];
  selectedId?: string;
  onSelect: (testId: string) => void;
}): JSX.Element {
  return (
    <section className="panel table-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Baseline vs candidate</p>
          <h3>Regression Cases</h3>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Question</th>
              <th>Baseline</th>
              <th>Candidate</th>
              <th>Delta</th>
              <th>Status</th>
              <th>Result</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {props.rows.map((row) => (
              <tr
                key={row.testId}
                className={props.selectedId === row.testId ? "selected-row" : ""}
                onClick={() => props.onSelect(row.testId)}
              >
                <td className="mono">{row.testId}</td>
                <td>{row.question}</td>
                <td>{formatScore(row.baselineScore)}</td>
                <td>{formatScore(row.candidateScore)}</td>
                <td className={row.delta !== null && row.delta < 0 ? "negative" : "positive"}>{formatDelta(row.delta)}</td>
                <td>
                  <Badge status={row.status} />
                </td>
                <td>
                  <span className={`badge ${row.passed ? "success" : "danger"}`}>{row.passed ? "Passed" : "Failed"}</span>
                </td>
                <td>
                  <div className="tag-list">{row.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DetailPanel({ row }: { row: DashboardTestRow }): JSX.Element {
  const baseline = row.baseline;
  const candidate = row.candidate;
  const explanation =
    row.delta === null
      ? "No baseline result was found for this test."
      : row.delta < -0.1
        ? "Candidate score dropped beyond the default 0.10 threshold, so this test is marked as a regression."
        : row.status === "newly_failing"
          ? "The baseline passed but the candidate failed the overall score threshold."
          : "The candidate result is within the configured regression tolerance.";

  return (
    <aside className="panel detail-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Test detail</p>
          <h3>{row.testId}</h3>
        </div>
        <Badge status={row.status} />
      </div>
      <p className="question">{row.question}</p>
      <div className="tag-list">
        {row.tags.map((tag) => <span key={tag}>{tag}</span>)}
        {row.difficulty ? <span>{row.difficulty}</span> : null}
      </div>

      <SectionTitle title="Expected Facts" />
      <ul className="fact-list">
        {candidate.expectedFacts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>

      <SectionTitle title="Generated Answer" />
      <p className="answer-box">{candidate.generatedAnswer}</p>

      <SectionTitle title="Metric Breakdown" />
      <div className="score-grid">
        <ScorePair label="Overall" baseline={baseline?.metrics.overallScore} candidate={candidate.metrics.overallScore} />
        <ScorePair label="Fact Coverage" baseline={baseline?.metrics.expectedFactCoverage} candidate={candidate.metrics.expectedFactCoverage} />
        <ScorePair label="Faithfulness" baseline={baseline?.metrics.faithfulness} candidate={candidate.metrics.faithfulness} />
        <ScorePair label="Context Precision" baseline={baseline?.metrics.contextPrecision} candidate={candidate.metrics.contextPrecision} />
        <ScorePair label="Similarity" baseline={baseline?.metrics.answerSimilarity} candidate={candidate.metrics.answerSimilarity} />
      </div>

      <SectionTitle title="Retrieved Context" />
      <div className="context-list">
        {candidate.retrievedContext.map((context) => (
          <article key={context.id}>
            <strong>{context.title}</strong>
            <span>{context.id} score {context.score}</span>
            <p>{context.snippet}</p>
          </article>
        ))}
      </div>

      <SectionTitle title="Regression Explanation" />
      <p className="muted">{explanation}</p>
    </aside>
  );
}

function LedgerPanel({ data }: { data: DashboardData }): JSX.Element {
  return (
    <div className="two-column">
      <MarkdownPanel title="Latest AgentRun Ledger" path={data.latestLedgerPath} content={data.ledgerMarkdown} />
      <MarkdownPanel title="Recovery Context" path="agentrun-ledger/recovery-context.md" content={data.recoveryContext} />
    </div>
  );
}

function MarkdownPanel({ title, path, content }: { title: string; path?: string; content?: string }): JSX.Element {
  return (
    <section className="panel markdown-panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">{path ?? "No file"}</p>
          <h3>{title}</h3>
        </div>
        <BookOpenText size={18} />
      </div>
      <pre>{content ?? "No content found yet."}</pre>
    </section>
  );
}

function HistoryPanel({ data }: { data: DashboardData }): JSX.Element {
  return (
    <section className="panel">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Generated run artifacts</p>
          <h3>Historical Runs</h3>
        </div>
      </div>
      <div className="history-list">
        {data.history.map((item) => (
          <article key={item.runId}>
            <div>
              <strong>{item.runId}</strong>
              <p>{new Date(item.timestamp).toLocaleString()} · {item.suiteName}</p>
            </div>
            <div className="history-metrics">
              <span>Avg {item.averageOverall}</span>
              <span>{item.regressed} regressed</span>
              <span>{item.failed} failed</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EmptyState({ onRunDemo, runningDemo }: { onRunDemo: () => Promise<void>; runningDemo: boolean }): JSX.Element {
  return (
    <section className="empty-state">
      <h3>No runs found yet.</h3>
      <p>Run npm run demo to generate your first regression report, or start it here through the local dashboard server.</p>
      <button className="button primary" onClick={() => void onRunDemo()} disabled={runningDemo}>
        <Play size={16} />
        {runningDemo ? "Running..." : "Run Demo"}
      </button>
    </section>
  );
}

function NavButton(props: { icon: JSX.Element; label: string; active: boolean; onClick: () => void }): JSX.Element {
  return (
    <button className={`nav-button ${props.active ? "active" : ""}`} onClick={props.onClick}>
      {props.icon}
      {props.label}
    </button>
  );
}

function MetricCard(props: { label: string; value: string | number; tone?: "success" | "warning" | "danger"; icon?: JSX.Element }): JSX.Element {
  return (
    <article className={`metric-card ${props.tone ?? ""}`}>
      <div>
        <span>{props.label}</span>
        <strong>{props.value}</strong>
      </div>
      {props.icon ? <div className="metric-icon">{props.icon}</div> : null}
    </article>
  );
}

function InfoItem({ label, value }: { label: string; value: string }): JSX.Element {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Badge({ status }: { status: string }): JSX.Element {
  return <span className={`badge ${status}`}>{statusLabels[status] ?? status}</span>;
}

function SectionTitle({ title }: { title: string }): JSX.Element {
  return <h4 className="section-title">{title}</h4>;
}

function ScorePair({ label, baseline, candidate }: { label: string; baseline?: number; candidate: number }): JSX.Element {
  return (
    <div>
      <span>{label}</span>
      <strong>{formatScore(candidate)}</strong>
      <small>Baseline {formatScore(baseline ?? null)}</small>
    </div>
  );
}

function formatScore(score: number | null | undefined): string {
  return score === null || score === undefined ? "n/a" : score.toFixed(3);
}

function formatDelta(delta: number | null): string {
  if (delta === null) {
    return "n/a";
  }
  return `${delta > 0 ? "+" : ""}${delta.toFixed(3)}`;
}

function average(values: number[]): number {
  if (values.length === 0) {
    return 0;
  }
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function shortRunId(runId: string): string {
  return runId.length > 22 ? `${runId.slice(0, 22)}...` : runId;
}
