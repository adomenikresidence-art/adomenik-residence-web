"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-semibold text-foreground">
            A. DomeNik Residence
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link href="/" className="text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/apartments"
              className="text-sm text-foreground hover:text-primary transition-colors font-semibold"
            >
              Available Apartments
            </Link>
            <Link href="/project" className="text-sm text-foreground hover:text-primary transition-colors">
              The Project
            </Link>
            <Link href="/location" className="text-sm text-foreground hover:text-primary transition-colors">
              Location
            </Link>
            <Link href="/contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/apartments"
              className="block py-2 text-sm text-foreground hover:text-primary transition-colors font-semibold"
            >
              Available Apartments
            </Link>
            <Link href="/project" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              The Project
            </Link>
            <Link href="/location" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Location
            </Link>
            <Link href="/contact" className="block py-2 text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
