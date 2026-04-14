import { cn } from '@/utils/cn'

const appBannerBackgroundSrc = `${import.meta.env.BASE_URL}Home-page-card.svg`
const doctorBannerAssets = {
  leftPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/9a15e259d3877b7af99817e10cdd59813c7f0929?width=706',
  rightPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/9c44c1ec77563142202de1d2180c3ee816e84272?width=706',
  sticker: 'https://api.builder.io/api/v1/image/assets/TEMP/af298a50d337a99f6a01f0dfc6438601151068c5?width=212',
} as const
const nurseBannerAssets = {
  leftPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/9a15e259d3877b7af99817e10cdd59813c7f0929?width=706',
  rightPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/9c44c1ec77563142202de1d2180c3ee816e84272?width=706',
  sticker: 'https://api.builder.io/api/v1/image/assets/TEMP/d0459611f0c1f5385f876f2913d641fe19236ac8?width=212',
} as const
const labBannerAssets = {
  leftPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/9a15e259d3877b7af99817e10cdd59813c7f0929?width=706',
  rightPhone: 'https://api.builder.io/api/v1/image/assets/TEMP/fa26f0cd10e9050c23da5624aa63fd5b9552bec1?width=706',
  sticker: 'https://api.builder.io/api/v1/image/assets/TEMP/f96bc7e4b8de5f40fa2037097073c7bb13e5650d?width=212',
} as const

type AppBannerSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse' | 'lab'
}

export function AppBannerSection({ variant = 'default' }: AppBannerSectionProps) {
  const themedVariant =
    variant === 'doctor'
      ? {
          outerBackground: 'bg-[linear-gradient(105deg,#9D497E_7.9%,#FFC7EA_85.72%)]',
          innerBackground: 'bg-[#F8BFE3]',
          textColor: '#9D497E',
          buttonClassName: 'bg-[#9D497E] hover:bg-[#883f6d]',
          assets: doctorBannerAssets,
        }
      : variant === 'nurse'
        ? {
            outerBackground: 'bg-[linear-gradient(105deg,#007954_7.9%,#D9F7EE_85.72%)]',
            innerBackground: 'bg-[#D9F7EE]',
            textColor: '#007954',
            buttonClassName: 'bg-[#007954] hover:bg-[#006247]',
            assets: nurseBannerAssets,
          }
        : variant === 'lab'
          ? {
              outerBackground: 'bg-[linear-gradient(105deg,#B68000_7.9%,#FFF3D8_85.72%)]',
              innerBackground: 'bg-[#FFF3D8]',
              textColor: '#B68000',
              buttonClassName: 'bg-[#B68000] hover:bg-[#9d7000]',
              assets: labBannerAssets,
            }
        : null

  if (themedVariant) {
    return (
      <section className="py-10 sm:py-12">
        <div className={cn('app-container overflow-hidden rounded-[18px] p-2.5', themedVariant.outerBackground)}>
          <div className={cn('relative min-h-[220px] overflow-hidden rounded-[12px] px-4 py-5 sm:px-5 lg:min-h-[280px] lg:px-5 lg:py-6', themedVariant.innerBackground)}>
            <svg
              className="pointer-events-none absolute left-[-172px] top-[-168px] h-[1455px] w-[2322px] opacity-[0.08]"
              viewBox="0 0 2322 1455"
              fill="none"
              aria-hidden
            >
              <path d="M2321.58 1454.02H0V0H2321.58L2321.58 1454.02ZM3.00075 1451.02H2318.58V3.00004H3.00075V1451.02Z" fill="#B3B3B3" />
              {Array.from({ length: 20 }).map((_, index) => (
                <path
                  key={`banner-row-${index}`}
                  d={`M2320.08 ${80 + index * 72.55}H1.5V${83 + index * 72.55}H2320.08V${80 + index * 72.55}Z`}
                  fill="#B3B3B3"
                />
              ))}
              {Array.from({ length: 34 }).map((_, index) => (
                <path
                  key={`banner-col-${index}`}
                  d={`M${73.2617 + index * 70.26} 1.5H${70.2617 + index * 70.26}V1452.52H${73.2617 + index * 70.26}V1.5Z`}
                  fill="#B3B3B3"
                />
              ))}
            </svg>

            <div className="relative z-10 flex min-h-[190px] items-start lg:min-h-[230px]">
              <div className="max-w-[400px]">
                <div className="space-y-2">
                  <h2
                    className="font-display text-[clamp(1.5rem,2.8vw,2.35rem)] font-bold uppercase leading-[1.08]"
                    style={{ color: themedVariant.textColor }}
                  >
                    Smarter Healthcare in Your Pocket
                  </h2>
                  <p
                    className="max-w-[400px] text-[clamp(0.85rem,1.35vw,1rem)] leading-[1.3]"
                    style={{ color: themedVariant.textColor }}
                  >
                    Stay informed and in control. From symptom tracking to personalized care insights
                    everything you need, right on your phone.
                  </p>
                </div>

                <button
                  type="button"
                  className={cn(
                    'mt-6 inline-flex min-h-[46px] items-center justify-center rounded-xl px-5 py-3 text-[0.8125rem] font-bold leading-[1.4] text-white transition',
                    themedVariant.buttonClassName,
                  )}
                >
                  Download Now
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
              <img
                src={themedVariant.assets.leftPhone}
                alt=""
                aria-hidden
                className="absolute left-[8px] top-[64px] h-[236px] w-[202px] -rotate-[13.279deg] rounded-[16px] object-cover"
              />
              <img
                src={themedVariant.assets.rightPhone}
                alt=""
                aria-hidden
                className="absolute left-[96px] top-[28px] h-[268px] w-[210px] rotate-[7.039deg] rounded-[16px] object-cover shadow-[-10px_0_20px_rgba(0,0,0,0.22)]"
              />
              <img
                src={themedVariant.assets.sticker}
                alt=""
                aria-hidden
                className="absolute left-[82px] top-[54px] h-[64px] w-[58px] -rotate-[8.265deg] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-10 sm:py-12">
      <div className="app-container rounded-[18px] bg-[#ECE6F6] p-2.5">
        <div className="relative min-h-[210px] overflow-hidden rounded-[12px] sm:min-h-[260px] lg:min-h-[290px]">
          <img
            src={appBannerBackgroundSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="relative z-10 flex min-h-[210px] items-start px-4 py-5 sm:min-h-[260px] sm:px-5 sm:py-6 lg:min-h-[290px] lg:px-5 lg:py-7">
            <div className={cn('max-w-[400px]')}>
              <div className="space-y-2">
                <h2 className="font-display text-[clamp(1.5rem,2.8vw,2.35rem)] font-bold uppercase leading-[1.08] text-white">
                  Smarter Healthcare in Your Pocket
                </h2>
                <p className="max-w-[400px] text-[clamp(0.85rem,1.35vw,1rem)] leading-[1.3] text-white">
                  Stay informed and in control. From symptom tracking to personalized care insights
                  everything you need, right on your phone.
                </p>
              </div>

              <button
                type="button"
                className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-xl bg-[#FC5000] px-5 py-3 text-[0.8125rem] font-bold leading-[1.4] text-white transition hover:bg-[#e84900]"
              >
                Download Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
