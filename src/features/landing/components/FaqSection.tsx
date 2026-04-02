import { faqs } from '@/features/landing/data/landingData'

export function FaqSection() {
  return (
    <section className="w-full min-w-0 px-4 py-12 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20" id="faq">
      <div className="mx-auto mb-8 max-w-[44rem] text-center sm:mb-10">
        <p className="mb-2 font-script text-[clamp(1.5rem,5vw,2.9rem)] leading-none text-accent sm:mb-3">
          Frequently Asked Question
        </p>
        <h2 className="text-balance">Have questions? We’ve got answers.</h2>
        <p className="text-pretty text-muted">
          The FAQ area follows the mobile composition from the Figma frame, translated into accessible accordion details
          for the web.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap justify-center gap-2 px-1 sm:mb-8 sm:gap-3" aria-hidden="true">
        <span className="inline-flex min-h-10 items-center justify-center rounded-full border border-ink bg-[#2c1e45] px-3 text-xs font-bold text-white sm:min-h-[2.3rem] sm:px-[1.1rem] sm:text-sm">
          Application
        </span>
        <span className="inline-flex min-h-10 items-center justify-center rounded-full border border-ink px-3 text-xs font-bold sm:min-h-[2.3rem] sm:px-[1.1rem] sm:text-sm">
          Data & Privacy
        </span>
        <span className="inline-flex min-h-10 items-center justify-center rounded-full border border-ink px-3 text-xs font-bold sm:min-h-[2.3rem] sm:px-[1.1rem] sm:text-sm">
          Emergency
        </span>
        <span className="inline-flex min-h-10 items-center justify-center rounded-full border border-ink px-3 text-xs font-bold sm:min-h-[2.3rem] sm:px-[1.1rem] sm:text-sm">
          Lab Test
        </span>
      </div>

      <div className="mx-auto w-full max-w-3xl min-w-0">
        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="mb-3 overflow-hidden rounded-lg border border-[#d5d5d5] bg-white open:bg-[#f2eef9] sm:mb-3.5 sm:rounded-[0.7rem]"
            open={index === 0}
          >
            <summary className="relative cursor-pointer list-none py-3.5 pl-5 pr-4 text-left text-sm font-bold leading-snug [touch-action:manipulation] before:absolute before:left-0 before:top-2 before:bottom-2 before:w-1 before:rounded-r-full before:bg-accent before:content-[''] sm:py-4 sm:pl-6 sm:pr-5 sm:text-base [&::-webkit-details-marker]:hidden">
              {faq.question}
            </summary>
            <p className="m-0 break-words px-5 pb-4 text-pretty text-muted sm:px-6 sm:pb-5">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
