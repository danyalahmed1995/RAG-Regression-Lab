import { describe, expect, it } from "vitest";
import { retrieveContexts } from "../src/core/retriever.js";
import type { TestCase } from "../src/core/types.js";

describe("retriever", () => {
  it("returns deterministic keyword-ranked contexts", () => {
    const testCase: TestCase = {
      id: "invoice",
      question: "Where can invoices be downloaded?",
      expectedFacts: ["Invoices are available in billing history"],
      documents: [
        { id: "wrong", title: "Password", content: "Users reset passwords from sign in." },
        { id: "right", title: "Invoices", content: "Invoices are available in the billing history page." }
      ]
    };

    const contexts = retrieveContexts(testCase, 1);
    expect(contexts).toHaveLength(1);
    expect(contexts[0]?.id).toBe("right");
  });
});

