import { PinIcon } from '@/components/painting-icons'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ServiceAreasProps {
  /**
   * List of city/neighborhood names to display.
   * Defaults to the 12 cities in DEFAULT_CONFIG.serviceAreas.
   */
  serviceAreas?: string[]
  /**
   * Center parameter for the Google Maps embed, e.g. "Chicago,IL".
   */
  mapsCenter?: string
  /**
   * Zoom level for the Google Maps embed (1–21). Default 11.
   */
  mapsZoom?: number
}

export function ServiceAreas({
  serviceAreas = DEFAULT_CONFIG.serviceAreas,
  mapsCenter = DEFAULT_CONFIG.mapsCenter,
  mapsZoom = DEFAULT_CONFIG.mapsZoom,
}: ServiceAreasProps) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapsCenter)}&z=${mapsZoom}&output=embed`

  return (
    <section
      id="areas"
      className="bg-[#F7F7F5] py-24 md:py-40"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy + city grid */}
          <div>
            <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
              Service Areas
            </span>
            <h2
              id="areas-heading"
              className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
            >
              Serving the Communities Around Us.
            </h2>
            <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
            <p className="mt-6 text-[#666662] font-sans text-base leading-relaxed">
              We serve homeowners and businesses within a 50-mile radius of our base.
              If your neighborhood isn&apos;t listed, reach out — we take select projects
              beyond our primary service area.
            </p>

            {/* City grid */}
            <ul
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#E0E0DC] border border-[#E0E0DC]"
              role="list"
              aria-label="Service area cities"
            >
              {serviceAreas.map((city) => (
                <li
                  key={city}
                  className="bg-white flex items-center gap-2.5 px-4 py-3.5 hover:bg-[#F7F7F5] transition-colors duration-150"
                >
                  <PinIcon size={14} />
                  <span className="text-[#111111] font-sans text-sm">{city}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase px-8 py-4 bg-[#111111] text-white hover:bg-[#D43D2A] transition-colors duration-200 inline-block"
              >
                Check Your Area
              </a>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="relative">
            {/* Frame — hung-painting treatment */}
            <div className="border border-[#111111]" style={{ aspectRatio: '4/3' }}>
              <iframe
                title={`Map of service area centered on ${mapsCenter}`}
                src={mapSrc}
                width="100%"
                height="100%"
                className="w-full h-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Gallery placard below map */}
            <div className="mt-3 border-l border-[#111111] pl-4 py-0.5">
              <p className="text-[9px] font-sans tracking-[0.25em] uppercase text-[#666662]">
                Service area · {mapsCenter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
