import {
  ShieldIcon,
  ClockIcon,
  StarIcon,
  PinIcon,
} from '@/components/painting-icons'

const reasons = [
  {
    Icon: ShieldIcon,
    title: 'Fully Licensed & Insured',
    description:
      'Every engagement is backed by full liability insurance and workers\' compensation. Your home and investment are protected from the first consultation to the final walkthrough.',
  },
  {
    Icon: ClockIcon,
    title: 'On Time, Every Time',
    description:
      'We respect the rhythms of a well-run household. Our crews arrive when promised, work without disruption, and complete projects within the quoted timeframe — guaranteed.',
  },
  {
    Icon: StarIcon,
    title: 'Benjamin Moore Certified',
    description:
      'As certified Benjamin Moore contractors, we have access to premium paints, advanced technical training, and product warranties unavailable to uncertified applicators.',
  },
  {
    Icon: PinIcon,
    title: 'Three Generations, One Community',
    description:
      'Our firm has served the same families — and their children, and their grandchildren — for over a century. Reputation is built house by house, referral by referral.',
  },
]

export function WhyTrustUs() {
  return (
    <section
      id="why-us"
      className="bg-[#F5EFE0] py-24 md:py-40"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-28 items-start">

          {/* Left — sticky heading block */}
          <div className="lg:sticky lg:top-28">
            <div className="eyebrow-rule w-full max-w-[260px] mb-8">
              <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
                Why Choose Us
              </span>
            </div>
            <h2
              id="why-us-heading"
              className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance"
            >
              The Manor Difference.
            </h2>
            <div className="flex items-center gap-3 mt-5" aria-hidden="true">
              <div className="w-10 h-px bg-[#B08D44]" />
              <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
                <polygon points="4,0 8,4 4,8 0,4" />
              </svg>
              <div className="w-10 h-px bg-[#B08D44]" />
            </div>
            <p className="mt-6 text-[#5C6B5E] font-sans italic text-sm md:text-base leading-relaxed">
              Exceptional painting is not merely colour selection. It is the people, the
              process, and a standard of care passed down across three generations.
            </p>

            {/* Accreditation seal */}
            <div className="mt-10 inline-flex items-center gap-4 border border-[#C8BC9C] px-5 py-4" style={{ borderRadius: '2px' }}>
              <div
                className="w-8 h-8 border border-[#B08D44] flex items-center justify-center flex-shrink-0"
                style={{ borderRadius: '2px' }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1L13 3.5V8C13 11.5 10 13.5 7 14.5C4 13.5 1 11.5 1 8V3.5L7 1Z"
                    stroke="#1F3B2C" strokeWidth="1.25" fill="none" />
                  <polyline points="4,7.5 6,9.5 10,5.5"
                    stroke="#B08D44" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[#1F3B2C] text-xs font-sans font-semibold tracking-wide leading-none mb-0.5">
                  A+ Better Business Bureau
                </p>
                <p className="text-[#8A9B8E] text-[10px] font-sans tracking-wide italic">
                  Accredited since 2003
                </p>
              </div>
            </div>
          </div>

          {/* Right — reasons */}
          <div className="divide-y divide-[#C8BC9C] border-t border-[#C8BC9C]">
            {reasons.map(({ Icon, title, description }) => (
              <article key={title} className="flex items-start gap-6 md:gap-8 py-10 group">
                <div className="flex-shrink-0 mt-0.5">
                  <Icon size={36} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-[#1F3B2C] text-lg md:text-xl leading-snug mb-3 group-hover:text-[#B08D44] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[#5C6B5E] font-sans text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
