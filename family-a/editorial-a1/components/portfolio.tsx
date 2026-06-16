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
    alt: 'Freshly stained hardwood deck with rich warm tones',
    title: 'Heritage Oak Deck Stain',
    category: 'Decks' as Category,
    detail: '850 sq ft cedar deck',
  },
  {
    src: '/images/portfolio-5.png',
    alt: 'Elegant dining room with deep navy accent wall and white trim',
    title: 'Lakeview Dining Room',
    category: 'Interior' as Category,
    detail: 'Accent wall + full trim work',
  },
  {
    src: '/images/portfolio-6.png',
    alt: 'Professional painter carefully detailing window trim moulding',
    title: 'Millwork Detail — Park Row',
    category: 'Interior' as Category,
    detail: 'Crown moulding & trim refinish',
  },
]

export function Portfolio() {
  const [active, setActive] = useState<Category>('All')
  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section
      id="portfolio"
      className="bg-[#EDE4CE] py-24 md:py-40"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="eyebrow-rule w-full max-w-xs mb-8">
              <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
                Portfolio
              </span>
            </div>
            <h2
              id="portfolio-heading"
              className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance max-w-xl"
            >
              Work That Speaks for Itself.
            </h2>
            <div className="flex items-center gap-3 mt-5" aria-hidden="true">
              <div className="w-10 h-px bg-[#B08D44]" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
              <div className="w-10 h-px bg-[#B08D44]" />
            </div>
          </div>

          {/* Filter tabs — engraved button style */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Portfolio filter">
            {categories.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`text-[9px] font-sans font-semibold tracking-[0.28em] uppercase px-4 py-2 border transition-colors duration-150 ${
                  active === cat
                    ? 'bg-[#1F3B2C] text-[#F5EFE0] border-[#1F3B2C]'
                    : 'bg-transparent text-[#5C6B5E] border-[#C8BC9C] hover:border-[#1F3B2C] hover:text-[#1F3B2C]'
                }`}
                style={{ borderRadius: '2px' }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#C8BC9C]">
          {filtered.map((project) => (
            <article key={project.title} className="bg-[#EDE4CE] group overflow-hidden">
              <div
                className="relative border border-transparent group-hover:border-[#B08D44] transition-colors duration-300"
                style={{ aspectRatio: '4/3' }}
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Category label — brass-bordered */}
                <span
                  className="absolute top-3 left-3 text-[8px] font-sans font-semibold tracking-[0.3em] uppercase px-2 py-1 bg-[#F5EFE0]/93 text-[#1F3B2C] border border-[#C8BC9C] pointer-events-none"
                  style={{ borderRadius: '2px' }}
                >
                  {project.category}
                </span>
              </div>

              {/* Placard — parchment with top brass rule */}
              <div className="px-5 pt-3 pb-4 bg-[#F5EFE0] border-t border-[#B08D44]/40 border-l border-r border-b border-[#C8BC9C]">
                <h3 className="font-serif font-bold text-[#1F3B2C] text-sm leading-snug mb-0.5">
                  {project.title}
                </h3>
                <p className="text-[8px] font-sans tracking-[0.28em] uppercase text-[#8A9B8E] italic">
                  {project.detail}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="underline-draw text-[10px] font-sans font-semibold tracking-[0.28em] uppercase text-[#1F3B2C] hover:text-[#B08D44] transition-colors"
          >
            Enquire About Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
