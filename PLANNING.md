# RAG Regression Lab Planning Log

## Goal

Build a complete, local-first portfolio project that detects whether RAG pipeline changes improve, regress, or destabilize answer quality.

## Recipe Alignment

This file satisfies `agent-recipes/planning-session.md` after the recipes were added to the repo. The original implementation work happened before `agent-recipes/` was available, so this log reconstructs the planning decisions and links them to the implemented project.

## Architecture

- Stack: TypeScript CLI on Node.js.
- Test data: JSON suite in `data/demo-suite.json`.
- Core flow: suite loading -> deterministic retrieval -> extractive generation -> heuristic scoring -> baseline comparison -> report export -> AgentRun Ledger output.
- Default runtime: offline only, no API keys.
- Reports: Markdown and JSON under `reports/`.
- Agent recovery: `agentrun-ledger/latest-run.*`, `agentrun-ledger/runs/`, and `agentrun-ledger/recovery-context.md`.

## Main Design Decisions

- Use a CLI-first implementation because the repo had no existing frontend or backend stack.
- Use deterministic keyword retrieval and extractive answers so demo results are reproducible.
- Use transparent heuristic metrics rather than pretending to have LLM-as-judge certainty.
- Keep generated report files ignored while preserving output folders with `.gitkeep`.
- Validate with TypeScript typechecking, Vitest, build, and the full demo command.

## Known Context

- `agent-recipes/` was missing when implementation started and was added afterward.
- PowerShell blocks `.ps1` shims in this environment, so validation uses `npm.cmd` and `agentrun.cmd`.

## Dashboard Upgrade Plan

- Add an Express dashboard server with API endpoints for latest report data, ledger data, history, and demo execution.
- Add a Vite React dashboard under `src/dashboard/` with a dark Material-inspired layout, summary cards, regression table, detail panel, report viewer, ledger viewer, and history list.
- Keep the existing CLI demo and generated report workflow unchanged.
- Add provider config parsing for `offline`, `openai`, and `groq`, with offline as the only implemented default provider.
- Add a CI regression gate command that defaults to a passing self-check while still supporting strict thresholds through env/config.
- Add focused tests for data discovery/loading, empty states, provider config, and CI gate behavior.
