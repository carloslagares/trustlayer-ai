import ReportNav from "@/components/report/ReportNav"
import ExecSummary from "@/components/report/ExecSummary"
import AIInventoryReport from "@/components/report/AIInventoryReport"
import RiskMatrix from "@/components/report/RiskMatrix"
import ProviderRegister from "@/components/report/ProviderRegister"
import ComplianceGaps from "@/components/report/ComplianceGaps"
import RoadmapSection from "@/components/report/RoadmapSection"
import { Download, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExampleReportPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <ReportNav />

      <main className="flex-1 min-w-0">
        {/* Top bar */}
        <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="w-px h-4 bg-slate-200" />
            <span className="text-sm font-semibold text-slate-700">Example Report — Acme Technologies SL</span>
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Example</span>
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" className="gap-1.5 hidden sm:flex">
              <Download className="w-3.5 h-3.5" />
              PDF
            </Button>
            <Button size="sm" asChild>
              <Link href="/#contact">Get my report →</Link>
            </Button>
          </div>
        </div>

        {/* Report content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-16">
          <ExecSummary />
          <AIInventoryReport />
          <RiskMatrix />
          <ProviderRegister />
          <ComplianceGaps />
          <RoadmapSection />
        </div>
      </main>
    </div>
  )
}
