"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield, Cloud, Monitor, Printer, Tv, Server } from "lucide-react"

const trustIndicators = [
  "Local team of experienced IT professionals",
  "Fast response times across Southeast Michigan",
  "Supporting Michigan businesses for over 20 years",
]

export function ManagedITHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 to-white pt-24 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[#ED1E24]/5 blur-3xl" />
        <div className="absolute -left-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-gray-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left duration-700">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#ED1E24]/10 px-4 py-2">
              <Monitor className="h-4 w-4 text-[#ED1E24]" />
              <span className="text-sm font-medium text-[#ED1E24]">Managed IT Services</span>
            </div>

            {/* Headline */}
            <h1 className="text-balance text-4xl font-bold tracking-tight text-[#1E1A1C] sm:text-5xl lg:text-6xl">
              Proactive IT support that keeps your business running smoothly
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg leading-relaxed text-gray-600 sm:text-xl">
              UTEC delivers fully managed IT services for businesses in Ann Arbor, Troy, and Southeast Michigan.
              We reduce downtime, strengthen security, and simplify technology management so your team can stay
              focused on what matters most.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105 hover:shadow-lg hover:shadow-red-200"
              >
                <Link href="#assessment">
                  Get a Free IT Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-[#1E1A1C]/20 px-8 py-6 text-base font-semibold text-[#1E1A1C] transition-all duration-300 hover:bg-[#1E1A1C] hover:text-white"
              >
                <Link href="#risk-score">Calculate Your IT Risk Score</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-col gap-3">
              {trustIndicators.map((indicator, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-[#ED1E24]" />
                  <span className="text-sm font-medium text-gray-600">{indicator}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Connected Ecosystem */}
          <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative aspect-square">
              {/* Central Hub */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#ED1E24] shadow-2xl shadow-red-200">
                  <Server className="h-10 w-10 text-white" />
                  {/* Pulse */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-[#ED1E24] opacity-20" />
                </div>
              </div>

              {/* Connection Lines SVG */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ED1E24" stopOpacity="0.2" />
                    <stop offset="50%" stopColor="#ED1E24" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ED1E24" stopOpacity="0.2" />
                  </linearGradient>
                </defs>
                <circle cx="200" cy="200" r="140" fill="none" stroke="url(#lineGrad)" strokeWidth="2" strokeDasharray="8 4" className="animate-spin" style={{ animationDuration: '60s' }} />
                <circle cx="200" cy="200" r="100" fill="none" stroke="url(#lineGrad)" strokeWidth="1" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }} />
              </svg>

              {/* Orbiting Devices */}
              {[
                { Icon: Monitor, label: "Workstations", x: 140, y: 0 },
                { Icon: Cloud, label: "Cloud", x: 43, y: 133 },
                { Icon: Shield, label: "Security", x: -113, y: 82 },
                { Icon: Printer, label: "Copiers", x: -113, y: -82 },
                { Icon: Tv, label: "AV Display", x: 43, y: -133 },
              ].map((device, index) => (
                <div
                  key={index}
                  className="absolute left-1/2 top-1/2 animate-in fade-in zoom-in duration-500"
                  style={{
                    transform: `translate(calc(-50% + ${device.x}px), calc(-50% + ${device.y}px))`,
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="group flex flex-col items-center gap-2">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl border border-gray-100">
                      <device.Icon className="h-6 w-6 text-[#1E1A1C]" />
                    </div>
                    <span className="text-xs font-medium text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                      {device.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Floating Data Cards */}
              <div className="absolute right-0 top-8 animate-in fade-in slide-in-from-right duration-500 delay-500">
                <div className="rounded-lg bg-white px-4 py-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-gray-600">All Systems Online</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-0 bottom-12 animate-in fade-in slide-in-from-left duration-500 delay-700">
                <div className="rounded-lg bg-white px-4 py-3 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-[#ED1E24]" />
                    <span className="text-xs font-medium text-gray-600">Protected 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
