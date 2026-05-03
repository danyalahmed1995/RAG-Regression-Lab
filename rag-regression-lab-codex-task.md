# Codex Task Brief: Build RAG Regression Lab

You are Codex working inside the `RAG Regression Lab` repository.

Your mission is to build a complete, working portfolio-grade project called **RAG Regression Lab** and integrate it with the existing **AgentRun Ledger** workflow. The user has copied an `agent-recipes/` folder into this repo. You must read it and use the appropriate recipe style for this task.

Do not only make surface-level changes. Build, test, fix, document, and leave the repo in a clean state.

---

## 0. Project Goal

Build **RAG Regression Lab**, a developer tool for testing whether changes to a RAG pipeline make answer quality better, worse, or unstable.

The app should let a user:

1. Create or load a regression test suite.
2. Add test cases with:
   - question
   - expected answer / expected facts
   - source documents or source snippets
   - optional tags
   - optional difficulty
3. Run one or more RAG pipeline configurations against the suite.
4. Score each result using practical metrics.
5. Detect regressions between a baseline run and a new run.
6. Generate a human-readable report.
7. Persist enough run logs so an AI agent can resume after a reset.

This project is intended for GitHub portfolio use, so the final repo should feel polished, explainable, and demo-friendly.

---

## 1. Before Doing Anything: Inspect The Repo

First inspect the current repository structure.

Run commands similar to:

```bash
pwd
ls -la
find . -maxdepth 3 -type f | sed 's#^\./##' | sort | head -200
```

Look for:

- existing package manager
- frontend/backend framework
- existing README
- existing tests
- existing `agent-recipes/`
- existing AgentRun Ledger files
- existing `package.json`, `pyproject.toml`, `requirements.txt`, `vite.config.*`, `next.config.*`, etc.

Do not assume a stack blindly if one already exists.

---

## 2. Read The Agent Recipes

The repo contains:

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

Read these files first.

Use them like this:

- `planning-session.md` before deciding implementation steps.
- `feature-implementation.md` while building the main project.
- `bug-fix-session.md` whenever a test/build/runtime failure appears.
- `test-and-validation.md` before considering the task complete.
- `documentation-update.md` before editing README or docs.
- `recovery-after-reset.md` when writing resumable context logs.

If any recipe conflicts with this task brief, follow this task brief first, then preserve the spirit of the recipe.

---

## 3. AgentRun Ledger Integration Requirement

This repo must integrate with the AgentRun Ledger concept we built.

The app/tool must generate an agent-readable ledger report after every major run.

Create or update a directory like:

```text
agentrun-ledger/
  runs/
  latest-run.md
  latest-run.json
  recovery-context.md
```

If the project already has a ledger folder, reuse it instead of duplicating.

Each test run should write enough information for an agent to resume after a session reset.

The ledger should include:

```text
Run metadata:
- run_id
- timestamp
- app version if available
- git branch if available
- git commit hash if available
- command used
- environment summary
- dataset/test suite path
- baseline run id if comparing
- model/provider/config name if mocked or real
- embedding config if mocked or real
- retriever config
- top_k
- scoring config

Per test case:
- test_id
- question
- expected answer/facts
- retrieved context ids/snippets
- generated answer
- metric scores
- pass/fail
- regression status
- error if any

Summary:
- total tests
- passed
- failed
- regressed
- improved
- unchanged
- average faithfulness score
- average answer similarity score
- average context precision score
- average latency if measured
- important failures
- next recommended debugging steps
```

The JSON file should be machine-readable.

The Markdown file should be human-readable.

The recovery context should be optimized for future Codex sessions. It should summarize:

- what was built
- what commands passed
- what commands failed
- unresolved issues
- important files changed
- how to continue

---

## 4. Functional Product Requirements

Build the product around this core flow:

```text
Test Suite -> RAG Config -> Run Evaluation -> Compare With Baseline -> Report Regression
```

The app may be CLI-first, web-first, or both depending on the existing repo.

If the repo is empty or nearly empty, prefer this practical portfolio stack:

```text
Next.js or Vite React frontend
Node/TypeScript backend or local API routes
SQLite or local JSON storage
Vitest/Jest for tests
```

If the repo already uses Python, prefer:

```text
FastAPI
SQLite / JSON storage
Pytest
Simple React frontend optional
```

Do not over-engineer.

The project must be runnable locally by a normal developer.

---

## 5. Suggested Features

Implement the strongest feasible version based on the existing repo.

### 5.1 Dashboard

A dashboard should show:

- total test suites
- total test cases
- latest run result
- pass rate
- regression count
- latest report link/file path

### 5.2 Test Suite Management

Users should be able to create or edit a test suite.

At minimum support a seed/demo suite stored in the repo.

Example test case shape:

