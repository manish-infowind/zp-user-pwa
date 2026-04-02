import { blogFeatureImg, blogProductImgs } from '@/features/landing/data/landingData'
import { cn } from '@/utils/cn'

const ctaDark =
  'inline-flex min-h-12 w-full items-center justify-center rounded-[0.85rem] border border-transparent bg-promo-gold px-5 py-3.5 text-base font-bold text-white no-underline transition-[transform,box-shadow] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:min-h-14 sm:w-auto [touch-action:manipulation]'

const pillClass =
  'inline-flex min-h-9 items-center rounded-lg border border-ink/75 px-3 py-1 text-sm font-medium sm:px-4'

export function BlogSection() {
  return (
    <section
      className={cn(
        'grid w-full min-w-0 grid-cols-1 gap-5 px-4 py-12 sm:gap-6 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20',
        'min-[1101px]:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]',
      )}
      id="blog"
    >
      <article className="flex min-h-0 flex-col overflow-hidden rounded-2xl bg-[#f0da69] sm:min-h-[28rem] sm:rounded-[1.4rem] min-[1101px]:relative min-[1101px]:min-h-[33rem]">
        <div className="relative z-[1] flex flex-1 flex-col p-5 sm:p-7">
          <div className={pillClass}>Blog Topic</div>
          <div className="mt-4 w-full max-w-none min-[1101px]:w-[min(24rem,60%)]">
            <h3 className="mb-3 text-balance">Your Ultimate Guide to Health and Wellness</h3>
            <a href="#faq" className={ctaDark}>
              Read More
            </a>
          </div>
          <img
            src={blogFeatureImg}
            alt="Healthcare blog feature"
            className="mt-6 w-full max-w-md self-center rounded-xl object-cover min-[1101px]:absolute min-[1101px]:-bottom-14 min-[1101px]:-right-8 min-[1101px]:mt-0 min-[1101px]:w-[min(33rem,55%)] min-[1101px]:max-w-none min-[1101px]:rounded-none"
            width={918}
            height={600}
            loading="lazy"
            decoding="async"
          />
        </div>
      </article>

      <article className="min-w-0 rounded-2xl bg-[#e8eef0] p-5 sm:rounded-[1.4rem] sm:p-7">
        <div className={pillClass}>Blog Topic</div>
        <div className="my-5 grid grid-cols-3 gap-2 sm:my-6 sm:gap-3">
          {blogProductImgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Product sample ${i + 1}`}
              className="aspect-square w-full min-w-0 rounded-lg object-cover sm:h-52 sm:rounded-[0.85rem] sm:aspect-auto"
              width={264}
              height={208}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
        <h3 className="text-balance">Acne Care Combo of Cetaphil Oily Skin Cleanse.</h3>
      </article>
    </section>
  )
}
