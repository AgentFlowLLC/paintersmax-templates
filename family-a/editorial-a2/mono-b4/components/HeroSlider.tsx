'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/site-config'

export default function HeroSlider() {
  const slides = siteConfig.slides
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current)
      setCurrent((c) => (c + 1) % slides.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [current, slides.length])

  const goTo = (idx: number) => {
    if (idx === current) return
    setPrev(current)
    setCurrent(idx)
  }

  /* B4 black-to-gray gradient empty states */
  const placeholderColors = [
    ['#222222', '#555555'],
    ['#333333', '#777777'],
    ['#111111', '#444444'],
    ['#444444', '#888888'],
  ]

  return (
    <section aria-label="Hero">
      {/* ── Typography block ─────────────────────────────── */}
      <div className="bg-background pt-24 pb-10 px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        {/* Yellow rule above */}
        <div className="h-[3px] bg-[#FFD400] mb-8" aria-hidden="true" />

        {/* Eyebrow */}
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#555555] mb-4">
          {siteConfig.company} &mdash; {siteConfig.tagline}
        </p>

        {/* Giant Anton headline */}
        <h1 className="font-heading text-[clamp(3rem,10vw,7rem)] uppercase leading-[0.95] tracking-[-0.01em] text-foreground text-balance mb-6 max-w-5xl">
          {siteConfig.heroHeadline}
        </h1>

        {/* Yellow rule below */}
        <div className="h-[3px] bg-[#FFD400] mb-8" aria-hidden="true" />

        {/* Sub + CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="font-sans text-base leading-relaxed text-[#555555] max-w-md text-pretty">
            {siteConfig.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-foreground text-white font-sans text-sm font-semibold border-b-2 border-[#FFD400] hover:bg-[#FFD400] hover:text-foreground transition-colors duration-150"
            >
              {siteConfig.heroCta}
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-foreground font-sans text-sm font-semibold border-2 border-foreground hover:bg-[#FFD400] transition-colors duration-150"
            >
              Our Process
            </a>
          </div>
        </div>
      </div>

      {/* ── Full-width slider below the headline block ─── */}
      <div className="relative w-full h-[400px] bg-foreground overflow-hidden" aria-label="Project photo slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              i === current ? 'opacity-100 z-10' : i === prev ? 'opacity-0 z-10' : 'opacity-0 z-0'
            }`}
            aria-hidden={i !== current}
          >
            {slide.src ? (
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{
                  background: `linear-gradient(135deg, ${placeholderColors[i][0]} 0%, ${placeholderColors[i][1]} 100%)`,
                }}
                aria-label={slide.alt}
              />
            )}
          </div>
        ))}

        {/* Yellow dash indicators */}
        <div className="absolute bottom-5 left-6 z-20 flex gap-3">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}: ${slide.caption}`}
              aria-current={i === current ? 'true' : undefined}
              className={`block h-[4px] transition-all duration-300 cursor-pointer ${
                i === current ? 'w-10 bg-[#FFD400]' : 'w-5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>

        {/* Slide caption */}
        <div className="absolute bottom-5 right-6 z-20">
          <span className="font-sans text-xs font-semibold uppercase tracking-[0.15em] text-white/70">
            {slides[current]?.caption}
          </span>
        </div>
      </div>

      {/* ── Stats bar ─────────────────────────────────── */}
      <div className="bg-foreground">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="px-6 md:px-10 py-7 flex flex-col">
              <p className="font-heading text-3xl uppercase text-[#FFD400] leading-none mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-xs text-white/50 uppercase tracking-wide font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
