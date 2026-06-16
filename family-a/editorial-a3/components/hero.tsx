'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { HeroSlide } from '@/lib/site-config'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface HeroProps {
  slides?: HeroSlide[]
  /** Auto-advance interval in ms. Default 6000. */
  interval?: number
}

export function Hero({ slides = DEFAULT_CONFIG.heroSlides, interval = 6000 }: HeroProps) {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  const advance = useCallback(() => {
    setActive((a) => {
      setPrev(a)
      return (a + 1) % slides.length
    })
  }, [slides.length])

  useEffect(() => {
    const id = setInterval(advance, interval)
    return () => clearInterval(id)
  }, [advance, interval])

  const goTo = (index: number) => {
    if (index === active) return
    setPrev(active)
    setActive(index)
  }

  const current = slides[active]

  return (
    <section
      id="hero"
      className="min-h-screen bg-white flex items-stretch pt-20 md:pt-20"
      aria-label="Hero — introduction"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 w-full flex flex-col lg:flex-row items-center gap-0 lg:gap-20 xl:gap-28 py-16 md:py-24 lg:py-0">

        {/* ── Left: Oversized headline (60–70 % of viewport width on desktop) ─── */}
        <div className="flex-1 flex flex-col justify-center lg:py-24">

          {/* Gallery placard eyebrow */}
          <div className="inline-flex mb-8 md:mb-10" aria-hidden="false">
            <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5">
              {current.eyebrow ?? 'Fine Painting · Est. 1998'}
            </span>
          </div>

          {/* Oversized Fraunces headline */}
          <h1 className="font-serif font-semibold text-[#111111] leading-[0.92] text-balance">
            <span className="block text-[13vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7vw]">
              {current.headline}
            </span>
            <span className="block text-[13vw] md:text-[9vw] lg:text-[7.5vw] xl:text-[7vw] text-[#111111]">
              {current.headlineAccent}
            </span>
          </h1>

          {/* Body copy */}
          <p className="mt-8 md:mt-10 text-[#666662] font-sans text-base md:text-lg leading-relaxed max-w-md">
            {current.body}
          </p>

          {/* CTAs */}
          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start gap-5">
            <a
              href="#contact"
              className="text-[11px] font-sans font-semibold tracking-[0.22em] uppercase px-8 py-4 bg-[#111111] text-white hover:bg-[#D43D2A] transition-colors duration-200"
            >
              Get a Free Estimate
            </a>
            <a
              href="#transformations"
              className="underline-draw text-[11px] font-sans font-medium tracking-[0.2em] uppercase text-[#111111] self-center"
            >
              View Our Work
            </a>
          </div>

          {/* Slide pagination */}
          <div
            className="mt-12 md:mt-16 flex items-center gap-3"
            role="group"
            aria-label="Slide navigation"
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
                aria-current={active === i}
                className={`transition-all duration-300 ${
                  active === i
                    ? 'w-8 h-px bg-[#111111]'
                    : 'w-3 h-px bg-[#E0E0DC] hover:bg-[#111111]'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Right: Framed "canvas" — smaller, hung-painting treatment ────────── */}
        <div className="w-full lg:w-[38%] xl:w-[36%] flex-shrink-0 flex flex-col gap-4">
          {/* The frame — thin 1px ink border, like a hung gallery painting */}
          <div
            className="relative border border-[#111111] overflow-hidden"
            style={{ aspectRatio: '3/4' }}
            role="img"
            aria-label={`Project photograph: ${current.alt}`}
          >
            {/* Slides — crossfade */}
            {slides.map((slide, i) => (
              <div
                key={i}
                aria-hidden={i !== active}
                className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                style={{ opacity: i === active ? 1 : 0, zIndex: i === prev ? 1 : 0 }}
              >
                {slide.src ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    priority={i === 0}
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 38vw"
                  />
                ) : (
                  /*
                   * PLACEHOLDER — set slide.src in lib/site-config.ts
                   * e.g. src: '/images/hero-interior.jpg'
                   * Images should be 3:4 portrait ratio for best framing.
                   */
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? 'linear-gradient(160deg, #F7F7F5 0%, #E8E8E4 100%)'
                          : i === 1
                          ? 'linear-gradient(160deg, #EEEEEA 0%, #E0E0DC 100%)'
                          : 'linear-gradient(160deg, #F0F0EC 0%, #DCDCD8 100%)',
                    }}
                  />
                )}
              </div>
            ))}

            {/* Corner marks — decorative gallery registration marks */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#111111]/30 pointer-events-none" aria-hidden="true" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#111111]/30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#111111]/30 pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#111111]/30 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Gallery placard — small italic caption below frame */}
          <div className="border-l border-[#111111] pl-4 py-0.5">
            <p className="text-[10px] font-sans italic text-[#666662] leading-snug">
              {current.alt}
            </p>
            <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#111111]/40 mt-0.5">
              {`Slide ${active + 1} of ${slides.length}`}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
