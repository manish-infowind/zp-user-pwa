import { heroPhoneLeft, heroPhoneRight, heroSticker, stats } from '@/features/landing/data/landingData'
import { cn } from '@/utils/cn'

const ctaBase =
  'inline-flex min-h-12 w-full min-w-0 items-center justify-center rounded-[0.85rem] border border-transparent px-4 py-3 text-center text-sm font-bold no-underline transition-[transform,box-shadow,background] duration-200 ease-out sm:min-h-14 sm:w-auto sm:px-6 sm:py-3.5 sm:text-base [touch-action:manipulation]'

export function HeroSection() {
  return (
    <section
      className={cn(
        'hidden w-full min-w-0 grid-cols-1 items-center gap-8 overflow-x-clip md:grid',
        'px-4 pb-12 pt-8 sm:gap-[clamp(2rem,4vw,4rem)] sm:px-[clamp(1rem,3vw,2rem)] sm:pb-16 sm:pt-12',
        'min-h-0 bg-[radial-gradient(circle_at_18%_10%,rgba(240,218,105,0.45),transparent_24%),linear-gradient(180deg,#fffdf8_0%,#fff_100%)]',
        'min-[1101px]:min-h-[calc(100svh-5.5rem)] min-[1101px]:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)]',
      )}
    >
      <div className="min-w-0">
        <p className="mb-2 font-script text-[clamp(1.5rem,5vw,2.9rem)] leading-none text-accent sm:mb-3">
          Smarter Healthcare in Your Pocket
        </p>
        <h1 className="max-w-[14ch] min-[1101px]:max-w-[12ch]">Care that feels personal, fast, and always within reach.</h1>
        <p className="text-muted">
          Stay informed and in control. From symptom tracking to personalized care insights, everything you need lives in
          one bright, friendly healthcare experience.
        </p>

        <div className="mt-6 flex w-full min-w-0 flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="#doctors"
            className={cn(
              ctaBase,
              'bg-accent text-white shadow-[0_18px_32px_rgba(248,80,1,0.2)] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(248,80,1,0.26)] active:translate-y-0',
            )}
          >
            Book Appointment
          </a>
          <a
            href="#services"
            className={cn(
              ctaBase,
              'border-ink/15 bg-white text-ink shadow-none hover:-translate-y-0.5 active:translate-y-0',
            )}
          >
            Explore Services
          </a>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 min-[400px]:grid-cols-3 sm:mt-8 sm:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-ink/[0.08] bg-white/85 p-4 sm:rounded-[1.4rem] sm:p-5"
            >
              <strong className="mb-1 block text-2xl sm:mb-1.5 sm:text-[clamp(1.4rem,4vw,2rem)]">{stat.value}</strong>
              <span className="text-xs text-muted sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-[min(100%,22rem)] min-w-0 justify-center sm:max-w-none min-[1101px]:mx-0 min-[1101px]:grid min-[1101px]:min-h-[44rem] min-[1101px]:place-items-center">
        <div className="pointer-events-none absolute bottom-6 left-1/2 h-48 w-48 -translate-x-[85%] rounded-full bg-[rgba(240,218,105,0.8)] sm:bottom-8 sm:left-4 sm:h-64 sm:w-64 sm:translate-x-0 min-[1101px]:bottom-8 min-[1101px]:left-4 min-[1101px]:h-72 min-[1101px]:w-72" />
        <div className="pointer-events-none absolute right-0 top-8 h-40 w-40 rounded-full bg-[rgba(56,39,89,0.14)] sm:top-12 sm:h-56 sm:w-56 min-[1101px]:h-64 min-[1101px]:w-64" />

        <div className="relative aspect-[4/5] w-full min-h-[18rem] sm:min-h-[26rem] min-[1101px]:aspect-auto min-[1101px]:min-h-[44rem]">
          <img
            className="absolute bottom-2 left-0 w-[46%] max-w-[9.5rem] rounded-t-3xl object-cover shadow-lg -rotate-[13deg] sm:bottom-4 sm:left-2 sm:w-[min(18rem,42vw)] sm:max-w-none sm:rounded-t-[1.8rem] min-[1101px]:max-w-none"
            src={heroPhoneLeft}
            alt="ZappiCare mobile health dashboard"
            width={323}
            height={580}
            loading="eager"
            decoding="async"
          />
          <img
            className="absolute bottom-4 right-0 w-[46%] max-w-[9.5rem] rounded-t-3xl object-cover shadow-[-8px_14px_28px_rgba(0,0,0,0.15)] rotate-[8deg] sm:bottom-8 sm:right-8 sm:w-[min(18rem,42vw)] sm:max-w-none sm:shadow-[-14px_18px_38px_rgba(0,0,0,0.18)] sm:rounded-t-[1.8rem]"
            src={heroPhoneRight}
            alt="ZappiCare mobile appointment experience"
            width={323}
            height={580}
            loading="lazy"
            decoding="async"
          />
          <img
            className="absolute left-[18%] top-[28%] w-12 -rotate-[8deg] sm:left-[7.5rem] sm:top-40 sm:w-16 min-[1101px]:block"
            src={heroSticker}
            alt=""
            width={96}
            height={96}
            loading="lazy"
            decoding="async"
          />

          <div className="absolute left-0 top-0 max-w-[14rem] rounded-2xl border border-ink/[0.08] bg-white/95 p-3 shadow-[0_18px_40px_rgba(25,18,44,0.12)] sm:left-0 sm:top-12 sm:max-w-none sm:p-4 min-[1101px]:top-12">
            <span className="mb-1 block text-xs text-muted sm:mb-1.5 sm:text-sm">Trusted by happy patients</span>
            <strong className="text-sm sm:text-base">4.9 / 5 care rating</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
