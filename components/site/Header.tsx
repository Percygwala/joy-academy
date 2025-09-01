'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/programs', label: 'Programs' },
    { href: '/enrol', label: 'Enrol' },
  ]

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 bg-white z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
          <img 
            src="/jf-academy/images/JFlogo.svg" 
            alt="Joy Football Academy Logo" 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 font-sans font-medium text-lg relative group ${
                  isActive 
                    ? 'text-[#D7263D] font-semibold underline decoration-2 underline-offset-4' 
                    : 'text-[#0B2239] hover:text-[#D7263D]'
                }`}
              >
                {link.label}
                {!isActive && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#D7263D] transition-all duration-200 group-hover:w-full"></span>
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/enrol"
            className="bg-[#D7263D] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#B91C3A] transition-colors duration-200 font-sans"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-[#0B2239] hover:text-[#D7263D] transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md absolute top-full left-0 w-full border-t border-gray-100">
          <div className="flex flex-col space-y-4 px-6 py-6">
            {navLinks.map((link) => {
              const isActive = isActiveLink(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 font-sans text-lg font-medium py-2 ${
                    isActive 
                      ? 'text-[#D7263D] font-semibold underline decoration-2 underline-offset-4' 
                      : 'text-[#0B2239] hover:text-[#D7263D]'
                  }`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-gray-200">
              <Link
                href="/enrol"
                className="bg-[#D7263D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B91C3A] transition-colors duration-200 font-sans block text-center"
                onClick={closeMenu}
              >
                Join Now
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  )
}
