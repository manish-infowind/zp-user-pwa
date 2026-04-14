import { useMemo, useState } from 'react'
import { ServiceResultsBase } from '@/features/landing/components/ServiceResultsBase'
import { NurseFiltersPanel } from './NurseFiltersPanel'
import { DoctorCardGrid, DoctorCardList } from '@/features/doctor/components/DoctorCard'
import { bookNurseProfiles, nurseCareCategories, nurseCareModes, nurseFeeRangeDefaults, nurseNurseTypes } from '../data/nurseData'
import { bookDoctorSortOptions } from '@/features/doctor/data/doctorData'
import { cn } from '@/utils/cn'

type Props = {
  heroSearchSnapshot?: any
}

type ViewMode = 'list' | 'grid'
type SortOption = (typeof bookDoctorSortOptions)[number]
type NurseCareCategory = (typeof nurseCareCategories)[number]
type NurseCareMode = (typeof nurseCareModes)[number]
type NurseNurseType = (typeof nurseNurseTypes)[number]

export function NurseResults({ heroSearchSnapshot }: Props) {
  const [nurseCareCategory, setNurseCareCategory] = useState<NurseCareCategory>(
    heroSearchSnapshot?.nurseCareCategory ?? nurseCareCategories[0]
  )
  const [nurseCareMode, setNurseCareMode] = useState<NurseCareMode>(
    heroSearchSnapshot?.nurseCareMode ?? nurseCareModes[0]
  )
  const [nurseType, setNurseType] = useState<NurseNurseType>(nurseNurseTypes[0])
  const [nurseFeeMin, setNurseFeeMin] = useState<number>(nurseFeeRangeDefaults.min)
  const [nurseFeeMax, setNurseFeeMax] = useState<number>(nurseFeeRangeDefaults.max)
  const [nurseAvailability, setNurseAvailability] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')

  const filteredNurses: any[] = useMemo(() => {
    const base = bookNurseProfiles.filter((p) => {
      const catMatch =
        nurseCareCategory === 'All' ||
        (nurseCareCategory === 'ICU / Critical Care'
          ? p.nurseListingType === 'Critical Care'
          : p.specialtyFilter === nurseCareCategory)
      const modeMatch =
        nurseCareMode === 'Any' || (p.nurseModeLabels?.includes(nurseCareMode) ?? false)
      const feeMatch = p.fee >= nurseFeeMin && p.fee <= nurseFeeMax
      const typeMatch =
        nurseType === 'General' || (p.nurseListingType ?? 'General') === nurseType
      return catMatch && modeMatch && feeMatch && typeMatch
    })

    if (sortBy === 'Price: Low to High') {
      return [...base].sort((a, b) => a.fee - b.fee)
    }
    if (sortBy === 'Experience') {
      return [...base].sort((a, b) => a.name.localeCompare(b.name))
    }
    return [...base].sort((a, b) => b.rating - a.rating)
  }, [nurseCareCategory, nurseCareMode, nurseFeeMax, nurseFeeMin, nurseType, sortBy])

  const clearFilters = () => {
    setNurseCareCategory('All')
    setNurseCareMode('Any')
    setNurseType(nurseNurseTypes[0])
    setNurseAvailability([])
    setNurseFeeMin(nurseFeeRangeDefaults.min)
    setNurseFeeMax(nurseFeeRangeDefaults.max)
  }

  return (
    <div className="app-container">
      <ServiceResultsBase
      exploreLine="Explore Nurses in"
      city="Ahmedabad"
      sidebarContent={
        <NurseFiltersPanel
          selectedCareCategory={nurseCareCategory}
          onCareCategoryChange={setNurseCareCategory}
          selectedNurseType={nurseType}
          onNurseTypeChange={setNurseType}
          selectedCareMode={nurseCareMode}
          onCareModeChange={setNurseCareMode}
          feeMin={nurseFeeMin}
          feeMax={nurseFeeMax}
          onFeeMinChange={setNurseFeeMin}
          onFeeMaxChange={setNurseFeeMax}
          selectedAvailability={nurseAvailability}
          onAvailabilityToggle={(label) =>
            setNurseAvailability((prev) =>
              prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
            )
          }
          onClear={clearFilters}
        />
      }
      topActions={
        <>
          <label className="flex min-h-9 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-[0.72rem] font-semibold text-[#5e616e] sm:max-w-[11.5rem]">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="min-h-8 w-full cursor-pointer bg-transparent text-[0.72rem] font-semibold outline-none sm:text-[0.85rem]"
            >
              {bookDoctorSortOptions.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </select>
          </label>
          <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
            {(['list', 'grid'] as const).map((mode) => (
              <button
                key={mode}
                type="button"
                onClick={() => setViewMode(mode)}
                className={cn(
                  'flex h-8 w-9 items-center justify-center rounded-full transition-colors',
                  viewMode === mode ? 'bg-[#9d497e] text-white' : 'text-[#5e616e] hover:bg-[#f1f2f3]',
                )}
              >
                {mode === 'list' ? (
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      }
    >
      <div className={cn(viewMode === 'grid' ? 'standard-grid' : 'grid grid-cols-1 gap-5')}>
        {filteredNurses.map((nurse) =>
          viewMode === 'grid' ? (
            <DoctorCardGrid key={nurse.name} doctor={nurse as any} />
          ) : (
            <DoctorCardList key={nurse.name} doctor={nurse as any} selectedMode={nurseCareMode} />
          ),
        )}
      </div>
      </ServiceResultsBase>
    </div>
  )
}
