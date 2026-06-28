import { Fingerprint, CreditCard, Building2, HeartPulse, Package, Users } from "lucide-react"

const cases = [
  {
    icon: Fingerprint,
    title: "Identity & Biometrics",
    tags: ["Face match", "Liveness", "OCR", "Document verification"],
    description:
      "If you use face verification, document scanning, or biometric processing — you are likely deploying a high-risk AI system under Annex III. We classify your exact obligation: 1:1 verification vs 1:N identification, and whether remote biometric identification rules apply.",
    color: "blue",
  },
  {
    icon: CreditCard,
    title: "Fintech & Fraud Detection",
    tags: ["Scoring", "Fraud models", "Credit risk", "AML"],
    description:
      "Creditworthiness assessment and fraud detection models fall under high-risk AI categories. TrustLayer maps your models, data inputs, human oversight procedures, and required transparency notices.",
    color: "emerald",
  },
  {
    icon: Package,
    title: "Marketplaces & SaaS",
    tags: ["Recommendations", "Ranking", "Automation", "GenAI"],
    description:
      "SaaS products with AI recommendations, ranking algorithms, or generative features need transparency obligations. We identify every AI touchpoint and generate the necessary notices.",
    color: "purple",
  },
  {
    icon: Building2,
    title: "Hospitality Tech",
    tags: ["Guest screening", "KYC", "OCR", "Booking automation"],
    description:
      "Document verification at check-in, guest screening, and automated booking decisions trigger AI Act obligations. We have specific workflows for hospitality and property management platforms.",
    color: "amber",
  },
  {
    icon: Users,
    title: "HR Tech",
    tags: ["Hiring AI", "Performance scoring", "Screening"],
    description:
      "AI systems used for recruitment, performance evaluation, or employment decisions are explicitly listed as high-risk in Annex III. We generate the full compliance package for HR platforms.",
    color: "rose",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Insurance",
    tags: ["Clinical decision", "Risk scoring", "Diagnostics"],
    description:
      "Medical device AI and insurance risk assessment have the most demanding requirements. TrustLayer generates audit-ready documentation packages aligned with Annex III requirements.",
    color: "teal",
  },
]

const colorMap: Record<string, { bg: string; text: string; tag: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", tag: "bg-blue-100 text-blue-700" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", tag: "bg-emerald-100 text-emerald-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", tag: "bg-purple-100 text-purple-700" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", tag: "bg-amber-100 text-amber-700" },
  rose: { bg: "bg-rose-50", text: "text-rose-600", tag: "bg-rose-100 text-rose-700" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", tag: "bg-teal-100 text-teal-700" },
}

export default function UseCaseGrid() {
  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Built for your sector</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            For SaaS, Fintech, HR Tech, Hospitality Tech
          </h2>
          <p className="text-lg text-slate-500">
            Every industry has specific AI Act obligations. TrustLayer understands your use case and generates sector-specific compliance outputs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => {
            const colors = colorMap[c.color]
            const Icon = c.icon
            return (
              <div key={c.title} className="bg-white rounded-2xl border border-slate-200 p-7 hover:shadow-md transition-shadow">
                <div className={`w-11 h-11 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${colors.text}`} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{c.title}</h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {c.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-2 py-0.5 rounded-full font-medium ${colors.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">{c.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
