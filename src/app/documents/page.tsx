import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Upload, FileText, Cpu, CheckCircle, Lock, Zap, Search, GitBranch } from "lucide-react"

const docTypes = [
  {
    category: "Privacy & Data",
    color: "purple",
    icon: "🔒",
    docs: [
      { name: "Privacy Policy", extracts: ["AI systems mentioned", "Data categories", "Third-party AI tools disclosed"] },
      { name: "DPA (Data Processing Agreement)", extracts: ["Sub-processors", "AI use restrictions", "Training data clauses"] },
      { name: "DPIA", extracts: ["Risk assessment outcomes", "High-risk flags", "Mitigation measures"] },
      { name: "Data Flow Map", extracts: ["AI touchpoints", "Cross-border transfers", "Biometric flows"] },
    ],
  },
  {
    category: "Security & Compliance",
    color: "blue",
    icon: "🛡️",
    docs: [
      { name: "ISO 27001 SoA", extracts: ["AI-relevant controls", "Data classification", "Incident procedures"] },
      { name: "SOC 2 Report", extracts: ["AI system controls", "Vendor management", "Risk evidence"] },
      { name: "Security Questionnaire", extracts: ["AI capabilities disclosed", "Data handling claims"] },
      { name: "Penetration Test Report", extracts: ["AI component vulnerabilities", "Risk findings"] },
    ],
  },
  {
    category: "Legal & Contracts",
    color: "emerald",
    icon: "📋",
    docs: [
      { name: "Vendor Contracts", extracts: ["AI use clauses", "Training data rights", "Liability for AI errors"] },
      { name: "Customer T&Cs", extracts: ["AI disclosure obligations", "Automated decision notices"] },
      { name: "Standard Contractual Clauses", extracts: ["Transfer mechanisms", "AI processor obligations"] },
      { name: "IP & Licensing Agreements", extracts: ["Model ownership", "Training data rights"] },
    ],
  },
  {
    category: "Product & Architecture",
    color: "amber",
    icon: "⚙️",
    docs: [
      { name: "Architecture Diagram", extracts: ["AI components detected", "Provider endpoints", "Data flows"] },
      { name: "API Documentation", extracts: ["AI API calls", "Third-party model usage", "Biometric endpoints"] },
      { name: "Product Specification", extracts: ["AI features described", "Decision automation", "User-facing AI"] },
      { name: "ML Model Documentation", extracts: ["Model purpose", "Training data", "Accuracy metrics"] },
    ],
  },
  {
    category: "HR & Training",
    color: "rose",
    icon: "👥",
    docs: [
      { name: "HR Policy", extracts: ["AI use in HR processes", "Employee monitoring", "Hiring automation"] },
      { name: "AI Training Records", extracts: ["Literacy training completion", "Role coverage"] },
      { name: "Code of Conduct", extracts: ["AI ethics commitments", "Employee AI obligations"] },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", tag: "bg-purple-100 text-purple-700" },
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", tag: "bg-blue-100 text-blue-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", tag: "bg-emerald-100 text-emerald-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100", tag: "bg-amber-100 text-amber-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", tag: "bg-rose-100 text-rose-700" },
}

const howSteps = [
  { icon: Upload, title: "Upload any document", desc: "PDF, DOCX, or plain text. No special format required. Upload what you have." },
  { icon: Search, title: "LLM extraction", desc: "Claude reads each document and extracts structured evidence: AI systems, vendors, data flows, biometric mentions, contractual clauses." },
  { icon: GitBranch, title: "Evidence mapped to requirements", desc: "Each piece of extracted evidence is linked to specific AI Act articles, questions in the questionnaire, and gaps in your compliance profile." },
  { icon: CheckCircle, title: "Confidence scored", desc: "Each answer gets a confidence score. Low-confidence items are flagged for human review. You can override any AI suggestion." },
]

export default function DocumentsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="secondary" className="mb-5 gap-1.5 text-blue-700 bg-blue-50 border-blue-100">
                  <Cpu className="w-3.5 h-3.5" />
                  Powered by Claude (Anthropic)
                </Badge>
                <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Your docs already contain the evidence.
                  <span className="text-blue-600"> We extract it.</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                  Upload your ISO 27001, vendor contracts, DPAs, and product documentation. Our LLM extraction engine reads every document and maps the evidence to AI Act requirements — automatically.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/diagnostic">Start with your documents →</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/report/example">See extracted output</Link>
                  </Button>
                </div>
              </div>

              {/* Processing card */}
              <div className="bg-slate-900 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Document processing</p>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium">Live</span>
                  </div>
                </div>
                {[
                  { name: "ISO_27001_SoA_2024.pdf", status: "processed", found: "14 AI-relevant controls" },
                  { name: "Onfido_DPA_signed.pdf", status: "processed", found: "Biometric sub-processor identified" },
                  { name: "Privacy_Policy_v3.docx", status: "processing", found: "Scanning…" },
                  { name: "Vendor_contract_OpenAI.pdf", status: "queued", found: "Waiting" },
                ].map((f) => (
                  <div key={f.name} className="flex items-center gap-3 bg-slate-800 rounded-xl px-4 py-3">
                    <FileText className={`w-4 h-4 shrink-0 ${f.status === "processed" ? "text-emerald-400" : f.status === "processing" ? "text-blue-400" : "text-slate-500"}`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-white truncate">{f.name}</p>
                      <p className={`text-[10px] mt-0.5 ${f.status === "processed" ? "text-emerald-400" : f.status === "processing" ? "text-blue-300" : "text-slate-500"}`}>{f.found}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full shrink-0 ${f.status === "processed" ? "bg-emerald-400" : f.status === "processing" ? "bg-blue-400 animate-pulse" : "bg-slate-600"}`} />
                  </div>
                ))}
                <div className="border-t border-slate-700 pt-3 flex justify-between text-xs text-slate-400">
                  <span>3 of 4 processed</span>
                  <span>12 evidence items extracted</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Extraction engine</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">From raw document to structured compliance evidence</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {howSteps.map((s, i) => {
                const Icon = s.icon
                return (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-2xl font-black text-slate-100 mb-2 leading-none">0{i + 1}</p>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{s.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Doc types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">What we can process</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Every document type in your compliance stack</h2>
              <p className="text-slate-500">We extract AI Act-relevant evidence from any document. No special format required.</p>
            </div>
            <div className="space-y-5">
              {docTypes.map((cat) => {
                const c = colorMap[cat.color]
                return (
                  <div key={cat.category} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                    <div className={`px-6 py-4 border-b border-slate-100 flex items-center gap-3 ${c.bg}`}>
                      <span className="text-xl">{cat.icon}</span>
                      <p className={`text-sm font-bold ${c.text}`}>{cat.category}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-x divide-y divide-slate-100">
                      {cat.docs.map((doc) => (
                        <div key={doc.name} className="p-5">
                          <p className="text-sm font-semibold text-slate-900 mb-3">{doc.name}</p>
                          <div className="space-y-1.5">
                            {doc.extracts.map((e) => (
                              <div key={e} className="flex items-start gap-1.5 text-xs text-slate-500">
                                <Zap className={`w-3 h-3 mt-0.5 shrink-0 ${c.text}`} />
                                {e}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <Lock className="w-8 h-8 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Your documents stay yours</h3>
            <p className="text-slate-500 mb-8 max-w-xl mx-auto">
              All documents are encrypted at rest (AES-256) and in transit (TLS 1.3). We operate under GDPR, never use your documents to train AI models, and delete them on request. EU data residency available.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              {["AES-256 encryption", "TLS 1.3 in transit", "EU data residency", "GDPR compliant", "No training use", "Delete on request"].map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Upload your first document. Get evidence in minutes.</h2>
            <p className="text-slate-500 mb-8">No perfect documentation required. Upload what you have — ISO, DPAs, contracts, product docs. We extract what&apos;s relevant.</p>
            <Button size="lg" asChild>
              <Link href="/diagnostic">Start AI Act Diagnostic →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
