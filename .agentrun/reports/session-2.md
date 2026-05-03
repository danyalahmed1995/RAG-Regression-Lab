# AgentRun Report: recipe reconciliation and validation

Final Verdict: ✅ READY
Reason:
- Validation commands passed without logged failures

Session Score: 10/10

Score breakdown:
- ✅ No score penalties

## Top summary

- Commands: 9
- Failed commands: 0
- Retries: 4
- Validation status: performed

## Session metadata

- Session: #2
- Status: completed
- Started: 2026-05-03 14:51:05.399Z
- Ended: 2026-05-03 14:52:17.369Z
- Duration: 1 minute 12 seconds
- Repository: D:\AI Work\RAG Regression Lab
- Branch: main
- Start commit: 0f6767e1a4f0475716e14defc6352bec04461f40

## Goal

recipe reconciliation and validation

## Summary

- Changed files: 43
- File tracking: compared to HEAD; untracked files are included.
- Commands logged: 9
- Passed commands: 9
- Failed commands: 0
- Many untracked files detected. Commit your project baseline to make future sessions cleaner.



## Retry insights

- `npm.cmd run build` was retried 3 times without failures.
- `npm.cmd run demo` was retried 3 times without failures.

## Files changed

### Modified

- 🟢 .gitignore (modified)
- 🟢 README.md (modified)

### Added / Untracked

- 🟡 .agentrun/agentrun.db (untracked)
- 🟡 .agentrun/reports/session-1.md (untracked)
- 🟡 .agentrun/reports/session-2.md (untracked)
- 🟡 PLANNING.md (untracked)
- 🟡 TASKS.md (untracked)
- 🟡 agent-recipes/bug-fix-session.md (untracked)
- 🟡 agent-recipes/documentation-update.md (untracked)
- 🟡 agent-recipes/feature-implementation.md (untracked)
- 🟡 agent-recipes/planning-session.md (untracked)
- 🟡 agent-recipes/recovery-after-reset.md (untracked)
- 🟡 agent-recipes/refactor-session.md (untracked)
- 🟡 agent-recipes/test-and-validation.md (untracked)
- 🟡 agentrun-ledger/latest-run.json (untracked)
- 🟡 agentrun-ledger/latest-run.md (untracked)
- 🟡 agentrun-ledger/recovery-context.md (untracked)
- 🟡 agentrun-ledger/runs/.gitkeep (untracked)
- 🟡 data/demo-suite.json (untracked)
- 🟡 package-lock.json (untracked)
- 🟡 package.json (untracked)
- 🟡 rag-regression-lab-codex-task.md (untracked)
- 🟡 reports/.gitkeep (untracked)
- 🟡 src/cli/index.ts (untracked)
- 🟡 src/core/comparator.ts (untracked)
- 🟡 src/core/generator.ts (untracked)
- 🟡 src/core/metrics.ts (untracked)
- 🟡 src/core/reportWriter.ts (untracked)
- 🟡 src/core/retriever.ts (untracked)
- 🟡 src/core/runner.ts (untracked)
- 🟡 src/core/suiteLoader.ts (untracked)
- 🟡 src/core/text.ts (untracked)
- 🟡 src/core/types.ts (untracked)
- 🟡 src/demo/runDemo.ts (untracked)
- 🟡 src/ledger/agentRunLedger.ts (untracked)
- 🟡 tests/agentRunLedger.test.ts (untracked)
- 🟡 tests/comparator.test.ts (untracked)
- 🟡 tests/metrics.test.ts (untracked)
- 🟡 tests/reportWriter.test.ts (untracked)
- 🟡 tests/retriever.test.ts (untracked)
- 🟡 tests/suiteLoader.test.ts (untracked)
- 🟡 tsconfig.json (untracked)
- 🟡 vitest.config.ts (untracked)

## Command timeline

### Attempt 1 - git status --short

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 111ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:11.628Z
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
M .gitignore
 M README.md
?? .agentrun/
?? PLANNING.md
?? TASKS.md
?? agent-recipes/
?? agentrun-ledger/
?? data/
?? package-lock.json
?? package.json
?? rag-regression-lab-codex-task.md
?? reports/
?? src/
?? tests/
?? tsconfig.json
?? vitest.config.ts
```

### Attempt 1 - npm.cmd run lint

- Type: lint
- Status: PASSED
- Exit code: 0
- Duration: 1082ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:15.503Z
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
> rag-regression-lab@0.1.0 lint
> tsc --noEmit
```

