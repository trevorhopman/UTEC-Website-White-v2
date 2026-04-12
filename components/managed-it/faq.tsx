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
    question: "What are Managed IT Services?",
    answer: "Managed IT Services provide comprehensive technology support for your business, including proactive monitoring, helpdesk support, cybersecurity, backup and recovery, and technology planning. Instead of reacting to problems, we prevent them before they impact your operations.",
  },
  {
    question: "How fast is support response?",
    answer: "Our local team in Ann Arbor and Troy provides rapid response times. Critical issues receive immediate attention, with most support requests addressed within hours, not days. We understand that technology problems directly impact your productivity.",
  },
  {
    question: "Do you provide onsite support?",
    answer: "Yes, we provide both remote and onsite support throughout Southeast Michigan. Many issues can be resolved quickly through remote access, but when hands-on help is needed, our technicians can be at your location promptly.",
  },
  {
    question: "Can you support our existing systems?",
    answer: "Absolutely. We work with a wide range of business technology systems and can integrate with your current infrastructure. Our assessment process evaluates your existing environment to ensure seamless support.",
  },
  {
    question: "How much do Managed IT Services cost?",
    answer: "Pricing is based on your organization's size, complexity, and specific needs. We provide predictable monthly pricing so you can budget effectively without unexpected technology expenses. Contact us for a customized quote.",
  },
  {
    question: "Do you support Microsoft 365?",
    answer: "Yes, we provide comprehensive Microsoft 365 support including setup, migration, administration, security configuration, and user training. We help you get the most value from your Microsoft investment.",
  },
  {
    question: "Can you improve our cybersecurity?",
    answer: "Security is integrated into everything we do. We implement security best practices, monitor for threats, manage patches and updates, provide employee security awareness, and help protect your business from ransomware and phishing attacks.",
  },
  {
    question: "Do you support hybrid teams?",
    answer: "Yes, we specialize in supporting organizations with remote and hybrid workforces. We ensure your team can work productively and securely from anywhere while maintaining collaboration and data protection.",
  },
  {
    question: "What size companies do you typically support?",
    answer: "We primarily support small and mid-sized businesses across Southeast Michigan. Whether you have 10 employees or 200, we tailor our solutions to fit your specific needs and budget.",
  },
]

export function ManagedITFaq() {
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
        {/* Section Header */}
        <div
          className={`text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`mt-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl bg-white border border-gray-200 px-6 data-[state=open]:border-[#ED1E24]/30 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-[#1E1A1C] hover:text-[#ED1E24] hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
