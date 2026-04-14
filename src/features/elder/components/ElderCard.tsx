import type { BookElderProfile } from '../types/elder.types'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

const bookCtaSage =
  'inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-[#2E7D32] px-3.5 text-[0.9rem] font-semibold text-white shadow-sm transition hover:bg-[#1B5E20] active:scale-[0.99] [touch-action:manipulation]'

type Props = {
  profile: BookElderProfile
}

export function ElderCard({ profile }: Props) {
  return (
    <article className="standard-card border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-2xl">
      <div className="relative w-full shrink-0 bg-[#f1f2f3]">
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

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-[0.95rem] font-semibold leading-tight text-[#121316] sm:text-[1rem]">{profile.name}</h3>
          <span className="shrink-0 text-[0.82rem] font-semibold text-[#121316]">{profile.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-[0.85rem] font-semibold text-[#0057ff]">{profile.location}</p>
        <p className="text-[0.75rem] font-semibold text-[#1B5E20]">{profile.credentialLine}</p>
        <p className="text-[0.75rem] text-[#5e616e] sm:text-[0.82rem]">{profile.featureLine}</p>
        <p className="text-[0.68rem] text-[#5e616e]">
          <span className="font-semibold text-[#2b3037]">{profile.availability}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          {profile.durationTag}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {profile.serviceTags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#F0FAEF] px-2 py-0.5 text-[0.66rem] font-semibold text-[#1B5E20] sm:text-[0.7rem]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2.5 border-t border-[#eef0f2] pt-2.5">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-[0.72rem] font-medium text-[#8b94a4] sm:text-[0.82rem]">
                ₹{formatFee(profile.originalFee)}
              </span>
              <span className="text-[1rem] font-medium text-[#121316] sm:text-[1.1rem]">₹{formatFee(profile.fee)}</span>
            </div>
            <p className="mt-0.5 text-[0.625rem] text-[#8b94a4] sm:text-[0.72rem]">Starts from / shift</p>
          </div>
        </div>

        <button type="button" className={bookCtaSage}>
          Book now
        </button>
      </div>
    </article>
  )
}
