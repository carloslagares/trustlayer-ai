import { AlertTriangle, XCircle, CheckCircle, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const scoreCards = [
  { label: "AI systems identified", value: "8", sub: "across product & operations", color: "blue" },
  { label: "High-risk systems", value: "3", sub: "require full compliance pack", color: "red" },
  { label: "Prohibited practice flags", value: "1", sub: "needs immediate resolution", color: "red" },
  { label: "Providers missing DPA/AI clause", value: "4", sub: "out of 6 vendors", color: "amber" },
]

const flagItems = [
  {
    icon: XCircle,
    color: "text-red-500",
    bg: "bg-red-50",
    border: "border-red-100",
    badge: "Prohibited",
    badgeVariant: "destructive" as const,
    title: "Potential prohibited practice: emotion scoring",
    desc: "Internal HR sentiment analysis tool may qualify as prohibited emotion recognition in workplace context (Art. 5(1)(f)). Requires immediate legal review.",
  },
  {
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    badge: "High Risk",
    badgeVariant: "warning" as const,
    title: "Biometric face match deployed without DPIA",
    desc: "Onfido face verification (1:1) deployed in customer onboarding. No DPIA on file. Required under Art. 27 and GDPR Art. 35.",
  },
  {
    icon: AlertTriangle,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "border-amber-100",
    badge: "High Risk",
    badgeVariant: "warning" as const,
    title: "Fraud scoring model: no human oversight procedure",
    desc: "Automated fraud decisions without documented human review process. Required under Art. 14 for high-risk AI systems.",
  },
  {
    icon: Clock,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "border-blue-100",
    badge: "Gap",
    badgeVariant: "secondary" as const,
    title: "No AI transparency notices in product UI",
    desc: "Users not informed when interacting with AI systems. Required transparency obligations under Art. 13 not yet implemented.",
  },
]

export default function ExecSummary() {
  return (
    <section id="summary" className="space-y-8 scroll-mt-8">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div>
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-2">
              AI Act Compliance Report · Confidential
            </p>
            <h1 className="text-2xl font-bold mb-1">Acme Technologies SL</h1>
            <p className="text-slate-400 text-sm">SaaS · Fintech · 85 employees · Spain + EU</p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                Deployer
              </Badge>
              <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                Provider (internal models)
              </Badge>
              <Badge variant="secondary" className="text-xs bg-slate-700 text-slate-300 border-slate-600">
                Integrator (3rd party AI)
              </Badge>
            </div>
          </div>

          {/* Score ring */}
          <div className="flex flex-col items-center shrink-0">
            <div className="relative w-28 h-28">
              <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#334155" strokeWidth="10" />
                <circle
                  cx="50" cy="50" r="40" fill="none"
                  stroke="#f59e0b"
                  strokeWidth="10"
                  strokeDasharray={`${38 * 2.51} ${100 * 2.51}`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black text-white">38</span>
                <span className="text-xs text-slate-400">/ 100</span>
              </div>
            </div>
            <p className="text-sm font-semibold text-amber-400 mt-2">At Risk</p>
            <p className="text-xs text-slate-400">Readiness score</p>
          </div>
        </div>
      </div>

      {/* Score cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {scoreCards.map((c) => (
          <div key={c.label} className="bg-white rounded-xl border border-slate-200 p-5">
            <p className={`text-3xl font-black mb-1 ${c.color === "red" ? "text-red-500" : c.color === "amber" ? "text-amber-500" : "text-blue-600"}`}>
              {c.value}
            </p>
            <p className="text-sm font-semibold text-slate-800 leading-tight mb-1">{c.label}</p>
            <p className="text-xs text-slate-400">{c.sub}</p>
          </div>
        ))}
      </div>

      {/* Key flags */}
      <div>
        <h2 className="text-base font-bold text-slate-900 mb-4">Priority findings</h2>
        <div className="space-y-3">
          {flagItems.map((f) => {
            const Icon = f.icon
            return (
              <div key={f.title} className={`flex gap-4 p-4 rounded-xl border ${f.bg} ${f.border}`}>
                <Icon className={`w-5 h-5 ${f.color} shrink-0 mt-0.5`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <p className="text-sm font-semibold text-slate-900">{f.title}</p>
                    <Badge variant={f.badgeVariant} className="text-[10px] shrink-0">{f.badge}</Badge>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Compliant items */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5">
        <p className="text-sm font-semibold text-emerald-800 mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4" />
          Already compliant
        </p>
        <div className="grid sm:grid-cols-2 gap-2">
          {[
            "ISO 27001 certified (2024)",
            "Privacy policy published and up to date",
            "DPA in place with AWS, Google Cloud",
            "Support chatbot flagged as AI in UI",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs text-emerald-700">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
