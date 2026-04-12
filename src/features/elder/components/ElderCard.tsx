import type { BookElderProfile } from '../types/elder.types'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

const bookCtaSage =
  'inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#2E7D32] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#1B5E20] active:scale-[0.99] [touch-action:manipulation]'

type Props = {
  profile: BookElderProfile
}

export function ElderCard({ profile }: Props) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={profile.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#2E7D32] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          Elder care
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-[#121316] sm:text-lg">{profile.name}</h3>
          <span className="shrink-0 text-sm font-bold text-[#121316]">{profile.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-sm font-semibold text-[#0057ff]">{profile.location}</p>
        <p className="text-xs font-semibold text-[#1B5E20]">{profile.credentialLine}</p>
        <p className="text-xs text-[#5e616e] sm:text-sm">{profile.featureLine}</p>
        <p className="text-[11px] text-[#5e616e]">
          <span className="font-semibold text-[#2b3037]">{profile.availability}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          {profile.durationTag}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {profile.serviceTags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#F0FAEF] px-2 py-0.5 text-[10px] font-semibold text-[#1B5E20] sm:text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#eef0f2] pt-3">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-medium text-[#8b94a4] line-through sm:text-sm">
                ₹{formatFee(profile.originalFee)}
              </span>
              <span className="text-lg font-medium text-[#121316] sm:text-xl">₹{formatFee(profile.fee)}</span>
            </div>
            <p className="mt-0.5 text-[10px] text-[#8b94a4] sm:text-xs">Starts from / shift</p>
          </div>
        </div>

        <button type="button" className={bookCtaSage}>
          Book now
        </button>
      </div>
    </article>
  )
}
