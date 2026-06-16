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
  /**
   * Long-form copy shown by the accordion toggle.
   * max-height 0 → 200px, 0.4s ease.
   */
  expanded: string
}

const services: Service[] = [
  {
    Icon: RollerIcon,
    title: 'Interior Painting',
    description:
      'From accent walls to full-home transformations. We use only premium Benjamin Moore paints with meticulous prep and a professional-grade finish.',
    details: ['Color consultation included', 'Furniture protection', 'Low-VOC options'],
    expanded:
      'Our interior process begins with a thorough surface assessment — filling nail holes, skim-coating damaged drywall, and sanding glossy surfaces for maximum adhesion. We use Benjamin Moore Aura or Regal Select depending on sheen requirement, applying a minimum of two full coats over a quality primer. Every edge is cut by hand, never masked over, to produce the crisp lines that define a premium finish.',
  },
  {
    Icon: HouseIcon,
    title: 'Exterior Painting',
    description:
      'Weather-resistant finishes that protect and beautify. Power washing, priming, and multi-coat application for lasting curb appeal.',
    details: ['Full surface preparation', '10-year warranty available', 'All weather conditions'],
    expanded:
      'Exterior longevity starts with preparation: we pressure wash all surfaces, hand-scrape loose paint, caulk every gap and penetration, and spot-prime bare wood before applying a full-coverage primer coat. We then apply two coats of Benjamin Moore Aura Exterior with UV-guard technology. Our 10-year warranty on labor and materials means we stand behind every brushstroke.',
  },
  {
    Icon: BrushIcon,
    title: 'Trim & Detail Work',
    description:
      'Crown molding, baseboards, doors, and windows — the fine details that define a premium finish and separate good from exceptional.',
    details: ['Hand-brushed precision', 'Caulking & sealing', 'Wood grain preservation'],
    expanded:
      'Trim is where most painters cut corners — and where we invest the most time. All casing, door frames, and window sills are hand-sanded to 220 grit, caulked with a paintable latex sealant, and finished with two brush-applied coats of Benjamin Moore Advance alkyd-hybrid paint. The result is a hard, furniture-grade finish with none of the solvent smell or long dry times of traditional oil paint.',
  },
  {
    Icon: CabinetIcon,
    title: 'Cabinet Refinishing',
    description:
      'Transform your kitchen cabinets without the cost of replacement. Factory-smooth finish in any Benjamin Moore color.',
    details: ['Spray application', 'Degreasing & sanding', 'Durable lacquer topcoat'],
    expanded:
      'We remove all doors and drawer fronts, tag them for exact re-installation, and transport them to our dedicated finishing shop. After degreasing with a commercial cabinet cleaner, we sand to bare wood on worn areas, apply a bonding primer, and spray two coats of a catalyzed lacquer or Benjamin Moore Advance. The sprayed-in-shop process eliminates brush marks entirely — the result is indistinguishable from new factory cabinetry.',
  },
  {
    Icon: SprayIcon,
    title: 'Pressure Washing',
    description:
      'Thorough surface preparation and standalone cleaning for driveways, siding, decks, and fences using commercial-grade equipment.',
    details: ['Soft-wash available', 'Mold & mildew removal', 'Pre-paint prep service'],
    expanded:
      'We use commercial 3,500 PSI hot-water equipment calibrated to each substrate — lower pressure for vinyl siding and cedar, higher for concrete and masonry. A pre-treatment of sodium hypochlorite solution is applied to mold and mildew areas and allowed to dwell before rinsing. For delicate surfaces, our soft-wash system uses low pressure and a biodegradable surfactant that lifts dirt without damaging wood fibers.',
  },
  {
    Icon: DeckIcon,
    title: 'Deck & Fence Staining',
    description:
      'Penetrating stains and sealers that nourish wood grain while providing UV and moisture protection for years of beauty.',
    details: ['Transparent to solid options', 'Olympic & Cabot stains', 'Annual maintenance plans'],
    expanded:
      'Proper deck staining starts with a thorough power wash and 48-hour dry time minimum — we never stain wet wood. We then hand-sand any raised grain, apply a wood brightener to open the pores, and brush-apply the stain in the direction of the grain for maximum penetration. We offer Cabot Australian Timber Oil, Olympic Maximum, and TWP 100-Series depending on species and desired sheen.',
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section
      id="services"
      className="bg-white py-24 md:py-40"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          {/* Gallery placard eyebrow */}
          <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
          >
            Crafted for Every Surface. Every Space.
          </h2>
          <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
        </div>

        {/* Services list — horizontal rule separated, full width */}
        <div className="divide-y divide-[#E0E0DC] border-t border-[#E0E0DC]">
          {services.map(({ Icon, title, description, details, expanded }, i) => {
            const isOpen = openIndex === i
            return (
              <article key={title} className="py-10 md:py-12 group">

                {/* Main row */}
                <div className="grid grid-cols-1 md:grid-cols-[64px_1fr_auto] gap-6 md:gap-10 items-start">

                  {/* Icon — 40px, thin strokes */}
                  <div className="hidden md:flex items-start pt-1">
                    <Icon size={40} />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex md:hidden">
                        <Icon size={32} />
                      </div>
                      <h3 className="font-serif font-semibold text-[#111111] text-xl md:text-2xl leading-tight">
                        {title}
                      </h3>
                    </div>
                    <p className="text-[#666662] font-sans text-sm md:text-base leading-relaxed max-w-2xl">
                      {description}
                    </p>

                    {/* Detail pills */}
                    <ul className="mt-4 flex flex-wrap gap-2" role="list">
                      {details.map((detail) => (
                        <li
                          key={detail}
                          className="text-[9px] font-sans font-medium tracking-[0.25em] uppercase text-[#666662] border border-[#E0E0DC] px-2.5 py-1"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>

                    {/* Accordion: expanded copy */}
                    <div
                      id={`service-expanded-${i}`}
                      aria-hidden={!isOpen}
                      style={{
                        maxHeight: isOpen ? '200px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease',
                      }}
                    >
                      <p className="pt-6 text-[#444440] font-sans text-sm leading-relaxed max-w-2xl border-t border-[#E0E0DC] mt-6">
                        {expanded}
                      </p>
                    </div>
                  </div>

                  {/* Learn More / Read Less toggle */}
                  <div className="flex items-start pt-1 md:pt-0">
                    <button
                      onClick={() => toggle(i)}
                      aria-expanded={isOpen}
                      aria-controls={`service-expanded-${i}`}
                      className="flex items-center gap-2 text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#111111] hover:text-[#D43D2A] transition-colors whitespace-nowrap"
                    >
                      {isOpen ? 'Read Less' : 'Learn More'}
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        aria-hidden="true"
                        style={{
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <path
                          d="M3 1.5L6.5 5L3 8.5"
                          stroke="currentColor"
                          strokeWidth="1"
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
        <div className="mt-16 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-[#E0E0DC]">
          <p className="font-serif font-semibold text-[#111111] text-xl md:text-2xl">
            Not sure which service you need?
          </p>
          <a
            href="#contact"
            className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 bg-[#111111] text-white hover:bg-[#D43D2A] transition-colors duration-200 whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  )
}
