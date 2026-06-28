"use client"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const plans = [
  {
    name: "Starter Diagnostic",
    price: "€990",
    period: "one-time",
    description: "Get a clear picture of your AI Act exposure in 48 hours.",
    badge: null,
    features: [
      "Qualification questionnaire",
      "Document upload (up to 10 docs)",
      "Preliminary diagnostic report",
      "AI systems inventory",
      "Risk summary",
      "1 revision round",
    ],
    cta: "Start Diagnostic",
    ctaVariant: "outline" as const,
  },
  {
    name: "Growth Compliance",
    price: "€2,900",
    period: "per engagement",
    description: "Full compliance package — ready for enterprise clients, auditors and investors.",
    badge: "Most popular",
    features: [
      "Everything in Starter",
      "Provider register",
      "Contract gap analysis",
      "Privacy / DPIA recommendations",
      "Transparency notices (draft)",
      "Compliance roadmap",
      "Priority support",
    ],
    cta: "Get Started",
    ctaVariant: "default" as const,
  },
  {
    name: "Enterprise AI Governance",
    price: "Custom",
    period: "ongoing",
    description: "Continuous governance for multi-product companies with complex AI stacks.",
    badge: null,
    features: [
      "Everything in Growth",
      "Multi-product inventory",
      "Evidence repository",
      "Audit-ready report packages",
      "Ongoing monitoring & alerts",
      "Custom legal review",
      "Board / investor pack",
    ],
    cta: "Talk to us",
    ctaVariant: "outline" as const,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            From first diagnostic to enterprise governance
          </h2>
          <p className="text-lg text-slate-500">
            Reduce weeks of manual consulting to hours. Transparent pricing, no hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.badge
                  ? "border-blue-200 bg-blue-600 shadow-xl shadow-blue-100 text-white"
                  : "border-slate-200 bg-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold mb-1 ${plan.badge ? "text-blue-200" : "text-slate-400"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className={`text-4xl font-black ${plan.badge ? "text-white" : "text-slate-900"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.badge ? "text-blue-200" : "text-slate-400"}`}>/{plan.period}</span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.badge ? "text-blue-100" : "text-slate-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.badge ? "text-blue-200" : "text-emerald-500"}`}
                    />
                    <span className={plan.badge ? "text-blue-50" : "text-slate-600"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.badge ? undefined : plan.ctaVariant}
                className={`w-full ${plan.badge ? "bg-white text-blue-600 hover:bg-blue-50" : ""}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-slate-400 mt-10">
          All plans include secure document processing · Data never used for training · GDPR compliant
        </p>
      </div>
    </section>
  )
}
