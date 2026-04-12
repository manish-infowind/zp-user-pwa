import { useMemo, useState } from 'react'
import { ServiceResultsBase } from '@/features/landing/components/ServiceResultsBase'
import { AmbulanceCard } from './AmbulanceCard'
import {
  bookAmbulanceProfiles,
  ambulanceTypeStripOptions,
  ambulanceDestinationFilterOptions,
} from '../data/ambulanceData'
import { bookDoctorSortOptions } from '@/features/doctor/data/doctorData'

type Props = {
  heroSearchSnapshot?: any
}

type SortOption = (typeof bookDoctorSortOptions)[number]

export function AmbulanceResults({ heroSearchSnapshot }: Props) {
  const [ambulanceTypeFilter, setAmbulanceTypeFilter] = useState<string>(
    heroSearchSnapshot?.ambulanceType ?? 'All'
  )
  const [ambulanceDestinationFilter, setAmbulanceDestinationFilter] = useState<string>(
    heroSearchSnapshot?.destination ?? 'Any'
  )
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')

  const filteredAmbulances = useMemo(() => {
    const base = bookAmbulanceProfiles.filter((p) => {
      const typeOk = ambulanceTypeFilter === 'All' || p.ambulanceTypeTag === ambulanceTypeFilter
      const destOk =
        ambulanceDestinationFilter === 'Any' || p.destination === ambulanceDestinationFilter
      return typeOk && destOk
    })

    if (sortBy === 'Price: Low to High') {
      return [...base].sort((a, b) => a.fare - b.fare)
    }
    if (sortBy === 'Experience') {
      return [...base].sort((a, b) => a.name.localeCompare(b.name))
    }
    return [...base].sort((a, b) => b.rating - a.rating)
  }, [ambulanceDestinationFilter, ambulanceTypeFilter, sortBy])

  const clearFilters = () => {
    setAmbulanceTypeFilter('All')
    setAmbulanceDestinationFilter('Any')
  }

  const filterLabel = 'mb-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9d9d9d] sm:text-[11px] sm:tracking-[0.18em]'

  return (
    <ServiceResultsBase
      exploreLine="Explore Ambulances in"
      city="Ahmedabad"
      sidebarContent={
        <div className="rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <p className="mb-4 text-base font-bold text-[#121316]">Filter ambulances</p>
          <div className="space-y-4">
            <label className="block">
              <span className={filterLabel}>Ambulance type</span>
              <select
                value={ambulanceTypeFilter}
                onChange={(e) => setAmbulanceTypeFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                <option value="All">All types</option>
                {ambulanceTypeStripOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={filterLabel}>Destination</span>
              <select
                value={ambulanceDestinationFilter}
                onChange={(e) => setAmbulanceDestinationFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {ambulanceDestinationFilterOptions.map((d) => (
                  <option key={d} value={d}>
                    {d === 'Any' ? 'Any hospital' : d}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-[#FC5000] hover:underline"
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
        {filteredAmbulances.map((amb) => (
          <AmbulanceCard key={amb.id} ambulance={amb} />
        ))}
      </div>
    </ServiceResultsBase>
  )
}
