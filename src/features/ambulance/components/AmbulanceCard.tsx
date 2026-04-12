import type { BookAmbulanceProfile } from '../types/ambulance.types'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

const bookCtaOrange =
  'inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#FC5000] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#e04a00] active:scale-[0.99] [touch-action:manipulation]'

type Props = {
  ambulance: BookAmbulanceProfile
}

export function AmbulanceCard({ ambulance }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={ambulance.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#FC5000] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          Verified fleet
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-[#121316] sm:text-lg">{ambulance.name}</h3>
          <span className="shrink-0 text-sm font-bold text-[#121316]">{ambulance.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-sm font-semibold text-[#0057ff]">{ambulance.location}</p>
        <p className="text-xs font-semibold text-[#C2410C]">{ambulance.typeLabel}</p>
        <p className="text-xs leading-snug text-[#5e616e] sm:text-sm">{ambulance.featureLine}</p>
        <p className="text-[11px] text-[#5e616e]">
          <span className="font-semibold text-[#2b3037]">{ambulance.availability}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          ETA ~{ambulance.etaMins} min · {ambulance.tripsLine}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ambulance.serviceTags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#FFEDE5] px-2 py-0.5 text-[10px] font-semibold text-[#9a3412] sm:text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#eef0f2] pt-3">
          {ambulance.saveLabel ? (
            <span className="rounded-lg bg-[#FFEDE5] px-2.5 py-1 text-[11px] font-semibold text-[#c2410c] sm:text-xs">
              {ambulance.saveLabel}
            </span>
          ) : (
            <span />
          )}
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-medium text-[#8b94a4] line-through sm:text-sm">
                ₹{formatFee(ambulance.originalFare)}
              </span>
              <span className="text-lg font-medium text-[#121316] sm:text-xl">₹{formatFee(ambulance.fare)}</span>
            </div>
            <p className="mt-0.5 text-[10px] text-[#8b94a4] sm:text-xs">Estimated fare</p>
          </div>
        </div>

        <button type="button" className={bookCtaOrange}>
          Book now
        </button>
      </div>
    </article>
  )
}
