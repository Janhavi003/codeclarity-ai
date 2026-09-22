import { Suspense } from "react";
import { CodeWorkspace } from "@/components/code-workspace";
export default function AnalyzePage(){return <main className="app-shell"><Suspense fallback={<div className="empty"><strong>Loading workspace…</strong></div>}><CodeWorkspace/></Suspense></main>}
