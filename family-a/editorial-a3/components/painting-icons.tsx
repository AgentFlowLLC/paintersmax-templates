// A2 Atelier — ultra-thin 1px stroke icons, no fills, single vermilion dot accent each.
// 10 icons: BrushIcon, HouseIcon, RollerIcon, CabinetIcon, SprayIcon,
//           DeckIcon, ShieldIcon, StarIcon, ClockIcon, PinIcon

const INK = '#111111'
const RED = '#D43D2A'  // vermilion accent — one dot per icon only

interface IconProps {
  size?: number
  className?: string
}

// 1. BRUSH — diagonal brush, single vermilion bristle-tip dot
export function BrushIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Handle */}
      <line x1="36" y1="8" x2="14" y2="38" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Ferrule band */}
      <line x1="20" y1="30" x2="26" y2="22" stroke={INK} strokeWidth="1" />
      {/* Bristle outline — tapered wedge */}
      <path d="M14 38 L10 44 L17 42 L20 30 Z" stroke={INK} strokeWidth="1" strokeLinejoin="round" fill="none" />
      {/* Bristle inner split */}
      <line x1="12" y1="41" x2="17" y2="34" stroke={INK} strokeWidth="0.75" opacity="0.5" />
      {/* Vermilion accent — bristle tip dot */}
      <circle cx="11.5" cy="42.5" r="1.5" fill={RED} />
    </svg>
  )
}

// 2. HOUSE — line drawing, vermilion chimney dot
export function HouseIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Roof */}
      <polyline points="5,22 24,7 43,22" stroke={INK} strokeWidth="1" strokeLinejoin="round" fill="none" />
      {/* Walls */}
      <rect x="10" y="22" width="28" height="18" stroke={INK} strokeWidth="1" fill="none" />
      {/* Door */}
      <rect x="20" y="30" width="8" height="10" stroke={INK} strokeWidth="1" fill="none" />
      {/* Left window */}
      <rect x="13" y="26" width="6" height="5" stroke={INK} strokeWidth="0.75" fill="none" />
      {/* Right window */}
      <rect x="29" y="26" width="6" height="5" stroke={INK} strokeWidth="0.75" fill="none" />
      {/* Chimney */}
      <rect x="30" y="10" width="4" height="8" stroke={INK} strokeWidth="1" fill="none" />
      {/* Vermilion dot — chimney top */}
      <circle cx="32" cy="10" r="1.5" fill={RED} />
    </svg>
  )
}

// 3. ROLLER — frame + roller tube, vermilion paint drip dot
export function RollerIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Roller frame — L-shape */}
      <polyline points="24,8 24,20 10,20" stroke={INK} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      {/* Handle top grip */}
      <line x1="24" y1="8" x2="24" y2="5" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Roller tube */}
      <rect x="10" y="16" width="28" height="9" rx="0" stroke={INK} strokeWidth="1" fill="none" />
      {/* Nap texture lines */}
      <line x1="15" y1="16" x2="15" y2="25" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      <line x1="20" y1="16" x2="20" y2="25" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      <line x1="25" y1="16" x2="25" y2="25" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      <line x1="30" y1="16" x2="30" y2="25" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      <line x1="35" y1="16" x2="35" y2="25" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      {/* Wall surface below */}
      <line x1="10" y1="30" x2="38" y2="30" stroke={INK} strokeWidth="0.75" opacity="0.3" />
      <line x1="10" y1="35" x2="30" y2="35" stroke={INK} strokeWidth="0.75" opacity="0.2" />
      {/* Vermilion dot — paint drip below roller */}
      <circle cx="24" cy="28" r="1.5" fill={RED} />
    </svg>
  )
}

// 4. CABINET — door with panel inset, vermilion knob
export function CabinetIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Outer frame */}
      <rect x="7" y="5" width="34" height="38" stroke={INK} strokeWidth="1" fill="none" />
      {/* Center vertical divider */}
      <line x1="24" y1="5" x2="24" y2="43" stroke={INK} strokeWidth="1" />
      {/* Center horizontal hinge line */}
      <line x1="7" y1="24" x2="41" y2="24" stroke={INK} strokeWidth="1" />
      {/* Panel insets */}
      <rect x="10" y="8" width="11" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      <rect x="27" y="8" width="11" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      <rect x="10" y="27" width="11" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      <rect x="27" y="27" width="11" height="13" stroke={INK} strokeWidth="0.75" fill="none" opacity="0.5" />
      {/* Vermilion knob — lower left door */}
      <circle cx="20" cy="36" r="1.5" fill={RED} />
    </svg>
  )
}

// 5. SPRAY — wand + fan of lines, vermilion nozzle dot
export function SprayIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Machine body */}
      <rect x="5" y="28" width="16" height="13" stroke={INK} strokeWidth="1" fill="none" />
      {/* Wheel circles */}
      <circle cx="9" cy="43" r="2.5" stroke={INK} strokeWidth="1" fill="none" />
      <circle cx="17" cy="43" r="2.5" stroke={INK} strokeWidth="1" fill="none" />
      {/* Hose connector */}
      <line x1="21" y1="33" x2="26" y2="33" stroke={INK} strokeWidth="1" />
      {/* Wand */}
      <line x1="26" y1="33" x2="40" y2="16" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Handle */}
      <line x1="28" y1="28" x2="34" y2="22" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      <line x1="28" y1="28" x2="26" y2="33" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Spray fan lines — 5 rays */}
      <line x1="40" y1="16" x2="45" y2="8"  stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="16" x2="46" y2="13" stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="16" x2="46" y2="17" stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="16" x2="44" y2="21" stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
      <line x1="40" y1="16" x2="43" y2="11" stroke={INK} strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
      {/* Vermilion dot — nozzle tip */}
      <circle cx="40" cy="16" r="1.5" fill={RED} />
    </svg>
  )
}

