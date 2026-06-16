import { siteConfig } from '@/lib/site-config'
import { IconStar } from '@/components/Icons'

export default function ProofSection() {
  return (
    <section
      id="proof"
      className="bg-surface"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
                Client Testimony
              </span>
            </span>
            <h2
              id="proof-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              What Our Clients Say
            </h2>
          </div>
          <a
            href={siteConfig.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground border-2 border-foreground px-5 py-2.5 hover:bg-[#FFD400] transition-colors shrink-0"
          >
            All Google Reviews
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        {/* Massive Anton stat numerals */}
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-foreground border-t-2 border-b-2 border-foreground mb-16">
          {siteConfig.stats.map((stat, i) => (
            <div key={i} className="px-6 md:px-10 py-10 flex flex-col">
              <p className="font-heading text-[clamp(3rem,7vw,5rem)] uppercase text-foreground leading-none mb-1" aria-label={`${stat.value} ${stat.label}`}>
                {stat.value}
              </p>
              <p className="font-sans text-xs text-[#555555] uppercase tracking-widest font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground border-2 border-foreground">
          {siteConfig.testimonials.map((t, i) => (
            <article
              key={i}
              className="bg-background p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-5" aria-label={`Rating: ${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, si) => (
                  <IconStar key={si} size={14} />
                ))}
              </div>
              <blockquote className="font-sans text-sm leading-relaxed text-foreground flex-1 mb-6 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer>
                <p className="font-sans text-sm font-semibold text-foreground">{t.author}</p>
                <p className="font-sans text-xs text-[#555555] mt-0.5">{t.location}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
