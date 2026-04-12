"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Layers, Zap, MessageSquare, TrendingUp } from "lucide-react"

const differentiators = [
  {
    icon: MapPin,
    title: "Local support when you need it",
    description: "Fast onsite response in Ann Arbor, Troy, and Southeast Michigan",
  },
  {
    icon: Layers,
    title: "One partner for everything",
    description: "IT, cybersecurity, copiers, printers, and office technology",
  },
  {
    icon: Zap,
    title: "Proactive approach",
    description: "We prevent problems instead of reacting to them",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "Technology explained in plain English",
  },
  {
    icon: TrendingUp,
    title: "Scalable solutions",
    description: "Technology that grows with your business",
  },
]

export function DifferentiationSection() {
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
    <section id="why-utec" ref={sectionRef} className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Why businesses choose UTEC
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            We&apos;re more than a vendor — we&apos;re your technology partner committed to your success.
          </p>
        </div>

        {/* Differentiator Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group flex gap-4 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white shadow-sm transition-all duration-300 group-hover:bg-[#ED1E24] group-hover:shadow-md">
                <item.icon className="h-6 w-6 text-[#ED1E24] transition-colors group-hover:text-white" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-[#1E1A1C]">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
