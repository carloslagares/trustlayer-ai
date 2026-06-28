import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, AlertTriangle, CheckCircle, ArrowRight, XCircle } from "lucide-react"

export default function BiometricsBlogPost() {
  return (
    <>
      <Navbar />
      <main>
        <article className="pt-28 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5 text-sm text-slate-400">
                <span className="bg-red-100 text-red-700 text-xs font-bold px-2.5 py-1 rounded-full">Compliance</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />June 20, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />9 min read</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                Biometric AI under the EU AI Act: Face Match, OCR, and Liveness Detection
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                If your product uses face verification, document scanning, or liveness detection, you&apos;re operating high-risk AI. Here&apos;s a complete breakdown of your obligations, the documentation you need, and the most common compliance mistakes.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-10">
              <p className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-3 flex items-center gap-2">
                <AlertTriangle className="w-3.5 h-3.5" />
                Quick summary
              </p>
              <ul className="space-y-2">
                {[
                  "Face match 1:1 (verification) = High-risk AI under Annex III §2",
                  "Face recognition 1:N (identification) = Largely prohibited in public spaces",
                  "Liveness detection alone may also be high-risk depending on context",
                  "OCR of identity documents = High-risk AI when used for KYC/onboarding",
                  "DPIA is mandatory before deployment (not optional)",
                  "Human oversight must be built into the rejection decision flow",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-amber-900">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-0">
              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">1:1 Verification vs 1:N Identification — why this matters</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The AI Act makes a fundamental distinction between two types of biometric processing:
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="border-2 border-emerald-200 bg-emerald-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span className="font-bold text-emerald-800">Verification 1:1</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">Comparing a person&apos;s face against their own identity document or a previously enrolled template.</p>
                  <p className="text-xs text-emerald-700 font-semibold mb-2">Examples:</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {["Selfie vs passport photo (KYC)", "Face login against enrolled face", "Liveness + document match"].map(e => (
                      <li key={e} className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-emerald-400" />{e}</li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold text-emerald-800 mt-3 pt-3 border-t border-emerald-200">Status: High-risk AI — permitted with full compliance pack</p>
                </div>

                <div className="border-2 border-red-200 bg-red-50 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="w-5 h-5 text-red-600" />
                    <span className="font-bold text-red-800">Identification 1:N</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">Identifying who a person is by comparing their face against a database of many people.</p>
                  <p className="text-xs text-red-700 font-semibold mb-2">Examples:</p>
                  <ul className="space-y-1 text-xs text-slate-600">
                    {["CCTV person identification", "Crowd face matching", "Employee attendance tracking 1:N"].map(e => (
                      <li key={e} className="flex items-center gap-1.5"><div className="w-1 h-1 rounded-full bg-red-400" />{e}</li>
                    ))}
                  </ul>
                  <p className="text-xs font-bold text-red-800 mt-3 pt-3 border-t border-red-200">Status: Prohibited in public spaces — narrow law enforcement exceptions only</p>
                </div>
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 text-sm bg-slate-50 border border-slate-200 rounded-xl p-4">
                <strong>Important edge case:</strong> If your 1:1 verification system builds or queries a database of biometric templates at scale — even for the same user over time — regulators may reclassify it as 1:N. Get legal advice if you store biometric templates beyond the immediate verification session.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">What you need — the full documentation checklist</h2>

              {[
                {
                  title: "1. Data Protection Impact Assessment (DPIA)",
                  article: "GDPR Art. 35 + AI Act Art. 27",
                  urgent: true,
                  items: [
                    "Description of the processing operation (what, why, how, for whom)",
                    "Assessment of necessity and proportionality",
                    "Assessment of risks to rights and freedoms of data subjects",
                    "Measures to address risks (technical and organisational)",
                    "Consultation with DPO (mandatory if you have one)",
                    "Named data protection officer or controller",
                    "Must be reviewed when the system changes",
                  ],
                },
                {
                  title: "2. Transparency notice (in product UI)",
                  article: "AI Act Art. 13 + GDPR Art. 13",
                  urgent: true,
                  items: [
                    "Clear disclosure that biometric data is being processed",
                    "Purpose of the biometric processing",
                    "Legal basis (usually consent or contractual necessity)",
                    "Retention period for biometric templates",
                    "Whether automated decisions are being made",
                    "User rights: access, deletion, objection",
                    "Identity and contact details of the controller",
                  ],
                },
                {
                  title: "3. Data retention policy",
                  article: "GDPR Art. 5(1)(e) + AI Act Art. 9",
                  urgent: false,
                  items: [
                    "Define the maximum retention period for biometric templates",
                    "Document why that period is necessary for the stated purpose",
                    "Implement automatic deletion at end of retention period",
                    "Define what happens to templates when a user deletes their account",
                    "Document in DPIA and privacy policy",
                  ],
                },
                {
                  title: "4. Human oversight and review procedure",
                  article: "AI Act Art. 14",
                  urgent: true,
                  items: [
                    "Define who reviews identity rejection decisions",
                    "Document the escalation path: AI decision → human review",
                    "Specify the timeframe for human review",
                    "Define the criteria for override (when can a human reverse the AI decision?)",
                    "Log all human reviews and override decisions",
                    "Train the review team on the AI system&apos;s limitations",
                  ],
                },
                {
                  title: "5. Provider DPA and AI Act clause",
                  article: "AI Act Art. 28 + GDPR Art. 28",
                  urgent: false,
                  items: [
                    "Data Processing Agreement (DPA) with your biometric vendor (Onfido, Jumio, etc.)",
                    "The DPA must cover: processing purpose, data categories, retention, subprocessors",
                    "AI Act clause: your vendor must agree to their obligations as AI provider",
                    "Confirm whether the vendor uses your data for training their models",
                    "Request the vendor&apos;s conformity documentation if they are the AI system provider",
                  ],
                },
              ].map((section) => (
                <div key={section.title} className="mb-6">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-slate-900">{section.title}</h3>
                    {section.urgent && (
                      <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-1 rounded-full shrink-0">Required</span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-blue-500 mb-4">{section.article}</p>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                        <div className="w-5 h-5 rounded border border-slate-200 bg-white shrink-0 flex items-center justify-center mt-0.5">
                          <div className="w-2 h-2 rounded-sm border border-slate-300" />
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: item }} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The most common biometric compliance mistakes</h2>
              <div className="space-y-4 mb-10">
                {[
                  {
                    mistake: "No DPIA before deployment",
                    detail: "Many companies launch their biometric feature without a DPIA, then try to retroactively document the risk. The DPIA must be conducted before the processing starts. A post-hoc DPIA is not compliant.",
                  },
                  {
                    mistake: "Assuming your vendor handles compliance",
                    detail: "Biometric vendors like Onfido or Jumio are your data processors. Their compliance (ISO 27001, SOC 2) does not substitute for your own AI Act obligations as a deployer. You remain the controller and must have your own documentation.",
                  },
                  {
                    mistake: "No transparency notice in the UI",
                    detail: "A generic privacy policy that mentions biometric processing in paragraph 47 is not sufficient. The transparency notice must be presented at the point of biometric data collection, in plain language, before processing begins.",
                  },
                  {
                    mistake: "Storing biometric templates indefinitely",
                    detail: "Biometric templates stored &apos;just in case&apos; without a defined purpose and retention period violates both GDPR and the AI Act. Define your retention period, justify it, and implement automatic deletion.",
                  },
                  {
                    mistake: "No human review for rejections",
                    detail: "If your AI rejects a user and that decision has significant consequences (denial of service, failed KYC), the user must have the right to request human review. Fully automated high-stakes biometric decisions without any appeal path are non-compliant.",
                  },
                ].map((m, i) => (
                  <div key={i} className="bg-red-50 border border-red-100 rounded-xl p-5">
                    <p className="text-sm font-bold text-red-900 mb-2 flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-red-500 shrink-0" />
                      Mistake {i + 1}: {m.mistake}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed pl-6" dangerouslySetInnerHTML={{ __html: m.detail }} />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center mt-10">
              <h3 className="text-xl font-bold mb-3">Assess your biometric AI compliance in minutes</h3>
              <p className="text-blue-100 mb-6">
                TrustLayer generates your DPIA inputs, transparency notices, provider checklist, and human oversight procedure from your existing documentation.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <Link href="/diagnostic">
                  Start diagnostic →
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
