"use client"

import { useEffect, useState } from "react"

const stats = [
  {
    value: "500+",
    title: "Businesses Served",
    subtext: "Across the Detroit Metro Area",
  },
  {
    value: "99.9%",
    title: "Uptime Guarantee",
    subtext: "For all managed services",
  },
  {
    value: "15min",
    title: "Average Response",
    subtext: "For support tickets",
  },
  {
    value: "8+",
    title: "Years of Excellence",
    subtext: "Detroit Executive Association Member",
  },
] as const

function StatBlock({ item }: { item: (typeof stats)[number] }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold tracking-tight text-[#ED1E24] sm:text-4xl">{item.value}</p>
      <p className="mt-2 text-sm font-semibold text-white sm:text-base">{item.title}</p>
      <p className="mt-1 text-xs leading-relaxed text-gray-400 sm:text-sm">{item.subtext}</p>
    </div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  return reduced
}

export function TrustStatsSection() {
  const reducedMotion = usePrefersReducedMotion()
  const loopItems = [...stats, ...stats] as const

  return (
    <section
      aria-label="UTEC at a glance"
      className="relative overflow-hidden border-y border-white/5 bg-[#1E1A1C] py-14 sm:py-16"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/4 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#ED1E24]/10 blur-3xl" />
        <div className="absolute -right-1/4 top-1/2 h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[#ED1E24]/5 blur-3xl" />
      </div>

      {reducedMotion ? (
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-12">
            {stats.map((item) => (
              <StatBlock key={item.title} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-trust-stats-marquee">
            {loopItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="box-border flex w-[min(72vw,17rem)] shrink-0 flex-col justify-center px-6 sm:w-80 sm:px-10 md:w-96 md:px-14 lg:w-[26rem] lg:px-16"
              >
                <StatBlock item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
