import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"

const providers = [
  {
    name: "Onfido",
    service: "Face verification / Biometric KYC",
    country: "UK / EU",
    data: ["Biometric", "Identity docs", "Selfies"],
    dpa: true,
    aiActClause: false,
    sccs: false,
    subprocessors: true,
    trainingUse: "No",
    aiActStatement: false,
    risk: "High",
    contractStatus: "Needs update",
    reviewDate: "Q3 2026",
    owner: "Legal",
  },
  {
    name: "OpenAI",
    service: "GPT-4o — chatbot + internal tools",
    country: "USA",
    data: ["Personal", "Behavioural", "Business data"],
    dpa: true,
    aiActClause: false,
    sccs: true,
    subprocessors: true,
    trainingUse: "Opted out",
    aiActStatement: false,
    risk: "High",
    contractStatus: "Needs update",
    reviewDate: "Q3 2026",
    owner: "CTO",
  },
  {
    name: "AWS (Textract + S3)",
    service: "OCR + Document storage",
    country: "EU (Ireland)",
    data: ["Personal", "Identity docs", "Special category"],
    dpa: true,
    aiActClause: false,
    sccs: false,
    subprocessors: true,
    trainingUse: "No",
    aiActStatement: false,
    risk: "Medium",
    contractStatus: "Needs AI Act addendum",
    reviewDate: "Q4 2026",
    owner: "Engineering",
  },
  {
    name: "Google Cloud (GCP)",
    service: "Infrastructure + BigQuery",
    country: "EU (Belgium)",
    data: ["Personal", "Analytics"],
    dpa: true,
    aiActClause: true,
    sccs: true,
    subprocessors: true,
    trainingUse: "No",
    aiActStatement: true,
    risk: "Low",
    contractStatus: "OK",
    reviewDate: "Annual",
    owner: "Engineering",
  },
  {
    name: "Stripe",
    service: "Payment processing",
    country: "Ireland (EU)",
    data: ["Financial", "Personal"],
    dpa: true,
    aiActClause: false,
    sccs: false,
    subprocessors: true,
    trainingUse: "N/A",
    aiActStatement: false,
    risk: "Low",
    contractStatus: "OK (no AI use)",
    reviewDate: "Annual",
    owner: "Finance",
  },
  {
    name: "Intercom",
    service: "Customer messaging (AI features)",
    country: "USA",
    data: ["Personal", "Behavioural"],
    dpa: true,
    aiActClause: false,
    sccs: true,
    subprocessors: false,
    trainingUse: "Review needed",
    aiActStatement: false,
    risk: "Medium",
    contractStatus: "Review AI feature terms",
    reviewDate: "Q3 2026",
    owner: "Product",
  },
]

const tick = <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
const cross = <XCircle className="w-3.5 h-3.5 text-red-400" />
const warn = <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />

const riskBadge: Record<string, "destructive" | "warning" | "success" | "secondary"> = {
  High: "destructive",
  Medium: "warning",
  Low: "success",
}

export default function ProviderRegister() {
  return (
    <section id="providers" className="space-y-6 scroll-mt-8">
      <div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Provider Register</h2>
        <p className="text-sm text-slate-500">6 vendors identified with AI-relevant data processing. Review status and required actions.</p>
      </div>

      <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                {["Provider", "Service", "Country", "DPA", "AI Act clause", "SCCs", "Training use", "Risk", "Status", "Owner"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {providers.map((p) => (
                <tr key={p.name} className="hover:bg-slate-50 transition-colors">
                  <td className="px-4 py-3.5 font-bold text-slate-900 whitespace-nowrap">{p.name}</td>
                  <td className="px-4 py-3.5 text-xs text-slate-500 max-w-[160px]">{p.service}</td>
                  <td className="px-4 py-3.5 text-xs text-slate-500 whitespace-nowrap">{p.country}</td>
                  <td className="px-4 py-3.5">{p.dpa ? tick : cross}</td>
                  <td className="px-4 py-3.5">{p.aiActClause ? tick : p.risk === "Low" ? warn : cross}</td>
                  <td className="px-4 py-3.5">{p.sccs ? tick : <span className="text-xs text-slate-300">N/A</span>}</td>
                  <td className="px-4 py-3.5 text-xs whitespace-nowrap">
                    <span className={p.trainingUse === "No" || p.trainingUse === "N/A" ? "text-emerald-600 font-medium" : p.trainingUse === "Opted out" ? "text-blue-600 font-medium" : "text-amber-600 font-medium"}>
                      {p.trainingUse}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <Badge variant={riskBadge[p.risk] ?? "secondary"} className="text-[10px]">{p.risk}</Badge>
                  </td>
                  <td className="px-4 py-3.5 text-xs text-slate-600 whitespace-nowrap max-w-[140px]">{p.contractStatus}</td>
                  <td className="px-4 py-3.5 text-xs text-slate-400 whitespace-nowrap">{p.owner}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-xs text-slate-400">
          Extracted from: DPA register · Vendor contracts · Privacy policy · Architecture diagram
        </div>
      </div>
    </section>
  )
}
