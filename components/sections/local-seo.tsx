"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin } from "lucide-react"

/** ViewBox matches `/great-lakes-reference-map.png`. */
const MAP = { w: 992, h: 756 } as const

/**
 * Office markers in SVG viewBox space, calibrated to `great-lakes-reference-map.png`
 * (not raw lon/lat projection — that map’s crop doesn’t match a single equirectangular box).
 * Ann Arbor ≈ 834 Phoenix Dr; Troy ≈ 801 W Big Beaver Rd — positions match typical
 * Michigan outline references (Ann Arbor SE inland above Ohio; Troy NE toward Detroit).
 */
const OFFICE_MARKERS = [
  { x: 554, y: 504, label: "Ann Arbor" },
  { x: 620, y: 476, label: "Troy" },
] as const

const locations = [
  "Ann Arbor",
  "Troy",
  "Detroit",
  "Southfield",
  "Novi",
  "Farmington Hills",
  "Livonia",
  "Royal Oak",
  "Bloomfield Hills",
]

export function LocalSeoSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const officePts = OFFICE_MARKERS.map((c) => ({ x: c.x, y: c.y }))
  const serviceAreaCenter = {
    x: (officePts[0].x + officePts[1].x) / 2 + 18 - 28,
    y: (officePts[0].y + officePts[1].y) / 2 + 6,
  }

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
    <section id="locations" ref={sectionRef} className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
              Local IT services in Ann Arbor and Southeast Michigan
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              UTEC provides managed IT services (including security hardening), professional audio visual, and office
              technology solutions for businesses throughout the region. Our local presence means faster response
              times and personalized service.
            </p>

            {/* Locations Grid */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-[#ED1E24]" />
                  <span className="text-sm font-medium text-gray-700">{location}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Illustration */}
          <div
            className={`relative transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200/80">
              <img
                src="/great-lakes-reference-map.png"
                width={MAP.w}
                height={MAP.h}
                alt="Map of Michigan, the Great Lakes, and surrounding states and provinces"
                className="block h-auto w-full"
                decoding="async"
              />
              {/* UTEC overlays — same viewBox as reference PNG (992×756) */}
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full font-sans"
                viewBox={`0 0 ${MAP.w} ${MAP.h}`}
                preserveAspectRatio="xMidYMid meet"
                aria-hidden
              >
                <ellipse
                  cx={serviceAreaCenter.x}
                  cy={serviceAreaCenter.y}
                  rx={216}
                  ry={116}
                  fill="#ED1E24"
                  fillOpacity={0.1}
                  stroke="#ED1E24"
                  strokeWidth={2.5}
                  strokeDasharray="16 12"
                  transform={`rotate(-10 ${serviceAreaCenter.x} ${serviceAreaCenter.y})`}
                />
                <path
                  d={`M ${officePts[0].x} ${officePts[0].y} L ${officePts[1].x} ${officePts[1].y}`}
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="1.25"
                  strokeOpacity={0.55}
                />
                {OFFICE_MARKERS.map((c, i) => {
                  const { x, y } = officePts[i]
                  const tx = x + (i === 0 ? 10 : 8)
                  const ty = y + (i === 0 ? 16 : -11)
                  return (
                    <g key={c.label}>
                      <circle cx={x} cy={y} r={i === 0 ? 7 : 6} fill="#ED1E24" />
                      <text
                        x={tx}
                        y={ty}
                        fontSize={12}
                        fontWeight="600"
                        fill="#1E1A1C"
                      >
                        {c.label}
                      </text>
                    </g>
                  )
                })}
              </svg>

              <div className="pointer-events-none absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm sm:bottom-4 sm:left-4">
                <div className="flex items-center gap-2 text-xs font-medium text-gray-700">
                  <div className="h-3 w-3 rounded-full bg-[#ED1E24]" />
                  <span>UTEC Service Area</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
