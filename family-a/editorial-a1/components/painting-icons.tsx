// A3 Manor — 1.25px strokes with engraved double-line quality.
// Formal, not playful. Brass (#B08D44) fill accent detail on each.
// 10 icons: BrushIcon, HouseIcon, RollerIcon, CabinetIcon, SprayIcon,
//           DeckIcon, ShieldIcon, StarIcon, ClockIcon, PinIcon

const INK   = '#1F3B2C'   // hunter green strokes
const BRASS = '#B08D44'   // brass fill accent — one per icon

interface IconProps {
  size?: number
  className?: string
}

// 1. BRUSH — diagonal brush with engraved ferrule band, brass bristle-tip fill
export function BrushIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Handle — main stroke */}
      <line x1="36" y1="7" x2="16" y2="36" stroke={INK} strokeWidth="1.25" strokeLinecap="round" />
      {/* Handle — engraved inner parallel line */}
      <line x1="34" y1="9" x2="18" y2="34" stroke={INK} strokeWidth="0.5" strokeLinecap="round" opacity="0.35" />
      {/* Ferrule band — double lines */}
      <line x1="21.5" y1="29" x2="27.5" y2="21" stroke={INK} strokeWidth="1.25" />
      <line x1="23"   y1="30.5" x2="29" y2="22.5" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Bristle wedge */}
      <path d="M16 36 L11 43.5 L18.5 42 L22 29 Z"
        stroke={INK} strokeWidth="1.25" strokeLinejoin="round" fill="none" />
      {/* Inner bristle engraving */}
      <line x1="13" y1="41" x2="18.5" y2="34" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Brass fill — bristle tip */}
      <ellipse cx="12" cy="42.5" rx="2" ry="1.5" fill={BRASS} />
    </svg>
  )
}

// 2. HOUSE — symmetrical elevation with double-line cornice, brass chimney cap
export function HouseIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Roof */}
      <polyline points="5,23 24,7 43,23" stroke={INK} strokeWidth="1.25" strokeLinejoin="round" />
      {/* Cornice double-rule under roof */}
      <line x1="8"  y1="23" x2="40" y2="23" stroke={INK} strokeWidth="1.25" />
      <line x1="8"  y1="25" x2="40" y2="25" stroke={INK} strokeWidth="0.5" opacity="0.5" />
      {/* Walls */}
      <rect x="9" y="25" width="30" height="16" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Door */}
      <path d="M20 41 L20 32 Q24 29 28 32 L28 41 Z"
        stroke={INK} strokeWidth="1" fill="none" />
      {/* Left window — double-pane engraved */}
      <rect x="12" y="28" width="6" height="5"  stroke={INK} strokeWidth="1" fill="none" />
      <line x1="15" y1="28" x2="15" y2="33" stroke={INK} strokeWidth="0.5" opacity="0.5" />
      {/* Right window */}
      <rect x="30" y="28" width="6" height="5" stroke={INK} strokeWidth="1" fill="none" />
      <line x1="33" y1="28" x2="33" y2="33" stroke={INK} strokeWidth="0.5" opacity="0.5" />
      {/* Chimney */}
      <rect x="29" y="10" width="5" height="9" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Brass fill — chimney cap */}
      <rect x="28" y="9" width="7" height="2.5" fill={BRASS} />
    </svg>
  )
}

// 3. ROLLER — classical frame with engraved nap detail, brass paint-drip fill
export function RollerIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Roller frame — L-shape */}
      <polyline points="24,7 24,20 10,20"
        stroke={INK} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handle double-line */}
      <line x1="25.5" y1="7" x2="25.5" y2="20" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Roller tube — outer */}
      <rect x="10" y="16" width="28" height="9" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Roller tube — inner engraved line */}
      <rect x="10" y="17.5" width="28" height="6" stroke={INK} strokeWidth="0.4" fill="none" opacity="0.4" />
      {/* Nap texture stripes */}
      {[15,19,23,27,31,35].map((x) => (
        <line key={x} x1={x} y1="16" x2={x} y2="25"
          stroke={INK} strokeWidth="0.5" opacity="0.35" />
      ))}
      {/* Wall surface lines */}
      <line x1="10" y1="30" x2="38" y2="30" stroke={INK} strokeWidth="0.75" opacity="0.25" />
      <line x1="10" y1="34" x2="32" y2="34" stroke={INK} strokeWidth="0.5" opacity="0.15" />
      {/* Brass fill — paint drip */}
      <ellipse cx="24" cy="28" rx="2" ry="1.5" fill={BRASS} />
    </svg>
  )
}

