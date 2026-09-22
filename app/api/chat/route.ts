import { NextResponse } from "next/server";
import { z } from "zod";
import { chatWithCode, getAiConfiguration } from "@/lib/ai";
import { maxCodeCharacters } from "@/lib/prompts";

const requestSchema = z.object({
  code: z.string().min(1).max(maxCodeCharacters),
  language: z.string().min(1).max(40),
  question: z.string().min(1).max(4000),
  analysis: z.unknown().optional(),
});

export async function POST(request: Request) {
  try {
    const body = requestSchema.parse(await request.json());
    if (!getAiConfiguration().configured) return NextResponse.json({ error: "AI is not configured. Add GROQ_API_KEY to .env.local and restart the server." }, { status: 503 });
    return NextResponse.json({ answer: await chatWithCode(body.code, body.language, body.question, body.analysis as never) });
  } catch (error) {
    const message = error instanceof z.ZodError ? "Invalid chat request." : error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
