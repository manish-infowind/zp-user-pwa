import { useMemo, useState } from 'react'
import { ServiceResultsBase } from '@/features/landing/components/ServiceResultsBase'
import { LabCard } from './LabCard'
import {
  bookLabPackages,
  labCategoryFilterOptions,
  labSampleStripOptions,
  labTestPackageStripOptions,
} from '../data/labsData'
import { bookDoctorSortOptions } from '@/features/doctor/data/doctorData'

type Props = {
  heroSearchSnapshot?: any
}

type SortOption = (typeof bookDoctorSortOptions)[number]

export function LabsResults({ heroSearchSnapshot }: Props) {
  const [labCategoryFilter, setLabCategoryFilter] = useState<string>('All')
  const [labStripPackageFilter, setLabStripPackageFilter] = useState<string>(
    heroSearchSnapshot?.testPackageType ?? 'All Tests'
  )
  const [labSampleFilter, setLabSampleFilter] = useState<string>(
    heroSearchSnapshot?.sampleCollection ?? 'Any'
  )
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')

  const filteredLabPackages = useMemo(() => {
    const base = bookLabPackages.filter((p) => {
      const catOk = labCategoryFilter === 'All' || p.category === labCategoryFilter
      const stripOk =
        labStripPackageFilter === 'All Tests' || p.testPackageTag === labStripPackageFilter
      const sampOk = labSampleFilter === 'Any' || p.sampleCollection === labSampleFilter
      return catOk && stripOk && sampOk
    })

    if (sortBy === 'Price: Low to High') {
      return [...base].sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'Experience') {
      return [...base].sort((a, b) => a.title.localeCompare(b.title))
    }
    return [...base].sort((a, b) => b.rating - a.rating)
  }, [labCategoryFilter, labStripPackageFilter, labSampleFilter, sortBy])

  const clearFilters = () => {
    setLabCategoryFilter('All')
    setLabStripPackageFilter('All Tests')
    setLabSampleFilter('Any')
  }

  const filterLabel = 'mb-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9d9d9d] sm:text-[11px] sm:tracking-[0.18em]'

  return (
    <ServiceResultsBase
      exploreLine="Explore Labs in"
      city="Ahmedabad"
      sidebarContent={
        <div className="rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <p className="mb-4 text-base font-bold text-[#121316]">Filter lab tests</p>
          <div className="space-y-4">
            <label className="block">
              <span className={filterLabel}>Category</span>
              <select
                value={labCategoryFilter}
                onChange={(e) => setLabCategoryFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {labCategoryFilterOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={filterLabel}>Package Type</span>
              <select
                value={labStripPackageFilter}
                onChange={(e) => setLabStripPackageFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {labTestPackageStripOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={filterLabel}>Sample Collection</span>
              <select
                value={labSampleFilter}
                onChange={(e) => setLabSampleFilter(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
              >
                {labSampleStripOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              onClick={clearFilters}
              className="text-sm font-semibold text-[#0057ff] hover:underline"
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
        {filteredLabPackages.map((pkg) => (
          <LabCard key={pkg.title} pkg={pkg} />
        ))}
      </div>
    </ServiceResultsBase>
  )
}
