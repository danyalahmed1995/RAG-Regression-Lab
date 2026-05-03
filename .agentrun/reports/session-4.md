# AgentRun Report: dashboard final validation

Final Verdict: ⚠️ UNVERIFIED
Reason:
- No validation performed

Session Score: 7/10

Score breakdown:
- ❌ No validation (-3)

## Top summary

- Commands: 6
- Failed commands: 0
- Retries: 0
- Validation status: not performed

## Session metadata

- Session: #4
- Status: completed
- Started: 2026-05-03 22:12:30.794Z
- Ended: 2026-05-03 22:13:14.087Z
- Duration: 43 seconds
- Repository: D:\AI Work\RAG Regression Lab
- Branch: main
- Start commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e

## Goal

dashboard final validation

## Summary

- Changed files: 28
- File tracking: compared to HEAD; untracked files are included.
- Commands logged: 6
- Passed commands: 6
- Failed commands: 0
- Many untracked files detected. Commit your project baseline to make future sessions cleaner.

- Strong warning: no validation command was logged for this session.

## Retry insights

_No repeated command attempts recorded._

## Files changed

### Modified

- 🟢 .agentrun/agentrun.db (modified)
- 🟢 .gitignore (modified)
- 🟢 PLANNING.md (modified)
- 🟢 README.md (modified)
- 🟢 TASKS.md (modified)
- 🟢 agentrun-ledger/latest-run.json (modified)
- 🟢 agentrun-ledger/latest-run.md (modified)
- 🟢 agentrun-ledger/recovery-context.md (modified)
- 🟢 package-lock.json (modified)
- 🟢 package.json (modified)
- 🟢 src/demo/runDemo.ts (modified)
- 🟢 src/ledger/agentRunLedger.ts (modified)
- 🟢 tsconfig.json (modified)

### Added / Untracked

- 🟡 .agentrun/reports/session-3.md (untracked)
- 🟡 index.html (untracked)
- 🟡 rag-provider.config.example.json (untracked)
- 🟡 src/ci/ragGate.ts (untracked)
- 🟡 src/core/providerConfig.ts (untracked)
- 🟡 src/dashboard/App.tsx (untracked)
- 🟡 src/dashboard/dataAdapter.ts (untracked)
- 🟡 src/dashboard/main.tsx (untracked)
- 🟡 src/dashboard/styles.css (untracked)
- 🟡 src/server/dashboardServer.ts (untracked)
- 🟡 src/server/smokeDashboard.ts (untracked)
- 🟡 tests/dashboardDataAdapter.test.ts (untracked)
- 🟡 tests/providerConfig.test.ts (untracked)
- 🟡 tests/ragGate.test.ts (untracked)
- 🟡 vite.config.ts (untracked)

## Command timeline

### Attempt 1 - npm.cmd run test

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 1256ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:12:40.469Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: 9
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 test
> vitest run tests


 RUN  v4.1.5 D:/AI Work/RAG Regression Lab


 Test Files  9 passed (9)
      Tests  22 passed (22)
   Start at  03:12:41
   Duration  516ms (transform 430ms, setup 0ms, import 748ms, tests 316ms, environment 1ms)
```

### Attempt 1 - npm.cmd run build

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 1287ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:12:46.136Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: unknown
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 build
> tsc
```

### Attempt 1 - npm.cmd run demo

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 671ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:12:51.723Z
- Failure reason: none

Output summary:
- has_errors: true
- has_warnings: false
- passed_tests: 6
- failed_tests: 8
- keywords: failed

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 demo
> tsx src/cli/index.ts demo

RAG Regression Lab demo complete.
Run: candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3
Suite: SaaS Help Center Demo Suite
Passed: 6/8
Failed: 2
Regressed: 7
Improved: 0
Average overall: 0.7476
Report: reports\rag-regression-report-candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3.md
Ledger markdown: agentrun-ledger\latest-run.md
Ledger JSON: agentrun-ledger\latest-run.json
Recovery context: agentrun-ledger\recovery-context.md
```

### Attempt 1 - npm.cmd run dashboard:build

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 2440ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:12:56.314Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: unknown
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 dashboard:build
> vite build

[36mvite v7.3.2 [32mbuilding client environment for production...[36m[39m
transforming...
[32m✓[39m 1690 modules transformed.
rendering chunks...
computing gzip size...
[2mdist-dashboard/[22m[32mindex.html                 [39m[1m[2m  0.41 kB[22m[1m[22m[2m │ gzip:  0.28 kB[22m
[2mdist-dashboard/[22m[35massets/index-CW_CSjeR.css  [39m[1m[2m  6.45 kB[22m[1m[22m[2m │ gzip:  2.15 kB[22m
[2mdist-dashboard/[22m[36massets/index-CJXItaCr.js   [39m[1m[2m207.16 kB[22m[1m[22m[2m │ gzip: 65.19 kB[22m
[32m✓ built in 1.79s[39m
```

### Attempt 1 - npm.cmd run ci:rag

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 575ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:13:02.896Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: unknown
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 ci:rag
> tsx src/ci/ragGate.ts

RAG CI gate: passed
Average overall: 0.7476
Regressions: 7
Newly failing: 2
```

### Attempt 1 - npm.cmd run dashboard:smoke

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 739ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: f5e12931fbb5062ac280600cd476b1ee5cd6d46e
- Started: 2026-05-03 22:13:07.225Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: 8
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 dashboard:smoke
> tsx src/server/smokeDashboard.ts

RAG Regression Lab dashboard: http://127.0.0.1:4318
Dashboard smoke passed: 8 rows
```

## Failed commands

_No failed commands._

## Passed commands

- `npm.cmd run test` - exit 0, 1256ms
- `npm.cmd run build` - exit 0, 1287ms
- `npm.cmd run demo` - exit 0, 671ms
- `npm.cmd run dashboard:build` - exit 0, 2440ms
- `npm.cmd run ci:rag` - exit 0, 575ms
- `npm.cmd run dashboard:smoke` - exit 0, 739ms

## Git name status

```txt
M	.agentrun/agentrun.db
M	.gitignore
M	PLANNING.md
M	README.md
M	TASKS.md
M	agentrun-ledger/latest-run.json
M	agentrun-ledger/latest-run.md
M	agentrun-ledger/recovery-context.md
M	package-lock.json
M	package.json
M	src/demo/runDemo.ts
M	src/ledger/agentRunLedger.ts
M	tsconfig.json
```

## Human notes

- 2026-05-03 22:12:35.359Z: Final clean validation session after dashboard implementation and smoke-test script fix.

## Review risks

- **WARNING: Large change surface** - 28 files changed. Consider reviewing by subsystem and checking for unrelated edits.
- **WARNING: Dependency/config changes** - Package, lockfile, TypeScript, Vite, environment, or GitHub config files changed.
- **DANGER: Sensitive logic changed** - The changed files or diff mention auth, payment, Firebase, database, credentials, or similar sensitive areas.

## Suggested follow-up

Run a validation command and regenerate the report.

## Final raw diff

<details>
<summary>Show raw diff</summary>

```txt
diff --git a/.agentrun/agentrun.db b/.agentrun/agentrun.db
index 5decc07..a5112b8 100644
Binary files a/.agentrun/agentrun.db and b/.agentrun/agentrun.db differ
diff --git a/.gitignore b/.gitignore
index b7d4bcc..e18d806 100644
--- a/.gitignore
+++ b/.gitignore
@@ -90,6 +90,7 @@ out
 # Nuxt.js build / generate output
 .nuxt
 dist
+dist-dashboard/
 
 # RAG Regression Lab generated output
 reports/*.json
diff --git a/PLANNING.md b/PLANNING.md
index 4d69eba..e09f886 100644
--- a/PLANNING.md
+++ b/PLANNING.md
@@ -30,3 +30,11 @@ This file satisfies `agent-recipes/planning-session.md` after the recipes were a
 - `agent-recipes/` was missing when implementation started and was added afterward.
 - PowerShell blocks `.ps1` shims in this environment, so validation uses `npm.cmd` and `agentrun.cmd`.
 
+## Dashboard Upgrade Plan
+
+- Add an Express dashboard server with API endpoints for latest report data, ledger data, history, and demo execution.
+- Add a Vite React dashboard under `src/dashboard/` with a dark Material-inspired layout, summary cards, regression table, detail panel, report viewer, ledger viewer, and history list.
+- Keep the existing CLI demo and generated report workflow unchanged.
+- Add provider config parsing for `offline`, `openai`, and `groq`, with offline as the only implemented default provider.
+- Add a CI regression gate command that defaults to a passing self-check while still supporting strict thresholds through env/config.
+- Add focused tests for data discovery/loading, empty states, provider config, and CI gate behavior.
diff --git a/README.md b/README.md
index ef57536..4d5b2cb 100644
--- a/README.md
+++ b/README.md
@@ -12,6 +12,9 @@ RAG apps often break silently. A prompt, chunking, embedding, or retrieval chang
 - Baseline-vs-candidate comparison with regression, improvement, newly failing, and newly passing statuses.
 - Markdown and JSON report export.
 - AgentRun Ledger output for agent-readable recovery after resets.
+- Material-inspired dark dashboard for latest runs, regression details, reports, ledger content, and historical runs.
+- CI-friendly regression gate with environment-configurable thresholds.
+- Provider config shape for offline, OpenAI, and Groq modes; offline remains the working default.
 - Vitest coverage for core loading, retrieval, scoring, comparison, reports, and ledger writing.
 
 ## Architecture
@@ -24,6 +27,8 @@ flowchart LR
   D --> E["Compare With Baseline"]
   E --> F["Markdown + JSON Reports"]
   E --> G["AgentRun Ledger"]
+  F --> H["Web Dashboard"]
+  G --> H
 ```
 
 ## Quick Start
@@ -31,6 +36,8 @@ flowchart LR
 ```bash
 npm install
 npm run demo
+npm run dashboard:build
+npm run dashboard
 ```
 
 On Windows PowerShell with restricted script execution, use `npm.cmd`:
@@ -38,10 +45,14 @@ On Windows PowerShell with restricted script execution, use `npm.cmd`:
 ```powershell
 npm.cmd install
 npm.cmd run demo
+npm.cmd run dashboard:build
+npm.cmd run dashboard
 ```
 
 The demo command loads `data/demo-suite.json`, runs a baseline config with `top_k=3`, runs a candidate config with `top_k=1`, compares them, writes reports, and updates the AgentRun Ledger.
 
+Open the dashboard at `http://127.0.0.1:4317` after `npm run dashboard` starts.
+
 ## CLI Commands
 
 ```bash
@@ -53,8 +64,49 @@ npm run test
 npm run lint
 npm run build
 npm run demo
+npm run dashboard
+npm run dashboard:build
+npm run dev
+npm run ci:rag
+```
+
+## Dashboard
+
+The dashboard turns the CLI artifacts into a visual product surface. It shows the latest run id, suite name, timestamp, pass/fail counts, regression count, improvements, average score, baseline/candidate config, report path, and ledger path.
+
+It includes:
+
+- Regression table with baseline score, candidate score, delta, status badges, pass/fail badges, tags, and clickable rows.
+- Test detail panel with expected facts, generated answer, retrieved context snippets, baseline/candidate metric breakdown, tags, difficulty, and a regression explanation.
+- Report viewer for the latest Markdown report.
+- AgentRun Ledger viewer for `latest-run.md` and `recovery-context.md`.
+- Historical run list from `reports/` and `agentrun-ledger/runs/`.
+- Refresh button and Run Demo button backed by the local dashboard API.
+
+Screenshot placeholder:
+
+```text
+docs/screenshots/dashboard.png
+```
+
+## Running The Dashboard
+
+Build the dashboard and start the local server:
+
+```bash
+npm run dashboard:build
+npm run dashboard
 ```
 
+For frontend development, run the API server and Vite dev server in separate terminals:
+
+```bash
+npm run dashboard
+npm run dev
+```
+
+Vite serves the UI on `http://127.0.0.1:5173` and proxies `/api` requests to `http://127.0.0.1:4317`.
+
 ## Sample Output
 
 ```text
@@ -71,6 +123,55 @@ Ledger markdown: agentrun-ledger/latest-run.md
 
 The candidate intentionally retrieves fewer snippets, so it can miss facts that are spread across documents. The regression report is produced by the scoring logic rather than by hardcoded failures.
 
+## CI Regression Gate
+
+`npm run ci:rag` reads the latest generated run and fails when thresholds are exceeded. Defaults are demo-friendly because the built-in demo intentionally creates regressions:
+
+```text
+RAG_MAX_REGRESSIONS=10
+RAG_MIN_AVERAGE_OVERALL=0.72
+RAG_MAX_NEWLY_FAILING=2
+```
+
+Use stricter thresholds in CI:
+
+```bash
+RAG_MAX_REGRESSIONS=0 RAG_MIN_AVERAGE_OVERALL=0.80 RAG_MAX_NEWLY_FAILING=0 npm run ci:rag
+```
+
+On Windows PowerShell:
+
+```powershell
+$env:RAG_MAX_REGRESSIONS="0"
+$env:RAG_MIN_AVERAGE_OVERALL="0.80"
+$env:RAG_MAX_NEWLY_FAILING="0"
+npm.cmd run ci:rag
+```
+
+## Provider Modes
+
+The default provider is `offline`, which uses deterministic keyword retrieval and extractive generation. This mode requires no API keys and powers the demo.
+
+Example config:
+
+```json
+{
+  "provider": "offline",
+  "model": "mock-extractive",
+  "retriever": "keyword",
+  "generator": "extractive",
+  "topK": 3
+}
+```
+
+Supported provider names are:
+
+- `offline`: implemented and used by default.
+- `openai`: config validation stub; requires `OPENAI_API_KEY` when selected.
+- `groq`: config validation stub; requires `GROQ_API_KEY` when selected.
+
+Real provider calls are intentionally not faked. The provider interface is ready for a future adapter, while the offline demo remains fully working.
+
 ## How Scoring Works
 
 Text is normalized by lowercasing, removing punctuation, collapsing whitespace, and dropping common stopwords for token overlap. Metrics are deterministic and bounded between 0 and 1.
@@ -95,6 +196,10 @@ Every demo run updates:
 
 The JSON file is machine-readable and includes run metadata, config details, per-test retrieved context, generated answer, scores, pass/fail status, regression status, and summary metrics. The Markdown file is designed for humans. The recovery context tells a future agent what was built, what commands passed or failed, known issues, important files, and how to continue.
 
+## AgentRun Ledger Viewer
+
+The dashboard includes an AgentRun Ledger section that shows the latest ledger report, recovery context, generated file paths, and validation commands. This is designed so a future AI coding agent can recover the project state without asking for a replay of the work.
+
 ## Reports
 
 Reports are written to:
@@ -112,8 +217,11 @@ Generated report files are ignored by git to keep the repo clean, while `.gitkee
 data/demo-suite.json              Demo golden test suite
 src/cli/index.ts                  CLI entrypoint
 src/core/                         RAG runner, metrics, comparison, reports
