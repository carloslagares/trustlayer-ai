import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock } from "lucide-react"

const systems = [
  {
    name: "Face Match 1:1",
    desc: "Customer onboarding biometric verification",
    provider: "Onfido",
    isAI: true,
    role: "Deployer",
    data: ["Biometric", "Personal"],
    risk: "High",
    annexIII: "Annex III §2",
    evidence: ["DPA ✓", "DPIA ✗"],
    gaps: ["DPIA required", "Human oversight doc missing"],
    owner: "CTO",
    status: "gap",
  },
  {
    name: "Fraud Scoring Engine",
    desc: "Real-time transaction fraud classification",
    provider: "Internal (Python/XGBoost)",
    isAI: true,
    role: "Provider",
    data: ["Behavioural", "Financial", "Personal"],
    risk: "High",
    annexIII: "Annex III §5(b)",
    evidence: ["Model card ✗", "DPIA ✗"],
    gaps: ["No model card", "No DPIA", "No human oversight SOP"],
    owner: "CPO",
    status: "gap",
  },
  {
    name: "OCR Document Parser",
    desc: "Passport & ID document extraction",
    provider: "AWS Textract",
    isAI: true,
    role: "Deployer",
    data: ["Personal", "Special category"],
    risk: "High",
    annexIII: "Annex III §2",
    evidence: ["DPA ✓", "Privacy policy ✓"],
    gaps: ["Retention policy unclear", "DPIA needs update"],
    owner: "Engineering",
    status: "partial",
  },
  {
    name: "HR Sentiment Analyser",
    desc: "Employee engagement scoring from survey responses",
    provider: "Internal (OpenAI API)",
    isAI: true,
    role: "Provider / Deployer",
    data: ["Personal", "Behavioural"],
    risk: "Prohibited?",
    annexIII: "Art. 5(1)(f)",
    evidence: [],
    gaps: ["May constitute prohibited emotion recognition in workplace", "Requires immediate legal review"],
    owner: "HR",
    status: "prohibited",
  },
  {
    name: "Support Chatbot",
    desc: "Customer-facing AI chat assistant",
    provider: "OpenAI GPT-4o",
    isAI: true,
    role: "Deployer",
    data: ["Personal"],
    risk: "Low",
    annexIII: "Art. 50 (transparency)",
    evidence: ["DPA ✓", "UI disclosure ✓"],
    gaps: [],
    owner: "Product",
    status: "compliant",
  },
  {
    name: "Email Classifier",
    desc: "Routes support emails by topic",
    provider: "Internal (fine-tuned BERT)",
    isAI: true,
    role: "Provider",
    data: ["Personal"],
    risk: "Minimal",
    annexIII: "None",
    evidence: ["Internal docs ✓"],
    gaps: [],
    owner: "Engineering",
    status: "compliant",
  },
  {
    name: "Recommendation Engine",
    desc: "Product upsell suggestions",
    provider: "Internal (collaborative filter)",
    isAI: true,
    role: "Provider",
    data: ["Behavioural"],
    risk: "Minimal",
    annexIII: "None",
    evidence: ["Privacy policy ✓"],
    gaps: [],
    owner: "Product",
    status: "compliant",
  },
  {
    name: "Analytics Dashboard (GA4)",
    desc: "Web analytics and user tracking",
    provider: "Google",
    isAI: false,
    role: "N/A",
    data: ["Behavioural"],
    risk: "Out of scope",
    annexIII: "N/A",
    evidence: ["DPA ✓"],
    gaps: [],
    owner: "Marketing",
    status: "compliant",
  },
]

const riskStyle: Record<string, { badge: "destructive" | "warning" | "success" | "secondary" | "purple"; dot: string }> = {
  "Prohibited?": { badge: "destructive", dot: "bg-red-600" },
  High: { badge: "warning", dot: "bg-amber-400" },
  Medium: { badge: "secondary", dot: "bg-blue-400" },
  Low: { badge: "success", dot: "bg-emerald-400" },
  Minimal: { badge: "success", dot: "bg-emerald-300" },
  "Out of scope": { badge: "secondary", dot: "bg-slate-300" },
}

const statusIcon = {
  prohibited: <XCircleIcon />,
  gap: <AlertTriangle className="w-4 h-4 text-amber-500" />,
  partial: <Clock className="w-4 h-4 text-blue-400" />,
  compliant: <CheckCircle className="w-4 h-4 text-emerald-500" />,
}

function XCircleIcon() {
  return (
    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  )
}

export default function AIInventoryReport() {
  return (
    <section id="inventory" className="space-y-6 scroll-mt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">AI Systems Inventory</h2>
        <p className="text-sm text-slate-500">8 systems detected from uploaded documentation. Classified by role, risk level, and Annex III applicability.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {["System", "Provider", "Role", "Risk", "Annex III", "Evidence", "Status"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {systems.map((s) => {
                const rs = riskStyle[s.risk] ?? riskStyle["Minimal"]
                return (
                  <tr key={s.name} className={`hover:bg-slate-50 transition-colors ${s.status === "prohibited" ? "bg-red-50/40" : ""}`}>
                    <td className="px-4 py-3.5">
                      <p className="font-semibold text-slate-900 whitespace-nowrap">{s.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
                    </td>
                    <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap text-xs">{s.provider}</td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      {s.role !== "N/A" ? (
                        <Badge variant="purple" className="text-[10px] bg-purple-50 text-purple-700 border border-purple-100">{s.role}</Badge>
                      ) : <span className="text-slate-300 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-3.5 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-2 h-2 rounded-full ${rs.dot}`} />
                        <Badge variant={rs.badge} className="text-[10px]">{s.risk}</Badge>
                      </div>
                    </td>
                    <td className="px-4 py-3.5 text-xs text-slate-500 whitespace-nowrap">{s.annexIII}</td>
                    <td className="px-4 py-3.5">
                      <div className="flex flex-wrap gap-1">
                        {s.evidence.length > 0 ? s.evidence.map((e) => (
                          <span key={e} className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${e.includes("✓") ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-600"}`}>{e}</span>
                        )) : <span className="text-[10px] text-slate-300">None on file</span>}
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-1.5">
                        {statusIcon[s.status as keyof typeof statusIcon]}
                        <span className="text-xs text-slate-600 font-medium capitalize whitespace-nowrap">
                          {s.status === "gap" ? "Gaps found" : s.status === "prohibited" ? "Flag: review" : s.status === "partial" ? "In progress" : "Compliant"}
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-xs text-slate-400">
          Extracted from: ISO 27001 SoA · Vendor contracts · Privacy policy · Architecture diagram · DPA register
        </div>
      </div>

      {/* Gaps summary */}
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-black text-red-500">1</p>
          <p className="text-xs font-semibold text-red-700 mt-1">Potentially prohibited</p>
        </div>
        <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-black text-amber-500">3</p>
          <p className="text-xs font-semibold text-amber-700 mt-1">High-risk with gaps</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 text-center">
          <p className="text-2xl font-black text-emerald-500">4</p>
          <p className="text-xs font-semibold text-emerald-700 mt-1">Compliant / minimal risk</p>
        </div>
      </div>
    </section>
  )
}
