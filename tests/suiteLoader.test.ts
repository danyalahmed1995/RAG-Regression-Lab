import { describe, expect, it } from "vitest";
import { loadSuite, validateSuite } from "../src/core/suiteLoader.js";

describe("suiteLoader", () => {
  it("loads the demo suite", async () => {
    const suite = await loadSuite("data/demo-suite.json");
    expect(suite.cases).toHaveLength(8);
    expect(suite.cases[0]?.expectedFacts.length).toBeGreaterThan(0);
  });

  it("rejects duplicate test ids", () => {
    expect(() =>
      validateSuite({
        id: "suite",
        name: "Suite",
        cases: [
          {
            id: "duplicate",
            question: "Question?",
            expectedFacts: ["A fact"],
            documents: [{ id: "doc", title: "Doc", content: "A fact" }]
          },
          {
            id: "duplicate",
            question: "Question?",
            expectedFacts: ["A fact"],
            documents: [{ id: "doc2", title: "Doc", content: "A fact" }]
          }
        ]
      })
    ).toThrow(/duplicate/);
  });
});

