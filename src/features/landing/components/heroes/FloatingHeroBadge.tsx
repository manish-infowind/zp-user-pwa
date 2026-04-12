import type { CSSProperties, ReactNode } from 'react'

import { cn } from '@/utils/cn'

const pillBase =
  'pointer-events-none absolute z-20 inline-flex h-[39px] max-w-[calc(100%-1rem)] items-center justify-center rounded-[63px] border border-white/50 bg-white/25 px-2.5 text-center text-[11px] font-bold text-white shadow-[4px_4px_20px_rgba(0,0,0,0.1)] backdrop-blur-[24px] sm:px-3 sm:text-sm md:text-[20px]'

type FloatingHeroBadgeProps = {
  children: ReactNode
  className?: string
  style?: CSSProperties
}

export function FloatingHeroBadge({ children, className, style }: FloatingHeroBadgeProps) {
  return (
    <span className={cn(pillBase, className)} style={style}>
      {children}
    </span>
  )
}
