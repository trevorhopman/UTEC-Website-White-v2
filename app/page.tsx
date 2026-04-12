import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/sections/hero"
import { LeadMagnetSection } from "@/components/sections/lead-magnet"
import { ProblemSection } from "@/components/sections/problem"
import { OutcomeSection } from "@/components/sections/outcome"
import { ServicesSection } from "@/components/sections/services"
import { DifferentiationSection } from "@/components/sections/differentiation"
import { TrustStatsSection } from "@/components/sections/trust-stats"
import { ProcessSection } from "@/components/sections/process"
import { SocialProofSection } from "@/components/sections/social-proof"
import { LocalSeoSection } from "@/components/sections/local-seo"
import { FinalCtaSection } from "@/components/sections/final-cta"
import { Footer } from "@/components/footer"
import { Chatbot } from "@/components/chatbot"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <LeadMagnetSection />
      <ProblemSection />
      <OutcomeSection />
      <ServicesSection />
      <DifferentiationSection />
      <TrustStatsSection />
      <ProcessSection />
      <SocialProofSection />
      <LocalSeoSection />
      <FinalCtaSection />
      <Footer />
      <Chatbot />
    </main>
  )
}
