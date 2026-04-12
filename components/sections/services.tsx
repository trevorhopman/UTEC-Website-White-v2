"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Monitor, Shield, Printer, Phone, FileText, MoreHorizontal, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Monitor,
    title: "Managed IT Services",
    description: "Proactive monitoring, helpdesk support, device management, and backups to keep your business running smoothly",
    href: "#",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business from ransomware, phishing, and data breaches with enterprise-grade security solutions",
    href: "#",
  },
  {
    icon: Printer,
    title: "Office Technology Hardware",
    description: "Copiers, printers, interactive displays, and office equipment from industry-leading manufacturers",
    href: "#",
  },
  {
    icon: FileText,
    title: "Managed Print",
    description: "Reduce printing costs, automate supply replenishment, and eliminate printer headaches",
    href: "#",
  },
  {
    icon: Phone,
    title: "VOIP Phone Systems",
    description: "Modern business phone systems with unified communications, mobility, and cost savings",
    href: "#",
  },
  {
    icon: MoreHorizontal,
    title: "Document Management & More",
    description: "Mailroom services, toner recycling program, document workflow solutions, and additional office services",
    href: "#",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Complete technology support from one partner
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            From IT infrastructure to office equipment, we handle it all so you can
            focus on running your business.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`group relative flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#ED1E24]/30 hover:shadow-xl hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-[#ED1E24] group-hover:shadow-lg group-hover:shadow-red-200">
                <service.icon className="h-7 w-7 text-[#1E1A1C] transition-colors group-hover:text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#1E1A1C] group-hover:text-[#ED1E24] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-gray-600">
                {service.description}
              </p>

              {/* Learn More */}
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[#ED1E24] opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
