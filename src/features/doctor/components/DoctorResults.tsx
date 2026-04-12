import { useMemo, useState } from 'react'
import { ServiceResultsBase } from '@/features/landing/components/ServiceResultsBase'
import { DoctorFiltersPanel } from './DoctorFiltersPanel'
import { DoctorCardGrid, DoctorCardList } from './DoctorCard'
import {
  bookDoctorExploreCity,
  bookDoctorProfiles,
  bookDoctorSortOptions,
  landingStripDoctorTypes,
} from '../data/doctorData'
import type { ConsultationMode } from '../types/doctor.types'
import { cn } from '@/utils/cn'

type DoctorType = (typeof landingStripDoctorTypes)[number]

type Props = {
  heroSearchSnapshot?: any
}

type ViewMode = 'list' | 'grid'
type SortOption = (typeof bookDoctorSortOptions)[number]

export function DoctorResults({ heroSearchSnapshot }: Props) {
  const [selectedSpecialty, setSelectedSpecialty] = useState(heroSearchSnapshot?.specialty ?? 'General')
  const [selectedMode, _setSelectedMode] = useState<ConsultationMode>(heroSearchSnapshot?.consultationMode ?? 'Clinic Visit')
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')
  const [selectedDoctorType, setSelectedDoctorType] = useState<DoctorType>('General')
  const [feeMin, setFeeMin] = useState(200)
  const [feeMax, setFeeMax] = useState(2000)
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])

  const filteredDoctors = useMemo(() => {
    const base = bookDoctorProfiles.filter((profile) => {
      const specialtyMatch =
        selectedSpecialty === 'General' ||
        profile.specialtyFilter.toLowerCase() === selectedSpecialty.toLowerCase()
      
      const modeMatch = profile.consultationModes.includes(selectedMode)
      const feeMatch = profile.fee >= feeMin && profile.fee <= feeMax
      return specialtyMatch && modeMatch && feeMatch
    })

    if (sortBy === 'Price: Low to High') {
      return [...base].sort((a, b) => a.fee - b.fee)
    }
    if (sortBy === 'Experience') {
      return [...base].sort((a, b) => a.name.localeCompare(b.name))
    }
    return [...base].sort((a, b) => b.rating - a.rating)
  }, [feeMax, feeMin, selectedMode, selectedSpecialty, sortBy])


  const clearFilters = () => {
    setSelectedSpecialty('General')
    setSelectedDoctorType('General')
    setSelectedAvailability([])
    setFeeMin(200)
    setFeeMax(2000)
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2 text-sm font-medium sm:text-base">
          <span className="text-[#F85001]">Home</span>
          <svg className="size-4 text-[#1F1F1F]" viewBox="0 0 20 20" fill="none" aria-hidden>
            <path
              d="M8 5.75L11.5 9.25C12.0833 9.83333 12.0833 10.1667 11.5 10.75L8 14.25"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#8D8D8D]">Book Doctor</span>
        </div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <h1 className="text-[clamp(1.9rem,3vw,2.75rem)] font-semibold leading-tight text-black">
              Explore 300+ Doctors in {bookDoctorExploreCity}
            </h1>
            <p className="mt-2 text-sm font-medium text-[#656F81] sm:text-base">
              Choose verified doctors, compare consultation options, and book care in minutes.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <label className="flex min-h-10 min-w-0 items-center gap-2 rounded-xl border border-[#B5BAC2] bg-white px-4 text-sm font-medium text-[#5E616E] sm:min-w-[220px]">
              <span className="shrink-0">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="min-h-9 w-full cursor-pointer bg-transparent text-sm font-medium outline-none"
              >
                {bookDoctorSortOptions.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            </label>

            <div className="inline-flex shrink-0 rounded-full border border-[#B5BAC2] bg-white p-1">
              {(['list', 'grid'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode)}
                  className={cn(
                    'flex h-10 w-10 items-center justify-center rounded-full transition-colors',
                    viewMode === mode
                      ? 'border border-[#1F1F1F] bg-white text-[#1F1F1F]'
                      : 'text-[#8B94A4] hover:bg-[#f7f7f8]',
                  )}
                  aria-label={mode === 'list' ? 'Show list view' : 'Show grid view'}
                >
                  {mode === 'list' ? (
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M4 6h16M4 12h16M4 18h16"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2 6h.01M2 12h.01M2 18h.01"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg className="size-5" fill="none" viewBox="0 0 24 24" aria-hidden>
                      <path
                        d="M18.5 10.75H15.5C14.091 10.75 13.25 9.909 13.25 8.5V5.5C13.25 4.091 14.091 3.25 15.5 3.25H18.5C19.909 3.25 20.75 4.091 20.75 5.5V8.5C20.75 9.909 19.909 10.75 18.5 10.75ZM15.5 4.75C14.911 4.75 14.75 4.911 14.75 5.5V8.5C14.75 9.089 14.911 9.25 15.5 9.25H18.5C19.089 9.25 19.25 9.089 19.25 8.5V5.5C19.25 4.911 19.089 4.75 18.5 4.75H15.5ZM8.5 10.75H5.5C4.091 10.75 3.25 9.909 3.25 8.5V5.5C3.25 4.091 4.091 3.25 5.5 3.25H8.5C9.909 3.25 10.75 4.091 10.75 5.5V8.5C10.75 9.909 9.909 10.75 8.5 10.75ZM5.5 4.75C4.911 4.75 4.75 4.911 4.75 5.5V8.5C4.75 9.089 4.911 9.25 5.5 9.25H8.5C9.089 9.25 9.25 9.089 9.25 8.5V5.5C9.25 4.911 9.089 4.75 8.5 4.75H5.5ZM18.5 20.75H15.5C14.091 20.75 13.25 19.909 13.25 18.5V15.5C13.25 14.091 14.091 13.25 15.5 13.25H18.5C19.909 13.25 20.75 14.091 20.75 15.5V18.5C20.75 19.909 19.909 20.75 18.5 20.75ZM15.5 14.75C14.911 14.75 14.75 14.911 14.75 15.5V18.5C14.75 19.089 14.911 19.25 15.5 19.25H18.5C19.089 19.25 19.25 19.089 19.25 18.5V15.5C19.25 14.911 19.089 14.75 18.5 14.75H15.5ZM8.5 20.75H5.5C4.091 20.75 3.25 19.909 3.25 18.5V15.5C3.25 14.091 4.091 13.25 5.5 13.25H8.5C9.909 13.25 10.75 14.091 10.75 15.5V18.5C10.75 19.909 9.909 20.75 8.5 20.75ZM5.5 14.75C4.911 14.75 4.75 14.911 4.75 15.5V18.5C4.75 19.089 4.911 19.25 5.5 19.25H8.5C9.089 19.25 9.25 19.089 9.25 18.5V15.5C9.25 14.911 9.089 14.75 8.5 14.75H5.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ServiceResultsBase
        sidebarContent={
          <DoctorFiltersPanel
            selectedSpecialty={selectedSpecialty}
            onSpecialtyChange={setSelectedSpecialty}
            selectedDoctorType={selectedDoctorType}
            onDoctorTypeChange={setSelectedDoctorType}
            feeMin={feeMin}
            feeMax={feeMax}
            onFeeMinChange={setFeeMin}
            onFeeMaxChange={setFeeMax}
            selectedAvailability={selectedAvailability}
            onAvailabilityToggle={(label) =>
              setSelectedAvailability((prev) =>
                prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
              )
            }
            onClear={clearFilters}
          />
        }
      >
        <div
          className={
            'grid gap-6 ' + (viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1')
          }
        >
          {filteredDoctors.map((doctor) =>
            viewMode === 'grid' ? (
              <DoctorCardGrid key={doctor.name} doctor={doctor} />
            ) : (
              <DoctorCardList key={doctor.name} doctor={doctor} selectedMode={selectedMode} />
            ),
          )}
        </div>
      </ServiceResultsBase>

      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#DDDFE3] bg-white px-5 py-4">
        <p className="text-sm font-medium text-[#656F81]">
          Showing <span className="font-semibold text-[#1F1F1F]">{filteredDoctors.length}</span> curated doctor
          listings in {bookDoctorExploreCity}
        </p>
        <div className="inline-flex items-center gap-2">
          <span className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#1F1F1F] bg-[#1F1F1F] px-4 text-sm font-semibold text-white">
            1
          </span>
          <span className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#DDDFE3] px-4 text-sm font-medium text-[#8B94A4]">
            2
          </span>
          <span className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-[#DDDFE3] px-4 text-sm font-medium text-[#8B94A4]">
            3
          </span>
        </div>
      </div>
    </div>
  )
}
