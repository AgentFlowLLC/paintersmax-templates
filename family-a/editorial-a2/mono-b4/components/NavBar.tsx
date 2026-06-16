'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site-config'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Areas', href: '#areas' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-[3px] left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-background border-b-2 border-foreground' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo — Anton, yellow underline */}
        <a
          href="#"
          className="font-heading text-xl tracking-wide text-foreground leading-none uppercase border-b-2 border-[#FFD400] pb-0.5"
          aria-label={`${siteConfig.company} — home`}
        >
          {siteConfig.company}
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm text-foreground hover:text-[#555555] transition-colors duration-150 font-medium uppercase tracking-wide"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — black pill, yellow bottom border */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-foreground text-white font-sans text-sm font-semibold border-b-2 border-[#FFD400] hover:bg-[#FFD400] hover:text-foreground transition-colors duration-150"
        >
          Get Estimate
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-[2px] bg-foreground transition-transform duration-200 origin-center ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[2px] bg-foreground transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[2px] bg-foreground transition-transform duration-200 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t-2 border-foreground">
          <ul className="flex flex-col list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-foreground/20">
                <a
                  href={link.href}
                  className="block px-6 py-4 font-sans text-sm font-medium text-foreground uppercase tracking-wide hover:bg-[#FFD400] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="p-4">
              <a
                href="#contact"
                className="block text-center px-6 py-3 font-sans text-sm font-semibold text-white bg-foreground border-b-2 border-[#FFD400] hover:bg-[#FFD400] hover:text-foreground transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Get Estimate
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
