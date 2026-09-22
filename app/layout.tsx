import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeClarity AI",
  description: "A developer-focused AI code analysis workspace for explanations, bugs, complexity, refactors, tests and documentation.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