// 4. CABINET — four-door furniture elevation, brass pull hardware fill
export function CabinetIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer frame */}
      <rect x="6" y="5" width="36" height="38" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Top rail double-line */}
      <line x1="6"  y1="10" x2="42" y2="10" stroke={INK} strokeWidth="1.25" />
      <line x1="6"  y1="11.5" x2="42" y2="11.5" stroke={INK} strokeWidth="0.4" opacity="0.5" />
      {/* Vertical divider */}
      <line x1="24" y1="5"  x2="24" y2="43" stroke={INK} strokeWidth="1.25" />
      {/* Horizontal mid-rail */}
      <line x1="6"  y1="24" x2="42" y2="24" stroke={INK} strokeWidth="1.25" />
      {/* Panel insets — upper */}
      <rect x="9"  y="13" width="12" height="9" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      <rect x="27" y="13" width="12" height="9" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      {/* Panel insets — lower */}
      <rect x="9"  y="27" width="12" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      <rect x="27" y="27" width="12" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      {/* Brass fill — door pull, lower-left */}
      <rect x="18" y="34.5" width="4" height="2" rx="1" fill={BRASS} />
    </svg>
  )
}

// 5. SPRAY — wand with fan rays, brass nozzle-tip fill
export function SprayIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Machine body */}
      <rect x="5" y="27" width="16" height="14" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Body double-rule top */}
      <line x1="5" y1="29.5" x2="21" y2="29.5" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Wheels */}
      <circle cx="10" cy="43" r="2.5" stroke={INK} strokeWidth="1.25" fill="none" />
      <circle cx="18" cy="43" r="2.5" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Hose */}
      <path d="M21 33 Q24 33 26 32" stroke={INK} strokeWidth="1.25" strokeLinecap="round" fill="none" />
      {/* Wand */}
      <line x1="26" y1="32" x2="40" y2="15" stroke={INK} strokeWidth="1.25" strokeLinecap="round" />
      {/* Wand engraved double */}
      <line x1="27.5" y1="31" x2="41" y2="15" stroke={INK} strokeWidth="0.4" opacity="0.4" strokeLinecap="round" />
      {/* Trigger */}
      <line x1="28" y1="27" x2="26" y2="32" stroke={INK} strokeWidth="1.25" strokeLinecap="round" />
      {/* Spray fan — 5 rays */}
      {[[-5,-8],[ 1,-9],[6,-7],[8,-4],[5,-2]].map(([dx,dy],i) => (
        <line key={i} x1="40" y1="15" x2={40+dx} y2={15+dy}
          stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.55" />
      ))}
      {/* Brass fill — nozzle tip */}
      <circle cx="40" cy="15" r="2" fill={BRASS} />
    </svg>
  )
}

// 6. DECK — three planks in perspective with grain, brass stain-brush fill
export function DeckIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Left plank */}
      <path d="M4 39 L4 23 L16 17 L16 33 Z" stroke={INK} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
      {/* Middle plank */}
      <path d="M18 33 L18 17 L30 12 L30 28 Z" stroke={INK} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
      {/* Right plank */}
      <path d="M32 28 L32 12 L44 8 L44 24 Z" stroke={INK} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
      {/* Grain engraving — left */}
      {[25,29,33].map((y) => (
        <line key={y} x1="6" y1={y} x2="14" y2={y-4}
          stroke={INK} strokeWidth="0.5" opacity="0.35" />
      ))}
      {/* Grain engraving — right */}
      {[14,18,22].map((y) => (
        <line key={y} x1="34" y1={y} x2="42" y2={y-3}
          stroke={INK} strokeWidth="0.5" opacity="0.35" />
      ))}
      {/* Brass fill — stain dot on centre plank */}
      <circle cx="24" cy="21" r="2" fill={BRASS} />
    </svg>
  )
}

