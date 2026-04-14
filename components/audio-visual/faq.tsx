"use client"

import { useEffect, useRef, useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What do you mean by commercial audio visual?",
    answer:
      "Commercial AV refers to professionally installed systems for workplaces—not consumer TVs. Typical elements include commercial-grade displays and video walls, room scheduling panels, PTZ or fixed cameras, ceiling microphones, soundbars or distributed audio, wireless presentation, control touch panels, and digital signage players—all integrated with your network and collaboration platforms like Microsoft Teams or Zoom.",
  },
  {
    question: "Do you only support new construction?",
    answer:
      "No. We routinely refresh existing offices: retrofit displays, upgrade microphones, standardize Teams Rooms, replace failing projectors, and improve wireless casting—all while coordinating with your IT team on VLANs, bandwidth, and security policies.",
  },
  {
    question: "Can you help with digital signage?",
    answer:
      "Yes. We help define content goals, select players or platform options, plan screen placement for visibility, and support ongoing updates so lobbies and common areas stay current.",
  },
  {
    question: "How do AV projects coordinate with Managed IT?",
    answer:
      "Room systems depend on healthy networks, DNS, certificates, and device policies. Because UTEC also delivers managed IT—including layered security against ransomware and phishing—we align room builds with your broader technology standards from day one.",
  },
  {
    question: "What regions do you serve?",
    answer:
      "We support organizations across Southeast Michigan, including Ann Arbor, Troy, Detroit metro, and surrounding communities—with onsite surveys, installation, and service.",
  },
  {
    question: "How are projects priced?",
    answer:
      "We scope by room type, display count, integration complexity, and support expectations. You receive clear phasing options so you can align AV upgrades with budget cycles.",
  },
  {
    question: "Do you provide training?",
    answer:
      "Yes. We deliver end-user and admin training so teams adopt one-touch join, wireless sharing, and signage workflows confidently.",
  },
  {
    question: "What happens after installation?",
    answer:
      "We offer ongoing support options including helpdesk coordination, firmware management, and lifecycle planning so displays and UC appliances stay supported as vendors release updates.",
  },
]

export function AudioVisualFaq() {
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
    <section ref={sectionRef} className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div
          className={`mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`av-item-${index}`}
                className="rounded-xl border border-gray-200 bg-white px-6 data-[state=open]:border-[#ED1E24]/30 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-[#1E1A1C] hover:text-[#ED1E24] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