```json
{
  "id": "refund-policy-001",
  "question": "What is the refund window?",
  "expectedFacts": [
    "Refunds are available within 30 days",
    "The item must be unused"
  ],
  "documents": [
    {
      "id": "policy-doc-1",
      "title": "Refund Policy",
      "content": "Customers can request a refund within 30 days if the item is unused."
    }
  ],
  "tags": ["policy", "refund"],
  "difficulty": "easy"
}
```

### 5.3 RAG Runner

The runner does not need expensive real LLM calls by default.

Implement a deterministic local/mock RAG runner that can work offline.

It should:

1. Index or scan the documents.
2. Retrieve relevant snippets for each question.
3. Generate a deterministic answer from retrieved content.
4. Return answer + retrieved context + metadata.

Optional real provider integration is okay, but the default demo must work without API keys.

### 5.4 Metrics

Implement practical scoring metrics.

At minimum:

- `answerSimilarity`
- `expectedFactCoverage`
- `contextPrecision`
- `faithfulness`
- `overallScore`

These can be deterministic heuristic scores.

Example:

- expected fact coverage = number of expected facts found or semantically approximated in generated answer / total expected facts
- context precision = how many retrieved snippets contain expected facts
- faithfulness = whether answer claims are supported by retrieved context
- answer similarity = normalized token overlap between expected facts and answer

Do not fake results. Make the heuristics simple, transparent, and documented.

### 5.5 Regression Detection

Support comparing a new run against a baseline run.

A test is regressed if:

```text
new overallScore < baseline overallScore - threshold
```

Use a default threshold like `0.10`.

Also detect:

- improved
- unchanged
- newly failing
- newly passing

### 5.6 Report Export

Generate report files:

```text
reports/
  rag-regression-report-<run_id>.md
  rag-regression-report-<run_id>.json
```

The Markdown report should include:

- title
- timestamp
- suite name
- config summary
- score summary
- regression summary
- table of failed/regressed tests
- detailed test breakdown
- recommended next actions

The JSON report should include all structured data.

### 5.7 Demo Data

Add a demo suite so the project works immediately.

Suggested domain: SaaS help center docs.

Include test cases for:

- refund policy
- password reset
- account deletion
- subscription upgrade
- data export
- team invites
- invoice download
- security policy

Create at least 8 test cases.

---

## 6. CLI Requirements

Add CLI commands if the stack supports it.

Example commands:

```bash
npm run seed
npm run rag:run
npm run rag:compare
npm run rag:report
npm run test
npm run lint
npm run build
```

If using Python:

```bash
python -m rag_lab seed
python -m rag_lab run
python -m rag_lab compare
pytest
```

At minimum, there must be one command that runs the full demo pipeline:

```bash
npm run demo
```

or:

```bash
python -m rag_lab demo
```

The demo command should:

1. Load seed suite.
2. Run baseline config.
3. Run candidate config.
4. Compare candidate against baseline.
5. Generate reports.
6. Generate AgentRun Ledger output.
7. Print final summary.

---

## 7. Testing Requirements

You must create meaningful tests.

Include tests for:

- loading/parsing suites
- deterministic retrieval
- scoring expected fact coverage
- scoring context precision
- scoring faithfulness
- regression comparison
- report generation
- AgentRun Ledger output generation

Do not skip tests because "this is just a portfolio project."

---

## 8. Self-Test And Fix Loop

After implementation, run the full validation loop.

Use commands appropriate to the repo.

For Node/TypeScript:

```bash
npm install
npm run lint
npm run test
npm run build
npm run demo
```

For Python:

```bash
python -m pip install -r requirements.txt
pytest
python -m rag_lab demo
```

If any command fails:

1. Read the error carefully.
2. Identify root cause.
3. Fix the code.
4. Re-run the failed command.
5. Continue until all required commands pass.

Do not stop at the first failure.

Do not say the project is complete while tests, build, or demo are failing.

If a command cannot run because of missing external dependency, API key, platform package, or unavailable environment, document it clearly in:

```text
agentrun-ledger/recovery-context.md
```

and make sure the default offline demo still works.

---

## 9. Important Implementation Rules

Follow these rules:

1. Prefer simple deterministic logic over fragile AI calls.
2. Do not require paid APIs for the default demo.
3. Keep reports readable.
4. Keep data files small and committed.
5. Keep generated run files ignored if they will become noisy, except include sample outputs if useful.
6. Make all file paths cross-platform.
7. Do not hardcode absolute local machine paths.
8. Do not leave broken imports.
9. Do not leave TODO comments for core features.
10. Do not remove the `agent-recipes/` folder.
11. Do not break existing functionality.
12. Do not delete user files unless clearly generated and safe.
13. Preserve existing code style when possible.
14. Prefer clear names over clever abstractions.
15. Make the README explain what problem this solves.

---

## 10. Suggested Repository Structure

If starting from a mostly empty repo, use something like:

