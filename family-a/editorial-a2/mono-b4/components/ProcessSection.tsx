import { siteConfig } from '@/lib/site-config'

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="bg-background"
      aria-labelledby="process-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-16">
          <div>
            <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
                How It Works
              </span>
            </span>
            <h2
              id="process-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              The Process
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base leading-relaxed text-[#555555] max-w-lg text-pretty">
              Six structured steps from first contact to final documentation. Every project follows
              this sequence — no exceptions, no shortcuts.
            </p>
          </div>
        </div>

        {/* Steps — strict black grid, yellow element per step */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground border-2 border-foreground">
          {siteConfig.process.map((step, i) => (
            <article
              key={i}
              className="bg-background p-8 lg:p-10 flex flex-col"
            >
              {/* Yellow rule above step number */}
              <div className="h-[3px] bg-[#FFD400] w-12 mb-5" aria-hidden="true" />

              {/* Massive Anton step number */}
              <span
                className="font-heading text-[80px] leading-none text-foreground mb-3 select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <h3 className="font-heading text-2xl uppercase text-foreground mb-3 leading-snug">
                {step.title}
              </h3>

              <p className="font-sans text-sm leading-relaxed text-[#555555] flex-1 text-pretty">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
