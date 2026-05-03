# Refactor Session

## Purpose
Improve code without breaking behavior.

## Steps
1. agentrun start "refactor"
2. Refactor code
3. agentrun run "npm test"
4. agentrun run "npm run build"
5. agentrun note "Refactor completed"
6. agentrun report

## Rules
- Behavior must remain unchanged
- Validate after refactor
