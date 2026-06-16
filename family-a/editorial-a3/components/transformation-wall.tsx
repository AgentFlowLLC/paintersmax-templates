import { BeforeAfterSlider } from '@/components/before-after-slider'
import type { BeforeAfterProject } from '@/lib/site-config'

const DEFAULT_PROJECTS: BeforeAfterProject[] = [
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-exterior.jpg'
    beforeSrc: '',
    beforeAlt: 'Weathered exterior siding before painting',
    afterSrc: '',
    afterAlt: 'Fresh painted exterior siding after treatment',
    title: 'Elmwood Exterior — Full Repaint',
    detail: 'Benjamin Moore Aura Exterior · 3 coats',
  },
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-kitchen.jpg'
    beforeSrc: '',
    beforeAlt: 'Dark stained wood kitchen cabinets before refinishing',
    afterSrc: '',
    afterAlt: 'Bright white factory-smooth cabinet finish after refinishing',
    title: 'Modern Kitchen Cabinet Refinish',
    detail: '42 doors & drawers · Sprayed lacquer',
  },
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-deck.jpg'
    beforeSrc: '',
    beforeAlt: 'Grey weathered deck before staining',
    afterSrc: '',
    afterAlt: 'Rich warm brown stained deck after treatment',
    title: 'Heritage Oak Deck Restoration',
    detail: '850 sq ft · Cabot Australian Timber Oil',
  },
]

interface TransformationWallProps {
  projects?: BeforeAfterProject[]
}

export function TransformationWall({ projects = DEFAULT_PROJECTS }: TransformationWallProps) {
  return (
    <section
      id="transformations"
      className="bg-[#F7F7F5] py-24 md:py-40"
      aria-labelledby="transformations-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="inline-flex text-[9px] font-sans font-medium tracking-[0.35em] uppercase text-[#666662] border border-[#E0E0DC] px-3 py-1.5 mb-8">
            Before &amp; After
          </span>
          <h2
            id="transformations-heading"
            className="font-serif font-semibold text-[#111111] text-4xl md:text-5xl xl:text-6xl leading-[1.0] text-balance"
          >
            Transformations That Speak for Themselves.
          </h2>
          <div className="mt-6 w-6 h-px bg-[#D43D2A]" aria-hidden="true" />
          <p className="mt-6 text-[#666662] font-sans text-base leading-relaxed">
            Drag the handle to reveal each transformation. Every photograph taken on completion day.
          </p>
        </div>

        {/* Three sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
          {projects.slice(0, 3).map((project) => (
            <BeforeAfterSlider
              key={project.title}
              beforeSrc={project.beforeSrc || undefined}
              beforeAlt={project.beforeAlt}
              afterSrc={project.afterSrc || undefined}
              afterAlt={project.afterAlt}
              title={project.title}
              detail={project.detail}
            />
          ))}
        </div>

        <p className="mt-10 text-[#999994] font-sans text-[10px] tracking-[0.2em] uppercase text-center">
          All photos taken before work commenced and immediately after final walkthrough.
        </p>
      </div>
    </section>
  )
}
