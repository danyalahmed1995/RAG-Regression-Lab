import { mkdtemp, readFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { writeReportFiles } from "../src/core/reportWriter.js";
import { runEvaluation } from "../src/core/runner.js";
import { loadSuite } from "../src/core/suiteLoader.js";

describe("reportWriter", () => {
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(join(tmpdir(), "rag-report-"));
  });

  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("writes markdown and JSON reports", async () => {
    const suite = await loadSuite("data/demo-suite.json");
    const run = await runEvaluation({
      suite,
      suitePath: "data/demo-suite.json",
      config: { name: "test", retriever: "keyword", generator: "extractive", topK: 2 },
      command: "test"
    });

    const paths = await writeReportFiles(run, dir);
    const markdown = await readFile(paths.markdownPath, "utf8");
    const json = JSON.parse(await readFile(paths.jsonPath, "utf8"));
    expect(markdown).toContain("# RAG Regression Report");
    expect(json.metadata.runId).toBe(run.metadata.runId);
  });
});

