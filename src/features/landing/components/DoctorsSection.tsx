import { consultingSpecialtyCards } from '@/features/landing/data/landingData'
import { setDoctorBrowseIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

function ViewMoreLink() {
  return (
    <a
      href="#booking-results"
      className="group inline-flex items-center gap-2.5 self-center border-b border-[#E4E4E4] pb-2.5 font-sans text-base font-black leading-[1.4] text-[#8D8D8D] no-underline transition-colors hover:text-ink md:self-end [touch-action:manipulation]"
      onClick={() => setDoctorBrowseIntent()}
    >
      VIEW MORE
      <span className="inline-flex h-4 w-[26px] shrink-0 items-center justify-center rounded-full bg-[#8D8D8D] transition-colors group-hover:bg-[#6f6f6f]">
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M4 2L7 5L4 8"
            stroke="white"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  )
}

function ArrowDoctorCtaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 11.9998L4 11.9998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DoctorsSection() {
  return (
    <section
      className="relative w-full min-w-0 scroll-mt-[72px] border-t border-ink/[0.06] bg-[#FFECF8] bg-gradient-to-b from-[#FFECF8] via-[#FFF8FC] to-white px-4 py-10 sm:px-[clamp(1rem,3vw,2rem)] sm:py-16 md:py-20"
      id="doctors"
    >
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-10 flex w-full flex-col gap-6 sm:mb-12 md:min-h-[7rem] md:flex-row md:items-end md:justify-between">
          <div className="relative mx-auto min-w-0 max-w-[42rem] text-center md:mx-0 md:text-left">
            <p className="relative z-10 -mb-1 font-script text-[clamp(1.5rem,3.8vw,2.875rem)] font-normal leading-[1.2] text-[#9D497E] md:-mb-2">
              Meet Your Care Experts
            </p>
            <h2 className="relative z-0 font-display text-[clamp(2rem,5.2vw,3.5rem)] font-bold uppercase leading-[1.15] tracking-normal text-ink">
              Doctor Specialties
            </h2>
          </div>
          <ViewMoreLink />
        </div>

        <div className="scrollbar-none -mx-1 flex gap-4 overflow-x-auto overflow-y-visible px-1 pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
          {consultingSpecialtyCards.map((card) => (
            <article
              key={card.specialtyValue}
              className={cn(
                'flex w-[min(78vw,280px)] shrink-0 flex-col items-stretch rounded-xl border bg-white p-2 shadow-sm md:w-auto',
                card.borderClass,
                card.bgClass,
              )}
            >
              <div className="flex flex-col items-center gap-2.5 px-2.5 pt-3 text-center">
                <p className={cn('font-sans text-base font-medium', card.textClass)}>{card.categoryLabel}</p>
                <p className={cn('font-sans text-2xl font-bold leading-tight sm:text-[30px]', card.textClass)}>
                  {card.specialtyLabel}
                </p>
              </div>
              <div className="relative mt-2 flex min-h-[200px] flex-col items-center justify-end px-1 pb-1">
                <img
                  src={card.image}
                  alt=""
                  className="max-h-[230px] w-auto object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <a
                href="#booking-results"
                className="mt-3 flex items-center justify-center gap-3.5 rounded-lg bg-[#1F1F1F] px-6 py-3.5 font-sans text-lg font-bold capitalize leading-[1.4] text-white no-underline transition-opacity hover:opacity-95 [touch-action:manipulation]"
                onClick={() => setDoctorBrowseIntent(card.specialtyValue)}
              >
                View Doctors
                <ArrowDoctorCtaIcon className="text-white" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
