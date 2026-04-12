"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Lightbulb, Settings, Headphones } from "lucide-react"

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess",
    description: "Evaluate current technology environment",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Recommend",
    description: "Design right-sized IT strategy",
  },
  {
    icon: Settings,
    number: "03",
    title: "Implement",
    description: "Deploy solutions with minimal disruption",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Support",
    description: "Provide ongoing monitoring and guidance",
  },
]

export function ProcessSection() {
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
    <section id="process" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl lg:text-5xl">
            A simple, reliable process
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="mt-16">
          <div className="relative">
            {/* Connection Line - Desktop */}
            <div
              className={`absolute left-[12%] right-[12%] top-[60px] hidden h-[3px] bg-[#ED1E24] lg:block transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            />

            {/* Steps */}
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Icon Container */}
                  <div className="relative mb-8">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#ED1E24] shadow-lg">
                      <step.icon className="h-12 w-12 text-white" strokeWidth={1.5} />
                    </div>
                    {/* Step Number Badge - Black circle */}
                    <div className="absolute -bottom-1 -right-1 flex h-10 w-10 items-center justify-center rounded-full bg-[#1E1A1C] text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#1E1A1C]">{step.title}</h3>
                  <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>

                  {/* Arrow for mobile/tablet - hidden on desktop */}
                  {index < steps.length - 1 && (
                    <div className="mt-8 h-10 w-0.5 bg-[#ED1E24]/30 lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
