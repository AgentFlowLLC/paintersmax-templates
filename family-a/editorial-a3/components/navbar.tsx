'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services',         href: '#services' },
  { label: 'Our Work',         href: '#transformations' },
  { label: 'Why Choose Us',    href: '#why-us' },
  { label: 'Service Areas',    href: '#areas' },
  { label: 'Contact',          href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-sm border-b border-[#E0E0DC]'
          : 'bg-white'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo — wordmark */}
        <a
          href="#"
          className="flex flex-col leading-none"
          aria-label="Atelier Painting Co. — back to top"
        >
          <span className="font-serif font-semibold text-lg tracking-tight text-[#111111] leading-none">
            Atelier
          </span>
          {/* Gallery placard style sub-label */}
          <span
            className="text-[9px] tracking-[0.35em] uppercase text-[#666662] font-sans font-medium leading-none mt-0.5"
            aria-hidden="true"
          >
            Painting Co.
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-draw text-[11px] font-sans font-medium tracking-[0.18em] uppercase text-[#111111] hover:text-[#111111]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-6 py-3 bg-[#111111] text-white hover:bg-[#D43D2A] transition-colors duration-200"
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block w-6 h-px bg-[#111111] transition-transform duration-200 ${
              menuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#111111] transition-opacity duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-[#111111] transition-transform duration-200 ${
              menuOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-white border-t border-[#E0E0DC]`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-[#111111] underline-draw"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-6 py-3 bg-[#111111] text-white text-center hover:bg-[#D43D2A] transition-colors"
          >
            Free Estimate
          </a>
        </div>
      </div>
    </header>
  )
}
