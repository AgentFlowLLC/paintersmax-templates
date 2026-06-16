// Custom illustrated SVG icons for Craftline Painting Co.
// Editorial illustration style — Benjamin Moore A2

const GOLD = '#C4813A'
const DARK = '#3D3530'
const CREAM = '#F2EDE4'
const MUTED = '#B8B0A8'

interface IconProps {
  size?: number
  className?: string
}

// 1. PAINT BRUSH
export function PaintBrushIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Wooden handle */}
      <rect
        x="30"
        y="4"
        width="9"
        height="22"
        rx="2"
        fill={DARK}
      />
      {/* Wood grain lines */}
      <line x1="32" y1="7" x2="37" y2="7" stroke="#5A4E48" strokeWidth="0.6" />
      <line x1="32" y1="10" x2="37" y2="10" stroke="#5A4E48" strokeWidth="0.6" />
      <line x1="32" y1="13" x2="37" y2="13" stroke="#5A4E48" strokeWidth="0.6" />
      {/* Gold ferrule band */}
      <rect x="29" y="24" width="11" height="5" rx="1" fill={GOLD} />
      <rect x="29.5" y="25.5" width="10" height="1" fill="#D4933F" opacity="0.5" />
      {/* Bristles — fanning out at angle */}
      <path
        d="M30 29 Q25 34 14 43 Q12 44 11 43 Q10 41 12 39 Q21 28 28 26 Z"
        fill={MUTED}
      />
      {/* Bristle tip highlight */}
      <path
        d="M14 43 Q12 44 11 43 Q10 41 12 39 L16 40 Z"
        fill={CREAM}
      />
      {/* Bristle separation lines */}
      <line x1="26" y1="29" x2="15" y2="41" stroke={DARK} strokeWidth="0.4" opacity="0.4" />
      <line x1="24" y1="30" x2="13" y2="42" stroke={DARK} strokeWidth="0.4" opacity="0.4" />
      <line x1="22" y1="31" x2="12" y2="42" stroke={DARK} strokeWidth="0.4" opacity="0.3" />
    </svg>
  )
}

// 2. HOUSE EXTERIOR
export function HouseExteriorIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Clip for left/right split */}
      <defs>
        <clipPath id="left-half">
          <rect x="0" y="0" width="24" height="48" />
        </clipPath>
        <clipPath id="right-half">
          <rect x="24" y="0" width="24" height="48" />
        </clipPath>
      </defs>
      {/* House body — old faded color (left) */}
      <path
        d="M6 22 L6 42 L42 42 L42 22 L24 8 Z"
        fill={MUTED}
        clipPath="url(#left-half)"
      />
      {/* House body — fresh painted (right) */}
      <path
        d="M6 22 L6 42 L42 42 L42 22 L24 8 Z"
        fill={GOLD}
        clipPath="url(#right-half)"
      />
      {/* Roof outline */}
      <path
        d="M4 23 L24 7 L44 23"
        stroke={DARK}
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Roof left side (old) */}
      <path d="M4 23 L24 7 L24 23 Z" fill="#9A9390" clipPath="url(#left-half)" />
      {/* Roof right side (fresh) */}
      <path d="M24 7 L44 23 L24 23 Z" fill="#9A6828" clipPath="url(#right-half)" />
      {/* Door */}
      <rect x="20" y="30" width="8" height="12" rx="1" fill={DARK} />
      <circle cx="27" cy="36" r="0.8" fill={GOLD} />
      {/* Left window (faded) */}
      <rect x="9" y="26" width="8" height="7" rx="0.5" fill={CREAM} opacity="0.5" />
      <line x1="13" y1="26" x2="13" y2="33" stroke={MUTED} strokeWidth="0.6" />
      <line x1="9" y1="29.5" x2="17" y2="29.5" stroke={MUTED} strokeWidth="0.6" />
      {/* Right window (fresh) */}
      <rect x="31" y="26" width="8" height="7" rx="0.5" fill={CREAM} opacity="0.7" />
      <line x1="35" y1="26" x2="35" y2="33" stroke={DARK} strokeWidth="0.6" opacity="0.4" />
      <line x1="31" y1="29.5" x2="39" y2="29.5" stroke={DARK} strokeWidth="0.6" opacity="0.4" />
      {/* Dividing line */}
      <line x1="24" y1="8" x2="24" y2="42" stroke={DARK} strokeWidth="0.5" strokeDasharray="2 1.5" opacity="0.4" />
    </svg>
  )
}

