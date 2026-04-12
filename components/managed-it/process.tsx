"use client"

import { useEffect, useRef, useState } from "react"
import { Search, Lightbulb, Settings, Headphones } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Assess",
    description: "Evaluate current technology environment",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Recommend",
    description: "Design right-sized IT strategy",
  },
  {
    number: "03",
    icon: Settings,
    title: "Implement",
    description: "Deploy solutions with minimal disruption",
  },
  {
    number: "04",
    icon: Headphones,
    title: "Support",
    description: "Provide ongoing monitoring and guidance",
  },
]

export function ManagedITProcess() {
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
            A simple, reliable process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative mt-16">
          {/* Connecting Line - Desktop */}
          <div className="absolute left-0 right-0 top-10 hidden h-0.5 bg-gradient-to-r from-transparent via-[#ED1E24]/30 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ED1E24] shadow-lg shadow-red-200">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  {/* Step Number */}
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#1E1A1C] text-xs font-bold text-white shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-[#1E1A1C]">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
