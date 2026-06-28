import Link from "next/link"
import { ArrowRight, FileCheck, ShieldCheck, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const stats = [
  { label: "AI systems identified", value: "12" },
  { label: "High-risk flags", value: "3" },
  { label: "Readiness score", value: "42%" },
]

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(to right, #1e293b 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Blue gradient blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <Badge variant="secondary" className="mb-6 gap-1.5 text-blue-700 bg-blue-50 border-blue-100">
              <ShieldCheck className="w-3.5 h-3.5" />
              EU AI Act · Enforcement from August 2026
            </Badge>

            <h1 className="text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              AI Act compliance,{" "}
              <span className="text-blue-600">built from the documentation you already have.</span>
            </h1>

            <p className="text-xl text-slate-500 leading-relaxed mb-8 max-w-lg">
              Upload your ISO, GDPR, product and vendor documentation. We generate your AI systems inventory, risk classification, provider register, transparency gaps and compliance roadmap.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <Button size="xl" asChild>
                <Link href="/diagnostic">
                  Start AI Act Diagnostic
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/report/example">
                  See example report
                </Link>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-emerald-500" />
                <span>SOC 2 compliant</span>
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>GDPR ready</span>
              </div>
              <div className="w-px h-4 bg-slate-200" />
              <span>Used by SaaS & Fintech teams</span>
            </div>
          </div>

          {/* Right: mock dashboard card */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400 uppercase tracking-widest mb-1">AI Act Readiness</p>
                  <p className="text-2xl font-bold text-slate-900">42%</p>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-amber-200 bg-amber-50 flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: "42%" }} />
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 pt-1">
                {stats.map((s) => (
                  <div key={s.label} className="bg-slate-50 rounded-xl p-3 text-center">
                    <p className="text-lg font-bold text-slate-900">{s.value}</p>
                    <p className="text-xs text-slate-400 leading-tight mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Risk flags */}
              <div className="space-y-2 pt-1">
                {[
                  { label: "Biometric provider missing DPA", level: "high" },
                  { label: "No transparency notice for scoring AI", level: "high" },
                  { label: "Provider contract lacks AI Act clause", level: "medium" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-50">
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${item.level === "high" ? "bg-red-500" : "bg-amber-400"}`} />
                    <p className="text-xs text-slate-600 font-medium">{item.label}</p>
                    <Badge variant={item.level === "high" ? "destructive" : "warning"} className="ml-auto text-[10px] px-1.5 py-0">
                      {item.level}
                    </Badge>
                  </div>
                ))}
              </div>

              <div className="pt-1 flex gap-2">
                <Button size="sm" className="flex-1" asChild>
                  <Link href="/diagnostic">Start diagnostic →</Link>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <Link href="/report/example">See example</Link>
                </Button>
              </div>
            </div>

            {/* Floating: docs processed */}
            <div className="absolute -bottom-5 -left-5 bg-white border border-slate-200 rounded-2xl shadow-xl p-3.5 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  { label: "PDF", bg: "bg-red-50", text: "text-red-500", border: "border-red-100" },
                  { label: "DPA", bg: "bg-blue-50", text: "text-blue-500", border: "border-blue-100" },
                  { label: "ISO", bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
                  { label: "+4", bg: "bg-slate-100", text: "text-slate-400", border: "border-slate-200" },
                ].map((d) => (
                  <div key={d.label} className={`w-8 h-8 ${d.bg} border-2 border-white rounded-lg flex items-center justify-center text-[9px] font-black ${d.text} shadow-sm`}>
                    {d.label}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">7 docs analyzed</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <p className="text-[11px] text-emerald-600 font-semibold">Generated in 2m 41s</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
