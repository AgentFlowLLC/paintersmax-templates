'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  /**
   * Src for the BEFORE (left) image.
   * Set in lib/site-config.ts, e.g.: '/images/before-kitchen.jpg'
   */
  beforeSrc?: string
  beforeAlt?: string
  /**
   * Src for the AFTER (right) image.
   * Set in lib/site-config.ts, e.g.: '/images/after-kitchen.jpg'
   */
  afterSrc?: string
  afterAlt?: string
  title: string
  detail: string
  /** Aspect ratio of the slider. Default '4/3'. */
  aspectRatio?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  beforeAlt = 'Before — project photo',
  afterSrc,
  afterAlt = 'After — project photo',
  title,
  detail,
  aspectRatio = '4/3',
}: BeforeAfterSliderProps) {
  const [dividerPct, setDividerPct] = useState(50)
  const [dragging, setDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number, min: number, max: number) =>
    Math.min(Math.max(v, min), max)

  const updateFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    setDividerPct(clamp(((clientX - left) / width) * 100, 2, 98))
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setDragging(true)
    updateFromClientX(e.clientX)
  }
  const onMouseMove = useCallback(
    (e: React.MouseEvent) => { if (dragging) updateFromClientX(e.clientX) },
    [dragging, updateFromClientX]
  )
  const onMouseUp = () => setDragging(false)

  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true)
    updateFromClientX(e.touches[0].clientX)
  }
  const onTouchMove = useCallback(
    (e: React.TouchEvent) => { if (dragging) updateFromClientX(e.touches[0].clientX) },
    [dragging, updateFromClientX]
  )
  const onTouchEnd = () => setDragging(false)

  return (
    <article className="flex flex-col">

      {/* Frame — thin 1px ink border, gallery-hung style */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none border border-[#111111]"
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
        {/* AFTER layer — full width */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            /*
             * PLACEHOLDER AFTER — replace afterSrc with a real path.
             * e.g. afterSrc: '/images/after-exterior.jpg'
             */
            background: afterSrc ? undefined : 'linear-gradient(160deg, #EEEEEA 0%, #E0E0DC 100%)',
          }}
        >
          {afterSrc && (
            <Image
              src={afterSrc}
              alt={afterAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          )}
        </div>

        {/* BEFORE layer — clipped to dividerPct */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${dividerPct}%` }}
        >
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              /*
               * PLACEHOLDER BEFORE — replace beforeSrc with a real path.
               * e.g. beforeSrc: '/images/before-exterior.jpg'
               */
              background: beforeSrc ? undefined : 'linear-gradient(160deg, #F7F7F5 0%, #EBEBEA 100%)',
            }}
          >
            {beforeSrc && (
              <Image
                src={beforeSrc}
                alt={beforeAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            )}
          </div>
        </div>

        {/* Divider — 1px ink line with drag handle */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[#111111] pointer-events-none"
          style={{ left: `${dividerPct}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          {/* Circular handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#111111] bg-white flex items-center justify-center">
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M4 5H1M1 5L3.5 2.5M1 5L3.5 7.5" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5H15M15 5L12.5 2.5M15 5L12.5 7.5" stroke="#111111" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Before / After labels */}
        <span className="absolute top-3 left-3 text-[9px] font-sans font-medium tracking-[0.3em] uppercase px-2 py-1 bg-white/90 text-[#111111] pointer-events-none border border-[#E0E0DC]">
          Before
        </span>
        <span className="absolute top-3 right-3 text-[9px] font-sans font-medium tracking-[0.3em] uppercase px-2 py-1 bg-[#111111] text-white pointer-events-none">
          After
        </span>
      </div>

      {/* Gallery placard caption */}
      <div className="pt-4 border-l border-[#111111] pl-4 mt-1">
        <h3 className="font-serif font-semibold text-[#111111] text-base leading-snug">
          {title}
        </h3>
        <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#666662] mt-1 italic">
          {detail}
        </p>
      </div>
    </article>
  )
}
