'use client'

import { useState } from 'react'
import {
  RollerIcon,
  HouseIcon,
  BrushIcon,
  CabinetIcon,
  SprayIcon,
  DeckIcon,
} from '@/components/painting-icons'

interface Service {
  Icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  details: string[]
  expanded: string
}

const services: Service[] = [
  {
    Icon: RollerIcon,
    title: 'Interior Painting',
    description:
      'From a single study to a full country estate. Three generations of surface knowledge applied to every room, every finish, every nuance of light.',
    details: ['Colour consultation', 'Furniture protection', 'Low-VOC options'],
    expanded:
      'Our interior process begins with a thorough surface assessment — filling nail holes, skim-coating damaged plaster, and hand-sanding glossy surfaces for maximum adhesion. We specify Benjamin Moore Aura or Regal Select by sheen requirement and apply a minimum of two full coats over a quality primer. Every edge is cut by hand; masking tape is a last resort, never a substitute for a steady brush hand.',
  },
  {
    Icon: HouseIcon,
    title: 'Exterior Painting',
    description:
      'The face your home presents to the world. Weather-resistant finishes prepared with the same rigour applied to interior millwork.',
    details: ['Complete surface preparation', '10-year warranty available', 'All elevations'],
    expanded:
      'Exterior longevity begins with preparation: pressure-washing all surfaces, hand-scraping loose paint, caulking every gap, and spot-priming bare wood before a full-coverage primer coat. We then apply two coats of Benjamin Moore Aura Exterior with UV-guard chemistry. Our 10-year labour-and-materials warranty means we stand behind every stroke.',
  },
  {
    Icon: BrushIcon,
    title: 'Trim & Detail Work',
    description:
      'The cornices, casings, and mouldings that distinguish a well-maintained estate from a merely painted house. This is where craftsmanship is visible.',
    details: ['Hand-brushed precision', 'Caulking & sealing', 'Wood grain preserved'],
    expanded:
      'All casing, door frames, and window sills are hand-sanded to 220 grit, caulked with a paintable latex sealant, and finished with two brush-applied coats of Benjamin Moore Advance alkyd-hybrid paint. The result is a hard, furniture-grade surface with none of the solvent smell or long dry times of traditional oil.',
  },
  {
    Icon: CabinetIcon,
    title: 'Cabinet Refinishing',
    description:
      'The kitchen of a fine home deserves the attention given to its drawing room. Factory-smooth cabinet finishes without the cost or disruption of replacement.',
    details: ['Off-site spray finishing', 'Degreasing & sanding', 'Catalysed lacquer'],
    expanded:
      'We remove all doors and drawer fronts, tag them for exact re-installation, and bring them to our dedicated finishing shop. After degreasing with a commercial cleaner, we sand to bare wood in worn areas, apply a bonding primer, and spray two coats of catalysed lacquer. The sprayed-in-shop process eliminates brush marks entirely — the result is indistinguishable from new cabinetry.',
  },
  {
    Icon: SprayIcon,
    title: 'Pressure Washing',
    description:
      'Thorough surface preparation and standalone cleaning for drives, siding, terraces, and fencing using commercial-grade equipment calibrated to each substrate.',
    details: ['Soft-wash available', 'Mould & mildew removal', 'Pre-paint prep'],
    expanded:
      'We use commercial 3,500 PSI hot-water equipment calibrated to each surface — lower pressure for cedar and vinyl, higher for masonry and concrete. A pre-treatment of dilute sodium hypochlorite addresses mould and mildew before rinsing. For delicate surfaces, our soft-wash system uses low pressure and a biodegradable surfactant that lifts grime without harming wood fibres.',
  },
  {
    Icon: DeckIcon,
    title: 'Deck & Fence Staining',
    description:
      'Penetrating oils and stains that nourish the grain and protect against moisture and ultraviolet degradation for seasons of quiet beauty.',
    details: ['Transparent to solid', 'Olympic & Cabot stains', 'Annual maintenance'],
    expanded:
      'Proper deck staining requires a thorough wash and a minimum 48-hour dry time — we never stain wet timber. We then hand-sand any raised grain, apply a wood brightener to open the pores, and brush-apply the stain in the direction of the grain for full penetration. We specify Cabot Australian Timber Oil, Olympic Maximum, or TWP 100-Series depending on species and desired sheen.',
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section
      id="services"
      className="bg-[#F5EFE0] py-24 md:py-40"
      aria-labelledby="services-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section header — centered */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="eyebrow-rule w-full max-w-xs mb-8">
            <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
              Our Services
            </span>
          </div>
          <h2
            id="services-heading"
            className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance max-w-2xl"
          >
            Crafted for Every Surface.<br className="hidden md:block" /> Every Estate.
          </h2>
          {/* Brass diamond-rule divider */}
          <div className="flex items-center gap-3 mt-5" aria-hidden="true">
            <div className="w-10 h-px bg-[#B08D44]" />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
            <div className="w-10 h-px bg-[#B08D44]" />
          </div>
        </div>

        {/* Services list */}
        <div className="divide-y divide-[#C8BC9C] border-t border-[#C8BC9C]">
          {services.map(({ Icon, title, description, details, expanded }, i) => {
            const isOpen = openIndex === i
            return (
              <article key={title} className="py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-[56px_1fr_auto] gap-6 md:gap-10 items-start">

                  {/* Icon */}
                  <div className="hidden md:flex items-start pt-1">
                    <Icon size={40} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex md:hidden">
                        <Icon size={32} />
                      </div>
                      <h3 className="font-serif font-bold text-[#1F3B2C] text-xl md:text-2xl leading-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[#5C6B5E] font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                      {description}
                    </p>

                    {/* Detail tags */}
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {details.map((detail) => (
                        <li
                          key={detail}
                          className="text-[8px] font-sans font-semibold tracking-[0.3em] uppercase text-[#5C6B5E] border border-[#C8BC9C] px-2.5 py-1"
                          style={{ borderRadius: '2px' }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Accordion expanded copy */}
                    <div
                      id={`service-expanded-${i}`}
                      aria-hidden={!isOpen}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease',
                      }}
                    >
                      <p className="pt-6 text-[#3A4D3C] font-sans text-sm leading-relaxed max-w-2xl border-t border-[#C8BC9C] mt-6">
                        {expanded}
                      </p>
                    </div>
                  </div>

                  {/* Learn More / Read Less toggle */}
                  <div className="flex items-start pt-1">
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`service-expanded-${i}`}
                      className="flex items-center gap-2 text-[9px] font-sans font-semibold tracking-[0.28em] uppercase text-[#1F3B2C] hover:text-[#B08D44] transition-colors duration-200 whitespace-nowrap"
                    >
                      {isOpen ? 'Read Less' : 'Learn More'}
                      <svg
                        width="9"
                        height="9"
                        viewBox="0 0 9 9"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <path
                          d="M2.5 1.5L6 4.5L2.5 7.5"
                          stroke="currentColor"
                          strokeWidth="1.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 md:mt-18 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-[#C8BC9C]">
          <p className="font-serif italic text-[#1F3B2C] text-xl md:text-2xl">
            Not certain which service you require?
          </p>
          <a
            href="#contact"
            className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-8 py-3.5 border border-[#B08D44] text-[#1F3B2C] hover:bg-[#1F3B2C] hover:text-[#F5EFE0] hover:border-[#1F3B2C] transition-colors duration-200 whitespace-nowrap"
            style={{ borderRadius: '2px' }}
          >
            Let Us Advise
          </a>
        </div>
      </div>
    </section>
  )
}
