// lib/site-config.ts
// Central configuration for all customizable values in the Craftline template.
// Pass values from this config to the relevant section components as props.

export type RatingSource = 'Google Rating' | 'Facebook Rating' | 'Customer Rating'

export interface StatConfig {
  /** The display value, e.g. "25+" or "4.9". Set to null to hide this stat card. */
  value: string | null
  label: string
  /** Shown below the label on rating-type stats. Omit for non-rating stats. */
  ratingSource?: RatingSource
}

export interface HeroSlide {
  /** Absolute or relative src for the background image. */
  src: string
  /** Alt text for the slide image. */
  alt: string
  eyebrow?: string
  headline: string
  headlineAccent: string
  body: string
}

export interface BeforeAfterProject {
  /** Src for the before (left-side) image. */
  beforeSrc: string
  beforeAlt: string
  /** Src for the after (right-side) image. */
  afterSrc: string
  afterAlt: string
  title: string
  detail: string
}

export interface ServiceConfig {
  /** Matches the icon key in painting-icons.tsx. */
  iconKey: string
  title: string
  description: string
  details: string[]
  /** Long-form copy revealed by the accordion "Learn More" toggle. */
  expanded: string
}

export interface SiteConfig {
  businessName: string
  tagline: string
  phone: string
  email: string
  city: string
  address?: string

  /** Slides for the hero crossfade slider. */
  heroSlides: HeroSlide[]

  /** Stats shown in the Proof Section. Set value to null to hide a card. */
  stats: StatConfig[]

  /** Cities listed in the Service Areas section. */
  serviceAreas: string[]

  /**
   * Google Maps Embed center parameter, e.g. "Chicago,IL".
   * Used in the mapsCenter query string of the embed iframe.
   */
  mapsCenter: string

  /**
   * Google Maps Embed zoom level (1–21).
   */
  mapsZoom: number

  /** Optional Google Maps Embed API key. If omitted, uses the no-key embed URL. */
  googleMapsKey?: string

  social?: {
    facebook?: string
    instagram?: string
    houzz?: string
    nextdoor?: string
  }
}

export const DEFAULT_CONFIG: SiteConfig = {
  businessName: 'Craftline Painting Co.',
  tagline: 'The Art of Perfect Paint.',
  phone: '(555) 842-0193',
  email: 'hello@craftlinepainting.com',
  city: 'Chicago',

  heroSlides: [
    {
      // Replace src with a real photo path, e.g. '/images/hero-interior.jpg'
      src: '',
      alt: 'Luxury interior living room freshly painted in warm white',
      eyebrow: 'Benjamin Moore Certified · Since 1998',
      headline: 'The Art of',
      headlineAccent: 'Perfect Paint.',
      body: 'Premium interior and exterior painting by certified craftsmen. Every brushstroke considered. Every surface transformed.',
    },
    {
      // Replace src with a real photo path, e.g. '/images/hero-exterior.jpg'
      src: '',
      alt: 'Victorian home exterior freshly painted with crisp trim',
      eyebrow: 'Licensed & Insured · BBB Accredited',
      headline: 'Curb Appeal',
      headlineAccent: 'Elevated.',
      body: 'Weather-resistant finishes that protect and beautify. From prep to final coat — done right the first time.',
    },
    {
      // Replace src with a real photo path, e.g. '/images/hero-cabinets.jpg'
      src: '',
      alt: 'Factory-smooth cabinet refinishing transformation',
      eyebrow: '2,400+ Projects Completed',
      headline: 'Crafted for',
      headlineAccent: 'Every Space.',
      body: 'Cabinet refinishing, trim detail, deck staining — the fine work that separates good from exceptional.',
    },
  ],

  stats: [
    { value: '25+', label: 'Years Experience' },
    { value: '2,400+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '4.9', label: 'Average Rating', ratingSource: 'Google Rating' },
  ],

  serviceAreas: [
    'Lincoln Park',
    'Wicker Park',
    'Lakeview',
    'Evanston',
    'Oak Park',
    'River North',
    'Hyde Park',
    'Andersonville',
    'Logan Square',
    'Bucktown',
    'Winnetka',
    'Wilmette',
  ],

  mapsCenter: 'Chicago,IL',
  mapsZoom: 11,

  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
  },
}
