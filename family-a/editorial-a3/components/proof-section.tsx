import type { StatConfig } from '@/lib/site-config'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ProofSectionProps {
  /**
   * Array of stat configs. Cards with value === null are hidden entirely.
   */
  stats?: StatConfig[]
}

export function ProofSection({ stats = DEFAULT_CONFIG.stats }: ProofSectionProps) {
  // Filter out null-value stats — they must not appear at all
  const visible = stats.filter((s) => s.value !== null)

  if (visible.length === 0) return null

  return (
    <section
      id="proof"
      className="bg-[#F7F7F5] border-y border-[#E0E0DC] py-20 md:py-28"
      aria-label="Social proof statistics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Gallery placard eyebrow */}
        <div className="flex justify-center mb-16">
          <span className="text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5">
            The Numbers
          </span>
        </div>

        {/* Stats grid */}
        <dl
          className="grid grid-cols-2 divide-x divide-y divide-[#E0E0DC] border border-[#E0E0DC]"
          style={{
            gridTemplateColumns: `repeat(${Math.min(visible.length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {visible.map((stat) => (
            <div
              key={stat.label}
              className="px-8 py-12 md:py-16 flex flex-col items-center text-center gap-2 bg-white hover:bg-[#F7F7F5] transition-colors duration-200"
            >
              <dt className="sr-only">{stat.label}</dt>

              {/* Value */}
              <dd className="font-serif font-semibold text-[#111111] text-5xl md:text-6xl xl:text-7xl leading-none">
                {stat.value}
              </dd>

              {/* Label */}
              <p className="text-[10px] font-sans font-medium tracking-[0.28em] uppercase text-[#666662] mt-3">
                {stat.label}
              </p>

              {/* Rating source — gallery-placard badge */}
              {stat.ratingSource && (
                <span className="mt-2 text-[9px] font-sans font-medium tracking-[0.3em] uppercase px-2.5 py-1 border border-[#E0E0DC] text-[#666662]">
                  {stat.ratingSource}
                </span>
              )}

              {/* Vermilion accent rule below value */}
              <div className="w-4 h-px bg-[#D43D2A] mt-2" aria-hidden="true" />
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