// 7. SHIELD — heraldic outline with inner double-rule, brass check fill
export function ShieldIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer shield */}
      <path d="M24 5 L41 12 L41 27 C41 36 32 43 24 46 C16 43 7 36 7 27 L7 12 Z"
        stroke={INK} strokeWidth="1.25" fill="none" strokeLinejoin="round" />
      {/* Inner double-rule border */}
      <path d="M24 9 L37.5 15.5 L37.5 27 C37.5 34.5 30 40 24 43 C18 40 10.5 34.5 10.5 27 L10.5 15.5 Z"
        stroke={INK} strokeWidth="0.75" fill="none" opacity="0.35" />
      {/* Check arms — two strokes give engraved weight */}
      <polyline points="17,26 22,31 31,20"
        stroke={INK} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="17,27.2 22,32.2 31,21.2"
        stroke={INK} strokeWidth="0.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
      {/* Brass fill — check apex */}
      <circle cx="31" cy="20" r="2" fill={BRASS} />
    </svg>
  )
}

// 8. STAR — five-pointed with inner pentagon, brass centre fill
export function StarIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer star */}
      <polygon
        points="24,5 28.8,17.5 42,17.5 31.5,25.5 35.3,38 24,30.5 12.7,38 16.5,25.5 6,17.5 19.2,17.5"
        stroke={INK} strokeWidth="1.25" fill="none" strokeLinejoin="round"
      />
      {/* Inner engraved pentagon */}
      <polygon
        points="24,14.5 26.4,21.5 33.5,21.5 27.8,25.8 30,32.5 24,28.5 18,32.5 20.2,25.8 14.5,21.5 21.6,21.5"
        stroke={INK} strokeWidth="0.4" fill="none" opacity="0.35"
      />
      {/* Brass fill — centre */}
      <circle cx="24" cy="24" r="2.5" fill={BRASS} />
    </svg>
  )
}

// 9. CLOCK — double-bordered face with roman-numeral stubs, brass pivot fill
export function ClockIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer ring */}
      <circle cx="24" cy="24" r="19" stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Inner engraved ring */}
      <circle cx="24" cy="24" r="16.5" stroke={INK} strokeWidth="0.4" fill="none" opacity="0.4" />
      {/* Hour ticks — cardinal */}
      <line x1="24" y1="6"  x2="24" y2="11" stroke={INK} strokeWidth="1.25" />
      <line x1="42" y1="24" x2="37" y2="24" stroke={INK} strokeWidth="1.25" />
      <line x1="24" y1="42" x2="24" y2="37" stroke={INK} strokeWidth="1.25" />
      <line x1="6"  y1="24" x2="11" y2="24" stroke={INK} strokeWidth="1.25" />
      {/* Minor ticks — engraved half-weight */}
      {[45,135,225,315].map((deg) => {
        const rad = (deg * Math.PI) / 180
        const x1 = 24 + 19 * Math.cos(rad)
        const y1 = 24 + 19 * Math.sin(rad)
        const x2 = 24 + 16 * Math.cos(rad)
        const y2 = 24 + 16 * Math.sin(rad)
        return <line key={deg} x1={x1} y1={y1} x2={x2} y2={y2} stroke={INK} strokeWidth="0.75" opacity="0.45" />
      })}
      {/* Hour hand */}
      <line x1="24" y1="24" x2="17" y2="14" stroke={INK} strokeWidth="1.25" strokeLinecap="round" />
      {/* Minute hand — engraved double */}
      <line x1="24" y1="24" x2="31" y2="12" stroke={INK} strokeWidth="1.25" strokeLinecap="round" />
      <line x1="25" y1="24" x2="32" y2="12" stroke={INK} strokeWidth="0.4" strokeLinecap="round" opacity="0.4" />
      {/* Brass fill — pivot */}
      <circle cx="24" cy="24" r="2.5" fill={BRASS} />
    </svg>
  )
}

// 10. PIN — teardrop with engraved inner oval, brass centre fill
export function PinIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer teardrop */}
      <path d="M24 4 C15 4 9 10.5 9 19 C9 29 24 45 24 45 C24 45 39 29 39 19 C39 10.5 33 4 24 4 Z"
        stroke={INK} strokeWidth="1.25" fill="none" />
      {/* Inner double-rule oval */}
      <ellipse cx="24" cy="19" rx="8" ry="8" stroke={INK} strokeWidth="1" fill="none" />
      <ellipse cx="24" cy="19" rx="6" ry="6" stroke={INK} strokeWidth="0.4" fill="none" opacity="0.4" />
      {/* Brass fill — centre */}
      <circle cx="24" cy="19" r="2.5" fill={BRASS} />
    </svg>
  )
}
