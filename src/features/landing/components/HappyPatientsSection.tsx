import { patientTestimonials } from '@/features/landing/data/testimonialsData'
import { cn } from '@/utils/cn'

function TestimonialRating({ color }: { color: string }) {
  return (
    <div className="flex items-center gap-[11px]" aria-hidden>
      {Array.from({ length: 4 }).map((_, index) => (
        <svg key={`filled-${index}`} className="size-[26px]" viewBox="0 0 26 26" fill="none">
          <path
            d="M12.1718 22.1833C12.6802 21.8764 13.3169 21.8764 13.8254 22.1833L19.0552 25.3399C20.2669 26.0712 21.7617 24.9848 21.4401 23.6065L20.0521 17.6579C19.9172 17.0795 20.1137 16.4739 20.5626 16.085L25.1854 12.0804C26.2552 11.1537 25.6833 9.39639 24.273 9.27678L18.1901 8.76087C17.5987 8.71072 17.0837 8.33739 16.8521 7.79099L14.4717 2.17479C13.9203 0.873986 12.0768 0.873989 11.5254 2.1748L9.14498 7.79099C8.91339 8.33739 8.39839 8.71072 7.80706 8.76087L1.72414 9.27678C0.313824 9.39639 -0.25806 11.1537 0.811731 12.0804L5.43449 16.085C5.88342 16.4739 6.07998 17.0795 5.94502 17.6579L4.55701 23.6065C4.2354 24.9848 5.73021 26.0712 6.94195 25.3399L12.1718 22.1833Z"
            fill={color}
          />
        </svg>
      ))}
      <svg className="size-[26px]" viewBox="0 0 26 26" fill="none">
        <path
          d="M11.9854 2.37012C12.3644 1.47581 13.6327 1.47581 14.0117 2.37012L16.3916 7.98633C16.6955 8.7033 17.3715 9.19284 18.1475 9.25879L24.2305 9.77539C25.1999 9.85761 25.5934 11.0649 24.8584 11.7021L20.2354 15.707C19.6461 16.2175 19.3883 17.0123 19.5654 17.7715L20.9531 23.7197C21.1742 24.6673 20.1465 25.4148 19.3135 24.9121L14.084 21.7549C13.4166 21.3521 12.5805 21.3521 11.9131 21.7549L6.68359 24.9121C5.85055 25.4148 4.82285 24.6673 5.04395 23.7197L6.43164 17.7715C6.60878 17.0123 6.35094 16.2175 5.76172 15.707L1.13867 11.7021C0.40375 11.0649 0.797191 9.85761 1.7666 9.77539L7.84961 9.25879C8.62555 9.19286 9.30152 8.70331 9.60547 7.98633L11.9854 2.37012Z"
          stroke={color}
        />
      </svg>
    </div>
  )
}

type HappyPatientsSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse'
}

export function HappyPatientsSection({ variant = 'default' }: HappyPatientsSectionProps) {
  const themedVariant =
    variant === 'doctor'
      ? {
          scriptColor: '#9D497E',
          highlightedCardClassName: 'bg-[#F8BFE3]',
          highlightedAccentColor: '#9D497E',
        }
      : variant === 'nurse'
        ? {
            scriptColor: '#007954',
            highlightedCardClassName: 'bg-[#D9F7EE]',
            highlightedAccentColor: '#007954',
          }
        : null

  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-[1471px]">
        <div className="hidden lg:block">
          <div className="h-[322px] overflow-hidden">
            <div className="flex justify-center gap-[30px]">
              {patientTestimonials.map((testimonial, index) => (
                <article
                  key={`${testimonial.name}-${index}`}
                  className={cn(
                    'w-[380px] shrink-0 rounded-[22px] px-7',
                    themedVariant && index === 1 ? themedVariant.highlightedCardClassName : testimonial.bgClassName,
                    testimonial.heightClassName,
                    index === 1 ? 'pt-7' : 'mt-[82px] pt-[30px]',
                  )}
                >
                  <div className="flex w-[324px] flex-col items-start gap-6">
                    <TestimonialRating
                      color={themedVariant && index === 1 ? themedVariant.highlightedAccentColor : testimonial.starColor}
                    />
                    <p className="w-[323px] text-[20px] font-medium leading-[30px] text-[#8D8D8D]">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-start gap-1">
                      <p className="text-[20px] font-bold leading-[20px] text-[#1F1F1F]">{testimonial.name}</p>
                      <p
                        className="text-[18px] font-medium leading-[18px]"
                        style={{ color: themedVariant && index === 1 ? themedVariant.highlightedAccentColor : testimonial.roleColor }}
                      >
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pb-8 pt-10 sm:px-6 lg:hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {patientTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}-mobile`}
                className={cn(
                  'w-[320px] shrink-0 rounded-[22px] p-7',
                  themedVariant && index === 1 ? themedVariant.highlightedCardClassName : testimonial.bgClassName,
                  index === 1 ? 'min-h-[460px]' : 'min-h-[390px]',
                )}
              >
                <div className="flex flex-col items-start gap-6">
                  <TestimonialRating
                    color={themedVariant && index === 1 ? themedVariant.highlightedAccentColor : testimonial.starColor}
                  />
                  <p className="text-lg font-medium leading-8 text-[#8D8D8D]">{testimonial.quote}</p>
                  <div className="flex flex-col items-start gap-1">
                    <p className="text-[20px] font-bold leading-[20px] text-[#1F1F1F]">{testimonial.name}</p>
                    <p
                      className="text-[18px] font-medium leading-[18px]"
                      style={{ color: themedVariant && index === 1 ? themedVariant.highlightedAccentColor : testimonial.roleColor }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bg-[#FEFAE7] px-4 py-12 text-center sm:px-6 lg:h-[217px] lg:px-8 lg:py-[50px]">
          <div className="mx-auto max-w-[1032px]">
            <p
              className={cn(
                'text-[clamp(1.75rem,4vw,2.875rem)] font-normal leading-[1.42]',
                themedVariant ? '' : 'text-[#FC5000]',
              )}
              style={{ color: themedVariant?.scriptColor, fontFamily: 'HolidayFree, Caveat, cursive' }}
            >
              Happy Patients
            </p>
            <h2 className="font-display text-[clamp(2.1rem,5vw,3.5rem)] font-bold uppercase leading-[1.42] text-[#1F1F1F]">
              Take A Look At What Our Customers Says
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
