import { useState, useEffect } from 'react'
import Logo from './Logo'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Startups', href: '#startups' },
  { label: 'Investors', href: '#investors' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-indigo-100/50 border-b border-indigo-50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="hover:opacity-90 transition-opacity hover:-translate-y-0.5 duration-200">
            <Logo size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActive(link.label)}
                className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 group ${
                  active === link.label
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/70'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-indigo-500 rounded-full transition-all duration-300 ${
                  active === link.label ? 'w-4' : 'w-0 group-hover:w-4'
                }`} />
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#apply"
              className="px-5 py-2.5 text-sm font-semibold text-indigo-600 border-2 border-indigo-200 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 hover:scale-105 transition-all duration-300"
            >
              Apply to Pitch
            </a>
            <a
              href="#startups"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:shadow-lg hover:shadow-indigo-300/50 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Startups ✨
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-700 rounded transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col gap-1 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-100 mt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 px-4 text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100">
              <a
                href="#apply"
                className="text-center py-2.5 text-sm font-semibold text-indigo-600 border-2 border-indigo-200 rounded-xl hover:bg-indigo-50 transition-colors"
              >
                Apply to Pitch
              </a>
              <a
                href="#startups"
                className="text-center py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl"
              >
                Explore Startups
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