```text
.
├── agent-recipes/
├── agentrun-ledger/
│   ├── runs/
│   ├── latest-run.md
│   ├── latest-run.json
│   └── recovery-context.md
├── data/
│   └── demo-suite.json
├── reports/
│   └── .gitkeep
├── src/
│   ├── cli/
│   │   └── index.ts
│   ├── core/
│   │   ├── types.ts
│   │   ├── suiteLoader.ts
│   │   ├── retriever.ts
│   │   ├── generator.ts
│   │   ├── metrics.ts
│   │   ├── runner.ts
│   │   ├── comparator.ts
│   │   └── reportWriter.ts
│   ├── ledger/
│   │   └── agentRunLedger.ts
│   └── demo/
│       └── runDemo.ts
├── tests/
│   ├── suiteLoader.test.ts
│   ├── retriever.test.ts
│   ├── metrics.test.ts
│   ├── comparator.test.ts
│   ├── reportWriter.test.ts
│   └── agentRunLedger.test.ts
├── README.md
├── package.json
└── tsconfig.json
```

For Python, adapt the structure.

---

## 11. README Requirements

Update or create `README.md`.

It should include:

- project name
- one-liner
- problem statement
- features
- architecture diagram or simple flow
- quick start
- demo command
- screenshots placeholders or report examples
- sample output
- how regression scoring works
- how AgentRun Ledger works
- how to recover after an agent reset
- project structure
- roadmap

Tone should be polished but not corporate fog.

Explain the tool in a way that a developer, recruiter, or client can understand quickly.

---

## 12. Sample README Positioning

Use this positioning:

> RAG Regression Lab is a local-first evaluation harness for RAG apps. It lets you run the same question set against different retrieval/generation configs, score the outputs, detect regressions, and export reports that humans and AI agents can both understand.

Mention why it matters:

- RAG apps often break silently.
- Prompt, chunking, embedding, or retrieval changes can improve one answer and damage another.
- This tool makes RAG quality changes visible before they reach users.

---

## 13. Git Hygiene

Before finishing, check:

```bash
git status --short
```

Do not commit unless explicitly asked.

Make sure generated junk is ignored where appropriate.

Suggested `.gitignore` entries:

```gitignore
node_modules/
dist/
build/
coverage/
.env
.env.local
reports/*.json
reports/*.md
agentrun-ledger/runs/*.json
agentrun-ledger/runs/*.md
```

But keep `.gitkeep` or sample files if helpful.

Do not ignore source demo data.

---

## 14. Completion Criteria

You are done only when:

- the project has a working offline demo
- demo suite exists
- runner works
- metrics work
- regression comparison works
- reports are generated
- AgentRun Ledger files are generated
- README is updated
- tests are added
- validation commands pass
- `recovery-context.md` summarizes the final state

At the end of your Codex response, include:

```text
Completed:
- ...

Validation:
- npm run test: passed/failed
- npm run build: passed/failed
- npm run demo: passed/failed

Generated:
- reports/...
- agentrun-ledger/latest-run.md
- agentrun-ledger/latest-run.json
- agentrun-ledger/recovery-context.md

Notes:
- ...
```

---

## 15. Important Recovery Behavior

If your session resets or context gets compacted:

1. Read this file again.
2. Read `agent-recipes/recovery-after-reset.md`.
3. Read `agentrun-ledger/recovery-context.md` if it exists.
4. Inspect `agentrun-ledger/latest-run.md`.
5. Run tests.
6. Continue from the first failing or incomplete requirement.

The project should be designed so a new agent can recover without asking the user to repeat the whole plan.

---

## 16. Default Offline Scoring Details

Implement simple deterministic scoring.

Use these rules unless the existing repo suggests a better implementation.

### Normalize Text

Normalize by:

- lowercasing
- removing punctuation
- collapsing whitespace
- optionally removing common stopwords

### Expected Fact Coverage

For each expected fact:

- exact normalized phrase match = full credit
- token overlap above threshold = partial/full credit

Return average coverage across facts.

### Context Precision

For each retrieved context item:

- check whether it contains at least one expected fact or strong token overlap with one
- relevant contexts / total contexts

### Faithfulness

Split answer into claims/sentences.

A claim is faithful if important tokens appear in retrieved context.

Return supported claims / total claims.

### Overall Score

Suggested weighted score:

```text
overallScore =
  0.40 * expectedFactCoverage +
  0.25 * faithfulness +
  0.20 * contextPrecision +
  0.15 * answerSimilarity
```

Keep all metric values between 0 and 1.

---

## 17. Baseline vs Candidate Demo Trick

To make the demo meaningful without external LLMs, create two deterministic configs:

```text
baseline:
- top_k: 3
- retriever: keyword
- generator: extractive

candidate:
- top_k: 1
- retriever: keyword
- generator: extractive
```

The candidate may regress on some tests because it sees fewer snippets.

This gives the report something real to detect.

Do not hardcode fake regressions. Let the scoring produce them.

---

## 18. Final Instruction

Act like a senior engineer building a durable portfolio project, not a quick script.

Build the smallest complete version that proves the product idea end-to-end.

Self-test and fix until everything works.
