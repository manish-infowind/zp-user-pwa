import {
  bookDoctorAvailabilityFilters,
  bookDoctorMapPreview,
  bookDoctorSpecialtyPills,
  landingStripDoctorTypes,
} from '../data/doctorData'
import { cn } from '@/utils/cn'

type DoctorType = (typeof landingStripDoctorTypes)[number]

type Props = {
  selectedDoctorType: DoctorType
  onDoctorTypeChange: (value: DoctorType) => void
  selectedSpecialty: string
  onSpecialtyChange: (value: string) => void
  feeMin: number
  feeMax: number
  onFeeMinChange: (v: number) => void
  onFeeMaxChange: (v: number) => void
  selectedAvailability: string[]
  onAvailabilityToggle: (label: string) => void
  onClear: () => void
  className?: string
}

const feeHistogramHeights = [34, 48, 55, 42, 38, 50, 44, 36, 58, 45, 40, 52, 47, 35, 42, 38, 45, 44, 30, 20]

export function DoctorFiltersPanel({
  selectedDoctorType,
  onDoctorTypeChange,
  selectedSpecialty,
  onSpecialtyChange,
  feeMin,
  feeMax,
  onFeeMinChange,
  onFeeMaxChange,
  selectedAvailability,
  onAvailabilityToggle,
  onClear,
  className,
}: Props) {
  return (
    <div className={cn('rounded-2xl border border-[#e8eaee] bg-white p-3.5 shadow-[0_4px_24px_rgba(31,31,31,0.06)]', className)}>
      <div className="relative mb-3.5 overflow-hidden rounded-xl bg-[#e8edf2]">
        <img
          src={bookDoctorMapPreview}
          alt="Map preview"
          className="aspect-[5/3] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <button
          type="button"
          className="absolute bottom-2 left-1/2 min-h-8 -translate-x-1/2 rounded-full bg-white px-3.5 text-[0.72rem] font-semibold text-[#2b3037] shadow-md [touch-action:manipulation] hover:bg-[#f8fafc]"
        >
          Show on Map
        </button>
      </div>

      <div className="mb-3.5 flex items-center justify-between gap-2">
        <p className="text-[0.9rem] font-semibold text-[#121316]">Filter by:</p>
        <button
          type="button"
          onClick={onClear}
          className="text-[0.72rem] font-semibold text-[#0057ff] [touch-action:manipulation] hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="space-y-4">
        <div>
          <p className={cn('mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8b94a4]')}>Doctor type</p>
          <div className="flex flex-wrap gap-1.5">
            {landingStripDoctorTypes.map((t) => {
              const active = selectedDoctorType === t
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onDoctorTypeChange(t)}
                  className={cn(
                    'min-h-8 rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold transition-colors [touch-action:manipulation]',
                    active
                      ? 'border-[#e91e8c] bg-[#fdeef6] text-[#9d1b6a]'
                      : 'border-[#e4e4e4] bg-[#f8f9fa] text-[#5e616e] hover:border-[#cfd6e4]',
                  )}
                >
                  {t}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8b94a4]">Speciality</p>
          <div className="flex flex-wrap gap-2">
            {bookDoctorSpecialtyPills.map((pill) => {
              const active = selectedSpecialty === pill.value
              return (
                <button
                  key={pill.value}
                  type="button"
                  onClick={() => onSpecialtyChange(pill.value)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-left text-[0.72rem] font-semibold transition-colors [touch-action:manipulation]',
                    active
                      ? 'border-[#e91e8c] bg-[#fdeef6] text-[#9d1b6a]'
                      : 'border-[#e8eaee] bg-white text-[#5e616e] hover:border-[#cfd6e4]',
                  )}
                >
                  {pill.label}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8b94a4]">Consultation fee</p>
          <div className="mb-2 flex h-10 items-end gap-0.5 rounded-lg bg-[#f4f6f8] px-1 pt-2">
            {feeHistogramHeights.map((h, i) => (
              <div
                key={i}
                className="min-w-0 flex-1 rounded-t bg-[#c5ced9]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <input
            type="range"
            min={200}
            max={2500}
            step={50}
            value={feeMax}
            onChange={(e) => onFeeMaxChange(Number(e.target.value))}
            className="mb-3 h-2 w-full cursor-pointer accent-[#9d497e]"
            aria-label="Maximum consultation fee"
          />
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-[0.625rem] font-medium text-[#8b94a4]">Minimum</span>
              <input
                type="number"
                value={feeMin}
                onChange={(e) => onFeeMinChange(Number(e.target.value) || 0)}
                className="min-h-9 rounded-lg border border-[#e4e4e4] px-2 text-[0.88rem] font-medium text-[#121316]"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[0.625rem] font-medium text-[#8b94a4]">Maximum</span>
              <input
                type="number"
                value={feeMax}
                onChange={(e) => onFeeMaxChange(Number(e.target.value) || 0)}
                className="min-h-9 rounded-lg border border-[#e4e4e4] px-2 text-[0.88rem] font-medium text-[#121316]"
              />
            </label>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-[#8b94a4]">Availability</p>
          <div className="flex flex-col gap-2">
            {bookDoctorAvailabilityFilters.map((label) => {
              const on = selectedAvailability.includes(label)
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => onAvailabilityToggle(label)}
                  className={cn(
                    'flex min-h-9 w-full items-center rounded-full border px-3 text-left text-[0.72rem] font-semibold transition-colors [touch-action:manipulation]',
                    on
                      ? 'border-[#049153] bg-[#e8f8f0] text-[#047857]'
                      : 'border-[#e8eaee] bg-[#fafbfc] text-[#5e616e] hover:border-[#cfd6e4]',
                  )}
                >
                  {label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
