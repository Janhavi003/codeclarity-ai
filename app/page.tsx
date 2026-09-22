import Link from "next/link";
import { ArrowRight, Bug, FileCode2, Gauge, MessageSquare, RefreshCw, TestTube2 } from "lucide-react";

const features = [
  [FileCode2, "Explain Code", "Turn unfamiliar functions and modules into concise, developer-friendly explanations."],
  [Bug, "Find Bugs", "Surface likely defects, edge cases and maintainability risks with line references."],
  [Gauge, "Analyze Complexity", "Understand time and space growth with best, average and worst-case reasoning."],
  [RefreshCw, "Refactor Code", "Generate an improved version while keeping the original source intact for review."],
  [TestTube2, "Generate Tests", "Create framework-aware tests and a deliberate edge-case strategy."],
  [MessageSquare, "Chat With Your Code", "Ask follow-up questions with the current source and analysis in context."],
] as const;
const languages = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "C#", "Go", "Rust", "PHP", "SQL"];

export default function Home() {
  return <main>
    <section className="hero"><div className="container"><span className="eyebrow">AI-assisted developer tooling</span><h1>Understand. Debug. <span>Improve.</span> Ship.</h1><p>Analyze code, find issues, understand complexity, generate tests, and refactor code with an AI workspace designed for developers.</p><div className="hero-actions"><Link href="/analyze" className="btn btn-primary">Analyze Code <ArrowRight size={16}/></Link><Link href="/analyze?example=python-quadratic" className="btn">Try Example</Link></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><h2>A code review workspace, not a chatbot.</h2><p>Structured analysis keeps the important signals visible: issues, complexity, refactors, tests and documentation are separated into focused workflows.</p></div><div className="feature-grid">{features.map(([Icon,title,text]) => <div className="card feature-card" key={title}><div className="feature-icon"><Icon size={18}/></div><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-head"><h2>How it works</h2><p>From source code to actionable engineering context in three steps.</p></div><div className="steps"><div className="step"><div className="step-num">01</div><h3>Paste or upload</h3><p>Bring a source file into Monaco Editor. Code is treated as untrusted text and is never executed.</p></div><div className="step"><div className="step-num">02</div><h3>Analyze with AI</h3><p>A server-side route sends focused prompts and validates structured responses before the UI renders them.</p></div><div className="step"><div className="step-num">03</div><h3>Understand and improve</h3><p>Inspect findings, jump to lines, generate refactors and tests, then continue the conversation.</p></div></div></div></section>
    <section className="section"><div className="container"><div className="section-head"><h2>Built for the languages you use.</h2><p>Monaco language modes and language-aware prompts keep the experience grounded in the selected source language.</p></div><div className="language-row">{languages.map(language => <span className="badge" key={language}>{language}</span>)}</div></div></section>
    <section className="section"><div className="container"><div className="card" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:20,flexWrap:"wrap"}}><div><h2 style={{margin:"0 0 6px"}}>Turn confusing code into understandable code.</h2><p className="muted" style={{margin:0}}>Open the workspace and try one of the built-in examples.</p></div><Link href="/analyze" className="btn btn-primary">Open workspace <ArrowRight size={16}/></Link></div></div></section>
  </main>;
}
