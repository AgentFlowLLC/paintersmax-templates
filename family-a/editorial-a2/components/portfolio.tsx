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
    <section id="portfolio" className="bg-[#EDE7DC] py-24 md:py-32" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
              Our Portfolio
            </p>
            <h2
              id="portfolio-heading"
              className="font-serif text-[#3D3530] text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              Work That Speaks for Itself.
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio categories">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`text-xs font-sans font-semibold tracking-widest uppercase px-4 py-2 border transition-colors ${
                  active === cat
                    ? 'bg-[#3D3530] text-[#F2EDE4] border-[#3D3530]'
                    : 'bg-transparent text-[#7A6F68] border-[#D4CCC2] hover:border-[#3D3530] hover:text-[#3D3530]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D4CCC2]">
          {filtered.map((project) => (
            <article key={project.title} className="bg-[#EDE7DC] group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category badge */}
                <span className="absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 bg-[#3D3530] text-[#C4813A]">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-[#3D3530] text-lg font-bold leading-snug mb-1">
                  {project.title}
                </h3>
                <p className="text-[#7A6F68] font-sans text-xs tracking-wide">
                  {project.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 border border-[#3D3530] text-[#3D3530] hover:bg-[#3D3530] hover:text-[#F2EDE4] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
