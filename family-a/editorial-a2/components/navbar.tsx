'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#portfolio' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F2EDE4]/95 backdrop-blur-sm shadow-sm border-b border-[#D4CCC2]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group" aria-label="Craftline Painting Co. home">
          <span className="font-serif text-lg font-bold tracking-tight text-[#3D3530] group-hover:text-[#C4813A] transition-colors">
            CRAFTLINE
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#C4813A] font-sans font-medium">
            Painting Co.
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm tracking-wide text-[#3D3530] hover:text-[#C4813A] transition-colors font-sans font-medium uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="text-sm font-sans font-semibold tracking-wider uppercase px-5 py-2.5 bg-[#C4813A] text-[#F2EDE4] hover:bg-[#3D3530] transition-colors"
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#3D3530] transition-transform duration-200 ${
              menuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D3530] transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#3D3530] transition-transform duration-200 ${
              menuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F2EDE4] border-t border-[#D4CCC2] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#3D3530] hover:text-[#C4813A] font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-sm font-semibold tracking-wider uppercase px-5 py-3 bg-[#C4813A] text-[#F2EDE4] text-center hover:bg-[#3D3530] transition-colors"
          >
            Free Estimate
          </a>
        </div>
      )}
    </header>
  )
}
