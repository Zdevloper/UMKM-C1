"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Logo from "@/public/logo-admonadi.svg"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home")

  const handleScroll = () => {
    const sections = document.querySelectorAll("section")
    const scrollPosition = window.scrollY + 100

    sections.forEach((section) => {
      const top = section.offsetTop
      const height = section.offsetHeight
      const id = section.getAttribute("id") || ""

      if (scrollPosition >= top && scrollPosition < top + height) {
        setActiveSection(id)
      }
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll]) // Added handleScroll to dependencies

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <Image src={Logo} alt="Admonadi" width={65} height={65} />
            <span className="text-xl font-bold text-primary">Admonadi</span>
          </a>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    activeSection === item.href.slice(1)
                      ? "bg-primary text-primary-foreground"
                      : "text-primary hover:bg-primary/10",
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

