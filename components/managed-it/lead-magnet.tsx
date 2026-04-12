"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, AlertTriangle, DollarSign, Users, Cloud, HardDrive } from "lucide-react"

const calculatorFields = [
  { icon: Users, label: "Number of employees", value: "25-50" },
  { icon: HardDrive, label: "Remote workers", value: "40%" },
  { icon: Cloud, label: "Cloud usage", value: "Moderate" },
  { icon: Shield, label: "Security tools", value: "Basic" },
]

export function ManagedITLeadMagnet() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showScore, setShowScore] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Show score after a delay for effect
          setTimeout(() => setShowScore(true), 1500)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="risk-score" ref={sectionRef} className="bg-[#1E1A1C] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How secure is your business technology?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              Get a quick IT Risk Score based on your current systems, security practices, and support structure.
              Identify vulnerabilities before they become costly problems.
            </p>

            <Button
              size="lg"
              className="mt-8 group bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105"
            >
              Get Your Free IT Risk Score
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right - Interactive Calculator UI */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm">
              {/* Calculator Fields */}
              <div className="space-y-4">
                {calculatorFields.map((field, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg bg-white/5 px-4 py-3 border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <field.icon className="h-5 w-5 text-[#ED1E24]" />
                      <span className="text-sm text-gray-400">{field.label}</span>
                    </div>
                    <span className="text-sm font-medium text-white">{field.value}</span>
                  </div>
                ))}
              </div>

              {/* Score Output */}
              <div
                className={`mt-6 rounded-xl bg-gradient-to-br from-[#ED1E24]/20 to-[#ED1E24]/5 p-6 border border-[#ED1E24]/30 transition-all duration-500 ${
                  showScore ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Risk Score</p>
                    <p className="text-2xl font-bold text-white">Medium</p>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500/20">
                    <AlertTriangle className="h-7 w-7 text-yellow-500" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500" />
                    <span className="text-sm text-gray-400">3 potential vulnerabilities identified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#ED1E24]" />
                    <span className="text-sm text-gray-400">Estimated downtime cost: $15K-$25K/year</span>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[#ED1E24]">
                  <DollarSign className="h-4 w-4" />
                  <span>Potential savings with managed IT: $8K-$12K/year</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
