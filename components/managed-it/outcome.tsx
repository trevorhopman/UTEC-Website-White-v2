"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Zap, Shield, DollarSign, Users, Lightbulb, TrendingUp, Handshake } from "lucide-react"

const outcomes = [
  { icon: Zap, text: "Reliable systems that reduce disruptions" },
  { icon: CheckCircle, text: "Faster IT support response times" },
  { icon: Shield, text: "Improved cybersecurity posture" },
  { icon: DollarSign, text: "Predictable monthly technology costs" },
  { icon: Users, text: "More productive employees" },
  { icon: Lightbulb, text: "Confidence in technology decisions" },
  { icon: TrendingUp, text: "Scalable infrastructure for growth" },
  { icon: Handshake, text: "Simplified vendor management" },
]

export function ManagedITOutcome() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#1E1A1C] to-[#2d2629] py-20 sm:py-28">
      {/* Background Accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ED1E24]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Reliable technology creates better business outcomes
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            UTEC helps organizations across Ann Arbor, Troy, Detroit metro, and Southeast Michigan operate more efficiently with proactive IT management.
          </p>
        </div>

        {/* Outcome Cards Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={`group rounded-xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#ED1E24]/30 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ED1E24]/20">
                <outcome.icon className="h-6 w-6 text-[#ED1E24]" />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-white">
                {outcome.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg font-medium text-gray-300">
            Technology should help your business move forward — not hold it back.
          </p>
        </div>
      </div>
    </section>
  )
}
