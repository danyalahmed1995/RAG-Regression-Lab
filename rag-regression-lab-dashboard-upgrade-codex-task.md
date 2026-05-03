# Codex Task Brief: Upgrade RAG Regression Lab With Dashboard + Product Evolution

You are Codex working inside the `RAG Regression Lab` repository.

The project already runs successfully with:

```bash
npm install
npm run demo
```

The current CLI demo generates:

- `reports/rag-regression-report-<run_id>.md`
- `reports/rag-regression-report-<run_id>.json`
- `agentrun-ledger/latest-run.md`
- `agentrun-ledger/latest-run.json`
- `agentrun-ledger/recovery-context.md`

Your mission is to upgrade this project from a CLI-only tool into a polished portfolio-grade product with a dashboard, while preserving the existing deterministic offline demo.

Do not break the current CLI workflow.

---

## 0. Important Existing Context

This project is called:

```text
RAG Regression Lab
```

It is a local-first evaluation harness for RAG apps.

It runs the same question set against different RAG configs, scores outputs, detects regressions, and exports human-readable and machine-readable reports.

The existing default demo uses:

```text
baseline: top_k=3
candidate: top_k=1
```

The weaker candidate is intentional because it demonstrates regression detection.

Keep that behavior.

---

## 1. Read Project Guidance First

Before changing code, inspect the repo.

Run:

```bash
pwd
ls -la
find . -maxdepth 3 -type f | sed 's#^\./##' | sort | head -250
```

Then read:

```text
README.md
package.json
src/
tests/
data/demo-suite.json
agentrun-ledger/recovery-context.md
agentrun-ledger/latest-run.md
```

If present, also read:

```text
agent-recipes/
  planning-session.md
  feature-implementation.md
  bug-fix-session.md
  refactor-session.md
  test-and-validation.md
  documentation-update.md
  recovery-after-reset.md
```

Use the relevant recipe before planning, implementation, testing, documentation, and recovery updates.

---

## 2. Core Goal

Add a **Material-inspired web dashboard** similar in spirit to the AgentRun Ledger dashboard style.

The dashboard should make the project understandable visually.

The dashboard should let a developer open the app and immediately see:

- latest RAG regression result
- pass/fail count
- regression count
- average score
- baseline vs candidate comparison
- table of test cases
- detail view for each test case
- report links or report content
- AgentRun Ledger summary
- recovery context viewer

This dashboard should make the project feel like a product, not only a CLI utility.

---

## 3. Design Direction

Use the same general visual concept as AgentRun Ledger:

- dark navy / blue-gray background
- Material-ish cards
- rounded corners
- soft shadows
- clean spacing
- status badges
- score chips
- readable tables
- modern dashboard layout
- left sidebar or top navigation
- professional portfolio look

Avoid overdesigned neon chaos.

Suggested palette:

```text
background: deep navy / slate
surface: slightly lighter blue-gray
primary: blue / cyan accent
success: green
warning: amber
danger: red
text: white / near-white
muted text: gray-blue
```

If the repo already has a design system, reuse it.

If using React + Vite, plain CSS or lightweight component styling is fine.

Do not add a massive UI library unless it is already used or truly helpful. A custom Material-inspired design is acceptable.

---

## 4. Dashboard Functional Requirements

### 4.1 Dashboard Home

Create a dashboard home page that reads the latest available generated data and displays:

Cards:

- Latest run id
- Suite name
- Total tests
- Passed
- Failed
- Regressed
- Improved
- Average overall score

Also show:

- latest report path
- latest ledger path
- timestamp
- baseline config
- candidate config

If no report exists, show a friendly empty state:

```text
No runs found yet. Run npm run demo to generate your first regression report.
```

### 4.2 Regression Table

Create a table with one row per test case.

Columns:

- test id
- question
- baseline score
- candidate score
- delta
- status
- pass/fail
- tags

Use clear visual badges:

- Regressed
- Improved
- Unchanged
- Newly Passing
- Newly Failing
- Passed
- Failed

Rows should be clickable.

### 4.3 Test Detail Panel

When a row is clicked, show a detail panel or right-side drawer.

It should display:

