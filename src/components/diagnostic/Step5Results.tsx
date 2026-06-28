"use client"
import { DiagnosticData } from "./DiagnosticShell"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, XCircle, CheckCircle, Download, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

function computeScore(data: DiagnosticData): number {
  let score = 60
  const a = data.answers
  if (a.q_biometric?.startsWith("Yes")) score -= 15
  if (a.q_scoring?.includes("automated")) score -= 12
  if (a.q_hr === "Yes") score -= 10
  if (a.q_dpia === "No") score -= 8
  if (a.q_dpia?.includes("sure")) score -= 5
  if (a.q_oversight?.includes("No")) score -= 7
  if (a.q_genai?.includes("Yes")) score -= 3
  if (a.q_dpia?.startsWith("Yes — for all")) score += 10
  if (a.q_oversight?.includes("documented")) score += 8
  return Math.max(12, Math.min(88, score))
}

function getFlags(data: DiagnosticData) {
  const flags: { level: "critical" | "high" | "medium"; title: string; desc: string }[] = []
  const a = data.answers

  if (a.q_hr === "Yes") flags.push({
    level: "critical",
    title: "High-risk AI: HR & employment systems",
    desc: "AI used in recruitment or performance evaluation is explicitly listed as high-risk under Annex III §4. Requires full compliance package.",
  })
  if (a.q_biometric?.startsWith("Yes — identification")) flags.push({
    level: "critical",
    title: "Potential prohibited practice: remote biometric identification",
    desc: "Real-time remote biometric identification 1:N in public spaces is prohibited under Art. 5. Requires immediate legal review.",
  })
  if (a.q_biometric?.startsWith("Yes")) flags.push({
    level: "high",
    title: "High-risk AI: biometric verification system",
    desc: "Face match or biometric verification is Annex III §2. DPIA, human oversight SOP, and provider DPA required.",
  })
  if (a.q_scoring?.includes("automated")) flags.push({
    level: "high",
    title: "High-risk AI: automated creditworthiness / fraud scoring",
    desc: "Automated scoring systems fall under Annex III §5(b). Model documentation, transparency notices, and human oversight required.",
  })
  if (a.q_dpia === "No" || a.q_dpia?.includes("sure")) flags.push({
    level: "high",
    title: "No DPIA conducted for high-risk AI systems",
    desc: "DPIA is mandatory under GDPR Art. 35 and AI Act Art. 27 for biometric and high-risk AI processing.",
  })
  if (a.q_oversight?.includes("No")) flags.push({
    level: "high",
    title: "No human oversight procedure for AI decisions",
    desc: "Art. 14 requires meaningful human oversight for high-risk AI systems. Document your review process.",
  })
  if (a.q_enterprise?.includes("asked") || a.q_enterprise?.includes("soon")) flags.push({
    level: "medium",
    title: "Enterprise clients requesting compliance documentation",
    desc: "You need a Due Diligence Pack with AI inventory, risk matrix, and provider register ready for sales cycles.",
  })
  if (a.q_provider?.includes("multiple") || a.q_provider?.includes("one")) flags.push({
    level: "medium",
    title: "Vendor contracts likely missing AI Act clauses",
    desc: "Art. 28 obligations require AI Act compliance clauses in provider agreements. Review your DPAs.",
  })

  return flags
}

