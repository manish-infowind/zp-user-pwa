import { useEffect, useMemo, useRef, useState } from 'react'

import { BookDoctorFiltersPanel } from '@/features/landing/components/BookDoctorFiltersPanel'
import { BookNurseFiltersPanel } from '@/features/landing/components/BookNurseFiltersPanel'
import {
  ambulanceDestinationFilterOptions,
  ambulanceDestinationOptions,
  ambulanceTypeStripOptions,
  bookAmbulanceExploreLine,
  bookAmbulanceProfiles,
  bookElderExploreLine,
  bookElderProfiles,
  bookDoctorExploreCity,
  bookDoctorProfiles,
  bookLabExploreLabsLine,
  bookLabPackages,
  bookNurseProfiles,
  bookDoctorSortOptions,
  bookingServiceTabs,
  landingStripDoctorTypes,
  ambulanceBenefits,
  ambulanceResponseTime,
  ambulanceSupport,
  ambulanceVerification,
  consultationModes,
  consultationSpecialties,
  elderAvailability,
  elderBenefits,
  elderCareCategories,
  elderCareDuration,
  elderCategoryFilterOptions,
  elderCaregiverFilterOptions,
  elderCaregiverTypes,
  elderVerification,
  labSampleStripOptions,
  labTestCategories,
  labTestPackageStripOptions,
  nurseCareCategories,
  nurseCareModes,
  nurseCareStripModes,
  nurseCareTypeStripOptions,
  nurseFeeRangeDefaults,
  nurseNurseTypes,
} from '@/features/landing/data/landingData'
import type {
  BookAmbulanceProfile,
  BookDoctorProfile,
  BookElderProfile,
  BookLabPackage,
  ConsultationMode,
  HeroBookingSearchPayload,
} from '@/features/landing/types'
import { cn } from '@/utils/cn'

type ViewMode = 'list' | 'grid'

type DoctorTypeFilter = (typeof landingStripDoctorTypes)[number]
type SortOption = (typeof bookDoctorSortOptions)[number]
type NurseCareCategory = (typeof nurseCareCategories)[number]
type NurseCareMode = (typeof nurseCareModes)[number]
type NurseNurseType = (typeof nurseNurseTypes)[number]

function FilterIcon() {
  return (
    <svg className="size-5 shrink-0 text-[#5e616e]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M4.5 6h.008M4.5 12h.008m0 0h15m-15 6h15m-15-6h9.75M4.5 18h.008" />
    </svg>
  )
}

const filterShell =
  'relative flex min-h-[56px] w-full items-center rounded-xl bg-[#f4f5f5] px-3 py-2.5 text-left sm:min-h-[64px] sm:px-4 sm:py-3'

const filterLabel = 'mb-0.5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#9d9d9d] sm:text-[11px] sm:tracking-[0.18em]'

function formatFee(value: number) {
  return new Intl.NumberFormat('en-IN').format(value)
}

