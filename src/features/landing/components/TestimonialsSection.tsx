import { testimonials } from '@/features/landing/data/landingData'

const stripItems = [...testimonials, testimonials[0]]

export function TestimonialsSection() {
  return (
    <section
      className="w-full min-w-0 bg-gradient-to-b from-cream to-white px-0 py-10 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20 md:px-4"
      id="testimonials"
    >
      <div className="scrollbar-none flex gap-3 overflow-x-auto overflow-y-visible px-4 pb-2 snap-x snap-mandatory md:hidden">
        {stripItems.map((item, i) => (
          <article
            key={`${item.name}-${i}`}
            className="w-[min(88vw,320px)] shrink-0 snap-center rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-[0_22px_40px_rgba(31,31,31,0.06)]"
          >
            <div className="text-sm text-accent tracking-[0.15em]" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="my-3 mb-4 break-words text-pretty text-sm leading-relaxed">“{item.quote}”</p>
            <div>
              <h3 className="mb-0.5 text-sm font-bold uppercase">{item.name}</h3>
              <p className="text-xs text-muted">{item.role}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="hidden grid-cols-1 gap-4 min-[721px]:max-[1100px]:grid-cols-2 min-[1101px]:grid-cols-3 sm:gap-5 md:grid md:px-0">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-[0_22px_40px_rgba(31,31,31,0.06)] sm:rounded-[1.4rem] sm:p-7"
          >
            <div className="text-accent tracking-[0.15em]" aria-hidden="true">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="my-3 mb-5 break-words text-pretty sm:my-4 sm:mb-6">“{item.quote}”</p>
            <div>
              <h3 className="mb-1.5">{item.name}</h3>
              <p className="text-muted">{item.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