### Attempt 1 - npm.cmd run test

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 976ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:19.626Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: 6
- failed_tests: unknown
- keywords: none

Insight:
Command completed successfully.

```txt
> rag-regression-lab@0.1.0 test
> vitest run tests


 RUN  v4.1.5 D:/AI Work/RAG Regression Lab


 Test Files  6 passed (6)
      Tests  12 passed (12)
   Start at  19:51:20
   Duration  308ms (transform 179ms, setup 0ms, import 340ms, tests 120ms, environment 1ms)
```

### Attempt 1 - npm.cmd run build

- Type: custom
- Status: PASSED
- Exit code: 0
- Duration: 1037ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:23.499Z
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
- Duration: 622ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:27.691Z
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
Run: candidate-keyword-top1-2026-05-03T14-51-28-253Z-019da887
Suite: SaaS Help Center Demo Suite
Passed: 6/8
Failed: 2
Regressed: 7
Improved: 0
Average overall: 0.7476
Report: reports\rag-regression-report-candidate-keyword-top1-2026-05-03T14-51-28-253Z-019da887.md
Ledger markdown: agentrun-ledger\latest-run.md
Ledger JSON: agentrun-ledger\latest-run.json
Recovery context: agentrun-ledger\recovery-context.md
```

### Attempt 2 - npm.cmd run build

- Type: custom
- Status: FAILED -> PASSED
- Exit code: 0
- Duration: 1046ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:36.335Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: unknown
- failed_tests: unknown
- keywords: none

Insight:
Agent resolved the issue after 2 attempts.

```txt
> rag-regression-lab@0.1.0 build
> tsc
```

### Attempt 2 - npm.cmd run demo

- Type: custom
- Status: FAILED -> PASSED
- Exit code: 0
- Duration: 644ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:51:40.282Z
- Failure reason: none

Output summary:
- has_errors: true
- has_warnings: false
- passed_tests: 6
- failed_tests: 8
- keywords: failed

Insight:
Agent resolved the issue after 2 attempts.

```txt
> rag-regression-lab@0.1.0 demo
> tsx src/cli/index.ts demo

RAG Regression Lab demo complete.
Run: candidate-keyword-top1-2026-05-03T14-51-40-864Z-27ce76bc
Suite: SaaS Help Center Demo Suite
Passed: 6/8
Failed: 2
Regressed: 7
Improved: 0
Average overall: 0.7476
Report: reports\rag-regression-report-candidate-keyword-top1-2026-05-03T14-51-40-864Z-27ce76bc.md
Ledger markdown: agentrun-ledger\latest-run.md
Ledger JSON: agentrun-ledger\latest-run.json
Recovery context: agentrun-ledger\recovery-context.md
```

### Attempt 3 - npm.cmd run build

- Type: custom
- Status: FAILED -> PASSED
- Exit code: 0
- Duration: 1075ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:52:07.164Z
- Failure reason: none

Output summary:
- has_errors: false
- has_warnings: false
- passed_tests: unknown
- failed_tests: unknown
- keywords: none

Insight:
Agent resolved the issue after 3 attempts.

```txt
> rag-regression-lab@0.1.0 build
> tsc
```

### Attempt 3 - npm.cmd run demo

- Type: custom
- Status: FAILED -> PASSED
- Exit code: 0
- Duration: 659ms
- CWD: D:\AI Work\RAG Regression Lab
- Branch: main
- Commit: 0f6767e1a4f0475716e14defc6352bec04461f40
- Started: 2026-05-03 14:52:10.980Z
- Failure reason: none

Output summary:
- has_errors: true
- has_warnings: false
- passed_tests: 6
- failed_tests: 8
- keywords: failed

Insight:
Agent resolved the issue after 3 attempts.

```txt
> rag-regression-lab@0.1.0 demo
> tsx src/cli/index.ts demo

