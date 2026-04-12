import {
  nurseCareCategories,
  nurseCareModes,
  nurseFeeRangeDefaults,
  nurseNurseTypes,
} from '../data/nurseData'
import { bookDoctorAvailabilityFilters } from '@/features/doctor/data/doctorData'
import { cn } from '@/utils/cn'

type NurseCareCategory = (typeof nurseCareCategories)[number]
type NurseCareMode = (typeof nurseCareModes)[number]
type NurseNurseType = (typeof nurseNurseTypes)[number]

type Props = {
  selectedCareCategory: NurseCareCategory
  onCareCategoryChange: (value: NurseCareCategory) => void
  selectedNurseType: NurseNurseType
  onNurseTypeChange: (value: NurseNurseType) => void
  selectedCareMode: NurseCareMode
  onCareModeChange: (value: NurseCareMode) => void
  feeMin: number
  feeMax: number
  onFeeMinChange: (v: number) => void
  onFeeMaxChange: (v: number) => void
  selectedAvailability: string[]
  onAvailabilityToggle: (label: string) => void
  onClear: () => void
  className?: string
}

const feeHistogramHeights = [32, 48, 55, 42, 38, 50, 44, 36, 58, 45, 40, 52, 47, 35, 42, 38, 45, 50, 44, 40]

/** Figma “Filter Nurse” — care type, nurse type, care mode, fee, availability. */
export function NurseFiltersPanel({
  selectedCareCategory,
  onCareCategoryChange,
  selectedNurseType,
  onNurseTypeChange,
  selectedCareMode,
  onCareModeChange,
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
    <div className={cn('rounded-2xl border border-[#e8eaee] bg-white p-4 shadow-[0_4px_24px_rgba(31,31,31,0.06)]', className)}>
      <div className="relative mb-4 overflow-hidden rounded-xl bg-[#e8edf2]">
        <div
          className="aspect-[5/3] w-full bg-[linear-gradient(135deg,#ecfdf5_0%,#e0e7ef_50%,#d1fae5_100%)]"
          role="img"
          aria-label="Map preview"
        />
        <button
          type="button"
          className="absolute bottom-2 left-1/2 min-h-9 -translate-x-1/2 rounded-full bg-white px-4 text-xs font-bold text-[#2b3037] shadow-md [touch-action:manipulation] hover:bg-[#f8fafc]"
        >
          Show on Map
        </button>
      </div>

      <div className="mb-4 flex items-center justify-between gap-2">
        <p className="text-sm font-bold text-[#121316]">Filter by:</p>
        <button
          type="button"
          onClick={onClear}
          className="text-xs font-semibold text-[#0057ff] [touch-action:manipulation] hover:underline"
        >
          Clear
        </button>
      </div>

      <div className="space-y-5">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b94a4]">Nurse type</p>
          <div className="flex flex-wrap gap-1.5">
            {nurseNurseTypes.map((t) => {
              const active = selectedNurseType === t
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => onNurseTypeChange(t)}
                  className={cn(
                    'min-h-9 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors [touch-action:manipulation]',
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
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b94a4]">Care type</p>
          <div className="flex flex-wrap gap-2">
            {nurseCareCategories.map((c) => {
              const active = selectedCareCategory === c
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => onCareCategoryChange(c)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-left text-xs font-semibold transition-colors [touch-action:manipulation]',
                    active
                      ? 'border-[#e91e8c] bg-[#fdeef6] text-[#9d1b6a]'
                      : 'border-[#e8eaee] bg-white text-[#5e616e] hover:border-[#cfd6e4]',
                  )}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b94a4]">Care mode</p>
          <div className="flex flex-wrap gap-2">
            {nurseCareModes.map((m) => {
              const active = selectedCareMode === m
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => onCareModeChange(m)}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors [touch-action:manipulation]',
                    active
                      ? 'border-[#e91e8c] bg-[#fdeef6] text-[#9d1b6a]'
                      : 'border-[#e8eaee] bg-white text-[#5e616e] hover:border-[#cfd6e4]',
                  )}
                >
                  {m}
                </button>
              )
            })}
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b94a4]">Visit fee</p>
          <div className="mb-2 flex h-12 items-end gap-0.5 rounded-lg bg-[#f4f6f8] px-1 pt-2">
            {feeHistogramHeights.map((h, i) => (
              <div key={i} className="min-w-0 flex-1 rounded-t bg-[#c5ced9]" style={{ height: `${h}%` }} />
            ))}
          </div>
          <input
            type="range"
            min={nurseFeeRangeDefaults.min}
            max={nurseFeeRangeDefaults.max}
            step={50}
            value={feeMax}
            onChange={(e) => onFeeMaxChange(Number(e.target.value))}
            className="mb-3 h-2 w-full cursor-pointer accent-[#9d497e]"
            aria-label="Maximum visit fee"
          />
          <div className="grid grid-cols-2 gap-2">
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-medium text-[#8b94a4]">Minimum</span>
              <input
                type="number"
                value={feeMin}
                onChange={(e) => onFeeMinChange(Number(e.target.value) || 0)}
                className="min-h-10 rounded-lg border border-[#e4e4e4] px-2 text-sm font-medium text-[#121316]"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-[10px] font-medium text-[#8b94a4]">Maximum</span>
              <input
                type="number"
                value={feeMax}
                onChange={(e) => onFeeMaxChange(Number(e.target.value) || 0)}
                className="min-h-10 rounded-lg border border-[#e4e4e4] px-2 text-sm font-medium text-[#121316]"
              />
            </label>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8b94a4]">Availability</p>
          <div className="flex flex-col gap-2">
            {bookDoctorAvailabilityFilters.map((label) => {
              const on = selectedAvailability.includes(label)
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => onAvailabilityToggle(label)}
                  className={cn(
                    'flex min-h-10 w-full items-center rounded-full border px-3 text-left text-xs font-semibold transition-colors [touch-action:manipulation]',
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
