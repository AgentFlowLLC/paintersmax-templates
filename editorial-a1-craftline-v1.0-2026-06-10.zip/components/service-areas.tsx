import { LocationPinHouseIcon } from '@/components/painting-icons'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ServiceAreasProps {
  /**
   * List of city/neighborhood names to display.
   * Defaults to the 12 cities in DEFAULT_CONFIG.serviceAreas.
   */
  serviceAreas?: string[]
  /**
   * Center parameter for the Google Maps embed, e.g. "Chicago,IL" or "40.712,-74.006".
   * Injected into the embed URL as the `q` (search/center) parameter.
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
  // Build a no-key embed URL. If you add a googleMapsKey in site-config you can
  // switch to the Maps Embed API URL format instead.
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(mapsCenter)}&z=${mapsZoom}&output=embed`

  return (
    <section
      id="service-areas"
      className="bg-[#EDE7DC] py-24 md:py-32"
      aria-labelledby="service-areas-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — copy + city list */}
          <div>
            <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
              Where We Work
            </p>
            <h2
              id="service-areas-heading"
              className="font-serif text-[#3D3530] text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              Serving the Communities Around Us.
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
            <p className="mt-6 text-[#7A6F68] font-sans text-base leading-relaxed">
              We serve homeowners and businesses within a 50-mile radius of our base. If your neighborhood
              isn&apos;t listed, reach out — we take select projects beyond our primary service area.
            </p>

            {/* City grid */}
            <ul
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#D4CCC2]"
              role="list"
              aria-label="Service area cities"
            >
              {serviceAreas.map((city) => (
                <li
                  key={city}
                  className="bg-[#EDE7DC] flex items-center gap-2.5 px-4 py-3 hover:bg-[#E4DDD2] transition-colors"
                >
                  <LocationPinHouseIcon size={16} />
                  <span className="text-[#3D3530] font-sans text-sm font-medium">{city}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block text-sm font-sans font-semibold tracking-wider uppercase px-8 py-4 bg-[#3D3530] text-[#F2EDE4] hover:bg-[#C4813A] transition-colors"
              >
                Check Your Area
              </a>
            </div>
          </div>

          {/* Right — Google Maps embed */}
          <div className="relative">
            {/* Decorative border frame */}
            <div className="absolute -top-3 -left-3 w-full h-full border border-[#C4813A]/30 pointer-events-none" aria-hidden="true" />

            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <iframe
                title={`Map of our service area centered on ${mapsCenter}`}
                src={mapSrc}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0 grayscale contrast-[1.1] opacity-90"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              {/* Gold tint overlay to match editorial palette */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply"
                style={{ background: 'rgba(196,129,58,0.08)' }}
                aria-hidden="true"
              />
            </div>

            {/* Map caption */}
            <p className="mt-3 text-[#B8B0A8] font-sans text-xs text-right tracking-wide">
              Service area centered on {mapsCenter}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
