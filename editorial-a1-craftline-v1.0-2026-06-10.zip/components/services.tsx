'use client'

import { useState } from 'react'
import {
  PaintBrushIcon,
  HouseExteriorIcon,
  PaintRollerIcon,
  CabinetDoorIcon,
  PressureWasherIcon,
  DeckBoardsIcon,
} from '@/components/painting-icons'

interface Service {
  Icon: React.ComponentType<{ size?: number }>
  title: string
  description: string
  details: string[]
  /**
   * Long-form copy revealed when the user clicks "Learn More".
   * Displayed inside a smooth max-height accordion (0 → 200px, 0.4s ease).
   */
  expanded: string
}

const services: Service[] = [
  {
    Icon: PaintRollerIcon,
    title: 'Interior Painting',
    description:
      'From accent walls to full-home transformations. We use only premium Benjamin Moore paints with meticulous prep and professional-grade finish.',
    details: ['Color consultation included', 'Furniture protection', 'Low-VOC options'],
    expanded:
      'Our interior process begins with a thorough surface assessment — filling nail holes, skim-coating damaged drywall, and sanding glossy surfaces for maximum adhesion. We use Benjamin Moore Aura or Regal Select depending on the sheen requirement, applying a minimum of two full coats after a quality primer. Every edge is cut by hand, never masked over, to produce the crisp lines that define a premium finish.',
  },
  {
    Icon: HouseExteriorIcon,
    title: 'Exterior Painting',
    description:
      'Weather-resistant finishes that protect and beautify. Power washing, priming, and multi-coat application for lasting curb appeal.',
    details: ['Full surface preparation', '10-year warranty available', 'All weather conditions'],
    expanded:
      'Exterior longevity starts with preparation: we pressure wash all surfaces, hand-scrape loose paint, caulk every gap and penetration, and spot-prime bare wood before applying a full-coverage primer coat. We then apply two coats of Benjamin Moore Aura Exterior with UV-guard technology. Our 10-year warranty on labor and materials means we stand behind every brushstroke.',
  },
  {
    Icon: PaintBrushIcon,
    title: 'Trim & Detail Work',
    description:
      'Crown molding, baseboards, doors, and windows — the fine details that define a premium finish and separate good from exceptional.',
    details: ['Hand-brushed precision', 'Caulking & sealing', 'Wood grain preservation'],
    expanded:
      'Trim is where most painters cut corners — and where we invest the most time. All casing, door frames, and window sills are hand-sanded to 220 grit, caulked with a paintable latex sealant, and finished with two brush-applied coats of Benjamin Moore Advance alkyd-hybrid paint. The result is a hard, furniture-grade finish with none of the solvent smell or long dry times of traditional oil paints.',
  },
  {
    Icon: CabinetDoorIcon,
    title: 'Cabinet Refinishing',
    description:
      'Transform your kitchen cabinets without the cost of replacement. Factory-smooth finish in any Benjamin Moore color.',
    details: ['Spray application', 'Degreasing & sanding', 'Durable lacquer topcoat'],
    expanded:
      'We remove all doors and drawer fronts, tag them for exact re-installation, and transport them to our dedicated finishing shop. After degreasing with a commercial cabinet cleaner, we sand to bare wood on worn areas, apply a bonding primer, and spray two coats of a catalyzed lacquer or Benjamin Moore Advance. The sprayed-in-shop process eliminates brush marks entirely — the result is indistinguishable from new factory cabinetry.',
  },
  {
    Icon: PressureWasherIcon,
    title: 'Pressure Washing',
    description:
      'Thorough surface preparation and standalone cleaning for driveways, siding, decks, and fences using commercial-grade equipment.',
    details: ['Soft-wash available', 'Mold & mildew removal', 'Pre-paint prep service'],
    expanded:
      'We use commercial 3,500 PSI hot-water equipment calibrated to each substrate — lower pressure for vinyl siding and cedar, higher for concrete and masonry. A pre-treatment of sodium hypochlorite solution is applied to mold and mildew areas and allowed to dwell before rinsing. For delicate surfaces, our soft-wash system uses low pressure and a biodegradable surfactant that lifts dirt without damaging wood fibers or stripping existing paint.',
  },
  {
    Icon: DeckBoardsIcon,
    title: 'Deck & Fence Staining',
    description:
      'Penetrating stains and sealers that nourish wood grain while providing UV and moisture protection for years of beauty.',
    details: ['Transparent to solid options', 'Olympic & Cabot stains', 'Annual maintenance plans'],
    expanded:
      'Proper deck staining starts with a thorough power wash and 48-hour dry time minimum — we never stain wet wood. We then hand-sand any raised grain, apply a wood brightener to open the pores, and brush-apply the stain product in the direction of the grain for maximum penetration. We offer Cabot Australian Timber Oil, Olympic Maximum, and TWP 100-Series depending on the species and desired sheen. Ask about our annual maintenance program for discounted re-coats.',
  },
]

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="services" className="bg-[#F2EDE4] py-24 md:py-32" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="font-serif text-[#3D3530] text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            Crafted for Every Surface, Every Space.
          </h2>
          <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4CCC2]">
          {services.map(({ Icon, title, description, details, expanded }, i) => {
            const isOpen = openIndex === i
            return (
              <article
                key={title}
                className="bg-[#F2EDE4] p-8 md:p-10 flex flex-col gap-5 hover:bg-[#EDE7DC] transition-colors group"
              >
                {/* Icon — 56px centered */}
                <div className="flex justify-center mb-2">
                  <Icon size={56} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[#3D3530] text-xl font-bold mb-3 text-center group-hover:text-[#C4813A] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#7A6F68] font-sans text-sm leading-relaxed text-center">
                    {description}
                  </p>
                </div>

                {/* Details list */}
                <ul className="mt-auto pt-4 border-t border-[#D4CCC2] flex flex-col gap-2" role="list">
                  {details.map((detail) => (
                    <li key={detail} className="flex items-center gap-2.5 text-xs font-sans text-[#7A6F68]">
                      <span className="w-1 h-1 rounded-full bg-[#C4813A] flex-shrink-0" aria-hidden="true" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* ── Accordion: expanded copy ────────────────────────────────── */}
                <div
                  aria-hidden={!isOpen}
                  style={{
                    maxHeight: isOpen ? '200px' : '0px',
                    overflow: 'hidden',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <p className="pt-4 border-t border-[#D4CCC2] text-[#7A6F68] font-sans text-sm leading-relaxed">
                    {expanded}
                  </p>
                </div>

                {/* ── Learn More / Read Less toggle ──────────────────────────── */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`service-expanded-${i}`}
                  className="flex items-center gap-1.5 text-xs font-sans font-semibold tracking-widest uppercase text-[#C4813A] hover:text-[#3D3530] transition-colors mt-auto self-start"
                >
                  {isOpen ? 'Read Less' : 'Learn More'}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    style={{
                      transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA bar */}
        <div className="mt-px bg-[#3D3530] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-[#F2EDE4] text-xl font-semibold text-center md:text-left">
            Not sure which service is right for you?
          </p>
          <a
            href="#contact"
            className="text-sm font-sans font-semibold tracking-wider uppercase px-7 py-3 bg-[#C4813A] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#3D3530] transition-colors whitespace-nowrap"
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  )
}
