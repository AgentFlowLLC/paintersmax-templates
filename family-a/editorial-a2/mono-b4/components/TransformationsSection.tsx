import { siteConfig } from '@/lib/site-config'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export default function TransformationsSection() {
  return (
    <section
      id="transformations"
      className="bg-background"
      aria-labelledby="transformations-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-16">
          <div>
            <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
                Before &amp; After
              </span>
            </span>
            <h2
              id="transformations-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              The Work Speaks.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base leading-relaxed text-[#555555] max-w-lg text-pretty">
              Drag the handle to compare the surface condition we inherited against the finished
              result. Every image is from an actual project.
            </p>
          </div>
        </div>

        {/* Grid — black border between cells */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground border-2 border-foreground">
          {siteConfig.transformations.map((t, i) => (
            <div key={i} className="flex flex-col bg-background">
              <BeforeAfterSlider before={t.before} after={t.after} label={t.label} />
              <div className="px-5 py-4 border-t-2 border-foreground">
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-foreground leading-snug">
                  {t.label}
                </p>
                <p className="font-sans text-xs text-[#555555] mt-0.5">
                  Project {String(i + 1).padStart(2, '0')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
