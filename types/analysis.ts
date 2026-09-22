import { z } from "zod";

export const severitySchema = z.enum(["critical", "warning", "suggestion", "info"]);
export const issueSchema = z.object({
  severity: severitySchema,
  title: z.string(),
  description: z.string(),
  line: z.number().int().positive().nullable(),
  whyItMatters: z.string(),
  suggestion: z.string(),
});

export const complexitySchema = z.object({
  time: z.string(),
  space: z.string(),
  explanation: z.string(),
  bestCase: z.string().nullable(),
  averageCase: z.string().nullable(),
  worstCase: z.string().nullable(),
  confidence: z.enum(["high", "medium", "low"]),
});

export const lineExplanationSchema = z.object({
  line: z.number().int().positive(),
  code: z.string(),
  explanation: z.string(),
});

export const analysisSchema = z.object({
  summary: z.string(),
  language: z.string(),
  qualityScore: z.number().min(0).max(100),
  keyFindings: z.array(z.object({ type: z.enum(["positive", "warning", "info"]), text: z.string() })).max(8),
  complexity: complexitySchema,
  issues: z.array(issueSchema).max(30),
  lineExplanations: z.array(lineExplanationSchema).max(200),
});

export const refactorSchema = z.object({
  code: z.string(),
  changes: z.array(z.string()).max(12),
  rationale: z.string(),
});

export const testsSchema = z.object({
  framework: z.string(),
  strategy: z.string(),
  tests: z.string(),
  edgeCases: z.array(z.string()).max(15),
  expectedBehavior: z.string(),
});

export const documentationSchema = z.object({
  overview: z.string(),
  documentation: z.string(),
  usageExample: z.string().nullable(),
});

export type Analysis = z.infer<typeof analysisSchema>;
export type Issue = z.infer<typeof issueSchema>;
export type Complexity = z.infer<typeof complexitySchema>;
export type RefactorResult = z.infer<typeof refactorSchema>;
export type TestsResult = z.infer<typeof testsSchema>;
export type DocumentationResult = z.infer<typeof documentationSchema>;
