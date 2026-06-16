'use client'

import { useRef, useState, useCallback } from 'react'
import Image from 'next/image'

// Paint palette placeholder icon (inline SVG, no external dep)
function PaintPalettePlaceholder() {
  return (
    <div className="flex flex-col items-center gap-3">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Palette body */}
        <path
          d="M24 4C13 4 4 13 4 24C4 31 8 37 14 41C17 43 20 44 24 44C27 44 29 42 29 39C29 37.5 28.5 36 28.5 34.5C28.5 32.5 30 31 32 31H36C41 31 44 27 44 22C44 12 35 4 24 4Z"
          fill="#4E443E"
          stroke="#5A4E48"
          strokeWidth="1"
        />
        {/* Paint dabs */}
        <circle cx="14" cy="18" r="3.5" fill="#C4813A" />
        <circle cx="24" cy="10" r="3.5" fill="#F2EDE4" opacity="0.7" />
        <circle cx="34" cy="16" r="3.5" fill="#4A5C4E" />
        <circle cx="36" cy="26" r="3.5" fill="#B8B0A8" />
        {/* Thumb hole */}
        <circle cx="18" cy="33" r="4" fill="#3D3530" />
      </svg>
      <p className="text-[#B8B0A8] text-xs font-sans tracking-wide">Project photo</p>
    </div>
  )
}

interface BeforeAfterSliderProps {
  /**
   * Src for the BEFORE (left) image.
   * Add a src comment in your project config, e.g.: '/images/before-kitchen.jpg'
   */
  beforeSrc?: string
  beforeAlt?: string
  /**
   * Src for the AFTER (right) image.
   * Add a src comment in your project config, e.g.: '/images/after-kitchen.jpg'
   */
  afterSrc?: string
  afterAlt?: string
  title: string
  detail: string
  /** Aspect ratio of the slider. Default 4/3. */
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

  const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max)

  const updateFromClientX = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const { left, width } = containerRef.current.getBoundingClientRect()
    const pct = clamp(((clientX - left) / width) * 100, 2, 98)
    setDividerPct(pct)
  }, [])

  // Mouse
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

  // Touch
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
      {/* ── Slider track ───────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none"
        style={{ aspectRatio, cursor: dragging ? 'ew-resize' : 'col-resize' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        role="img"
        aria-label={`Before and after comparison: ${title}`}
      >
        {/* AFTER layer — full width, clipped from the right */}
        <div className="absolute inset-0 bg-[#4E443E] flex items-center justify-center">
          {afterSrc ? (
            <Image src={afterSrc} alt={afterAlt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
          ) : (
            <PaintPalettePlaceholder />
          )}
        </div>

        {/* BEFORE layer — clipped to dividerPct width */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${dividerPct}%` }}
        >
          <div className="absolute inset-0 bg-[#2A2220] flex items-center justify-center">
            {beforeSrc ? (
              <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 33vw" />
            ) : (
              <PaintPalettePlaceholder />
            )}
          </div>
        </div>

        {/* Divider handle line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-[#C4813A] pointer-events-none"
          style={{ left: `${dividerPct}%`, transform: 'translateX(-50%)' }}
          aria-hidden="true"
        >
          {/* Circle handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#C4813A] flex items-center justify-center shadow-md">
            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
              <path d="M5 6H1M1 6L4 3M1 6L4 9" stroke="#F2EDE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 6H17M17 6L14 3M17 6L14 9" stroke="#F2EDE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Before / After labels */}
        <span className="absolute top-3 left-3 text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 bg-[#3D3530]/80 text-[#B8B0A8] pointer-events-none">
          Before
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 bg-[#C4813A] text-[#F2EDE4] pointer-events-none">
          After
        </span>
      </div>

      {/* ── Caption ─────────────────────────────────────────────────────── */}
      <div className="pt-5 px-1">
        <h3 className="font-serif text-[#F2EDE4] text-lg font-bold leading-snug mb-1">{title}</h3>
        <p className="text-[#B8B0A8] font-sans text-xs tracking-wide">{detail}</p>
      </div>
    </article>
  )
}
