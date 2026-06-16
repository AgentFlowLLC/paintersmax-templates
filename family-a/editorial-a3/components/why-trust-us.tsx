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
      'Every project is backed by full liability insurance and workers\' compensation. Your home and investment are completely protected from the first consultation to the final walkthrough.',
  },
  {
    Icon: ClockIcon,
    title: 'On Time, Every Time',
    description:
      'We respect your schedule. Our crews arrive when promised, work efficiently without cutting corners, and complete projects within the quoted timeframe — guaranteed.',
  },
  {
    Icon: StarIcon,
    title: 'Benjamin Moore Certified',
    description:
      'As certified Benjamin Moore contractors, we have access to premium paints, technical training, and product warranties unavailable to uncertified applicators.',
  },
  {
    Icon: PinIcon,
    title: 'Locally Rooted, Family Run',
    description:
      'Three generations in the same community. Our reputation is built house by house, referral by referral. We treat your home with the same care we give our own.',
  },
]

export function WhyTrustUs() {
  return (
    <section
      id="why-us"
      className="bg-white py-24 md:py-40"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-28 items-start">

          {/* Left — heading block */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
              Why Choose Us
            </span>
            <h2
              id="why-us-heading"
              className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
            >
              The Atelier Difference.
            </h2>
            <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
            <p className="mt-6 text-[#666662] font-sans text-base leading-relaxed">
              Exceptional painting isn&apos;t just about color selection. It&apos;s about the
              people, the process, and the commitment to quality that runs through every project.
            </p>

            {/* Accreditation placard */}
            <div className="mt-10 inline-flex items-center gap-4 border border-[#E0E0DC] px-5 py-4">
              <div className="w-8 h-8 border border-[#111111] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M7 1L13 3.5V8C13 11.5 10 13.5 7 14.5C4 13.5 1 11.5 1 8V3.5L7 1Z"
                    stroke="#111111" strokeWidth="1" fill="none" />
                  <polyline points="4,7.5 6,9.5 10,5.5" stroke="#D43D2A" strokeWidth="1"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <p className="text-[#111111] text-xs font-sans font-semibold tracking-wide leading-none mb-0.5">
                  A+ Better Business Bureau
                </p>
                <p className="text-[#666662] text-[10px] font-sans tracking-wide">
                  Accredited since 2003
                </p>
              </div>
            </div>
          </div>

          {/* Right — reasons list */}
          <div className="divide-y divide-[#E0E0DC] border-t border-[#E0E0DC]">
            {reasons.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="flex items-start gap-6 md:gap-8 py-10 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  <Icon size={36} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif font-semibold text-[#111111] text-lg md:text-xl leading-snug mb-3 group-hover:text-[#D43D2A] transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-[#666662] font-sans text-sm leading-relaxed">
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
