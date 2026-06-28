import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, CheckCircle, ArrowRight, Database } from "lucide-react"

export default function AIInventoryHowTo() {
  return (
    <>
      <Navbar />
      <main>
        <article className="pt-28 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5 text-sm text-slate-400">
                <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">How-to</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />June 14, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />7 min read</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                How to Build an AI Systems Inventory: The Complete Checklist
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                An AI systems inventory is the foundation of AI Act compliance. Without it, you can&apos;t conduct DPIAs, assign oversight, or prove conformity. Here&apos;s how to build one — with a free template.
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 mb-10">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Why this is urgent</p>
              <p className="text-sm text-emerald-900 leading-relaxed">
                Every AI Act obligation — DPIA, human oversight, transparency notices, provider register, conformity assessment — starts with knowing exactly what AI systems you operate. You cannot be compliant without a complete inventory. Market surveillance authorities will request it during audits.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 1: Define what counts as an &ldquo;AI system&rdquo;</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              The AI Act defines an AI system as &ldquo;a machine-based system designed to operate with varying levels of autonomy and that may exhibit adaptiveness after deployment, and that, for explicit or implicit objectives, infers, from the input it receives, how to generate outputs such as predictions, content, recommendations, or decisions that can influence physical or virtual environments.&rdquo;
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              In practice, this includes:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {[
                "Machine learning models (classification, regression, ranking)",
                "Large Language Models (ChatGPT, Claude, Gemini, LLaMA)",
                "Computer vision systems (face match, OCR, object detection)",
                "Recommendation and personalisation engines",
                "Fraud detection and anomaly detection models",
                "Natural language processing (intent detection, sentiment)",
                "Scoring systems (credit, risk, user trust scores)",
                "AI-powered automation (decision triggers, routing)",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 bg-slate-50 border border-slate-100 rounded-xl p-3 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 text-sm bg-amber-50 border border-amber-100 rounded-xl p-4">
              <strong>Important:</strong> This includes third-party AI you access via API (OpenAI, AWS, Google, Anthropic). If you call an AI API in your product, that AI system must be in your inventory — even if you didn&apos;t build it.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 2: Find all AI systems in your stack</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Most companies underestimate the number of AI systems they operate. Here&apos;s where to look:
            </p>
            <div className="space-y-3 mb-8">
              {[
                { source: "Vendor contracts and invoices", tip: "Search for contracts with AI/ML companies: OpenAI, AWS, Azure AI, Google Cloud AI, HuggingFace, Cohere, Anthropic, Onfido, Jumio, etc." },
                { source: "Architecture diagrams", tip: "Ask engineering for system diagrams. Look for model inference endpoints, ML services, AI APIs. Often reveal AI use that isn't documented elsewhere." },
                { source: "Product documentation and specs", tip: "Marketing materials, product pages, and internal specs often describe AI features that aren't in the technical inventory yet." },
                { source: "API documentation and code", tip: "Search the codebase for calls to AI APIs: OpenAI SDK, boto3 (Rekognition, Textract), google-cloud-vision, anthropic SDK, etc." },
                { source: "HR and internal tools", tip: "Many compliance teams miss internal AI tools: performance scoring, hiring AI, email classification, customer support routing. Check with HR and Operations." },
                { source: "Data team", tip: "Data scientists and analysts often build and deploy ML models outside of the main engineering roadmap. Interview the data team directly." },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 p-4 bg-white border border-slate-200 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 mb-1">{s.source}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{s.tip}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 3: For each system, complete these 18 fields</h2>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden mb-8">
              <div className="bg-slate-50 border-b border-slate-200 px-5 py-3">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">AI Systems Inventory — field reference</p>
              </div>
              <div className="divide-y divide-slate-100">
                {[
                  { field: "System name", required: true, desc: "A unique, clear identifier. Avoid vague names like 'ML model 2'. Use descriptive names: 'Fraud Scoring Engine' or 'Onboarding Face Match'." },
                  { field: "Description", required: true, desc: "What the system does, in plain language. One to three sentences." },
                  { field: "Business purpose", required: true, desc: "Why does the company use this system? What business outcome does it serve?" },
                  { field: "Owner", required: true, desc: "The person accountable for compliance of this AI system. Usually a product or engineering lead." },
                  { field: "Status", required: true, desc: "Production / Pilot / Development / Deprecated" },
                  { field: "Provider", required: true, desc: "Internal (built in-house) or external (third-party). If external, name the vendor." },
                  { field: "AI type", required: false, desc: "ML classification, regression, LLM, computer vision, NLP, recommendation engine, etc." },
                  { field: "Data input", required: true, desc: "What data does the AI consume? Be specific: 'transaction history, device fingerprint, user location'." },
                  { field: "Data output", required: true, desc: "What does the AI produce? 'Fraud probability score 0–100', 'matched/not matched decision', 'recommended product list'." },
                  { field: "Personal data", required: true, desc: "Does the system process personal data as defined by GDPR? Yes/No." },
                  { field: "Biometric data", required: true, desc: "Does the system process biometric data (face, fingerprint, voice, iris)? Triggers special category obligations." },
                  { field: "Special category data", required: true, desc: "Health, racial/ethnic origin, political opinions, religion, trade union membership, sexual orientation." },
                  { field: "Minors", required: false, desc: "Can the system be used with or applied to children under 18? Additional protections required." },
                  { field: "Human oversight", required: true, desc: "Is there a human review process for AI decisions? Who reviews? What's the escalation path?" },
                  { field: "Risk level", required: true, desc: "Minimal / Low / Medium / High / Prohibited? Based on AI Act classification." },
                  { field: "AI Act role", required: true, desc: "Provider / Deployer / Integrator / Importer — may be multiple." },
                  { field: "AI Act classification", required: true, desc: "Which Annex III paragraph applies, or 'None — minimal risk', or 'Prohibited — Art. 5'." },
                  { field: "Open gaps", required: true, desc: "What compliance gaps exist? Missing DPIA, no transparency notice, no DPA with vendor, etc." },
                ].map((f) => (
                  <div key={f.field} className="flex items-start gap-4 px-5 py-3.5">
                    <div className="min-w-[140px] shrink-0">
                      <p className="text-sm font-semibold text-slate-800">{f.field}</p>
                      {f.required && <p className="text-[10px] text-red-500 font-semibold">Required</p>}
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 4: Classify each system by risk level</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              For each system in your inventory, you must decide its AI Act risk classification. Here&apos;s the decision logic:
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-8 space-y-4">
              {[
                { q: "Does it match any of the prohibited practices in Art. 5?", a: "→ Prohibited. Get legal advice immediately.", color: "red" },
                { q: "Is it a General Purpose AI model (GPAI) with >10^25 FLOPS training compute?", a: "→ Systemic risk GPAI rules apply (separate track).", color: "amber" },
                { q: "Does it fall under one of the 8 categories in Annex III?", a: "→ High-risk. Full compliance pack required by August 2026.", color: "amber" },
                { q: "Does it interact with humans, generate content, or detect emotions?", a: "→ Transparency obligations under Art. 50.", color: "blue" },
                { q: "None of the above?", a: "→ Minimal risk. No mandatory obligations (voluntary code of conduct encouraged).", color: "emerald" },
              ].map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    item.color === "red" ? "bg-red-100 text-red-600" :
                    item.color === "amber" ? "bg-amber-100 text-amber-600" :
                    item.color === "blue" ? "bg-blue-100 text-blue-600" :
                    "bg-emerald-100 text-emerald-600"
                  }`}>{i + 1}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 mb-0.5">{item.q}</p>
                    <p className="text-sm text-slate-500">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Step 5: Maintain and update the inventory</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              An AI inventory is a living document, not a one-time project. You must update it when:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "A new AI system is deployed to production",
                "An existing system is materially updated (new model version, new data input, new use case)",
                "A new AI vendor is onboarded",
                "An AI system is decommissioned",
                "The AI Act classification of a system changes (e.g., a new use case triggers high-risk status)",
                "An audit, DPIA, or incident review reveals a gap",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-slate-600 leading-relaxed mb-10 text-sm">
              Assign a named owner for each AI system and review the inventory quarterly. High-risk systems should be reviewed whenever the underlying model or data changes significantly.
            </p>

            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center">
              <Database className="w-8 h-8 text-blue-200 mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-3">Generate your inventory from your existing docs</h3>
              <p className="text-blue-100 mb-6">
                TrustLayer reads your architecture diagrams, vendor contracts, and product documentation to detect and classify every AI system automatically — filling in the 18 fields for each one.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <Link href="/diagnostic">
                  Generate my AI inventory →
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
