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

