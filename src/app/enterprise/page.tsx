import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Building2, CheckCircle, Download, FileText, ShieldCheck,
  TrendingUp, Scale, Users, AlertTriangle, ArrowRight
} from "lucide-react"

const packContents = [
  {
    icon: FileText,
    title: "AI Act Compliance Report",
    desc: "Full diagnostic output: readiness score, risk matrix, findings, article references. Executive-ready format.",
  },
  {
    icon: ShieldCheck,
    title: "AI Systems Inventory",
    desc: "Complete register of all AI systems: provider, role, risk level, data processed, Annex III classification, evidence status.",
  },
  {
    icon: Users,
    title: "Provider Register",
    desc: "All AI vendors with DPA status, AI Act compliance posture, training data use, subprocessors, and required actions.",
  },
  {
    icon: AlertTriangle,
    title: "Risk Matrix",
    desc: "All identified risks with severity, article reference, recommended action, owner, and deadline.",
  },
  {
    icon: Scale,
    title: "Data Processing Mapping",
    desc: "AI-relevant processing activities mapped to legal basis, data categories, retention, and cross-border transfers.",
  },
  {
    icon: FileText,
    title: "Human Oversight Procedure",
    desc: "Documented review process for high-risk AI decisions. Ready for audit and enterprise security questionnaires.",
  },
  {
    icon: FileText,
    title: "Transparency Notices",
    desc: "Drafted transparency notices for each AI system that requires user disclosure under Art. 13 and Art. 50.",
  },
  {
    icon: TrendingUp,
    title: "Compliance Roadmap",
    desc: "Prioritised task list with owners, deadlines, and effort estimates. Board-ready format.",
  },
  {
    icon: Building2,
    title: "Board Summary",
    desc: "One-page executive summary: risk exposure, key findings, recommended investment, and timeline to compliance.",
  },
]

const exportFormats = [
  { format: "PDF", desc: "Board-ready, branded, printable", color: "red" },
  { format: "DOCX", desc: "Editable Word format for legal review", color: "blue" },
  { format: "CSV", desc: "AI inventory and risk matrix in spreadsheet", color: "emerald" },
  { format: "JSON", desc: "Structured data for your compliance tools", color: "purple" },
]

const useCases = [
  {
    audience: "Enterprise Sales",
    icon: "💼",
    desc: "When enterprise procurement asks for AI Act compliance documentation in their security questionnaire, you can share the full Due Diligence Pack immediately — no delays, no consultants.",
    quote: "Reduced sales cycle by 3 weeks. Enterprise compliance questions now answered in hours.",
  },
  {
    audience: "Due Diligence (M&A / Investment)",
    icon: "📊",
    desc: "Investors and acquirers include AI governance in technical and legal due diligence. The pack provides a complete, auditable picture of your AI risk posture.",
    quote: "Investors asked about AI compliance. We had the full pack ready in 24 hours.",
  },
  {
    audience: "Legal & External Auditors",
    icon: "⚖️",
    desc: "Data protection authorities and auditors request evidence of AI Act compliance. Every item in the pack includes article references and evidence links.",
    quote: "DPA audit prep went from weeks to days. Everything was already mapped to the right articles.",
  },
]

export default function EnterprisePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge variant="purple" className="mb-5 gap-1.5 bg-purple-50 text-purple-700 border-purple-100">
                  <Building2 className="w-3.5 h-3.5" />
                  Enterprise · Due Diligence · Investors
                </Badge>
                <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                  Everything an enterprise, investor, or auditor
                  <span className="text-blue-600"> needs to see.</span>
                </h1>
                <p className="text-xl text-slate-500 leading-relaxed mb-8">
                  The Enterprise Due Diligence Pack is a complete, audit-ready documentation bundle generated from your existing company documentation. Share it in enterprise sales cycles, investor due diligence, or regulatory audits.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <Link href="/diagnostic">Generate my pack →</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/report/example">See example report</Link>
                  </Button>
                </div>
              </div>

              {/* Pack preview card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-7 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Enterprise Due Diligence Pack</p>
                  <Badge variant="success" className="text-[10px]">Ready</Badge>
                </div>
                {packContents.slice(0, 6).map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                        <Icon className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <p className="text-xs font-semibold text-slate-700">{item.title}</p>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-500 ml-auto shrink-0" />
                    </div>
                  )
                })}
                <div className="flex gap-2 pt-2">
                  {exportFormats.map((f) => (
                    <div key={f.format} className="flex-1 bg-slate-50 border border-slate-100 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-slate-700">{f.format}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pack contents */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">What&apos;s included</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">9 documents. Every question answered.</h2>
              <p className="text-slate-500">Every item in the pack is generated from your documentation and linked to specific AI Act articles.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {packContents.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-3xl font-black text-slate-100 leading-none">0{i + 1}</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Export formats */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-xl font-bold text-slate-900 mb-2">Export in any format</h3>
              <p className="text-slate-500 text-sm">Every document in the pack is available in multiple formats. Share what each stakeholder needs.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {exportFormats.map((f) => (
                <div key={f.format} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center">
                  <Download className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                  <p className="text-lg font-black text-slate-800 mb-1">{f.format}</p>
                  <p className="text-xs text-slate-400">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Who uses it</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Built for three high-stakes situations</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((uc) => (
                <div key={uc.audience} className="bg-white rounded-2xl border border-slate-200 p-7">
                  <div className="text-3xl mb-4">{uc.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-3">{uc.audience}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-5">{uc.desc}</p>
                  <blockquote className="border-l-2 border-blue-200 pl-4 italic text-sm text-slate-400">
                    &ldquo;{uc.quote}&rdquo;
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Building2 className="w-10 h-10 text-blue-400 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready for enterprise, audits, and investors</h2>
            <p className="text-slate-400 mb-8 text-lg">
              The pack is generated from your documentation in 24–48 hours. No manual consulting work required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/diagnostic">
                  Generate my Due Diligence Pack
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800" asChild>
                <Link href="/#contact">Talk to us first</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
