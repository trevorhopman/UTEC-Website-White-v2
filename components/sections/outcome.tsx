"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, Zap, DollarSign, Headphones, Shield } from "lucide-react"

const outcomes = [
  {
    icon: Zap,
    title: "Reliable systems",
    description: "Technology that just works, every day",
  },
  {
    icon: DollarSign,
    title: "Predictable costs",
    description: "Know exactly what you'll pay each month",
  },
  {
    icon: Headphones,
    title: "Fast local support",
    description: "Expert help when you need it, nearby",
  },
  {
    icon: Shield,
    title: "Secure infrastructure",
    description: "Protection from modern cyber threats",
  },
]

export function OutcomeSection() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-[#1E1A1C] via-[#262224] to-[#1E1A1C] py-20 sm:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#ED1E24]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#ED1E24]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            A smarter way to manage technology
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-300">
            With UTEC, your technology becomes a competitive advantage. One partner
            managing everything so you can focus on what matters most.
          </p>
        </div>

        {/* Outcome Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#ED1E24]/10 transition-colors group-hover:bg-[#ED1E24]/20">
                <outcome.icon className="h-7 w-7 text-[#ED1E24]" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white">{outcome.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {outcome.description}
              </p>

              {/* Hover glow */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ED1E24]/0 transition-all duration-500 group-hover:bg-[#ED1E24]/10 group-hover:blur-2xl" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div
          className={`mt-12 flex items-center justify-center gap-2 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <CheckCircle2 className="h-5 w-5 text-[#ED1E24]" />
          <p className="text-base font-medium text-gray-300">
            Technology should help your business grow — not hold it back.
          </p>
        </div>
      </div>
    </section>
  )
}
