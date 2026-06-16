'use client'

import { useRef, useState, useCallback } from 'react'

interface BeforeAfterSliderProps {
  before: string
  after: string
  label: string
}

export default function BeforeAfterSlider({ before, after, label }: BeforeAfterSliderProps) {
  const [split, setSplit] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const calcSplit = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setSplit(Math.max(5, Math.min(95, pct)))
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) calcSplit(e.clientX) }
  const onMouseUp = () => { dragging.current = false }
  const onTouchMove = (e: React.TouchEvent) => { calcSplit(e.touches[0].clientX) }

  /* B4 black-to-gray gradient empty states */
  const placeholderBefore = 'linear-gradient(135deg, #222222 0%, #555555 100%)'
  const placeholderAfter  = 'linear-gradient(135deg, #555555 0%, #999999 100%)'

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onTouchMove={onTouchMove}
      aria-label={`Before and after comparison: ${label}`}
      role="img"
    >
      {/* After (full) */}
      <div className="absolute inset-0">
        {after ? (
          <img src={after} alt={`After: ${label}`} className="w-full h-full object-cover" />
        ) : (
          <div
            className="w-full h-full"
            style={{ background: placeholderAfter }}
            aria-label={`After placeholder: ${label}`}
          />
        )}
        <span className="absolute bottom-3 right-3 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-foreground px-2.5 py-1">
          After
        </span>
      </div>

      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${split}%` }}>
        {before ? (
          <img
            src={before}
            alt={`Before: ${label}`}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${(100 / split) * 100}%`, maxWidth: 'none' }}
          />
        ) : (
          <div
            className="absolute inset-0"
            style={{
              background: placeholderBefore,
              width: `${(100 / split) * 100}%`,
            }}
            aria-label={`Before placeholder: ${label}`}
          />
        )}
        <span className="absolute bottom-3 left-3 font-sans text-[10px] font-bold uppercase tracking-[0.15em] text-foreground bg-[#FFD400] px-2.5 py-1">
          Before
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[#FFD400] z-10 pointer-events-none"
        style={{ left: `${split}%` }}
      />
      {/* Handle — black square with yellow border */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-8 h-8 bg-foreground border-2 border-[#FFD400] flex items-center justify-center pointer-events-none"
        style={{ left: `${split}%` }}
        aria-hidden="true"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M4 2 L1 6 L4 10" stroke="#FFD400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 2 L11 6 L8 10" stroke="#FFD400" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
