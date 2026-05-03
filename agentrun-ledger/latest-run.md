# RAG Regression Report: candidate-keyword-top1-2026-05-03T22-16-34-285Z-0a98e117

Generated: 2026-05-03T22:16:34.285Z

Suite: SaaS Help Center Demo Suite (8 tests)

## Configuration

- Run id: candidate-keyword-top1-2026-05-03T22-16-34-285Z-0a98e117
- Baseline run id: baseline-keyword-top3-2026-05-03T22-16-34-217Z-e944200e
- Model/provider: local deterministic mock
- Embedding config: none
- Retriever: keyword
- Generator: extractive
- Top K: 1
- Scoring: heuristic-v1 overall=0.40 facts + 0.25 faithfulness + 0.20 context + 0.15 similarity
- Command: `dashboard Run Demo candidate`
- Environment: win32 x64, node v24.14.1

## Score Summary

- Passed: 6/8
- Failed: 2
- Regressed: 7
- Improved: 0
- Unchanged: 1
- Average faithfulness: 1
- Average answer similarity: 0.5394
- Average context precision: 1
- Average latency: 0.0987ms

## Failed Or Regressed Tests

| Test | Status | Passed | Overall | Fact Coverage |
| --- | --- | --- | ---: | ---: |
| refund-policy-001 | regressed | yes | 0.725 | 0.5 |
| password-reset-001 | regressed | yes | 0.7333 | 0.5 |
| account-deletion-001 | regressed | yes | 0.725 | 0.5 |
| data-export-001 | regressed | yes | 0.75 | 0.5 |
| team-invites-001 | newly_failing | no | 0.7167 | 0.5 |
| invoice-download-001 | regressed | yes | 0.8438 | 0.75 |
| security-policy-001 | newly_failing | no | 0.6369 | 0.3333 |

## Detailed Test Breakdown

### refund-policy-001

- Question: What is the refund window and condition?
- Status: regressed
- Passed: yes
- Scores: overall 0.725, facts 0.5, faithfulness 1, context 1, similarity 0.5
- Expected facts: Refunds are available within 30 days; The item must be unused
- Retrieved context:
  - refund-window (0.9714): Customers can request a refund within 30 days of purchase.
- Generated answer: Customers can request a refund within 30 days of purchase.


### password-reset-001

- Question: How can a user reset a forgotten password?
- Status: regressed
- Passed: yes
- Scores: overall 0.7333, facts 0.5, faithfulness 1, context 1, similarity 0.5556
- Expected facts: Use the Forgot password link on the sign in page; A reset link is sent by email
- Retrieved context:
  - password-entry (1): Users who forget a password should select the Forgot password link on the sign in page.
- Generated answer: Users who forget a password should select the Forgot password link on the sign in page.


### account-deletion-001

- Question: What happens when an account is deleted?
- Status: regressed
- Passed: yes
- Scores: overall 0.725, facts 0.5, faithfulness 1, context 1, similarity 0.5
- Expected facts: Account deletion starts from the workspace settings page; Data is permanently removed after 14 days
- Retrieved context:
  - delete-settings (1.0821): Workspace owners can start account deletion from the workspace settings page.
- Generated answer: Workspace owners can start account deletion from the workspace settings page.


### subscription-upgrade-001

- Question: Who can upgrade a subscription and when does the change apply?
- Status: unchanged
- Passed: yes
- Scores: overall 0.85, facts 0.75, faithfulness 1, context 1, similarity 0.6667
- Expected facts: Only workspace admins can upgrade a subscription; Plan upgrades take effect immediately
- Retrieved context:
  - upgrade-admin (1.0821): Only workspace admins can upgrade or downgrade a subscription plan.
- Generated answer: Only workspace admins can upgrade or downgrade a subscription plan.


### data-export-001

- Question: How does a customer export workspace data?
- Status: regressed
- Passed: yes
- Scores: overall 0.75, facts 0.5, faithfulness 1, context 1, similarity 0.6667
- Expected facts: Admins can request a data export from workspace settings; The export is delivered as a downloadable archive
- Retrieved context:
  - export-settings (1.4): Workspace admins can request a data export from workspace settings.
- Generated answer: Workspace admins can request a data export from workspace settings.


### team-invites-001

- Question: What should I know about inviting teammates?
- Status: newly_failing
- Passed: no
- Scores: overall 0.7167, facts 0.5, faithfulness 1, context 1, similarity 0.4444
- Expected facts: Admins and managers can invite teammates; Invitations expire after 7 days
- Retrieved context:
  - invite-roles (0.8917): Admins and managers can invite teammates from the Members screen.
- Generated answer: Admins and managers can invite teammates from the Members screen.


### invoice-download-001

- Question: Where can billing invoices be downloaded?
- Status: regressed
- Passed: yes
- Scores: overall 0.8438, facts 0.75, faithfulness 1, context 1, similarity 0.625
- Expected facts: Invoices are available in the billing history page; Only billing admins can download invoices
- Retrieved context:
  - invoice-permission (1.0583): Only billing admins can download invoice PDFs.
- Generated answer: Only billing admins can download invoice PDFs.


### security-policy-001

- Question: What security controls protect customer accounts?
- Status: newly_failing
- Passed: no
- Scores: overall 0.6369, facts 0.3333, faithfulness 1, context 1, similarity 0.3571
- Expected facts: Single sign on is available on enterprise plans; Audit logs record administrative changes; Two factor authentication can be required
- Retrieved context:
  - security-sso (1.025): Single sign on is available on enterprise plans for centralized identity management.
- Generated answer: Single sign on is available on enterprise plans for centralized identity management.


## Recommended Next Actions

- Inspect regressed tests and compare retrieved context coverage against the baseline.
- Check whether expected facts are split across documents that the candidate did not retrieve.