- question
- expected facts
- generated answer
- retrieved context snippets
- baseline scores
- candidate scores
- metric breakdown
- regression explanation
- tags / difficulty

This is the most important screen for explaining why a RAG result failed.

### 4.4 Report Viewer

Add a section/page for reports.

It should show:

- latest Markdown report rendered as readable text, or
- a formatted summary from the latest JSON report

If Markdown rendering is too much, plain preformatted Markdown text is acceptable for v1.

### 4.5 AgentRun Ledger Viewer

Add a section/page for AgentRun Ledger.

It should show:

- latest-run summary
- recovery-context content
- important generated file paths
- last validation commands if available

This is a unique differentiator. Do not skip it.

### 4.6 Run Demo Button

Add a UI button:

```text
Run Demo
```

Clicking it should trigger the existing demo pipeline if the stack supports a local server/API.

If implementing this is too intrusive, create a clear UI instruction card:

```text
Run this command in your terminal:
npm run demo
```

Prefer actually wiring a local API endpoint/Node server command if practical, but do not break the existing CLI.

### 4.7 Data Refresh

Add a refresh button that reloads latest report/ledger data.

---

## 5. Architecture Requirements

Pick the least disruptive implementation.

If the repo is currently TypeScript/Node CLI, add a lightweight frontend.

Preferred options:

### Option A: Vite React Dashboard

Add:

```text
src/dashboard/
  App.tsx
  main.tsx
  components/
  styles.css
```

Add Vite config if missing.

Use a small local server/API or pre-generated public JSON files.

Possible commands:

```bash
npm run dashboard
npm run dashboard:build
```

### Option B: Express + Static Dashboard

If easier, create:

```text
src/server/
  dashboardServer.ts
```

Serve a static dashboard and expose endpoints like:

```text
GET /api/latest-report
GET /api/latest-ledger
POST /api/run-demo
```

Commands:

```bash
npm run dev
npm run dashboard
```

Choose the cleanest route based on current repo.

---

## 6. API / Data Loading Requirements

The dashboard must be able to read from:

```text
reports/*.json
agentrun-ledger/latest-run.json
agentrun-ledger/latest-run.md
agentrun-ledger/recovery-context.md
```

Implement helper functions for:

- finding latest report JSON
- loading latest ledger JSON
- reading Markdown files
- returning an empty-state response if missing

Do not hardcode one exact timestamped filename.

---

## 7. Next Evolution Update 1: Real Provider Toggle

Add optional config support for real providers, but keep offline as default.

The project should support:

```text
provider: offline
provider: openai
provider: groq
```

Do not require API keys for the default demo.

Use environment variables only when a real provider is selected:

```text
OPENAI_API_KEY
GROQ_API_KEY
```

Add a config file or documented JSON shape like:

```json
{
  "provider": "offline",
  "model": "mock-extractive",
  "retriever": "keyword",
  "topK": 3
}
```

If full real API implementation is too much, add clean provider interfaces and stubbed implementations with clear TODOs only for real network calls.

However, the offline provider must remain fully working.

Do not fake real LLM outputs.

---

## 8. Next Evolution Update 2: CI Regression Gate

Add a CI-friendly command that fails if regression thresholds are exceeded.

Example command:

```bash
npm run ci:rag
```

This command should:

1. Run the demo or a configured regression check.
2. Load comparison result.
3. Fail with non-zero exit code if:
   - regression count > allowed threshold
   - average score < minimum threshold
   - newly failing count > allowed threshold

Defaults:

```text
maxRegressions: 0
minAverageOverall: 0.72
maxNewlyFailing: 0
```

But because the current demo intentionally creates regressions, provide a demo-friendly config and a strict CI config.

For example:

```bash
npm run demo
npm run ci:rag
```

`ci:rag` can use a safer baseline/candidate config or allow thresholds from config/env.

Add environment overrides:

```text
RAG_MAX_REGRESSIONS
RAG_MIN_AVERAGE_OVERALL
RAG_MAX_NEWLY_FAILING
```

Document this clearly.

---

## 9. Next Evolution Update 3: Historical Runs

Add basic historical run browsing support.

The dashboard should list available run JSON files from:

```text
agentrun-ledger/runs/
reports/
```

At minimum:

