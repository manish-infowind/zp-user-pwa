import { services } from '@/features/landing/data/landingData'

export function ServicesSection() {
  return (
    <section
      className="hidden w-full min-w-0 px-4 py-12 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20 md:block"
      id="services"
    >
      <div className="mb-8 max-w-[44rem] sm:mb-10">
        <p className="mb-2 font-script text-[clamp(1.5rem,5vw,2.9rem)] leading-none text-accent sm:mb-3">
          How We Help
        </p>
        <h2>Digital healthcare designed around real life.</h2>
        <p className="text-muted">
          The desktop and mobile concepts both point to a warm, confident system. These core services mirror that same
          structure in a usable responsive layout.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 min-[721px]:max-[1100px]:grid-cols-2 min-[1101px]:grid-cols-3 sm:gap-5">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="rounded-2xl border border-ink/[0.08] bg-gradient-to-b from-white to-[#fff8ef] p-5 sm:rounded-[1.4rem] sm:p-7"
          >
            <span className="mb-3 inline-flex font-black text-accent sm:mb-4">0{index + 1}</span>
            <h3 className="mb-1.5">{service.title}</h3>
            <p className="break-words text-muted">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