RAG Regression Lab demo complete.
Run: candidate-keyword-top1-2026-05-03T14-52-11-573Z-5e9efc58
Suite: SaaS Help Center Demo Suite
Passed: 6/8
Failed: 2
Regressed: 7
Improved: 0
Average overall: 0.7476
Report: reports\rag-regression-report-candidate-keyword-top1-2026-05-03T14-52-11-573Z-5e9efc58.md
Ledger markdown: agentrun-ledger\latest-run.md
Ledger JSON: agentrun-ledger\latest-run.json
Recovery context: agentrun-ledger\recovery-context.md
```

## Failed commands

_No failed commands._

## Passed commands

- `git status --short` - exit 0, 111ms
- `npm.cmd run lint` - exit 0, 1082ms
- `npm.cmd run test` - exit 0, 976ms
- `npm.cmd run build` - exit 0, 1037ms
- `npm.cmd run demo` - exit 0, 622ms
- `npm.cmd run build` - exit 0, 1046ms
- `npm.cmd run demo` - exit 0, 644ms
- `npm.cmd run build` - exit 0, 1075ms
- `npm.cmd run demo` - exit 0, 659ms

## Git name status

```txt
M	.gitignore
M	README.md
```

## Human notes

- 2026-05-03 14:51:08.855Z: Read agent-recipes planning, feature implementation, test validation, bug fix, docs update, refactor, and recovery instructions; reconciling completed project work with recipe logs.
- 2026-05-03 14:51:44.193Z: Recipe reconciliation complete: added PLANNING.md and TASKS.md, updated AgentRun recovery context, validated lint/test/build/demo through AgentRun.
- 2026-05-03 14:52:14.704Z: Final recovery context regenerated after agent-recipes were added; no unresolved recipe issue remains.

## Review risks

- **WARNING: Large change surface** - 43 files changed. Consider reviewing by subsystem and checking for unrelated edits.
- **WARNING: Dependency/config changes** - Package, lockfile, TypeScript, Vite, environment, or GitHub config files changed.
- **DANGER: Sensitive logic changed** - The changed files or diff mention auth, payment, Firebase, database, credentials, or similar sensitive areas.

## Suggested follow-up

Review the changed files and keep the report with the pull request or commit notes.

## Final raw diff

<details>
<summary>Show raw diff</summary>

```txt
diff --git a/.gitignore b/.gitignore
index 1170717..b7d4bcc 100644
--- a/.gitignore
+++ b/.gitignore
@@ -91,6 +91,14 @@ out
 .nuxt
 dist
 
