import { BeforeAfterSlider } from '@/components/before-after-slider'
import type { BeforeAfterProject } from '@/lib/site-config'

const DEFAULT_PROJECTS: BeforeAfterProject[] = [
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-exterior.jpg'
    beforeSrc: '',
    beforeAlt: 'Weathered exterior siding before painting',
    afterSrc: '',
    afterAlt: 'Fresh painted exterior siding after Craftline treatment',
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
    afterAlt: 'Rich warm brown stained deck after Craftline treatment',
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
      className="bg-[#3D3530] py-24 md:py-32"
      aria-labelledby="transformations-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-[#C4813A] text-xs tracking-[0.3em] uppercase font-sans font-semibold mb-4">
            Before &amp; After
          </p>
          <h2
            id="transformations-heading"
            className="font-serif text-[#F2EDE4] text-4xl md:text-5xl font-bold leading-tight text-balance"
          >
            Transformations That Speak for Themselves.
          </h2>
          <div className="mt-5 w-12 h-0.5 bg-[#C4813A]" aria-hidden="true" />
          <p className="mt-6 text-[#B8B0A8] font-sans text-base leading-relaxed">
            Drag the handle left or right to reveal each transformation. Every project photographed on the same day.
          </p>
        </div>

        {/* Three sliders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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

        {/* Bottom note */}
        <p className="mt-10 text-[#7A6F68] font-sans text-xs text-center tracking-wide">
          All photos taken before work commenced and immediately after final walkthrough.
        </p>
      </div>
    </section>
  )
}