// 3. PAINT ROLLER WITH WALL
export function PaintRollerIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Wall surface with paint stroke behind roller */}
      <rect x="4" y="14" width="40" height="18" rx="1" fill={CREAM} opacity="0.6" />
      {/* Paint stroke texture */}
      <rect x="4" y="14" width="30" height="18" rx="1" fill={GOLD} opacity="0.35" />
      {/* Subtle texture strokes on the painted area */}
      <line x1="6" y1="17" x2="28" y2="17" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      <line x1="6" y1="20" x2="32" y2="20" stroke={GOLD} strokeWidth="1" opacity="0.25" />
      <line x1="6" y1="23" x2="30" y2="23" stroke={GOLD} strokeWidth="1.2" opacity="0.35" />
      <line x1="6" y1="26" x2="31" y2="26" stroke={GOLD} strokeWidth="0.8" opacity="0.2" />
      <line x1="6" y1="29" x2="29" y2="29" stroke={GOLD} strokeWidth="1" opacity="0.3" />
      {/* Roller frame — dark */}
      <path d="M34 8 L34 14" stroke={DARK} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M26 14 L42 14" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      {/* Roller frame arm ends */}
      <path d="M26 14 L26 32" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      <path d="M42 14 L42 32" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      {/* Roller cover — cream */}
      <rect x="24" y="14" width="20" height="18" rx="3" fill={CREAM} />
      <rect x="24" y="14" width="20" height="18" rx="3" stroke={DARK} strokeWidth="1.2" />
      {/* Roller nap texture */}
      <line x1="27" y1="16" x2="27" y2="30" stroke={MUTED} strokeWidth="0.7" opacity="0.6" />
      <line x1="30" y1="16" x2="30" y2="30" stroke={MUTED} strokeWidth="0.7" opacity="0.6" />
      <line x1="33" y1="16" x2="33" y2="30" stroke={MUTED} strokeWidth="0.7" opacity="0.6" />
      <line x1="36" y1="16" x2="36" y2="30" stroke={MUTED} strokeWidth="0.7" opacity="0.6" />
      <line x1="39" y1="16" x2="39" y2="30" stroke={MUTED} strokeWidth="0.7" opacity="0.6" />
      {/* Handle grip */}
      <rect x="32" y="4" width="4" height="5" rx="1" fill={DARK} />
    </svg>
  )
}

// 4. CABINET DOOR (before/after)
export function CabinetDoorIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="cab-left">
          <rect x="0" y="0" width="24" height="48" />
        </clipPath>
        <clipPath id="cab-right">
          <rect x="24" y="0" width="24" height="48" />
        </clipPath>
      </defs>
      {/* Cabinet door frame */}
      <rect x="6" y="4" width="36" height="40" rx="2" fill={CREAM} stroke={DARK} strokeWidth="1.2" />
      {/* Wood grain — left half */}
      <rect x="6" y="4" width="18" height="40" rx="2" fill="#C8B89A" clipPath="url(#cab-left)" />
      <line x1="8" y1="8" x2="8" y2="42" stroke="#A89070" strokeWidth="0.6" opacity="0.5" />
      <line x1="11" y1="6" x2="11" y2="44" stroke="#A89070" strokeWidth="0.4" opacity="0.4" />
      <line x1="14" y1="5" x2="14" y2="43" stroke="#A89070" strokeWidth="0.6" opacity="0.5" />
      <line x1="17" y1="7" x2="17" y2="44" stroke="#A89070" strokeWidth="0.4" opacity="0.3" />
      <line x1="20" y1="6" x2="20" y2="43" stroke="#A89070" strokeWidth="0.5" opacity="0.4" />
      {/* Painted smooth — right half */}
      <rect x="24" y="4" width="18" height="40" rx="2" fill={CREAM} clipPath="url(#cab-right)" />
      {/* Raised panel inset */}
      <rect x="9" y="9" width="15" height="30" rx="1" fill="none" stroke="#A89070" strokeWidth="0.8" clipPath="url(#cab-left)" />
      <rect x="24" y="9" width="15" height="30" rx="1" fill="none" stroke={DARK} strokeWidth="0.8" opacity="0.25" clipPath="url(#cab-right)" />
      {/* Center divide */}
      <line x1="24" y1="5" x2="24" y2="43" stroke={DARK} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.35" />
      {/* Cabinet knob */}
      <circle cx="30" cy="24" r="2.5" fill={GOLD} stroke={DARK} strokeWidth="0.8" />
      <circle cx="30" cy="24" r="1" fill="#D4933F" />
    </svg>
  )
}

