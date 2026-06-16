import {
  ShieldIcon,
  ClockBrushIcon,
  StarStrokesIcon,
  LocationPinHouseIcon,
} from '@/components/painting-icons'

const reasons = [
  {
    Icon: ShieldIcon,
    title: 'Fully Licensed & Insured',
    description:
      'Every project is backed by full liability insurance and workers\' compensation. Your home and investment are completely protected from the first consultation to the final walkthrough.',
  },
  {
    Icon: ClockBrushIcon,
    title: 'On Time, Every Time',
    description:
      'We respect your schedule. Our crews arrive when promised, work efficiently without cutting corners, and complete projects within the quoted timeframe — guaranteed.',
  },
  {
    Icon: StarStrokesIcon,
    title: 'Benjamin Moore Certified',
    description:
      'As certified Benjamin Moore contractors, we have access to premium paints, technical training, and product warranties unavailable to uncertified applicators.',
  },
  {
    Icon: LocationPinHouseIcon,
    title: 'Locally Rooted, Family Run',
    description:
      'Three generations in the same community. Our reputation is built house by house, referral by referral. We treat your home with the same care we give our own.',
  },
]

export function WhyTrustUs() {
  return (
    <section
      id="why-us"
      className="bg-[#3D3530] py-24 md:py-32"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading block */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
              Why Choose Us
            </p>
            <h2
              id="why-us-heading"
              className="font-serif text-[#F2EDE4] text-4xl md:text-5xl font-bold leading-tight text-balance"
            >
              The Craftline Difference.
            </h2>
            <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
            <p className="mt-6 text-[#B8B0A8] font-sans text-base leading-relaxed">
              Exceptional painting isn&apos;t just about color selection. It&apos;s about the people,
              the process, and the commitment to quality that runs through every single project.
            </p>

            {/* Trust badge */}
            <div className="mt-10 inline-flex items-center gap-4 p-4 border border-[#C4813A]/30">
              <div className="w-10 h-10 flex items-center justify-center bg-[#C4813A]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 2L18 5v7c0 5-4 8-8 10C6 20 2 17 2 12V5l8-3z" fill="#F2EDE4" />
                </svg>
              </div>
              <div>
                <p className="text-[#F2EDE4] text-sm font-sans font-semibold leading-none mb-0.5">
                  A+ Better Business Bureau
                </p>
                <p className="text-[#B8B0A8] text-xs font-sans">
                  Accredited since 2003
                </p>
              </div>
            </div>
          </div>

          {/* Right — reasons list */}
          <div className="flex flex-col gap-8">
            {reasons.map(({ Icon, title, description }) => (
              <article
                key={title}
                className="flex items-start gap-5 p-6 border border-[#B8B0A8]/15 hover:border-[#C4813A]/40 transition-colors group"
              >
                {/* Icon — 48px, left-aligned */}
                <div className="flex-shrink-0">
                  <Icon size={48} />
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-serif text-[#F2EDE4] text-lg font-bold mb-2 group-hover:text-[#C4813A] transition-colors">
                    {title}
                  </h3>
                  <p className="text-[#B8B0A8] font-sans text-sm leading-relaxed">
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
