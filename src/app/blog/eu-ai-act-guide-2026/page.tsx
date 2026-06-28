import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react"

export default function AIActGuide() {
  return (
    <>
      <Navbar />
      <main>
        <article className="pt-28 pb-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5 text-sm text-slate-400">
                <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full">Guide</span>
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />June 24, 2026</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />12 min read</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 leading-tight mb-6">
                The EU AI Act: Complete Guide for Tech Companies (2026)
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed">
                Everything a SaaS, fintech, or HR tech company needs to know about the EU AI Act — who it applies to, what&apos;s prohibited, what&apos;s high-risk, and what you need to do before August 2026.
              </p>
            </div>

            {/* TL;DR box */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">TL;DR — Key dates</p>
              <ul className="space-y-2">
                {[
                  ["February 2025", "Prohibited AI practices banned (Art. 5). No grace period."],
                  ["August 2025", "GPAI (General Purpose AI) rules apply. LLM providers must comply."],
                  ["August 2026", "High-risk AI systems in Annex III must be fully compliant."],
                  ["August 2027", "High-risk AI embedded in regulated products (medical devices, machinery)."],
                ].map(([date, desc]) => (
                  <li key={date} className="flex items-start gap-3 text-sm">
                    <span className="font-bold text-blue-700 shrink-0 min-w-[110px]">{date}</span>
                    <span className="text-slate-600">{desc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600">

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Who does the AI Act apply to?</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The EU AI Act applies to any organisation that provides, deploys, distributes, imports, or uses AI systems in the European Union — regardless of where the company is headquartered. If your product touches EU users or EU data subjects, you are in scope.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                This includes US, UK, Israeli, and LATAM companies with European customers. The AI Act has extraterritorial reach comparable to GDPR.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-8">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">The four roles — and what each must do</p>
                <div className="space-y-4">
                  {[
                    { role: "Provider", desc: "Develops and places an AI system on the market. Heaviest obligations: conformity assessment, technical documentation, CE marking for high-risk systems, post-market monitoring." },
                    { role: "Deployer", desc: "Uses a third-party AI system in their product or processes. Must conduct DPIA if applicable, ensure human oversight, maintain logs for high-risk AI, and not use the AI in ways that violate the Act." },
                    { role: "Integrator", desc: "Embeds an AI component into a product or system. Obligations depend on whether the integration changes the risk level of the original AI system." },
                    { role: "Importer / Distributor", desc: "Places AI systems from non-EU providers on the EU market. Must verify the provider's conformity and not distribute non-compliant systems." },
                  ].map((r) => (
                    <div key={r.role} className="flex gap-4">
                      <span className="text-sm font-black text-blue-600 min-w-[90px]">{r.role}</span>
                      <p className="text-sm text-slate-600">{r.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-400 mt-4 italic">Most SaaS companies are simultaneously Deployers (using third-party AI) and Providers (building their own AI systems). Obligations stack.</p>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">The four risk tiers</h2>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                Prohibited AI (Art. 5) — banned from February 2025
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">These AI practices are completely banned in the EU. No business justification, no exception for private use:</p>
              <ul className="space-y-2 mb-6">
                {[
                  "Social scoring systems that evaluate people based on social behaviour (public or private actors)",
                  "Real-time remote biometric identification in publicly accessible spaces (narrow law enforcement exceptions only)",
                  "Subliminal, manipulative, or deceptive AI techniques that influence behaviour without awareness",
                  "Exploitation of vulnerabilities of specific groups (children, elderly, disabled)",
                  "Emotion recognition in workplace or educational institutions (with narrow exceptions)",
                  "Biometric categorisation to infer political views, race, religion, sexual orientation, trade union membership",
                  "Predictive policing based solely on profiling or personality traits",
                  "Untargeted facial recognition scraping from the internet",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-slate-600 text-sm">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border border-red-100 rounded-xl p-5 mb-8">
                <p className="text-sm font-semibold text-red-800 mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  HR tech alert
                </p>
                <p className="text-sm text-red-700">
                  Emotion recognition in the workplace includes AI tools that infer employee sentiment, stress, engagement, or mood from facial expressions, voice, text, or behaviour patterns — even if the stated purpose is &ldquo;wellbeing.&rdquo; If you have such a tool, get legal advice immediately.
                </p>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                High-risk AI (Annex III) — compliant by August 2026
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                These are AI systems with significant potential for harm. They require a full compliance pack: technical documentation, conformity assessment, DPIA, human oversight, transparency, and post-market monitoring.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  ["§1", "Biometric identification and categorisation"],
                  ["§2", "Critical infrastructure (energy, water, transport)"],
                  ["§3", "Education and vocational training access"],
                  ["§4", "Employment, HR, and worker management"],
                  ["§5", "Essential private services (credit, insurance, public benefits)"],
                  ["§6", "Law enforcement"],
                  ["§7", "Migration, asylum, border control"],
                  ["§8", "Administration of justice"],
                ].map(([ref, desc]) => (
                  <div key={ref} className="flex items-start gap-2.5 bg-amber-50 border border-amber-100 rounded-xl p-3.5">
                    <span className="text-xs font-black text-amber-600 shrink-0 font-mono">{ref}</span>
                    <p className="text-xs text-slate-700">{desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-400 inline-block" />
                Transparency obligations (Art. 50)
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                AI systems that interact with humans or generate synthetic content must disclose their AI nature. This applies to chatbots, AI-generated images, AI-generated text, deepfakes, and emotion recognition systems.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Chatbots must inform users they are talking to an AI (not a human) — unless it&apos;s obvious",
                  "AI-generated images, audio, and video must be labelled as synthetic content",
                  "Deepfakes must be clearly disclosed unless for clearly satirical purposes",
                  "Emotion recognition output must be disclosed to users",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <h3 className="text-lg font-bold text-slate-900 mt-8 mb-3 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                Minimal risk
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                Spam filters, recommendation engines, AI in games, and most basic automation tools have no mandatory AI Act obligations — though a voluntary code of conduct is encouraged. If your AI system doesn&apos;t fall into the above categories, this is likely where you land.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">High-risk AI obligations: what you actually need to build</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If any of your AI systems fall under Annex III, here is the full list of mandatory requirements:
              </p>
              <div className="space-y-3 mb-8">
                {[
                  { title: "Risk management system (Art. 9)", desc: "Ongoing process to identify, analyse, and mitigate risks throughout the AI lifecycle." },
                  { title: "Data governance (Art. 10)", desc: "Training, validation, and testing datasets must be relevant, sufficiently representative, and free from harmful biases." },
                  { title: "Technical documentation (Art. 11)", desc: "Comprehensive documentation of the AI system: purpose, architecture, data, performance metrics, limitations." },
                  { title: "Record keeping / logging (Art. 12)", desc: "Automatic logging of events during operation, especially for decisions affecting individuals." },
                  { title: "Transparency for deployers (Art. 13)", desc: "Providers must give deployers enough information to implement the system lawfully — including intended purpose, limitations, and human oversight guidance." },
                  { title: "Human oversight (Art. 14)", desc: "Meaningful human oversight must be built into the system design. Humans must be able to monitor, intervene, override, and stop the AI." },
                  { title: "Accuracy, robustness, and cybersecurity (Art. 15)", desc: "The system must meet accuracy levels fit for purpose and be resilient against adversarial attacks." },
                  { title: "Conformity assessment (Art. 43)", desc: "Before market placement, providers must assess conformity — either self-assessed or via a notified body, depending on the category." },
                  { title: "EU Declaration of Conformity (Art. 47)", desc: "Written declaration that the AI system meets all applicable requirements." },
                  { title: "CE marking (Art. 48)", desc: "High-risk AI systems must carry the CE marking before being placed on the market." },
                  { title: "Registration (Art. 49)", desc: "High-risk AI systems must be registered in the EU AI database before deployment." },
                ].map((req) => (
                  <div key={req.title} className="flex gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                    <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-slate-900">{req.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{req.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Fines and enforcement</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: "Prohibited practice violation", fine: "€35M or 7%", sub: "of global annual turnover" },
                  { label: "High-risk AI non-compliance", fine: "€15M or 3%", sub: "of global annual turnover" },
                  { label: "Incorrect information to authority", fine: "€7.5M or 1.5%", sub: "of global annual turnover" },
                ].map((f) => (
                  <div key={f.label} className="bg-slate-900 rounded-xl p-5 text-center">
                    <p className="text-xs text-slate-400 mb-2">{f.label}</p>
                    <p className="text-xl font-black text-red-400">{f.fine}</p>
                    <p className="text-xs text-slate-500">{f.sub}</p>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                Fines are whichever is higher — the fixed amount or the percentage of global turnover. For a €50M revenue company, a prohibited practice violation could cost up to €3.5M. For larger companies, the percentage cap is almost always higher.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                Market surveillance authorities in each EU member state are responsible for enforcement. They can request documentation, audit systems, order suspension of non-compliant AI, and impose fines.
              </p>

              <h2 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Where to start: a practical checklist for tech companies</h2>
              <div className="space-y-3 mb-10">
                {[
                  "Map all AI systems in your product and internal tools",
                  "Classify each system: prohibited / high-risk / transparency / minimal",
                  "Assign AI Act roles: Provider, Deployer, Integrator for each system",
                  "Review vendor contracts for AI Act clauses and DPA coverage",
                  "Conduct a DPIA for any biometric or high-risk AI system",
                  "Document human oversight procedures for high-risk decisions",
                  "Add transparency notices to your UI for AI-powered features",
                  "Draft an AI governance policy and assign an AI governance owner",
                  "Start a compliance roadmap with deadlines and owners",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-sm text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-600 rounded-2xl p-8 text-white text-center mt-10">
              <h3 className="text-xl font-bold mb-3">Don&apos;t start from scratch</h3>
              <p className="text-blue-100 mb-6">
                TrustLayer extracts this entire checklist from your existing documentation — ISO 27001, vendor contracts, DPAs, product specs. Get your AI Act readiness score in minutes.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" size="lg" asChild>
                <Link href="/diagnostic">
                  Start AI Act Diagnostic →
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
