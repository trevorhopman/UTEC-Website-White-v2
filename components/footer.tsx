import Link from "next/link"
import { Phone, MapPin, Mail } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Managed IT Services", href: "/services/managed-it" },
    { label: "Audio Visual", href: "/services/audio-visual" },
    { label: "Cloud Solutions", href: "#" },
    { label: "Managed Print Services", href: "#" },
    { label: "Office Equipment", href: "#" },
  ],
  company: [
    { label: "About UTEC", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
  serviceAreas: ["Ann Arbor", "Troy", "Detroit", "Southeast Michigan"],
}

export function Footer() {
  return (
    <footer className="bg-[#1E1A1C] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Contact */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block rounded-lg bg-white px-3 py-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nxzAIZuaA1acCEeGEvPNNioh1oqrPb.png"
                alt="UTEC"
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Managed IT (including security), audio visual, and office technology for businesses in Southeast
              Michigan.
            </p>
            <div className="mt-6 space-y-3">
              <Link
                href="tel:+17344345900"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-[#ED1E24]" />
                +1 (734) 434-5900
              </Link>
              <Link
                href="mailto:info@utec.com"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-[#ED1E24]" />
                info@utec.com
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Locations
            </h3>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-300">Ann Arbor Office</p>
                <div className="mt-1 flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ED1E24]" />
                  <span>834 Phoenix Dr<br />Ann Arbor, MI 48108</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-300">Troy Office</p>
                <div className="mt-1 flex items-start gap-2 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#ED1E24]" />
                  <span>801 W Big Beaver Rd Suite 600<br />Troy, MI 48084</span>
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Service Area</p>
                <p className="mt-1 text-sm text-gray-400">
                  {footerLinks.serviceAreas.join(" • ")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} UTEC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
