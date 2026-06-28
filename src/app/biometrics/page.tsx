import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Fingerprint, ShieldCheck, AlertTriangle, CheckCircle,
  User, Users, FileSearch, Eye, Clock, Scale
} from "lucide-react"

const obligations = [
  {
    icon: FileSearch,
    title: "DPIA required",
    article: "GDPR Art. 35 + AI Act Art. 27",
    desc: "Biometric data is special category under GDPR. A DPIA is mandatory before deployment, and must be kept up to date.",
    required: true,
  },
  {
    icon: Eye,
    title: "Transparency notice",
    article: "AI Act Art. 13 + 50",
    desc: "Users must be informed they are subject to biometric processing. The notice must include purpose, legal basis, and the existence of automated processing.",
    required: true,
  },
  {
    icon: Clock,
    title: "Data retention policy",
    article: "GDPR Art. 5(1)(e)",
    desc: "Biometric templates must be deleted after the purpose is fulfilled. Retention must be defined and documented in your DPIA.",
    required: true,
  },
  {
    icon: User,
    title: "Human review mechanism",
    article: "AI Act Art. 14",
    desc: "High-risk AI systems require a meaningful human oversight process. Rejection decisions must be reviewable by a human operator.",
    required: true,
  },
  {
    icon: Scale,
    title: "Provider DPA + AI Act clause",
    article: "AI Act Art. 28 + GDPR Art. 28",
    desc: "Your biometric vendor (Onfido, Jumio, iProov, etc.) must have a DPA in place and an AI Act compliance clause covering their processor obligations.",
    required: true,
  },
  {
    icon: ShieldCheck,
    title: "Security & access controls",
    article: "AI Act Art. 9 + GDPR Art. 32",
    desc: "Biometric data must be protected with appropriate technical measures. Access logs, encryption at rest, and breach procedures required.",
    required: true,
  },
]

const verification = [
  { label: "1:1 Verification", icon: User, color: "emerald", permitted: true,
    desc: "Face match comparing a selfie against an ID document photo. The user's identity against their own document.",
    examples: ["Onboarding KYC", "Document verification", "Face login"],
    obligations: ["DPIA", "Transparency notice", "Retention policy", "DPA with provider"],
  },
  { label: "1:N Identification", icon: Users, color: "red", permitted: false,
    desc: "Comparing a face against a database of many people. Identifying who someone is from a group.",
    examples: ["Real-time CCTV identification", "Public space surveillance", "Mass biometric databases"],
    obligations: ["Prohibited in public spaces (Art. 5)", "Narrow law enforcement exceptions only"],
  },
]

const providers = [
  { name: "Onfido", type: "Face match + OCR", euData: true, aiActStatement: false, dpaTemplate: true },
  { name: "Jumio", type: "Identity verification", euData: true, aiActStatement: false, dpaTemplate: true },
  { name: "iProov", type: "Liveness detection", euData: true, aiActStatement: true, dpaTemplate: true },
  { name: "Sumsub", type: "KYC platform", euData: true, aiActStatement: false, dpaTemplate: true },
  { name: "AWS Rekognition", type: "Face analysis API", euData: true, aiActStatement: false, dpaTemplate: false },
  { name: "Azure Face API", type: "Biometric API", euData: true, aiActStatement: false, dpaTemplate: false },
]

export default function BiometricsPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="destructive" className="mb-5 gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5" />
                High-risk AI · Annex III §2
              </Badge>
              <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-6">
                Biometrics &amp; Identity AI
                <span className="block text-blue-600 mt-1">under the EU AI Act</span>
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed mb-8">
                If your product uses face verification, document scanning, liveness detection, or biometric onboarding — you are operating a high-risk AI system. Here&apos;s exactly what you need to comply.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/diagnostic">Assess my biometric AI →</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/report/example">See example DPIA output</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 1:1 vs 1:N */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">The critical distinction</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Verification 1:1 vs Identification 1:N</h2>
              <p className="text-slate-500">This distinction determines whether your system is permitted, high-risk, or potentially prohibited.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {verification.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.label} className={`rounded-2xl border-2 p-8 ${v.permitted ? "border-emerald-200 bg-emerald-50" : "border-red-200 bg-red-50"}`}>
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${v.permitted ? "bg-emerald-100" : "bg-red-100"}`}>
                        <Icon className={`w-6 h-6 ${v.permitted ? "text-emerald-600" : "text-red-600"}`} />
                      </div>
                      <Badge variant={v.permitted ? "success" : "destructive"} className="text-xs">
                        {v.permitted ? "Permitted — High Risk" : "Largely Prohibited"}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{v.label}</h3>
                    <p className="text-sm text-slate-600 mb-5 leading-relaxed">{v.desc}</p>
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Examples</p>
                      <div className="flex flex-wrap gap-1.5">
                        {v.examples.map((e) => (
                          <span key={e} className={`text-xs px-2 py-1 rounded-lg font-medium ${v.permitted ? "bg-emerald-100 text-emerald-700" : "bg-red-100 text-red-700"}`}>{e}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Your obligations</p>
                      <ul className="space-y-1.5">
                        {v.obligations.map((o) => (
                          <li key={o} className="flex items-center gap-2 text-sm text-slate-700">
                            {v.permitted
                              ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                              : <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" />}
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Obligations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Mandatory obligations</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">What you must have in place</h2>
              <p className="text-slate-500">All six are required for any biometric system operating in the EU. TrustLayer generates the documentation for each.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {obligations.map((o) => {
                const Icon = o.icon
                return (
                  <div key={o.title} className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <Badge variant="destructive" className="text-[10px]">Required</Badge>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1">{o.title}</h3>
                    <p className="text-[11px] font-mono text-blue-500 mb-2">{o.article}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{o.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Provider status */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">Biometric providers</p>
              <h2 className="text-3xl font-bold text-white mb-3">AI Act compliance status by provider</h2>
              <p className="text-slate-400">Current status as of June 2026. TrustLayer tracks provider compliance posture automatically.</p>
            </div>
            <div className="rounded-2xl border border-slate-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-800 border-b border-slate-700">
                    {["Provider", "Service type", "EU data residency", "AI Act statement", "DPA template"].map((h) => (
                      <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-slate-400 uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {providers.map((p) => (
                    <tr key={p.name} className="hover:bg-slate-800/50 transition-colors">
                      <td className="px-5 py-4 font-bold text-white">{p.name}</td>
                      <td className="px-5 py-4 text-slate-400">{p.type}</td>
                      <td className="px-5 py-4">
                        {p.euData ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}
                      </td>
                      <td className="px-5 py-4">
                        {p.aiActStatement ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-amber-400" />}
                      </td>
                      <td className="px-5 py-4">
                        {p.dpaTemplate ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-red-400" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 mt-4">Status based on publicly available documentation and disclosures. Last updated June 2026.</p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Fingerprint className="w-12 h-12 text-blue-600 mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Is your biometric system AI Act compliant?</h2>
            <p className="text-slate-500 mb-8 text-lg">
              TrustLayer generates your DPIA inputs, transparency notices, provider DPA checklist, and human oversight procedure — from your existing documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/diagnostic">Start free diagnostic →</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/#contact">Talk to a compliance expert</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
