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

type AppBannerSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse'
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
        : null

  if (themedVariant) {
    return (
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className={cn('mx-auto max-w-[1200px] overflow-hidden rounded-[22px] p-4', themedVariant.outerBackground)}>
          <div className={cn('relative min-h-[340px] overflow-hidden rounded-[12px] px-6 py-10 sm:px-10 lg:min-h-[466px] lg:px-10 lg:py-[50px]', themedVariant.innerBackground)}>
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

            <div className="relative z-10 flex min-h-[260px] items-start lg:min-h-[366px]">
              <div className="max-w-[560px]">
                <div className="space-y-2.5">
                  <h2
                    className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold uppercase leading-[1.2]"
                    style={{ color: themedVariant.textColor }}
                  >
                    Smarter Healthcare in Your Pocket
                  </h2>
                  <p
                    className="max-w-[560px] text-[clamp(1rem,2.3vw,1.375rem)] leading-[1.2]"
                    style={{ color: themedVariant.textColor }}
                  >
                    Stay informed and in control. From symptom tracking to personalized care insights
                    everything you need, right on your phone.
                  </p>
                </div>

                <button
                  type="button"
                  className={cn(
                    'mt-10 inline-flex min-h-[62px] items-center justify-center rounded-xl px-[30px] py-5 text-base font-bold leading-[1.4] text-white transition',
                    themedVariant.buttonClassName,
                  )}
                >
                  Download Now
                </button>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block">
              <img
                src={themedVariant.assets.leftPhone}
                alt=""
                aria-hidden
                className="absolute left-[-10px] top-[100px] h-[410px] w-[353px] -rotate-[13.279deg] rounded-[20px] object-cover"
              />
              <img
                src={themedVariant.assets.rightPhone}
                alt=""
                aria-hidden
                className="absolute left-[153px] top-[49px] h-[453px] w-[353px] rotate-[7.039deg] rounded-[20px] object-cover shadow-[-10px_0_20px_rgba(0,0,0,0.25)]"
              />
              <img
                src={themedVariant.assets.sticker}
                alt=""
                aria-hidden
                className="absolute left-[131px] top-[83px] h-[114px] w-[106px] -rotate-[8.265deg] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px] rounded-[22px] bg-[#ECE6F6] p-4">
        <div className="relative min-h-[300px] overflow-hidden rounded-[12px] sm:min-h-[360px] lg:min-h-[466px]">
          <img
            src={appBannerBackgroundSrc}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="relative z-10 flex min-h-[300px] items-start px-6 py-10 sm:min-h-[360px] sm:px-10 sm:py-14 lg:min-h-[466px] lg:px-10 lg:py-[71px]">
            <div className={cn('max-w-[560px]')}>
              <div className="space-y-2.5">
                <h2 className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold uppercase leading-[1.2] text-white">
                  Smarter Healthcare in Your Pocket
                </h2>
                <p className="max-w-[560px] text-[clamp(1rem,2.3vw,1.375rem)] leading-[1.2] text-white">
                  Stay informed and in control. From symptom tracking to personalized care insights
                  everything you need, right on your phone.
                </p>
              </div>

              <button
                type="button"
                className="mt-10 inline-flex min-h-[62px] items-center justify-center rounded-xl bg-[#FC5000] px-[30px] py-5 text-base font-bold leading-[1.4] text-white transition hover:bg-[#e84900]"
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
