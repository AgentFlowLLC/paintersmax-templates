import {
  BrushIcon,
  PinIcon,
  StarIcon,
} from '@/components/painting-icons'

const footerLinks = {
  Services: [
    { label: 'Interior Painting',   href: '#services' },
    { label: 'Exterior Painting',   href: '#services' },
    { label: 'Cabinet Refinishing', href: '#services' },
    { label: 'Deck Staining',       href: '#services' },
    { label: 'Pressure Washing',    href: '#services' },
  ],
  Company: [
    { label: 'Our Work',         href: '#portfolio' },
    { label: 'Why Choose Us',    href: '#why-us' },
    { label: 'Client Reviews',   href: '#testimonials' },
    { label: 'Free Estimate',    href: '#contact' },
    { label: 'Contact Us',       href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#16291F]" aria-label="Site footer">
      {/* Top brass rule */}
      <div className="h-px bg-[#B08D44]/50 w-full" aria-hidden="true" />
      <div className="h-px bg-[#B08D44]/20 w-full" aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Main content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Wordmark */}
            <div className="flex flex-col leading-none mb-7">
              <span className="font-serif font-bold text-2xl tracking-wide text-[#F5EFE0] leading-none">
                Manor
              </span>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="block w-4 h-px bg-[#B08D44]" aria-hidden="true" />
                <span className="text-[8px] tracking-[0.4em] uppercase text-[#8A9B8E] font-sans leading-none">
                  Painting Co.
                </span>
                <span className="block w-4 h-px bg-[#B08D44]" aria-hidden="true" />
              </div>
            </div>

            <p className="text-[#5C7A65] font-sans italic text-sm leading-relaxed max-w-sm mb-8">
              Three generations of heritage craftsmanship. Fine interior and exterior painting
              by a family firm trusted by the region&apos;s most distinguished households.
            </p>

            {/* Decorative icon row — 3 brass icons */}
            <div className="flex items-center gap-5 mb-8 opacity-50" aria-hidden="true">
              <BrushIcon size={22} />
              <PinIcon size={22} />
              <StarIcon size={22} />
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-2">
              {['Benjamin Moore Certified', 'Licensed & Insured', 'BBB Accredited'].map((cert) => (
                <span
                  key={cert}
                  className="text-[8px] font-sans font-semibold tracking-[0.3em] uppercase px-2.5 py-1 border border-[#2E4D35] text-[#5C7A65]"
                  style={{ borderRadius: '2px' }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[8px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44] mb-6">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3.5" role="list">
                {links.map((link) => (
                  <li key={link.label} className="flex items-center gap-2">
                    {/* Brass diamond bullet */}
                    <svg width="4" height="4" viewBox="0 0 4 4" fill="#B08D44" aria-hidden="true" style={{ opacity: 0.5, flexShrink: 0 }}>
                      <polygon points="2,0 4,2 2,4 0,2" />
                    </svg>
                    <a
                      href={link.href}
                      className="underline-draw text-[#5C7A65] font-sans text-sm hover:text-[#F5EFE0] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2E4D35] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#2E4D35] font-sans text-xs italic">
            &copy; {new Date().getFullYear()} Manor Painting Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="underline-draw text-[#2E4D35] font-sans text-xs hover:text-[#5C7A65] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom brass double-rule */}
      <div className="h-px bg-[#B08D44]/20 w-full" aria-hidden="true" />
      <div className="h-px bg-[#B08D44]/50 w-full" aria-hidden="true" />
    </footer>
  )
}
