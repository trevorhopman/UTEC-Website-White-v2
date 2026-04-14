"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Building2,
  CalendarDays,
  MessageSquareWarning,
  MonitorPlay,
  Sparkles,
} from "lucide-react"

/** Illustrative “sample output” — real prioritization happens on a planning call. */
const snapshotRows = [
  { icon: Building2, label: "Collaboration footprint", value: "14 rooms (board + huddle mix)" },
  { icon: MonitorPlay, label: "Primary meeting platform", value: "Microsoft Teams Rooms" },
  { icon: MessageSquareWarning, label: "Top user pain (typical)", value: "Join time + remote-side audio" },
  { icon: CalendarDays, label: "Desired rollout window", value: "Phased · 2 quarters" },
]

export function AudioVisualLeadMagnet() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showInsight, setShowInsight] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setTimeout(() => setShowInsight(true), 1500)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="av-priority" ref={sectionRef} className="bg-[#1E1A1C] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Know where to invest first—before you rip out every cable
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-400">
              AV budgets go further when upgrades are{" "}
              <strong className="font-semibold text-gray-200">sequenced</strong>: prove the experience in a few
              flagship spaces, lock standards for join flows and control, then scale with less rework. On a
              complimentary planning call, we map your footprint, platforms, and pain points into a practical
              roadmap—not a generic “risk score.”
            </p>

            <Button
              asChild
              size="lg"
              className="mt-8 group bg-[#ED1E24] px-8 py-6 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:scale-105"
            >
              <Link href="/#contact">
                Book a free AV prioritization session
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-gray-500 lg:text-left">
              Example output (illustrative)
            </p>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              <div className="space-y-4">
                {snapshotRows.map((row, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <div className="flex min-w-0 items-center gap-3">
                      <row.icon className="h-5 w-5 shrink-0 text-[#ED1E24]" />
                      <span className="truncate text-sm text-gray-400 sm:whitespace-normal">{row.label}</span>
                    </div>
                    <span className="ml-3 max-w-[48%] shrink-0 text-right text-xs font-medium text-white sm:text-sm">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className={`mt-6 rounded-xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/15 to-white/5 p-6 transition-all duration-500 ${
                  showInsight ? "scale-100 opacity-100" : "scale-95 opacity-0"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-400">Typical starting playbook</p>
                    <p className="text-xl font-bold text-white sm:text-2xl">Pilot 3 rooms, then template</p>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <Sparkles className="h-7 w-7 text-emerald-400" />
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span className="text-sm text-gray-400">
                      Ship confidence fast in your boardroom plus two high-traffic spaces.
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ED1E24]" />
                    <span className="text-sm text-gray-400">
                      Document join, control, and cabling standards before fleet-wide rollout.
                    </span>
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
