export type Difficulty = "easy" | "medium" | "hard";

export interface SourceDocument {
  id: string;
  title: string;
  content: string;
}

export interface TestCase {
  id: string;
  question: string;
  expectedFacts: string[];
  documents: SourceDocument[];
  tags?: string[];
  difficulty?: Difficulty;
}

export interface TestSuite {
  id: string;
  name: string;
  description?: string;
  version?: string;
  cases: TestCase[];
}

export interface RagConfig {
  name: string;
  retriever: "keyword";
  generator: "extractive";
  topK: number;
}

export interface RetrievedContext {
  id: string;
  title: string;
  snippet: string;
  score: number;
}

export interface MetricScores {
  answerSimilarity: number;
  expectedFactCoverage: number;
  contextPrecision: number;
  faithfulness: number;
  overallScore: number;
}

export type RegressionStatus =
  | "baseline"
  | "regressed"
  | "improved"
  | "unchanged"
  | "newly_failing"
  | "newly_passing";

export interface TestResult {
  testId: string;
  question: string;
  expectedFacts: string[];
  retrievedContext: RetrievedContext[];
  generatedAnswer: string;
  metrics: MetricScores;
  passed: boolean;
  latencyMs: number;
  regressionStatus: RegressionStatus;
  error?: string;
}

export interface RunSummary {
  totalTests: number;
  passed: number;
  failed: number;
  regressed: number;
  improved: number;
  unchanged: number;
  averageFaithfulness: number;
  averageAnswerSimilarity: number;
  averageContextPrecision: number;
  averageLatencyMs: number;
  importantFailures: string[];
  nextRecommendedSteps: string[];
}

export interface RunMetadata {
  runId: string;
  timestamp: string;
  appVersion: string;
  gitBranch?: string;
  gitCommit?: string;
  command: string;
  environment: string;
  suitePath: string;
  suiteName: string;
  baselineRunId?: string;
  modelProvider: string;
  embeddingConfig: string;
  retrieverConfig: string;
  topK: number;
  scoringConfig: string;
}

export interface EvaluationRun {
  metadata: RunMetadata;
  config: RagConfig;
  suite: {
    id: string;
    name: string;
    testCount: number;
  };
  results: TestResult[];
  summary: RunSummary;
}

export interface ComparisonOptions {
  threshold: number;
}

