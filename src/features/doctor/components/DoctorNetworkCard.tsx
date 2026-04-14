import type { HeroDoctorCardData } from '../types/doctor.types'

type DoctorNetworkCardProps = {
  doctor: HeroDoctorCardData
  onBook: () => void
  variant?: 'default' | 'doctor' | 'nurse' | 'lab'
  featuredCtaLabel?: string
}

export function DoctorNetworkCard({
  doctor,
  onBook,
  variant = 'default',
  featuredCtaLabel = 'Book Appointment',
}: DoctorNetworkCardProps) {
  const accentColor =
    variant === 'doctor'
      ? '#9D497E'
      : variant === 'nurse'
        ? '#007954'
        : variant === 'lab'
          ? '#B68000'
        : '#FC5000'
  const cardRadiusClassName = variant === 'default' ? 'rounded-[20px]' : 'rounded-[12px]'

  return (
    <article className="flex w-[14rem] max-w-[min(14rem,calc(100vw-2.5rem))] shrink-0 flex-col items-start gap-2">
      <div className={`relative h-[14.25rem] w-full overflow-hidden bg-[#d9dee6] ${cardRadiusClassName}`}>
        <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        {doctor.featured && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pb-3 pt-[4.5rem]">
            <div className="flex items-end">
              <button
                type="button"
                onClick={onBook}
                className="inline-flex h-10 items-center rounded-[10px] border bg-[#FDFCFA] px-3 text-[0.8125rem] font-semibold transition active:scale-[0.98]"
                style={{ borderColor: accentColor, color: accentColor }}
              >
                {featuredCtaLabel}
              </button>
              <button
                type="button"
                onClick={onBook}
                className="ml-0.5 inline-flex size-10 items-center justify-center rounded-[10px] text-white transition hover:brightness-95 active:scale-[0.98]"
                style={{ backgroundColor: accentColor }}
                aria-label={`Book ${doctor.name}`}
              >
                <svg className="size-6" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path d="M26.6669 16H5.33362" stroke="currentColor" strokeWidth="1.48966" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M20.0005 22.6668C20.0005 22.6668 26.6671 17.757 26.6671 16.0002C26.6671 14.2434 20.0004 9.3335 20.0004 9.3335"
                    stroke="currentColor"
                    strokeWidth="1.48966"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col items-start gap-1 self-stretch">
        <h3 className="mb-0 w-full text-[0.98rem] font-extrabold capitalize leading-none text-[#1F1F1F]">{doctor.name}</h3>
        <p className="mb-0 w-full text-[0.84rem] font-medium capitalize leading-none text-[#8D8D8D]">{doctor.specialty}</p>
      </div>
    </article>
  )
}
