"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
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
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-[#1E1A1C] py-20 sm:py-28">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#ED1E24]/10 blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#ED1E24]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Stop worrying about technology
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-300 sm:text-xl">
            Get reliable IT support from a local partner that understands your business.
          </p>
        </div>

        {/* Primary CTA Button */}
        <div
          className={`mt-10 flex justify-center transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            asChild
            size="lg"
            className="group bg-[#ED1E24] px-10 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
          >
            <Link href="#assessment">
              Request Free Assessment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Contact Cards */}
        <div
          className={`mt-10 flex flex-col gap-4 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Email Card */}
          <Link
            href="mailto:marketing@utecit.com"
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
          >
            <Mail className="h-7 w-7 shrink-0 text-[#ED1E24]" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg font-semibold text-white">marketing@utecit.com</p>
            </div>
          </Link>

          {/* Phone Cards Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="tel:7344345900"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
            >
              <Phone className="h-7 w-7 shrink-0 text-[#ED1E24]" />
              <div>
                <p className="text-sm text-gray-400">Ann Arbor</p>
                <p className="text-lg font-semibold text-white">(734) 434-5900</p>
              </div>
            </Link>
            <Link
              href="tel:2488481777"
              className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
            >
              <Phone className="h-7 w-7 shrink-0 text-[#ED1E24]" />
              <div>
                <p className="text-sm text-gray-400">Troy</p>
                <p className="text-lg font-semibold text-white">(248) 848-1777</p>
              </div>
            </Link>
          </div>

          {/* Address cards — same grid as phones */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="https://www.google.com/maps/search/?api=1&query=1995+Highland+Drive+Suite+C+Ann+Arbor+MI+48108"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
            >
              <MapPin className="mt-1 h-7 w-7 shrink-0 text-[#ED1E24]" />
              <div>
                <p className="text-sm text-gray-400">Ann Arbor</p>
                <p className="text-lg font-semibold text-white">1995 Highland Drive, Suite C</p>
                <p className="text-sm text-gray-400">Ann Arbor, MI 48108</p>
              </div>
            </Link>
            <Link
              href="https://www.google.com/maps/search/?api=1&query=3838+Livernois+Troy+MI+48083"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-5 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-colors hover:bg-white/10"
            >
              <MapPin className="mt-1 h-7 w-7 shrink-0 text-[#ED1E24]" />
              <div>
                <p className="text-sm text-gray-400">Troy</p>
                <p className="text-lg font-semibold text-white">3838 Livernois</p>
                <p className="text-sm text-gray-400">Troy, MI 48083</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Trust Points */}
        <div
          className={`mt-10 flex flex-wrap justify-center gap-6 transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {["No obligation", "Free consultation", "Local experts"].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-[#ED1E24]" />
              <span className="text-sm font-medium text-gray-400">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
