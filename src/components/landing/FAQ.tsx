"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Does my company need to comply with the EU AI Act?",
    a: "If your company provides, deploys, imports, or distributes AI systems in the EU — or if you use AI in products sold to EU customers — you have obligations under the AI Act. This applies regardless of where your company is headquartered.",
  },
  {
    q: "What is a 'high-risk' AI system under the AI Act?",
    a: "Annex III of the AI Act lists high-risk AI systems: biometric identification, AI in critical infrastructure, educational and vocational training, employment (hiring, performance), essential services (credit scoring, insurance), law enforcement, migration and border control, and administration of justice. If your product touches any of these, you have mandatory obligations.",
  },
  {
    q: "What if I already have ISO 27001 or SOC 2?",
    a: "Great — that's a head start. ISO 27001 and SOC 2 cover security and privacy governance. The AI Act adds specific requirements on top: AI systems inventory, risk classification, human oversight procedures, transparency notices, and DPIA inputs for biometric or high-risk systems. TrustLayer extracts the relevant evidence from your existing documentation and identifies what's missing.",
  },
  {
    q: "How does the document analysis work?",
    a: "You upload your existing documents (PDF, DOCX). Our LLM extraction engine — powered by Claude (Anthropic) — reads each document and extracts structured evidence: AI systems mentioned, vendors, data flows, biometric mentions, contractual clauses, and compliance gaps. The output is mapped to AI Act requirements automatically.",
  },
  {
    q: "Is my documentation safe?",
    a: "Yes. Documents are encrypted at rest (AES-256) and in transit (TLS 1.3). We operate under GDPR, never use your documents to train AI models, and can provide a DPA on request. You retain full ownership of your data.",
  },
  {
    q: "What is the difference between Provider, Deployer, and Integrator roles?",
    a: "The AI Act defines specific roles with different obligations. A Provider develops and puts an AI system on the market. A Deployer uses an AI system in their products or services. An Integrator embeds AI components from providers into their product. Your obligations — and the documentation you need — differ significantly by role. TrustLayer classifies your exact role from your documentation.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl font-bold text-slate-900">Common questions</h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 ml-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100">
                  <div className="pt-4">{faq.a}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
