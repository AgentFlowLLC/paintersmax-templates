import {
  PaintBrushIcon,
  LocationPinHouseIcon,
  StarStrokesIcon,
} from '@/components/painting-icons'

const footerLinks = {
  Services: [
    { label: 'Interior Painting', href: '#services' },
    { label: 'Exterior Painting', href: '#services' },
    { label: 'Cabinet Refinishing', href: '#services' },
    { label: 'Deck Staining', href: '#services' },
    { label: 'Pressure Washing', href: '#services' },
  ],
  Company: [
    { label: 'Our Work', href: '#portfolio' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Client Reviews', href: '#testimonials' },
    { label: 'Free Estimate', href: '#contact' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#2A2220] border-t border-[#B8B0A8]/15" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex flex-col leading-none mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#F2EDE4]">
                CRAFTLINE
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4813A] font-sans font-medium">
                Painting Co.
              </span>
            </div>

            <p className="text-[#B8B0A8] font-sans text-sm leading-relaxed max-w-sm mb-8">
              Premium painting services delivered by Benjamin Moore certified professionals.
              Three generations of craftsmanship, one standard of excellence.
            </p>

            {/* Decorative icons row */}
            <div className="flex items-center gap-5 mb-8" aria-hidden="true">
              <PaintBrushIcon size={24} />
              <LocationPinHouseIcon size={24} />
              <StarStrokesIcon size={24} />
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3">
              {['Benjamin Moore Certified', 'Licensed & Insured', 'BBB Accredited'].map(
                (cert) => (
                  <span
                    key={cert}
                    className="text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 border border-[#C4813A]/40 text-[#C4813A]"
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
              <h3 className="text-[#F2EDE4] text-xs tracking-[0.25em] uppercase font-sans font-semibold mb-5">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#B8B0A8] font-sans text-sm hover:text-[#C4813A] transition-colors"
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
        <div className="border-t border-[#B8B0A8]/15 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#7A6F68] font-sans text-xs">
            &copy; {new Date().getFullYear()} Craftline Painting Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#7A6F68] font-sans text-xs hover:text-[#B8B0A8] transition-colors"
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
