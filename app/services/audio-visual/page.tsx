import { Metadata } from "next"
import { AudioVisualHero } from "@/components/audio-visual/hero"
import { AudioVisualLeadMagnet } from "@/components/audio-visual/lead-magnet"
import { AudioVisualProblem } from "@/components/audio-visual/problem"
import { AudioVisualOutcome } from "@/components/audio-visual/outcome"
import { AudioVisualIncluded } from "@/components/audio-visual/included"
import { AudioVisualWhyUtec } from "@/components/audio-visual/why-utec"
import { AudioVisualProcess } from "@/components/audio-visual/process"
import { AudioVisualFaq } from "@/components/audio-visual/faq"
import { AudioVisualCta } from "@/components/audio-visual/cta"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Audio Visual Solutions | UTEC - Ann Arbor & Troy, Michigan",
  description:
    "Commercial displays, conference rooms, Microsoft Teams Rooms, digital signage, and AV integration for Michigan businesses—design, install, and support from UTEC.",
}

export default function AudioVisualPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <AudioVisualHero />
      <AudioVisualLeadMagnet />
      <AudioVisualProblem />
      <AudioVisualOutcome />
      <AudioVisualIncluded />
      <AudioVisualWhyUtec />
      <AudioVisualProcess />
      <AudioVisualFaq />
      <AudioVisualCta />
      <Footer />
    </main>
  )
}
