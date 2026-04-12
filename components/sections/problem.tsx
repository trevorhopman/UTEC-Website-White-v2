"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const problems = [
  "Slow IT support that leaves you waiting hours or days",
  "Security vulnerabilities exposing you to ransomware and phishing",
  "Unexpected system downtime disrupting your operations",
  "Too many vendors to manage for different technology needs",
  "Equipment that constantly breaks and needs repairs",
  "Confusing technology decisions with no clear guidance",
]

/** Same cadence as hero trust lines: `(n + 1) * 150` ms */
const STAGGER_MS = 150

export function ProblemSection() {
  /** When the two-column block enters the viewport — same animation stack as hero (`tw-animate-css`). */
  const columnsRef = useRef<HTMLDivElement>(null)
  const [reveal, setReveal] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true)
      setReveal(true)
      return
    }

    const el = columnsRef.current
    if (!el) return

    let cancelled = false

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || cancelled) return
        observer.disconnect()
        requestAnimationFrame(() => {
          if (!cancelled) setReveal(true)
        })
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 8% 0px",
      }
    )

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!cancelled) observer.observe(el)
      })
    })

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [])

  return (
    <section className="overflow-hidden bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header — reveals with columns (tw-animate, matches hero “fly in” feel) */}
        <div
          className={cn(
            "mb-12 text-center",
            reveal
              ? "animate-in fade-in slide-in-from-bottom-6 duration-700 fill-mode-both"
              : "opacity-0"
          )}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ED1E24]">
            Common Challenges
          </p>
          <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl lg:text-5xl">
            Technology issues shouldn&apos;t slow down your business
          </h2>
        </div>

        <div
          ref={columnsRef}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left — image flies in from left (same utilities as hero right column, reversed) */}
          <div
            className={cn(
              "relative",
              reveal
                ? "animate-in fade-in slide-in-from-left duration-700 fill-mode-both"
                : "pointer-events-none opacity-0"
            )}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Server room with network infrastructure"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1A1C]/30 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-[#ED1E24]/10" />
          </div>

          {/* Right — each line flies in from the right with stagger (hero trust-line pattern) */}
          <div className={cn(!reveal && "pointer-events-none")}>
            {/* Description */}
            <p
              key={reveal && !reducedMotion ? "problem-intro-in" : "problem-intro-idle"}
              className={cn(
                "text-lg leading-relaxed text-gray-600",
                !reveal && !reducedMotion && "opacity-0",
                reveal && reducedMotion && "opacity-100",
                reveal &&
                  !reducedMotion &&
                  "animate-in fade-in slide-in-from-right duration-500 fill-mode-both"
              )}
              style={
                reveal && !reducedMotion
                  ? { animationDelay: `${1 * STAGGER_MS}ms` }
                  : undefined
              }
            >
              Most companies come to UTEC because technology has become unpredictable, 
              expensive, and hard to manage—with Michigan-based help when something breaks.
            </p>

            {/* Checklist */}
            <ul className="mt-8 space-y-4">
              {problems.map((problem, index) => (
                <li
                  key={`${index}-${reveal && !reducedMotion ? "in" : "idle"}`}
                  className={cn(
                    "flex items-start gap-3",
                    !reveal && !reducedMotion && "opacity-0",
                    reveal && reducedMotion && "opacity-100",
                    reveal &&
                      !reducedMotion &&
                      "animate-in fade-in slide-in-from-right duration-500 fill-mode-both"
                  )}
                  style={
                    reveal && !reducedMotion
                      ? { animationDelay: `${(index + 2) * STAGGER_MS}ms` }
                      : undefined
                  }
                >
                  <X className="mt-0.5 h-5 w-5 shrink-0 text-[#ED1E24]" />
                  <span className="text-base text-gray-700">{problem}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div
              key={reveal && !reducedMotion ? "problem-cta-in" : "problem-cta-idle"}
              className={cn(
                "mt-10",
                !reveal && !reducedMotion && "opacity-0",
                reveal && reducedMotion && "opacity-100",
                reveal &&
                  !reducedMotion &&
                  "animate-in fade-in slide-in-from-right duration-500 fill-mode-both"
              )}
              style={
                reveal && !reducedMotion
                  ? {
                      animationDelay: `${(problems.length + 2) * STAGGER_MS}ms`,
                    }
                  : undefined
              }
            >
              <Button
                asChild
                className="group bg-[#ED1E24] px-6 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-[#d91a1f] hover:shadow-lg"
              >
                <Link href="#services">
                  See how we help
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
