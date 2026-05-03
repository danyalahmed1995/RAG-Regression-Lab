# Agent Recovery Context

Last updated: 2026-05-03T22:16:34.353Z

## What Was Built

RAG Regression Lab is implemented as a local-first TypeScript CLI plus a Material-inspired web dashboard. It loads JSON test suites, runs deterministic keyword retrieval plus extractive generation, scores answer quality with transparent heuristics, compares candidate runs against a baseline, writes human and machine-readable reports, exposes dashboard data APIs, and updates AgentRun Ledger artifacts.

## Latest Run

- Run id: candidate-keyword-top1-2026-05-03T22-16-34-285Z-0a98e117
- Timestamp: 2026-05-03T22:16:34.285Z
- Suite: SaaS Help Center Demo Suite
- Baseline run id: baseline-keyword-top3-2026-05-03T22-16-34-217Z-e944200e
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
- `npm.cmd run dashboard:build`
- `npm.cmd run ci:rag`

## Commands Failed

- None recorded.

## Dashboard And Commands Added

- `npm.cmd run dashboard` starts the local Express dashboard server.
- `npm.cmd run dev` starts Vite for frontend development with `/api` proxied to the dashboard server.
- `npm.cmd run dashboard:build` builds the React dashboard into `dist-dashboard/`.
- `npm.cmd run ci:rag` runs the demo-friendly regression gate.

## Unresolved Issues

- None known.

## Known Limitations

- Real OpenAI and Groq providers are represented by validated config stubs only; the default offline provider is the working implementation.
- The dashboard reads local generated artifacts and is intended for local portfolio/demo use, not multi-user hosting.

## Important Files Changed

- package.json
- tsconfig.json
- vite.config.ts
- index.html
- data/demo-suite.json
- src/core/*
- src/ci/ragGate.ts
- src/cli/index.ts
- src/dashboard/*
- src/demo/runDemo.ts
- src/ledger/agentRunLedger.ts
- src/server/*
- tests/*
- README.md
- .gitignore
- rag-provider.config.example.json

## How To Continue After Reset

1. Re-read `rag-regression-lab-codex-task.md`.
2. Read the `agent-recipes/` files and follow the matching recipe for the next work type.
3. Inspect `agentrun-ledger/latest-run.md` and `agentrun-ledger/latest-run.json`.
4. Run `npm.cmd run test`, `npm.cmd run build`, `npm.cmd run dashboard:build`, `npm.cmd run demo`, and `npm.cmd run ci:rag`.
5. Continue from the first failing requirement or validation command.
