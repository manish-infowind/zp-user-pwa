import { consultNurseHeroCopy } from '@/features/landing/data/landingData'

import { FloatingHeroBadge } from './FloatingHeroBadge'

type ConsultNurseHeroProps = {
  frameSrc: string
  characterSrc: string
  onBookNow: () => void
}

export function ConsultNurseHero({ frameSrc, characterSrc, onBookNow }: ConsultNurseHeroProps) {
  return (
    <div className="relative mx-auto mt-0 w-full max-w-[1200px] overflow-hidden rounded-[20px]">
      <div className="relative aspect-[1200/397] w-full min-h-[280px]">
        <img
          src={frameSrc}
          alt=""
          width={1200}
          height={397}
          decoding="async"
          fetchPriority="high"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none object-cover object-center"
          aria-hidden
        />
        <div className="relative z-10 grid h-full min-h-[inherit] grid-cols-1 items-end gap-8 px-5 pb-7 pt-9 md:grid-cols-[minmax(240px,0.46fr)_minmax(0,1fr)] md:gap-6 md:px-8 md:pb-9 md:pt-10 lg:grid-cols-[minmax(260px,0.45fr)_minmax(0,1fr)]">
          <div className="relative flex min-h-[200px] w-full items-end justify-center md:min-h-0 md:justify-start md:pl-0">
            <FloatingHeroBadge
              className="left-2 top-4 sm:left-3 sm:top-5 md:left-4 md:top-7"
              style={{ transform: 'rotate(-7deg)' }}
            >
              Certified Nurses
            </FloatingHeroBadge>
            <FloatingHeroBadge
              className="right-2 top-4 left-auto sm:right-3 sm:top-5 md:right-4 md:top-7"
              style={{ transform: 'rotate(5deg)' }}
            >
              Home Visits Available
            </FloatingHeroBadge>
            <FloatingHeroBadge
              className="left-2 top-[36%] sm:left-3 sm:top-[34%] md:left-4 md:top-[32%]"
              style={{ transform: 'rotate(4deg)' }}
            >
              Safe & Reliable
            </FloatingHeroBadge>
            <img
              src={characterSrc}
              alt=""
              width={380}
              height={420}
              decoding="async"
              fetchPriority="high"
              className="relative z-30 !max-w-[min(100%,400px)] h-auto w-auto max-h-[min(320px,46vh)] object-contain object-bottom drop-shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:max-h-[min(100%,340px)]"
            />
          </div>
          <div className="flex w-full flex-col items-end gap-[30px] pb-1 text-right md:max-w-[740px] md:justify-self-end md:pr-2 md:pt-2">
            <div className="flex w-full flex-col items-end gap-[clamp(1.25rem,3vw,2.2rem)]">
              <h2 className="w-full max-w-[740px] text-right font-sans text-[clamp(1.25rem,3.8vw,2.75rem)] font-black uppercase leading-[1.35] text-white lg:text-[44px]">
                {consultNurseHeroCopy.headline}
              </h2>
              <p className="w-full max-w-[600px] text-right font-sans text-[clamp(0.95rem,2.2vw,1.2rem)] font-bold capitalize leading-[1.42] text-white lg:text-[20px]">
                {consultNurseHeroCopy.subheadline}
              </p>
            </div>
            <button
              type="button"
              onClick={onBookNow}
              className="inline-flex min-h-[48px] shrink-0 items-center justify-center gap-3.5 rounded-lg bg-[#1F1F1F] px-6 py-3.5 font-sans text-[18px] font-bold capitalize leading-[1.4] text-white shadow-lg transition hover:bg-black [touch-action:manipulation]"
            >
              Book Now
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 11.9998L4 11.9998" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
