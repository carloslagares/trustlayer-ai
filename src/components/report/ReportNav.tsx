"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Shield, Download, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const sections = [
  { id: "summary", label: "Executive Summary" },
  { id: "inventory", label: "AI Systems Inventory" },
  { id: "risk", label: "Risk Matrix" },
  { id: "providers", label: "Provider Register" },
  { id: "gaps", label: "Compliance Gaps" },
  { id: "roadmap", label: "Roadmap" },
]

export default function ReportNav() {
  const [active, setActive] = useState("summary")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-0 h-screen border-r border-slate-200 bg-white pt-6 pb-8 px-5">
      <Link href="/" className="flex items-center gap-2 mb-8">
        <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
          <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
        </div>
        <span className="font-bold text-slate-900 text-sm">
          TrustLayer<span className="text-blue-600"> AI</span>
        </span>
      </Link>

      <div className="mb-4">
        <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-1">Example Report</p>
        <p className="text-xs font-semibold text-slate-700">Acme Technologies SL</p>
        <p className="text-[11px] text-slate-400">Generated 28 Jun 2026</p>
      </div>

      <nav className="flex-1 space-y-0.5">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              active === s.id
                ? "bg-blue-50 text-blue-700 font-semibold"
                : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {active === s.id && <ChevronRight className="w-3 h-3 text-blue-500" />}
            <span className={active !== s.id ? "pl-5" : ""}>{s.label}</span>
          </a>
        ))}
      </nav>

      <div className="space-y-2 pt-4 border-t border-slate-100">
        <Button size="sm" className="w-full gap-2">
          <Download className="w-3.5 h-3.5" />
          Download PDF
        </Button>
        <Button size="sm" variant="outline" className="w-full">
          Get my own report →
        </Button>
      </div>
    </aside>
  )
}
