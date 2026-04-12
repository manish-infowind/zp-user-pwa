import { useMemo, useState } from 'react'
import { ServiceResultsBase } from '@/features/landing/components/ServiceResultsBase'
import { ElderCard } from './ElderCard'
import {
  bookElderProfiles,
  elderCategoryFilterOptions,
  elderCaregiverFilterOptions,
} from '../data/elderData'
import { bookDoctorSortOptions } from '@/features/doctor/data/doctorData'

type Props = {
  heroSearchSnapshot?: any
}

type SortOption = (typeof bookDoctorSortOptions)[number]

export function ElderResults({ heroSearchSnapshot }: Props) {
  const [elderCategoryFilter, setElderCategoryFilter] = useState<string>(
    heroSearchSnapshot?.elderCareCategory ?? 'All'
  )
  const [elderCaregiverFilter, setElderCaregiverFilter] = useState<string>(
    heroSearchSnapshot?.caregiverType ?? 'Any'
  )
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')

  const filteredElderProfiles = useMemo(() => {
    const base = bookElderProfiles.filter((p) => {
      const catOk = elderCategoryFilter === 'All' || p.categoryTag === elderCategoryFilter
      const cgOk = elderCaregiverFilter === 'Any' || p.caregiverTag === elderCaregiverFilter
      return catOk && cgOk
    })

    if (sortBy === 'Price: Low to High') {
      return [...base].sort((a, b) => a.fee - b.fee)
    }
    if (sortBy === 'Experience') {
      return [...base].sort((a, b) => a.name.localeCompare(b.name))
    }
    return [...base].sort((a, b) => b.rating - a.rating)
  }, [elderCaregiverFilter, elderCategoryFilter, sortBy])

  const clearFilters = () => {
    setElderCategoryFilter('All')
    setElderCaregiverFilter('Any')
  }

  const filterLabel = 'mb-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9d9d9d] sm:text-[11px] sm:tracking-[0.18em]'

  return (
    <ServiceResultsBase
      exploreLine="Explore Elder Care in"
      city="Ahmedabad"
      sidebarContent={
        <div className="rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <p className="mb-4 text-base font-bold text-[#121316]">Filter elder care</p>
          <div className="space-y-4">
            <label className="block">
              <span className={filterLabel}>Care need</span>
              <select
                value={elderCategoryFilter}
                onChange={(e) => setElderCategoryFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {elderCategoryFilterOptions.map((c) => (
                  <option key={c} value={c}>
                    {c === 'All' ? 'All needs' : c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={filterLabel}>Caregiver type</span>
              <select
                value={elderCaregiverFilter}
                onChange={(e) => setElderCaregiverFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {elderCaregiverFilterOptions.map((g) => (
                  <option key={g} value={g}>
                    {g === 'Any' ? 'Any caregiver' : g}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-[#2E7D32] hover:underline"
            >
              Clear filters
            </button>
          </div>
        </div>
      }
      topActions={
        <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortOption)}
            className="min-h-9 w-full cursor-pointer bg-transparent text-xs font-semibold outline-none sm:text-sm"
          >
            {bookDoctorSortOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
      }
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {filteredElderProfiles.map((profile) => (
          <ElderCard key={profile.name} profile={profile} />
        ))}
      </div>
    </ServiceResultsBase>
  )
}
