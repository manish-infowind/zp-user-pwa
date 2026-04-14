import type { BookDoctorProfile } from '../types/doctor.types'
import type { ConsultationMode } from '@/features/landing/config/searchConfig'
import { cn } from '@/utils/cn'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

function DoctorPrice({ fee, originalFee }: { fee: number; originalFee: number }) {
  return (
    <div className="text-right">
      <div className="flex items-center justify-end gap-2">
        <span className="text-[0.72rem] font-medium text-[#8b94a4] sm:text-[0.82rem]">₹{formatFee(originalFee)}</span>
        <span className="text-[1rem] font-medium text-[#121316] sm:text-[1.1rem]">₹{formatFee(fee)}</span>
      </div>
      <p className="mt-0.5 text-[0.625rem] text-[#8b94a4] sm:text-[0.72rem]">Consultation Fee</p>
    </div>
  )
}

const bookCtaGreen =
  'inline-flex min-h-10 w-full items-center justify-center rounded-xl bg-[#00A651] px-3.5 text-[0.9rem] font-semibold text-white shadow-sm transition hover:bg-[#009146] active:scale-[0.99] [touch-action:manipulation]'

type DoctorCardProps = {
  doctor: BookDoctorProfile
}

export function DoctorCardGrid({ doctor }: DoctorCardProps) {
  return (
    <article className="standard-card border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] rounded-2xl">
      <div className="relative w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#049153] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          {doctor.verifiedLabel}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-3.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-[0.95rem] font-semibold leading-tight text-[#121316] sm:text-[1rem]">{doctor.name}</h3>
          <span className="shrink-0 text-[0.82rem] font-semibold text-[#121316]">{doctor.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-[0.85rem] font-semibold text-[#0057ff] sm:text-[0.88rem]">+ {doctor.location}</p>

        <p className="text-[0.75rem] leading-snug text-[#5e616e] sm:text-[0.82rem]">
          <span className="font-semibold text-[#2b3037]">{doctor.specialty}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          <span>{doctor.credentials}</span>
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-2.5 border-t border-[#eef0f2] pt-2.5">
          <span className="rounded-lg bg-[#cdf8e5] px-2 py-1 text-[0.68rem] font-semibold text-[#06c270] sm:text-[0.72rem]">
            {doctor.discountLabel}
          </span>
          <DoctorPrice fee={doctor.fee} originalFee={doctor.originalFee} />
        </div>

        <button type="button" className={bookCtaGreen}>
          Book now
        </button>
      </div>
    </article>
  )
}

type DoctorCardListProps = {
  doctor: BookDoctorProfile
  selectedMode: ConsultationMode | string
}

export function DoctorCardList({ doctor, selectedMode }: DoctorCardListProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)] w-full">
      <div className="flex flex-col gap-3.5 p-3.5 md:flex-row md:items-stretch md:gap-4">
        <div className="relative mx-auto h-36 w-36 shrink-0 overflow-hidden rounded-xl bg-[#f1f2f3] md:mx-0 md:h-[9.5rem] md:w-[8.5rem]">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            decoding="async"
            width={148}
            height={168}
          />
          <span className="absolute left-0 top-0 rounded-br-lg bg-[#049153] px-2 py-1 text-[9px] font-semibold uppercase text-white">
            Verified
          </span>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-3.5 lg:flex-row lg:gap-6">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="text-[1rem] font-semibold leading-tight text-[#121316] md:text-[1.12rem]">{doctor.name}</h3>
              <span className="text-[0.82rem] font-semibold text-[#121316]">
                {doctor.rating} <span className="text-[#fac91e]">★</span>
              </span>
            </div>
            <p className="mt-1 text-[0.85rem] font-semibold text-[#0057ff]">
              <span aria-hidden>+ </span>
              {doctor.location}
            </p>
            <p className="mt-1.5 text-[0.84rem] text-[#5e616e]">
              <span className="font-semibold text-[#2b3037]">{doctor.specialty}</span>
              <span className="mx-2 text-[#b5bac2]">|</span>
              {doctor.credentials}
            </p>
            <p className="mt-1.5 line-clamp-2 text-[0.84rem] leading-relaxed text-[#6b7280]">{doctor.bioSnippet}</p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {(doctor.nurseModeLabels ?? doctor.consultationModes).map((mode) => (
                <span
                  key={`${doctor.name}-${mode}`}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[0.68rem] font-semibold md:text-[0.72rem]',
                    mode === selectedMode ? 'bg-[#f8bfe3] text-[#9d497e]' : 'bg-[#f1f2f3] text-[#5e616e]',
                  )}
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-2.5 border-t border-[#eef0f2] pt-3 lg:w-52 lg:border-l lg:border-t-0 lg:pl-5 lg:pt-0">
            <div className="flex items-center gap-2 rounded-full bg-[#f0f6ff] px-3 py-1.5">
              <span className="rounded-md bg-white px-2 py-0.5 text-[0.84rem] font-bold text-[#0046cc]">
                {doctor.rating.toFixed(1)}
              </span>
              <span className="text-[0.72rem] leading-tight">
                <span className="font-semibold text-[#0046cc]">Excellent</span>
                <span className="block text-[#8b94a4]">{doctor.reviews}</span>
              </span>
            </div>
            <button
              type="button"
              className="min-h-9 w-full rounded-lg border border-[#cfd6e4] bg-white px-3.5 text-[0.9rem] font-semibold text-[#2b3037] transition hover:bg-[#f8f9fb] [touch-action:manipulation]"
            >
              View profile
            </button>
            <button type="button" className={bookCtaGreen}>
              Book appointment
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2.5 border-t border-[#eef0f2] bg-[#fafbfc] px-3.5 py-2.5">
        <span className="rounded-lg bg-[#cdf8e5] px-2.5 py-1 text-[0.72rem] font-semibold text-[#06c270]">
          {doctor.discountLabel}
        </span>
        <DoctorPrice fee={doctor.fee} originalFee={doctor.originalFee} />
      </div>
    </article>
  )
}
