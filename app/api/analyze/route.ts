import { NextResponse } from "next/server";
import { z } from "zod";
import { analyzeCode, generateDocumentation, generateTests, refactorCode, getAiConfiguration } from "@/lib/ai";
import { maxCodeCharacters } from "@/lib/prompts";
import { analysisSchema } from "@/types/analysis";

const requestSchema = z.object({
  action: z.enum(["analyze", "refactor", "tests", "documentation"]),
  code: z.string().min(1).max(maxCodeCharacters),
  language: z.string().min(1).max(40),
  analysis: z.unknown().optional(),
});

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    if (!getAiConfiguration().configured) return NextResponse.json({ error: "AI is not configured. Add GROQ_API_KEY to .env.local and restart the server." }, { status: 503 });
    if (body.action === "analyze") return NextResponse.json({ data: await analyzeCode(body.code, body.language) });
    if (body.action === "refactor") { const parsed = body.analysis ? analysisSchema.safeParse(body.analysis) : { success: false as const }; return NextResponse.json({ data: await refactorCode(body.code, body.language, parsed.success ? parsed.data : undefined) }); }
    if (body.action === "tests") return NextResponse.json({ data: await generateTests(body.code, body.language) });
    return NextResponse.json({ data: await generateDocumentation(body.code, body.language) });
  } catch (error) {
    const message = error instanceof z.ZodError ? "Invalid request. Check the code and selected language." : error instanceof Error ? error.message : "Unexpected server error.";
    const status = message.includes("rate") ? 429 : message.includes("configured") ? 503 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
