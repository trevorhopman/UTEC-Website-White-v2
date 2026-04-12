"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, Gauge, Server, Users, DollarSign } from "lucide-react"

const assessmentBenefits = [
  { icon: ShieldCheck, text: "Security risks" },
  { icon: Gauge, text: "Performance issues" },
  { icon: Server, text: "Outdated infrastructure" },
  { icon: Users, text: "Opportunities to simplify vendors" },
  { icon: DollarSign, text: "Ways to reduce technology costs" },
]

export function LeadMagnetSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
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
    <section id="assessment" ref={sectionRef} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E1A1C] to-[#2d2729] p-8 shadow-2xl transition-all duration-700 sm:p-12 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#ED1E24" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get clarity on your technology environment
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                Our free IT assessment helps identify:
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {assessmentBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#ED1E24]/20">
                      <benefit.icon className="h-4 w-4 text-[#ED1E24]" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{benefit.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Content - CTA */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-8 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-lg font-medium text-white">
                  Ready to see where you stand?
                </p>
                <p className="mt-2 text-sm text-gray-400">
                  No obligation. No sales pressure. Just clarity.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="group mt-6 bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <Link href="#contact">
                  Schedule your Free IT Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#ED1E24]/10 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#ED1E24]/10 blur-3xl" />
        </div>
      </div>
    </section>
  )
}
