import { doctors } from '@/features/landing/data/landingData'
import { setBookingIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

const linkMuted =
  'inline-flex min-h-11 items-center text-sm font-semibold text-muted no-underline transition-[color,transform] duration-200 ease-out hover:text-ink active:text-ink [touch-action:manipulation] md:text-base'

export function DoctorsSection() {
  return (
    <section className="w-full min-w-0 px-4 py-10 sm:px-[clamp(1rem,3vw,2rem)] sm:py-20" id="doctors">
      <div className="mb-6 flex items-start justify-between gap-3 sm:mb-10 md:items-end">
        <div className="min-w-0">
          <p className="hidden text-[11px] font-bold uppercase tracking-wide text-accent md:block md:mb-2 md:font-script md:text-[clamp(1.5rem,5vw,2.9rem)] md:normal-case md:leading-none">
            Meet Our Heroes
          </p>
          <p className="mb-1 font-display text-[10px] font-bold uppercase tracking-wider text-accent md:hidden">
            Book an appointment
          </p>
          <h2 className="font-display text-lg font-bold uppercase leading-tight md:hidden">Meet Our Heroes</h2>
          <h2 className="hidden md:block">Book an appointment with specialists you can trust.</h2>
        </div>
        <a
          href="#booking-results"
          className={linkMuted}
          onClick={() => setBookingIntent('doctor')}
        >
          VIEW MORE
        </a>
      </div>

      <div className="scrollbar-none -mx-4 flex gap-3 overflow-x-auto overflow-y-visible px-4 pb-2 snap-x snap-mandatory md:hidden">
        {doctors.map((doctor, index) => (
          <article
            key={`${doctor.name}-m-${index}`}
            className="w-[min(78vw,280px)] shrink-0 snap-center"
          >
            <div className="relative mb-2 overflow-hidden rounded-2xl">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="block aspect-[3/4] w-full object-cover"
                width={280}
                height={360}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              {index === 0 ? (
                <a
                  href="#download"
                  className="absolute bottom-3 left-3 right-3 flex min-h-11 items-center justify-between gap-2 rounded-xl border border-accent bg-white/95 px-3 py-2 text-xs font-bold text-accent no-underline [touch-action:manipulation]"
                >
                  <span className="min-w-0 truncate">Book Appointment</span>
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-accent text-white">→</span>
                </a>
              ) : null}
            </div>
            <h3 className="mb-0.5 text-sm font-bold uppercase leading-tight">{doctor.name}</h3>
            <p className="text-xs leading-snug text-muted">{doctor.specialty}</p>
          </article>
        ))}
      </div>

      <div className="hidden grid-cols-1 gap-5 min-[721px]:max-[1100px]:grid-cols-2 min-[1101px]:grid-cols-4 md:grid">
        {doctors.map((doctor, index) => (
          <article key={`${doctor.name}-${index}`} className="min-w-0">
            <div className="relative mb-3 overflow-hidden rounded-2xl sm:mb-4">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="block aspect-[4/5] w-full object-cover min-[480px]:aspect-[3/4] sm:h-72 sm:aspect-auto min-[1101px]:h-80"
                width={556}
                height={640}
                loading="lazy"
                decoding="async"
              />
              {index === 0 ? (
                <a
                  href="#download"
                  className={cn(
                    'absolute bottom-3 left-3 right-3 flex min-h-12 items-center justify-between gap-2 rounded-[0.9rem] border border-accent bg-[rgba(253,252,250,0.95)] px-3 py-2.5 text-sm font-semibold text-accent no-underline [touch-action:manipulation] sm:bottom-4 sm:left-4 sm:right-4 sm:px-4 sm:py-3 sm:text-base',
                  )}
                >
                  <span className="min-w-0 truncate">Book Appointment</span>
                  <span className="grid size-10 shrink-0 place-items-center rounded-[0.9rem] bg-accent text-white sm:size-12">
                    →
                  </span>
                </a>
              ) : null}
            </div>
            <h3 className="mb-1.5">{doctor.name}</h3>
            <p className="break-words text-muted">{doctor.specialty}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
