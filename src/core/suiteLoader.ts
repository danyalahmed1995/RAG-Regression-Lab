import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { TestSuite } from "./types.js";

export async function loadSuite(suitePath: string): Promise<TestSuite> {
  const resolvedPath = resolve(suitePath);
  const raw = await readFile(resolvedPath, "utf8");
  const parsed = JSON.parse(raw) as TestSuite;
  validateSuite(parsed, resolvedPath);
  return parsed;
}

export function validateSuite(suite: TestSuite, suitePath = "suite"): void {
  if (!suite.id || !suite.name || !Array.isArray(suite.cases)) {
    throw new Error(`${suitePath} must include id, name, and cases.`);
  }

  const ids = new Set<string>();
  for (const testCase of suite.cases) {
    if (!testCase.id || !testCase.question) {
      throw new Error(`${suitePath} contains a test case missing id or question.`);
    }
    if (ids.has(testCase.id)) {
      throw new Error(`${suitePath} contains duplicate test id ${testCase.id}.`);
    }
    ids.add(testCase.id);

    if (!Array.isArray(testCase.expectedFacts) || testCase.expectedFacts.length === 0) {
      throw new Error(`${testCase.id} must include at least one expected fact.`);
    }
    if (!Array.isArray(testCase.documents) || testCase.documents.length === 0) {
      throw new Error(`${testCase.id} must include at least one source document.`);
    }
  }
}

