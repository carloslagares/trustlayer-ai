import { Badge } from "@/components/ui/badge"

const gaps = [
  {
    area: "Prohibited practice review",
    priority: "Immediate",
    effort: "Low",
    owner: "Legal + CEO",
    deadline: "July 2026",
    items: [
      "Legal opinion on HR Sentiment Analyser vs Art. 5(1)(f)",
      "Document decision: suspend, redesign, or legal carve-out",
    ],
    priorityColor: "destructive" as const,
  },
  {
    area: "DPIA for biometric and high-risk systems",
    priority: "Critical",
    effort: "Medium",
    owner: "DPO + Legal",
    deadline: "August 2026",
    items: [
      "DPIA for Face Match 1:1 (Onfido)",
      "DPIA update for OCR Document Parser",
      "DPIA for Fraud Scoring Engine",
    ],
    priorityColor: "destructive" as const,
  },
  {
    area: "Human oversight procedures",
    priority: "High",
    effort: "Medium",
    owner: "CPO + Engineering",
    deadline: "August 2026",
    items: [
      "Document human review SOP for fraud decisions",
      "Define escalation path for biometric verification failures",
      "Log and audit trail requirements for high-risk AI decisions",
    ],
    priorityColor: "warning" as const,
  },
  {
    area: "Transparency notices",
    priority: "High",
    effort: "Low",
    owner: "Product + Legal",
    deadline: "August 2026",
    items: [
      "Add 'AI-powered' disclosure to fraud screening UI",
      "Add 'Document scanned by AI' notice in OCR flow",
      "Update privacy policy with AI systems section",
      "Review chatbot UI for Art. 50 compliance",
    ],
    priorityColor: "warning" as const,
  },
  {
    area: "Vendor contract updates",
    priority: "High",
    effort: "Medium",
    owner: "Legal",
    deadline: "Q3 2026",
    items: [
      "Request AI Act compliance addendum from Onfido",
      "Update OpenAI DPA with Art. 28 obligations",
      "Request AWS Textract supplier declaration",
      "Execute DPAs with 2 vendors missing agreements",
      "Review Intercom AI feature training data terms",
    ],
    priorityColor: "warning" as const,
  },
  {
    area: "AI governance documentation",
    priority: "Medium",
    effort: "Low",
    owner: "CTO + DPO",
    deadline: "Q4 2026",
    items: [
      "Draft AI governance policy",
      "Create model card for Fraud Scoring Engine",
      "Establish AI incident register",
      "Define AI literacy training programme for employees",
    ],
    priorityColor: "secondary" as const,
  },
]

const effortColor: Record<string, string> = {
  Low: "text-emerald-600 bg-emerald-50",
  Medium: "text-amber-600 bg-amber-50",
  High: "text-red-600 bg-red-50",
}

export default function ComplianceGaps() {
  return (
    <section id="gaps" className="space-y-6 scroll-mt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Compliance Gaps</h2>
        <p className="text-sm text-slate-500">17 documented gaps across 6 areas. Sorted by priority and deadline.</p>
      </div>

      <div className="space-y-4">
        {gaps.map((g, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
            <div className="flex items-center gap-4 px-5 py-4 border-b border-slate-100 bg-slate-50">
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-sm font-bold text-slate-900">{g.area}</p>
                  <Badge variant={g.priorityColor} className="text-[10px]">{g.priority}</Badge>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${effortColor[g.effort]}`}>
                    {g.effort} effort
                  </span>
                </div>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-semibold text-slate-700">{g.owner}</p>
                <p className="text-[10px] text-slate-400">Due: {g.deadline}</p>
              </div>
            </div>
            <ul className="px-5 py-4 space-y-2">
              {g.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded border border-slate-200 bg-white shrink-0 mt-0.5 flex items-center justify-center">
                    <span className="text-[9px] font-bold text-slate-300">{j + 1}</span>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
