'use client'

import { useState } from 'react'
import { StarStrokesIcon } from '@/components/painting-icons'

const testimonials = [
  {
    quote:
      'Craftline completely transformed our 1920s colonial. The attention to detail on the millwork and trim was unlike anything I\'d seen from a painting company. They treated the project like it was their own home.',
    author: 'Margaret Hollis',
    location: 'Lakeview Neighborhood',
    project: 'Full Interior + Exterior',
  },
  {
    quote:
      'Three bids and Craftline wasn\'t the cheapest — but they were the only crew that caught the moisture issue under our siding before painting. That expertise saved us thousands. Hire professionals.',
    author: 'James & Carla Fontaine',
    location: 'Riverside District',
    project: 'Exterior Repaint',
  },
  {
    quote:
      'My kitchen cabinets look like they came from a custom furniture maker. The spray finish is flawless, the color consultation was spot-on, and they finished two days ahead of schedule. Outstanding.',
    author: 'Diane Park',
    location: 'Heritage Heights',
    project: 'Cabinet Refinishing',
  },
  {
    quote:
      'Benjamin Moore Aura with proper prep is the only paint I want on my walls. Craftline knows this. They don\'t cut corners on primers or surface prep, and the result is a finish that still looks perfect four years later.',
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
      className="bg-[#F2EDE4] py-24 md:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="font-serif text-[#3D3530] text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            Words from Those We&apos;ve Served.
          </h2>
          <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Featured testimonial */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Large quote mark */}
              <span
                className="absolute -top-4 -left-2 font-serif text-[#C4813A]/15 text-[120px] leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="relative z-10">
                <p className="font-serif text-[#3D3530] text-xl md:text-2xl leading-relaxed font-medium italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <footer className="mt-8 flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 bg-[#3D3530] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C4813A] font-serif text-xl font-bold">
                      {t.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-[#3D3530] text-sm">{t.author}</p>
                    <p className="font-sans text-[#7A6F68] text-xs">{t.location}</p>
                    <p className="font-sans text-[#C4813A] text-xs tracking-wide uppercase mt-0.5">
                      {t.project}
                    </p>
                  </div>
                  {/* Star icon */}
                  <div className="ml-auto">
                    <StarStrokesIcon size={24} />
                  </div>
                </footer>
              </blockquote>
            </div>

            {/* Navigation dots */}
            <div className="mt-8 flex items-center gap-3" role="group" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`View testimonial ${i + 1}`}
                  aria-current={active === i}
                  className={`transition-all ${
                    active === i
                      ? 'w-8 h-0.5 bg-[#C4813A]'
                      : 'w-3 h-0.5 bg-[#D4CCC2] hover:bg-[#B8B0A8]'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side — all reviews list */}
          <div className="flex flex-col gap-4">
            <p className="text-[#7A6F68] text-xs tracking-[0.2em] uppercase font-sans font-medium mb-2">
              All Reviews
            </p>
            {testimonials.map((review, i) => (
              <button
                key={review.author}
                onClick={() => setActive(i)}
                className={`text-left p-4 border transition-all ${
                  active === i
                    ? 'border-[#C4813A] bg-[#EDE7DC]'
                    : 'border-[#D4CCC2] hover:border-[#B8B0A8]'
                }`}
              >
                <p className="font-sans font-semibold text-[#3D3530] text-sm mb-0.5">
                  {review.author}
                </p>
                <p className="font-sans text-[#7A6F68] text-xs">{review.project}</p>
                <p
                  className="font-sans text-[#7A6F68] text-xs mt-1.5 line-clamp-2 leading-relaxed"
                >
                  {review.quote}
                </p>
              </button>
            ))}

            {/* Rating summary */}
            <div className="mt-4 p-4 bg-[#3D3530]">
              <div className="flex items-center gap-2 mb-1">
                <StarStrokesIcon size={18} />
                <span className="font-serif text-[#C4813A] text-2xl font-bold">4.9</span>
              </div>
              <p className="text-[#B8B0A8] text-xs font-sans">Based on 320+ verified reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
