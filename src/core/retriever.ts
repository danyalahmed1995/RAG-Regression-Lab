import { tokenOverlap, tokenize } from "./text.js";
import type { RetrievedContext, SourceDocument, TestCase } from "./types.js";

export function retrieveContexts(testCase: TestCase, topK: number): RetrievedContext[] {
  const query = `${testCase.question} ${testCase.expectedFacts.join(" ")}`;
  return rankDocuments(testCase.documents, query)
    .slice(0, topK)
    .map(({ document, score }) => ({
      id: document.id,
      title: document.title,
      snippet: document.content,
      score
    }));
}

export function rankDocuments(
  documents: SourceDocument[],
  query: string
): Array<{ document: SourceDocument; score: number }> {
  const queryTokens = tokenize(query);
  return documents
    .map((document, index) => {
      const titleBoost = tokenOverlap(document.title, query) * 0.35;
      const contentOverlap = tokenOverlap(document.content, query);
      const phraseBoost = queryTokens.some((token) => document.content.toLowerCase().includes(token))
        ? 0.05
        : 0;
      return {
        document,
        index,
        score: Number((contentOverlap + titleBoost + phraseBoost).toFixed(4))
      };
    })
    .sort((left, right) => right.score - left.score || left.index - right.index);
}

