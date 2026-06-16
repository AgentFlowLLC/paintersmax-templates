'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Services',      href: '#services' },
  { label: 'Our Work',      href: '#transformations' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Contact',       href: '#contact' },
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
          ? 'bg-[#F5EFE0]/97 backdrop-blur-sm border-b border-[#C8BC9C]'
          : 'bg-[#F5EFE0]'
      }`}
    >
      {/* Thin brass top-rule — like the rule at the top of stationery */}
      <div className="h-px bg-[#B08D44] w-full" aria-hidden="true" />

      <nav
        className="max-w-7xl mx-auto px-6 lg:px-16 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo — engraved wordmark */}
        <a
          href="#"
          className="flex flex-col leading-none group"
          aria-label="Manor Painting Co. — back to top"
        >
          <span className="font-serif font-bold text-[17px] tracking-wide text-[#1F3B2C] leading-none">
            Manor
          </span>
          <div className="flex items-center gap-1.5 mt-1">
            {/* Small brass rule */}
            <span className="block w-3 h-px bg-[#B08D44]" aria-hidden="true" />
            <span className="text-[8px] tracking-[0.4em] uppercase text-[#5C6B5E] font-sans leading-none">
              Painting Co.
            </span>
            <span className="block w-3 h-px bg-[#B08D44]" aria-hidden="true" />
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="underline-draw text-[10px] font-sans font-semibold tracking-[0.22em] uppercase text-[#1F3B2C] hover:text-[#B08D44] transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Primary CTA — thin brass-border button */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-6 py-3 border border-[#B08D44] text-[#1F3B2C] hover:bg-[#1F3B2C] hover:text-[#F5EFE0] hover:border-[#1F3B2C] transition-colors duration-200"
            style={{ borderRadius: '2px' }}
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile hamburger — three thin lines */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`block w-6 h-px bg-[#1F3B2C] transition-transform duration-200 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
          <span className={`block w-6 h-px bg-[#1F3B2C] transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#1F3B2C] transition-transform duration-200 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-96' : 'max-h-0'
        } bg-[#F5EFE0] border-t border-[#C8BC9C]`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[#1F3B2C] underline-draw"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-6 py-3 border border-[#B08D44] text-[#1F3B2C] text-center hover:bg-[#1F3B2C] hover:text-[#F5EFE0] hover:border-[#1F3B2C] transition-colors"
            style={{ borderRadius: '2px' }}
          >
            Free Estimate
          </a>
        </div>
      </div>

      {/* Thin brass bottom-rule */}
      <div className="h-px bg-[#B08D44]/40 w-full" aria-hidden="true" />
    </header>
  )
}
