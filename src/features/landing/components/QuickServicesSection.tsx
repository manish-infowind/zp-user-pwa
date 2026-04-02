import { landingQuickServices } from '@/features/landing/data/landingData'
import type { LandingQuickService } from '@/features/landing/types'
import { setBookingIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

function cardClasses(variant: LandingQuickService['variant']) {
  switch (variant) {
    case 'home':
      return 'border-mint/25 bg-gradient-to-br from-mint/12 to-white ring-1 ring-mint/20'
    case 'consult':
      return 'border-accent/20 bg-gradient-to-br from-accent/[0.08] to-white ring-1 ring-accent/15'
    case 'lab':
      return 'border-promo/15 bg-gradient-to-br from-promo/[0.08] to-white ring-1 ring-promo/10'
    case 'emergency':
      return 'border-ink/10 bg-gradient-to-br from-ink/[0.04] to-white'
    default:
      return 'border-ink/10 bg-white'
  }
}

export function QuickServicesSection() {
  return (
    <section
      id="offers"
      className="w-full border-b border-ink/[0.04] bg-page px-4 py-8 sm:px-[clamp(1rem,3vw,2rem)] sm:py-10"
      aria-labelledby="quick-services-heading"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="quick-services-heading" className="font-display text-xl font-bold uppercase leading-tight text-ink sm:text-2xl">
              Book what you need in one tap
            </h2>
            <p className="mt-1 text-sm text-muted">Quick shortcuts to the care you need most.</p>
          </div>
          <a
            href="#services"
            className="text-sm font-bold uppercase tracking-wide text-accent no-underline [touch-action:manipulation] hover:underline"
          >
            View more
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingQuickServices.map((item) => (
            <article
              key={item.title}
              className={cn(
                'flex flex-col rounded-2xl border p-5 shadow-[0_10px_32px_rgba(31,31,31,0.06)]',
                cardClasses(item.variant),
              )}
            >
              <h3 className="font-display text-base font-bold uppercase leading-snug text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{item.description}</p>
              <a
                href={item.href}
                onClick={() => {
                  if (item.bookingIntent) setBookingIntent(item.bookingIntent)
                }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent no-underline [touch-action:manipulation] hover:underline"
              >
                {item.ctaLabel}
                <span aria-hidden className="text-lg leading-none">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
