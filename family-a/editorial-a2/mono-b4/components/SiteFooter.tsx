import { siteConfig } from '@/lib/site-config'

const footerLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Proof', href: '#proof' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Areas', href: '#areas' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-white" aria-label="Site footer">
      {/* Yellow top rule */}
      <div className="h-[4px] bg-[#FFD400]" aria-hidden="true" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-14 border-b border-white/10">
          {/* Brand */}
          <div>
            <p className="font-heading text-3xl uppercase mb-1">
              {siteConfig.company}
            </p>
            <div className="h-[3px] bg-[#FFD400] w-12 mb-4" aria-hidden="true" />
            <p className="font-sans text-sm leading-relaxed text-white/40 max-w-xs text-pretty">
              Maximum-contrast professional painting. Residential and commercial coatings done right.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-none m-0 p-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-white/50 hover:text-[#FFD400] transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white/30 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                className="font-sans text-sm text-white/50 hover:text-[#FFD400] transition-colors"
              >
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-sans text-sm text-white/50 hover:text-[#FFD400] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="font-sans text-xs text-white/20">
            &copy; {year} {siteConfig.company}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-white/20">
            Licensed &amp; Insured &mdash; Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  )
}
