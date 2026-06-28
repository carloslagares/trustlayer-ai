import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Database, CheckCircle, AlertTriangle, XCircle, Clock, ArrowRight, Zap } from "lucide-react"

const whyItems = [
  { title: "Required by law", desc: "The AI Act does not explicitly mandate a written inventory, but it requires all documentation underpinning conformity. Without knowing your AI systems, you cannot comply." },
  { title: "Enterprise procurement", desc: "Enterprise security questionnaires now ask for an AI systems register. Without one, you lose deals or slow down sales cycles significantly." },
  { title: "Audit readiness", desc: "Data protection authorities and market surveillance authorities expect to see documented AI systems with their risk classification during audits." },
  { title: "Governance foundation", desc: "Every downstream compliance task — DPIA, human oversight, transparency notices — starts with knowing what AI systems you have." },
]

const fields = [
  { field: "System name", example: "Fraud Scoring Engine", purpose: "Identifies the AI system uniquely" },
  { field: "Description", example: "Real-time transaction fraud classification model", purpose: "Explains what the system does" },
  { field: "Business purpose", example: "Prevent fraudulent transactions in checkout flow", purpose: "Links to business justification" },
  { field: "Owner", example: "CPO", purpose: "Accountability assignment" },
  { field: "Status", example: "Production", purpose: "Production / Pilot / Development" },
  { field: "Provider", example: "Internal (XGBoost)", purpose: "Internal vs external AI" },
  { field: "AI type", example: "ML classification model", purpose: "Type of AI technology" },
  { field: "Data input", example: "Transaction history, user behaviour", purpose: "What data the AI consumes" },
  { field: "Data output", example: "Fraud probability score (0–100)", purpose: "What the AI produces" },
  { field: "Personal data", example: "Yes", purpose: "Triggers GDPR obligations" },
  { field: "Biometric data", example: "No", purpose: "Triggers high-risk classification" },
  { field: "Special category data", example: "No", purpose: "Requires explicit legal basis" },
  { field: "Human oversight", example: "Yes — fraud analyst review for scores >80", purpose: "Art. 14 compliance" },
  { field: "Risk level", example: "High", purpose: "Minimal / Low / Medium / High / Prohibited?" },
  { field: "AI Act role", example: "Provider", purpose: "Provider / Deployer / Integrator / Importer" },
  { field: "AI Act classification", example: "Annex III §5(b)", purpose: "Annex reference or exemption" },
  { field: "Evidence documents", example: "DPA_OpenAI_2024.pdf, Risk_Register.xlsx", purpose: "Links to supporting documentation" },
  { field: "Open gaps", example: "DPIA required, no model card", purpose: "Compliance gaps to resolve" },
]

const demoSystems = [
  { name: "Face Match 1:1", provider: "Onfido", role: "Deployer", risk: "High", annexIII: "§2", status: "gap", biometric: true },
  { name: "Fraud Scoring Engine", provider: "Internal", role: "Provider", risk: "High", annexIII: "§5(b)", status: "gap", biometric: false },
  { name: "OCR Document Parser", provider: "AWS Textract", role: "Deployer", risk: "High", annexIII: "§2", status: "partial", biometric: false },
  { name: "HR Sentiment Analyser", provider: "OpenAI", role: "Provider", risk: "Prohibited?", annexIII: "Art. 5", status: "prohibited", biometric: false },
  { name: "Support Chatbot", provider: "OpenAI GPT-4o", role: "Deployer", risk: "Low", annexIII: "Art. 50", status: "compliant", biometric: false },
  { name: "Recommendation Engine", provider: "Internal", role: "Provider", risk: "Minimal", annexIII: "—", status: "compliant", biometric: false },
]

const statusConfig = {
  gap: { icon: AlertTriangle, color: "text-amber-500", label: "Gaps found" },
  partial: { icon: Clock, color: "text-blue-400", label: "In progress" },
  compliant: { icon: CheckCircle, color: "text-emerald-500", label: "Compliant" },
  prohibited: { icon: XCircle, color: "text-red-500", label: "Flag: review" },
}

const riskStyle: Record<string, "destructive" | "warning" | "success" | "secondary"> = {
  "Prohibited?": "destructive",
  High: "warning",
  Low: "success",
  Minimal: "success",
}

