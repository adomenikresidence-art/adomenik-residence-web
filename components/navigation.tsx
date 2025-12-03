"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-xl z-50 border-b border-slate-700/50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo_adomenik.png"
              alt="A. DomeNik Residence Logo"
              width={44}
              height={44}
              className="h-11 w-auto object-contain drop-shadow-2xl brightness-110"
              priority
            />
            <span className="text-xl font-serif font-semibold text-slate-100 hidden lg:inline">
              A. DomeNik Residence
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link 
              href="/" 
              className="text-sm text-slate-300 hover:text-orange-400 hover:scale-[1.05] transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/apartments"
              className="text-sm text-slate-200 hover:text-orange-400 hover:scale-[1.05] transition-all duration-300 font-semibold"
            >
              Available Apartments
            </Link>
            <Link 
              href="/project" 
              className="text-sm text-slate-300 hover:text-orange-400 hover:scale-[1.05] transition-all duration-300"
            >
              The Project
            </Link>
            <Link 
              href="/location" 
              className="text-sm text-slate-300 hover:text-orange-400 hover:scale-[1.05] transition-all duration-300"
            >
              Location
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-slate-300 hover:text-orange-400 hover:scale-[1.05] transition-all duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2 text-slate-200 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 space-y-2 px-4">
            <Link 
              href="/" 
              className="block py-3 px-4 text-sm text-slate-200 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/apartments"
              className="block py-3 px-4 text-sm text-slate-100 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Available Apartments
            </Link>
            <Link 
              href="/project" 
              className="block py-3 px-4 text-sm text-slate-200 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              The Project
            </Link>
            <Link 
              href="/location" 
              className="block py-3 px-4 text-sm text-slate-200 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Location
            </Link>
            <Link 
              href="/contact" 
              className="block py-3 px-4 text-sm text-slate-200 hover:text-orange-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
