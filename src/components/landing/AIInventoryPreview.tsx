import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, AlertTriangle, CheckCircle } from "lucide-react"

const inventoryRows = [
  {
    system: "Face Match 1:1",
    provider: "Onfido",
    isAI: true,
    role: "Deployer",
    data: "Biometric",
    risk: "High",
    evidence: "DPA ✓",
    owner: "CTO",
    status: "Review needed",
  },
  {
    system: "Fraud Scoring Engine",
    provider: "Internal",
    isAI: true,
    role: "Provider",
    data: "Behavioural",
    risk: "High",
    evidence: "Missing",
    owner: "CPO",
    status: "Gap found",
  },
  {
    system: "OCR Document Parser",
    provider: "AWS Textract",
    isAI: true,
    role: "Deployer",
    data: "Personal",
    risk: "Medium",
    evidence: "Partial",
    owner: "Engineering",
    status: "In progress",
  },
  {
    system: "Support Chatbot",
    provider: "OpenAI",
    isAI: true,
    role: "Deployer",
    data: "Personal",
    risk: "Low",
    evidence: "DPA ✓",
    owner: "Product",
    status: "Compliant",
  },
  {
    system: "Email Classifier",
    provider: "Internal",
    isAI: false,
    role: "Provider",
    data: "None",
    risk: "Minimal",
    evidence: "N/A",
    owner: "Engineering",
    status: "Compliant",
  },
]

const riskBadge: Record<string, { variant: "destructive" | "warning" | "secondary" | "success"; label: string }> = {
  High: { variant: "destructive", label: "High" },
  Medium: { variant: "warning", label: "Medium" },
  Low: { variant: "secondary", label: "Low" },
  Minimal: { variant: "success", label: "Minimal" },
}

const statusIcon = {
  "Review needed": <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />,
  "Gap found": <AlertTriangle className="w-3.5 h-3.5 text-red-500" />,
  "In progress": <div className="w-3.5 h-3.5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" />,
  Compliant: <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />,
}

export default function AIInventoryPreview() {
  return (
    <section id="inventory" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">AI Systems Inventory</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Every AI system in your stack, <br className="hidden sm:block" />
              classified and risk-scored
            </h2>
            <p className="text-lg text-slate-500 max-w-xl">
              We detect AI systems from your documentation and vendor contracts, assign AI Act roles, and flag gaps automatically.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            See example report
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  {["System", "Provider", "AI?", "Role", "Data", "Risk", "Evidence", "Owner", "Status"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {inventoryRows.map((row, i) => {
                  const rb = riskBadge[row.risk]
                  return (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3.5 font-medium text-slate-900 whitespace-nowrap">{row.system}</td>
                      <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">{row.provider}</td>
                      <td className="px-4 py-3.5">
                        <Badge variant={row.isAI ? "default" : "secondary"} className="text-[10px]">
                          {row.isAI ? "Yes" : "No"}
                        </Badge>
                      </td>
                      <td className="px-4 py-3.5">
                        <Badge variant="purple" className="text-[10px] bg-purple-50 text-purple-700 border-purple-100 border">
                          {row.role}
                        </Badge>
                      </td>
                      <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">{row.data}</td>
                      <td className="px-4 py-3.5">
                        <Badge variant={rb.variant} className="text-[10px]">
                          {rb.label}
                        </Badge>
                      </td>
                      <td className="px-4 py-3.5 text-slate-500">{row.evidence}</td>
                      <td className="px-4 py-3.5 text-slate-500 whitespace-nowrap">{row.owner}</td>
                      <td className="px-4 py-3.5">
                        <div className="flex items-center gap-1.5 whitespace-nowrap">
                          {statusIcon[row.status as keyof typeof statusIcon]}
                          <span className="text-slate-600 text-xs font-medium">{row.status}</span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-xs text-slate-400">
            Sample inventory generated from uploaded ISO 27001 + vendor contracts · 5 systems shown
          </div>
        </div>
      </div>
    </section>
  )
}
