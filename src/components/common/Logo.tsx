import { cn } from '@/utils/cn'

type LogoProps = {
  compact?: boolean
  className?: string
}

export function Logo({ compact = false, className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2', compact ? 'gap-1.5' : 'gap-2.5', className)}>
      <span
        className={cn(
          'grid shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffb56b_0%,#ff7f50_55%,#f84f01_100%)] shadow-[0_10px_22px_rgba(248,80,1,0.22)]',
          compact ? 'size-8' : 'size-10',
        )}
      >
        <svg className={compact ? 'size-4' : 'size-5'} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3.5v17M3.5 12h17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="m6.7 6.7 10.6 10.6M17.3 6.7 6.7 17.3" stroke="#fff5dd" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className={cn('block font-sans font-black tracking-[-0.03em] text-[#3b3b3b]', compact ? 'text-xl' : 'text-[1.35rem]')}>
          ZappieCare
        </span>
      </span>
    </span>
  )
}
