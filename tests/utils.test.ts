import { describe, expect, it } from "vitest";
import { clamp, getLanguageFromFilename } from "@/lib/utils";

describe("utils",()=>{it("clamps values",()=>{expect(clamp(120,0,100)).toBe(100);expect(clamp(-1,0,100)).toBe(0)});it("detects common source languages",()=>{expect(getLanguageFromFilename("main.py")).toBe("python");expect(getLanguageFromFilename("app.tsx")).toBe("typescript");expect(getLanguageFromFilename("schema.sql")).toBe("sql")})});
