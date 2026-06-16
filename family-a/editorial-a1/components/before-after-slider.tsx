'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  /**
   * Src for the BEFORE (left) image.
   * Set in lib/site-config.ts, e.g.: '/images/before-exterior.jpg'
   */
  beforeSrc?: string
  beforeAlt?: string
  /**
   * Src for the AFTER (right) image.
   * Set in lib/site-config.ts, e.g.: '/images/after-exterior.jpg'
   */
  afterSrc?: string
  afterAlt?: string
  title: string
  detail: string
  aspectRatio?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt = 'Before — project photograph',
  afterSrc,
  afterAlt = 'After — project photograph',
  title,
  detail,
  aspectRatio = '4/3',
}: BeforeAfterSliderProps) {
  const [dividerPct, setDividerPct] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

  const updateFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    setDividerPct(clamp(((clientX - left) / width) * 100, 2, 98))
  }, [])

  const onMouseDown  = (e: React.MouseEvent)  => { e.preventDefault(); setDragging(true);  updateFromClientX(e.clientX) }
  const onMouseMove  = useCallback((e: React.MouseEvent)  => { if (dragging) updateFromClientX(e.clientX) }, [dragging, updateFromClientX])
  const onMouseUp    = () => setDragging(false)
  const onTouchStart = (e: React.TouchEvent)  => { setDragging(true);  updateFromClientX(e.touches[0].clientX) }
  const onTouchMove  = useCallback((e: React.TouchEvent)  => { if (dragging) updateFromClientX(e.touches[0].clientX) }, [dragging, updateFromClientX])
  const onTouchEnd   = () => setDragging(false)

  return (
    <article className="flex flex-col">

      {/* Frame — 1px brass border, estate photograph quality */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none border border-[#B08D44]"
        style={{ aspectRatio, cursor: dragging ? 'ew-resize' : 'col-resize' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="img"
        aria-label={`Before and after: ${title}`}
      >
        {/* AFTER — full width base layer */}
        <div
          className="absolute inset-0"
          style={{
            /*
             * PLACEHOLDER AFTER — replace afterSrc with a real path.
             * e.g. afterSrc: '/images/after-exterior.jpg'
             */
            background: afterSrc ? undefined : 'linear-gradient(160deg, #EDE4CE 0%, #D9CEBC 100%)',
          }}
        >
          {afterSrc && (
            <Image src={afterSrc} alt={afterAlt} fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw" />
          )}
        </div>

        {/* BEFORE — clipped to dividerPct */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${dividerPct}%` }}>
          <div
            className="absolute inset-0"
            style={{
              /*
               * PLACEHOLDER BEFORE — replace beforeSrc with a real path.
               * e.g. beforeSrc: '/images/before-exterior.jpg'
               */
              background: beforeSrc ? undefined : 'linear-gradient(160deg, #F0E9D8 0%, #E3D9C4 100%)',
            }}
          >
            {beforeSrc && (
              <Image src={beforeSrc} alt={beforeAlt} fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw" />
            )}
          </div>
        </div>

        {/* Divider — 1px hunter-green line with brass handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[#1F3B2C] pointer-events-none"
          style={{ left: `${dividerPct}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          {/* Brass diamond handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#B08D44] bg-[#F5EFE0] flex items-center justify-center"
            style={{ borderRadius: '2px' }}
          >
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true">
              <path d="M4 5H1M1 5L3 2.5M1 5L3 7.5" stroke="#1F3B2C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 5H13M13 5L11 2.5M13 5L11 7.5" stroke="#1F3B2C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Before / After labels — engraved tags */}
        <span
          className="absolute top-3 left-3 text-[8px] font-sans font-semibold tracking-[0.35em] uppercase px-2 py-1 bg-[#F5EFE0]/92 text-[#1F3B2C] pointer-events-none border border-[#C8BC9C]"
          style={{ borderRadius: '2px' }}
        >
          Before
        </span>
        <span
          className="absolute top-3 right-3 text-[8px] font-sans font-semibold tracking-[0.35em] uppercase px-2 py-1 bg-[#1F3B2C] text-[#F5EFE0] pointer-events-none"
          style={{ borderRadius: '2px' }}
        >
          After
        </span>
      </div>

      {/* Caption — stationery style below frame */}
      <div className="pt-4 flex items-start gap-3 border-t border-[#C8BC9C] mt-0.5">
        {/* Brass diamond bullet */}
        <svg width="7" height="7" viewBox="0 0 7 7" fill="#B08D44" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1" aria-hidden="true">
          <polygon points="3.5,0 7,3.5 3.5,7 0,3.5" />
        </svg>
        <div>
          <h3 className="font-serif font-bold text-[#1F3B2C] text-sm leading-snug">
            {title}
          </h3>
          <p className="text-[8px] font-sans tracking-[0.28em] uppercase text-[#8A9B8E] mt-0.5 italic">
            {detail}
          </p>
        </div>
      </div>
    </article>
  )
}
