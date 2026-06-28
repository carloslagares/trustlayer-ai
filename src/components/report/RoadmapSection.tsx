import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, FileText } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    label: "Immediate — July 2026",
    color: "red",
    tasks: [
      { title: "Legal review: HR Sentiment Analyser", owner: "Legal + CEO", effort: "3–5 days", priority: "Critical" },
      { title: "Suspend or redesign emotion scoring tool", owner: "Engineering + CPO", effort: "1–2 weeks", priority: "Critical" },
    ],
  },
  {
    phase: "Phase 2",
    label: "Critical — August 2026",
    color: "amber",
    tasks: [
      { title: "DPIA: Face Match 1:1 (Onfido)", owner: "DPO", effort: "1 week", priority: "High" },
      { title: "DPIA: Fraud Scoring Engine", owner: "DPO + CPO", effort: "1 week", priority: "High" },
      { title: "DPIA update: OCR Document Parser", owner: "DPO", effort: "3 days", priority: "High" },
      { title: "Human oversight SOP for fraud decisions", owner: "CPO + Engineering", effort: "3 days", priority: "High" },
      { title: "Transparency notices: fraud + OCR UI", owner: "Product + Legal", effort: "1 week", priority: "High" },
      { title: "AI Act addendum: Onfido contract", owner: "Legal", effort: "1 week", priority: "High" },
      { title: "OpenAI DPA update (Art. 28)", owner: "Legal", effort: "3 days", priority: "High" },
    ],
  },
  {
    phase: "Phase 3",
    label: "Important — Q3 2026",
    color: "blue",
    tasks: [
      { title: "AWS Textract supplier declaration", owner: "Legal", effort: "1 week", priority: "Medium" },
      { title: "Intercom: review AI training terms", owner: "Legal", effort: "3 days", priority: "Medium" },
      { title: "Execute DPAs with 2 missing vendors", owner: "Legal", effort: "2 weeks", priority: "Medium" },
      { title: "Update privacy policy (AI systems section)", owner: "DPO + Product", effort: "2 days", priority: "Medium" },
      { title: "Chatbot Art. 50 review", owner: "Product + Legal", effort: "2 days", priority: "Medium" },
    ],
  },
  {
    phase: "Phase 4",
    label: "Governance — Q4 2026",
    color: "slate",
    tasks: [
      { title: "Draft AI governance policy", owner: "CTO + DPO", effort: "1 week", priority: "Low" },
      { title: "Fraud model: model card and accuracy thresholds", owner: "Engineering", effort: "3 days", priority: "Low" },
      { title: "AI incident register", owner: "CTO + DPO", effort: "2 days", priority: "Low" },
      { title: "Employee AI literacy training programme", owner: "HR + Legal", effort: "2 weeks", priority: "Low" },
      { title: "Annual AI Act review cadence", owner: "DPO", effort: "Recurring", priority: "Low" },
    ],
  },
]

const phaseColor: Record<string, { bar: string; badge: "destructive" | "warning" | "default" | "secondary"; line: string }> = {
  red: { bar: "bg-red-500", badge: "destructive", line: "border-red-200" },
  amber: { bar: "bg-amber-400", badge: "warning", line: "border-amber-200" },
  blue: { bar: "bg-blue-500", badge: "default", line: "border-blue-200" },
  slate: { bar: "bg-slate-400", badge: "secondary", line: "border-slate-200" },
}

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="space-y-6 scroll-mt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Compliance Roadmap</h2>
        <p className="text-sm text-slate-500">19 tasks across 4 phases. Prioritised by regulatory deadline and risk level.</p>
      </div>

      <div className="space-y-6">
        {phases.map((p) => {
          const c = phaseColor[p.color]
          return (
            <div key={p.phase} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className={`h-1 ${c.bar}`} />
              <div className="px-6 py-4 border-b border-slate-100 bg-slate-50 flex items-center gap-3">
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{p.phase}</p>
                  <p className="text-sm font-bold text-slate-900">{p.label}</p>
                </div>
                <Badge variant={c.badge} className="ml-auto text-[10px]">{p.tasks.length} tasks</Badge>
              </div>
              <div className="divide-y divide-slate-100">
                {p.tasks.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 px-6 py-3.5">
                    <div className="w-5 h-5 rounded border border-slate-200 bg-white shrink-0 flex items-center justify-center">
                      <span className="text-[9px] text-slate-300 font-bold">{i + 1}</span>
                    </div>
                    <p className="flex-1 text-sm text-slate-700 font-medium">{t.title}</p>
                    <div className="hidden sm:flex items-center gap-4 text-xs text-slate-400 shrink-0">
                      <span className="flex items-center gap-1"><User className="w-3 h-3" />{t.owner}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{t.effort}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
        <FileText className="w-8 h-8 mx-auto mb-3 text-blue-200" />
        <h3 className="text-lg font-bold mb-2">This is an example report</h3>
        <p className="text-blue-100 text-sm mb-6 max-w-md mx-auto">
          Your real report is generated from your actual documentation — ISO 27001, vendor contracts, DPAs, architecture diagrams. Start your diagnostic in minutes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className="bg-white text-blue-600 hover:bg-blue-50">
            Start my AI Act Diagnostic →
          </Button>
          <Button variant="outline" className="border-blue-400 text-white hover:bg-blue-700">
            Book a compliance review
          </Button>
        </div>
      </div>
    </section>
  )
}
