import { blogGuides } from '@/features/landing/data/blogData'
import { cn } from '@/utils/cn'

type BlogGuidesSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse' | 'lab'
}

export function BlogGuidesSection({ variant = 'default' }: BlogGuidesSectionProps) {
  const isWideVariant = variant !== 'default'

  return (
    <section className="py-10 sm:py-12">
      <div
        className={cn(
          'app-container grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]',
        )}
      >
        <article className={cn('relative overflow-hidden rounded-[20px] bg-[#F0DA69]', isWideVariant ? 'min-h-[360px]' : 'min-h-[340px]')}>
          <img
            src={blogGuides.featured.patternImage}
            alt=""
            aria-hidden
            className={cn(
              'pointer-events-none absolute left-0 h-[420px] w-[268px] rotate-90 opacity-5',
              isWideVariant ? 'top-[200px]' : 'top-[190px]',
            )}
          />

          <span className="absolute left-6 top-6 inline-flex h-8 items-center justify-center rounded-[6px] border border-[#1F1F1F] px-4 text-[14px] font-medium leading-4 text-[#1F1F1F]">
            {blogGuides.featured.category}
          </span>

          <img
            src={blogGuides.featured.image}
            alt=""
            className={cn(
              'absolute top-8 h-[380px] w-[292px] max-w-none object-cover',
              isWideVariant ? 'right-[-40px]' : 'right-[-68px]',
            )}
          />

          <div className={cn('relative z-10 flex max-w-[280px] flex-col items-start gap-4 px-4 pb-4 pt-14')}>
            <h3
              className="text-[clamp(1.45rem,2.5vw,2rem)] font-bold capitalize leading-[1.12] text-[#1F1F1F]"
              style={{ fontFamily: 'Satoshi, Segoe UI, sans-serif' }}
            >
              {blogGuides.featured.title}
            </h3>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#695700] px-6 py-3 text-[0.9rem] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#5d4c00]"
            >
              {blogGuides.featured.buttonLabel}
            </button>
          </div>
        </article>

        <article className={cn('rounded-[20px] bg-[#E8EEF0] p-4', isWideVariant && 'min-h-[360px]')}>
          <span className="inline-flex h-8 items-center justify-center rounded-[6px] border border-[#1F1F1F] px-4 text-[14px] font-medium leading-4 text-[#1F1F1F]">
            {blogGuides.secondary.category}
          </span>

          <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:grid-cols-3 sm:gap-3">
            {blogGuides.secondary.images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt=""
                className="h-[132px] w-full rounded-[10px] object-cover sm:h-[145px]"
              />
            ))}
          </div>

          <h3
            className={cn(
              'max-w-[340px] text-[clamp(1.4rem,2.4vw,2rem)] font-bold capitalize leading-[1.12] text-[#1F1F1F]',
              isWideVariant ? 'mt-6' : 'mt-7',
            )}
            style={{ fontFamily: 'Satoshi, Segoe UI, sans-serif' }}
          >
            {blogGuides.secondary.title}
          </h3>
        </article>
      </div>
    </section>
  )
}