// 5. PRESSURE WASHER
export function PressureWasherIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Machine body */}
      <rect x="4" y="28" width="18" height="14" rx="2.5" fill={DARK} />
      <rect x="6" y="30" width="14" height="10" rx="1.5" fill="#4E443E" />
      {/* Wheels */}
      <circle cx="8" cy="42" r="3" fill={DARK} stroke={MUTED} strokeWidth="1" />
      <circle cx="18" cy="42" r="3" fill={DARK} stroke={MUTED} strokeWidth="1" />
      {/* Hose connector */}
      <rect x="20" y="32" width="5" height="4" rx="1" fill={GOLD} />
      {/* Wand / lance — angled */}
      <line x1="25" y1="34" x2="40" y2="16" stroke={DARK} strokeWidth="3" strokeLinecap="round" />
      {/* Handle grip */}
      <rect x="22" y="20" width="10" height="4" rx="1.5" fill={DARK} transform="rotate(-45 22 20)" />
      {/* Nozzle tip */}
      <polygon points="40,16 43,12 44,14 41,18" fill={GOLD} />
      {/* Water spray — parallel curved fan lines */}
      <path d="M43 12 Q46 8 48 6" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M43 12 Q47 10 48 9" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M43 12 Q47 12 48 12" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.8" />
      <path d="M43 12 Q47 14 47 15" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M43 12 Q46 16 45 17" stroke={CREAM} strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
      {/* Water droplets */}
      <circle cx="46" cy="7" r="0.8" fill={CREAM} opacity="0.7" />
      <circle cx="47" cy="10" r="0.6" fill={CREAM} opacity="0.6" />
      <circle cx="45" cy="5" r="0.5" fill={CREAM} opacity="0.5" />
      {/* Grime/dirt particles scattering */}
      <circle cx="36" cy="18" r="1" fill={MUTED} opacity="0.6" />
      <circle cx="38" cy="20" r="0.7" fill={MUTED} opacity="0.5" />
      <circle cx="34" cy="21" r="0.6" fill="#8A7E78" opacity="0.5" />
    </svg>
  )
}

// 6. DECK BOARDS
export function DeckBoardsIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Three deck planks in slight perspective */}
      {/* Left plank — weathered gray */}
      <path d="M3 38 L3 20 L18 14 L18 32 Z" fill="#9A9390" />
      <path d="M3 38 L3 20 L18 14 L18 32 Z" stroke={DARK} strokeWidth="0.8" />
      {/* Wood grain on weathered plank */}
      <line x1="5" y1="22" x2="16" y2="16" stroke="#7A7370" strokeWidth="0.5" opacity="0.6" />
      <line x1="5" y1="26" x2="16" y2="20" stroke="#7A7370" strokeWidth="0.5" opacity="0.5" />
      <line x1="5" y1="30" x2="16" y2="24" stroke="#7A7370" strokeWidth="0.5" opacity="0.4" />
      <line x1="5" y1="34" x2="16" y2="28" stroke="#7A7370" strokeWidth="0.5" opacity="0.3" />

      {/* Middle plank — partially stained */}
      <path d="M19 32 L19 14 L32 10 L32 28 Z" fill={MUTED} />
      <path d="M19 32 L19 14 L32 10 L32 28 Z" stroke={DARK} strokeWidth="0.8" />
      {/* Fresh stain on right side of middle plank */}
      <path d="M26 11 L32 10 L32 28 L26 30 Z" fill="#A87040" opacity="0.7" />

      {/* Right plank — freshly stained */}
      <path d="M33 28 L33 10 L45 7 L45 25 Z" fill="#A87040" />
      <path d="M33 28 L33 10 L45 7 L45 25 Z" stroke={DARK} strokeWidth="0.8" />
      {/* Grain on stained plank */}
      <line x1="35" y1="12" x2="43" y2="9" stroke="#8A5C2E" strokeWidth="0.5" opacity="0.4" />
      <line x1="35" y1="16" x2="43" y2="13" stroke="#8A5C2E" strokeWidth="0.5" opacity="0.4" />
      <line x1="35" y1="20" x2="43" y2="17" stroke="#8A5C2E" strokeWidth="0.5" opacity="0.3" />

      {/* Small brush applying stain on middle plank */}
      <rect x="22" y="18" width="5" height="1.5" rx="0.5" fill={DARK} transform="rotate(-15 22 18)" />
      <path d="M26 17 Q28 16 29 17 L28 19 Q27 19 26 18 Z" fill={CREAM} />
    </svg>
  )
}

