'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Interior', 'Exterior', 'Cabinets', 'Decks'] as const
type Category = (typeof categories)[number]

const projects = [
  {
    src: '/images/portfolio-1.png',
    alt: 'Luxury living room interior painted in warm white with gold accents',
    title: 'Riverside Drive Residence',
    category: 'Interior' as Category,
    detail: 'Full interior — 4,200 sq ft',
  },
  {
    src: '/images/portfolio-2.png',
    alt: 'Victorian home exterior freshly painted in dark brown with cream trim',
    title: 'Elmwood Victorian Exterior',
    category: 'Exterior' as Category,
    detail: 'Complete exterior repaint',
  },
  {
    src: '/images/portfolio-3.png',
    alt: 'White kitchen cabinets with smooth professional painted finish',
    title: 'Modern Kitchen Transformation',
    category: 'Cabinets' as Category,
    detail: '42 cabinet doors + drawers',
  },
  {
    src: '/images/portfolio-4.png',
    alt: 'Freshly stained hardwood deck with rich warm brown tones',
    title: 'Heritage Oak Deck Stain',
    category: 'Decks' as Category,
    detail: '850 sq ft cedar deck',
  },
  {
    src: '/images/portfolio-5.png',
    alt: 'Elegant dining room with deep navy blue accent wall and white trim',
    title: 'Lakeview Dining Room',
    category: 'Interior' as Category,
    detail: 'Accent wall + full trim work',
  },
  {
    src: '/images/portfolio-6.png',
    alt: 'Professional painter carefully detailing window trim molding',
    title: 'Millwork Detail — Park Row',
    category: 'Interior' as Category,
    detail: 'Crown molding & trim refinish',
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')
  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="portfolio"
      className="bg-[#F7F7F5] py-24 md:py-40"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
              Portfolio
            </span>
            <h2
              id="portfolio-heading"
              className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
            >
              Work That Speaks for Itself.
            </h2>
            <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filter categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`text-[10px] font-sans font-medium tracking-[0.25em] uppercase px-4 py-2 border transition-colors duration-150 ${
                  active === cat
                    ? 'bg-[#111111] text-white border-[#111111]'
                    : 'bg-transparent text-[#666662] border-[#E0E0DC] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid — 1px gap between cells */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E0E0DC]">
          {filtered.map((project) => (
            <article key={project.title} className="bg-[#F7F7F5] group overflow-hidden">
              {/* Image frame — thin ink border */}
              <div className="relative border border-transparent group-hover:border-[#111111] transition-colors duration-300" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category label */}
                <span className="absolute top-3 left-3 text-[9px] font-sans font-medium tracking-[0.3em] uppercase px-2 py-1 bg-white/90 text-[#111111] border border-[#E0E0DC]">
                  {project.category}
                </span>
              </div>
              {/* Placard */}
              <div className="p-5 border-l border-b border-r border-[#E0E0DC] bg-white">
                <h3 className="font-serif font-semibold text-[#111111] text-base leading-snug mb-0.5">
                  {project.title}
                </h3>
                <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#666662] italic">
                  {project.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#contact"
            className="underline-draw text-[11px] font-sans font-medium tracking-[0.25em] uppercase text-[#111111]"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
