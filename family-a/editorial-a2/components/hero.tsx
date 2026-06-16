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
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#3D3530]"
      aria-label="Hero section"
    >
      {/* ── Slide images (crossfade) ───────────────────────────────────── */}
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
              sizes="100vw"
            />
          ) : (
            /*
             * PLACEHOLDER — replace slide.src in lib/site-config.ts or pass a
             * slides prop with real image paths, e.g. '/images/hero-interior.jpg'
             */
            <div
              className="absolute inset-0"
              style={{
                background:
                  i === 0
                    ? 'linear-gradient(135deg, #3D3530 0%, #2A2220 100%)'
                    : i === 1
                      ? 'linear-gradient(135deg, #2A2220 0%, #4A5C4E 60%, #3D3530 100%)'
                      : 'linear-gradient(135deg, #3D3530 0%, #6B5240 100%)',
              }}
            />
          )}
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-[#1C1612]/55" />
        </div>
      ))}

      {/* ── Texture overlay ───────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: `repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(196,129,58,0.025) 2px, rgba(196,129,58,0.025) 4px
          )`,
        }}
        aria-hidden="true"
      />

      {/* ── Large editorial watermark ─────────────────────────────────── */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ zIndex: 2 }}
        aria-hidden="true"
      >
        <span className="font-serif font-bold text-[18vw] leading-none tracking-tighter text-[#C4813A]/6 whitespace-nowrap">
          CRAFTLINE
        </span>
      </div>

      {/* ── Gold accent bar ───────────────────────────────────────────── */}
      <div className="absolute top-0 left-0 w-1 h-40 bg-[#C4813A]" style={{ zIndex: 3 }} aria-hidden="true" />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <div className="relative pb-20 pt-32 md:pt-48" style={{ zIndex: 3 }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">
            {/* Left — slide copy */}
            <div>
              <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-5">
                {current.eyebrow ?? 'Benjamin Moore Certified · Since 1998'}
              </p>
              <h1 className="font-serif text-[#F2EDE4] text-balance">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-2">
                  {current.headline}
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-[#C4813A]">
                  {current.headlineAccent}
                </span>
              </h1>
              <p className="mt-6 text-[#B8B0A8] font-sans text-base md:text-lg leading-relaxed max-w-md">
                {current.body}
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="inline-block text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 bg-[#C4813A] text-[#F2EDE4] hover:bg-[#F2EDE4] hover:text-[#3D3530] transition-colors text-center"
                >
                  Get a Free Estimate
                </a>
                <a
                  href="#portfolio"
                  className="inline-block text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 border border-[#B8B0A8] text-[#F2EDE4] hover:border-[#C4813A] hover:text-[#C4813A] transition-colors text-center"
                >
                  View Our Work
                </a>
              </div>
            </div>

            {/* Right — stats grid */}
            <div className="grid grid-cols-2 gap-px bg-[#B8B0A8]/20">
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '2,400+', label: 'Projects Completed' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '5★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#3D3530]/80 backdrop-blur-sm p-7">
                  <p className="font-serif text-[#C4813A] text-4xl font-bold leading-none mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[#B8B0A8] text-xs tracking-[0.2em] uppercase font-sans">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Slide pagination dots ────────────────────────────────────── */}
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 mt-10 flex items-center gap-3"
          role="group"
          aria-label="Slide navigation"
        >
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.alt}`}
              aria-current={active === i}
              className={`transition-all duration-300 rounded-none ${
                active === i
                  ? 'w-8 h-0.5 bg-[#C4813A]'
                  : 'w-3 h-0.5 bg-[#B8B0A8]/40 hover:bg-[#B8B0A8]'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
        aria-hidden="true"
      >
        <span className="text-[#B8B0A8] text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
        <div className="w-px h-10 bg-[#C4813A]/50 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/2 bg-[#C4813A] animate-bounce" />
        </div>
      </div>
    </section>
  )
}
