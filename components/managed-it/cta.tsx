"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function ManagedITCta() {
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
    <section id="assessment" ref={sectionRef} className="relative overflow-hidden bg-[#1E1A1C] py-20 sm:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#ED1E24]/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ED1E24]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {/* Content */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop worrying about IT issues
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Partner with a local team that keeps your technology running smoothly.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="group w-full bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 sm:w-auto"
          >
            <Link href="#contact">
              Request Free IT Assessment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-white/30 bg-transparent px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-[#1E1A1C] sm:w-auto"
          >
            <Link href="tel:7349960466">
              <Phone className="mr-2 h-5 w-5" />
              Speak with an IT Advisor
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
