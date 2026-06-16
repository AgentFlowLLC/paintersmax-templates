import { PinIcon } from '@/components/painting-icons'
import { DEFAULT_CONFIG } from '@/lib/site-config'

interface ServiceAreasProps {
  serviceAreas?: string[]
  mapsCenter?: string
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
      className="bg-[#EDE4CE] py-24 md:py-40"
      aria-labelledby="areas-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy + city grid */}
          <div>
            <div className="eyebrow-rule w-full max-w-[260px] mb-8">
              <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
                Service Areas
              </span>
            </div>
            <h2
              id="areas-heading"
              className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance"
            >
              Serving the Estates Around Us.
            </h2>
            <div className="flex items-center gap-3 mt-5" aria-hidden="true">
              <div className="w-10 h-px bg-[#B08D44]" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
              <div className="w-10 h-px bg-[#B08D44]" />
            </div>
            <p className="mt-6 text-[#5C6B5E] font-sans italic text-sm md:text-base leading-relaxed">
              We serve homeowners and estates within a 50-mile radius of our principal office.
              If your neighbourhood is not listed, do enquire — we accept select commissions
              beyond our primary area.
            </p>

            {/* City list — engraved rule separated */}
            <ul
              className="mt-10 divide-y divide-[#C8BC9C] border-t border-b border-[#C8BC9C]"
              role="list"
              aria-label="Service area cities"
            >
              {serviceAreas.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-3 py-3 hover:bg-[#F5EFE0] transition-colors duration-150 px-2"
                >
                  <PinIcon size={14} />
                  <span className="text-[#1F3B2C] font-sans text-sm">{city}</span>
                  {/* Brass diamond right-end */}
                  <svg
                    width="5" height="5" viewBox="0 0 5 5"
                    fill="#C8BC9C" className="ml-auto"
                    aria-hidden="true"
                  >
                    <polygon points="2.5,0 5,2.5 2.5,5 0,2.5" />
                  </svg>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a
                href="#contact"
                className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase px-8 py-3.5 border border-[#B08D44] text-[#1F3B2C] hover:bg-[#1F3B2C] hover:text-[#F5EFE0] hover:border-[#1F3B2C] transition-colors duration-200 inline-block"
                style={{ borderRadius: '2px' }}
              >
                Confirm Your Area
              </a>
            </div>
          </div>

          {/* Right — brass-framed map */}
          <div>
            <div className="border border-[#B08D44]" style={{ aspectRatio: '4/3', borderRadius: '2px' }}>
              <iframe
                title={`Map of service area centred on ${mapsCenter}`}
                src={mapSrc}
                width="100%"
                height="100%"
                className="w-full h-full border-0 grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Caption below map */}
            <div className="mt-3 flex items-center gap-3 pt-3 border-t border-[#C8BC9C]">
              <svg width="6" height="6" viewBox="0 0 6 6" fill="#B08D44" aria-hidden="true">
                <polygon points="3,0 6,3 3,6 0,3" />
              </svg>
              <p className="text-[8px] font-sans tracking-[0.32em] uppercase text-[#8A9B8E] italic">
                Service area · {mapsCenter}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
