import { heroPhoneLeft, heroPhoneRight } from '@/features/landing/data/landingData'
import { cn } from '@/utils/cn'

const ctaPrimary =
  'inline-flex min-h-12 w-full items-center justify-center rounded-[0.85rem] border border-transparent bg-accent px-5 py-3.5 text-base font-bold text-white no-underline shadow-[0_18px_32px_rgba(248,80,1,0.2)] transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(248,80,1,0.26)] active:translate-y-0 sm:min-h-14 sm:w-auto sm:px-6 [touch-action:manipulation]'

export function PromoSection() {
  return (
    <section className="w-full min-w-0 px-4 py-12 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20" id="download">
      <div
        className={cn(
          'grid grid-cols-1 items-stretch gap-0 overflow-hidden rounded-2xl text-white sm:gap-8 sm:rounded-3xl',
          'min-[1101px]:grid-cols-[minmax(0,0.9fr)_minmax(18rem,1.1fr)]',
          'bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent),#382759]',
        )}
      >
        <div className="min-w-0 p-5 pb-6 sm:p-[clamp(1.5rem,4vw,3rem)] min-[1101px]:pb-[clamp(1.5rem,4vw,3rem)]">
          <p className="mb-2 font-script text-[clamp(1.5rem,5vw,2.9rem)] leading-none text-[#f4cc6b] sm:mb-3">Download App</p>
          <h2 className="text-balance text-white">Smarter healthcare in your pocket.</h2>
          <p className="text-pretty text-white/95">
            Stay informed and in control. From symptom tracking to personalized care insights, your full journey is
            available right on your phone.
          </p>
          <div className="mt-6 sm:mt-8">
            <a href="#faq" className={ctaPrimary}>
              Download now
            </a>
          </div>
        </div>

        <div className="relative min-h-[16rem] w-full min-w-0 sm:min-h-[22rem] min-[1101px]:min-h-[28rem]">
          <img
            className="absolute bottom-0 left-[8%] w-[38%] max-w-[9.5rem] rounded-t-2xl -rotate-[12deg] sm:bottom-[-0.5rem] sm:left-8 sm:w-[min(15rem,40vw)] sm:max-w-none sm:rounded-t-3xl min-[1101px]:bottom-[-1.5rem]"
            src={heroPhoneLeft}
            alt="Patient app interface"
            width={323}
            height={580}
            loading="lazy"
            decoding="async"
          />
          <img
            className="absolute bottom-0 right-[8%] w-[38%] max-w-[9.5rem] rounded-t-2xl rotate-[10deg] sm:bottom-[-0.5rem] sm:right-8 sm:w-[min(15rem,40vw)] sm:max-w-none sm:rounded-t-3xl min-[1101px]:bottom-[-1.5rem]"
            src={heroPhoneRight}
            alt="Appointment app interface"
            width={323}
            height={580}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
