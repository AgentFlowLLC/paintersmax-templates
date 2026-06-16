'use client'

import { useState } from 'react'
import { StarIcon } from '@/components/painting-icons'

const testimonials = [
  {
    quote:
      'Atelier completely transformed our 1920s colonial. The attention to detail on the millwork and trim was unlike anything I\'d seen from a painting company. They treated the project like it was their own home.',
    author: 'Margaret Hollis',
    location: 'Lakeview',
    project: 'Full Interior + Exterior',
  },
  {
    quote:
      'Three bids and Atelier wasn\'t the cheapest — but they were the only crew that caught the moisture issue under our siding before painting. That expertise saved us thousands. Hire professionals.',
    author: 'James & Carla Fontaine',
    location: 'Riverside District',
    project: 'Exterior Repaint',
  },
  {
    quote:
      'My kitchen cabinets look like they came from a custom furniture maker. The spray finish is flawless, the color consultation was spot-on, and they finished two days ahead of schedule.',
    author: 'Diane Park',
    location: 'Heritage Heights',
    project: 'Cabinet Refinishing',
  },
  {
    quote:
      'Benjamin Moore Aura with proper prep is the only paint I want on my walls. Atelier knows this. They don\'t cut corners on primers or surface prep, and the result still looks perfect four years later.',
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
      className="bg-white py-24 md:py-40"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
            Client Stories
          </span>
          <h2
            id="testimonials-heading"
            className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance max-w-2xl"
          >
            Words from Those We&apos;ve Served.
          </h2>
          <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-14 lg:gap-20 items-start">

          {/* Featured testimonial */}
          <div>
            {/* Large ink open-quote */}
            <div aria-hidden="true" className="font-serif text-[#E0E0DC] text-[100px] leading-none select-none -mb-6">
              &ldquo;
            </div>

            <blockquote>
              <p className="font-serif font-semibold text-[#111111] text-xl md:text-2xl xl:text-3xl leading-[1.35] text-balance">
                {t.quote}
              </p>

              <footer className="mt-8 flex items-center gap-5 pt-6 border-t border-[#E0E0DC]">
                {/* Monogram */}
                <div className="w-10 h-10 border border-[#111111] flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-semibold text-[#111111] text-lg leading-none">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-[#111111] text-sm leading-none mb-1">{t.author}</p>
                  <p className="font-sans text-[#666662] text-[10px] tracking-[0.2em] uppercase">{t.location}</p>
                </div>
                {/* Project tag — placard style */}
                <span className="ml-auto text-[9px] font-sans font-medium tracking-[0.3em] uppercase text-[#666662] border border-[#E0E0DC] px-2.5 py-1 hidden sm:inline">
                  {t.project}
                </span>
              </footer>
            </blockquote>

            {/* Pagination */}
            <div
              className="mt-8 flex items-center gap-3"
              role="group"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  aria-current={active === i}
                  className={`transition-all duration-200 ${
                    active === i
                      ? 'w-8 h-px bg-[#111111]'
                      : 'w-3 h-px bg-[#E0E0DC] hover:bg-[#111111]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right — all reviews list */}
          <div className="flex flex-col gap-0 divide-y divide-[#E0E0DC] border-t border-[#E0E0DC]">
            {testimonials.map((review, i) => (
              <button
                key={review.author}
                onClick={() => setActive(i)}
                className={`text-left py-5 transition-colors duration-150 group ${
                  active === i ? 'bg-[#F7F7F5]' : 'bg-white hover:bg-[#F7F7F5]'
                } px-4`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-sans font-semibold text-[#111111] text-sm">{review.author}</p>
                  <StarIcon size={14} className="flex-shrink-0 opacity-50" />
                </div>
                <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#666662] mb-2">
                  {review.project}
                </p>
                <p className="font-sans text-[#666662] text-xs leading-relaxed line-clamp-2">
                  {review.quote}
                </p>
              </button>
            ))}

            {/* Rating summary — placard */}
            <div className="pt-5 px-4 pb-0">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="font-serif font-semibold text-[#111111] text-3xl leading-none">4.9</span>
                <span className="text-[9px] font-sans tracking-[0.3em] uppercase text-[#666662]">/ 5.0</span>
              </div>
              <p className="text-[#999994] text-[10px] font-sans">Based on 320+ verified reviews</p>
              <div className="mt-2 w-4 h-px bg-[#D43D2A]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
