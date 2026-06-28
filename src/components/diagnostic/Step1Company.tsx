"use client"
import { DiagnosticData } from "./DiagnosticShell"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const industries = ["SaaS / Software", "Fintech", "HR Tech", "Hospitality Tech", "Healthcare", "Insurance", "Marketplace", "Legal Tech", "E-commerce", "Other"]
const roles = ["CEO / Founder", "CTO", "CPO", "DPO", "Legal Counsel", "Head of Security", "Compliance Manager", "Other"]
const sizes = ["1–10", "11–50", "51–200", "201–500", "500–2000", "2000+"]
const regulatedSectors = ["Financial services (MiFID, PSD2)", "Healthcare / medical devices", "Insurance", "Law enforcement / justice", "Critical infrastructure", "Education", "None of these"]

type Props = { data: DiagnosticData; update: (p: Partial<DiagnosticData>) => void; onNext: () => void }

function Input({ label, name, value, onChange, placeholder, type = "text" }: {
  label: string; name: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder:text-slate-300 transition"
      />
    </div>
  )
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white transition"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  )
}

function MultiCheck({ label, options, values, onChange }: { label: string; options: string[]; values: string[]; onChange: (v: string[]) => void }) {
  const toggle = (opt: string) => {
    onChange(values.includes(opt) ? values.filter((v) => v !== opt) : [...values, opt])
  }
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`px-3 py-1.5 rounded-lg border text-sm font-medium transition-colors ${
              values.includes(opt)
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Step1Company({ data, update, onNext }: Props) {
  const valid = data.company && data.industry && data.email && data.name

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Step 1 of 3</p>
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Tell us about your company</h2>
        <p className="text-slate-500 text-sm">We use this to tailor the AI Act analysis to your sector and context.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 space-y-5">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Company details</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Company name *" name="company" value={data.company} onChange={(v) => update({ company: v })} placeholder="Acme Technologies" />
          <Input label="Website" name="website" value={data.website} onChange={(v) => update({ website: v })} placeholder="acme.com" />
          <Select label="Industry *" value={data.industry} onChange={(v) => update({ industry: v })} options={industries} />
          <Select label="Employees" value={data.employees} onChange={(v) => update({ employees: v })} options={sizes} />
        </div>

        <MultiCheck
          label="Regulated sectors your product touches"
          options={regulatedSectors}
          values={data.sectors}
          onChange={(v) => update({ sectors: v })}
        />
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 space-y-5">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Your contact</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input label="Full name *" name="name" value={data.name} onChange={(v) => update({ name: v })} placeholder="María García" />
          <Input label="Work email *" name="email" type="email" value={data.email} onChange={(v) => update({ email: v })} placeholder="maria@company.com" />
          <Select label="Your role" value={data.role} onChange={(v) => update({ role: v })} options={roles} />
        </div>
      </div>

      <Button size="lg" className="w-full gap-2" onClick={onNext} disabled={!valid}>
        Continue to document upload
        <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  )
}
