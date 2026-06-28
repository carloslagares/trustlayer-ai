"use client"
import { useState } from "react"
import { DiagnosticData } from "./DiagnosticShell"
import { Button } from "@/components/ui/button"
import { ArrowRight, Info } from "lucide-react"

const questions = [
  {
    id: "q_ai_product",
    section: "AI Systems",
    question: "Does your product include AI or machine learning components that make or influence decisions?",
    hint: "Examples: fraud scoring, content moderation, recommendations, ranking, pricing algorithms",
    options: ["Yes", "No", "Not sure"],
  },
  {
    id: "q_biometric",
    section: "Biometrics",
    question: "Does your product use face recognition, fingerprint, or other biometric data?",
    hint: "Includes face match 1:1, liveness detection, face ID, fingerprint login, voice recognition",
    options: ["Yes — verification (1:1)", "Yes — identification (1:N)", "No", "Not sure"],
  },
  {
    id: "q_ocr",
    section: "Document Processing",
    question: "Do you use OCR or AI to scan, extract, or process identity documents (passports, IDs, driving licences)?",
    hint: "Document verification, KYC, onboarding document scanning",
    options: ["Yes", "No"],
  },
  {
    id: "q_genai",
    section: "Generative AI",
    question: "Do you use Large Language Models or generative AI in your product or internal tools?",
    hint: "OpenAI, Claude, Gemini, LLaMA, Mistral, or fine-tuned models",
    options: ["Yes — customer-facing", "Yes — internal only", "Both", "No"],
  },
  {
    id: "q_scoring",
    section: "Risk & Scoring",
    question: "Does your product assess creditworthiness, insurance risk, fraud probability, or user trustworthiness?",
    hint: "Includes scoring users, detecting fraud, assessing financial risk, tenant/guest screening",
    options: ["Yes — automated decisions", "Yes — human-reviewed decisions", "No"],
  },
  {
    id: "q_hr",
    section: "HR & Employment",
    question: "Do you use AI for recruitment, employee screening, performance evaluation, or HR decisions?",
    hint: "CV screening, interview analysis, performance scoring, employee monitoring",
    options: ["Yes", "No"],
  },
  {
    id: "q_enterprise",
    section: "Customers",
    question: "Do your enterprise customers require AI Act compliance documentation from you?",
    hint: "Security questionnaires, due diligence packs, compliance certifications",
    options: ["Yes — already asked", "Likely soon", "Not yet", "No enterprise clients"],
  },
  {
    id: "q_provider",
    section: "Vendors",
    question: "Do you use third-party AI providers (APIs, models, platforms) in your product?",
    hint: "OpenAI, AWS, Google, Azure AI, HuggingFace, Anthropic, Cohere, etc.",
    options: ["Yes — multiple", "Yes — one", "No — only internal models", "No AI at all"],
  },
  {
    id: "q_dpia",
    section: "Data Protection",
    question: "Have you conducted a DPIA for any of your AI systems that process personal or sensitive data?",
    hint: "DPIA = Data Protection Impact Assessment, required for high-risk processing",
    options: ["Yes — for all relevant systems", "Partially", "No", "Not sure what a DPIA is"],
  },
  {
    id: "q_oversight",
    section: "Human Oversight",
    question: "Are there human review processes for high-stakes AI decisions (fraud flags, identity rejection, credit denial)?",
    hint: "Art. 14 AI Act requires meaningful human oversight for high-risk AI systems",
    options: ["Yes — documented SOPs", "Yes — informal process", "No", "N/A — no high-risk AI"],
  },
]

type Props = { data: DiagnosticData; update: (p: Partial<DiagnosticData>) => void; onNext: () => void }

export default function Step3Questions({ data, update, onNext }: Props) {
  const [hint, setHint] = useState<string | null>(null)
  const answered = Object.keys(data.answers).length
  const allAnswered = answered === questions.length

  const setAnswer = (id: string, val: string) => {
    update({ answers: { ...data.answers, [id]: val } })
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Step 3 of 3</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Quick AI Act questionnaire</h2>
        <div className="flex items-center justify-between">
          <p className="text-slate-500 text-sm">10 questions · ~3 minutes</p>
          <p className="text-xs font-semibold text-slate-400">{answered}/{questions.length} answered</p>
        </div>
        {/* Progress */}
        <div className="mt-3 w-full bg-slate-100 rounded-full h-1.5">
          <div
            className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${(answered / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="space-y-4">
        {questions.map((q, i) => (
          <div key={q.id} className="bg-white rounded-2xl border border-slate-200 p-5">
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex-1">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">{q.section}</p>
                <p className="text-sm font-semibold text-slate-900">{i + 1}. {q.question}</p>
              </div>
              <button
                onClick={() => setHint(hint === q.id ? null : q.id)}
                className="text-slate-300 hover:text-slate-500 transition-colors shrink-0 mt-0.5"
              >
                <Info className="w-4 h-4" />
              </button>
            </div>

            {hint === q.id && (
              <div className="mb-4 px-3 py-2 bg-blue-50 border border-blue-100 rounded-lg text-xs text-blue-700">
                {q.hint}
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => setAnswer(q.id, opt)}
                  className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
                    data.answers[q.id] === opt
                      ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                      : "border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Button
        size="lg"
        className="w-full gap-2"
        onClick={onNext}
        disabled={!allAnswered}
      >
        Generate my AI Act diagnostic
        <ArrowRight className="w-4 h-4" />
      </Button>
      {!allAnswered && (
        <p className="text-xs text-slate-400 text-center -mt-4">
          {questions.length - answered} question{questions.length - answered > 1 ? "s" : ""} left
        </p>
      )}
    </div>
  )
}
