import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "TrustLayer AI — EU AI Act Compliance Platform",
  description:
    "AI Act compliance, built from the documentation you already have. Upload your ISO, GDPR, and vendor docs. Get your AI systems inventory, risk classification, and compliance roadmap.",
  keywords: "EU AI Act, AI compliance, GPAI, AI governance, biometric AI, DPIA, AI inventory",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
