"use client"

import { useEffect, useRef, useState } from "react"
import { VolumeX, Users, Clock, HelpCircle } from "lucide-react"

const problems = [
  { icon: VolumeX, text: "Remote participants can’t hear clearly—or echo fills the room" },
  { icon: Users, text: "Hybrid meetings that feel lopsided for people not in the room" },
  { icon: Clock, text: "5–10 minutes lost at the start of every call troubleshooting AV" },
  { icon: HelpCircle, text: "No single partner accountable for AV, network, and support together" },
]

export function AudioVisualProblem() {
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
            When AV isn&apos;t standardized, every meeting carries hidden cost
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Commercial audio visual is more than a TV on the wall—it is cameras, microphones, acoustic behavior,
            network performance, and how people connect from laptops and mobile devices. Piecemeal fixes rarely
            scale.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-500 hover:border-[#ED1E24]/20 hover:shadow-md ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ED1E24]/10 transition-colors group-hover:bg-[#ED1E24]">
                <problem.icon className="h-6 w-6 text-[#ED1E24] transition-colors group-hover:text-white" />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-[#1E1A1C]">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
