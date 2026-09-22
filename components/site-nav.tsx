"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Github, Moon, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteNav() {
  const pathname = usePathname();
  const [theme, setThemeState] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = window.localStorage.getItem("theme");
    const next = saved === "light" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    setThemeState(next);
  }, []);

  const setTheme = (next: "dark" | "light") => {
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
    setThemeState(next);
  };
  return <header className="site-nav"><div className="container nav-inner">
    <Link href="/" className="brand"><span className="brand-mark"><Sparkles size={15}/></span>CodeClarity AI</Link>
    <nav className="nav-links" aria-label="Primary"><Link className={`nav-link ${pathname.startsWith("/analyze") ? "active" : ""}`} href="/analyze">Analyze</Link><Link className={`nav-link ${pathname.startsWith("/history") ? "active" : ""}`} href="/history">History</Link><Link className={`nav-link ${pathname.startsWith("/docs") ? "active" : ""}`} href="/docs">Documentation</Link></nav>
    <div className="nav-actions"><Button variant="ghost" aria-label="Toggle theme" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={16}/> : <Moon size={16}/>}</Button><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub"><Button variant="ghost"><Github size={16}/><span>GitHub</span></Button></a></div>
  </div></header>;
}