const levelConfig = {
  critical: { icon: XCircle, color: "text-red-500", bg: "bg-red-50", border: "border-red-100", badge: "destructive" as const, label: "Critical" },
  high: { icon: AlertTriangle, color: "text-amber-500", bg: "bg-amber-50", border: "border-amber-100", badge: "warning" as const, label: "High" },
  medium: { icon: AlertTriangle, color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100", badge: "default" as const, label: "Medium" },
}

export default function Step5Results({ data }: { data: DiagnosticData }) {
  const score = computeScore(data)
  const flags = getFlags(data)
  const critical = flags.filter((f) => f.level === "critical").length
  const high = flags.filter((f) => f.level === "high").length
  const scoreColor = score >= 65 ? "text-emerald-500" : score >= 40 ? "text-amber-500" : "text-red-500"
  const scoreLabel = score >= 65 ? "Good" : score >= 40 ? "At Risk" : "Critical"

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-emerald-600 uppercase tracking-widest mb-2">Diagnostic complete</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">
          Your preliminary AI Act assessment
        </h2>
        <p className="text-slate-500 text-sm">Based on your questionnaire responses. A full diagnostic requires document analysis.</p>
      </div>

      {/* Score card */}
      <div className="bg-slate-900 rounded-2xl p-7 text-white flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-1">
          <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-1">AI Act Readiness Score</p>
          <div className="flex items-baseline gap-2 mb-3">
            <span className={`text-5xl font-black ${scoreColor}`}>{score}</span>
            <span className="text-slate-500 text-lg">/100</span>
            <Badge variant={score >= 65 ? "success" : score >= 40 ? "warning" : "destructive"} className="ml-2">
              {scoreLabel}
            </Badge>
          </div>
          <p className="text-slate-400 text-sm">
            {critical > 0
              ? `${critical} critical issue${critical > 1 ? "s" : ""} require immediate attention before August 2026 enforcement.`
              : high > 0
              ? `${high} high-priority gap${high > 1 ? "s" : ""} need to be addressed before August 2026.`
              : "No critical issues found. Review medium-priority items to strengthen your position."}
          </p>
        </div>
        <div className="shrink-0 grid grid-cols-3 gap-3 text-center">
          {[
            { label: "Critical", value: critical, color: "text-red-400" },
            { label: "High", value: high, color: "text-amber-400" },
            { label: "Medium", value: flags.filter((f) => f.level === "medium").length, color: "text-blue-400" },
          ].map((s) => (
            <div key={s.label} className="bg-slate-800 rounded-xl px-3 py-3">
              <p className={`text-xl font-black ${s.color}`}>{s.value}</p>
              <p className="text-[10px] text-slate-400 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Flags */}
      {flags.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900">Identified issues</h3>
          {flags.map((f, i) => {
            const cfg = levelConfig[f.level]
            const Icon = cfg.icon
            return (
              <div key={i} className={`flex gap-4 p-4 rounded-xl border ${cfg.bg} ${cfg.border}`}>
                <Icon className={`w-5 h-5 ${cfg.color} shrink-0 mt-0.5`} />
                <div className="flex-1">
                  <div className="flex items-start gap-2 justify-between mb-1">
                    <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                    <Badge variant={cfg.badge} className="text-[10px] shrink-0">{cfg.label}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
          {flags.length === 0 && (
            <div className="flex gap-3 p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <p className="text-sm text-emerald-800">No major flags from questionnaire. Document analysis may reveal additional gaps.</p>
            </div>
          )}
        </div>
      )}

      {/* CTAs */}
      <div className="bg-white rounded-2xl border border-slate-200 p-7 space-y-4">
        <h3 className="text-base font-bold text-slate-900">Next steps</h3>
        <p className="text-sm text-slate-500">
          This is a preliminary assessment based on your answers. A full diagnostic with document analysis provides:
        </p>
        <ul className="space-y-2">
          {[
            "Complete AI systems inventory (detected from your docs)",
            "Provider register with DPA and AI Act clause status",
            "Full risk matrix with article references",
            "DPIA inputs and transparency notice drafts",
            "Audit-ready compliance roadmap",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button size="lg" className="flex-1 gap-2" asChild>
            <Link href="/#contact">
              Get full diagnostic →
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="flex-1 gap-2" asChild>
            <Link href="/#contact">
              <Calendar className="w-4 h-4" />
              Book a review call
            </Link>
          </Button>
        </div>
      </div>

      <div className="text-center">
        <Button variant="ghost" size="sm" className="gap-2 text-slate-400">
          <Download className="w-4 h-4" />
          Download this summary as PDF
        </Button>
        <p className="text-xs text-slate-300 mt-2">Full PDF export available in the Growth and Enterprise plans</p>
      </div>

      {/* See example */}
      <div className="border border-slate-200 rounded-2xl p-5 bg-slate-50 text-center">
        <p className="text-sm text-slate-500 mb-3">Want to see what a full diagnostic report looks like?</p>
        <Button variant="outline" size="sm" asChild>
          <Link href="/report/example">View example report →</Link>
        </Button>
      </div>
    </div>
  )
}
