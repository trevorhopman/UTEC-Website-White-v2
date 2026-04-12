"use client"

import { useEffect, useRef, useState } from "react"
import { Clock, ShieldAlert, AlertCircle, Users, DollarSign, Boxes, Laptop, HelpCircle } from "lucide-react"

const problems = [
  { icon: AlertCircle, text: "Unexpected downtime interrupting operations" },
  { icon: Clock, text: "Slow IT support response times" },
  { icon: ShieldAlert, text: "Security threats and ransomware concerns" },
  { icon: Users, text: "Employees losing time troubleshooting technology issues" },
  { icon: DollarSign, text: "Unpredictable technology costs" },
  { icon: Boxes, text: "Managing multiple vendors for different systems" },
  { icon: Laptop, text: "Difficulty supporting remote or hybrid teams" },
  { icon: HelpCircle, text: "Uncertainty about technology decisions" },
]

export function ManagedITProblem() {
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
            When technology isn&apos;t managed properly, small issues become big disruptions
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Many growing businesses struggle with unreliable IT systems that slow down productivity and create unnecessary risk.
          </p>
        </div>

        {/* Problem Cards Grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group rounded-xl bg-white p-6 shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-md hover:border-[#ED1E24]/20 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ED1E24]/10 transition-colors group-hover:bg-[#ED1E24]">
                <problem.icon className="h-6 w-6 text-[#ED1E24] transition-colors group-hover:text-white" />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#1E1A1C]">
                {problem.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
