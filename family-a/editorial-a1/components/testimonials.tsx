'use client'

import { useState } from 'react'

const testimonials = [
  {
    quote:
      'Manor completely transformed our 1920s colonial. The attention to the millwork and trim was unlike anything I have encountered from a painting firm. They treated the project as if the house were their own.',
    author: 'Margaret Hollis',
    location: 'Lakeview',
    project: 'Full Interior & Exterior',
  },
  {
    quote:
      'Three bids, and Manor was not the least expensive — but they were the only crew that identified a moisture problem beneath our siding before painting. That expertise saved us a considerable sum. Always hire experience.',
    author: 'James & Carla Fontaine',
    location: 'Riverside District',
    project: 'Exterior Repaint',
  },
  {
    quote:
      'My kitchen cabinetry looks as though it came from a bespoke furniture maker. The spray finish is flawless, the colour consultation was perfectly judged, and they completed the work two days ahead of schedule.',
    author: 'Diane Park',
    location: 'Heritage Heights',
    project: 'Cabinet Refinishing',
  },
  {
    quote:
      'Benjamin Moore Aura applied over proper preparation is the only paint I want on my walls. Manor understands this. They never cut corners on primer or surface work, and the result looks as fine today as it did four years ago.',
    author: 'Robert Chen',
    location: 'Old Town',
    project: 'Interior — Full Home',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)
  const t = testimonials[active]

  return (
    <section
      id="testimonials"
      className="bg-[#F5EFE0] py-24 md:py-40"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="eyebrow-rule w-full max-w-xs mb-8">
            <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
              Client Testimonials
            </span>
          </div>
          <h2
            id="testimonials-heading"
            className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance max-w-2xl"
          >
            Words from Those We Have Served.
          </h2>
          <div className="flex items-center gap-3 mt-5" aria-hidden="true">
            <div className="w-10 h-px bg-[#B08D44]" />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
            <div className="w-10 h-px bg-[#B08D44]" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-14 lg:gap-20 items-start">

          {/* Featured quote */}
          <div>
            {/* Large open-quote in brass */}
            <div
              aria-hidden="true"
              className="font-serif text-[#B08D44] text-[90px] leading-none select-none -mb-4"
              style={{ opacity: 0.55 }}
            >
              &ldquo;
            </div>

            <blockquote>
              <p className="font-serif text-[#1F3B2C] text-xl md:text-2xl leading-[1.45] text-balance">
                {t.quote}
              </p>

              <footer className="mt-8 flex items-center gap-5 pt-6 border-t border-[#C8BC9C]">
                {/* Monogram — brass-bordered */}
                <div
                  className="w-10 h-10 border border-[#B08D44] flex items-center justify-center flex-shrink-0"
                  style={{ borderRadius: '2px' }}
                >
                  <span className="font-serif font-bold text-[#1F3B2C] text-lg leading-none">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-serif font-bold text-[#1F3B2C] text-sm leading-none mb-1">{t.author}</p>
                  <p className="font-sans text-[#8A9B8E] text-[9px] tracking-[0.28em] uppercase italic">{t.location}</p>
                </div>
                <span
                  className="ml-auto text-[8px] font-sans font-semibold tracking-[0.3em] uppercase text-[#5C6B5E] border border-[#C8BC9C] px-2.5 py-1 hidden sm:inline"
                  style={{ borderRadius: '2px' }}
                >
                  {t.project}
                </span>
              </footer>
            </blockquote>

            {/* Diamond pagination */}
            <div className="mt-8 flex items-center gap-4" role="group" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  aria-current={active === i}
                  style={{ lineHeight: 0 }}
                >
                  <svg
                    width={active === i ? 10 : 7}
                    height={active === i ? 10 : 7}
                    viewBox="0 0 10 10"
                    fill={active === i ? '#B08D44' : '#C8BC9C'}
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <polygon points="5,0 10,5 5,10 0,5" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right — review list */}
          <div className="flex flex-col divide-y divide-[#C8BC9C] border-t border-[#C8BC9C]">
            {testimonials.map((review, i) => (
              <button
                key={review.author}
                onClick={() => setActive(i)}
                className={`text-left py-5 px-4 transition-colors duration-150 ${
                  active === i ? 'bg-[#EDE4CE]' : 'bg-transparent hover:bg-[#EDE4CE]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <p className="font-serif font-bold text-[#1F3B2C] text-sm">{review.author}</p>
                  {/* Brass diamond accent */}
                  <svg width="7" height="7" viewBox="0 0 7 7" fill="#B08D44" aria-hidden="true">
                    <polygon points="3.5,0 7,3.5 3.5,7 0,3.5" />
                  </svg>
                </div>
                <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#8A9B8E] mb-2 italic">
                  {review.project}
                </p>
                <p className="font-sans text-[#5C6B5E] text-xs leading-relaxed line-clamp-2">
                  {review.quote}
                </p>
              </button>
            ))}

            {/* Rating summary */}
            <div className="pt-5 px-4 pb-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif font-bold text-[#1F3B2C] text-3xl leading-none">4.9</span>
                <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#8A9B8E]">/ 5.0</span>
              </div>
              <p className="text-[#8A9B8E] text-[9px] font-sans italic">Based on 320+ verified reviews</p>
              <div className="mt-2 w-6 h-px bg-[#B08D44]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
