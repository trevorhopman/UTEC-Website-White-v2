"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { 
  Menu, Phone, ChevronDown, Monitor, Shield, Printer, FileText, MoreHorizontal,
  Users, Briefcase, HelpCircle, LogIn, UserCircle, Ticket, Share2, Mic, BookOpen, Mail, MapPin
} from "lucide-react"
import { UTEC_LOGO_URL } from "@/lib/branding"

const services = [
  { icon: Monitor, label: "Managed IT Services", href: "/services/managed-it" },
  { icon: Shield, label: "Cybersecurity", href: "/services/cybersecurity" },
  { icon: Printer, label: "Office Technology Hardware", href: "/services/office-technology" },
  { icon: FileText, label: "Managed Print", href: "/services/managed-print" },
  { icon: Phone, label: "VOIP Phone Systems", href: "/services/voip" },
  { icon: MoreHorizontal, label: "Document Management & More", href: "/services/document-management" },
]

const aboutUs = [
  { icon: Users, label: "Meet the Team", href: "/about/team" },
  { icon: Briefcase, label: "Careers", href: "/about/careers" },
  { icon: HelpCircle, label: "Why UTEC", href: "/#why-utec" },
]

const supportCenter = [
  { icon: LogIn, label: "E-Info Login", href: "https://einfo.utecit.com" },
  { icon: UserCircle, label: "Customer Portal", href: "https://portal.utecit.com" },
  { icon: Ticket, label: "Submit a Help Desk Ticket", href: "/support/ticket" },
]

const media = [
  { icon: Share2, label: "Social", href: "/media/social" },
  { icon: Mic, label: "Podcast", href: "/media/podcast" },
  { icon: BookOpen, label: "Blog", href: "/media/blog" },
  { icon: Mail, label: "Newsletter", href: "/media/newsletter" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={UTEC_LOGO_URL}
            alt="UTEC"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24] outline-none">
              Services
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-white p-2">
              {services.map((service) => (
                <DropdownMenuItem key={service.label} asChild>
                  <Link
                    href={service.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24] cursor-pointer"
                  >
                    <service.icon className="h-4 w-4 text-[#ED1E24]" />
                    {service.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* About Us Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24] outline-none">
              About Us
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56 bg-white p-2">
              {aboutUs.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24] cursor-pointer"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Support Center Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24] outline-none">
              Support Center
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64 bg-white p-2">
              {supportCenter.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24] cursor-pointer"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Media Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24] outline-none">
              Media
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48 bg-white p-2">
              {media.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24] cursor-pointer"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Locations Link */}
          <Link
            href="/#locations"
            className="text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24]"
          >
            Locations
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="tel:+17344345900"
            className="flex items-center gap-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:text-[#ED1E24]"
          >
            <Phone className="h-4 w-4" />
            +1 (734) 434-5900
          </Link>
          <Button
            asChild
            className="bg-[#ED1E24] text-white hover:bg-[#d91a1f] transition-all duration-200 hover:scale-105"
          >
            <Link href="#assessment">Get Free Assessment</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-[#1E1A1C]" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] bg-white overflow-y-auto">
            <div className="flex flex-col gap-4 pt-8 pb-8">
              {/* Services Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24]"
                  >
                    <service.icon className="h-4 w-4 text-[#ED1E24]" />
                    {service.label}
                  </Link>
                ))}
              </div>
              <hr className="border-gray-200" />
              
              {/* About Us Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">About Us</span>
                {aboutUs.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24]"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <hr className="border-gray-200" />
              
              {/* Support Center Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Support Center</span>
                {supportCenter.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24]"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <hr className="border-gray-200" />
              
              {/* Media Section */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Media</span>
                {media.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24]"
                  >
                    <item.icon className="h-4 w-4 text-[#ED1E24]" />
                    {item.label}
                  </Link>
                ))}
              </div>
              <hr className="border-gray-200" />
              
              {/* Locations Link */}
              <Link
                href="/#locations"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-[#1E1A1C] transition-colors hover:bg-gray-100 hover:text-[#ED1E24]"
              >
                <MapPin className="h-4 w-4 text-[#ED1E24]" />
                Locations
              </Link>
              <hr className="border-gray-200" />
              <Link
                href="tel:+17344345900"
                className="flex items-center gap-2 text-lg font-medium text-[#1E1A1C]"
              >
                <Phone className="h-5 w-5" />
                +1 (734) 434-5900
              </Link>
              <Button
                asChild
                className="bg-[#ED1E24] text-white hover:bg-[#d91a1f] w-full"
              >
                <Link href="#assessment" onClick={() => setIsOpen(false)}>
                  Get Free Assessment
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
