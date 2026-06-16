import { siteConfig } from '@/lib/site-config'

export default function ServiceAreasSection() {
  return (
    <section
      id="areas"
      className="bg-surface"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 mb-14">
          <div>
            <span className="inline-flex items-center border-l-4 border-[#FFD400] pl-3 mb-6">
              <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-[#555555]">
                Coverage
              </span>
            </span>
            <h2
              id="areas-heading"
              className="font-heading text-5xl md:text-6xl uppercase text-foreground text-balance leading-[1.0]"
            >
              Where We Work
            </h2>
          </div>
          <div className="flex items-end">
            <p className="font-sans text-base leading-relaxed text-[#555555] max-w-lg text-pretty">
              We operate throughout Chicago and the surrounding metro area. If you don&apos;t see
              your neighborhood listed, call us — we likely service it.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-foreground border-2 border-foreground">
          {/* Map */}
          <div className="overflow-hidden bg-background">
            {siteConfig.mapsEmbedSrc ? (
              <iframe
                src={siteConfig.mapsEmbedSrc}
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map"
                aria-label="Google Maps showing service area"
              />
            ) : (
              <div
                className="w-full h-[420px] flex items-center justify-center bg-[#111111]"
                aria-label="Service area map placeholder"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-[#FFD400] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="10" r="4" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 2 C7.03 2 3 6.03 3 10 C3 16 12 22 12 22 C12 22 21 16 21 10 C21 6.03 16.97 2 12 2 Z" stroke="#000" strokeWidth="2" fill="none" />
                    </svg>
                  </div>
                  <p className="font-sans text-sm font-medium text-white/50">
                    Map unavailable
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Area list */}
          <div className="bg-background p-8 lg:p-10">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#555555] mb-6 border-b-2 border-[#FFD400] pb-3 inline-block">
              Service Locations
            </p>
            <ul className="grid grid-cols-2 gap-3" role="list">
              {siteConfig.serviceAreas.map((area, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-sans text-sm text-foreground"
                >
                  <span className="w-6 h-6 bg-[#FFD400] flex items-center justify-center shrink-0">
                    <span className="font-sans text-[9px] font-bold text-foreground leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </span>
                  {area.name}
                </li>
              ))}
            </ul>
            <p className="font-sans text-xs text-[#555555] mt-8 text-pretty">
              Free on-site estimates throughout the metro area. Travel time is never
              charged within our standard service radius.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
