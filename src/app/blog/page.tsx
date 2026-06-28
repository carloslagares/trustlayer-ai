import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const posts = [
  {
    slug: "eu-ai-act-guide-2026",
    title: "The EU AI Act: Complete Guide for Tech Companies (2026)",
    excerpt: "Everything a SaaS, fintech, or HR tech company needs to know about the EU AI Act. Who it applies to, what's prohibited, what's high-risk, and what you need to do before August 2026 enforcement.",
    date: "June 24, 2026",
    readTime: "12 min read",
    category: "Guide",
    categoryColor: "blue",
    featured: true,
  },
  {
    slug: "biometric-ai-act-obligations",
    title: "Biometric AI under the EU AI Act: Face Match, OCR, and Liveness Detection",
    excerpt: "If your product uses face verification, document scanning, or liveness detection, you're operating high-risk AI. This is a complete breakdown of your legal obligations, what documentation you need, and how to avoid the most common mistakes.",
    date: "June 20, 2026",
    readTime: "9 min read",
    category: "Compliance",
    categoryColor: "red",
    featured: false,
  },
  {
    slug: "ai-inventory-how-to",
    title: "How to Build an AI Systems Inventory: The Complete Checklist",
    excerpt: "An AI systems inventory is the foundation of AI Act compliance. Without it, you can't conduct DPIAs, assign oversight, or prove conformity to auditors. Here's how to build one — and what to include for each system.",
    date: "June 14, 2026",
    readTime: "7 min read",
    category: "How-to",
    categoryColor: "emerald",
    featured: false,
  },
]

const categoryColor: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  emerald: "bg-emerald-100 text-emerald-700",
  purple: "bg-purple-100 text-purple-700",
}

export default function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-28 pb-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Resources</p>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">EU AI Act Intelligence</h1>
              <p className="text-lg text-slate-500">
                Practical guides, compliance breakdowns, and sector-specific analysis for tech companies navigating the EU AI Act.
              </p>
            </div>

            {/* Featured post */}
            <Link href={`/blog/${featured.slug}`} className="block group mb-8">
              <div className="bg-slate-900 rounded-2xl p-10 hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor[featured.categoryColor]}`}>
                    {featured.category}
                  </span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Calendar className="w-3 h-3" />{featured.date}
                  </span>
                  <span className="text-slate-500 text-xs flex items-center gap-1">
                    <Clock className="w-3 h-3" />{featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors max-w-2xl">
                  {featured.title}
                </h2>
                <p className="text-slate-400 leading-relaxed mb-6 max-w-2xl">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>

            {/* Rest */}
            <div className="grid md:grid-cols-2 gap-6">
              {rest.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <div className="bg-white border border-slate-200 rounded-2xl p-7 h-full hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${categoryColor[post.categoryColor]}`}>
                        {post.category}
                      </span>
                      <span className="text-slate-400 text-xs flex items-center gap-1">
                        <Clock className="w-3 h-3" />{post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-blue-500 text-sm font-semibold">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Ready to act on what you&apos;ve read?</h3>
            <p className="text-slate-500 mb-6">Start your AI Act diagnostic and turn knowledge into a compliance roadmap for your company.</p>
            <Button size="lg" asChild>
              <Link href="/diagnostic">Start free diagnostic →</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
