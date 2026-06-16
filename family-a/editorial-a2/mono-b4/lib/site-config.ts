export interface SlideItem {
  src: string
  alt: string
  caption: string
}

export interface ServiceItem {
  icon: string
  title: string
  summary: string
  detail: string
}

export interface StatItem {
  value: string
  label: string
}

export interface TestimonialItem {
  quote: string
  author: string
  location: string
  rating: number
}

export interface TransformationItem {
  before: string
  after: string
  label: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
}

export interface ServiceArea {
  name: string
}

export interface SiteConfig {
  company: string
  tagline: string
  phone: string
  email: string
  address: string
  heroHeadline: string
  heroSubheadline: string
  heroCta: string
  slides: SlideItem[]
  stats: StatItem[]
  services: ServiceItem[]
  testimonials: TestimonialItem[]
  transformations: TransformationItem[]
  process: ProcessStep[]
  serviceAreas: ServiceArea[]
  mapsEmbedSrc: string
  googleReviewsUrl: string
}

export const siteConfig: SiteConfig = {
  company: 'Studio Coat',
  tagline: 'Precision Painting',
  phone: '(312) 555-0182',
  email: 'hello@studiocoat.com',
  address: '240 N. Michigan Ave, Suite 400, Chicago, IL 60601',
  heroHeadline: 'Measured Twice. Painted Once.',
  heroSubheadline:
    'We bring Swiss-grade precision to every residential and commercial project. Zero surprises. Zero shortcuts. Exceptional results — on time, within budget.',
  heroCta: 'Request a Free Estimate',
  slides: [
    {
      src: '',
      alt: 'Crisp white living room interior with floor-to-ceiling finish',
      caption: 'Interior Residential',
    },
    {
      src: '',
      alt: 'Commercial office lobby with precision-coated feature wall',
      caption: 'Commercial Interiors',
    },
    {
      src: '',
      alt: 'Flawless exterior facade on a Chicago brownstone',
      caption: 'Exterior Facades',
    },
    {
      src: '',
      alt: 'Custom cabinetry painted in deep navy with satin finish',
      caption: 'Cabinet & Trim Work',
    },
  ],
  stats: [
    { value: '2,400+', label: 'Projects Completed' },
    { value: '16', label: 'Years in Business' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '48hr', label: 'Estimate Turnaround' },
  ],
  services: [
    {
      icon: 'Interior',
      title: 'Interior Painting',
      summary: 'Wall, ceiling, and trim work with surgical precision.',
      detail:
        'We prep every surface — sanding, priming, caulking — before a single drop of paint touches the wall. Our crews work in structured sequences that minimize disruption and maximize dry-time efficiency. You receive a detailed spec sheet with paint codes, sheen levels, and coat counts for every room.',
    },
    {
      icon: 'Exterior',
      title: 'Exterior Painting',
      summary: 'Weatherproof systems engineered for Midwest climates.',
      detail:
        'From power-washing and rot repair to two-coat premium application, our exterior process follows a strict 14-point checklist. We only schedule exterior work within manufacturer-specified temperature and humidity windows, so the finish bonds correctly and lasts for years — not seasons.',
    },
    {
      icon: 'Cabinet',
      title: 'Cabinet & Millwork Finishing',
      summary: 'Factory-smooth finishes on site.',
      detail:
        'Cabinets are stripped, deglossed, filled, and sprayed with catalyzed lacquer or waterborne enamel using HVLP equipment. Every hinge hole and reveal line is masked before we start. The result is a furniture-grade finish that wears as well as it looks.',
    },
    {
      icon: 'Commercial',
      title: 'Commercial Coatings',
      summary: 'Turnkey painting programs for property managers.',
      detail:
        'Multi-unit buildings, office suites, retail fit-outs — we handle scope, scheduling, and documentation. Our crews are OSHA-10 certified and carry full commercial liability coverage. Detailed progress reports are issued at each phase milestone.',
    },
    {
      icon: 'Wallpaper',
      title: 'Wallcovering Installation',
      summary: 'Pattern-matched installation with zero tolerance for misalignment.',
      detail:
        'We work with paper, vinyl, grasscloth, and specialty textiles. Surfaces are skim-coated and primed before hanging. We document every panel seam and produce a completion record with photos — useful for future maintenance or resale.',
    },
    {
      icon: 'Epoxy',
      title: 'Epoxy & Specialty Coatings',
      summary: 'High-performance surfaces for garages, basements, and industrial spaces.',
      detail:
        'Two-part epoxy systems require meticulous surface prep: shot blasting or diamond grinding, moisture testing, and primer coats. We use low-VOC formulations and comply with all local air-quality regulations. Systems carry a 7-year performance warranty.',
    },
  ],
  testimonials: [
    {
      quote:
        'Studio Coat recoated our entire 18-story office building on schedule. Every spec was documented, every change order was processed in writing. Zero surprises.',
      author: 'Marcus T.',
      location: 'Property Manager, River North',
      rating: 5,
    },
    {
      quote:
        'Three quotes in, Studio Coat was the only contractor who arrived with a written spec sheet. The finish is perfect — they even caught a moisture issue we had no idea about.',
      author: 'Rachel & David S.',
      location: 'Homeowners, Lincoln Park',
      rating: 5,
    },
    {
      quote:
        'Our cabinets look like they came from the factory. The crew masked every piece of hardware, laid paper across the counters, and left the kitchen cleaner than they found it.',
      author: 'Priya N.',
      location: 'Restaurant Owner, West Loop',
      rating: 5,
    },
    {
      quote:
        'They repainted our brownstone exterior in October — a narrow weather window. Finished in four days, no callbacks. Exactly what a serious contractor looks like.',
      author: 'James O.',
      location: 'Homeowner, Wicker Park',
      rating: 5,
    },
  ],
  transformations: [
    { before: '', after: '', label: 'Victorian Foyer — Plaster Repair & Repaint' },
    { before: '', after: '', label: 'Kitchen Cabinets — Strip, Fill & Enamel' },
    { before: '', after: '', label: 'Exterior Brownstone — Full System Replacement' },
    { before: '', after: '', label: 'Commercial Lobby — Feature Wall Coating' },
  ],
  process: [
    {
      number: '01',
      title: 'Site Assessment',
      description:
        'We inspect the space in person, document surface conditions, and photograph any existing defects. No estimates are issued without a physical walkthrough.',
    },
    {
      number: '02',
      title: 'Written Proposal',
      description:
        'You receive a line-item proposal within 48 hours: surface prep method, primer specification, paint brand and sheen, number of coats, and total investment.',
    },
    {
      number: '03',
      title: 'Surface Preparation',
      description:
        'We clean, sand, fill, and prime every surface before opening a single can of topcoat. Preparation is 70% of the result — we never skip it.',
    },
    {
      number: '04',
      title: 'Application & Inspection',
      description:
        'Each coat is applied to spec, allowed to cure fully, then inspected under raking light before the next coat begins. Defects are corrected immediately.',
    },
    {
      number: '05',
      title: 'Final Walkthrough',
      description:
        'You walk every room with our lead painter. Any item not meeting our quality standard is corrected on the spot — not scheduled for later.',
    },
    {
      number: '06',
      title: 'Documentation & Warranty',
      description:
        'You receive a project completion packet with all paint codes, sheen levels, coat counts, and our written warranty. Your records are always current.',
    },
  ],
  serviceAreas: [
    { name: 'Chicago, IL' },
    { name: 'Evanston, IL' },
    { name: 'Oak Park, IL' },
    { name: 'Naperville, IL' },
    { name: 'Schaumburg, IL' },
    { name: 'Wilmette, IL' },
    { name: 'Hinsdale, IL' },
    { name: 'Downers Grove, IL' },
    { name: 'Elmhurst, IL' },
    { name: 'Park Ridge, IL' },
    { name: 'Skokie, IL' },
    { name: 'Berwyn, IL' },
  ],
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190185.98948655607!2d-88.0714872!3d41.8336479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus!4v1700000000000',
  googleReviewsUrl: 'https://www.google.com/search?q=studio+coat+painting+chicago+reviews',
}
