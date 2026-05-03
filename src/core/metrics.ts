import { clampScore, normalizeText, tokenOverlap } from "./text.js";
import type { MetricScores, RetrievedContext } from "./types.js";

export function scoreExpectedFactCoverage(expectedFacts: string[], answer: string): number {
  if (expectedFacts.length === 0) {
    return 1;
  }

  const normalizedAnswer = normalizeText(answer);
  const total = expectedFacts.reduce((sum, fact) => {
    const normalizedFact = normalizeText(fact);
    if (normalizedFact && normalizedAnswer.includes(normalizedFact)) {
      return sum + 1;
    }

    const overlap = tokenOverlap(fact, answer);
    return sum + (overlap >= 0.55 ? 1 : overlap >= 0.35 ? 0.5 : 0);
  }, 0);

  return clampScore(total / expectedFacts.length);
}

export function scoreContextPrecision(expectedFacts: string[], contexts: RetrievedContext[]): number {
  if (contexts.length === 0) {
    return 0;
  }

  const relevant = contexts.filter((context) =>
    expectedFacts.some((fact) => {
      const normalizedSnippet = normalizeText(context.snippet);
      const normalizedFact = normalizeText(fact);
      return normalizedSnippet.includes(normalizedFact) || tokenOverlap(fact, context.snippet) >= 0.35;
    })
  );

  return clampScore(relevant.length / contexts.length);
}

export function scoreFaithfulness(answer: string, contexts: RetrievedContext[]): number {
  const claims = answer
    .split(/(?<=[.!?])\s+/)
    .map((claim) => claim.trim())
    .filter(Boolean);

  if (claims.length === 0) {
    return 0;
  }

  const contextText = contexts.map((context) => context.snippet).join(" ");
  const supported = claims.filter((claim) => {
    const normalizedContext = normalizeText(contextText);
    const normalizedClaim = normalizeText(claim);
    return normalizedContext.includes(normalizedClaim) || tokenOverlap(claim, contextText) >= 0.5;
  });

  return clampScore(supported.length / claims.length);
}

export function scoreAnswerSimilarity(expectedFacts: string[], answer: string): number {
  return clampScore(tokenOverlap(expectedFacts.join(" "), answer));
}

export function scoreResult(expectedFacts: string[], answer: string, contexts: RetrievedContext[]): MetricScores {
  const expectedFactCoverage = scoreExpectedFactCoverage(expectedFacts, answer);
  const faithfulness = scoreFaithfulness(answer, contexts);
  const contextPrecision = scoreContextPrecision(expectedFacts, contexts);
  const answerSimilarity = scoreAnswerSimilarity(expectedFacts, answer);
  const overallScore = clampScore(
    0.4 * expectedFactCoverage +
      0.25 * faithfulness +
      0.2 * contextPrecision +
      0.15 * answerSimilarity
  );

  return {
    answerSimilarity,
    expectedFactCoverage,
    contextPrecision,
    faithfulness,
    overallScore
  };
}