export default function InventoryPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-5 gap-1.5 text-blue-700 bg-blue-50 border-blue-100">
                <Database className="w-3.5 h-3.5" />
                Foundation of AI Act compliance
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                Know every AI system in your stack.
                <span className="text-blue-600"> Classified and risk-scored.</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-8">
                The AI Systems Inventory is the foundation of your AI Act compliance. Without it, you cannot conduct a DPIA, assign oversight, draft transparency notices, or prove conformity to auditors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/diagnostic">Generate my inventory →</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/report/example">See full example</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6">
              {whyItems.map((w) => (
                <div key={w.title} className="bg-white rounded-2xl border border-slate-200 p-7">
                  <Zap className="w-5 h-5 text-blue-500 mb-3" />
                  <h3 className="text-base font-bold text-slate-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live demo table */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
              <div>
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Example inventory</p>
                <h2 className="text-3xl font-bold text-slate-900 mb-3">What your inventory looks like</h2>
                <p className="text-slate-500">Generated automatically from your uploaded documentation. You can edit, add, and manage every system.</p>
              </div>
              <Button variant="outline" className="shrink-0 gap-2" asChild>
                <Link href="/report/example">
                  Full report <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {["System", "Provider", "Biometric", "Role", "Risk", "Annex III", "Status"].map((h) => (
                        <th key={h} className="text-left px-4 py-3 text-xs font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {demoSystems.map((s) => {
                      const sc = statusConfig[s.status as keyof typeof statusConfig]
                      const Icon = sc.icon
                      return (
                        <tr key={s.name} className={`hover:bg-slate-50 transition-colors ${s.status === "prohibited" ? "bg-red-50/30" : ""}`}>
                          <td className="px-4 py-3.5 font-semibold text-slate-900 whitespace-nowrap">{s.name}</td>
                          <td className="px-4 py-3.5 text-slate-500 text-xs whitespace-nowrap">{s.provider}</td>
                          <td className="px-4 py-3.5">
                            {s.biometric
                              ? <Badge variant="destructive" className="text-[10px]">Yes</Badge>
                              : <span className="text-xs text-slate-300">No</span>}
                          </td>
                          <td className="px-4 py-3.5">
                            <Badge variant="purple" className="text-[10px] bg-purple-50 text-purple-700 border border-purple-100">{s.role}</Badge>
                          </td>
                          <td className="px-4 py-3.5">
                            <Badge variant={riskStyle[s.risk] ?? "secondary"} className="text-[10px]">{s.risk}</Badge>
                          </td>
                          <td className="px-4 py-3.5 text-xs font-mono text-blue-500">{s.annexIII}</td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center gap-1.5 whitespace-nowrap">
                              <Icon className={`w-3.5 h-3.5 ${sc.color}`} />
                              <span className="text-xs text-slate-600 font-medium">{sc.label}</span>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              <div className="bg-slate-50 border-t border-slate-200 px-4 py-3 text-xs text-slate-400">
                Example: Acme Technologies SL · 6 of 8 systems shown · Generated from ISO 27001 + vendor contracts
              </div>
            </div>
          </div>
        </section>

        {/* Fields reference */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Data model</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">18 fields per system. Every one matters.</h2>
              <p className="text-slate-500">Each field is automatically populated from your documentation, or prompted for manual input where evidence is missing.</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      {["Field", "Example value", "Purpose"].map((h) => (
                        <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {fields.map((f) => (
                      <tr key={f.field} className="hover:bg-slate-50 transition-colors">
                        <td className="px-5 py-3 font-semibold text-slate-800 whitespace-nowrap text-sm">{f.field}</td>
                        <td className="px-5 py-3 text-slate-500 text-xs italic">{f.example}</td>
                        <td className="px-5 py-3 text-slate-400 text-xs">{f.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Database className="w-10 h-10 text-blue-200 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-white mb-4">Your AI inventory, generated in minutes</h2>
            <p className="text-blue-100 mb-8 text-lg">
              Upload your architecture diagrams, vendor contracts, and product documentation. TrustLayer detects and classifies every AI system automatically.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/diagnostic">
                Generate my AI inventory →
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
