# Agent Recovery Context

Last updated: 2026-05-03T21:48:39.730Z

## What Was Built

RAG Regression Lab is implemented as a local-first TypeScript CLI. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, and updates AgentRun Ledger artifacts.

## Latest Run

- Run id: candidate-keyword-top1-2026-05-03T21-48-39-657Z-39cc3024
- Timestamp: 2026-05-03T21:48:39.657Z
- Suite: SaaS Help Center Demo Suite
- Baseline run id: baseline-keyword-top3-2026-05-03T21-48-39-579Z-005c911b
- Config: candidate-keyword-top1, top_k=1
- Passed: 6/8
- Failed: 2
- Regressed: 7
- Improved: 0

## Commands Passed

- `npm.cmd install`
- `npm.cmd run seed`
- `npm.cmd run lint`
- `npm.cmd run test`
- `npm.cmd run build`
- `npm.cmd run demo`

## Commands Failed

- None recorded.

## Unresolved Issues

- None known.

## Important Files Changed

- package.json
- tsconfig.json
- data/demo-suite.json
- src/core/*
- src/cli/index.ts
- src/demo/runDemo.ts
- src/ledger/agentRunLedger.ts
- tests/*
- README.md
- .gitignore

## How To Continue After Reset

1. Re-read `rag-regression-lab-codex-task.md`.
2. Read the `agent-recipes/` files and follow the matching recipe for the next work type.
3. Inspect `agentrun-ledger/latest-run.md` and `agentrun-ledger/latest-run.json`.
4. Run `npm.cmd run test`, `npm.cmd run build`, and `npm.cmd run demo`.
5. Continue from the first failing requirement or validation command.
