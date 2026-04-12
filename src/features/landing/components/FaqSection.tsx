import { useState } from 'react'

import { faqGroups, type FaqCategory } from '@/features/landing/data/faqData'
import { cn } from '@/utils/cn'

type FaqSectionProps = {
  variant?: 'default' | 'doctor' | 'nurse'
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
        : null

  if (structuredVariant) {
    return (
      <section id="faq" className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto flex max-w-[1045px] flex-col items-center gap-[60px]">
          <div className="flex w-full max-w-[897px] flex-col items-center gap-[30px]">
            <div className="flex w-full max-w-[841px] flex-col items-center gap-5">
              <h2 className="text-center font-display text-[clamp(2.5rem,5vw,3.75rem)] font-bold uppercase leading-[1.2] text-[#1F1F1F]">
                Frequently Asked <span style={{ color: structuredVariant.accentColor }}>Questions</span>
              </h2>
              <p className="max-w-[461px] text-center text-[20px] font-normal leading-[1.2] text-[#8D8D8D]">
                Have questions? We&apos;ve got answers to help you get started with confidence.
              </p>
            </div>

            <div className="flex w-full flex-wrap justify-center gap-px">
              {(Object.keys(faqGroups) as FaqCategory[]).map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => {
                    setFaqTab(category)
                    setOpenFaqIndex(0)
                  }}
                  className={cn(
                    'min-h-[59px] min-w-[190px] rounded-[12px] border px-5 text-[20px] font-bold leading-none transition',
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

          <div className="w-full space-y-4">
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
                    className="relative flex min-h-[84px] w-full items-center justify-between bg-white px-[21px] py-6 text-left"
                  >
                    <span
                      className="absolute left-0 top-[13px] h-[58px] w-[7px] rounded-r-[22px]"
                      style={{ backgroundColor: structuredVariant.accentColor }}
                    />
                    <span className="pr-6 text-[22px] font-bold leading-[1.2] text-[#1F1F1F]">{faq.question}</span>
                    <PlusIcon open={isOpen} color={structuredVariant.accentColor} />
                  </button>
                  {isOpen && (
                    <div className="px-[21px] pb-[30px] pt-[29px] text-[24px] font-medium leading-[1.4] text-[#1F1F1F]">
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
    <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1240px]">
        <h2 className="mb-14 text-center font-display text-4xl font-bold uppercase text-[#1F1F1F]">Common Inquiries</h2>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {(Object.keys(faqGroups) as FaqCategory[]).map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setFaqTab(category)
                setOpenFaqIndex(0)
              }}
              className={cn(
                'min-h-12 rounded-full px-6 text-sm font-bold transition',
                faqTab === category ? 'bg-[#FC5000] text-white shadow-lg' : 'bg-[#E5E7EB] text-[#1F1F1F] hover:bg-[#D1D5DB]',
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mx-auto max-w-3xl space-y-4">
          {activeFaqs.map((faq, index) => {
            const isOpen = openFaqIndex === index

            return (
              <div key={`${faqTab}-${index}`} className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-[#1F1F1F]">{faq.question}</span>
                  <svg className={cn('size-6 transition-transform', isOpen && 'rotate-180')} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M19 9l-7 7-7-7" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="border-t border-[#E5E7EB] bg-[#FEFAE7]/30 p-6 font-medium leading-relaxed text-[#5a5248]">
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
