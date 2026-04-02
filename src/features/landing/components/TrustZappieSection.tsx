import { trustIntro, trustPillars } from '@/features/landing/data/landingData'
import { cn } from '@/utils/cn'

function TrustIcon({ type }: { type: 'verified' | 'clock' | 'bolt' | 'rupee' }) {
  const common = 'size-8 text-accent sm:size-9'
  switch (type) {
    case 'verified':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    case 'clock':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    case 'bolt':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 14.25 2.25 12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
        </svg>
      )
    case 'rupee':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-7.5 5.25H8.25M6 3.75v16.5" />
        </svg>
      )
    default:
      return null
  }
}

const trustIcons = ['verified', 'clock', 'bolt', 'rupee'] as const

export function TrustZappieSection({ className }: { className?: string }) {
  return (
    <section
      className={cn('w-full bg-page px-4 py-8 sm:px-[clamp(1rem,3vw,2rem)] sm:py-10', className)}
      aria-labelledby="trust-zappie-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="rounded-2xl border border-ink/[0.06] bg-white px-4 py-6 shadow-sm sm:px-8 sm:py-8">
          <h2 id="trust-zappie-heading" className="font-display text-lg font-bold uppercase leading-tight text-ink sm:text-xl">
            Why TRUST ZappieCare?
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{trustIntro}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {trustPillars.map((pillar, i) => (
              <div key={pillar.label} className="flex flex-col items-center text-center">
                <TrustIcon type={trustIcons[i]} />
                <p className="mt-2 text-[11px] font-bold leading-tight text-ink sm:text-xs">
                  {pillar.label}
                  <br />
                  <span className="font-semibold text-muted">{pillar.sublabel}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