// 7. SHIELD WITH PAINT STROKE
export function ShieldIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Shield body */}
      <path
        d="M24 4 L42 11 L42 26 C42 36 32 43 24 46 C16 43 6 36 6 26 L6 11 Z"
        fill={GOLD}
      />
      {/* Shield inner highlight */}
      <path
        d="M24 7 L39 13 L39 26 C39 34.5 30.5 41 24 43.5 C17.5 41 9 34.5 9 26 L9 13 Z"
        fill="#CC8D40"
        opacity="0.3"
      />
      {/* Shield outline */}
      <path
        d="M24 4 L42 11 L42 26 C42 36 32 43 24 46 C16 43 6 36 6 26 L6 11 Z"
        stroke="#9A6020"
        strokeWidth="1"
        fill="none"
      />
      {/* Bold brushstroke across the shield face */}
      <path
        d="M10 20 Q17 16 24 18 Q31 20 38 17"
        stroke={DARK}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Brushstroke edge variation (natural brush feel) */}
      <path
        d="M10 20 Q17 16 24 18 Q31 20 38 17"
        stroke={DARK}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
        fill="none"
      />
    </svg>
  )
}

// 8. CLOCK WITH PAINT BRUSH HAND
export function ClockBrushIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Clock face */}
      <circle cx="24" cy="24" r="19" fill={CREAM} stroke={DARK} strokeWidth="2" />
      {/* Clock inner ring */}
      <circle cx="24" cy="24" r="16" fill="none" stroke={DARK} strokeWidth="0.6" opacity="0.2" />
      {/* Hour markers — minimal ticks */}
      <line x1="24" y1="6" x2="24" y2="9" stroke={DARK} strokeWidth="1.5" />
      <line x1="42" y1="24" x2="39" y2="24" stroke={DARK} strokeWidth="1.5" />
      <line x1="24" y1="42" x2="24" y2="39" stroke={DARK} strokeWidth="1.5" />
      <line x1="6" y1="24" x2="9" y2="24" stroke={DARK} strokeWidth="1.5" />
      {/* Smaller tick marks */}
      <line x1="36" y1="9.5" x2="34.6" y2="12" stroke={DARK} strokeWidth="0.8" opacity="0.5" />
      <line x1="11.5" y1="11.5" x2="13.5" y2="13.5" stroke={DARK} strokeWidth="0.8" opacity="0.5" />
      <line x1="38.5" y1="36.5" x2="36.5" y2="34.5" stroke={DARK} strokeWidth="0.8" opacity="0.5" />
      <line x1="9.5" y1="36.5" x2="11.5" y2="34.5" stroke={DARK} strokeWidth="0.8" opacity="0.5" />
      {/* Standard hour hand */}
      <line x1="24" y1="24" x2="18" y2="14" stroke={DARK} strokeWidth="2" strokeLinecap="round" />
      {/* Minute hand = paint brush */}
      {/* Brush handle */}
      <rect x="23" y="10" width="2.5" height="10" rx="0.8" fill={DARK} transform="rotate(30 24 24)" />
      {/* Ferrule */}
      <rect x="22.5" y="20" width="3" height="2" rx="0.3" fill={GOLD} transform="rotate(30 24 24)" />
      {/* Bristles */}
      <path
        d="M23 22 L22 27 L24.5 28 L26 22.5 Z"
        fill={MUTED}
        transform="rotate(30 24 24)"
      />
      {/* Bristle tip */}
      <path
        d="M22 27 L21.5 28.5 L24.5 29 L25 28 Z"
        fill={CREAM}
        transform="rotate(30 24 24)"
      />
      {/* Center pin */}
      <circle cx="24" cy="24" r="2" fill={GOLD} />
      <circle cx="24" cy="24" r="1" fill={DARK} />
    </svg>
  )
}

