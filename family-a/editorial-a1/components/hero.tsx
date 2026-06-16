'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { HeroSlide } from '@/lib/site-config'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface HeroProps {
  slides?: HeroSlide[]
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
      className="bg-[#F5EFE0] pt-24 md:pt-28 pb-16 md:pb-24"
      aria-label="Hero — introduction"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

        {/* ── Brass double-rule eyebrow ─────────────────────────────────── */}
        <div className="eyebrow-rule w-full max-w-sm mb-8" aria-hidden="true">
          <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
            {current.eyebrow ?? 'Est. 1922 · Benjamin Moore Certified'}
          </span>
        </div>

        {/* ── Centered Libre Caslon headline ───────────────────────────── */}
        <h1 className="font-serif font-bold text-[#1F3B2C] leading-[1.05] text-balance text-center">
          <span className="block text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] xl:text-[5vw]">
            {current.headline}
          </span>
          <span className="block text-[11vw] md:text-[6.5vw] lg:text-[5.5vw] xl:text-[5vw]">
            {current.headlineAccent}
          </span>
        </h1>

        {/* Brass rule under headline */}
        <div className="flex items-center gap-3 mt-6 mb-6" aria-hidden="true">
          <div className="w-12 h-px bg-[#B08D44]" />
          {/* Brass diamond */}
          <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
            <polygon points="4,0 8,4 4,8 0,4" />
          </svg>
          <div className="w-12 h-px bg-[#B08D44]" />
        </div>

        {/* Italic subhead */}
        <p className="font-serif italic text-[#5C6B5E] text-base md:text-lg leading-relaxed max-w-md">
          {current.body}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#contact"
            className="text-[10px] font-sans font-semibold tracking-[0.28em] uppercase px-8 py-3.5 border border-[#B08D44] text-[#1F3B2C] hover:bg-[#1F3B2C] hover:text-[#F5EFE0] hover:border-[#1F3B2C] transition-colors duration-200"
            style={{ borderRadius: '2px' }}
          >
            Request an Estimate
          </a>
          <a
            href="#transformations"
            className="underline-draw text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#1F3B2C]"
          >
            View Our Work
          </a>
        </div>

        {/* ── Letterbox (21:9) framed estate photograph ─────────────────── */}
        <div className="w-full mt-12 md:mt-16 flex flex-col items-center gap-3">

          {/* The brass-bordered frame */}
          <div
            className="relative w-full overflow-hidden border border-[#B08D44]"
            style={{ aspectRatio: '21/9' }}
            role="img"
            aria-label={`Estate photograph: ${current.alt}`}
          >
            {/* Slide crossfades */}
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
                    sizes="(max-width: 1280px) 100vw, 1280px"
                  />
                ) : (
                  /*
                   * PLACEHOLDER — set slide.src in lib/site-config.ts
                   * e.g. src: '/images/hero-manor.jpg'
                   * Best results: wide landscape photos, 21:9 or 16:9 crop.
                   */
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        i === 0
                          ? 'linear-gradient(160deg, #EDE4CE 0%, #D9CEBC 100%)'
                          : i === 1
                          ? 'linear-gradient(160deg, #E6DCCA 0%, #CDBFA0 100%)'
                          : 'linear-gradient(160deg, #E9E0CF 0%, #D0C4A8 100%)',
                    }}
                  />
                )}
              </div>
            ))}

            {/* Inner brass inset — like a mat around a framed print */}
            <div className="absolute inset-2 border border-[#B08D44]/25 pointer-events-none" aria-hidden="true" />
          </div>

          {/* Slide indicators — brass diamonds */}
          <div
            className="flex items-center gap-4 mt-1"
            role="group"
            aria-label="Slide navigation"
          >
            {slides.map((slide, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
                aria-current={active === i}
                className="transition-all duration-300 hover:opacity-80"
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

          {/* Caption — engraved stationery style */}
          <p className="text-[8px] font-sans tracking-[0.35em] uppercase text-[#8A9B8E] mt-1">
            {current.alt} &nbsp;·&nbsp; {`Plate ${active + 1} of ${slides.length}`}
          </p>
        </div>
      </div>
    </section>
  )
}
