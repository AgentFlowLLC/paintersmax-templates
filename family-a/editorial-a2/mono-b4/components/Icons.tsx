'use client'

interface IconProps {
  className?: string
  size?: number
}

const strokeProps = {
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  strokeWidth: 2,
  fill: 'none',
}

const YELLOW = '#FFD400'

/* Wraps each icon in a yellow rectangle "sticker" background */
function StickerWrap({ size, children }: { size: number; children: React.ReactNode }) {
  const pad = Math.round(size * 0.18)
  const total = size + pad * 2
  return (
    <svg width={total} height={total} viewBox={`0 0 ${total} ${total}`} aria-hidden="true">
      <rect x="0" y="0" width={total} height={total} fill={YELLOW} />
      <g transform={`translate(${pad}, ${pad})`}>{children}</g>
    </svg>
  )
}

export function IconInterior({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" stroke="#000" {...strokeProps} />
          <rect x="7" y="7" width="10" height="10" stroke="#000" {...strokeProps} />
          <line x1="12" y1="3" x2="12" y2="7" stroke="#000" {...strokeProps} />
          <line x1="12" y1="17" x2="12" y2="21" stroke="#000" {...strokeProps} />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconExterior({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <path d="M3 10 L12 3 L21 10 L21 21 L3 21 Z" stroke="#000" {...strokeProps} />
          <rect x="9" y="14" width="6" height="7" stroke="#000" {...strokeProps} />
          <line x1="12" y1="3" x2="12" y2="7" stroke="#000" {...strokeProps} />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconCabinet({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="2" y="4" width="20" height="16" stroke="#000" {...strokeProps} />
          <line x1="2" y1="12" x2="22" y2="12" stroke="#000" {...strokeProps} />
          <circle cx="12" cy="8.5" r="1.5" fill="#000" stroke="none" />
          <circle cx="12" cy="15.5" r="1.5" fill="#000" stroke="none" />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconCommercial({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="3" y="4" width="18" height="17" stroke="#000" {...strokeProps} />
          <line x1="3" y1="8" x2="21" y2="8" stroke="#000" {...strokeProps} />
          <line x1="8" y1="4" x2="8" y2="21" stroke="#000" {...strokeProps} />
          <line x1="16" y1="4" x2="16" y2="21" stroke="#000" {...strokeProps} />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconWallpaper({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="20" stroke="#000" {...strokeProps} />
          <line x1="2" y1="8" x2="22" y2="8" stroke="#000" {...strokeProps} />
          <line x1="2" y1="14" x2="22" y2="14" stroke="#000" {...strokeProps} />
          <line x1="8" y1="2" x2="8" y2="22" stroke="#000" {...strokeProps} />
          <line x1="16" y1="2" x2="16" y2="22" stroke="#000" {...strokeProps} />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconEpoxy({ className, size = 24 }: IconProps) {
  return (
    <span className={className} aria-hidden="true">
      <StickerWrap size={size}>
        <svg width={size} height={size} viewBox="0 0 24 24">
          <rect x="2" y="14" width="20" height="7" stroke="#000" {...strokeProps} />
          <path d="M2 14 Q12 8 22 14" stroke="#000" {...strokeProps} />
          <circle cx="12" cy="6" r="3" stroke="#000" {...strokeProps} />
        </svg>
      </StickerWrap>
    </span>
  )
}

export function IconStar({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2 L14.9 9.3 L22.5 9.3 L16.4 13.9 L18.7 21.3 L12 16.8 L5.3 21.3 L7.6 13.9 L1.5 9.3 L9.1 9.3 Z"
        fill={YELLOW}
        stroke={YELLOW}
        strokeWidth={1}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function IconChevron({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 9 L12 15 L18 9" stroke="currentColor" {...strokeProps} />
    </svg>
  )
}

export function IconPhone({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <rect x="5" y="2" width="14" height="20" rx="0" stroke="currentColor" {...strokeProps} />
      <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconMail({ className, size = 20 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="5" width="20" height="14" stroke="currentColor" {...strokeProps} />
      <path d="M2 5 L12 13 L22 5" stroke="currentColor" {...strokeProps} />
    </svg>
  )
}

const iconMap: Record<string, React.FC<IconProps>> = {
  Interior: IconInterior,
  Exterior: IconExterior,
  Cabinet: IconCabinet,
  Commercial: IconCommercial,
  Wallpaper: IconWallpaper,
  Epoxy: IconEpoxy,
}

export function ServiceIcon({ name, ...props }: IconProps & { name: string }) {
  const Icon = iconMap[name]
  if (!Icon) return null
  return <Icon {...props} />
}
