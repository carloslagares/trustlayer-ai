import Link from "next/link"
import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-white text-base">
                TrustLayer<span className="text-blue-400"> AI</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              AI Act compliance, built from the documentation you already have.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Product</p>
            <ul className="space-y-2 text-sm">
              {["AI Act Diagnostic", "Document Intelligence", "AI Inventory", "Risk Matrix", "Compliance Roadmap"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Use cases</p>
            <ul className="space-y-2 text-sm">
              {["Fintech", "SaaS", "HR Tech", "Hospitality Tech", "Healthcare", "Marketplaces"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Company</p>
            <ul className="space-y-2 text-sm">
              {["About", "Privacy Policy", "Terms of Service", "DPA", "Security"].map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© 2026 TrustLayer AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              EU AI Act compliant service
            </span>
            <span>GDPR · SOC 2 in progress</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
