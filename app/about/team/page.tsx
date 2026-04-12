import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TeamHero } from "@/components/team/hero"
import { LeadershipTeam } from "@/components/team/leadership"
import { TeamCulture } from "@/components/team/culture"
import { OfficeEnvironment } from "@/components/team/office"
import { TeamCta } from "@/components/team/cta"

export const metadata: Metadata = {
  title: "Meet the Team | UTEC - Managed IT Services",
  description: "Meet the experienced technology professionals at UTEC dedicated to helping businesses across Ann Arbor, Troy, and Southeast Michigan.",
}

export default function MeetTheTeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <TeamHero />
      <LeadershipTeam />
      <TeamCulture />
      <OfficeEnvironment />
      <TeamCta />
      <Footer />
    </main>
  )
}
