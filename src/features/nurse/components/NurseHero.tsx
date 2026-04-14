import { consultNurseHeroCopy } from '../data/nurseData'
import { FloatingHeroBadge } from '@/components/common/FloatingHeroBadge'

type NurseHeroProps = {
  frameSrc: string
  characterSrc: string
  onBookNow: () => void
}

export function NurseHero({ frameSrc, characterSrc, onBookNow }: NurseHeroProps) {
  return (
    <div className="relative mt-0 w-full overflow-hidden rounded-[18px]">
      {/* Container with strict aspect ratio and isolation */}
      <div className="relative aspect-[1200/397] w-full min-h-[200px] max-h-[34vh] overflow-hidden bg-[#E8FAF4]">
        {/* Layer 1: Background Layer */}
        <div className="absolute inset-0 z-0 bg-[#E8FAF4]">
          <img
            src={frameSrc}
            alt=""
            width={1200}
            height={397}
            decoding="async"
            fetchPriority="high"
            className="pointer-events-none h-full w-full select-none object-cover object-center"
            aria-hidden
          />
        </div>
        {/* Layer 2: Main Content Container */}
        <div className="relative z-[2] flex min-h-[inherit] flex-col items-center justify-center gap-3 px-4 pb-3 pt-4 md:flex-row md:items-center md:justify-between md:gap-5 md:px-7 md:pb-4 md:pt-5 lg:px-9">
          
          {/* Visual Side (Left in Desktop) */}
          <div className="relative flex min-h-[150px] items-end justify-center self-stretch md:min-h-0 md:basis-[40%] md:justify-start">
            
            {/* Layer 3: Floating Badges (Constrained to left zone) */}
            <div className="pointer-events-none absolute inset-0 z-[3]">
              <FloatingHeroBadge
                className="left-4 top-4 sm:left-6 sm:top-5 md:left-8 md:top-7"
                style={{ transform: 'rotate(-7deg)' }}
              >
                Certified Nurses
              </FloatingHeroBadge>
              <FloatingHeroBadge
                className="left-[50%] top-4 sm:left-[48%] sm:top-5 md:left-[45%] md:top-7"
                style={{ transform: 'rotate(5deg)' }}
              >
                Home Visits Available
              </FloatingHeroBadge>
              <FloatingHeroBadge
                className="left-4 top-[36%] sm:left-6 sm:top-[34%] md:left-8 md:top-[32%]"
                style={{ transform: 'rotate(4deg)' }}
              >
                Safe & Reliable
              </FloatingHeroBadge>
            </div>

            <img
              src={characterSrc}
              alt=""
              width={380}
              height={420}
              decoding="async"
              fetchPriority="high"
              className="relative z-10 max-w-full h-auto w-auto max-h-[200px] object-contain object-bottom drop-shadow-[0_12px_40px_rgba(0,0,0,0.12)] md:max-h-[220px] lg:max-h-[236px]"
            />
          </div>

          {/* Text/CTA Side (Right in Desktop) */}
          <div className="relative flex w-full flex-col items-center gap-3 pb-1 text-center md:basis-[55%] md:items-end md:gap-4 md:pt-1 md:text-right">
            <div className="flex w-full max-w-[520px] flex-col items-center gap-[clamp(0.65rem,2vw,1.25rem)] md:items-end">
              <h2 className="w-full max-w-[480px] text-center font-sans text-[clamp(0.95rem,4vw,1.85rem)] font-black uppercase leading-[1.2] text-white sm:text-[clamp(1.05rem,2.6vw,2rem)] md:text-right lg:text-[1.85rem]">
                {consultNurseHeroCopy.headline}
              </h2>
              <p className="w-full max-w-[460px] text-center font-sans text-[clamp(0.78rem,3.2vw,0.95rem)] font-bold capitalize leading-[1.3] text-white md:text-right lg:text-[0.95rem]">
                {consultNurseHeroCopy.subheadline}
              </p>
            </div>
            <button
              type="button"
              onClick={onBookNow}
              className="inline-flex min-h-[40px] w-full max-w-[280px] shrink-0 items-center justify-center gap-2.5 rounded-lg bg-[#1F1F1F] px-4 py-2.5 font-sans text-[0.9rem] font-bold capitalize leading-[1.4] text-white shadow-lg transition hover:bg-black sm:w-auto md:max-w-none [touch-action:manipulation]"
            >
              Book Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
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
