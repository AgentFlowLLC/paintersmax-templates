import { BeforeAfterSlider } from '@/components/before-after-slider'
import type { BeforeAfterProject } from '@/lib/site-config'

const DEFAULT_PROJECTS: BeforeAfterProject[] = [
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-exterior.jpg'
    beforeSrc: '',
    beforeAlt: 'Weathered manor exterior siding before restoration',
    afterSrc: '',
    afterAlt: 'Restored manor exterior with fresh paint and crisp trim',
    title: 'Elmwood Manor — Full Repaint',
    detail: 'Benjamin Moore Aura Exterior · 3 coats',
  },
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-kitchen.jpg'
    beforeSrc: '',
    beforeAlt: 'Dark stained kitchen cabinetry before refinishing',
    afterSrc: '',
    afterAlt: 'Smooth white cabinetry after professional refinishing',
    title: 'Kitchen Cabinet Restoration',
    detail: '42 doors & drawers · Sprayed lacquer',
  },
  {
    // Replace beforeSrc/afterSrc with real image paths, e.g. '/images/before-deck.jpg'
    beforeSrc: '',
    beforeAlt: 'Grey weathered hardwood deck before staining',
    afterSrc: '',
    afterAlt: 'Rich warm-toned deck after oil stain treatment',
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
      className="bg-[#EDE4CE] py-24 md:py-40"
      aria-labelledby="transformations-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section header — centered */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="eyebrow-rule w-full max-w-xs mb-8">
            <span className="text-[9px] font-sans font-semibold tracking-[0.4em] uppercase text-[#1F3B2C] px-4 whitespace-nowrap">
              Before &amp; After
            </span>
          </div>
          <h2
            id="transformations-heading"
            className="font-serif font-bold text-[#1F3B2C] text-3xl md:text-4xl xl:text-5xl leading-[1.1] text-balance max-w-2xl"
          >
            Three Generations of Transformations.
          </h2>
          <div className="flex items-center gap-3 mt-5" aria-hidden="true">
            <div className="w-10 h-px bg-[#B08D44]" />
            <svg width="8" height="8" viewBox="0 0 8 8" fill="#B08D44" xmlns="http://www.w3.org/2000/svg">
              <polygon points="4,0 8,4 4,8 0,4" />
            </svg>
            <div className="w-10 h-px bg-[#B08D44]" />
          </div>
          <p className="mt-5 text-[#5C6B5E] font-sans italic text-sm md:text-base leading-relaxed max-w-sm">
            Drag the handle to reveal each transformation. Every photograph taken on completion day.
          </p>
        </div>

        {/* Three sliders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
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

        <p className="mt-10 text-[#8A9B8E] font-sans text-[8px] tracking-[0.3em] uppercase text-center italic">
          All photographs taken before work commenced and on the day of final walkthrough.
        </p>
      </div>
    </section>
  )
}
