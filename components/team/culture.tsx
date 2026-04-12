"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Handshake, Zap, Lightbulb, Users } from "lucide-react"

const values = [
  {
    icon: MapPin,
    title: "Local Support",
    description: "Michigan-based team providing fast, in-person service when you need it",
  },
  {
    icon: Handshake,
    title: "Long-Term Relationships",
    description: "We invest in understanding your business for years, not just projects",
  },
  {
    icon: Zap,
    title: "Responsive Service",
    description: "Quick response times and proactive communication at every step",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description: "Technology recommendations that fit your needs and budget",
  },
  {
    icon: Users,
    title: "Trusted Advisors",
    description: "Strategic guidance to help your business grow with the right technology",
  },
]

export function TeamCulture() {
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
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left - Content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-widest text-[#ED1E24]">
              Our Approach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
              A local team focused on long-term partnerships
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              UTEC believes technology should be simple, reliable, and aligned with business goals. Our team works closely with clients to understand their needs and provide responsive support that keeps organizations running smoothly.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-500">
              We don&apos;t just fix problems — we build relationships. Our clients trust us because we show up, communicate clearly, and consistently deliver results.
            </p>
          </div>

          {/* Right - Values Grid */}
          <div
            className={`transition-all duration-1000 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`rounded-xl border border-gray-100 bg-gray-50 p-5 transition-all duration-500 hover:border-[#ED1E24]/20 hover:shadow-sm ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#ED1E24]/10">
                    <value.icon className="h-5 w-5 text-[#ED1E24]" />
                  </div>
                  <h3 className="font-semibold text-[#1E1A1C]">{value.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
