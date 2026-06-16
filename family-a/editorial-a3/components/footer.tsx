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
    { label: 'Our Work',       href: '#portfolio' },
    { label: 'Why Choose Us',  href: '#why-us' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'Free Estimate',  href: '#contact' },
    { label: 'Contact Us',     href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0C0C0C] border-t border-[#222220]" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Main content */}
        <div className="py-16 md:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Wordmark */}
            <div className="flex flex-col leading-none mb-7">
              <span className="font-serif font-semibold text-2xl tracking-tight text-white leading-none">
                Atelier
              </span>
              <span className="text-[9px] tracking-[0.35em] uppercase text-[#666662] font-sans font-medium leading-none mt-1">
                Painting Co.
              </span>
            </div>

            <p className="text-[#555552] font-sans text-sm leading-relaxed max-w-sm mb-8">
              Museum-quality craftsmanship for the discerning homeowner. Fine interior and exterior
              painting delivered with the precision of fine art restoration.
            </p>

            {/* Decorative icon row */}
            <div className="flex items-center gap-5 mb-8" aria-hidden="true">
              <BrushIcon size={22} />
              <PinIcon size={22} />
              <StarIcon size={22} />
            </div>

            {/* Certifications — placard style */}
            <div className="flex flex-wrap gap-2">
              {['Benjamin Moore Certified', 'Licensed & Insured', 'BBB Accredited'].map(
                (cert) => (
                  <span
                    key={cert}
                    className="text-[9px] font-sans font-medium tracking-[0.3em] uppercase px-2.5 py-1 border border-[#333330] text-[#555552]"
                  >
                    {cert}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] mb-6">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="underline-draw text-[#555552] font-sans text-sm hover:text-white transition-colors"
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
        <div className="border-t border-[#222220] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#333330] font-sans text-xs">
            &copy; {new Date().getFullYear()} Atelier Painting Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="underline-draw text-[#333330] font-sans text-xs hover:text-[#666662] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