// 9. STAR MADE OF PAINT STROKES
export function StarStrokesIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Each point of the star is a visible paint stroke */}
      {/* Top point */}
      <path
        d="M24 24 Q22 18 21 8 Q22.5 7 24 7 Q25.5 7 26 8 Q25 18 24 24 Z"
        fill={GOLD}
      />
      {/* Top-right point */}
      <path
        d="M24 24 Q30 20 38 14 Q39.5 15.5 40 17 Q40.5 18.5 39 20 Q31 22 24 24 Z"
        fill={GOLD}
      />
      {/* Bottom-right point */}
      <path
        d="M24 24 Q29 30 35 38 Q33.5 39.5 32 40 Q30.5 40.5 29 39 Q25 31 24 24 Z"
        fill={GOLD}
      />
      {/* Bottom-left point */}
      <path
        d="M24 24 Q18 30 13 38 Q11.5 37.5 11 36 Q10.5 34.5 12 33 Q19 29 24 24 Z"
        fill={GOLD}
      />
      {/* Top-left point */}
      <path
        d="M24 24 Q18 20 9 14 Q9 12.5 10 11.5 Q11 10 12.5 10.5 Q20 18 24 24 Z"
        fill={GOLD}
      />
      {/* Brushstroke edge variation — darker streaks on each */}
      <path d="M24 24 Q22.5 18 22 10" stroke="#9A6020" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M24 24 Q30.5 20 37 15" stroke="#9A6020" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M24 24 Q29.5 30.5 34 37" stroke="#9A6020" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M24 24 Q17.5 30 13.5 37" stroke="#9A6020" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      <path d="M24 24 Q18.5 20 11 15" stroke="#9A6020" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" fill="none" />
      {/* Center highlight */}
      <circle cx="24" cy="24" r="3" fill={DARK} />
      <circle cx="24" cy="24" r="1.5" fill={GOLD} />
    </svg>
  )
}

// 10. LOCATION PIN WITH HOUSE
export function LocationPinHouseIcon({ size = 48, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pin body */}
      <path
        d="M24 4 C16 4 10 10.5 10 18.5 C10 27 24 44 24 44 C24 44 38 27 38 18.5 C38 10.5 32 4 24 4 Z"
        fill={GOLD}
      />
      {/* Pin inner circle area */}
      <circle cx="24" cy="19" r="11" fill="#D4933F" />
      <circle cx="24" cy="19" r="10" fill={CREAM} />
      {/* Tiny house inside pin */}
      {/* House walls */}
      <rect x="18" y="21" width="12" height="8" rx="0.5" fill={CREAM} stroke={DARK} strokeWidth="0.8" />
      {/* House roof */}
      <path d="M16 21.5 L24 14 L32 21.5" fill={DARK} stroke={DARK} strokeWidth="0.8" strokeLinejoin="round" />
      {/* Door */}
      <rect x="22" y="24" width="4" height="5" rx="0.3" fill={DARK} opacity="0.7" />
      {/* Window */}
      <rect x="18.5" y="22" width="3" height="2.5" rx="0.3" fill={DARK} opacity="0.5" />
      {/* Pin shadow/tail bottom accent */}
      <path d="M22 42 Q24 46 26 42" stroke="#9A6020" strokeWidth="1" fill="none" opacity="0.4" />
    </svg>
  )
}
