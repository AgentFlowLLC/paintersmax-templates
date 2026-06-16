import type { StatConfig } from '@/lib/site-config'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ProofSectionProps {
  stats?: StatConfig[]
}

export function ProofSection({ stats = DEFAULT_CONFIG.stats }: ProofSectionProps) {
  const visible = stats.filter((s) => s.value !== null)
  if (visible.length === 0) return null

  return (
    <section
      id="proof"
      className="bg-[#1F3B2C] py-20 md:py-28"
      aria-label="Social proof statistics"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 flex flex-col items-center">

        {/* Brass double-rule eyebrow */}
        <div className="eyebrow-rule w-full max-w-xs mb-14">
          <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#B08D44] px-4 whitespace-nowrap">
            The Record
          </span>
        </div>

        {/* Stats grid */}
        <dl
          className="w-full grid grid-cols-2 border border-[#B08D44]/30"
          style={{
            gridTemplateColumns: `repeat(${Math.min(visible.length, 4)}, minmax(0, 1fr))`,
          }}
        >
          {visible.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-8 py-12 md:py-16 flex flex-col items-center text-center gap-2 border-[#B08D44]/20 ${
                i !== visible.length - 1 ? 'border-r' : ''
              }`}
            >
              <dt className="sr-only">{stat.label}</dt>

              {/* Value — large Libre Caslon */}
              <dd className="font-serif font-bold text-[#F5EFE0] text-5xl md:text-6xl xl:text-7xl leading-none">
                {stat.value}
              </dd>

              {/* Brass diamond divider */}
              <div className="flex items-center gap-2 my-2" aria-hidden="true">
                <div className="w-6 h-px bg-[#B08D44]/50" />
                <svg width="6" height="6" viewBox="0 0 6 6" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="3,0 6,3 3,6 0,3" />
                </svg>
                <div className="w-6 h-px bg-[#B08D44]/50" />
              </div>

              {/* Label */}
              <p className="text-[9px] font-sans font-semibold tracking-[0.35em] uppercase text-[#8A9B8E]">
                {stat.label}
              </p>

              {/* Rating source badge */}
              {stat.ratingSource && (
                <span className="mt-1.5 text-[8px] font-sans font-semibold tracking-[0.3em] uppercase px-2.5 py-1 border border-[#B08D44]/40 text-[#B08D44]">
                  {stat.ratingSource}
                </span>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
