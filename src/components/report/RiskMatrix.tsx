import { Badge } from "@/components/ui/badge"

const risks = [
  {
    category: "Prohibited practices",
    color: "red",
    items: [
      { risk: "HR sentiment analyser may constitute prohibited emotion recognition", system: "HR Sentiment Analyser", article: "Art. 5(1)(f)", severity: 5, action: "Immediate legal review. Suspend or redesign." },
    ],
  },
  {
    category: "High-risk AI (Annex III)",
    color: "amber",
    items: [
      { risk: "Biometric face match deployed without DPIA", system: "Face Match 1:1", article: "Art. 9 + GDPR Art. 35", severity: 4, action: "Conduct DPIA. Document human oversight procedure." },
      { risk: "Fraud model: no model documentation or accuracy metrics", system: "Fraud Scoring Engine", article: "Art. 11 + 13", severity: 4, action: "Create model card. Define accuracy thresholds. Human oversight SOP." },
      { risk: "OCR: data retention policy for ID documents unclear", system: "OCR Document Parser", article: "Art. 10 + GDPR", severity: 3, action: "Define and document retention periods. Update DPIA." },
    ],
  },
  {
    category: "Transparency obligations",
    color: "blue",
    items: [
      { risk: "No AI transparency notices in product UI for fraud scoring and OCR", system: "Multiple", article: "Art. 13 + 50", severity: 3, action: "Draft and deploy transparency notices. Review UX flows." },
      { risk: "Generative AI outputs not labelled as AI-generated", system: "Support Chatbot (edge cases)", article: "Art. 50(2)", severity: 2, action: "Add disclosure for AI-generated content where applicable." },
    ],
  },
  {
    category: "Vendor & contract gaps",
    color: "slate",
    items: [
      { risk: "Onfido contract lacks AI Act compliance clause", system: "Face Match 1:1", article: "Art. 28", severity: 3, action: "Request AI Act addendum from Onfido before Q3 2026." },
      { risk: "OpenAI DPA does not cover AI Act obligations", system: "Fraud Scoring / Chatbot", article: "Art. 28", severity: 3, action: "Update DPA with OpenAI to include Art. 28 obligations." },
      { risk: "AWS Textract: no AI Act statement on file", system: "OCR Document Parser", article: "Art. 53", severity: 2, action: "Request supplier declaration of conformity." },
      { risk: "2 vendors have no DPA at all", system: "Minor vendors", article: "GDPR Art. 28", severity: 2, action: "Execute DPAs before next audit cycle." },
    ],
  },
  {
    category: "Documentation gaps",
    color: "slate",
    items: [
      { risk: "No AI governance policy document", system: "Company-wide", article: "Art. 9 + 17", severity: 2, action: "Draft AI policy. Assign AI governance owner." },
      { risk: "No incident register for AI-related events", system: "Company-wide", article: "Art. 73", severity: 2, action: "Create AI incident register. Define notification thresholds." },
    ],
  },
]

const colorMap: Record<string, { header: string; badge: "destructive" | "warning" | "secondary" | "default"; dot: string }> = {
  red: { header: "bg-red-50 border-red-200", badge: "destructive", dot: "bg-red-500" },
  amber: { header: "bg-amber-50 border-amber-200", badge: "warning", dot: "bg-amber-400" },
  blue: { header: "bg-blue-50 border-blue-200", badge: "default", dot: "bg-blue-500" },
  slate: { header: "bg-slate-50 border-slate-200", badge: "secondary", dot: "bg-slate-400" },
}

function SeverityBar({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className={`w-4 h-1.5 rounded-full ${i <= n ? (n >= 4 ? "bg-red-400" : n === 3 ? "bg-amber-400" : "bg-slate-300") : "bg-slate-100"}`} />
      ))}
    </div>
  )
}

export default function RiskMatrix() {
  return (
    <section id="risk" className="space-y-6 scroll-mt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Risk Matrix</h2>
        <p className="text-sm text-slate-500">All identified compliance risks, grouped by category, with severity and recommended action.</p>
      </div>

      <div className="space-y-4">
        {risks.map((cat) => {
          const c = colorMap[cat.color]
          return (
            <div key={cat.category} className={`rounded-2xl border overflow-hidden`}>
              <div className={`px-5 py-3 border-b ${c.header} flex items-center gap-2`}>
                <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                <p className="text-sm font-bold text-slate-800">{cat.category}</p>
                <Badge variant={c.badge} className="text-[10px] ml-auto">{cat.items.length} item{cat.items.length > 1 ? "s" : ""}</Badge>
              </div>
              <div className="divide-y divide-slate-100">
                {cat.items.map((item, i) => (
                  <div key={i} className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto_1fr] gap-4 px-5 py-4 items-start bg-white">
                    <div>
                      <p className="text-sm font-semibold text-slate-900 mb-0.5">{item.risk}</p>
                      <p className="text-xs text-slate-400">{item.system} · <span className="font-mono text-blue-500">{item.article}</span></p>
                    </div>
                    <div className="lg:text-right">
                      <p className="text-[10px] text-slate-400 mb-1.5 font-medium uppercase tracking-wide">Severity</p>
                      <SeverityBar n={item.severity} />
                    </div>
                    <div className="hidden lg:block w-px bg-slate-100 self-stretch mx-1" />
                    <div>
                      <p className="text-[10px] text-slate-400 mb-1 font-medium uppercase tracking-wide">Recommended action</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
