"use client"
import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowLeft } from "lucide-react"
import Step1Company from "./Step1Company"
import Step2Upload from "./Step2Upload"
import Step3Questions from "./Step3Questions"
import Step4Generating from "./Step4Generating"
import Step5Results from "./Step5Results"

export type DiagnosticData = {
  company: string
  website: string
  industry: string
  employees: string
  sectors: string[]
  usesAI: string
  usesBiometrics: string
  usesOCR: string
  usesGenAI: string
  usesScoring: string
  sellsToEnterprise: string
  role: string
  email: string
  name: string
  docs: File[]
  answers: Record<string, string>
}

const STEPS = [
  { n: 1, label: "Company" },
  { n: 2, label: "Documents" },
  { n: 3, label: "Questionnaire" },
  { n: 4, label: "Generating" },
  { n: 5, label: "Results" },
]

const emptyData: DiagnosticData = {
  company: "", website: "", industry: "", employees: "",
  sectors: [], usesAI: "", usesBiometrics: "", usesOCR: "",
  usesGenAI: "", usesScoring: "", sellsToEnterprise: "",
  role: "", email: "", name: "", docs: [], answers: {},
}

export default function DiagnosticShell() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState<DiagnosticData>(emptyData)

  const update = (patch: Partial<DiagnosticData>) => setData((d) => ({ ...d, ...patch }))
  const next = () => setStep((s) => s + 1)
  const back = () => setStep((s) => s - 1)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {step > 1 && step < 4 && (
            <button onClick={back} className="text-slate-400 hover:text-slate-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-slate-900 text-sm">
              TrustLayer<span className="text-blue-600"> AI</span>
            </span>
          </Link>
          <span className="text-slate-300 text-sm hidden sm:block">|</span>
          <span className="text-sm font-semibold text-slate-700 hidden sm:block">AI Act Diagnostic</span>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-2">
          {STEPS.slice(0, 3).map((s) => (
            <div key={s.n} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                step === s.n
                  ? "bg-blue-600 text-white"
                  : step > s.n
                  ? "bg-emerald-500 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}>
                {step > s.n ? "✓" : s.n}
              </div>
              <span className={`text-xs font-medium hidden md:block ${step === s.n ? "text-slate-900" : "text-slate-400"}`}>
                {s.label}
              </span>
              {s.n < 3 && <div className="w-6 h-px bg-slate-200 hidden md:block" />}
            </div>
          ))}
        </div>
      </header>

      {/* Step content */}
      <main className="flex-1 flex items-start justify-center py-10 px-4">
        <div className="w-full max-w-2xl">
          {step === 1 && <Step1Company data={data} update={update} onNext={next} />}
          {step === 2 && <Step2Upload data={data} update={update} onNext={next} />}
          {step === 3 && <Step3Questions data={data} update={update} onNext={next} />}
          {step === 4 && <Step4Generating onDone={next} />}
          {step === 5 && <Step5Results data={data} />}
        </div>
      </main>
    </div>
  )
}
