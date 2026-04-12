"use client"

import { useEffect, useRef, useState } from "react"

export function TeamHero() {
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
    <section ref={sectionRef} className="relative overflow-hidden bg-white pt-32 pb-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-[#ED1E24]/5 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-gray-100 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div
            className={`mb-6 inline-flex items-center rounded-full bg-[#ED1E24]/10 px-4 py-1.5 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-sm font-semibold text-[#ED1E24]">Our Team</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-balance text-4xl font-bold tracking-tight text-[#1E1A1C] sm:text-5xl lg:text-6xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Meet the team behind your technology
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            UTEC is a team of experienced technology professionals dedicated to helping businesses across Ann Arbor, Troy, and Southeast Michigan operate more efficiently and securely.
          </p>

          {/* Supporting text */}
          <p
            className={`mt-4 text-base leading-relaxed text-gray-500 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Our team combines IT expertise, business insight, and responsive local support to deliver reliable technology solutions for growing organizations.
          </p>
        </div>
      </div>
    </section>
  )
}
