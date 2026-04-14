"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Tv2 } from "lucide-react"

const trustIndicators = [
  "Conference rooms, signage, and collaboration spaces from one partner",
  "Design, installation, and ongoing support across Southeast Michigan",
  "Integrated with your IT network for secure, reliable meetings",
]

export function AudioVisualHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[#ED1E24]/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ED1E24]/10 px-4 py-2">
              <Tv2 className="h-4 w-4 text-[#ED1E24]" />
              <span className="text-sm font-medium text-[#ED1E24]">Audio Visual</span>
            </div>

            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#1E1A1C] sm:text-5xl lg:text-6xl">
              From the lobby to the boardroom: AV your teams can count on
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              UTEC designs, installs, and supports the full stack—{" "}
              <strong className="font-semibold text-[#1E1A1C]">
                commercial displays, video walls, and room systems
              </strong>{" "}
              aligned with{" "}
              <strong className="font-semibold text-[#1E1A1C]">
                Microsoft Teams Rooms, digital signage, microphones, and control
              </strong>
              —so walk-in guests see a polished brand and every meeting starts on time, not with cable hunting.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg hover:shadow-red-200"
              >
                <Link href="#consultation">
                  Schedule an AV Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1E1A1C]/20 px-8 py-6 text-base font-semibold text-[#1E1A1C] transition-all duration-300 hover:bg-[#1E1A1C] hover:text-white"
              >
                <Link href="#av-priority">See how we prioritize upgrades</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#ED1E24]" />
                  <span className="text-sm font-medium text-gray-600">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="animate-av-hero-float mx-auto w-full max-w-xl">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 shadow-[0_28px_64px_-12px_rgba(30,26,28,0.38),0_12px_24px_-8px_rgba(30,26,28,0.12)] ring-1 ring-[#1E1A1C]/[0.08]">
                <Image
                  src="/av-conference-room-hero.png"
                  alt="Modern conference room with dual displays, touch controller, and integrated video conferencing"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 36rem, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
