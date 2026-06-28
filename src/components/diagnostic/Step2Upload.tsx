"use client"
import { useCallback, useState } from "react"
import { DiagnosticData } from "./DiagnosticShell"
import { Button } from "@/components/ui/button"
import { Upload, FileText, X, ArrowRight, CheckCircle } from "lucide-react"

const docCategories = [
  { id: "iso", label: "ISO 27001 / ISMS", desc: "Statement of Applicability, ISMS policy, risk register", color: "blue" },
  { id: "privacy", label: "Privacy & Data", desc: "Privacy policy, DPA, DPIA, data flow map", color: "purple" },
  { id: "legal", label: "Legal & Contracts", desc: "Vendor contracts, customer T&Cs, SCCs", color: "emerald" },
  { id: "product", label: "Product & Architecture", desc: "Architecture diagrams, API docs, product specs", color: "amber" },
  { id: "security", label: "Security", desc: "Security questionnaires, SOC 2, pen test reports", color: "red" },
  { id: "hr", label: "HR & Training", desc: "AI training records, HR policies", color: "slate" },
]

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100" },
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100" },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-100" },
  red: { bg: "bg-red-50", text: "text-red-600", border: "border-red-100" },
  slate: { bg: "bg-slate-100", text: "text-slate-500", border: "border-slate-200" },
}

type Props = { data: DiagnosticData; update: (p: Partial<DiagnosticData>) => void; onNext: () => void }

export default function Step2Upload({ data, update, onNext }: Props) {
  const [dragging, setDragging] = useState(false)

  const addFiles = useCallback((files: FileList | null) => {
    if (!files) return
    update({ docs: [...data.docs, ...Array.from(files)] })
  }, [data.docs, update])

  const removeDoc = (i: number) => {
    update({ docs: data.docs.filter((_, idx) => idx !== i) })
  }

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setDragging(false)
    addFiles(e.dataTransfer.files)
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Step 2 of 3</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Upload your documentation</h2>
        <p className="text-slate-500 text-sm">
          Optional but recommended. The more documentation you provide, the more accurate your diagnostic. We accept PDF and DOCX.
        </p>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`border-2 border-dashed rounded-2xl p-10 text-center transition-colors cursor-pointer ${
          dragging ? "border-blue-400 bg-blue-50" : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
        }`}
        onClick={() => document.getElementById("fileInput")?.click()}
      >
        <input
          id="fileInput"
          type="file"
          multiple
          accept=".pdf,.docx,.doc"
          className="hidden"
          onChange={(e) => addFiles(e.target.files)}
        />
        <Upload className={`w-10 h-10 mx-auto mb-3 ${dragging ? "text-blue-500" : "text-slate-300"}`} />
        <p className="text-sm font-semibold text-slate-700 mb-1">Drop files here or click to browse</p>
        <p className="text-xs text-slate-400">PDF, DOCX · Max 50MB per file · Encrypted in transit</p>
      </div>

      {/* File list */}
      {data.docs.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-100 overflow-hidden">
          {data.docs.map((f, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-3">
              <FileText className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="flex-1 text-sm text-slate-700 truncate">{f.name}</span>
              <span className="text-xs text-slate-400">{(f.size / 1024).toFixed(0)} KB</span>
              <button onClick={() => removeDoc(i)} className="text-slate-300 hover:text-slate-600 transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Doc categories guide */}
      <div>
        <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">What we can extract from</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {docCategories.map((cat) => {
            const c = colorMap[cat.color]
            return (
              <div key={cat.id} className={`flex items-start gap-3 p-3.5 rounded-xl border ${c.border} ${c.bg}`}>
                <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${c.text}`} />
                <div>
                  <p className={`text-xs font-bold ${c.text}`}>{cat.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{cat.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <Button size="lg" className="w-full gap-2" onClick={onNext}>
        {data.docs.length > 0 ? `Continue with ${data.docs.length} document${data.docs.length > 1 ? "s" : ""}` : "Skip — continue without docs"}
        <ArrowRight className="w-4 h-4" />
      </Button>
      <p className="text-xs text-slate-400 text-center -mt-4">You can add more documents after sign-up</p>
    </div>
  )
}
