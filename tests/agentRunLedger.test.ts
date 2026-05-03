import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { runEvaluation } from "../src/core/runner.js";
import { loadSuite } from "../src/core/suiteLoader.js";
import { writeAgentRunLedger } from "../src/ledger/agentRunLedger.js";

describe("agentRunLedger", () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), "rag-ledger-"));
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("writes latest ledger files and recovery context", async () => {
    const suite = await loadSuite("data/demo-suite.json");
    const run = await runEvaluation({
      suite,
      suitePath: "data/demo-suite.json",
      config: { name: "ledger", retriever: "keyword", generator: "extractive", topK: 2 },
      command: "test"
    });

    const paths = await writeAgentRunLedger({
      run,
      rootDir: dir,
      changedFiles: ["src/core/runner.ts"],
      passedCommands: ["npm.cmd run test"],
      failedCommands: [],
      unresolvedIssues: []
    });
    const recovery = await readFile(paths.recoveryPath, "utf8");
    const latest = JSON.parse(await readFile(paths.latestJsonPath, "utf8"));
    expect(recovery).toContain("How To Continue After Reset");
    expect(latest.metadata.runId).toBe(run.metadata.runId);
  });
});

