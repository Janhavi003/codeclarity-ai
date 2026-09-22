"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type HistoryItem = { id:string; filename:string; language:string; code:string; savedAt:string };
export default function HistoryPage(){
 const [items,setItems]=useState<HistoryItem[]>([]);
 useEffect(()=>{try{setItems(JSON.parse(localStorage.getItem("codeclarity-history")||"[]"))}catch{setItems([])}},[]);
 const clear=()=>{localStorage.removeItem("codeclarity-history");setItems([])};
 return <main className="page"><div className="container"><div className="workspace-header"><div className="workspace-title"><h1>Analysis history</h1><p>Saved locally in your browser. No server-side account or database is required.</p></div>{items.length>0&&<Button variant="danger" onClick={clear}><Trash2 size={15}/>Clear history</Button>}</div>{items.length===0?<div className="card empty"><div><strong>No saved analyses yet</strong><span>Analyze a code sample and save it from the workspace.</span><div style={{marginTop:14}}><Link href="/analyze" className="btn btn-primary">Analyze code</Link></div></div></div>:<div className="history-list">{items.map(item=><div className="card history-item" key={item.id}><div><strong>{item.filename}</strong><div className="muted small">{item.language} · {new Date(item.savedAt).toLocaleString()}</div></div><Link className="btn" href={`/analyze?history=${encodeURIComponent(item.id)}`}>Open</Link></div>)}</div>}</div></main>
}