- list run ids
- timestamp
- average score
- regression count
- report path

Clicking a run should load its details if practical.

If full historical browsing is too large, implement backend helpers and a basic list.

---

## 10. Next Evolution Update 4: README Polish

Update `README.md` to include the new dashboard.

Add:

- dashboard screenshot placeholder
- how to run dashboard
- how to run demo
- how to refresh data
- explanation of the intentional candidate regression
- explanation of provider modes
- explanation of CI regression gate
- explanation of AgentRun Ledger viewer

Make the README GitHub-ready.

Suggested sections:

```md
## Dashboard
## Running The Demo
## Running The Dashboard
## CI Regression Gate
## Provider Modes
## AgentRun Ledger Viewer
```

---

## 11. CLI Command Requirements

Preserve existing commands.

Add appropriate commands depending on implementation.

Suggested package scripts:

```json
{
  "demo": "...",
  "test": "...",
  "build": "...",
  "lint": "...",
  "dashboard": "...",
  "dashboard:build": "...",
  "dev": "...",
  "ci:rag": "..."
}
```

If this repo uses `tsx`, use that consistently.

Ensure Windows compatibility.

---

## 12. Testing Requirements

Add or update tests for:

- latest report discovery
- latest ledger loading
- empty-state data loading
- CI regression gate pass/fail behavior
- provider config parsing
- dashboard data adapter
- existing metrics/comparison still pass

If UI tests are too heavy, test the data adapter and API endpoints instead.

Do not skip all testing.

---

## 13. Self-Test And Fix Loop

After implementation, run:

```bash
npm install
npm run test
npm run build
npm run demo
```

Then run whichever dashboard commands exist:

```bash
npm run dashboard:build
```

or:

```bash
npm run build
```

Then run:

```bash
npm run ci:rag
```

If `ci:rag` intentionally fails because demo config creates regressions, adjust the CI command/config so the default command demonstrates valid behavior and strict behavior is documented separately.

Important:

- Do not leave failing default commands.
- Do not claim success while tests/build fail.
- Fix until green.

---

## 14. AgentRun Ledger Update Requirement

After completing the upgrade, update:

```text
agentrun-ledger/recovery-context.md
agentrun-ledger/latest-run.md
agentrun-ledger/latest-run.json
```

The recovery context must mention:

- dashboard added
- commands added
- files changed
- validation results
- known limitations
- how future agents continue

If the project has an AgentRun logging utility, use it.

---

## 15. Git Hygiene

Before finishing, run:

```bash
git status --short
```

Do not commit unless explicitly asked.

Make sure generated noisy files are ignored where appropriate.

Do not ignore source dashboard files.

Generated report files may stay ignored.

Keep sample files if useful.

---

## 16. Completion Criteria

You are done only when:

- existing CLI demo still works
- dashboard exists
- dashboard can show latest run/report/ledger data
- dashboard has Material-inspired dark UI
- regression table exists
- test detail view exists
- report/ledger viewer exists
- data refresh or reload works
- provider mode config exists
- offline mode remains default and working
- CI regression gate command exists
- README is updated
- tests pass
- build passes
- demo passes
- dashboard build passes
- AgentRun Ledger recovery context is updated

---

## 17. Final Response Format

At the end, respond with:

```text
Completed:
- ...

Validation:
- npm run test: passed/failed
- npm run build: passed/failed
- npm run demo: passed/failed
- npm run dashboard:build: passed/failed
- npm run ci:rag: passed/failed

Generated / Updated:
- ...

How to run:
- npm run demo
- npm run dashboard

Notes:
- ...
```

---

## 18. Do Not Do These

Do not:

- remove the existing CLI runner
- require OpenAI/Groq keys for demo
- fake real provider results
- hardcode one generated report filename
- turn this into a huge unfinished SaaS
- leave broken dashboard routes
- ignore Windows compatibility
- delete AgentRun Ledger files
- delete `agent-recipes/`
- stop before validation is green

---

## 19. Mental Model

Build this as:

```text
CLI engine + visual dashboard + regression gate + agent memory
```

The dashboard should make the tool understandable in 10 seconds.

The CLI should remain useful for developers.

The ledger should remain useful for future AI agents.

Ship a polished v2.
