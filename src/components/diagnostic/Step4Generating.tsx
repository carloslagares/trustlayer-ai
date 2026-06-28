"use client"
import { useEffect, useState } from "react"
import { Shield } from "lucide-react"

const stages = [
  { label: "Analysing company profile and sector", ms: 1200 },
  { label: "Cross-referencing with AI Act Annex III", ms: 1800 },
  { label: "Classifying AI Act roles (Provider / Deployer / Integrator)", ms: 1400 },
  { label: "Identifying high-risk system indicators", ms: 1600 },
  { label: "Checking for prohibited practice patterns", ms: 1200 },
  { label: "Evaluating biometric and OCR obligations", ms: 1000 },
  { label: "Mapping transparency requirements", ms: 900 },
  { label: "Generating compliance roadmap", ms: 1100 },
  { label: "Preparing your diagnostic report", ms: 800 },
]

type Props = { onDone: () => void }

export default function Step4Generating({ onDone }: Props) {
  const [stageIdx, setStageIdx] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    let idx = 0
    const advance = () => {
      if (idx >= stages.length - 1) {
        setDone(true)
        setTimeout(onDone, 900)
        return
      }
      idx++
      setStageIdx(idx)
      setTimeout(advance, stages[idx].ms)
    }
    setTimeout(advance, stages[0].ms)
  }, [onDone])

  const progress = Math.round(((stageIdx + 1) / stages.length) * 100)

  return (
    <div className="flex flex-col items-center text-center py-8">
      {/* Animated logo */}
      <div className={`relative w-20 h-20 mb-8 ${done ? "" : "animate-pulse"}`}>
        <div className={`absolute inset-0 rounded-full ${done ? "bg-emerald-100" : "bg-blue-100"} transition-colors duration-500`} />
        <div className={`absolute inset-3 rounded-full ${done ? "bg-emerald-500" : "bg-blue-600"} flex items-center justify-center transition-colors duration-500`}>
          <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        {!done && (
          <svg className="absolute inset-0 w-20 h-20 -rotate-90" viewBox="0 0 80 80">
            <circle cx="40" cy="40" r="36" fill="none" stroke="#e2e8f0" strokeWidth="4" />
            <circle
              cx="40" cy="40" r="36" fill="none"
              stroke="#2563eb"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.26} ${226}`}
              className="transition-all duration-700"
            />
          </svg>
        )}
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        {done ? "Diagnostic complete" : "Generating your diagnostic…"}
      </h2>
      <p className="text-slate-500 text-sm mb-8 max-w-sm">
        {done
          ? "Your preliminary AI Act assessment is ready."
          : "Analysing your profile and questionnaire responses against EU AI Act requirements."}
      </p>

      {/* Stage list */}
      <div className="w-full max-w-sm space-y-2.5 text-left">
        {stages.map((s, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              i < stageIdx
                ? "bg-emerald-500"
                : i === stageIdx
                ? "bg-blue-600"
                : "bg-slate-100"
            }`}>
              {i < stageIdx && (
                <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
              {i === stageIdx && <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            </div>
            <p className={`text-sm transition-colors ${
              i < stageIdx ? "text-emerald-600 font-medium" : i === stageIdx ? "text-slate-900 font-semibold" : "text-slate-300"
            }`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 w-full max-w-sm">
        <div className="flex justify-between text-xs text-slate-400 mb-1.5">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-1.5">
          <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}