+# RAG Regression Lab generated output
+reports/*.json
+reports/*.md
+!reports/.gitkeep
+agentrun-ledger/runs/*.json
+agentrun-ledger/runs/*.md
+!agentrun-ledger/runs/.gitkeep
+
 # Gatsby files
 .cache/
 # Comment in the public line in if your project uses Gatsby and not Next.js
diff --git a/README.md b/README.md
index 3c759d9..ef57536 100644
--- a/README.md
+++ b/README.md
@@ -1,2 +1,138 @@
 # RAG Regression Lab
-RAG Regression Lab is a local-first testing dashboard for RAG and AI extraction systems. It helps developers validate answer accuracy, source grounding, hallucination risk, and prompt/model regressions using golden test cases and run comparisons.
+
+RAG Regression Lab is a local-first evaluation harness for RAG apps. It lets you run the same question set against different retrieval/generation configs, score the outputs, detect regressions, and export reports that humans and AI agents can both understand.
+
+RAG apps often break silently. A prompt, chunking, embedding, or retrieval change can improve one answer and damage another. This project makes those quality changes visible before they reach users.
+
+## Features
+
+- Demo SaaS help-center suite with 8 golden test cases.
+- Deterministic offline RAG runner: keyword retrieval plus extractive generation.
+- Transparent heuristic metrics: expected fact coverage, faithfulness, context precision, answer similarity, and weighted overall score.
+- Baseline-vs-candidate comparison with regression, improvement, newly failing, and newly passing statuses.
+- Markdown and JSON report export.
+- AgentRun Ledger output for agent-readable recovery after resets.
+- Vitest coverage for core loading, retrieval, scoring, comparison, reports, and ledger writing.
+
+## Architecture
+
+```mermaid
+flowchart LR
+  A["Test Suite JSON"] --> B["RAG Config"]
+  B --> C["Run Evaluation"]
+  C --> D["Score Results"]
+  D --> E["Compare With Baseline"]
+  E --> F["Markdown + JSON Reports"]
+  E --> G["AgentRun Ledger"]
+```
+
+## Quick Start
+
+```bash
+npm install
+npm run demo
+```
+
+On Windows PowerShell with restricted script execution, use `npm.cmd`:
+
+```powershell
+npm.cmd install
+npm.cmd run demo
+```
+
+The demo command loads `data/demo-suite.json`, runs a baseline config with `top_k=3`, runs a candidate config with `top_k=1`, compares them, writes reports, and updates the AgentRun Ledger.
+
+## CLI Commands
+
+```bash
+npm run seed
+npm run rag:run
+npm run rag:compare -- --baseline <baseline.json> --candidate <candidate.json>
+npm run rag:report -- --run <run.json>
+npm run test
+npm run lint
+npm run build
+npm run demo
+```
+
+## Sample Output
+
+```text
+RAG Regression Lab demo complete.
+Run: candidate-keyword-top1-...
+Suite: SaaS Help Center Demo Suite
+Passed: 6/8
+Failed: 2
+Regressed: 7
+Improved: 0
+Report: reports/rag-regression-report-<run_id>.md
+Ledger markdown: agentrun-ledger/latest-run.md
+```
+
+The candidate intentionally retrieves fewer snippets, so it can miss facts that are spread across documents. The regression report is produced by the scoring logic rather than by hardcoded failures.
+
+## How Scoring Works
+
+Text is normalized by lowercasing, removing punctuation, collapsing whitespace, and dropping common stopwords for token overlap. Metrics are deterministic and bounded between 0 and 1.
+
+- `expectedFactCoverage`: average expected fact coverage in the generated answer, with exact normalized phrase matches or token-overlap credit.
+- `contextPrecision`: share of retrieved snippets that contain or strongly overlap with expected facts.
+- `faithfulness`: share of answer claims supported by retrieved context.
+- `answerSimilarity`: token overlap between expected facts and generated answer.
+- `overallScore`: `0.40 * expectedFactCoverage + 0.25 * faithfulness + 0.20 * contextPrecision + 0.15 * answerSimilarity`.
+
+A candidate test regresses when its overall score is more than `0.10` below the baseline. Passing uses a default overall threshold of `0.72`.
+
+## AgentRun Ledger
+
+Every demo run updates:
+
+- `agentrun-ledger/latest-run.md`
+- `agentrun-ledger/latest-run.json`
+- `agentrun-ledger/recovery-context.md`
+- `agentrun-ledger/runs/<run_id>.md`
+- `agentrun-ledger/runs/<run_id>.json`
+
+The JSON file is machine-readable and includes run metadata, config details, per-test retrieved context, generated answer, scores, pass/fail status, regression status, and summary metrics. The Markdown file is designed for humans. The recovery context tells a future agent what was built, what commands passed or failed, known issues, important files, and how to continue.
+
+## Reports
+
+Reports are written to:
+
+```text
+reports/rag-regression-report-<run_id>.md
+reports/rag-regression-report-<run_id>.json
+```
+
+Generated report files are ignored by git to keep the repo clean, while `.gitkeep` files preserve the directories.
+
+## Project Structure
+
+```text
+data/demo-suite.json              Demo golden test suite
+src/cli/index.ts                  CLI entrypoint
+src/core/                         RAG runner, metrics, comparison, reports
+src/demo/runDemo.ts               Full offline demo pipeline
+src/ledger/agentRunLedger.ts      AgentRun Ledger integration
+tests/                            Vitest test suite
+reports/                          Generated reports
+agentrun-ledger/                  Latest run and recovery context
+```
+
+## Recovery After Agent Reset
+
+1. Read `rag-regression-lab-codex-task.md`.
+2. Read `agentrun-ledger/recovery-context.md`.
+3. Inspect `agentrun-ledger/latest-run.md` and `agentrun-ledger/latest-run.json`.
+4. Run `npm.cmd run test`, `npm.cmd run build`, and `npm.cmd run demo`.
+5. Continue from the first failing command or incomplete requirement.
+
+The task brief references an `agent-recipes/` directory, but that folder was not present in this checkout when this implementation started.
+
+## Roadmap
+
+- Add a small web dashboard for suite and run browsing.
+- Add SQLite persistence for historical run search.
+- Add pluggable embedding and LLM providers behind the offline default.
+- Add per-tag score trend reports.
+- Add CI workflow examples for regression gates.
```

</details>
