"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

const includedServices = [
  "Conference room & huddle space design",
  "Commercial displays, interactive panels & video walls",
  "Microsoft Teams Rooms and Zoom Rooms integration",
  "Installation, commissioning, training & ongoing support coordination",
]

export function AudioVisualIncluded() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.12 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo — left column, fly in from left + float */}
          <div
            className={`transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="animate-av-hero-float mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gray-100 shadow-[0_28px_64px_-12px_rgba(30,26,28,0.38),0_12px_24px_-8px_rgba(30,26,28,0.12)] ring-1 ring-[#1E1A1C]/[0.08]">
                <Image
                  src="/av-included-display.png"
                  alt="Modern conference room with large wall-mounted display, laptop, and in-table AV control"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </div>

          {/* Copy + list — right column, fly in from right */}
          <div
            className={`transition-all duration-700 ease-out delay-100 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
              What&apos;s included in professional AV engagements
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-gray-600">
              Scope is tailored to your footprint—we scale from a few rooms to multi-site rollouts.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              {includedServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 rounded-lg bg-gray-50 px-5 py-4 transition-all duration-500 ease-out hover:bg-[#ED1E24]/5 ${
                    isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${180 + index * 80}ms` }}
                >
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#ED1E24]" />
                  <span className="text-sm font-medium leading-relaxed text-[#1E1A1C]">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
