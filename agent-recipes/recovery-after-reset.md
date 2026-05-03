# Recovery After Reset

## Purpose
Resume work after agent reset.

## Steps
1. Locate latest report:
   .agentrun/reports/
2. Read latest report
3. Summarize:
   - Goal
   - Changes
   - Failures
4. agentrun start "recovery session"
5. agentrun note "Recovered previous context"
6. Continue work
7. agentrun report

## Rules
- Do not repeat completed work
- Continue from last known state
