"use client"

import { useEffect, useRef, useState } from "react"

const officeImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Modern office interior",
    label: "Office Interior",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Team collaboration",
    label: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Technology workspace",
    label: "Tech Workspace",
  },
]

export function OfficeEnvironment() {
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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-[#ED1E24]">
            Our Workspace
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Built to support collaboration and innovation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our Ann Arbor office reflects our commitment to modern technology and client support. Our workspace is designed to help our team collaborate efficiently and deliver reliable service to organizations across Southeast Michigan.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {officeImages.map((image, index) => (
            <div
              key={image.label}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Overlay Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A1C]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <span className="text-sm font-semibold text-white">{image.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div
          className={`mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {[
            { stat: "30+", label: "Years Combined Experience" },
            { stat: "500+", label: "Clients Served" },
            { stat: "2", label: "Office Locations" },
            { stat: "24/7", label: "Support Available" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-[#ED1E24] sm:text-4xl">{item.stat}</p>
              <p className="mt-2 text-sm text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
