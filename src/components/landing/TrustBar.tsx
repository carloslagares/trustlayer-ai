import { Lock, ShieldCheck, Eye, ServerCrash } from "lucide-react"

const items = [
  { icon: Lock, label: "End-to-end encrypted", desc: "AES-256 at rest, TLS 1.3 in transit" },
  { icon: ShieldCheck, label: "GDPR compliant", desc: "EU data residency, DPA available" },
  { icon: Eye, label: "Data never trained on", desc: "Your documents stay yours" },
  { icon: ServerCrash, label: "SOC 2 Type II", desc: "In progress · available on request" },
]

export default function TrustBar() {
  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-300 uppercase tracking-widest mb-8">
          Trust &amp; Security
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-1">
                  <Icon className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
