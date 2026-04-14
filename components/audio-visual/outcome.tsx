"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Sparkles, Users, Mic2, Tv, LayoutPanelLeft, Wrench, Handshake } from "lucide-react"

const outcomes = [
  { icon: Sparkles, text: "Consistent, modern experience in every meeting space" },
  { icon: CheckCircle, text: "Faster meeting starts with one-touch or guided join" },
  { icon: Mic2, text: "Clear speech for in-room and remote participants" },
  { icon: Tv, text: "Bright commercial displays and video walls sized for the room" },
  { icon: Users, text: "Hybrid equity—remote attendees feel included, not like an afterthought" },
  { icon: LayoutPanelLeft, text: "Digital signage that reinforces brand and visitor experience" },
  { icon: Wrench, text: "Proactive maintenance, firmware, and lifecycle planning" },
  { icon: Handshake, text: "Single accountable partner aligned with your IT strategy" },
]

export function AudioVisualOutcome() {
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
    <section ref={sectionRef} className="relative bg-gradient-to-br from-[#1E1A1C] to-[#2d2629] py-20 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#ED1E24]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-3xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Great AV makes collaboration effortless
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Organizations across Ann Arbor, Troy, and Southeast Michigan use UTEC to standardize conference
            technology, deploy professional displays, and keep rooms dependable—backed by the same local team
            that supports your network and security.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={`group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:border-[#ED1E24]/30 hover:bg-white/10 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ED1E24]/20">
                <outcome.icon className="h-6 w-6 text-[#ED1E24]" />
              </div>
              <p className="mt-4 text-sm font-medium leading-relaxed text-white">{outcome.text}</p>
            </div>
          ))}
        </div>

        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-lg font-medium text-gray-300">
            Your spaces should reinforce professionalism—not distract from the conversation.
          </p>
        </div>
      </div>
    </section>
  )
}
