import { Upload, Cpu, FileBarChart, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "Upload your existing documentation",
    description:
      "ISO 27001, SOC 2, DPAs, privacy policies, vendor contracts, architecture docs, DPIAs — whatever you have. No perfect documentation required.",
    color: "blue",
  },
  {
    icon: Cpu,
    step: "02",
    title: "AI analyses and extracts evidence",
    description:
      "Our LLM engine reads every document, identifies AI systems, classifies roles (Provider, Deployer, Integrator), detects biometric processing, and maps compliance gaps.",
    color: "purple",
  },
  {
    icon: FileBarChart,
    step: "03",
    title: "Get your compliance roadmap",
    description:
      "Receive a complete AI inventory, risk matrix, provider register, DPIA inputs, transparency notices, and a prioritised roadmap — ready for enterprise clients, auditors and investors.",
    color: "emerald",
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; number: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    number: "text-blue-200",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    border: "border-purple-100",
    number: "text-purple-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-100",
    number: "text-emerald-200",
  },
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">How it works</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            From documentation to compliance in minutes
          </h2>
          <p className="text-lg text-slate-500">
            No need to start from scratch. Your company already has documentation that contains the evidence for AI Act compliance — we just extract it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connector lines (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/3 right-1/3 h-px bg-slate-200 z-0" />

          {steps.map((step, i) => {
            const c = colorMap[step.color]
            const Icon = step.icon
            return (
              <div key={i} className="relative z-10 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${c.bg} ${c.border} border flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${c.text}`} />
                  </div>
                  <span className={`text-5xl font-black ${c.number} leading-none select-none`}>{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>

                {i < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-5 h-5 text-slate-300 rotate-90" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* What we analyse */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8">
          <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">Documents you can upload</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              "ISO 27001 / SOC 2",
              "Privacy Policy",
              "DPA / DPIA",
              "Vendor Contracts",
              "Architecture Diagrams",
              "Risk Register",
              "Terms & Conditions",
              "Product Documentation",
              "Security Questionnaires",
              "API Documentation",
            ].map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100 text-sm text-slate-600 font-medium"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                {doc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
