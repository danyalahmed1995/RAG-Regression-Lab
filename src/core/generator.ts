import type { RetrievedContext } from "./types.js";

export function generateExtractiveAnswer(question: string, contexts: RetrievedContext[]): string {
  if (contexts.length === 0) {
    return `I could not find enough source context to answer: ${question}`;
  }

  const sentences = contexts
    .flatMap((context) => splitSentences(context.snippet))
    .filter(Boolean);

  return sentences.length > 0
    ? sentences.join(" ")
    : contexts.map((context) => context.snippet).join(" ");
}

function splitSentences(value: string): string[] {
  return value
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

