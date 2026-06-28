import { Calendar, Scale, TrendingUp, AlertOctagon } from "lucide-react"

const reasons = [
  {
    icon: Calendar,
    title: "August 2026 enforcement",
    description:
      "The EU AI Act is now in force. Prohibited practices apply from February 2025. High-risk AI systems must be compliant by August 2026. Enforcement has started.",
  },
  {
    icon: AlertOctagon,
    title: "Fines up to €35M or 7% of global turnover",
    description:
      "Non-compliance with prohibited AI practices carries fines of up to €35M or 7% of global annual turnover — whichever is higher. High-risk violations: up to €15M.",
  },
  {
    icon: Scale,
    title: "Enterprise clients and investors require it",
    description:
      "Enterprise procurement teams now include AI Act compliance in their security questionnaires. Investors are asking about AI governance in due diligence.",
  },
  {
    icon: TrendingUp,
    title: "Competitive advantage, not just compliance",
    description:
      "Companies that move early signal maturity and trustworthiness. AI governance documentation is becoming a sales asset in regulated and enterprise markets.",
  },
]

export default function WhyNow() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3">Why now</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            The AI Act is enforced. <br />Your competitors are moving.
          </h2>
          <p className="text-lg text-slate-400">
            This is not a future regulation. Obligations are live. The question is not whether to comply, but how fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon
            return (
              <div key={r.title} className="bg-slate-800 rounded-2xl border border-slate-700 p-7">
                <div className="w-10 h-10 rounded-xl bg-slate-700 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{r.description}</p>
              </div>
            )
          })}
        </div>

        {/* Risk map teaser */}
        <div className="mt-12 bg-slate-800 rounded-2xl border border-slate-700 p-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">AI Act Risk Map</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { level: "Prohibited", color: "bg-red-500", items: ["Social scoring", "Real-time biometric ID in public", "Subliminal manipulation", "Emotion recognition (work/school)"] },
              { level: "High Risk", color: "bg-amber-400", items: ["Biometric verification", "HR / hiring AI", "Credit scoring", "Law enforcement AI", "Critical infrastructure"] },
              { level: "Transparency", color: "bg-blue-400", items: ["Chatbots", "AI-generated content", "Emotion recognition", "Deep fakes"] },
              { level: "Minimal", color: "bg-emerald-400", items: ["Spam filters", "Recommendation engines", "AI in games", "Basic automation"] },
            ].map((cat) => (
              <div key={cat.level}>
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${cat.color}`} />
                  <span className="text-xs font-bold text-white">{cat.level}</span>
                </div>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-slate-400 pl-4 relative before:absolute before:left-0 before:top-1.5 before:w-1.5 before:h-px before:bg-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
