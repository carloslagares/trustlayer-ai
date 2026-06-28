import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/landing/HeroSection"
import TrustBar from "@/components/landing/TrustBar"
import HowItWorks from "@/components/landing/HowItWorks"
import AIInventoryPreview from "@/components/landing/AIInventoryPreview"
import UseCaseGrid from "@/components/landing/UseCaseGrid"
import WhyNow from "@/components/landing/WhyNow"
import PricingSection from "@/components/landing/PricingSection"
import LeadCaptureForm from "@/components/landing/LeadCaptureForm"
import FAQ from "@/components/landing/FAQ"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <TrustBar />
        <HowItWorks />
        <AIInventoryPreview />
        <UseCaseGrid />
        <WhyNow />
        <PricingSection />
        <LeadCaptureForm />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