+src/ci/ragGate.ts                 CI regression gate
+src/dashboard/                    React dashboard and data adapter
 src/demo/runDemo.ts               Full offline demo pipeline
 src/ledger/agentRunLedger.ts      AgentRun Ledger integration
+src/server/dashboardServer.ts     Express dashboard server and local API
 tests/                            Vitest test suite
 reports/                          Generated reports
 agentrun-ledger/                  Latest run and recovery context
@@ -124,15 +232,12 @@ agentrun-ledger/                  Latest run and recovery context
 1. Read `rag-regression-lab-codex-task.md`.
 2. Read `agentrun-ledger/recovery-context.md`.
 3. Inspect `agentrun-ledger/latest-run.md` and `agentrun-ledger/latest-run.json`.
-4. Run `npm.cmd run test`, `npm.cmd run build`, and `npm.cmd run demo`.
+4. Run `npm.cmd run test`, `npm.cmd run build`, `npm.cmd run dashboard:build`, `npm.cmd run demo`, and `npm.cmd run ci:rag`.
 5. Continue from the first failing command or incomplete requirement.
 
-The task brief references an `agent-recipes/` directory, but that folder was not present in this checkout when this implementation started.
-
 ## Roadmap
 
-- Add a small web dashboard for suite and run browsing.
 - Add SQLite persistence for historical run search.
-- Add pluggable embedding and LLM providers behind the offline default.
+- Add real OpenAI/Groq provider adapters behind the offline default.
 - Add per-tag score trend reports.
 - Add CI workflow examples for regression gates.
diff --git a/TASKS.md b/TASKS.md
index efbdcee..48abcf7 100644
--- a/TASKS.md
+++ b/TASKS.md
@@ -31,8 +31,18 @@
 
 ## Follow-Up Ideas
 
-- [ ] Add a small web dashboard.
+- [x] Add a small web dashboard.
 - [ ] Add SQLite historical run browsing.
 - [ ] Add optional real provider adapters behind the offline default.
 - [ ] Add CI examples for regression gates.
 
+## Dashboard Upgrade Tasks
+
+- [x] Add dashboard API/data adapter helpers.
+- [x] Add provider config parser and provider interfaces.
+- [x] Add CI regression gate command.
+- [x] Add Vite React dashboard UI.
+- [x] Add dashboard/history/ledger/report tests.
+- [x] Update README for dashboard, provider modes, and CI gate.
+- [x] Regenerate AgentRun Ledger recovery context.
+- [x] Run full validation loop.
diff --git a/agentrun-ledger/latest-run.json b/agentrun-ledger/latest-run.json
index 7bd8f9a..713fb67 100644
--- a/agentrun-ledger/latest-run.json
+++ b/agentrun-ledger/latest-run.json
@@ -1,15 +1,15 @@
 {
   "metadata": {
-    "runId": "candidate-keyword-top1-2026-05-03T21-48-39-657Z-39cc3024",
-    "timestamp": "2026-05-03T21:48:39.657Z",
+    "runId": "candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3",
+    "timestamp": "2026-05-03T22:12:52.322Z",
     "appVersion": "0.1.0",
     "gitBranch": "main",
-    "gitCommit": "0f6767e",
+    "gitCommit": "f5e1293",
     "command": "npm run demo candidate",
     "environment": "win32 x64, node v24.14.1",
     "suitePath": "data\\demo-suite.json",
     "suiteName": "SaaS Help Center Demo Suite",
-    "baselineRunId": "baseline-keyword-top3-2026-05-03T21-48-39-579Z-005c911b",
+    "baselineRunId": "baseline-keyword-top3-2026-05-03T22-12-52-280Z-a0a9d441",
     "modelProvider": "local deterministic mock",
     "embeddingConfig": "none",
     "retrieverConfig": "keyword",
@@ -52,7 +52,7 @@
         "overallScore": 0.725
       },
       "passed": true,
-      "latencyMs": 0.15,
+      "latencyMs": 0.17,
       "regressionStatus": "regressed"
     },
     {
@@ -79,7 +79,7 @@
         "overallScore": 0.7333
       },
       "passed": true,
-      "latencyMs": 0.47,
+      "latencyMs": 0.13,
       "regressionStatus": "regressed"
     },
     {
@@ -187,7 +187,7 @@
         "overallScore": 0.7167
       },
       "passed": false,