// 6. DECK — three planks in perspective, vermilion stain-brush dot
export function DeckIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Three planks — drawn as parallelograms */}
      {/* Left plank */}
      <path d="M4 38 L4 22 L16 16 L16 32 Z" stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* Middle plank */}
      <path d="M18 32 L18 16 L30 11 L30 27 Z" stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* Right plank */}
      <path d="M32 27 L32 11 L44 7 L44 23 Z" stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* Grain lines — left plank */}
      <line x1="6" y1="24" x2="14" y2="20" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="6" y1="28" x2="14" y2="24" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="6" y1="32" x2="14" y2="28" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Grain lines — right plank */}
      <line x1="34" y1="13" x2="42" y2="10" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="34" y1="17" x2="42" y2="14" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      <line x1="34" y1="21" x2="42" y2="18" stroke={INK} strokeWidth="0.5" opacity="0.4" />
      {/* Vermilion dot — stain brush on middle plank */}
      <circle cx="24" cy="21" r="1.5" fill={RED} />
    </svg>
  )
}

// 7. SHIELD — outline only, vermilion checkmark dot
export function ShieldIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Shield outline */}
      <path d="M24 5 L41 12 L41 26 C41 35 32 42 24 45 C16 42 7 35 7 26 L7 12 Z"
        stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round" />
      {/* Inner shield */}
      <path d="M24 10 L37 16 L37 26 C37 33 29.5 39 24 41.5 C18.5 39 11 33 11 26 L11 16 Z"
        stroke={INK} strokeWidth="0.75" fill="none" strokeLinejoin="round" opacity="0.4" />
      {/* Check mark */}
      <polyline points="17,25 22,30 31,20" stroke={INK} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {/* Vermilion dot — check apex */}
      <circle cx="31" cy="20" r="1.5" fill={RED} />
    </svg>
  )
}

// 8. STAR — five-pointed outline, vermilion center dot
export function StarIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Five-pointed star outline */}
      <polygon
        points="24,6 28.5,17.5 41,17.5 31,25 34.5,36.5 24,29.5 13.5,36.5 17,25 7,17.5 19.5,17.5"
        stroke={INK} strokeWidth="1" fill="none" strokeLinejoin="round"
      />
      {/* Vermilion center dot */}
      <circle cx="24" cy="24" r="1.5" fill={RED} />
    </svg>
  )
}

// 9. CLOCK — circle with tick marks + hands, vermilion center pivot dot
export function ClockIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Face */}
      <circle cx="24" cy="24" r="18" stroke={INK} strokeWidth="1" fill="none" />
      {/* Hour ticks — 4 cardinal */}
      <line x1="24" y1="7"  x2="24" y2="11" stroke={INK} strokeWidth="1" />
      <line x1="41" y1="24" x2="37" y2="24" stroke={INK} strokeWidth="1" />
      <line x1="24" y1="41" x2="24" y2="37" stroke={INK} strokeWidth="1" />
      <line x1="7"  y1="24" x2="11" y2="24" stroke={INK} strokeWidth="1" />
      {/* Minor ticks */}
      <line x1="35.7" y1="10.3" x2="33.6" y2="12.4" stroke={INK} strokeWidth="0.75" opacity="0.5" />
      <line x1="12.3" y1="10.3" x2="14.4" y2="12.4" stroke={INK} strokeWidth="0.75" opacity="0.5" />
      <line x1="35.7" y1="37.7" x2="33.6" y2="35.6" stroke={INK} strokeWidth="0.75" opacity="0.5" />
      <line x1="12.3" y1="37.7" x2="14.4" y2="35.6" stroke={INK} strokeWidth="0.75" opacity="0.5" />
      {/* Hour hand */}
      <line x1="24" y1="24" x2="17" y2="15" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Minute hand */}
      <line x1="24" y1="24" x2="30" y2="13" stroke={INK} strokeWidth="1" strokeLinecap="round" />
      {/* Vermilion pivot dot */}
      <circle cx="24" cy="24" r="1.5" fill={RED} />
    </svg>
  )
}

// 10. PIN — teardrop with crosshair, vermilion inner circle
export function PinIcon({ size = 48, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none"
      xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Pin outline */}
      <path d="M24 4 C16 4 10 10 10 18 C10 27 24 44 24 44 C24 44 38 27 38 18 C38 10 32 4 24 4 Z"
        stroke={INK} strokeWidth="1" fill="none" />
      {/* Inner circle */}
      <circle cx="24" cy="18" r="6" stroke={INK} strokeWidth="0.75" fill="none" />
      {/* Crosshair */}
      <line x1="24" y1="12" x2="24" y2="24" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      <line x1="18" y1="18" x2="30" y2="18" stroke={INK} strokeWidth="0.75" opacity="0.4" />
      {/* Vermilion center dot */}
      <circle cx="24" cy="18" r="2" fill={RED} />
    </svg>
  )
}
