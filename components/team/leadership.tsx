"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Linkedin } from "lucide-react"

type LeaderCard = {
  name: string
  title: string
  bio: string
  linkedin: string
  image?: string
}

const leaders: LeaderCard[] = [
  {
    name: "Kevin Van Kannel",
    title: "President",
    bio: "Kevin leads UTEC with over 20 years of experience in managed IT services. He is passionate about building long-term partnerships and delivering technology solutions that drive business success.",
    linkedin: "#",
    image: "/team/kevin-van-kannel.png",
  },
  {
    name: "Tom Wykowski",
    title: "Service Manager",
    bio: "Tom oversees UTEC's service delivery team, ensuring clients receive responsive and reliable support. His technical expertise and leadership keep operations running smoothly.",
    linkedin: "#",
    image: "/team/tom-wykowski.png",
  },
  {
    name: "Les Harris",
    title: "Director of Sales",
    bio: "Les works closely with businesses to understand their technology needs and match them with the right solutions. He brings decades of experience in IT consulting and business development.",
    linkedin: "#",
    image: "/team/les-harris.png",
  },
  {
    name: "Sarah Mitchell",
    title: "Operations Director",
    bio: "Sarah manages day-to-day operations at UTEC, streamlining processes and ensuring the team delivers exceptional service to every client.",
    linkedin: "#",
  },
  {
    name: "David Chen",
    title: "Technical Lead",
    bio: "David leads UTEC's technical team, architecting solutions and mentoring engineers. His deep expertise in cybersecurity and cloud infrastructure benefits clients across all industries.",
    linkedin: "#",
  },
  {
    name: "Jennifer Adams",
    title: "Client Success Manager",
    bio: "Jennifer ensures every UTEC client has a positive experience from onboarding to ongoing support. She acts as the primary point of contact for strategic accounts.",
    linkedin: "#",
  },
]

export function LeadershipTeam() {
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
            Leadership
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1E1A1C] sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Experienced professionals committed to your success
          </p>
        </div>

        {/* Team Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className={`group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Headshot or initials */}
              {leader.image ? (
                <div className="relative mx-auto mb-6 aspect-square w-32 overflow-hidden rounded-full bg-gray-100 shadow-sm ring-2 ring-[#ED1E24]/15 sm:w-36">
                  <Image
                    src={leader.image}
                    alt={`Portrait of ${leader.name}`}
                    fill
                    className="object-cover object-[center_16%] sm:object-[center_20%]"
                    sizes="144px"
                  />
                </div>
              ) : (
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#ED1E24]/10 to-[#ED1E24]/5 sm:h-[8.5rem] sm:w-[8.5rem]">
                  <span className="text-2xl font-bold text-[#ED1E24] sm:text-3xl">
                    {leader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}

              {/* Name & Title */}
              <h3 className="text-center text-xl font-semibold text-[#1E1A1C]">
                {leader.name}
              </h3>
              <p className="mt-1 text-center text-sm font-medium text-[#ED1E24]">
                {leader.title}
              </p>

              {/* Bio */}
              <p className="mt-4 text-center text-sm leading-relaxed text-gray-600">
                {leader.bio}
              </p>

              {/* LinkedIn */}
              <div className="mt-6 flex justify-center">
                <Link
                  href={leader.linkedin}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-[#ED1E24] hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </div>

              {/* Subtle hover accent */}
              <div className="absolute bottom-0 left-0 h-1 w-full scale-x-0 bg-[#ED1E24] transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
