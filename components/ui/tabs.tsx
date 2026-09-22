"use client";

import { createContext, useContext, useState } from "react";
import { cn } from "@/lib/utils";

const TabsContext = createContext<{ value: string; setValue: (value: string) => void } | null>(null);

export function Tabs({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string }) {
  const [value, setValue] = useState(defaultValue);
  return <TabsContext.Provider value={{ value, setValue }}><div className={cn("tabs", className)}>{children}</div></TabsContext.Provider>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="tabs-list">{children}</div>;
}

export function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("TabsTrigger must be used inside Tabs");
  return <button type="button" className={cn("tab-trigger", ctx.value === value && "is-active")} onClick={() => ctx.setValue(value)} role="tab" aria-selected={ctx.value === value}>{children}</button>;
}

export function TabsContent({ value, children }: { value: string; children: React.ReactNode }) {
  const ctx = useContext(TabsContext);
  if (!ctx || ctx.value !== value) return null;
  return <div className="tab-content" role="tabpanel">{children}</div>;
}
