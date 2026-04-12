"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Zap, Layers, Shield, MessageSquare, Building, Handshake, Award } from "lucide-react"

const differentiators = [
  {
    icon: MapPin,
    title: "Local Support Team",
    description: "Based in Ann Arbor and Troy with fast response times",
  },
  {
    icon: Zap,
    title: "Fast Response Times",
    description: "When issues matter most, we're there quickly",
  },
  {
    icon: Layers,
    title: "One Partner",
    description: "IT, cybersecurity, and office technology under one roof",
  },
  {
    icon: Shield,
    title: "Proactive Approach",
    description: "Focused on prevention, not just fixing problems",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Technology explained in language you understand",
  },
  {
    icon: Building,
    title: "Right-Sized Solutions",
    description: "Tailored for small and mid-sized businesses",
  },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    description: "Long-term technology partnership, not just vendor",
  },
  {
    icon: Award,
    title: "Michigan Experience",
    description: "Supporting organizations across multiple industries",
  },
]

export function ManagedITWhyUtec() {
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
    <section ref={sectionRef} className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            A better IT partner for growing organizations
          </h2>
        </div>

        {/* Differentiators Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:border-[#ED1E24]/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ED1E24]/10 transition-colors group-hover:bg-[#ED1E24]">
                <item.icon className="h-6 w-6 text-[#ED1E24] transition-colors group-hover:text-white" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-[#1E1A1C]">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
