"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const includedServices = [
  "24/7 system monitoring",
  "Helpdesk support",
  "Device management",
  "Patch management",
  "Data backup and recovery",
  "Network management",
  "Microsoft 365 support",
  "User support",
  "Security best practices",
  "Vendor coordination",
  "Technology planning guidance",
  "Onsite and remote support",
]

export function ManagedITIncluded() {
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
        {/* Section Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            What&apos;s included in Managed IT Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {includedServices.map((service, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 rounded-lg bg-gray-50 px-5 py-4 transition-all duration-500 hover:bg-[#ED1E24]/5 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-[#ED1E24]" />
              <span className="text-sm font-medium text-[#1E1A1C]">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