function matchesMode(profile: BookDoctorProfile, mode: ConsultationMode) {
  return profile.consultationModes.includes(mode)
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={cn('size-5 shrink-0 text-[#5e616e] transition-transform', open && 'rotate-180')}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

function RadioDot({ active }: { active: boolean }) {
  return (
    <span
      className={cn(
        'grid size-5 shrink-0 place-items-center rounded-full border-2 transition-colors',
        active ? 'border-[#007954] bg-[#007954]' : 'border-[#e2e8f0] bg-white',
      )}
      aria-hidden
    >
      {active ? (
        <svg className="size-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      ) : null}
    </span>
  )
}

function DoctorPrice({ fee, originalFee }: { fee: number; originalFee: number }) {
  return (
    <div className="text-right">
      <div className="flex items-center justify-end gap-2">
        <span className="text-xs font-medium text-[#8b94a4] line-through sm:text-sm">₹{formatFee(originalFee)}</span>
        <span className="text-lg font-medium text-[#121316] sm:text-xl">₹{formatFee(fee)}</span>
      </div>
      <p className="mt-0.5 text-[10px] text-[#8b94a4] sm:text-xs">Consultation Fee</p>
    </div>
  )
}

const bookCtaGreen =
  'inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#00A651] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#009146] active:scale-[0.99] [touch-action:manipulation]'

const bookCtaOrange =
  'inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#FC5000] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#e04a00] active:scale-[0.99] [touch-action:manipulation]'

const bookCtaSage =
  'inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#2E7D32] px-4 text-sm font-bold text-white shadow-sm transition hover:bg-[#1B5E20] active:scale-[0.99] [touch-action:manipulation]'

function LabPackageCard({ pkg }: { pkg: BookLabPackage }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={pkg.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#D53F8C] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          Verified lab
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-[#121316] sm:text-lg">{pkg.title}</h3>
          <span className="shrink-0 text-sm font-bold text-[#121316]">{pkg.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-sm font-semibold text-[#0057ff]">{pkg.labName}</p>

        <p className="text-xs font-semibold text-[#2b3037]">{pkg.testPackageTag}</p>

        <p className="text-xs leading-snug text-[#5e616e] sm:text-sm">{pkg.testsIncluded}</p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#eef0f2] pt-3">
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-medium text-[#8b94a4] line-through sm:text-sm">
                ₹{formatFee(pkg.originalPrice)}
              </span>
              <span className="text-lg font-medium text-[#121316] sm:text-xl">₹{formatFee(pkg.price)}</span>
            </div>
            <p className="mt-0.5 text-[10px] text-[#8b94a4] sm:text-xs">{pkg.priceLabel ?? 'Test Price'}</p>
          </div>
        </div>

        <button type="button" className={bookCtaGreen}>
          Book now
        </button>
      </div>
    </article>
  )
}

function AmbulanceCard({ ambulance }: { ambulance: BookAmbulanceProfile }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#f1f2f3]">
        <img
          src={ambulance.image}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
          width={400}
          height={300}
        />
        <span className="absolute left-2 top-2 rounded-md bg-[#FC5000] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white sm:text-[11px]">
          Verified fleet
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-2 text-base font-bold leading-tight text-[#121316] sm:text-lg">{ambulance.name}</h3>
          <span className="shrink-0 text-sm font-bold text-[#121316]">{ambulance.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-sm font-semibold text-[#0057ff]">{ambulance.location}</p>
        <p className="text-xs font-semibold text-[#C2410C]">{ambulance.typeLabel}</p>
        <p className="text-xs leading-snug text-[#5e616e] sm:text-sm">{ambulance.featureLine}</p>
        <p className="text-[11px] text-[#5e616e]">
          <span className="font-semibold text-[#2b3037]">{ambulance.availability}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          ETA ~{ambulance.etaMins} min · {ambulance.tripsLine}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {ambulance.serviceTags.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#FFEDE5] px-2 py-0.5 text-[10px] font-semibold text-[#9a3412] sm:text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#eef0f2] pt-3">
          {ambulance.saveLabel ? (
            <span className="rounded-lg bg-[#FFEDE5] px-2.5 py-1 text-[11px] font-semibold text-[#c2410c] sm:text-xs">
              {ambulance.saveLabel}
            </span>
          ) : (
            <span />
          )}
          <div className="text-right">
            <div className="flex items-center justify-end gap-2">
              <span className="text-xs font-medium text-[#8b94a4] line-through sm:text-sm">
                ₹{formatFee(ambulance.originalFare)}
              </span>
              <span className="text-lg font-medium text-[#121316] sm:text-xl">₹{formatFee(ambulance.fare)}</span>
            </div>
            <p className="mt-0.5 text-[10px] text-[#8b94a4] sm:text-xs">Estimated fare</p>
          </div>
        </div>

        <button type="button" className={bookCtaOrange}>
          Book now
        </button>
      </div>
    </article>
  )
}

function ElderCard({ profile }: { profile: BookElderProfile }) {
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

function DoctorCardGrid({
  doctor,
}: {
  doctor: BookDoctorProfile
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="relative aspect-[4/3] w-full shrink-0 bg-[#f1f2f3]">
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

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate text-base font-bold leading-tight text-[#121316] sm:text-lg">{doctor.name}</h3>
          <span className="shrink-0 text-sm font-bold text-[#121316]">{doctor.rating.toFixed(1)} ★</span>
        </div>

        <p className="text-sm font-semibold text-[#0057ff] sm:text-sm">+ {doctor.location}</p>

        <p className="text-xs leading-snug text-[#5e616e] sm:text-sm">
          <span className="font-semibold text-[#2b3037]">{doctor.specialty}</span>
          <span className="mx-1.5 text-[#b5bac2]">|</span>
          <span>{doctor.credentials}</span>
        </p>

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 border-t border-[#eef0f2] pt-3">
          <span className="rounded-lg bg-[#cdf8e5] px-2.5 py-1 text-[11px] font-semibold text-[#06c270] sm:text-xs">
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

function DoctorCardList({
  doctor,
  selectedMode,
}: {
  doctor: BookDoctorProfile
  selectedMode: ConsultationMode | string
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#e4e4e4] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-4 p-4 md:flex-row md:items-stretch md:gap-5">
        <div className="relative mx-auto h-40 w-40 shrink-0 overflow-hidden rounded-xl bg-[#f1f2f3] md:mx-0 md:h-[168px] md:w-[148px]">
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

        <div className="flex min-w-0 flex-1 flex-col gap-4 lg:flex-row lg:gap-8">
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h3 className="text-lg font-bold leading-tight text-[#121316] md:text-xl">{doctor.name}</h3>
              <span className="text-sm font-semibold text-[#121316]">
                {doctor.rating} <span className="text-[#fac91e]">★</span>
              </span>
            </div>
            <p className="mt-1 text-sm font-bold text-[#0057ff]">
              <span aria-hidden>+ </span>
              {doctor.location}
            </p>
            <p className="mt-2 text-sm text-[#5e616e]">
              <span className="font-semibold text-[#2b3037]">{doctor.specialty}</span>
              <span className="mx-2 text-[#b5bac2]">|</span>
              {doctor.credentials}
            </p>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#6b7280]">{doctor.bioSnippet}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {(doctor.nurseModeLabels ?? doctor.consultationModes).map((mode) => (
                <span
                  key={`${doctor.name}-${mode}`}
                  className={cn(
                    'rounded-full px-2.5 py-1 text-[11px] font-semibold md:text-xs',
                    mode === selectedMode ? 'bg-[#f8bfe3] text-[#9d497e]' : 'bg-[#f1f2f3] text-[#5e616e]',
                  )}
                >
                  {mode}
                </span>
              ))}
            </div>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 border-t border-[#eef0f2] pt-4 lg:w-56 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <div className="flex items-center gap-2 rounded-full bg-[#f0f6ff] px-3 py-2">
              <span className="rounded-md bg-white px-2 py-0.5 text-sm font-bold text-[#0046cc]">
                {doctor.rating.toFixed(1)}
              </span>
              <span className="text-xs leading-tight">
                <span className="font-semibold text-[#0046cc]">Excellent</span>
                <span className="block text-[#8b94a4]">{doctor.reviews}</span>
              </span>
            </div>
            <button
              type="button"
              className="min-h-10 w-full rounded-lg border border-[#cfd6e4] bg-white px-4 text-sm font-semibold text-[#2b3037] transition hover:bg-[#f8f9fb] [touch-action:manipulation]"
            >
              View profile
            </button>
            <button type="button" className={bookCtaGreen}>
              Book appointment
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#eef0f2] bg-[#fafbfc] px-4 py-3">
        <span className="rounded-lg bg-[#cdf8e5] px-2.5 py-1 text-xs font-semibold text-[#06c270]">
          {doctor.discountLabel}
        </span>
        <DoctorPrice fee={doctor.fee} originalFee={doctor.originalFee} />
      </div>
    </article>
  )
}

type BookDoctorSectionProps = {
  /** Set when user runs SEARCH NOW on the home hero (doctor vs nurse vs lab vs ambulance). */
  bookingSearchKind: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder' | null
  /** Same field values as the hero strip — filters + list match the first search. */
  heroSearchSnapshot: HeroBookingSearchPayload | null
}

export function BookDoctorSection({ bookingSearchKind, heroSearchSnapshot }: BookDoctorSectionProps) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('General')
  const [selectedMode, setSelectedMode] = useState<ConsultationMode>('Clinic Visit')
  const [viewMode, setViewMode] = useState<ViewMode>('list')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [sortBy, setSortBy] = useState<SortOption>('Top Reviewed')
  const [selectedDoctorType, setSelectedDoctorType] = useState<DoctorTypeFilter>('General')
  const [feeMin, setFeeMin] = useState(200)
  const [feeMax, setFeeMax] = useState(2000)
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>([])

  const [nurseCareCategory, setNurseCareCategory] = useState<NurseCareCategory>(nurseCareCategories[0])
  const [nurseCareMode, setNurseCareMode] = useState<NurseCareMode>(nurseCareModes[0])
  const [nurseType, setNurseType] = useState<NurseNurseType>(nurseNurseTypes[0])
  const [nurseFeeMin, setNurseFeeMin] = useState<number>(nurseFeeRangeDefaults.min)
  const [nurseFeeMax, setNurseFeeMax] = useState<number>(nurseFeeRangeDefaults.max)
  const [nurseAvailability, setNurseAvailability] = useState<string[]>([])

  const [labCategoryFilter, setLabCategoryFilter] = useState<string>('All')
  /** Figma “All Tests” / “Blood Test” / … — matches hero + `testPackageTag` on cards. */
  const [labStripPackageFilter, setLabStripPackageFilter] = useState<string>('All Tests')
  const [labSampleFilter, setLabSampleFilter] = useState<string>('Any')

  const [ambulanceTypeFilter, setAmbulanceTypeFilter] = useState<string>('All')
  const [ambulanceDestinationFilter, setAmbulanceDestinationFilter] = useState<string>('Any')

  const [elderCategoryFilter, setElderCategoryFilter] = useState<string>('All')
  const [elderCaregiverFilter, setElderCaregiverFilter] = useState<string>('Any')

  const resultsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mobileFiltersOpen) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileFiltersOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileFiltersOpen])

  useEffect(() => {
    if (!mobileFiltersOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [mobileFiltersOpen])

  useEffect(() => {
    if (!heroSearchSnapshot) return
    if (heroSearchSnapshot.kind === 'doctor') {
      if (consultationSpecialties.includes(heroSearchSnapshot.specialty)) {
        setSelectedSpecialty(heroSearchSnapshot.specialty)
      }
      setSelectedMode(heroSearchSnapshot.consultationMode)
      return
    }
    if (heroSearchSnapshot.kind === 'nurse') {
      const cat = heroSearchSnapshot.nurseCareCategory
      if ((nurseCareCategories as readonly string[]).includes(cat)) {
        setNurseCareCategory(cat as NurseCareCategory)
      }
      const mode = heroSearchSnapshot.nurseCareMode
      if ((nurseCareModes as readonly string[]).includes(mode)) {
        setNurseCareMode(mode as NurseCareMode)
      }
      return
    }
    if (heroSearchSnapshot.kind === 'lab') {
      const { testPackageType, sampleCollection } = heroSearchSnapshot
      if ((labTestPackageStripOptions as readonly string[]).includes(testPackageType)) {
        setLabStripPackageFilter(testPackageType)
      } else {
        setLabStripPackageFilter('All Tests')
      }
      if ((labSampleStripOptions as readonly string[]).includes(sampleCollection)) {
        setLabSampleFilter(sampleCollection)
      } else {
        setLabSampleFilter('Any')
      }
      return
    }
    if (heroSearchSnapshot.kind === 'ambulance') {
      const { ambulanceType, destination } = heroSearchSnapshot
      if ((ambulanceTypeStripOptions as readonly string[]).includes(ambulanceType)) {
        setAmbulanceTypeFilter(ambulanceType)
      } else {
        setAmbulanceTypeFilter('All')
      }
      if ((ambulanceDestinationOptions as readonly string[]).includes(destination)) {
        setAmbulanceDestinationFilter(destination)
      } else {
        setAmbulanceDestinationFilter('Any')
      }
      return
    }
    if (heroSearchSnapshot.kind === 'elder') {
      const { elderCareCategory, caregiverType } = heroSearchSnapshot
      if ((elderCareCategories as readonly string[]).includes(elderCareCategory)) {
        setElderCategoryFilter(elderCareCategory)
      } else {
        setElderCategoryFilter('All')
      }
      if ((elderCaregiverTypes as readonly string[]).includes(caregiverType)) {
        setElderCaregiverFilter(caregiverType)
      } else {
        setElderCaregiverFilter('Any')
      }
    }
  }, [heroSearchSnapshot])

  const filterBadgeCount = useMemo(() => {
    let n = 0
    if (selectedSpecialty !== 'General') n += 1
    if (selectedDoctorType !== 'General') n += 1
    if (selectedAvailability.length) n += selectedAvailability.length
    if (feeMin !== 200 || feeMax !== 2000) n += 1
    return n
  }, [feeMax, feeMin, selectedAvailability.length, selectedDoctorType, selectedSpecialty])

  const filterBadgeCountNurse = useMemo(() => {
    let n = 0
    if (nurseCareCategory !== 'All') n += 1
    if (nurseCareMode !== 'Any') n += 1
    if (nurseType !== nurseNurseTypes[0]) n += 1
    if (nurseAvailability.length) n += nurseAvailability.length
    if (nurseFeeMin !== nurseFeeRangeDefaults.min || nurseFeeMax !== nurseFeeRangeDefaults.max) n += 1
    return n
  }, [
    nurseAvailability.length,
    nurseCareCategory,
    nurseCareMode,
    nurseFeeMax,
    nurseFeeMin,
    nurseType,
  ])

  const filteredDoctors = useMemo(() => {
    const base = bookDoctorProfiles.filter((profile) => {
      const specialtyMatch =
        selectedSpecialty === 'General' ||
        profile.specialtyFilter.toLowerCase() === selectedSpecialty.toLowerCase()
      const modeMatch = matchesMode(profile, selectedMode)
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

  const filterBadgeCountLab = useMemo(() => {
    let n = 0
    if (labCategoryFilter !== 'All') n += 1
    if (labStripPackageFilter !== 'All Tests') n += 1
    if (labSampleFilter !== 'Any') n += 1
    return n
  }, [labCategoryFilter, labStripPackageFilter, labSampleFilter])

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

  const filterBadgeCountAmbulance = useMemo(() => {
    let n = 0
    if (ambulanceTypeFilter !== 'All') n += 1
    if (ambulanceDestinationFilter !== 'Any') n += 1
    return n
  }, [ambulanceDestinationFilter, ambulanceTypeFilter])

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

  const filterBadgeCountElder = useMemo(() => {
    let n = 0
    if (elderCategoryFilter !== 'All') n += 1
    if (elderCaregiverFilter !== 'Any') n += 1
    return n
  }, [elderCaregiverFilter, elderCategoryFilter])

  const filteredNurses = useMemo(() => {
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

  function clearSidebarFilters() {
    setSelectedSpecialty('General')
    setSelectedDoctorType('General')
    setSelectedAvailability([])
    setFeeMin(200)
    setFeeMax(2000)
  }

  function clearNurseSidebarFilters() {
    setNurseCareCategory('All')
    setNurseCareMode('Any')
    setNurseType(nurseNurseTypes[0])
    setNurseAvailability([])
    setNurseFeeMin(nurseFeeRangeDefaults.min)
    setNurseFeeMax(nurseFeeRangeDefaults.max)
  }

  function clearLabFilters() {
    setLabCategoryFilter('All')
    setLabStripPackageFilter('All Tests')
    setLabSampleFilter('Any')
  }

  function clearAmbulanceFilters() {
    setAmbulanceTypeFilter('All')
    setAmbulanceDestinationFilter('Any')
  }

  function clearElderFilters() {
    setElderCategoryFilter('All')
    setElderCaregiverFilter('Any')
  }

  const scrollToResults = () => {
    resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const isNurseResults = bookingSearchKind === 'nurse'
  const isLabResults = bookingSearchKind === 'lab'
  const isAmbulanceResults = bookingSearchKind === 'ambulance'
  const isElderResults = bookingSearchKind === 'elder'
  const isDoctorResults = bookingSearchKind === 'doctor' || bookingSearchKind === null

  return (
    <section
      id="booking-results"
      className="w-full min-w-0 scroll-mt-[72px] bg-white px-4 py-10 sm:px-[clamp(1rem,3vw,2rem)] sm:py-16 md:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-6 sm:gap-8">
        <>
          {isDoctorResults ? (
            <>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
          <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            <BookDoctorFiltersPanel
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
              onClear={clearSidebarFilters}
            />
          </aside>

          <div className="min-w-0 space-y-4">
            <div className="flex flex-wrap items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-sm font-bold text-[#2b3037] shadow-sm [touch-action:manipulation] sm:min-w-[140px] sm:flex-none"
              >
                <FilterIcon />
                Filters
                {filterBadgeCount > 0 ? (
                  <span className="grid min-h-5 min-w-5 place-items-center rounded-full bg-[#9d497e] px-1.5 text-[10px] font-bold leading-none text-white">
                    {filterBadgeCount}
                  </span>
                ) : null}
              </button>
              <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
                <span className="sr-only">Sort by</span>
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
              <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
                {(['list', 'grid'] as const).map((mode) => {
                  const active = mode === viewMode
                  return (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={cn(
                        'min-h-9 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors [touch-action:manipulation] sm:px-3 sm:text-xs',
                        active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                      )}
                    >
                      {mode === 'list' ? 'List' : 'Grid'}
                    </button>
                  )
                })}
              </div>
            </div>

            <nav className="text-xs text-[#8b94a4] sm:text-sm">
              <a href="#home" className="font-medium hover:text-[#0057ff] hover:underline">
                Home
              </a>
              <span className="mx-2 text-[#cfd6e4]">/</span>
              <span className="font-semibold text-[#2b3037]">Book Doctor</span>
            </nav>

            <div
              ref={resultsRef}
              className="flex flex-col gap-4 border-b border-[#eef0f2] pb-4 lg:flex-row lg:items-start lg:justify-between"
            >
              <div className="min-w-0">
                <h2 className="text-xl font-bold leading-tight text-[#121316] sm:text-2xl">
                  Explore 300+ Doctors in {bookDoctorExploreCity}
                </h2>
                <p className="mt-2 text-sm text-[#5e616e]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b94a4]">
                    Showing results
                  </span>{' '}
                  — {filteredDoctors.length} doctor{filteredDoctors.length === 1 ? '' : 's'} for{' '}
                  <span className="font-semibold text-ink">{selectedSpecialty}</span> and{' '}
                  <span className="font-semibold text-ink">{selectedMode}</span>.
                </p>
              </div>

              <div className="hidden shrink-0 flex-wrap items-center gap-3 lg:flex">
                <label className="flex items-center gap-2 text-sm font-medium text-[#5e616e]">
                  Sort by:
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="min-h-10 cursor-pointer rounded-full border border-[#d9dde3] bg-white px-4 py-2 text-sm font-semibold text-[#2b3037] outline-none"
                  >
                    {bookDoctorSortOptions.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="inline-flex rounded-full border border-[#d9dde3] bg-white p-1">
                  {(['list', 'grid'] as const).map((mode) => {
                    const active = mode === viewMode
                    return (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setViewMode(mode)}
                        className={cn(
                          'min-h-10 rounded-full px-4 py-2 text-xs font-semibold transition-colors [touch-action:manipulation] sm:text-sm',
                          active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                        )}
                      >
                        {mode === 'list' ? 'List view' : 'Grid view'}
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div
              className={cn(
                'grid gap-4',
                viewMode === 'grid'
                  ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                  : 'grid-cols-1',
              )}
            >
              {filteredDoctors.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-[#d9dde3] bg-[#fafafa] px-4 py-12 text-center text-sm text-muted">
                  No doctors match these filters. Try adjusting speciality, fee range, or consultation mode.
                </p>
              ) : null}

              {filteredDoctors.map((doctor) =>
                viewMode === 'grid' ? (
                  <DoctorCardGrid key={`${doctor.name}-${doctor.location}`} doctor={doctor} />
                ) : (
                  <DoctorCardList
                    key={`${doctor.name}-${doctor.location}`}
                    doctor={doctor}
                    selectedMode={selectedMode}
                  />
                ),
              )}
            </div>

            <nav className="flex flex-wrap items-center justify-center gap-1 pt-2 sm:gap-3" aria-label="Pagination">
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                aria-label="Previous page"
              >
                ‹
              </button>
              {['1', '2', '3', '…', '9', '10'].map((page, index) => (
                <button
                  key={`${page}-${index}`}
                  type="button"
                  className={cn(
                    'grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-medium [touch-action:manipulation] sm:h-10 sm:min-w-10 sm:px-3',
                    index === 0 ? 'border border-ink text-ink' : 'text-[#b5bac2]',
                  )}
                >
                  {page}
                </button>
              ))}
              <button
                type="button"
                className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                aria-label="Next page"
              >
                ›
              </button>
            </nav>
          </div>
        </div>
              </>
            ) : isLabResults ? (
              <>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
                  <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                    <div className="rounded-2xl border border-[#e4e4e4] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                      <p className="mb-4 text-base font-bold text-[#121316]">Filter labs</p>
                      <div className="space-y-4">
                        <label className="block">
                          <span className={filterLabel}>Test category</span>
                          <select
                            value={labCategoryFilter}
                            onChange={(e) => setLabCategoryFilter(e.target.value)}
                            className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            <option value="All">All categories</option>
                            {labTestCategories.map((c) => (
                              <option key={c} value={c}>
                                {c}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="block">
                          <span className={filterLabel}>Test package type</span>
                          <select
                            value={labStripPackageFilter}
                            onChange={(e) => setLabStripPackageFilter(e.target.value)}
                            className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            {labTestPackageStripOptions.map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </label>
                        <label className="block">
                          <span className={filterLabel}>Sample collection</span>
                          <select
                            value={labSampleFilter}
                            onChange={(e) => setLabSampleFilter(e.target.value)}
                            className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            <option value="Any">Any</option>
                            {labSampleStripOptions.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                        </label>
                        <button
                          type="button"
                          onClick={clearLabFilters}
                          className="text-sm font-semibold text-[#0057ff] hover:underline"
                        >
                          Clear filters
                        </button>
                      </div>
                    </div>
                  </aside>

                  <div className="min-w-0 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-sm font-bold text-[#2b3037] shadow-sm [touch-action:manipulation] sm:min-w-[140px] sm:flex-none"
                      >
                        <FilterIcon />
                        Filters
                        {filterBadgeCountLab > 0 ? (
                          <span className="grid min-h-5 min-w-5 place-items-center rounded-full bg-[#D53F8C] px-1.5 text-[10px] font-bold leading-none text-white">
                            {filterBadgeCountLab}
                          </span>
                        ) : null}
                      </button>
                      <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
                        <span className="sr-only">Sort by</span>
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
                      <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
                        {(['list', 'grid'] as const).map((mode) => {
                          const active = mode === viewMode
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setViewMode(mode)}
                              className={cn(
                                'min-h-9 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors [touch-action:manipulation] sm:px-3 sm:text-xs',
                                active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                              )}
                            >
                              {mode === 'list' ? 'List' : 'Grid'}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <nav className="text-xs text-[#8b94a4] sm:text-sm">
                      <a href="#home" className="font-medium hover:text-[#0057ff] hover:underline">
                        Home
                      </a>
                      <span className="mx-2 text-[#cfd6e4]">/</span>
                      <span className="font-semibold text-[#2b3037]">Book Lab</span>
                    </nav>

                    <div
                      ref={resultsRef}
                      className="flex flex-col gap-4 border-b border-[#eef0f2] pb-4 lg:flex-row lg:items-start lg:justify-between"
                    >
                      <div className="min-w-0">
                        <h2 className="text-xl font-bold leading-tight text-[#121316] sm:text-2xl">
                          {bookLabExploreLabsLine(bookDoctorExploreCity)}
                        </h2>
                        <p className="mt-2 text-sm text-[#5e616e]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b94a4]">
                            Showing results
                          </span>{' '}
                          — {filteredLabPackages.length} package
                          {filteredLabPackages.length === 1 ? '' : 's'} matching your filters.
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'grid gap-4',
                        viewMode === 'grid'
                          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                          : 'grid-cols-1',
                      )}
                    >
                      {filteredLabPackages.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-[#d9dde3] bg-[#fafafa] px-4 py-12 text-center text-sm text-muted">
                          No lab packages match these filters. Try clearing filters or pick another category.
                        </p>
                      ) : null}
                      {filteredLabPackages.map((pkg) => (
                        <LabPackageCard key={pkg.id} pkg={pkg} />
                      ))}
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-1 pt-2 sm:gap-3" aria-label="Pagination">
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Previous page"
                      >
                        ‹
                      </button>
                      {['1', '2', '3', '…', '9', '10'].map((page, index) => (
                        <button
                          key={`${page}-${index}`}
                          type="button"
                          className={cn(
                            'grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-medium [touch-action:manipulation] sm:h-10 sm:min-w-10 sm:px-3',
                            index === 0 ? 'border border-ink text-ink' : 'text-[#b5bac2]',
                          )}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Next page"
                      >
                        ›
                      </button>
                    </nav>
                  </div>
                </div>
              </>
            ) : isAmbulanceResults ? (
              <>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
                  <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
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
                          onClick={clearAmbulanceFilters}
                          className="text-sm font-semibold text-[#FC5000] hover:underline"
                        >
                          Clear filters
                        </button>
                      </div>
                    </div>
                  </aside>

                  <div className="min-w-0 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-sm font-bold text-[#2b3037] shadow-sm [touch-action:manipulation] sm:min-w-[140px] sm:flex-none"
                      >
                        <FilterIcon />
                        Filters
                        {filterBadgeCountAmbulance > 0 ? (
                          <span className="grid min-h-5 min-w-5 place-items-center rounded-full bg-[#FC5000] px-1.5 text-[10px] font-bold leading-none text-white">
                            {filterBadgeCountAmbulance}
                          </span>
                        ) : null}
                      </button>
                      <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
                        <span className="sr-only">Sort by</span>
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
                      <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
                        {(['list', 'grid'] as const).map((mode) => {
                          const active = mode === viewMode
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setViewMode(mode)}
                              className={cn(
                                'min-h-9 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors [touch-action:manipulation] sm:px-3 sm:text-xs',
                                active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                              )}
                            >
                              {mode === 'list' ? 'List' : 'Grid'}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <nav className="text-xs text-[#8b94a4] sm:text-sm">
                      <a href="#home" className="font-medium hover:text-[#0057ff] hover:underline">
                        Home
                      </a>
                      <span className="mx-2 text-[#cfd6e4]">/</span>
                      <span className="font-semibold text-[#2b3037]">Book Ambulance</span>
                    </nav>

                    <div
                      ref={resultsRef}
                      className="flex flex-col gap-4 border-b border-[#eef0f2] pb-4 lg:flex-row lg:items-start lg:justify-between"
                    >
                      <div className="min-w-0">
                        <h2 className="text-xl font-bold leading-tight text-[#121316] sm:text-2xl">
                          {bookAmbulanceExploreLine(bookDoctorExploreCity)}
                        </h2>
                        <p className="mt-2 text-sm text-[#5e616e]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b94a4]">
                            Showing results
                          </span>{' '}
                          — {filteredAmbulances.length} ambulance
                          {filteredAmbulances.length === 1 ? '' : 's'} for your route and filters.
                        </p>
                      </div>

                      <div className="hidden shrink-0 flex-wrap items-center gap-3 lg:flex">
                        <label className="flex items-center gap-2 text-sm font-medium text-[#5e616e]">
                          Sort by:
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="min-h-10 cursor-pointer rounded-full border border-[#d9dde3] bg-white px-4 py-2 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            {bookDoctorSortOptions.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </label>
                        <div className="inline-flex rounded-full border border-[#d9dde3] bg-white p-1">
                          {(['list', 'grid'] as const).map((mode) => {
                            const active = mode === viewMode
                            return (
                              <button
                                key={mode}
                                type="button"
                                onClick={() => setViewMode(mode)}
                                className={cn(
                                  'min-h-10 rounded-full px-4 py-2 text-xs font-semibold transition-colors [touch-action:manipulation] sm:text-sm',
                                  active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                                )}
                              >
                                {mode === 'list' ? 'List view' : 'Grid view'}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'grid gap-4',
                        viewMode === 'grid'
                          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                          : 'grid-cols-1',
                      )}
                    >
                      {filteredAmbulances.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-[#d9dde3] bg-[#fafafa] px-4 py-12 text-center text-sm text-muted">
                          No ambulances match these filters. Try another type or destination.
                        </p>
                      ) : null}
                      {filteredAmbulances.map((amb) => (
                        <AmbulanceCard key={amb.id} ambulance={amb} />
                      ))}
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-1 pt-2 sm:gap-3" aria-label="Pagination">
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Previous page"
                      >
                        ‹
                      </button>
                      {['1', '2', '3', '…', '9', '10'].map((page, index) => (
                        <button
                          key={`${page}-${index}`}
                          type="button"
                          className={cn(
                            'grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-medium [touch-action:manipulation] sm:h-10 sm:min-w-10 sm:px-3',
                            index === 0 ? 'border border-ink text-ink' : 'text-[#b5bac2]',
                          )}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Next page"
                      >
                        ›
                      </button>
                    </nav>
                  </div>
                </div>
              </>
            ) : isElderResults ? (
              <>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
                  <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
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
                          onClick={clearElderFilters}
                          className="text-sm font-semibold text-[#2E7D32] hover:underline"
                        >
                          Clear filters
                        </button>
                      </div>
                    </div>
                  </aside>

                  <div className="min-w-0 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-sm font-bold text-[#2b3037] shadow-sm [touch-action:manipulation] sm:min-w-[140px] sm:flex-none"
                      >
                        <FilterIcon />
                        Filters
                        {filterBadgeCountElder > 0 ? (
                          <span className="grid min-h-5 min-w-5 place-items-center rounded-full bg-[#2E7D32] px-1.5 text-[10px] font-bold leading-none text-white">
                            {filterBadgeCountElder}
                          </span>
                        ) : null}
                      </button>
                      <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
                        <span className="sr-only">Sort by</span>
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
                      <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
                        {(['list', 'grid'] as const).map((mode) => {
                          const active = mode === viewMode
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setViewMode(mode)}
                              className={cn(
                                'min-h-9 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors [touch-action:manipulation] sm:px-3 sm:text-xs',
                                active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                              )}
                            >
                              {mode === 'list' ? 'List' : 'Grid'}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <nav className="text-xs text-[#8b94a4] sm:text-sm">
                      <a href="#home" className="font-medium hover:text-[#0057ff] hover:underline">
                        Home
                      </a>
                      <span className="mx-2 text-[#cfd6e4]">/</span>
                      <span className="font-semibold text-[#2b3037]">Book Elder Care</span>
                    </nav>

                    <div
                      ref={resultsRef}
                      className="flex flex-col gap-4 border-b border-[#eef0f2] pb-4 lg:flex-row lg:items-start lg:justify-between"
                    >
                      <div className="min-w-0">
                        <h2 className="text-xl font-bold leading-tight text-[#121316] sm:text-2xl">
                          {bookElderExploreLine(bookDoctorExploreCity)}
                        </h2>
                        <p className="mt-2 text-sm text-[#5e616e]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b94a4]">
                            Showing results
                          </span>{' '}
                          — {filteredElderProfiles.length} caregiver
                          {filteredElderProfiles.length === 1 ? '' : 's'} for your filters.
                        </p>
                      </div>

                      <div className="hidden shrink-0 flex-wrap items-center gap-3 lg:flex">
                        <label className="flex items-center gap-2 text-sm font-medium text-[#5e616e]">
                          Sort by:
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="min-h-10 cursor-pointer rounded-full border border-[#d9dde3] bg-white px-4 py-2 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            {bookDoctorSortOptions.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </label>
                        <div className="inline-flex rounded-full border border-[#d9dde3] bg-white p-1">
                          {(['list', 'grid'] as const).map((mode) => {
                            const active = mode === viewMode
                            return (
                              <button
                                key={mode}
                                type="button"
                                onClick={() => setViewMode(mode)}
                                className={cn(
                                  'min-h-10 rounded-full px-4 py-2 text-xs font-semibold transition-colors [touch-action:manipulation] sm:text-sm',
                                  active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                                )}
                              >
                                {mode === 'list' ? 'List view' : 'Grid view'}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'grid gap-4',
                        viewMode === 'grid'
                          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                          : 'grid-cols-1',
                      )}
                    >
                      {filteredElderProfiles.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-[#d9dde3] bg-[#fafafa] px-4 py-12 text-center text-sm text-muted">
                          No caregivers match these filters. Try another care need or caregiver type.
                        </p>
                      ) : null}
                      {filteredElderProfiles.map((p) => (
                        <ElderCard key={p.id} profile={p} />
                      ))}
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-1 pt-2 sm:gap-3" aria-label="Pagination">
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Previous page"
                      >
                        ‹
                      </button>
                      {['1', '2', '3', '…', '9', '10'].map((page, index) => (
                        <button
                          key={`${page}-${index}`}
                          type="button"
                          className={cn(
                            'grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-medium [touch-action:manipulation] sm:h-10 sm:min-w-10 sm:px-3',
                            index === 0 ? 'border border-ink text-ink' : 'text-[#b5bac2]',
                          )}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Next page"
                      >
                        ›
                      </button>
                    </nav>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,320px)_minmax(0,1fr)] lg:items-start lg:gap-8">
                  <aside className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
                    <BookNurseFiltersPanel
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
                      onClear={clearNurseSidebarFilters}
                    />
                  </aside>

                  <div className="min-w-0 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 lg:hidden">
                      <button
                        type="button"
                        onClick={() => setMobileFiltersOpen(true)}
                        className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-sm font-bold text-[#2b3037] shadow-sm [touch-action:manipulation] sm:min-w-[140px] sm:flex-none"
                      >
                        <FilterIcon />
                        Filters
                        {filterBadgeCountNurse > 0 ? (
                          <span className="grid min-h-5 min-w-5 place-items-center rounded-full bg-[#9d497e] px-1.5 text-[10px] font-bold leading-none text-white">
                            {filterBadgeCountNurse}
                          </span>
                        ) : null}
                      </button>
                      <label className="flex min-h-10 min-w-0 flex-1 items-center gap-2 rounded-full border border-[#d9dde3] bg-white px-3 text-xs font-semibold text-[#5e616e] sm:max-w-[200px]">
                        <span className="sr-only">Sort by</span>
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
                      <div className="inline-flex shrink-0 rounded-full border border-[#d9dde3] bg-white p-1">
                        {(['list', 'grid'] as const).map((mode) => {
                          const active = mode === viewMode
                          return (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => setViewMode(mode)}
                              className={cn(
                                'min-h-9 rounded-full px-2.5 py-1.5 text-[11px] font-semibold transition-colors [touch-action:manipulation] sm:px-3 sm:text-xs',
                                active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                              )}
                            >
                              {mode === 'list' ? 'List' : 'Grid'}
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    <nav className="text-xs text-[#8b94a4] sm:text-sm">
                      <a href="#home" className="font-medium hover:text-[#0057ff] hover:underline">
                        Home
                      </a>
                      <span className="mx-2 text-[#cfd6e4]">/</span>
                      <span className="font-semibold text-[#2b3037]">Book Nurse</span>
                    </nav>

                    <div
                      ref={resultsRef}
                      className="flex flex-col gap-4 border-b border-[#eef0f2] pb-4 lg:flex-row lg:items-start lg:justify-between"
                    >
                      <div className="min-w-0">
                        <h2 className="text-xl font-bold leading-tight text-[#121316] sm:text-2xl">
                          Explore 300+ Nurses in {bookDoctorExploreCity}
                        </h2>
                        <p className="mt-2 text-sm text-[#5e616e]">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#8b94a4]">
                            Showing results
                          </span>{' '}
                          — {filteredNurses.length} nurse{filteredNurses.length === 1 ? '' : 's'} for{' '}
                          <span className="font-semibold text-ink">
                            {nurseCareTypeStripOptions.find((o) => o.value === nurseCareCategory)?.label ??
                              'General Care'}
                          </span>{' '}
                          and{' '}
                          <span className="font-semibold text-ink">
                            {nurseCareMode === 'Any' ? 'any mode' : nurseCareMode}
                          </span>
                          .
                        </p>
                      </div>

                      <div className="hidden shrink-0 flex-wrap items-center gap-3 lg:flex">
                        <label className="flex items-center gap-2 text-sm font-medium text-[#5e616e]">
                          Sort by:
                          <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="min-h-10 cursor-pointer rounded-full border border-[#d9dde3] bg-white px-4 py-2 text-sm font-semibold text-[#2b3037] outline-none"
                          >
                            {bookDoctorSortOptions.map((o) => (
                              <option key={o} value={o}>
                                {o}
                              </option>
                            ))}
                          </select>
                        </label>
                        <div className="inline-flex rounded-full border border-[#d9dde3] bg-white p-1">
                          {(['list', 'grid'] as const).map((mode) => {
                            const active = mode === viewMode
                            return (
                              <button
                                key={mode}
                                type="button"
                                onClick={() => setViewMode(mode)}
                                className={cn(
                                  'min-h-10 rounded-full px-4 py-2 text-xs font-semibold transition-colors [touch-action:manipulation] sm:text-sm',
                                  active ? 'bg-ink text-white' : 'text-[#656f81] hover:bg-[#f1f2f3]',
                                )}
                              >
                                {mode === 'list' ? 'List view' : 'Grid view'}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    <div
                      className={cn(
                        'grid gap-4',
                        viewMode === 'grid'
                          ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'
                          : 'grid-cols-1',
                      )}
                    >
                      {filteredNurses.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-[#d9dde3] bg-[#fafafa] px-4 py-12 text-center text-sm text-muted">
                          No nurses match these filters. Try adjusting care type, fee range, or care mode.
                        </p>
                      ) : null}

                      {filteredNurses.map((nurse) => {
                        const pillMode =
                          nurseCareMode === 'Any'
                            ? (nurse.nurseModeLabels?.[0] ?? nurse.consultationModes[0] ?? 'Home Visit')
                            : nurseCareMode
                        return viewMode === 'grid' ? (
                          <DoctorCardGrid key={`${nurse.name}-${nurse.location}`} doctor={nurse} />
                        ) : (
                          <DoctorCardList
                            key={`${nurse.name}-${nurse.location}`}
                            doctor={nurse}
                            selectedMode={pillMode}
                          />
                        )
                      })}
                    </div>

                    <nav className="flex flex-wrap items-center justify-center gap-1 pt-2 sm:gap-3" aria-label="Pagination">
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Previous page"
                      >
                        ‹
                      </button>
                      {['1', '2', '3', '…', '9', '10'].map((page, index) => (
                        <button
                          key={`${page}-${index}`}
                          type="button"
                          className={cn(
                            'grid h-9 min-w-9 place-items-center rounded-full px-2 text-sm font-medium [touch-action:manipulation] sm:h-10 sm:min-w-10 sm:px-3',
                            index === 0 ? 'border border-ink text-ink' : 'text-[#b5bac2]',
                          )}
                        >
                          {page}
                        </button>
                      ))}
                      <button
                        type="button"
                        className="grid size-9 place-items-center rounded-full text-[#2b3037] [touch-action:manipulation] sm:size-8"
                        aria-label="Next page"
                      >
                        ›
                      </button>
                    </nav>
                  </div>
                </div>
              </>
            )}

        {mobileFiltersOpen ? (
          <div
            className="fixed inset-0 z-50 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-book-filters-title"
          >
            <button
              type="button"
              className="absolute inset-0 bg-black/45 [touch-action:manipulation]"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters"
            />
            <div className="absolute bottom-0 left-0 right-0 top-[8%] flex flex-col rounded-t-2xl bg-white shadow-[0_-8px_40px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between border-b border-[#eef0f2] px-4 py-3">
                <h2 id="mobile-book-filters-title" className="text-lg font-bold text-[#121316]">
                  Filters
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="grid size-10 place-items-center rounded-full text-2xl leading-none text-[#656f81] [touch-action:manipulation] hover:bg-[#f1f2f3]"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-4">
                {isDoctorResults ? (
                  <BookDoctorFiltersPanel
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
                    onClear={clearSidebarFilters}
                  />
                ) : isLabResults ? (
                  <div className="space-y-4">
                    <label className="block">
                      <span className={filterLabel}>Test category</span>
                      <select
                        value={labCategoryFilter}
                        onChange={(e) => setLabCategoryFilter(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                      >
                        <option value="All">All categories</option>
                        {labTestCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className={filterLabel}>Test package type</span>
                      <select
                        value={labStripPackageFilter}
                        onChange={(e) => setLabStripPackageFilter(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                      >
                        {labTestPackageStripOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </label>
                    <label className="block">
                      <span className={filterLabel}>Sample collection</span>
                      <select
                        value={labSampleFilter}
                        onChange={(e) => setLabSampleFilter(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-[#d9dde3] bg-white px-3 py-2.5 text-sm font-semibold text-[#2b3037] outline-none"
                      >
                        <option value="Any">Any</option>
                        {labSampleStripOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </label>
                    <button
                      type="button"
                      onClick={clearLabFilters}
                      className="text-sm font-semibold text-[#0057ff] hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : isAmbulanceResults ? (
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
                      onClick={clearAmbulanceFilters}
                      className="text-sm font-semibold text-[#FC5000] hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : isElderResults ? (
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
                      onClick={clearElderFilters}
                      className="text-sm font-semibold text-[#2E7D32] hover:underline"
                    >
                      Clear filters
                    </button>
                  </div>
                ) : (
                  <BookNurseFiltersPanel
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
                    onClear={clearNurseSidebarFilters}
                  />
                )}
              </div>
              <div className="border-t border-[#eef0f2] p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <button
                  type="button"
                  onClick={() => {
                    setMobileFiltersOpen(false)
                    scrollToResults()
                  }}
                  className={cn(
                    'min-h-12 w-full rounded-xl text-sm font-bold uppercase tracking-wide text-white [touch-action:manipulation] hover:opacity-95',
                    isElderResults ? 'bg-[#2E7D32]' : isAmbulanceResults ? 'bg-[#FC5000]' : 'bg-[#9d497e]',
                  )}
                >
                  Apply filters
                </button>
              </div>
            </div>
          </div>
        ) : null}
        </>
      </div>
    </section>
  )
}
