"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Factory, Scale, Briefcase, Heart, Quote } from "lucide-react"

const industries = [
  { icon: Heart, name: "Healthcare" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Scale, name: "Legal" },
  { icon: Briefcase, name: "Professional Services" },
  { icon: Building2, name: "Nonprofits" },
]

const testimonial = {
  quote: "UTEC has transformed how we manage technology. Their proactive approach means we rarely have issues, and when we do, they're resolved quickly. It's like having our own IT department without the overhead.",
  author: "Operations Director",
  company: "Southeast Michigan Manufacturing Company",
}

export function SocialProofSection() {
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
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Trusted by businesses across Southeast Michigan
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            From healthcare to manufacturing, we serve businesses that depend on reliable technology.
          </p>
        </div>

        {/* Industries */}
        <div
          className={`mt-12 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex items-center gap-2 rounded-full bg-white px-5 py-3 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
            >
              <industry.icon className="h-5 w-5 text-[#ED1E24]" />
              <span className="text-sm font-medium text-[#1E1A1C]">{industry.name}</span>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className={`mt-16 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow-lg sm:p-12">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#ED1E24] shadow-lg">
              <Quote className="h-6 w-6 text-white" />
            </div>

            {/* Quote Text */}
            <blockquote className="mt-4 text-lg leading-relaxed text-gray-700 sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="mt-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-gray-200" />
              <div>
                <p className="font-semibold text-[#1E1A1C]">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
