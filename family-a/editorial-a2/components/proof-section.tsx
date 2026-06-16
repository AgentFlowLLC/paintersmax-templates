import type { StatConfig } from '@/lib/site-config'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ProofSectionProps {
  /**
   * Array of stat configs. Cards with value === null are hidden entirely.
   * Supports up to 6 stats (renders in a responsive grid).
   */
  stats?: StatConfig[]
}

export function ProofSection({ stats = DEFAULT_CONFIG.stats }: ProofSectionProps) {
  // Filter out null-value stats — they should not appear at all
  const visible = stats.filter((s) => s.value !== null)

  if (visible.length === 0) return null

  return (
    <section
      id="proof"
      className="bg-[#F2EDE4] py-20 md:py-28 border-y border-[#D4CCC2]"
      aria-label="Social proof statistics"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Eyebrow */}
        <div className="text-center mb-12">
          <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold">
            The Numbers Behind the Name
          </p>
        </div>

        {/* Stats grid — auto-cols based on count, max 4 per row */}
        <dl
          className="grid grid-cols-2 gap-px bg-[#D4CCC2]"
          style={{
            gridTemplateColumns: `repeat(${Math.min(visible.length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {visible.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F2EDE4] px-8 py-10 flex flex-col items-center text-center gap-1"
            >
              <dt className="sr-only">{stat.label}</dt>

              {/* Value */}
              <dd className="font-serif text-[#C4813A] text-5xl md:text-6xl font-bold leading-none">
                {stat.value}
              </dd>

              {/* Label */}
              <p className="text-[#3D3530] text-xs tracking-[0.2em] uppercase font-sans font-medium mt-2">
                {stat.label}
              </p>

              {/* Rating source badge — only shown when ratingSource is provided */}
              {stat.ratingSource && (
                <span className="mt-2 text-[10px] font-sans font-semibold tracking-widest uppercase px-2.5 py-1 border border-[#C4813A]/40 text-[#C4813A]">
                  {stat.ratingSource}
                </span>
              )}
            </div>
          ))}
        </dl>

        {/* Bottom divider mark */}
        <div className="mt-12 flex justify-center">
          <div className="w-12 h-0.5 bg-[#D4CCC2]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
