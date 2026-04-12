import { blogGuides } from '@/features/landing/data/blogData'
import { cn } from '@/utils/cn'

type BlogGuidesSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse'
}

export function BlogGuidesSection({ variant = 'default' }: BlogGuidesSectionProps) {
  const isWideVariant = variant !== 'default'

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div
        className={cn(
          'mx-auto grid gap-[30px]',
          isWideVariant ? 'max-w-[1200px] lg:grid-cols-[688px_482px]' : 'max-w-[1137px] lg:grid-cols-[651px_456px]',
        )}
      >
        <article className={cn('relative overflow-hidden rounded-[22px] bg-[#F0DA69]', isWideVariant ? 'min-h-[550px]' : 'min-h-[541px]')}>
          <img
            src={blogGuides.featured.patternImage}
            alt=""
            aria-hidden
            className={cn(
              'pointer-events-none absolute left-0 h-[486px] w-[308px] rotate-90 opacity-5',
              isWideVariant ? 'top-[242px]' : 'top-[233px]',
            )}
          />

          <span className="absolute left-[30px] top-[30px] inline-flex h-9 items-center justify-center rounded-[6px] border border-[#1F1F1F] px-4 text-base font-medium leading-4 text-[#1F1F1F]">
            {blogGuides.featured.category}
          </span>

          <img
            src={blogGuides.featured.image}
            alt=""
            className={cn(
              'absolute top-10 h-[600px] w-[459px] max-w-none object-cover',
              isWideVariant ? 'right-[-54px]' : 'right-[-91px]',
            )}
          />

          <div className={cn('relative z-10 flex max-w-[372px] flex-col items-start gap-10 px-[30px] pb-[30px] pt-24')}>
            <h3
              className="text-[clamp(2.25rem,4vw,2.875rem)] font-bold capitalize leading-[1.2] text-[#1F1F1F]"
              style={{ fontFamily: 'Satoshi, Segoe UI, sans-serif' }}
            >
              {blogGuides.featured.title}
            </h3>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-[12px] bg-[#695700] px-10 py-[22px] text-[20px] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#5d4c00]"
            >
              {blogGuides.featured.buttonLabel}
            </button>
          </div>
        </article>

        <article className={cn('rounded-[22px] bg-[#E8EEF0] p-[30px]', isWideVariant && 'min-h-[550px]')}>
          <span className="inline-flex h-9 items-center justify-center rounded-[6px] border border-[#1F1F1F] px-4 text-base font-medium leading-4 text-[#1F1F1F]">
            {blogGuides.secondary.category}
          </span>

          <div className="mt-[30px] grid grid-cols-3 gap-[13px]">
            {blogGuides.secondary.images.map((image, index) => (
              <img
                key={`${image}-${index}`}
                src={image}
                alt=""
                className="h-[217px] w-full rounded-[12px] object-cover"
              />
            ))}
          </div>

          <h3
            className={cn(
              'max-w-[422px] text-[clamp(2rem,3.6vw,2.75rem)] font-bold capitalize leading-[1.2] text-[#1F1F1F]',
              isWideVariant ? 'mt-[30px]' : 'mt-[39px]',
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
