import { useEffect, useId, useRef, useState } from 'react'

import { setBookingIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

export type DropdownItem = {
  label: string
  href: string
  bookingIntent?: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder'
}

type Props = {
  label: string
  items: readonly DropdownItem[]
  leadingIcon?: React.ReactNode
  className?: string
  buttonClassName?: string
}

export function DropdownMenu({ label, items, leadingIcon, className, buttonClassName }: Props) {
  const [open, setOpen] = useState(false)
  const id = useId()
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onDocDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onDocDown)
    return () => document.removeEventListener('mousedown', onDocDown)
  }, [])

  return (
    <div ref={rootRef} className={cn('relative', className)}>
      <button
        type="button"
        className={cn(
          'inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-medium text-[#2B3037] transition hover:text-ink [touch-action:manipulation]',
          buttonClassName,
        )}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
      >
        {leadingIcon ? <span className="text-[#2B3037]">{leadingIcon}</span> : null}
        {label}
        <svg
          className={cn('size-4 transition-transform', open && 'rotate-180')}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <div
        id={id}
        className={cn(
          'absolute left-0 top-full z-50 mt-2 min-w-48 rounded-2xl border border-ink/10 bg-white p-2 shadow-lg',
          open ? 'block' : 'hidden',
        )}
        role="menu"
      >
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm font-medium text-ink no-underline hover:bg-cream [touch-action:manipulation]"
            role="menuitem"
            onClick={() => {
              if (item.bookingIntent) setBookingIntent(item.bookingIntent)
              setOpen(false)
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
}

