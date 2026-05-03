# Bug Fix Session

## Purpose
Identify and fix a bug with proof.

## Steps
1. agentrun start "bug fix"
2. Reproduce bug
3. agentrun run "<failing command>"
4. Fix issue
5. agentrun run "<validation command>"
6. agentrun note "Bug fixed"
7. agentrun report

## Rules
- Always reproduce before fixing
- Must validate after fix
