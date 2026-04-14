"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"
import { OfficeEcosystem } from "@/components/office-ecosystem"

const trustIndicators = [
  "Supporting Michigan businesses for over 20 years",
  "Local team of 60 technology experts",
  "Serving Ann Arbor, Troy, Detroit metro",
]

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (hero) {
      hero.classList.add("animate-in", "fade-in", "duration-700")
    }
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E1A1C" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#1E1A1C] sm:text-5xl lg:text-6xl">
              Technology that just works{" "}
              <span className="text-[#ED1E24]">—</span> so your business can too
            </h1>

            <p className="mt-6 text-pretty text-lg leading-relaxed text-gray-600 sm:text-xl">
              UTEC delivers managed IT (with layered security against ransomware and phishing), professional audio
              visual, and office technology for growing businesses in Ann Arbor, Troy, and Southeast Michigan.
            </p>

            <p className="mt-4 text-pretty text-base leading-relaxed text-gray-500">
              We prevent downtime, reduce risk, and simplify your technology with one reliable local partner.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="group bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-200 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg"
              >
                <Link href="#assessment">
                  Get a Free IT Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1E1A1C] px-8 py-6 text-base font-semibold text-[#1E1A1C] transition-all duration-200 hover:bg-[#1E1A1C] hover:text-white"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col gap-3">
              {trustIndicators.map((indicator, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 animate-in fade-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${(index + 1) * 150}ms` }}
                >
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#ED1E24]" />
                  <span className="text-sm font-medium text-gray-600">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Office Ecosystem Illustration */}
          <div className="relative hidden lg:block">
            <div className="relative h-[500px] w-full animate-in fade-in slide-in-from-right duration-700">
              <OfficeEcosystem />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 52.5C480 45 600 60 720 67.5C840 75 960 75 1080 67.5C1200 60 1320 45 1380 37.5L1440 30V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
