"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Loader2, Upload } from "lucide-react"

type FormData = {
  company: string
  website: string
  industry: string
  employees: string
  usesAI: string
  usesBiometrics: string
  usesOCR: string
  usesAIInternally: string
  sellsToEnterprise: string
  name: string
  email: string
  role: string
}

const initialForm: FormData = {
  company: "",
  website: "",
  industry: "",
  employees: "",
  usesAI: "",
  usesBiometrics: "",
  usesOCR: "",
  usesAIInternally: "",
  sellsToEnterprise: "",
  name: "",
  email: "",
  role: "",
}

const industries = ["SaaS / Software", "Fintech", "HR Tech", "Hospitality Tech", "Healthcare", "Marketplace", "Insurance", "Legal Tech", "Other"]
const roles = ["CEO / Founder", "CTO", "CPO", "DPO", "Legal Counsel", "Head of Security", "Compliance Manager", "Other"]
const employeeRanges = ["1–10", "11–50", "51–200", "201–500", "500+"]

function YesNoField({ label, name, value, onChange }: { label: string; name: keyof FormData; value: string; onChange: (n: keyof FormData, v: string) => void }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
      <div className="flex gap-2">
        {["Yes", "No", "Not sure"].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(name, opt)}
            className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
              value === opt
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

export default function LeadCaptureForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (name: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    handleChange(e.target.name as keyof FormData, e.target.value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-emerald-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">We&apos;re on it</h3>
          <p className="text-slate-500">
            We&apos;ll review your profile and send you a preliminary AI Act diagnostic summary within 24 hours. Check your inbox.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-3">Start your diagnostic</p>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get your AI Act diagnostic in 48 hours
          </h2>
          <p className="text-lg text-slate-500">
            Fill in your company profile. Optionally upload docs. We&apos;ll generate your preliminary report and reach out to discuss next steps.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 space-y-6">
          {/* Company info */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Company</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Company name *</label>
                <input
                  required
                  name="company"
                  value={form.company}
                  onChange={handleInput}
                  placeholder="Acme Technologies"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Website</label>
                <input
                  name="website"
                  value={form.website}
                  onChange={handleInput}
                  placeholder="acme.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Industry *</label>
                <select
                  required
                  name="industry"
                  value={form.industry}
                  onChange={handleInput}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select industry</option>
                  {industries.map((i) => <option key={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Employees</label>
                <select
                  name="employees"
                  value={form.employees}
                  onChange={handleInput}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select range</option>
                  {employeeRanges.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* AI usage */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">AI & Technology</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <YesNoField label="Do you use AI in your product?" name="usesAI" value={form.usesAI} onChange={handleChange} />
              <YesNoField label="Do you use biometrics (face, fingerprint)?" name="usesBiometrics" value={form.usesBiometrics} onChange={handleChange} />
              <YesNoField label="Do you use OCR / document scanning?" name="usesOCR" value={form.usesOCR} onChange={handleChange} />
              <YesNoField label="Do you sell to enterprise clients?" name="sellsToEnterprise" value={form.sellsToEnterprise} onChange={handleChange} />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-4">Your contact</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleInput}
                  placeholder="María García"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Work email *</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInput}
                  placeholder="maria@company.com"
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Your role</label>
                <select
                  name="role"
                  value={form.role}
                  onChange={handleInput}
                  className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                >
                  <option value="">Select role</option>
                  {roles.map((r) => <option key={r}>{r}</option>)}
                </select>
              </div>
            </div>
          </div>

          {/* Doc upload teaser */}
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center">
            <Upload className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-sm font-medium text-slate-500 mb-1">Optional: upload existing documentation</p>
            <p className="text-xs text-slate-400">ISO 27001, DPA, privacy policy, vendor contracts — we&apos;ll extract evidence automatically</p>
            <p className="text-xs text-slate-300 mt-2">Document upload available after account creation</p>
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Get my AI Act Diagnostic →"
            )}
          </Button>

          <p className="text-xs text-slate-400 text-center">
            By submitting, you agree to our Privacy Policy. Your data is never used for AI training.
          </p>
        </form>
      </div>
    </section>
  )
}
