"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Layers, Wrench, MessageSquare, Building, Handshake, Award, Link2 } from "lucide-react"

const differentiators = [
  {
    icon: MapPin,
    title: "Local delivery team",
    description: "Ann Arbor and Troy based—onsite surveys, installs, and service calls",
  },
  {
    icon: Link2,
    title: "AV + IT together",
    description: "Switches, VLANs, Wi-Fi, and security aligned with room systems",
  },
  {
    icon: Layers,
    title: "One accountable partner",
    description: "Fewer finger-pointing issues between “the AV vendor” and “the IT vendor”",
  },
  {
    icon: Wrench,
    title: "Standards that scale",
    description: "Repeatable room kits so support and training stay simple as you grow",
  },
  {
    icon: MessageSquare,
    title: "Plain-language guidance",
    description: "Specs translated into outcomes your leadership team understands",
  },
  {
    icon: Building,
    title: "Right-sized for SMB",
    description: "Enterprise-grade thinking without unnecessary complexity",
  },
  {
    icon: Handshake,
    title: "Long-term partnership",
    description: "Roadmaps for upgrades, warranties, and refreshes—not one-off installs",
  },
  {
    icon: Award,
    title: "Michigan experience",
    description: "Boardrooms, training centers, lobbies, and multi-location clients",
  },
]

export function AudioVisualWhyUtec() {
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
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            A better partner for workplace collaboration technology
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#ED1E24]/20 hover:shadow-md ${
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
