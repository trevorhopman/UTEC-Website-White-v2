import { Metadata } from "next"
import { ManagedITHero } from "@/components/managed-it/hero"
import { ManagedITLeadMagnet } from "@/components/managed-it/lead-magnet"
import { ManagedITProblem } from "@/components/managed-it/problem"
import { ManagedITOutcome } from "@/components/managed-it/outcome"
import { ManagedITIncluded } from "@/components/managed-it/included"
import { ManagedITWhyUtec } from "@/components/managed-it/why-utec"
import { ManagedITProcess } from "@/components/managed-it/process"
import { ManagedITFaq } from "@/components/managed-it/faq"
import { ManagedITCta } from "@/components/managed-it/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Managed IT Services | UTEC - Ann Arbor & Troy, Michigan",
  description:
    "Proactive IT support that keeps your business running smoothly. UTEC delivers fully managed IT services for businesses in Ann Arbor, Troy, and Southeast Michigan.",
}

export default function ManagedITPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <ManagedITHero />
      <ManagedITLeadMagnet />
      <ManagedITProblem />
      <ManagedITOutcome />
      <ManagedITIncluded />
      <ManagedITWhyUtec />
      <ManagedITProcess />
      <ManagedITFaq />
      <ManagedITCta />
      <Footer />
    </main>
  )
}
