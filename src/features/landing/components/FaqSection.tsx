import { useState } from 'react'

import { faqGroups, type FaqCategory } from '@/features/landing/data/faqData'
import { cn } from '@/utils/cn'

type FaqSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse' | 'lab'
}

function PlusIcon({ open, color }: { open: boolean; color: string }) {
  return (
    <svg
      className={cn('size-6 transition-transform duration-200', open && 'rotate-45')}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path d="M12 4V20M20 12H4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FaqSection({ variant = 'default' }: FaqSectionProps) {
  const [faqTab, setFaqTab] = useState<FaqCategory>('Application')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const activeFaqs = faqGroups[faqTab]
  const structuredVariant =
    variant === 'doctor'
      ? { accentColor: '#9D497E' }
      : variant === 'nurse'
        ? { accentColor: '#007954' }
        : variant === 'lab'
          ? { accentColor: '#B68000' }
        : null

  if (structuredVariant) {
    return (
      <section id="faq" className="py-10 sm:py-12">
        <div className="app-container flex flex-col items-center gap-8">
          <div className="flex w-full max-w-[860px] flex-col items-center gap-5">
            <div className="flex w-full max-w-[780px] flex-col items-center gap-3">
              <h2 className="text-center font-display text-[clamp(1.45rem,2.8vw,2.25rem)] font-bold uppercase leading-[1.08] text-[#1F1F1F]">
                Frequently Asked <span style={{ color: structuredVariant.accentColor }}>Questions</span>
              </h2>
              <p className="max-w-[28rem] text-center text-[clamp(0.95rem,1.2vw,1rem)] font-normal leading-[1.35] text-[#8D8D8D]">
                Have questions? We&apos;ve got answers to help you get started with confidence.
              </p>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-2">
              {(Object.keys(faqGroups) as FaqCategory[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setFaqTab(category)
                    setOpenFaqIndex(0)
                  }}
                  className={cn(
                    'min-h-[2.75rem] min-w-0 flex-1 basis-[calc(50%-0.25rem)] rounded-[0.75rem] border px-2 text-[0.8125rem] font-semibold leading-none transition sm:min-h-[3rem] sm:min-w-[8.5rem] sm:flex-none sm:px-4 sm:text-[0.9375rem]',
                    faqTab === category
                      ? 'border-[#2C1E45] bg-[#2C1E45] text-white'
                      : 'border-[#E4E4E4] bg-white text-[#1F1F1F] hover:border-[#d3d3d3]',
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full space-y-3">
            {activeFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index

              return (
                <div
                  key={`${faqTab}-${index}`}
                  className={cn(
                    'overflow-hidden rounded-[12px] border border-[#D5D5D5]',
                    isOpen ? 'bg-[#F1F5F9]' : 'bg-white',
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                    className="relative flex min-h-[4.25rem] w-full items-center justify-between bg-white px-4 py-5 text-left"
                  >
                    <span
                      className="absolute left-0 top-[0.7rem] h-[3rem] w-[0.35rem] rounded-r-[1.35rem]"
                      style={{ backgroundColor: structuredVariant.accentColor }}
                    />
                    <span className="pr-5 text-[1.05rem] font-semibold leading-[1.25] text-[#1F1F1F]">{faq.question}</span>
                    <PlusIcon open={isOpen} color={structuredVariant.accentColor} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 pt-5 text-[1rem] font-medium leading-[1.5] text-[#1F1F1F]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="faq" className="py-12 sm:py-14">
      <div className="app-container">
        <h2 className="mb-8 text-center font-display text-[clamp(1.45rem,2.8vw,2.25rem)] font-bold uppercase text-[#1F1F1F]">Common Inquiries</h2>

        <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10">
          {(Object.keys(faqGroups) as FaqCategory[]).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFaqTab(category)
                setOpenFaqIndex(0)
              }}
              className={cn(
                'min-h-10 flex-1 basis-[calc(50%-0.25rem)] rounded-full px-3 text-[0.8rem] font-semibold transition sm:min-h-11 sm:flex-none sm:basis-auto sm:px-5 sm:text-[0.9rem]',
                faqTab === category ? 'bg-[#FC5000] text-white shadow-lg' : 'bg-[#E5E7EB] text-[#1F1F1F] hover:bg-[#D1D5DB]',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-[52rem] space-y-3">
          {activeFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={`${faqTab}-${index}`} className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-[1rem] font-semibold text-[#1F1F1F]">{faq.question}</span>
                  <svg className={cn('size-6 transition-transform', isOpen && 'rotate-180')} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] bg-[#FEFAE7]/30 p-5 text-[0.95rem] font-medium leading-relaxed text-[#5a5248]">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