-      "latencyMs": 0.06,
+      "latencyMs": 0.07,
       "regressionStatus": "newly_failing"
     },
     {
@@ -256,7 +256,7 @@
     "averageFaithfulness": 1,
     "averageAnswerSimilarity": 0.5394,
     "averageContextPrecision": 1,
-    "averageLatencyMs": 0.1338,
+    "averageLatencyMs": 0.095,
     "importantFailures": [
       "team-invites-001: 0.7167",
       "security-policy-001: 0.6369"
diff --git a/agentrun-ledger/latest-run.md b/agentrun-ledger/latest-run.md
index 86abe6b..f421761 100644
--- a/agentrun-ledger/latest-run.md
+++ b/agentrun-ledger/latest-run.md
@@ -1,13 +1,13 @@
-# RAG Regression Report: candidate-keyword-top1-2026-05-03T21-48-39-657Z-39cc3024
+# RAG Regression Report: candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3
 
-Generated: 2026-05-03T21:48:39.657Z
+Generated: 2026-05-03T22:12:52.322Z
 
 Suite: SaaS Help Center Demo Suite (8 tests)
 
 ## Configuration
 
-- Run id: candidate-keyword-top1-2026-05-03T21-48-39-657Z-39cc3024
-- Baseline run id: baseline-keyword-top3-2026-05-03T21-48-39-579Z-005c911b
+- Run id: candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3
+- Baseline run id: baseline-keyword-top3-2026-05-03T22-12-52-280Z-a0a9d441
 - Model/provider: local deterministic mock
 - Embedding config: none
 - Retriever: keyword
@@ -27,7 +27,7 @@ Suite: SaaS Help Center Demo Suite (8 tests)
 - Average faithfulness: 1
 - Average answer similarity: 0.5394
 - Average context precision: 1
-- Average latency: 0.1338ms
+- Average latency: 0.095ms
 
 ## Failed Or Regressed Tests
 
diff --git a/agentrun-ledger/recovery-context.md b/agentrun-ledger/recovery-context.md
index f268fa8..4179728 100644
--- a/agentrun-ledger/recovery-context.md
+++ b/agentrun-ledger/recovery-context.md
@@ -1,17 +1,17 @@
 # Agent Recovery Context
 
-Last updated: 2026-05-03T21:48:39.730Z
+Last updated: 2026-05-03T22:12:52.365Z
 
 ## What Was Built
 
-RAG Regression Lab is implemented as a local-first TypeScript CLI. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, and updates AgentRun Ledger artifacts.
+RAG Regression Lab is implemented as a local-first TypeScript CLI plus a Material-inspired web dashboard. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, exposes dashboard data APIs, and updates AgentRun Ledger artifacts.
 
 ## Latest Run
 
-- Run id: candidate-keyword-top1-2026-05-03T21-48-39-657Z-39cc3024
-- Timestamp: 2026-05-03T21:48:39.657Z
+- Run id: candidate-keyword-top1-2026-05-03T22-12-52-322Z-f117d8d3
+- Timestamp: 2026-05-03T22:12:52.322Z
 - Suite: SaaS Help Center Demo Suite
-- Baseline run id: baseline-keyword-top3-2026-05-03T21-48-39-579Z-005c911b
+- Baseline run id: baseline-keyword-top3-2026-05-03T22-12-52-280Z-a0a9d441
 - Config: candidate-keyword-top1, top_k=1
 - Passed: 6/8
 - Failed: 2
@@ -26,32 +26,52 @@ RAG Regression Lab is implemented as a local-first TypeScript CLI. It loads JSON
 - `npm.cmd run test`
 - `npm.cmd run build`
 - `npm.cmd run demo`
+- `npm.cmd run dashboard:build`
+- `npm.cmd run ci:rag`
 
 ## Commands Failed
 
 - None recorded.
 
+## Dashboard And Commands Added
+
+- `npm.cmd run dashboard` starts the local Express dashboard server.
+- `npm.cmd run dev` starts Vite for frontend development with `/api` proxied to the dashboard server.
+- `npm.cmd run dashboard:build` builds the React dashboard into `dist-dashboard/`.
+- `npm.cmd run ci:rag` runs the demo-friendly regression gate.
+
 ## Unresolved Issues
 
 - None known.
 
+## Known Limitations
+
+- Real OpenAI and Groq providers are represented by validated config stubs only; the default offline provider is the working implementation.
+- The dashboard reads local generated artifacts and is intended for local portfolio/demo use, not multi-user hosting.
+
 ## Important Files Changed
 
 - package.json
 - tsconfig.json
+- vite.config.ts
+- index.html
 - data/demo-suite.json
 - src/core/*
+- src/ci/ragGate.ts
 - src/cli/index.ts
+- src/dashboard/*
 - src/demo/runDemo.ts
 - src/ledger/agentRunLedger.ts
+- src/server/*
 - tests/*
 - README.md
 - .gitignore
+- rag-provider.config.example.json
 
 ## How To Continue After Reset
 
 1. Re-read `rag-regression-lab-codex-task.md`.
 2. Read the `agent-recipes/` files and follow the matching recipe for the next work type.
 3. Inspect `agentrun-ledger/latest-run.md` and `agentrun-ledger/latest-run.json`.
-4. Run `npm.cmd run test`, `npm.cmd run build`, and `npm.cmd run demo`.
+4. Run `npm.cmd run test`, `npm.cmd run build`, `npm.cmd run dashboard:build`, `npm.cmd run demo`, and `npm.cmd run ci:rag`.
 5. Continue from the first failing requirement or validation command.
diff --git a/package-lock.json b/package-lock.json
index af31623..80d29f3 100644
--- a/package-lock.json
+++ b/package-lock.json
@@ -12,47 +12,304 @@
         "rag-lab": "dist/cli/index.js"
       },
       "devDependencies": {
+        "@types/express": "^5.0.6",
         "@types/node": "^24.10.1",
+        "@types/react": "^19.2.7",
+        "@types/react-dom": "^19.2.3",
+        "@vitejs/plugin-react": "^5.1.1",
+        "express": "^5.2.1",
+        "lucide-react": "^0.556.0",
+        "react": "^19.2.3",
+        "react-dom": "^19.2.3",
         "tsx": "^4.20.6",
         "typescript": "^5.9.3",
+        "vite": "^7.2.7",
         "vitest": "^4.0.14"
       },
       "engines": {
         "node": ">=20"
       }
     },
-    "node_modules/@emnapi/core": {
-      "version": "1.10.0",
-      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
-      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
+    "node_modules/@babel/code-frame": {
+      "version": "7.29.0",
+      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
+      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
       "dev": true,
       "license": "MIT",
-      "optional": true,
       "dependencies": {
-        "@emnapi/wasi-threads": "1.2.1",
-        "tslib": "^2.4.0"
+        "@babel/helper-validator-identifier": "^7.28.5",
+        "js-tokens": "^4.0.0",
+        "picocolors": "^1.1.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
       }
     },
-    "node_modules/@emnapi/runtime": {
-      "version": "1.10.0",
-      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
-      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
+    "node_modules/@babel/compat-data": {
+      "version": "7.29.3",
+      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.3.tgz",
+      "integrity": "sha512-LIVqM46zQWZhj17qA8wb4nW/ixr2y1Nw+r1etiAWgRM6U1IqP+LNhL1yg440jYZR72jCWcWbLWzIosH+uP1fqg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/core": {
+      "version": "7.29.0",
+      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
+      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
       "dev": true,
       "license": "MIT",
-      "optional": true,
       "dependencies": {
-        "tslib": "^2.4.0"
+        "@babel/code-frame": "^7.29.0",
+        "@babel/generator": "^7.29.0",
+        "@babel/helper-compilation-targets": "^7.28.6",
+        "@babel/helper-module-transforms": "^7.28.6",
+        "@babel/helpers": "^7.28.6",
+        "@babel/parser": "^7.29.0",
+        "@babel/template": "^7.28.6",
+        "@babel/traverse": "^7.29.0",
+        "@babel/types": "^7.29.0",
+        "@jridgewell/remapping": "^2.3.5",
+        "convert-source-map": "^2.0.0",
+        "debug": "^4.1.0",
+        "gensync": "^1.0.0-beta.2",
+        "json5": "^2.2.3",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/babel"
       }
     },
-    "node_modules/@emnapi/wasi-threads": {
-      "version": "1.2.1",
-      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
-      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
+    "node_modules/@babel/generator": {
+      "version": "7.29.1",
+      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
+      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/parser": "^7.29.0",
+        "@babel/types": "^7.29.0",
+        "@jridgewell/gen-mapping": "^0.3.12",
+        "@jridgewell/trace-mapping": "^0.3.28",
+        "jsesc": "^3.0.2"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-compilation-targets": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
+      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/compat-data": "^7.28.6",
+        "@babel/helper-validator-option": "^7.27.1",
+        "browserslist": "^4.24.0",
+        "lru-cache": "^5.1.1",
+        "semver": "^6.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-globals": {
+      "version": "7.28.0",
+      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
+      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-imports": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",
+      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/traverse": "^7.28.6",
+        "@babel/types": "^7.28.6"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-module-transforms": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.6.tgz",
+      "integrity": "sha512-67oXFAYr2cDLDVGLXTEABjdBJZ6drElUSI7WKp70NrpyISso3plG9SAGEF6y7zbha/wOzUByWWTJvEDVNIUGcA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/helper-module-imports": "^7.28.6",
+        "@babel/helper-validator-identifier": "^7.28.5",
+        "@babel/traverse": "^7.28.6"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0"
+      }
+    },
+    "node_modules/@babel/helper-plugin-utils": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.28.6.tgz",
+      "integrity": "sha512-S9gzZ/bz83GRysI7gAD4wPT/AI3uCnY+9xn+Mx/KPs2JwHJIz1W8PZkg2cqyt3RNOBM8ejcXhV6y8Og7ly/Dug==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-string-parser": {
+      "version": "7.27.1",
+      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
+      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-identifier": {
+      "version": "7.28.5",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
+      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helper-validator-option": {
+      "version": "7.27.1",
+      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
+      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/helpers": {
+      "version": "7.29.2",
+      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.2.tgz",
+      "integrity": "sha512-HoGuUs4sCZNezVEKdVcwqmZN8GoHirLUcLaYVNBK2J0DadGtdcqgr3BCbvH8+XUo4NGjNl3VOtSjEKNzqfFgKw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/template": "^7.28.6",
+        "@babel/types": "^7.29.0"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/parser": {
+      "version": "7.29.3",
+      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.3.tgz",
+      "integrity": "sha512-b3ctpQwp+PROvU/cttc4OYl4MzfJUWy6FZg+PMXfzmt/+39iHVF0sDfqay8TQM3JA2EUOyKcFZt75jWriQijsA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/types": "^7.29.0"
+      },
+      "bin": {
+        "parser": "bin/babel-parser.js"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-self": {
+      "version": "7.27.1",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
+      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.27.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/plugin-transform-react-jsx-source": {
+      "version": "7.27.1",
+      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
+      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/helper-plugin-utils": "^7.27.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      },
+      "peerDependencies": {
+        "@babel/core": "^7.0.0-0"
+      }
+    },
+    "node_modules/@babel/template": {
+      "version": "7.28.6",
+      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
+      "integrity": "sha512-YA6Ma2KsCdGb+WC6UpBVFJGXL58MDA6oyONbjyF/+5sBgxY/dwkhLogbMT2GXXyU84/IhRw/2D1Os1B/giz+BQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/code-frame": "^7.28.6",
+        "@babel/parser": "^7.28.6",
+        "@babel/types": "^7.28.6"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/traverse": {
+      "version": "7.29.0",
+      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.0.tgz",
+      "integrity": "sha512-4HPiQr0X7+waHfyXPZpWPfWL/J7dcN1mx9gL6WdQVMbPnF3+ZhSMs8tCxN7oHddJE9fhNE7+lxdnlyemKfJRuA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/code-frame": "^7.29.0",
+        "@babel/generator": "^7.29.0",
+        "@babel/helper-globals": "^7.28.0",
+        "@babel/parser": "^7.29.0",
+        "@babel/template": "^7.28.6",
+        "@babel/types": "^7.29.0",
+        "debug": "^4.3.1"
+      },
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/@babel/types": {
+      "version": "7.29.0",
+      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.0.tgz",
+      "integrity": "sha512-LwdZHpScM4Qz8Xw2iKSzS+cfglZzJGvofQICy7W7v4caru4EaAmyUuO6BGrbyQ2mYV11W0U8j5mBhd14dd3B0A==",
       "dev": true,
       "license": "MIT",
-      "optional": true,
       "dependencies": {
-        "tslib": "^2.4.0"
+        "@babel/helper-string-parser": "^7.27.1",
+        "@babel/helper-validator-identifier": "^7.28.5"
+      },
+      "engines": {
+        "node": ">=6.9.0"
       }
     },
     "node_modules/@esbuild/aix-ppc64": {
@@ -497,6 +754,38 @@
         "node": ">=18"
       }
     },
+    "node_modules/@jridgewell/gen-mapping": {
+      "version": "0.3.13",
+      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
+      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@jridgewell/sourcemap-codec": "^1.5.0",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      }
+    },
+    "node_modules/@jridgewell/remapping": {
+      "version": "2.3.5",
+      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
+      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@jridgewell/gen-mapping": "^0.3.5",
+        "@jridgewell/trace-mapping": "^0.3.24"
+      }
+    },
+    "node_modules/@jridgewell/resolve-uri": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
+      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
     "node_modules/@jridgewell/sourcemap-codec": {
       "version": "1.5.5",
       "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
@@ -504,39 +793,42 @@
       "dev": true,
       "license": "MIT"
     },
-    "node_modules/@napi-rs/wasm-runtime": {
-      "version": "1.1.4",
-      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.4.tgz",
-      "integrity": "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow==",
+    "node_modules/@jridgewell/trace-mapping": {
+      "version": "0.3.31",
+      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
+      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
       "dev": true,
       "license": "MIT",
-      "optional": true,
       "dependencies": {
-        "@tybys/wasm-util": "^0.10.1"
-      },
-      "funding": {
-        "type": "github",
-        "url": "https://github.com/sponsors/Brooooooklyn"
-      },
-      "peerDependencies": {
-        "@emnapi/core": "^1.7.1",
-        "@emnapi/runtime": "^1.7.1"
+        "@jridgewell/resolve-uri": "^3.1.0",
+        "@jridgewell/sourcemap-codec": "^1.4.14"
       }
     },
-    "node_modules/@oxc-project/types": {
-      "version": "0.127.0",
-      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.127.0.tgz",
-      "integrity": "sha512-aIYXQBo4lCbO4z0R3FHeucQHpF46l2LbMdxRvqvuRuW2OxdnSkcng5B8+K12spgLDj93rtN3+J2Vac/TIO+ciQ==",
+    "node_modules/@rolldown/pluginutils": {
+      "version": "1.0.0-rc.3",
+      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.3.tgz",
+      "integrity": "sha512-eybk3TjzzzV97Dlj5c+XrBFW57eTNhzod66y9HrBlzJ6NsCrWCp/2kaPS3K9wJmurBC0Tdw4yPjXKZqlznim3Q==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@rollup/rollup-android-arm-eabi": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.60.2.tgz",
+      "integrity": "sha512-dnlp69efPPg6Uaw2dVqzWRfAWRnYVb1XJ8CyyhIbZeaq4CA5/mLeZ1IEt9QqQxmbdvagjLIm2ZL8BxXv5lH4Yw==",
+      "cpu": [
+        "arm"
+      ],
       "dev": true,
       "license": "MIT",
-      "funding": {
-        "url": "https://github.com/sponsors/Boshen"
-      }
+      "optional": true,
+      "os": [
+        "android"
+      ]
     },
-    "node_modules/@rolldown/binding-android-arm64": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.0-rc.17.tgz",
-      "integrity": "sha512-s70pVGhw4zqGeFnXWvAzJDlvxhlRollagdCCKRgOsgUOH3N1l0LIxf83AtGzmb5SiVM4Hjl5HyarMRfdfj3DaQ==",
+    "node_modules/@rollup/rollup-android-arm64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.60.2.tgz",
+      "integrity": "sha512-OqZTwDRDchGRHHm/hwLOL7uVPB9aUvI0am/eQuWMNyFHf5PSEQmyEeYYheA0EPPKUO/l0uigCp+iaTjoLjVoHg==",
       "cpu": [
         "arm64"
       ],
@@ -545,15 +837,12 @@
       "optional": true,
       "os": [
         "android"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-darwin-arm64": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.0-rc.17.tgz",
-      "integrity": "sha512-4ksWc9n0mhlZpZ9PMZgTGjeOPRu8MB1Z3Tz0Mo02eWfWCHMW1zN82Qz/pL/rC+yQa+8ZnutMF0JjJe7PjwasYw==",
+    "node_modules/@rollup/rollup-darwin-arm64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.60.2.tgz",
+      "integrity": "sha512-UwRE7CGpvSVEQS8gUMBe1uADWjNnVgP3Iusyda1nSRwNDCsRjnGc7w6El6WLQsXmZTbLZx9cecegumcitNfpmA==",
       "cpu": [
         "arm64"
       ],
@@ -562,15 +851,12 @@
       "optional": true,
       "os": [
         "darwin"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-darwin-x64": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.0-rc.17.tgz",
-      "integrity": "sha512-SUSDOI6WwUVNcWxd02QEBjLdY1VPHvlEkw6T/8nYG322iYWCTxRb1vzk4E+mWWYehTp7ERibq54LSJGjmouOsw==",
+    "node_modules/@rollup/rollup-darwin-x64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.60.2.tgz",
+      "integrity": "sha512-gjEtURKLCC5VXm1I+2i1u9OhxFsKAQJKTVB8WvDAHF+oZlq0GTVFOlTlO1q3AlCTE/DF32c16ESvfgqR7343/g==",
       "cpu": [
         "x64"
       ],
@@ -579,51 +865,42 @@
       "optional": true,
       "os": [
         "darwin"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-freebsd-x64": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.0-rc.17.tgz",
-      "integrity": "sha512-hwnz3nw9dbJ05EDO/PvcjaaewqqDy7Y1rn1UO81l8iIK1GjenME75dl16ajbvSSMfv66WXSRCYKIqfgq2KCfxw==",
+    "node_modules/@rollup/rollup-freebsd-arm64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.60.2.tgz",
+      "integrity": "sha512-Bcl6CYDeAgE70cqZaMojOi/eK63h5Me97ZqAQoh77VPjMysA/4ORQBRGo3rRy45x4MzVlU9uZxs8Uwy7ZaKnBw==",
       "cpu": [
-        "x64"
+        "arm64"
       ],
       "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
         "freebsd"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.0-rc.17.tgz",
-      "integrity": "sha512-IS+W7epTcwANmFSQFrS1SivEXHtl1JtuQA9wlxrZTcNi6mx+FDOYrakGevvvTwgj2JvWiK8B29/qD9BELZPyXQ==",
+    "node_modules/@rollup/rollup-freebsd-x64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.60.2.tgz",
+      "integrity": "sha512-LU+TPda3mAE2QB0/Hp5VyeKJivpC6+tlOXd1VMoXV/YFMvk/MNk5iXeBfB4MQGRWyOYVJ01625vjkr0Az98OJQ==",
       "cpu": [
-        "arm"
+        "x64"
       ],
       "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
-        "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+        "freebsd"
+      ]
     },
-    "node_modules/@rolldown/binding-linux-arm64-gnu": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.0-rc.17.tgz",
-      "integrity": "sha512-e6usGaHKW5BMNZOymS1UcEYGowQMWcgZ71Z17Sl/h2+ZziNJ1a9n3Zvcz6LdRyIW5572wBCTH/Z+bKuZouGk9Q==",
+    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.60.2.tgz",
+      "integrity": "sha512-2QxQrM+KQ7DAW4o22j+XZ6RKdxjLD7BOWTP0Bv0tmjdyhXSsr2Ul1oJDQqh9Zf5qOwTuTc7Ek83mOFaKnodPjg==",
       "cpu": [
-        "arm64"
+        "arm"
       ],
       "dev": true,
       "libc": [
@@ -633,17 +910,14 @@
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-arm64-musl": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.0-rc.17.tgz",
-      "integrity": "sha512-b/CgbwAJpmrRLp02RPfhbudf5tZnN9nsPWK82znefso832etkem8H7FSZwxrOI9djcdTP7U6YfNhbRnh7djErg==",
+    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.60.2.tgz",
+      "integrity": "sha512-TbziEu2DVsTEOPif2mKWkMeDMLoYjx95oESa9fkQQK7r/Orta0gnkcDpzwufEcAO2BLBsD7mZkXGFqEdMRRwfw==",
       "cpu": [
-        "arm64"
+        "arm"
       ],
       "dev": true,
       "libc": [
@@ -653,17 +927,14 @@
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-ppc64-gnu": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-ppc64-gnu/-/binding-linux-ppc64-gnu-1.0.0-rc.17.tgz",
-      "integrity": "sha512-4EII1iNGRUN5WwGbF/kOh/EIkoDN9HsupgLQoXfY+D1oyJm7/F4t5PYU5n8SWZgG0FEwakyM8pGgwcBYruGTlA==",
+    "node_modules/@rollup/rollup-linux-arm64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.60.2.tgz",
+      "integrity": "sha512-bO/rVDiDUuM2YfuCUwZ1t1cP+/yqjqz+Xf2VtkdppefuOFS2OSeAfgafaHNkFn0t02hEyXngZkxtGqXcXwO8Rg==",
       "cpu": [
-        "ppc64"
+        "arm64"
       ],
       "dev": true,
       "libc": [
@@ -673,37 +944,31 @@
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-s390x-gnu": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-s390x-gnu/-/binding-linux-s390x-gnu-1.0.0-rc.17.tgz",
-      "integrity": "sha512-AH8oq3XqQo4IibpVXvPeLDI5pzkpYn0WiZAfT05kFzoJ6tQNzwRdDYQ45M8I/gslbodRZwW8uxLhbSBbkv96rA==",
+    "node_modules/@rollup/rollup-linux-arm64-musl": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.60.2.tgz",
+      "integrity": "sha512-hr26p7e93Rl0Za+JwW7EAnwAvKkehh12BU1Llm9Ykiibg4uIr2rbpxG9WCf56GuvidlTG9KiiQT/TXT1yAWxTA==",
       "cpu": [
-        "s390x"
+        "arm64"
       ],
       "dev": true,
       "libc": [
-        "glibc"
+        "musl"
       ],
       "license": "MIT",
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-x64-gnu": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.0-rc.17.tgz",
-      "integrity": "sha512-cLnjV3xfo7KslbU41Z7z8BH/E1y5mzUYzAqih1d1MDaIGZRCMqTijqLv76/P7fyHuvUcfGsIpqCdddbxLLK9rA==",
+    "node_modules/@rollup/rollup-linux-loong64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-gnu/-/rollup-linux-loong64-gnu-4.60.2.tgz",
+      "integrity": "sha512-pOjB/uSIyDt+ow3k/RcLvUAOGpysT2phDn7TTUB3n75SlIgZzM6NKAqlErPhoFU+npgY3/n+2HYIQVbF70P9/A==",
       "cpu": [
-        "x64"
+        "loong64"
       ],
       "dev": true,
       "libc": [
@@ -713,17 +978,14 @@
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-linux-x64-musl": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.0-rc.17.tgz",
-      "integrity": "sha512-0phclDw1spsL7dUB37sIARuis2tAgomCJXAHZlpt8PXZ4Ba0dRP1e+66lsRqrfhISeN9bEGNjQs+T/Fbd7oYGw==",
+    "node_modules/@rollup/rollup-linux-loong64-musl": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loong64-musl/-/rollup-linux-loong64-musl-4.60.2.tgz",
+      "integrity": "sha512-2/w+q8jszv9Ww1c+6uJT3OwqhdmGP2/4T17cu8WuwyUuuaCDDJ2ojdyYwZzCxx0GcsZBhzi3HmH+J5pZNXnd+Q==",
       "cpu": [
-        "x64"
+        "loong64"
       ],
       "dev": true,
       "libc": [
@@ -733,87 +995,210 @@
       "optional": true,
       "os": [
         "linux"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      ]
     },
-    "node_modules/@rolldown/binding-openharmony-arm64": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.0-rc.17.tgz",
-      "integrity": "sha512-0ag/hEgXOwgw4t8QyQvUCxvEg+V0KBcA6YuOx9g0r02MprutRF5dyljgm3EmR02O292UX7UeS6HzWHAl6KgyhA==",
+    "node_modules/@rollup/rollup-linux-ppc64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-gnu/-/rollup-linux-ppc64-gnu-4.60.2.tgz",
+      "integrity": "sha512-11+aL5vKheYgczxtPVVRhdptAM2H7fcDR5Gw4/bTcteuZBlH4oP9f5s9zYO9aGZvoGeBpqXI/9TZZihZ609wKw==",
       "cpu": [
-        "arm64"
+        "ppc64"
       ],
       "dev": true,
+      "libc": [
+        "glibc"
+      ],
       "license": "MIT",
       "optional": true,
       "os": [
-        "openharmony"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+        "linux"
+      ]
     },
-    "node_modules/@rolldown/binding-wasm32-wasi": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.0-rc.17.tgz",
-      "integrity": "sha512-LEXei6vo0E5wTGwpkJ4KoT3OZJRnglwldt5ziLzOlc6qqb55z4tWNq2A+PFqCJuvWWdP53CVhG1Z9NtToDPJrA==",
+    "node_modules/@rollup/rollup-linux-ppc64-musl": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-ppc64-musl/-/rollup-linux-ppc64-musl-4.60.2.tgz",
+      "integrity": "sha512-i16fokAGK46IVZuV8LIIwMdtqhin9hfYkCh8pf8iC3QU3LpwL+1FSFGej+O7l3E/AoknL6Dclh2oTdnRMpTzFQ==",
       "cpu": [
-        "wasm32"
+        "ppc64"
       ],
       "dev": true,
+      "libc": [
+        "musl"
+      ],
       "license": "MIT",
       "optional": true,
-      "dependencies": {
-        "@emnapi/core": "1.10.0",
-        "@emnapi/runtime": "1.10.0",
-        "@napi-rs/wasm-runtime": "^1.1.4"
-      },
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      "os": [
+        "linux"
+      ]
     },
-    "node_modules/@rolldown/binding-win32-arm64-msvc": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.0-rc.17.tgz",
-      "integrity": "sha512-gUmyzBl3SPMa6hrqFUth9sVfcLBlYsbMzBx5PlexMroZStgzGqlZ26pYG89rBb45Mnia+oil6YAIFeEWGWhoZA==",
+    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.60.2.tgz",
+      "integrity": "sha512-49FkKS6RGQoriDSK/6E2GkAsAuU5kETFCh7pG4yD/ylj9rKhTmO3elsnmBvRD4PgJPds5W2PkhC82aVwmUcJ7A==",
       "cpu": [
-        "arm64"
+        "riscv64"
       ],
       "dev": true,
+      "libc": [
+        "glibc"
+      ],
       "license": "MIT",
       "optional": true,
       "os": [
-        "win32"
-      ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+        "linux"
+      ]
     },
-    "node_modules/@rolldown/binding-win32-x64-msvc": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.0-rc.17.tgz",
-      "integrity": "sha512-3hkiolcUAvPB9FLb3UZdfjVVNWherN1f/skkGWJP/fgSQhYUZpSIRr0/I8ZK9TkF3F7kxvJAk0+IcKvPHk9qQg==",
+    "node_modules/@rollup/rollup-linux-riscv64-musl": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-musl/-/rollup-linux-riscv64-musl-4.60.2.tgz",
+      "integrity": "sha512-mjYNkHPfGpUR00DuM1ZZIgs64Hpf4bWcz9Z41+4Q+pgDx73UwWdAYyf6EG/lRFldmdHHzgrYyge5akFUW0D3mQ==",
       "cpu": [
-        "x64"
+        "riscv64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-s390x-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.60.2.tgz",
+      "integrity": "sha512-ALyvJz965BQk8E9Al/JDKKDLH2kfKFLTGMlgkAbbYtZuJt9LU8DW3ZoDMCtQpXAltZxwBHevXz5u+gf0yA0YoA==",
+      "cpu": [
+        "s390x"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-x64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.60.2.tgz",
+      "integrity": "sha512-UQjrkIdWrKI626Du8lCQ6MJp/6V1LAo2bOK9OTu4mSn8GGXIkPXk/Vsp4bLHCd9Z9Iz2OTEaokUE90VweJgIYQ==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "libc": [
+        "glibc"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-linux-x64-musl": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.60.2.tgz",
+      "integrity": "sha512-bTsRGj6VlSdn/XD4CGyzMnzaBs9bsRxy79eTqTCBsA8TMIEky7qg48aPkvJvFe1HyzQ5oMZdg7AnVlWQSKLTnw==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "libc": [
+        "musl"
+      ],
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "linux"
+      ]
+    },
+    "node_modules/@rollup/rollup-openbsd-x64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-openbsd-x64/-/rollup-openbsd-x64-4.60.2.tgz",
+      "integrity": "sha512-6d4Z3534xitaA1FcMWP7mQPq5zGwBmGbhphh2DwaA1aNIXUu3KTOfwrWpbwI4/Gr0uANo7NTtaykFyO2hPuFLg==",
+      "cpu": [
+        "x64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openbsd"
+      ]
+    },
+    "node_modules/@rollup/rollup-openharmony-arm64": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-openharmony-arm64/-/rollup-openharmony-arm64-4.60.2.tgz",
+      "integrity": "sha512-NetAg5iO2uN7eB8zE5qrZ3CSil+7IJt4WDFLcC75Ymywq1VZVD6qJ6EvNLjZ3rEm6gB7XW5JdT60c6MN35Z85Q==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "openharmony"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-arm64-msvc": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.60.2.tgz",
+      "integrity": "sha512-NCYhOotpgWZ5kdxCZsv6Iudx0wX8980Q/oW4pNFNihpBKsDbEA1zpkfxJGC0yugsUuyDZ7gL37dbzwhR0VI7pQ==",
+      "cpu": [
+        "arm64"
+      ],
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-ia32-msvc": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.60.2.tgz",
+      "integrity": "sha512-RXsaOqXxfoUBQoOgvmmijVxJnW2IGB0eoMO7F8FAjaj0UTywUO/luSqimWBJn04WNgUkeNhh7fs7pESXajWmkg==",
+      "cpu": [
+        "ia32"
       ],
       "dev": true,
       "license": "MIT",
       "optional": true,
       "os": [
         "win32"
+      ]
+    },
+    "node_modules/@rollup/rollup-win32-x64-gnu": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-gnu/-/rollup-win32-x64-gnu-4.60.2.tgz",
+      "integrity": "sha512-qdAzEULD+/hzObedtmV6iBpdL5TIbKVztGiK7O3/KYSf+HIzU257+MX1EXJcyIiDbMAqmbwaufcYPvyRryeZtA==",
+      "cpu": [
+        "x64"
       ],
-      "engines": {
-        "node": "^20.19.0 || >=22.12.0"
-      }
+      "dev": true,
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
     },
-    "node_modules/@rolldown/pluginutils": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-rc.17.tgz",
-      "integrity": "sha512-n8iosDOt6Ig1UhJ2AYqoIhHWh/isz0xpicHTzpKBeotdVsTEcxsSA/i3EVM7gQAj0rU27OLAxCjzlj15IWY7bg==",
+    "node_modules/@rollup/rollup-win32-x64-msvc": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.60.2.tgz",
+      "integrity": "sha512-Nd/SgG27WoA9e+/TdK74KnHz852TLa94ovOYySo/yMPuTmpckK/jIF2jSwS3g7ELSKXK13/cVdmg1Z/DaCWKxA==",
+      "cpu": [
+        "x64"
+      ],
       "dev": true,
-      "license": "MIT"
+      "license": "MIT",
+      "optional": true,
+      "os": [
+        "win32"
+      ]
     },
     "node_modules/@standard-schema/spec": {
       "version": "1.1.0",
@@ -822,15 +1207,60 @@
       "dev": true,
       "license": "MIT"
     },
-    "node_modules/@tybys/wasm-util": {
-      "version": "0.10.1",
-      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
-      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
+    "node_modules/@types/babel__core": {
+      "version": "7.20.5",
+      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
+      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/parser": "^7.20.7",
+        "@babel/types": "^7.20.7",
+        "@types/babel__generator": "*",
+        "@types/babel__template": "*",
+        "@types/babel__traverse": "*"
+      }
+    },
+    "node_modules/@types/babel__generator": {
+      "version": "7.27.0",
+      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
+      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__template": {
+      "version": "7.4.4",
+      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
+      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/parser": "^7.1.0",
+        "@babel/types": "^7.0.0"
+      }
+    },
+    "node_modules/@types/babel__traverse": {
+      "version": "7.28.0",
+      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
+      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/types": "^7.28.2"
+      }
+    },
+    "node_modules/@types/body-parser": {
+      "version": "1.19.6",
+      "resolved": "https://registry.npmjs.org/@types/body-parser/-/body-parser-1.19.6.tgz",
+      "integrity": "sha512-HLFeCYgz89uk22N5Qg3dvGvsv46B8GLvKKo1zKG4NybA8U2DiEO3w9lqGg29t/tfLRJpJ6iQxnVw4OnB7MoM9g==",
       "dev": true,
       "license": "MIT",
-      "optional": true,
       "dependencies": {
-        "tslib": "^2.4.0"
+        "@types/connect": "*",
+        "@types/node": "*"
       }
     },
     "node_modules/@types/chai": {
@@ -844,6 +1274,16 @@
         "assertion-error": "^2.0.1"
       }
     },
+    "node_modules/@types/connect": {
+      "version": "3.4.38",
+      "resolved": "https://registry.npmjs.org/@types/connect/-/connect-3.4.38.tgz",
+      "integrity": "sha512-K6uROf1LD88uDQqJCktA4yzL1YYAK6NgfsI0v/mTgyPKWsX1CnJ0XPSDhViejru1GcRkLWb8RlzFYJRqGUbaug==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/node": "*"
+      }
+    },
     "node_modules/@types/deep-eql": {
       "version": "4.0.2",
       "resolved": "https://registry.npmjs.org/@types/deep-eql/-/deep-eql-4.0.2.tgz",
@@ -858,6 +1298,38 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/@types/express": {
+      "version": "5.0.6",
+      "resolved": "https://registry.npmjs.org/@types/express/-/express-5.0.6.tgz",
+      "integrity": "sha512-sKYVuV7Sv9fbPIt/442koC7+IIwK5olP1KWeD88e/idgoJqDm3JV/YUiPwkoKK92ylff2MGxSz1CSjsXelx0YA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/body-parser": "*",
+        "@types/express-serve-static-core": "^5.0.0",
+        "@types/serve-static": "^2"
+      }
+    },
+    "node_modules/@types/express-serve-static-core": {
+      "version": "5.1.1",
+      "resolved": "https://registry.npmjs.org/@types/express-serve-static-core/-/express-serve-static-core-5.1.1.tgz",
+      "integrity": "sha512-v4zIMr/cX7/d2BpAEX3KNKL/JrT1s43s96lLvvdTmza1oEvDudCqK9aF/djc/SWgy8Yh0h30TZx5VpzqFCxk5A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/node": "*",
+        "@types/qs": "*",
+        "@types/range-parser": "*",
+        "@types/send": "*"
+      }
+    },
+    "node_modules/@types/http-errors": {
+      "version": "2.0.5",
+      "resolved": "https://registry.npmjs.org/@types/http-errors/-/http-errors-2.0.5.tgz",
+      "integrity": "sha512-r8Tayk8HJnX0FztbZN7oVqGccWgw98T/0neJphO91KkmOzug1KkofZURD4UaD5uH8AqcFLfdPErnBod0u71/qg==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/@types/node": {
       "version": "24.12.2",
       "resolved": "https://registry.npmjs.org/@types/node/-/node-24.12.2.tgz",
@@ -868,6 +1340,82 @@
         "undici-types": "~7.16.0"
       }
     },
+    "node_modules/@types/qs": {
+      "version": "6.15.0",
+      "resolved": "https://registry.npmjs.org/@types/qs/-/qs-6.15.0.tgz",
+      "integrity": "sha512-JawvT8iBVWpzTrz3EGw9BTQFg3BQNmwERdKE22vlTxawwtbyUSlMppvZYKLZzB5zgACXdXxbD3m1bXaMqP/9ow==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@types/range-parser": {
+      "version": "1.2.7",
+      "resolved": "https://registry.npmjs.org/@types/range-parser/-/range-parser-1.2.7.tgz",
+      "integrity": "sha512-hKormJbkJqzQGhziax5PItDUTMAM9uE2XXQmM37dyd4hVM+5aVl7oVxMVUiVQn2oCQFN/LKCZdvSM0pFRqbSmQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/@types/react": {
+      "version": "19.2.14",
+      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.14.tgz",
+      "integrity": "sha512-ilcTH/UniCkMdtexkoCN0bI7pMcJDvmQFPvuPvmEaYA/NSfFTAgdUSLAoVjaRJm7+6PvcM+q1zYOwS4wTYMF9w==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "csstype": "^3.2.2"
+      }
+    },
+    "node_modules/@types/react-dom": {
+      "version": "19.2.3",
+      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
+      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
+      "dev": true,
+      "license": "MIT",
+      "peerDependencies": {
+        "@types/react": "^19.2.0"
+      }
+    },
+    "node_modules/@types/send": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/@types/send/-/send-1.2.1.tgz",
+      "integrity": "sha512-arsCikDvlU99zl1g69TcAB3mzZPpxgw0UQnaHeC1Nwb015xp8bknZv5rIfri9xTOcMuaVgvabfIRA7PSZVuZIQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/node": "*"
+      }
+    },
+    "node_modules/@types/serve-static": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/@types/serve-static/-/serve-static-2.2.0.tgz",
+      "integrity": "sha512-8mam4H1NHLtu7nmtalF7eyBH14QyOASmcxHhSfEoRyr0nP/YdoesEtU+uSRvMe96TW/HPTtkoKqQLl53N7UXMQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@types/http-errors": "*",
+        "@types/node": "*"
+      }
+    },
+    "node_modules/@vitejs/plugin-react": {
+      "version": "5.2.0",
+      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.2.0.tgz",
+      "integrity": "sha512-YmKkfhOAi3wsB1PhJq5Scj3GXMn3WvtQ/JC0xoopuHoXSdmtdStOpFrYaT1kie2YgFBcIe64ROzMYRjCrYOdYw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@babel/core": "^7.29.0",
+        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
+        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
+        "@rolldown/pluginutils": "1.0.0-rc.3",
+        "@types/babel__core": "^7.20.5",
+        "react-refresh": "^0.18.0"
+      },
+      "engines": {
+        "node": "^20.19.0 || >=22.12.0"
+      },
+      "peerDependencies": {
+        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0"
+      }
+    },
     "node_modules/@vitest/expect": {
       "version": "4.1.5",
       "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-4.1.5.tgz",
@@ -981,6 +1529,20 @@
         "url": "https://opencollective.com/vitest"
       }
     },
+    "node_modules/accepts": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/accepts/-/accepts-2.0.0.tgz",
+      "integrity": "sha512-5cvg6CtKwfgdmVqY1WIiXKc3Q1bkRqGLi+2W/6ao+6Y7gu/RCwRuAhGEzh5B4KlszSuTLgZYuqFqo5bImjNKng==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "mime-types": "^3.0.0",
+        "negotiator": "^1.0.0"
+      },
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
     "node_modules/assertion-error": {
       "version": "2.0.1",
       "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
@@ -991,70 +1553,345 @@
         "node": ">=12"
       }
     },
-    "node_modules/chai": {
-      "version": "6.2.2",
-      "resolved": "https://registry.npmjs.org/chai/-/chai-6.2.2.tgz",
-      "integrity": "sha512-NUPRluOfOiTKBKvWPtSD4PhFvWCqOi0BGStNWs57X9js7XGTprSmFoz5F0tWhR4WPjNeR9jXqdC7/UpSJTnlRg==",
+    "node_modules/baseline-browser-mapping": {
+      "version": "2.10.27",
+      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.27.tgz",
+      "integrity": "sha512-zEs/ufmZoUd7WftKpKyXaT6RFxpQ5Qm9xytKRHvJfxFV9DFJkZph9RvJ1LcOUi0Z1ZVijMte65JbILeV+8QQEA==",
+      "dev": true,
+      "license": "Apache-2.0",
+      "bin": {
+        "baseline-browser-mapping": "dist/cli.cjs"
+      },
+      "engines": {
+        "node": ">=6.0.0"
+      }
+    },
+    "node_modules/body-parser": {
+      "version": "2.2.2",
+      "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-2.2.2.tgz",
+      "integrity": "sha512-oP5VkATKlNwcgvxi0vM0p/D3n2C3EReYVX+DNYs5TjZFn/oQt2j+4sVJtSMr18pdRr8wjTcBl6LoV+FUwzPmNA==",
       "dev": true,
       "license": "MIT",
+      "dependencies": {
+        "bytes": "^3.1.2",
+        "content-type": "^1.0.5",
+        "debug": "^4.4.3",
+        "http-errors": "^2.0.0",
+        "iconv-lite": "^0.7.0",
+        "on-finished": "^2.4.1",
+        "qs": "^6.14.1",
+        "raw-body": "^3.0.1",
+        "type-is": "^2.0.1"
+      },
       "engines": {
         "node": ">=18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
       }
     },
-    "node_modules/convert-source-map": {
-      "version": "2.0.0",
-      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
-      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
+    "node_modules/browserslist": {
+      "version": "4.28.2",
+      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
+      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
       "dev": true,
-      "license": "MIT"
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "license": "MIT",
+      "dependencies": {
+        "baseline-browser-mapping": "^2.10.12",
+        "caniuse-lite": "^1.0.30001782",
+        "electron-to-chromium": "^1.5.328",
+        "node-releases": "^2.0.36",
+        "update-browserslist-db": "^1.2.3"
+      },
+      "bin": {
+        "browserslist": "cli.js"
+      },
+      "engines": {
+        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
+      }
     },
-    "node_modules/detect-libc": {
-      "version": "2.1.2",
-      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
-      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
+    "node_modules/bytes": {
+      "version": "3.1.2",
+      "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.2.tgz",
+      "integrity": "sha512-/Nf7TyzTx6S3yRJObOAV7956r8cr2+Oj8AC5dt8wSP3BQAoeX58NoHyCU8P8zGkNXStjTSi6fzO6F0pBdcYbEg==",
       "dev": true,
-      "license": "Apache-2.0",
+      "license": "MIT",
       "engines": {
-        "node": ">=8"
+        "node": ">= 0.8"
       }
     },
-    "node_modules/es-module-lexer": {
-      "version": "2.1.0",
-      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.1.0.tgz",
-      "integrity": "sha512-n27zTYMjYu1aj4MjCWzSP7G9r75utsaoc8m61weK+W8JMBGGQybd43GstCXZ3WNmSFtGT9wi59qQTW6mhTR5LQ==",
+    "node_modules/call-bind-apply-helpers": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
+      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
       "dev": true,
-      "license": "MIT"
+      "license": "MIT",
+      "dependencies": {
+        "es-errors": "^1.3.0",
+        "function-bind": "^1.1.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
     },
-    "node_modules/esbuild": {
-      "version": "0.27.7",
-      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.7.tgz",
-      "integrity": "sha512-IxpibTjyVnmrIQo5aqNpCgoACA/dTKLTlhMHihVHhdkxKyPO1uBBthumT0rdHmcsk9uMonIWS0m4FljWzILh3w==",
+    "node_modules/call-bound": {
+      "version": "1.0.4",
+      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
+      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
       "dev": true,
-      "hasInstallScript": true,
       "license": "MIT",
-      "bin": {
-        "esbuild": "bin/esbuild"
+      "dependencies": {
+        "call-bind-apply-helpers": "^1.0.2",
+        "get-intrinsic": "^1.3.0"
       },
       "engines": {
-        "node": ">=18"
+        "node": ">= 0.4"
       },
-      "optionalDependencies": {
-        "@esbuild/aix-ppc64": "0.27.7",
-        "@esbuild/android-arm": "0.27.7",
-        "@esbuild/android-arm64": "0.27.7",
-        "@esbuild/android-x64": "0.27.7",
-        "@esbuild/darwin-arm64": "0.27.7",
-        "@esbuild/darwin-x64": "0.27.7",
-        "@esbuild/freebsd-arm64": "0.27.7",
-        "@esbuild/freebsd-x64": "0.27.7",
-        "@esbuild/linux-arm": "0.27.7",
-        "@esbuild/linux-arm64": "0.27.7",
-        "@esbuild/linux-ia32": "0.27.7",
-        "@esbuild/linux-loong64": "0.27.7",
-        "@esbuild/linux-mips64el": "0.27.7",
-        "@esbuild/linux-ppc64": "0.27.7",
-        "@esbuild/linux-riscv64": "0.27.7",
-        "@esbuild/linux-s390x": "0.27.7",
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/caniuse-lite": {
+      "version": "1.0.30001791",
+      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001791.tgz",
+      "integrity": "sha512-yk0l/YSrOnFZk3UROpDLQD9+kC1l4meK/wed583AXrzoarMGJcbRi2Q4RaUYbKxYAsZ8sWmaSa/DsLmdBeI1vQ==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "license": "CC-BY-4.0"
+    },
+    "node_modules/chai": {
+      "version": "6.2.2",
+      "resolved": "https://registry.npmjs.org/chai/-/chai-6.2.2.tgz",
+      "integrity": "sha512-NUPRluOfOiTKBKvWPtSD4PhFvWCqOi0BGStNWs57X9js7XGTprSmFoz5F0tWhR4WPjNeR9jXqdC7/UpSJTnlRg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=18"
+      }
+    },
+    "node_modules/content-disposition": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-1.1.0.tgz",
+      "integrity": "sha512-5jRCH9Z/+DRP7rkvY83B+yGIGX96OYdJmzngqnw2SBSxqCFPd0w2km3s5iawpGX8krnwSGmF0FW5Nhr0Hfai3g==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
+    "node_modules/content-type": {
+      "version": "1.0.5",
+      "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.5.tgz",
+      "integrity": "sha512-nTjqfcBFEipKdXCv4YDQWCfmcLZKm81ldF0pAopTvyrFGVbcR6P/VAAd5G7N+0tTr8QqiU0tFadD6FK4NtJwOA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/convert-source-map": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
+      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/cookie": {
+      "version": "0.7.2",
+      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
+      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/cookie-signature": {
+      "version": "1.2.2",
+      "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.2.2.tgz",
+      "integrity": "sha512-D76uU73ulSXrD1UXF4KE2TMxVVwhsnCgfAyTg9k8P6KGZjlXKrOLe4dJQKI3Bxi5wjesZoFXJWElNWBjPZMbhg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.6.0"
+      }
+    },
+    "node_modules/csstype": {
+      "version": "3.2.3",
+      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
+      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/debug": {
+      "version": "4.4.3",
+      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
+      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ms": "^2.1.3"
+      },
+      "engines": {
+        "node": ">=6.0"
+      },
+      "peerDependenciesMeta": {
+        "supports-color": {
+          "optional": true
+        }
+      }
+    },
+    "node_modules/depd": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",
+      "integrity": "sha512-g7nH6P6dyDioJogAAGprGpCtVImJhpPk/roCzdb3fIh61/s/nPsfR6onyMwkCAR/OlC3yBC0lESvUoQEAssIrw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/dunder-proto": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
+      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "call-bind-apply-helpers": "^1.0.1",
+        "es-errors": "^1.3.0",
+        "gopd": "^1.2.0"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/ee-first": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
+      "integrity": "sha512-WMwm9LhRUo+WUaRN+vRuETqG89IgZphVSNkdFgeb6sS/E4OrDIN7t48CAewSHXc6C8lefD8KKfr5vY61brQlow==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/electron-to-chromium": {
+      "version": "1.5.349",
+      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.349.tgz",
+      "integrity": "sha512-QsWVGyRuY07Aqb234QytTfwd5d9AJlfNIQ5wIOl1L+PZDzI9d9+Fn0FRale/QYlFxt/bUnB0/nLd1jFPGxGK1A==",
+      "dev": true,
+      "license": "ISC"
+    },
+    "node_modules/encodeurl": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-2.0.0.tgz",
+      "integrity": "sha512-Q0n9HRi4m6JuGIV1eFlmvJB7ZEVxu93IrMyiMsGC0lrMJMWzRgx6WGquyfQgZVb31vhGgXnfmPNNXmxnOkRBrg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/es-define-property": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
+      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/es-errors": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
+      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/es-module-lexer": {
+      "version": "2.1.0",
+      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-2.1.0.tgz",
+      "integrity": "sha512-n27zTYMjYu1aj4MjCWzSP7G9r75utsaoc8m61weK+W8JMBGGQybd43GstCXZ3WNmSFtGT9wi59qQTW6mhTR5LQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/es-object-atoms": {
+      "version": "1.1.1",
+      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
+      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "es-errors": "^1.3.0"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/esbuild": {
+      "version": "0.27.7",
+      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.27.7.tgz",
+      "integrity": "sha512-IxpibTjyVnmrIQo5aqNpCgoACA/dTKLTlhMHihVHhdkxKyPO1uBBthumT0rdHmcsk9uMonIWS0m4FljWzILh3w==",
+      "dev": true,
+      "hasInstallScript": true,
+      "license": "MIT",
+      "bin": {
+        "esbuild": "bin/esbuild"
+      },
+      "engines": {
+        "node": ">=18"
+      },
+      "optionalDependencies": {
+        "@esbuild/aix-ppc64": "0.27.7",
+        "@esbuild/android-arm": "0.27.7",
+        "@esbuild/android-arm64": "0.27.7",
+        "@esbuild/android-x64": "0.27.7",
+        "@esbuild/darwin-arm64": "0.27.7",
+        "@esbuild/darwin-x64": "0.27.7",
+        "@esbuild/freebsd-arm64": "0.27.7",
+        "@esbuild/freebsd-x64": "0.27.7",
+        "@esbuild/linux-arm": "0.27.7",
+        "@esbuild/linux-arm64": "0.27.7",
+        "@esbuild/linux-ia32": "0.27.7",
+        "@esbuild/linux-loong64": "0.27.7",
+        "@esbuild/linux-mips64el": "0.27.7",
+        "@esbuild/linux-ppc64": "0.27.7",
+        "@esbuild/linux-riscv64": "0.27.7",
+        "@esbuild/linux-s390x": "0.27.7",
         "@esbuild/linux-x64": "0.27.7",
         "@esbuild/netbsd-arm64": "0.27.7",
         "@esbuild/netbsd-x64": "0.27.7",
@@ -1067,6 +1904,23 @@
         "@esbuild/win32-x64": "0.27.7"
       }
     },
+    "node_modules/escalade": {
+      "version": "3.2.0",
+      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
+      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=6"
+      }
+    },
+    "node_modules/escape-html": {
+      "version": "1.0.3",
+      "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
+      "integrity": "sha512-NiSupZ4OeuGwr68lGIeym/ksIZMJodUGOSCZ/FSnTxcrekbvqrgdUxlJOMpijaKZVjAJrWrGs/6Jy8OMuyj9ow==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/estree-walker": {
       "version": "3.0.3",
       "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
@@ -1077,6 +1931,16 @@
         "@types/estree": "^1.0.0"
       }
     },
+    "node_modules/etag": {
+      "version": "1.8.1",
+      "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
+      "integrity": "sha512-aIL5Fx7mawVa300al2BnEE4iNvo1qETxLrPI/o05L7z6go7fCw1J6EQmbK4FmJ2AS7kgVF/KEZWufBfdClMcPg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
     "node_modules/expect-type": {
       "version": "1.3.0",
       "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.3.0.tgz",
@@ -1087,6 +1951,50 @@
         "node": ">=12.0.0"
       }
     },
+    "node_modules/express": {
+      "version": "5.2.1",
+      "resolved": "https://registry.npmjs.org/express/-/express-5.2.1.tgz",
+      "integrity": "sha512-hIS4idWWai69NezIdRt2xFVofaF4j+6INOpJlVOLDO8zXGpUVEVzIYk12UUi2JzjEzWL3IOAxcTubgz9Po0yXw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "accepts": "^2.0.0",
+        "body-parser": "^2.2.1",
+        "content-disposition": "^1.0.0",
+        "content-type": "^1.0.5",
+        "cookie": "^0.7.1",
+        "cookie-signature": "^1.2.1",
+        "debug": "^4.4.0",
+        "depd": "^2.0.0",
+        "encodeurl": "^2.0.0",
+        "escape-html": "^1.0.3",
+        "etag": "^1.8.1",
+        "finalhandler": "^2.1.0",
+        "fresh": "^2.0.0",
+        "http-errors": "^2.0.0",
+        "merge-descriptors": "^2.0.0",
+        "mime-types": "^3.0.0",
+        "on-finished": "^2.4.1",
+        "once": "^1.4.0",
+        "parseurl": "^1.3.3",
+        "proxy-addr": "^2.0.7",
+        "qs": "^6.14.0",
+        "range-parser": "^1.2.1",
+        "router": "^2.2.0",
+        "send": "^1.1.0",
+        "serve-static": "^2.2.0",
+        "statuses": "^2.0.1",
+        "type-is": "^2.0.1",
+        "vary": "^1.1.2"
+      },
+      "engines": {
+        "node": ">= 18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
     "node_modules/fdir": {
       "version": "6.5.0",
       "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
@@ -1105,6 +2013,48 @@
         }
       }
     },
+    "node_modules/finalhandler": {
+      "version": "2.1.1",
+      "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-2.1.1.tgz",
+      "integrity": "sha512-S8KoZgRZN+a5rNwqTxlZZePjT/4cnm0ROV70LedRHZ0p8u9fRID0hJUZQpkKLzro8LfmC8sx23bY6tVNxv8pQA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "debug": "^4.4.0",
+        "encodeurl": "^2.0.0",
+        "escape-html": "^1.0.3",
+        "on-finished": "^2.4.1",
+        "parseurl": "^1.3.3",
+        "statuses": "^2.0.1"
+      },
+      "engines": {
+        "node": ">= 18.0.0"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
+    "node_modules/forwarded": {
+      "version": "0.2.0",
+      "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
+      "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/fresh": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/fresh/-/fresh-2.0.0.tgz",
+      "integrity": "sha512-Rx/WycZ60HOaqLKAi6cHRKKI7zxWbJ31MhntmtwMoaTeF7XFH9hhBp8vITaMidfljRQ6eYWCKkaTK+ykVJHP2A==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
     "node_modules/fsevents": {
       "version": "2.3.3",
       "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
@@ -1120,302 +2070,309 @@
         "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
       }
     },
-    "node_modules/get-tsconfig": {
-      "version": "4.14.0",
-      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
-      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
+    "node_modules/function-bind": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
+      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
       "dev": true,
       "license": "MIT",
-      "dependencies": {
-        "resolve-pkg-maps": "^1.0.0"
-      },
       "funding": {
-        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/lightningcss": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
-      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
+    "node_modules/gensync": {
+      "version": "1.0.0-beta.2",
+      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
+      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
       "dev": true,
-      "license": "MPL-2.0",
+      "license": "MIT",
+      "engines": {
+        "node": ">=6.9.0"
+      }
+    },
+    "node_modules/get-intrinsic": {
+      "version": "1.3.0",
+      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
+      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
+      "dev": true,
+      "license": "MIT",
       "dependencies": {
-        "detect-libc": "^2.0.3"
+        "call-bind-apply-helpers": "^1.0.2",
+        "es-define-property": "^1.0.1",
+        "es-errors": "^1.3.0",
+        "es-object-atoms": "^1.1.1",
+        "function-bind": "^1.1.2",
+        "get-proto": "^1.0.1",
+        "gopd": "^1.2.0",
+        "has-symbols": "^1.1.0",
+        "hasown": "^2.0.2",
+        "math-intrinsics": "^1.1.0"
       },
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">= 0.4"
       },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
-      },
-      "optionalDependencies": {
-        "lightningcss-android-arm64": "1.32.0",
-        "lightningcss-darwin-arm64": "1.32.0",
-        "lightningcss-darwin-x64": "1.32.0",
-        "lightningcss-freebsd-x64": "1.32.0",
-        "lightningcss-linux-arm-gnueabihf": "1.32.0",
-        "lightningcss-linux-arm64-gnu": "1.32.0",
-        "lightningcss-linux-arm64-musl": "1.32.0",
-        "lightningcss-linux-x64-gnu": "1.32.0",
-        "lightningcss-linux-x64-musl": "1.32.0",
-        "lightningcss-win32-arm64-msvc": "1.32.0",
-        "lightningcss-win32-x64-msvc": "1.32.0"
-      }
-    },
-    "node_modules/lightningcss-android-arm64": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
-      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
-      "cpu": [
-        "arm64"
-      ],
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/get-proto": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
+      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "android"
-      ],
+      "license": "MIT",
+      "dependencies": {
+        "dunder-proto": "^1.0.1",
+        "es-object-atoms": "^1.0.0"
+      },
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">= 0.4"
+      }
+    },
+    "node_modules/get-tsconfig": {
+      "version": "4.14.0",
+      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
+      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "resolve-pkg-maps": "^1.0.0"
       },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
       }
     },
-    "node_modules/lightningcss-darwin-arm64": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
-      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
-      "cpu": [
-        "arm64"
-      ],
+    "node_modules/gopd": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
+      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "darwin"
-      ],
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">= 0.4"
       },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/lightningcss-darwin-x64": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
-      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
-      "cpu": [
-        "x64"
-      ],
+    "node_modules/has-symbols": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
+      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "darwin"
-      ],
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">= 0.4"
       },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
-    "node_modules/lightningcss-freebsd-x64": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
-      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
-      "cpu": [
-        "x64"
-      ],
+    "node_modules/hasown": {
+      "version": "2.0.3",
+      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
+      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "freebsd"
-      ],
-      "engines": {
-        "node": ">= 12.0.0"
+      "license": "MIT",
+      "dependencies": {
+        "function-bind": "^1.1.2"
       },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+      "engines": {
+        "node": ">= 0.4"
       }
     },
-    "node_modules/lightningcss-linux-arm-gnueabihf": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
-      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
-      "cpu": [
-        "arm"
-      ],
+    "node_modules/http-errors": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-2.0.1.tgz",
+      "integrity": "sha512-4FbRdAX+bSdmo4AUFuS0WNiPz8NgFt+r8ThgNWmlrjQjt1Q7ZR9+zTlce2859x4KSXrwIsaeTqDoKQmtP8pLmQ==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "linux"
-      ],
+      "license": "MIT",
+      "dependencies": {
+        "depd": "~2.0.0",
+        "inherits": "~2.0.4",
+        "setprototypeof": "~1.2.0",
+        "statuses": "~2.0.2",
+        "toidentifier": "~1.0.1"
+      },
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">= 0.8"
       },
       "funding": {
         "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://opencollective.com/express"
       }
     },
-    "node_modules/lightningcss-linux-arm64-gnu": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
-      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
-      "cpu": [
-        "arm64"
-      ],
+    "node_modules/iconv-lite": {
+      "version": "0.7.2",
+      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.7.2.tgz",
+      "integrity": "sha512-im9DjEDQ55s9fL4EYzOAv0yMqmMBSZp6G0VvFyTMPKWxiSBHUj9NW/qqLmXUwXrrM7AvqSlTCfvqRb0cM8yYqw==",
       "dev": true,
-      "libc": [
-        "glibc"
-      ],
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "linux"
-      ],
+      "license": "MIT",
+      "dependencies": {
+        "safer-buffer": ">= 2.1.2 < 3.0.0"
+      },
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">=0.10.0"
       },
       "funding": {
         "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://opencollective.com/express"
       }
     },
-    "node_modules/lightningcss-linux-arm64-musl": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
-      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
-      "cpu": [
-        "arm64"
-      ],
+    "node_modules/inherits": {
+      "version": "2.0.4",
+      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
+      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
       "dev": true,
-      "libc": [
-        "musl"
-      ],
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "linux"
-      ],
+      "license": "ISC"
+    },
+    "node_modules/ipaddr.js": {
+      "version": "1.9.1",
+      "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
+      "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g==",
+      "dev": true,
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "node": ">= 0.10"
       }
     },
-    "node_modules/lightningcss-linux-x64-gnu": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
-      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
-      "cpu": [
-        "x64"
-      ],
+    "node_modules/is-promise": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/is-promise/-/is-promise-4.0.0.tgz",
+      "integrity": "sha512-hvpoI6korhJMnej285dSg6nu1+e6uxs7zG3BYAm5byqDsgJNWwxzM6z6iZiAgQR4TJ30JmBTOwqZUw3WlyH3AQ==",
       "dev": true,
-      "libc": [
-        "glibc"
-      ],
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "linux"
-      ],
+      "license": "MIT"
+    },
+    "node_modules/js-tokens": {
+      "version": "4.0.0",
+      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
+      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/jsesc": {
+      "version": "3.1.0",
+      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
+      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
+      "dev": true,
+      "license": "MIT",
+      "bin": {
+        "jsesc": "bin/jsesc"
+      },
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">=6"
+      }
+    },
+    "node_modules/json5": {
+      "version": "2.2.3",
+      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
+      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
+      "dev": true,
+      "license": "MIT",
+      "bin": {
+        "json5": "lib/cli.js"
       },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+      "engines": {
+        "node": ">=6"
       }
     },
-    "node_modules/lightningcss-linux-x64-musl": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
-      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
-      "cpu": [
-        "x64"
-      ],
+    "node_modules/lru-cache": {
+      "version": "5.1.1",
+      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
+      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
       "dev": true,
-      "libc": [
-        "musl"
-      ],
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "linux"
-      ],
+      "license": "ISC",
+      "dependencies": {
+        "yallist": "^3.0.2"
+      }
+    },
+    "node_modules/lucide-react": {
+      "version": "0.556.0",
+      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.556.0.tgz",
+      "integrity": "sha512-iOb8dRk7kLaYBZhR2VlV1CeJGxChBgUthpSP8wom9jfj79qovgG6qcSdiy6vkoREKPnbUYzJsCn4o4PtG3Iy+A==",
+      "dev": true,
+      "license": "ISC",
+      "peerDependencies": {
+        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
+      }
+    },
+    "node_modules/magic-string": {
+      "version": "0.30.21",
+      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
+      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "@jridgewell/sourcemap-codec": "^1.5.5"
+      }
+    },
+    "node_modules/math-intrinsics": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
+      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
+      "dev": true,
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "node": ">= 0.4"
       }
     },
-    "node_modules/lightningcss-win32-arm64-msvc": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
-      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
-      "cpu": [
-        "arm64"
-      ],
+    "node_modules/media-typer": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-1.1.0.tgz",
+      "integrity": "sha512-aisnrDP4GNe06UcKFnV5bfMNPBUw4jsLGaWwWfnH3v02GnBuXX2MCVn5RbrWo0j3pczUilYblq7fQ7Nw2t5XKw==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "win32"
-      ],
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/merge-descriptors": {
+      "version": "2.0.0",
+      "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-2.0.0.tgz",
+      "integrity": "sha512-Snk314V5ayFLhp3fkUREub6WtjBfPdCPY1Ln8/8munuLuiYhsABgBVWsozAG+MWMbVEvcdcpbi9R7ww22l9Q3g==",
+      "dev": true,
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
+        "node": ">=18"
       },
       "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "url": "https://github.com/sponsors/sindresorhus"
       }
     },
-    "node_modules/lightningcss-win32-x64-msvc": {
-      "version": "1.32.0",
-      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
-      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
-      "cpu": [
-        "x64"
-      ],
+    "node_modules/mime-db": {
+      "version": "1.54.0",
+      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.54.0.tgz",
+      "integrity": "sha512-aU5EJuIN2WDemCcAp2vFBfp/m4EAhWJnUNSSw0ixs7/kXbd6Pg64EmwJkNdFhB8aWt1sH2CTXrLxo/iAGV3oPQ==",
       "dev": true,
-      "license": "MPL-2.0",
-      "optional": true,
-      "os": [
-        "win32"
-      ],
+      "license": "MIT",
       "engines": {
-        "node": ">= 12.0.0"
-      },
-      "funding": {
-        "type": "opencollective",
-        "url": "https://opencollective.com/parcel"
+        "node": ">= 0.6"
       }
     },
-    "node_modules/magic-string": {
-      "version": "0.30.21",
-      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
-      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
+    "node_modules/mime-types": {
+      "version": "3.0.2",
+      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-3.0.2.tgz",
+      "integrity": "sha512-Lbgzdk0h4juoQ9fCKXW4by0UJqj+nOOrI9MJ1sSj4nI8aI2eo1qmvQEie4VD1glsS250n15LsWsYtCugiStS5A==",
       "dev": true,
       "license": "MIT",
       "dependencies": {
-        "@jridgewell/sourcemap-codec": "^1.5.5"
+        "mime-db": "^1.54.0"
+      },
+      "engines": {
+        "node": ">=18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
       }
     },
+    "node_modules/ms": {
+      "version": "2.1.3",
+      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
+      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
+      "dev": true,
+      "license": "MIT"
+    },
     "node_modules/nanoid": {
       "version": "3.3.12",
       "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.12.tgz",
@@ -1435,6 +2392,36 @@
         "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
       }
     },
+    "node_modules/negotiator": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-1.0.0.tgz",
+      "integrity": "sha512-8Ofs/AUQh8MaEcrlq5xOX0CQ9ypTF5dl78mjlMNfOK08fzpgTHQRQPBxcPlEtIw0yRpws+Zo/3r+5WRby7u3Gg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/node-releases": {
+      "version": "2.0.38",
+      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.38.tgz",
+      "integrity": "sha512-3qT/88Y3FbH/Kx4szpQQ4HzUbVrHPKTLVpVocKiLfoYvw9XSGOX2FmD2d6DrXbVYyAQTF2HeF6My8jmzx7/CRw==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/object-inspect": {
+      "version": "1.13.4",
+      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
+      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
     "node_modules/obug": {
       "version": "2.1.1",
       "resolved": "https://registry.npmjs.org/obug/-/obug-2.1.1.tgz",
@@ -1446,6 +2433,50 @@
       ],
       "license": "MIT"
     },
+    "node_modules/on-finished": {
+      "version": "2.4.1",
+      "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.4.1.tgz",
+      "integrity": "sha512-oVlzkg3ENAhCk2zdv7IJwd/QUD4z2RxRwpkcGY8psCVcCYZNq4wYnVWALHM+brtuJjePWiYF/ClmuDr8Ch5+kg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "ee-first": "1.1.1"
+      },
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/once": {
+      "version": "1.4.0",
+      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
+      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
+      "dev": true,
+      "license": "ISC",
+      "dependencies": {
+        "wrappy": "1"
+      }
+    },
+    "node_modules/parseurl": {
+      "version": "1.3.3",
+      "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
+      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/path-to-regexp": {
+      "version": "8.4.2",
+      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-8.4.2.tgz",
+      "integrity": "sha512-qRcuIdP69NPm4qbACK+aDogI5CBDMi1jKe0ry5rSQJz8JVLsC7jV8XpiJjGRLLol3N+R5ihGYcrPLTno6pAdBA==",
+      "dev": true,
+      "license": "MIT",
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
     "node_modules/pathe": {
       "version": "2.0.3",
       "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
@@ -1502,6 +2533,95 @@
         "node": "^10 || ^12 || >=14"
       }
     },
+    "node_modules/proxy-addr": {
+      "version": "2.0.7",
+      "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
+      "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "forwarded": "0.2.0",
+        "ipaddr.js": "1.9.1"
+      },
+      "engines": {
+        "node": ">= 0.10"
+      }
+    },
+    "node_modules/qs": {
+      "version": "6.15.1",
+      "resolved": "https://registry.npmjs.org/qs/-/qs-6.15.1.tgz",
+      "integrity": "sha512-6YHEFRL9mfgcAvql/XhwTvf5jKcOiiupt2FiJxHkiX1z4j7WL8J/jRHYLluORvc1XxB5rV20KoeK00gVJamspg==",
+      "dev": true,
+      "license": "BSD-3-Clause",
+      "dependencies": {
+        "side-channel": "^1.1.0"
+      },
+      "engines": {
+        "node": ">=0.6"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/range-parser": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
+      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
+    "node_modules/raw-body": {
+      "version": "3.0.2",
+      "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-3.0.2.tgz",
+      "integrity": "sha512-K5zQjDllxWkf7Z5xJdV0/B0WTNqx6vxG70zJE4N0kBs4LovmEYWJzQGxC9bS9RAKu3bgM40lrd5zoLJ12MQ5BA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "bytes": "~3.1.2",
+        "http-errors": "~2.0.1",
+        "iconv-lite": "~0.7.0",
+        "unpipe": "~1.0.0"
+      },
+      "engines": {
+        "node": ">= 0.10"
+      }
+    },
+    "node_modules/react": {
+      "version": "19.2.5",
+      "resolved": "https://registry.npmjs.org/react/-/react-19.2.5.tgz",
+      "integrity": "sha512-llUJLzz1zTUBrskt2pwZgLq59AemifIftw4aB7JxOqf1HY2FDaGDxgwpAPVzHU1kdWabH7FauP4i1oEeer2WCA==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
+    "node_modules/react-dom": {
+      "version": "19.2.5",
+      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.5.tgz",
+      "integrity": "sha512-J5bAZz+DXMMwW/wV3xzKke59Af6CHY7G4uYLN1OvBcKEsWOs4pQExj86BBKamxl/Ik5bx9whOrvBlSDfWzgSag==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "scheduler": "^0.27.0"
+      },
+      "peerDependencies": {
+        "react": "^19.2.5"
+      }
+    },
+    "node_modules/react-refresh": {
+      "version": "0.18.0",
+      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
+      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.10.0"
+      }
+    },
     "node_modules/resolve-pkg-maps": {
       "version": "1.0.0",
       "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
@@ -1512,38 +2632,220 @@
         "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
       }
     },
-    "node_modules/rolldown": {
-      "version": "1.0.0-rc.17",
-      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.0-rc.17.tgz",
-      "integrity": "sha512-ZrT53oAKrtA4+YtBWPQbtPOxIbVDbxT0orcYERKd63VJTF13zPcgXTvD4843L8pcsI7M6MErt8QtON6lrB9tyA==",
+    "node_modules/rollup": {
+      "version": "4.60.2",
+      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.60.2.tgz",
+      "integrity": "sha512-J9qZyW++QK/09NyN/zeO0dG/1GdGfyp9lV8ajHnRVLfo/uFsbji5mHnDgn/qYdUHyCkM2N+8VyspgZclfAh0eQ==",
       "dev": true,
       "license": "MIT",
       "dependencies": {
-        "@oxc-project/types": "=0.127.0",
-        "@rolldown/pluginutils": "1.0.0-rc.17"
+        "@types/estree": "1.0.8"
       },
       "bin": {
-        "rolldown": "bin/cli.mjs"
+        "rollup": "dist/bin/rollup"
       },
       "engines": {
-        "node": "^20.19.0 || >=22.12.0"
+        "node": ">=18.0.0",
+        "npm": ">=8.0.0"
       },
       "optionalDependencies": {
-        "@rolldown/binding-android-arm64": "1.0.0-rc.17",
-        "@rolldown/binding-darwin-arm64": "1.0.0-rc.17",
-        "@rolldown/binding-darwin-x64": "1.0.0-rc.17",
-        "@rolldown/binding-freebsd-x64": "1.0.0-rc.17",
-        "@rolldown/binding-linux-arm-gnueabihf": "1.0.0-rc.17",
-        "@rolldown/binding-linux-arm64-gnu": "1.0.0-rc.17",
-        "@rolldown/binding-linux-arm64-musl": "1.0.0-rc.17",
-        "@rolldown/binding-linux-ppc64-gnu": "1.0.0-rc.17",
-        "@rolldown/binding-linux-s390x-gnu": "1.0.0-rc.17",
-        "@rolldown/binding-linux-x64-gnu": "1.0.0-rc.17",
-        "@rolldown/binding-linux-x64-musl": "1.0.0-rc.17",
-        "@rolldown/binding-openharmony-arm64": "1.0.0-rc.17",
-        "@rolldown/binding-wasm32-wasi": "1.0.0-rc.17",
-        "@rolldown/binding-win32-arm64-msvc": "1.0.0-rc.17",
-        "@rolldown/binding-win32-x64-msvc": "1.0.0-rc.17"
+        "@rollup/rollup-android-arm-eabi": "4.60.2",
+        "@rollup/rollup-android-arm64": "4.60.2",
+        "@rollup/rollup-darwin-arm64": "4.60.2",
+        "@rollup/rollup-darwin-x64": "4.60.2",
+        "@rollup/rollup-freebsd-arm64": "4.60.2",
+        "@rollup/rollup-freebsd-x64": "4.60.2",
+        "@rollup/rollup-linux-arm-gnueabihf": "4.60.2",
+        "@rollup/rollup-linux-arm-musleabihf": "4.60.2",
+        "@rollup/rollup-linux-arm64-gnu": "4.60.2",
+        "@rollup/rollup-linux-arm64-musl": "4.60.2",
+        "@rollup/rollup-linux-loong64-gnu": "4.60.2",
+        "@rollup/rollup-linux-loong64-musl": "4.60.2",
+        "@rollup/rollup-linux-ppc64-gnu": "4.60.2",
+        "@rollup/rollup-linux-ppc64-musl": "4.60.2",
+        "@rollup/rollup-linux-riscv64-gnu": "4.60.2",
+        "@rollup/rollup-linux-riscv64-musl": "4.60.2",
+        "@rollup/rollup-linux-s390x-gnu": "4.60.2",
+        "@rollup/rollup-linux-x64-gnu": "4.60.2",
+        "@rollup/rollup-linux-x64-musl": "4.60.2",
+        "@rollup/rollup-openbsd-x64": "4.60.2",
+        "@rollup/rollup-openharmony-arm64": "4.60.2",
+        "@rollup/rollup-win32-arm64-msvc": "4.60.2",
+        "@rollup/rollup-win32-ia32-msvc": "4.60.2",
+        "@rollup/rollup-win32-x64-gnu": "4.60.2",
+        "@rollup/rollup-win32-x64-msvc": "4.60.2",
+        "fsevents": "~2.3.2"
+      }
+    },
+    "node_modules/router": {
+      "version": "2.2.0",
+      "resolved": "https://registry.npmjs.org/router/-/router-2.2.0.tgz",
+      "integrity": "sha512-nLTrUKm2UyiL7rlhapu/Zl45FwNgkZGaCpZbIHajDYgwlJCOzLSk+cIPAnsEqV955GjILJnKbdQC1nVPz+gAYQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "debug": "^4.4.0",
+        "depd": "^2.0.0",
+        "is-promise": "^4.0.0",
+        "parseurl": "^1.3.3",
+        "path-to-regexp": "^8.0.0"
+      },
+      "engines": {
+        "node": ">= 18"
+      }
+    },
+    "node_modules/safer-buffer": {
+      "version": "2.1.2",
+      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
+      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/scheduler": {
+      "version": "0.27.0",
+      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
+      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
+      "dev": true,
+      "license": "MIT"
+    },
+    "node_modules/semver": {
+      "version": "6.3.1",
+      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
+      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
+      "dev": true,
+      "license": "ISC",
+      "bin": {
+        "semver": "bin/semver.js"
+      }
+    },
+    "node_modules/send": {
+      "version": "1.2.1",
+      "resolved": "https://registry.npmjs.org/send/-/send-1.2.1.tgz",
+      "integrity": "sha512-1gnZf7DFcoIcajTjTwjwuDjzuz4PPcY2StKPlsGAQ1+YH20IRVrBaXSWmdjowTJ6u8Rc01PoYOGHXfP1mYcZNQ==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "debug": "^4.4.3",
+        "encodeurl": "^2.0.0",
+        "escape-html": "^1.0.3",
+        "etag": "^1.8.1",
+        "fresh": "^2.0.0",
+        "http-errors": "^2.0.1",
+        "mime-types": "^3.0.2",
+        "ms": "^2.1.3",
+        "on-finished": "^2.4.1",
+        "range-parser": "^1.2.1",
+        "statuses": "^2.0.2"
+      },
+      "engines": {
+        "node": ">= 18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
+    "node_modules/serve-static": {
+      "version": "2.2.1",
+      "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-2.2.1.tgz",
+      "integrity": "sha512-xRXBn0pPqQTVQiC8wyQrKs2MOlX24zQ0POGaj0kultvoOCstBQM5yvOhAVSUwOMjQtTvsPWoNCHfPGwaaQJhTw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "encodeurl": "^2.0.0",
+        "escape-html": "^1.0.3",
+        "parseurl": "^1.3.3",
+        "send": "^1.2.0"
+      },
+      "engines": {
+        "node": ">= 18"
+      },
+      "funding": {
+        "type": "opencollective",
+        "url": "https://opencollective.com/express"
+      }
+    },
+    "node_modules/setprototypeof": {
+      "version": "1.2.0",
+      "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
+      "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw==",
+      "dev": true,
+      "license": "ISC"
+    },
+    "node_modules/side-channel": {
+      "version": "1.1.0",
+      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
+      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "es-errors": "^1.3.0",
+        "object-inspect": "^1.13.3",
+        "side-channel-list": "^1.0.0",
+        "side-channel-map": "^1.0.1",
+        "side-channel-weakmap": "^1.0.2"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/side-channel-list": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
+      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "es-errors": "^1.3.0",
+        "object-inspect": "^1.13.4"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/side-channel-map": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
+      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "call-bound": "^1.0.2",
+        "es-errors": "^1.3.0",
+        "get-intrinsic": "^1.2.5",
+        "object-inspect": "^1.13.3"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
+      }
+    },
+    "node_modules/side-channel-weakmap": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
+      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "call-bound": "^1.0.2",
+        "es-errors": "^1.3.0",
+        "get-intrinsic": "^1.2.5",
+        "object-inspect": "^1.13.3",
+        "side-channel-map": "^1.0.1"
+      },
+      "engines": {
+        "node": ">= 0.4"
+      },
+      "funding": {
+        "url": "https://github.com/sponsors/ljharb"
       }
     },
     "node_modules/siginfo": {
@@ -1570,6 +2872,16 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/statuses": {
+      "version": "2.0.2",
+      "resolved": "https://registry.npmjs.org/statuses/-/statuses-2.0.2.tgz",
+      "integrity": "sha512-DvEy55V3DB7uknRo+4iOGT5fP1slR8wQohVdknigZPMpMstaKJQWhwiYBACJE3Ul2pTnATihhBYnRhZQHGBiRw==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
     "node_modules/std-env": {
       "version": "4.1.0",
       "resolved": "https://registry.npmjs.org/std-env/-/std-env-4.1.0.tgz",
@@ -1621,13 +2933,15 @@
         "node": ">=14.0.0"
       }
     },
-    "node_modules/tslib": {
-      "version": "2.8.1",
-      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
-      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
+    "node_modules/toidentifier": {
+      "version": "1.0.1",
+      "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
+      "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA==",
       "dev": true,
-      "license": "0BSD",
-      "optional": true
+      "license": "MIT",
+      "engines": {
+        "node": ">=0.6"
+      }
     },
     "node_modules/tsx": {
       "version": "4.21.0",
@@ -1649,6 +2963,21 @@
         "fsevents": "~2.3.3"
       }
     },
+    "node_modules/type-is": {
+      "version": "2.0.1",
+      "resolved": "https://registry.npmjs.org/type-is/-/type-is-2.0.1.tgz",
+      "integrity": "sha512-OZs6gsjF4vMp32qrCbiVSkrFmXtG/AZhY3t0iAMrMBiAZyV9oALtXO8hsrHbMXF9x6L3grlFuwW2oAz7cav+Gw==",
+      "dev": true,
+      "license": "MIT",
+      "dependencies": {
+        "content-type": "^1.0.5",
+        "media-typer": "^1.1.0",
+        "mime-types": "^3.0.0"
+      },
+      "engines": {
+        "node": ">= 0.6"
+      }
+    },
     "node_modules/typescript": {
       "version": "5.9.3",
       "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
@@ -1670,18 +2999,70 @@
       "dev": true,
       "license": "MIT"
     },
+    "node_modules/unpipe": {
+      "version": "1.0.0",
+      "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
+      "integrity": "sha512-pjy2bYhSsufwWlKwPc+l3cN7+wuJlK6uz0YdJEOlQDbl6jo/YlPi4mb8agUkVC8BF7V8NuzeyPNqRksA3hztKQ==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
+    "node_modules/update-browserslist-db": {
+      "version": "1.2.3",
+      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
+      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
+      "dev": true,
+      "funding": [
+        {
+          "type": "opencollective",
+          "url": "https://opencollective.com/browserslist"
+        },
+        {
+          "type": "tidelift",
+          "url": "https://tidelift.com/funding/github/npm/browserslist"
+        },
+        {
+          "type": "github",
+          "url": "https://github.com/sponsors/ai"
+        }
+      ],
+      "license": "MIT",
+      "dependencies": {
+        "escalade": "^3.2.0",
+        "picocolors": "^1.1.1"
+      },
+      "bin": {
+        "update-browserslist-db": "cli.js"
+      },
+      "peerDependencies": {
+        "browserslist": ">= 4.21.0"
+      }
+    },
+    "node_modules/vary": {
+      "version": "1.1.2",
+      "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
+      "integrity": "sha512-BNGbWLfd0eUPabhkXUVm0j8uuvREyTh5ovRa/dyow/BqAbZJyC+5fU+IzQOzmAKzYqYRAISoRhdQr3eIZ/PXqg==",
+      "dev": true,
+      "license": "MIT",
+      "engines": {
+        "node": ">= 0.8"
+      }
+    },
     "node_modules/vite": {
-      "version": "8.0.10",
-      "resolved": "https://registry.npmjs.org/vite/-/vite-8.0.10.tgz",
-      "integrity": "sha512-rZuUu9j6J5uotLDs+cAA4O5H4K1SfPliUlQwqa6YEwSrWDZzP4rhm00oJR5snMewjxF5V/K3D4kctsUTsIU9Mw==",
+      "version": "7.3.2",
+      "resolved": "https://registry.npmjs.org/vite/-/vite-7.3.2.tgz",
+      "integrity": "sha512-Bby3NOsna2jsjfLVOHKes8sGwgl4TT0E6vvpYgnAYDIF/tie7MRaFthmKuHx1NSXjiTueXH3do80FMQgvEktRg==",
       "dev": true,
       "license": "MIT",
       "dependencies": {
-        "lightningcss": "^1.32.0",
-        "picomatch": "^4.0.4",
-        "postcss": "^8.5.10",
-        "rolldown": "1.0.0-rc.17",
-        "tinyglobby": "^0.2.16"
+        "esbuild": "^0.27.0",
+        "fdir": "^6.5.0",
+        "picomatch": "^4.0.3",
+        "postcss": "^8.5.6",
+        "rollup": "^4.43.0",
+        "tinyglobby": "^0.2.15"
       },
       "bin": {
         "vite": "bin/vite.js"
@@ -1697,10 +3078,9 @@
       },
       "peerDependencies": {
         "@types/node": "^20.19.0 || >=22.12.0",
-        "@vitejs/devtools": "^0.1.0",
-        "esbuild": "^0.27.0 || ^0.28.0",
         "jiti": ">=1.21.0",
         "less": "^4.0.0",
+        "lightningcss": "^1.21.0",
         "sass": "^1.70.0",
         "sass-embedded": "^1.70.0",
         "stylus": ">=0.54.8",
@@ -1713,18 +3093,15 @@
         "@types/node": {
           "optional": true
         },
-        "@vitejs/devtools": {
-          "optional": true
-        },
-        "esbuild": {
-          "optional": true
-        },
         "jiti": {
           "optional": true
         },
         "less": {
           "optional": true
         },
+        "lightningcss": {
+          "optional": true
+        },
         "sass": {
           "optional": true
         },
@@ -1854,6 +3231,20 @@
       "engines": {
         "node": ">=8"
       }
+    },
+    "node_modules/wrappy": {
+      "version": "1.0.2",
+      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
+      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
+      "dev": true,
+      "license": "ISC"
+    },
+    "node_modules/yallist": {
+      "version": "3.1.1",
+      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
+      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
+      "dev": true,
+      "license": "ISC"
     }
   }
 }
diff --git a/package.json b/package.json
index 2bb0b70..1f05130 100644
--- a/package.json
+++ b/package.json
@@ -12,6 +12,11 @@
     "rag:compare": "tsx src/cli/index.ts compare",
     "rag:report": "tsx src/cli/index.ts report",
     "demo": "tsx src/cli/index.ts demo",
+    "dashboard": "tsx src/server/dashboardServer.ts",
+    "dashboard:smoke": "tsx src/server/smokeDashboard.ts",
+    "dev": "vite --host 127.0.0.1",
+    "dashboard:build": "vite build",
+    "ci:rag": "tsx src/ci/ragGate.ts",
     "lint": "tsc --noEmit",
     "test": "vitest run tests",
     "build": "tsc"
@@ -28,8 +33,17 @@
   },
   "devDependencies": {
     "@types/node": "^24.10.1",
+    "@types/express": "^5.0.6",
+    "@types/react": "^19.2.7",
+    "@types/react-dom": "^19.2.3",
+    "@vitejs/plugin-react": "^5.1.1",
+    "express": "^5.2.1",
+    "lucide-react": "^0.556.0",
+    "react": "^19.2.3",
+    "react-dom": "^19.2.3",
     "tsx": "^4.20.6",
     "typescript": "^5.9.3",
+    "vite": "^7.2.7",
     "vitest": "^4.0.14"
   }
 }
diff --git a/src/demo/runDemo.ts b/src/demo/runDemo.ts
index a18fdde..e3c1c1f 100644
--- a/src/demo/runDemo.ts
+++ b/src/demo/runDemo.ts
@@ -58,14 +58,20 @@ export async function runDemo(options: {
     changedFiles: [
       "package.json",
       "tsconfig.json",
+      "vite.config.ts",
+      "index.html",
       "data/demo-suite.json",
       "src/core/*",
+      "src/ci/ragGate.ts",
       "src/cli/index.ts",
+      "src/dashboard/*",
       "src/demo/runDemo.ts",
       "src/ledger/agentRunLedger.ts",
+      "src/server/*",
       "tests/*",
       "README.md",
-      ".gitignore"
+      ".gitignore",
+      "rag-provider.config.example.json"
     ],
     passedCommands: [
       "npm.cmd install",
@@ -73,7 +79,9 @@ export async function runDemo(options: {
       "npm.cmd run lint",
       "npm.cmd run test",
       "npm.cmd run build",
-      "npm.cmd run demo"
+      "npm.cmd run demo",
+      "npm.cmd run dashboard:build",
+      "npm.cmd run ci:rag"
     ],
     failedCommands: [],
     unresolvedIssues: []
diff --git a/src/ledger/agentRunLedger.ts b/src/ledger/agentRunLedger.ts
index 90b61fc..cfacb88 100644
--- a/src/ledger/agentRunLedger.ts
+++ b/src/ledger/agentRunLedger.ts
@@ -45,7 +45,7 @@ Last updated: ${new Date().toISOString()}
 
 ## What Was Built
 
-RAG Regression Lab is implemented as a local-first TypeScript CLI. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, and updates AgentRun Ledger artifacts.
+RAG Regression Lab is implemented as a local-first TypeScript CLI plus a Material-inspired web dashboard. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, exposes dashboard data APIs, and updates AgentRun Ledger artifacts.
 
 ## Latest Run
 
@@ -67,10 +67,22 @@ ${options.passedCommands.length > 0 ? options.passedCommands.map((command) => `-
 
 ${options.failedCommands.length > 0 ? options.failedCommands.map((command) => `- \`${command}\``).join("\n") : "- None recorded."}
 
+## Dashboard And Commands Added
+
+- \`npm.cmd run dashboard\` starts the local Express dashboard server.
+- \`npm.cmd run dev\` starts Vite for frontend development with \`/api\` proxied to the dashboard server.
+- \`npm.cmd run dashboard:build\` builds the React dashboard into \`dist-dashboard/\`.
+- \`npm.cmd run ci:rag\` runs the demo-friendly regression gate.
+
 ## Unresolved Issues
 
 ${options.unresolvedIssues.length > 0 ? options.unresolvedIssues.map((issue) => `- ${issue}`).join("\n") : "- None known."}
 
+## Known Limitations
+
+- Real OpenAI and Groq providers are represented by validated config stubs only; the default offline provider is the working implementation.
+- The dashboard reads local generated artifacts and is intended for local portfolio/demo use, not multi-user hosting.
+
 ## Important Files Changed
 
 ${options.changedFiles.map((file) => `- ${file}`).join("\n")}
@@ -80,7 +92,7 @@ ${options.changedFiles.map((file) => `- ${file}`).join("\n")}
 1. Re-read \`rag-regression-lab-codex-task.md\`.
 2. Read the \`agent-recipes/\` files and follow the matching recipe for the next work type.
 3. Inspect \`agentrun-ledger/latest-run.md\` and \`agentrun-ledger/latest-run.json\`.
-4. Run \`npm.cmd run test\`, \`npm.cmd run build\`, and \`npm.cmd run demo\`.
+4. Run \`npm.cmd run test\`, \`npm.cmd run build\`, \`npm.cmd run dashboard:build\`, \`npm.cmd run demo\`, and \`npm.cmd run ci:rag\`.
 5. Continue from the first failing requirement or validation command.
 `;
 }
diff --git a/tsconfig.json b/tsconfig.json
index fd42e68..1f69c23 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -4,6 +4,7 @@
     "module": "NodeNext",
     "moduleResolution": "NodeNext",
     "strict": true,
+    "jsx": "react-jsx",
     "esModuleInterop": true,
     "forceConsistentCasingInFileNames": true,
     "skipLibCheck": true,
```

</details>
