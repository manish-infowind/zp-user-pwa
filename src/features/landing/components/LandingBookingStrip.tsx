import {
  ambulanceDestinationOptions,
  ambulanceThemeHero,
  ambulanceTypeStripOptions,
  bookingServiceTabs,
  consultationModes,
  consultationSpecialties,
  consultDoctorHeroCopy,
  doctorThemeHero,
  elderCareCategories,
  elderCaregiverTypes,
  elderThemeHero,
  homecareThemeHero,
  labSampleStripOptions,
  labTestPackageStripOptions,
  labThemeHero,
  landingStripDefaultSpecialty,
  nurseCareCategories,
  nurseCareModes,
} from '@/features/landing/data/landingData'
import type { ConsultationMode, HeroBookingSearchPayload } from '@/features/landing/types'
import { cn } from '@/utils/cn'
import { useMemo, useState } from 'react'

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7-7.5 11-7.5 11S4.5 17.5 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 15 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M4.5 21V6.75A2.25 2.25 0 0 1 6.75 4.5h4.5A2.25 2.25 0 0 1 13.5 6.75V21M13.5 9h4.5A2.25 2.25 0 0 1 20.25 11.25V21M6.75 9h.008v.008H6.75V9Zm3 0h.008v.008H9.75V9Zm-3 3h.008v.008H6.75V12Zm3 0h.008v.008H9.75V12Zm0 3h.008v.008H9.75V15Zm0 3h.008v.008H9.75V18Z" />
    </svg>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

function PackageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m18 0A2.25 2.25 0 0018.75 5.25h-13.5A2.25 2.25 0 003 7.5m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.86 0l-7.5-4.615A2.25 2.25 0 013 7.743V7.5"
      />
    </svg>
  )
}

const doctorThemeHeroBgSrc = `${import.meta.env.BASE_URL}Doctor%20Theme.svg`
const homecareThemeHeroBgSrc = `${import.meta.env.BASE_URL}Homecare%20Theme.svg`
const testsThemeHeroBgSrc = `${import.meta.env.BASE_URL}Tests%20Theme.svg`
const emergencyThemeHeroBgSrc = `${import.meta.env.BASE_URL}Emergency%20Theme.svg`
const elderCareHeroBgSrc = `${import.meta.env.BASE_URL}Elder%20Care.svg`

const fieldLabel =
  'text-[10px] font-bold uppercase tracking-[0.12em] text-[#8b94a4] sm:text-[11px]'

/** Stacked on small screens; in md+ grid row children must not use flex-1 or columns collapse and overlap. */
const cell =
  'flex min-h-[56px] w-full flex-1 items-center gap-2.5 bg-white px-4 py-3 sm:min-h-[60px] sm:px-5 md:min-h-0 md:min-w-0 md:w-auto md:flex-initial md:py-4'

type Props = {
  /** Fires when user submits SEARCH NOW — drives results section filters + list from the same values. */
  onBookingSearch?: (payload: HeroBookingSearchPayload) => void
}

export function LandingBookingStrip({ onBookingSearch }: Props) {
  const [activeTab, setActiveTab] = useState(0)
  const [selectedSpecialty, setSelectedSpecialty] = useState(landingStripDefaultSpecialty)
  const [selectedMode, setSelectedMode] = useState<ConsultationMode>(consultationModes[0])
  const [nurseCareCategory, setNurseCareCategory] = useState<string>(nurseCareCategories[0])
  const [nurseCareMode, setNurseCareMode] = useState<string>(nurseCareModes[0])
  const [labStripPackage, setLabStripPackage] = useState<string>(labTestPackageStripOptions[0])
  const [labSamplePick, setLabSamplePick] = useState<string>(labSampleStripOptions[0])
  const [ambulanceDestinationPick, setAmbulanceDestinationPick] = useState<string>(ambulanceDestinationOptions[0])
  const [ambulanceTypePick, setAmbulanceTypePick] = useState<string>(ambulanceTypeStripOptions[0])
  const [elderCategoryPick, setElderCategoryPick] = useState<string>(elderCareCategories[0])
  const [elderCaregiverPick, setElderCaregiverPick] = useState<string>(elderCaregiverTypes[0])
  const [dateChoice, setDateChoice] = useState<'tomorrow' | 'today'>('tomorrow')

  const activeTabLabel = bookingServiceTabs[activeTab]?.label ?? ''
  const isDoctorTab = activeTabLabel === 'Book Doctor'
  const isNurse = activeTabLabel === 'Book Nurse'
  const isLab = activeTabLabel === 'Lab Test'
  const isAmbulance = activeTabLabel === 'Ambulance'
  const isElder = activeTabLabel === 'Elder Care'
  const heroBgSrc = isNurse
    ? homecareThemeHeroBgSrc
    : isLab
      ? testsThemeHeroBgSrc
      : isAmbulance
        ? emergencyThemeHeroBgSrc
        : isElder
          ? elderCareHeroBgSrc
          : doctorThemeHeroBgSrc
  const heroCopy = isNurse
    ? homecareThemeHero
    : isLab
      ? labThemeHero
      : isAmbulance
        ? ambulanceThemeHero
        : isElder
          ? elderThemeHero
          : doctorThemeHero

  const displayDate = useMemo(() => {
    const d = new Date()
    if (dateChoice === 'tomorrow') d.setDate(d.getDate() + 1)
    const day = String(d.getDate()).padStart(2, '0')
    const month = String(d.getMonth() + 1).padStart(2, '0')
    const year = String(d.getFullYear()).slice(-2)
    return `${day}/${month}/${year}`
  }, [dateChoice])

  function submitDoctorSearch() {
    onBookingSearch?.({
      kind: 'doctor',
      specialty: selectedSpecialty,
      consultationMode: selectedMode,
    })
  }

  return (
    <section className="relative w-full" aria-labelledby="booking-hero-headline">
      <div className="relative z-20 mx-auto max-w-[1280px] px-4 pb-10 sm:px-6 sm:pb-12">
        <div className="overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
          <div
            className="scrollbar-none flex items-end gap-1 overflow-x-auto border-b border-[#e8eaee] bg-[#ececec] px-2 pb-0 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="tablist"
            aria-label="Service booking"
          >
            {bookingServiceTabs.map((tab, i) => {
              const active = activeTab === i
              const nurseActive = active && tab.label === 'Book Nurse'
              const labActive = active && tab.label === 'Lab Test'
              const ambulanceActive = active && tab.label === 'Ambulance'
              const elderActive = active && tab.label === 'Elder Care'
              const pinkTabActive =
                active &&
                tab.label !== 'Book Nurse' &&
                tab.label !== 'Lab Test' &&
                tab.label !== 'Ambulance' &&
                tab.label !== 'Elder Care'
              return (
                <button
                  key={tab.label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(i)}
                  className={cn(
                    'shrink-0 rounded-t-[10px] px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide transition-colors sm:min-w-[120px] sm:px-4 sm:text-xs md:min-w-[132px] md:px-5 md:text-sm',
                    !active && 'min-h-[42px] bg-[#E0E0E0] text-[#1a1a1a] hover:bg-[#d6d6d6] sm:min-h-[44px]',
                    nurseActive && 'min-h-[50px] bg-[#E6F7F1] text-[#005A42] shadow-sm sm:min-h-[54px]',
                    labActive &&
                      'min-h-[50px] bg-[#FFF8E7] text-[#A67C00] shadow-sm sm:min-h-[54px]',
                    ambulanceActive &&
                      'min-h-[50px] bg-[#FFEDE5] text-[#C2410C] shadow-sm sm:min-h-[54px]',
                    elderActive &&
                      'min-h-[50px] bg-[#F0FAEF] text-[#1B5E20] shadow-sm sm:min-h-[54px]',
                    pinkTabActive && 'min-h-[50px] bg-[#9D497E] text-white shadow-sm sm:min-h-[54px]',
                  )}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          {isDoctorTab ? (
            <div className="relative grid min-h-[240px] grid-cols-1 gap-6 bg-gradient-to-r from-[#4a2870] via-[#8e3b7a] to-[#e766a6] px-5 py-8 md:min-h-[280px] md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:px-10 md:py-10">
              <div className="relative flex min-h-[200px] items-center justify-center md:min-h-[260px]">
                <span
                  className="absolute left-0 top-[8%] z-10 rounded-full border border-white/45 bg-white/20 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm sm:left-[4%] sm:text-xs"
                  style={{ transform: 'rotate(-6deg)' }}
                >
                  24/7 Support
                </span>
                <span
                  className="absolute right-[5%] top-[18%] z-10 rounded-full border border-white/45 bg-white/20 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm sm:text-xs"
                  style={{ transform: 'rotate(5deg)' }}
                >
                  Digital Prescription
                </span>
                <span
                  className="absolute bottom-[12%] left-[8%] z-10 rounded-full border border-white/45 bg-white/20 px-3 py-1.5 text-[10px] font-semibold text-white shadow-sm backdrop-blur-sm sm:bottom-[15%] sm:text-xs"
                  style={{ transform: 'rotate(-4deg)' }}
                >
                  Verified Doctors
                </span>
                <img
                  src={`${import.meta.env.BASE_URL}consulting/hero-1.jpg`}
                  alt=""
                  width={400}
                  height={320}
                  decoding="async"
                  fetchPriority="high"
                  className="relative z-0 max-h-[min(52vw,280px)] w-auto object-contain object-bottom md:max-h-[300px]"
                />
              </div>
              <div className="flex flex-col justify-center text-center md:text-left">
                <h2
                  id="booking-hero-headline"
                  className="font-display text-[clamp(1.1rem,3.2vw,1.85rem)] font-bold uppercase leading-[1.2] tracking-[0.06em] text-white drop-shadow-sm sm:tracking-[0.1em]"
                >
                  {consultDoctorHeroCopy.headline}
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/95 md:mx-0 md:text-base">
                  {consultDoctorHeroCopy.subheadline}
                </p>
                <div className="mt-6 flex justify-center md:justify-start">
                  <button
                    type="button"
                    onClick={submitDoctorSearch}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#1F1F1F] px-8 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-black [touch-action:manipulation] sm:min-h-14 sm:text-base"
                  >
                    Book Now
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative aspect-[1440/538] w-full min-h-[200px]">
              <img
                src={heroBgSrc}
                alt=""
                width={1440}
                height={538}
                decoding="async"
                fetchPriority="high"
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top"
                aria-hidden
              />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 py-6 text-center sm:px-8 sm:py-10">
                <p
                  className={cn(
                    'font-script text-[clamp(1.25rem,3.5vw,1.75rem)] leading-tight sm:text-[clamp(1.5rem,4vw,2rem)]',
                    isNurse
                      ? 'text-[#007d56]'
                      : isLab
                        ? 'text-[#A67C00]'
                        : isAmbulance
                          ? 'text-[#FC5000]'
                          : isElder
                            ? 'text-[#2E7D32]'
                            : 'text-[#D53F8C]',
                  )}
                >
                  {heroCopy.eyebrow}
                </p>
                <p
                  className={cn(
                    'mt-2 font-script text-[clamp(2rem,6.5vw,3.5rem)] leading-[1.05] drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)] sm:mt-3',
                    isNurse
                      ? 'text-[#007d56]'
                      : isLab
                        ? 'text-[#A67C00]'
                        : isAmbulance
                          ? 'text-[#FC5000]'
                          : isElder
                            ? 'text-[#2E7D32]'
                            : 'text-[#D53F8C]',
                  )}
                >
                  {heroCopy.scriptLine}
                </p>
                <h2
                  id="booking-hero-headline"
                  className="mx-auto mt-2 max-w-[46rem] font-display text-[clamp(0.72rem,1.85vw,1rem)] font-bold uppercase leading-snug tracking-[0.12em] text-[#1a1a1a] drop-shadow-[0_1px_2px_rgba(255,255,255,0.75)] sm:mt-3 sm:max-w-[52rem] sm:tracking-[0.16em] md:text-[clamp(0.85rem,1.6vw,1.15rem)]"
                >
                  {heroCopy.headline}
                </h2>
              </div>
            </div>
          )}

          <form
            className="bg-white"
            onSubmit={(e) => {
              e.preventDefault()
              if (isNurse) {
                onBookingSearch?.({
                  kind: 'nurse',
                  nurseCareCategory,
                  nurseCareMode,
                })
              } else if (isLab) {
                onBookingSearch?.({
                  kind: 'lab',
                  testPackageType: labStripPackage,
                  sampleCollection: labSamplePick,
                })
              } else if (isAmbulance) {
                onBookingSearch?.({
                  kind: 'ambulance',
                  ambulanceType: ambulanceTypePick,
                  destination: ambulanceDestinationPick,
                })
              } else if (isElder) {
                onBookingSearch?.({
                  kind: 'elder',
                  elderCareCategory: elderCategoryPick,
                  caregiverType: elderCaregiverPick,
                })
              } else {
                onBookingSearch?.({
                  kind: 'doctor',
                  specialty: selectedSpecialty,
                  consultationMode: selectedMode,
                })
              }
            }}
          >
            {/* md+ grid: Lab uses 6 cols (extra filter); doctor/nurse use 5 */}
            <div
              className={cn(
                'flex flex-col divide-y divide-[#e8eaee] md:grid md:min-w-0 md:divide-x md:divide-y-0 md:divide-[#e8eaee] md:overflow-x-auto',
                isAmbulance || isElder
                  ? 'md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.25fr)_minmax(0,1fr)_minmax(280px,320px)_200px]'
                  : 'md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(280px,320px)_200px]',
              )}
            >
              <div className={cell}>
                <PinIcon className="size-5 shrink-0 text-[#4a5568]" />
                <div className="min-w-0 flex-1 text-left">
                  <p className={fieldLabel}>Location</p>
                  <p className="truncate text-sm font-bold text-[#1a1a1a] sm:text-base">Saraspur, 380018</p>
                </div>
              </div>

              {isNurse ? (
                <>
                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <HeartIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Care type</span>
                      <select
                        value={nurseCareCategory}
                        onChange={(e) => setNurseCareCategory(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {nurseCareCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <ClockIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Care mode</span>
                      <select
                        value={nurseCareMode}
                        onChange={(e) => setNurseCareMode(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {nurseCareModes.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </>
              ) : isLab ? (
                <>
                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <PackageIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Test package type</span>
                      <select
                        value={labStripPackage}
                        onChange={(e) => setLabStripPackage(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {labTestPackageStripOptions.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <BuildingIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Sample collection</span>
                      <select
                        value={labSamplePick}
                        onChange={(e) => setLabSamplePick(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {labSampleStripOptions.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </>
              ) : isAmbulance ? (
                <>
                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <BuildingIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Destination</span>
                      <select
                        value={ambulanceDestinationPick}
                        onChange={(e) => setAmbulanceDestinationPick(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {ambulanceDestinationOptions.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <PackageIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Ambulance type</span>
                      <select
                        value={ambulanceTypePick}
                        onChange={(e) => setAmbulanceTypePick(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {ambulanceTypeStripOptions.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </>
              ) : isElder ? (
                <>
                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <HeartIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Care need</span>
                      <select
                        value={elderCategoryPick}
                        onChange={(e) => setElderCategoryPick(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {elderCareCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <UserIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Caregiver type</span>
                      <select
                        value={elderCaregiverPick}
                        onChange={(e) => setElderCaregiverPick(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {elderCaregiverTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </>
              ) : (
                <>
                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <UserIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Specialty</span>
                      <select
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {consultationSpecialties.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>

                  <label className={cn(cell, 'cursor-pointer md:min-w-0 md:flex-1')}>
                    <BuildingIcon className="size-5 shrink-0 text-[#4a5568]" />
                    <div className="min-w-0 flex-1 text-left">
                      <span className={fieldLabel}>Consultation</span>
                      <select
                        value={selectedMode}
                        onChange={(e) => setSelectedMode(e.target.value as ConsultationMode)}
                        className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-bold text-[#1a1a1a] outline-none sm:text-base"
                      >
                        {consultationModes.map((m) => (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        ))}
                      </select>
                    </div>
                  </label>
                </>
              )}

              <div
                className={cn(
                  'grid min-h-[56px] w-full min-w-0 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-x-3 bg-white px-4 py-3 sm:min-h-[60px] sm:px-5 md:min-h-0 md:py-4',
                )}
              >
                <CalendarIcon className="size-5 shrink-0 self-center text-[#4a5568]" />
                <div className="min-w-0 overflow-hidden text-left">
                  <p className={fieldLabel}>Date</p>
                  <p className="truncate text-sm font-bold tabular-nums text-[#1a1a1a] sm:text-base">
                    {displayDate}
                  </p>
                </div>
                <div className="flex shrink-0 justify-self-end gap-1.5">
                  <button
                    type="button"
                    onClick={() => setDateChoice('tomorrow')}
                    className={cn(
                      'min-h-8 rounded-lg px-2.5 text-[11px] font-semibold whitespace-nowrap [touch-action:manipulation] sm:min-h-9 sm:px-3 sm:text-xs md:text-sm',
                      dateChoice === 'tomorrow' ? 'bg-[#212121] text-white' : 'bg-[#e8e8e8] text-[#4a5568]',
                    )}
                  >
                    Tomorrow
                  </button>
                  <button
                    type="button"
                    onClick={() => setDateChoice('today')}
                    className={cn(
                      'min-h-8 rounded-lg px-2.5 text-[11px] font-semibold whitespace-nowrap [touch-action:manipulation] sm:min-h-9 sm:px-3 sm:text-xs md:text-sm',
                      dateChoice === 'today' ? 'bg-[#212121] text-white' : 'bg-[#e8e8e8] text-[#4a5568]',
                    )}
                  >
                    Today
                  </button>
                </div>
              </div>

              <div className="flex flex-none flex-col justify-stretch border-t border-[#e8eaee] p-3 sm:p-4 md:min-h-0 md:w-full md:max-w-none md:flex-none md:border-l md:border-t-0 md:p-2 md:pl-3">
                <button
                  type="submit"
                  className={cn(
                    'flex min-h-[52px] w-full flex-1 items-center justify-center rounded-[10px] px-3 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:-translate-y-0.5 active:translate-y-0 sm:min-h-[56px] sm:px-4 sm:text-sm sm:tracking-[0.16em] md:min-h-0 md:py-4',
                    isNurse
                      ? 'bg-[#005A42] shadow-[0_8px_24px_rgba(0,90,66,0.35)] hover:bg-[#004a37]'
                      : isLab
                        ? 'bg-[#A67C00] shadow-[0_10px_28px_rgba(166,124,0,0.38)] hover:bg-[#8f6a00]'
                        : isAmbulance
                          ? 'bg-[#FC5000] shadow-[0_10px_28px_rgba(252,80,0,0.38)] hover:bg-[#e04a00]'
                          : isElder
                            ? 'bg-[#2E7D32] shadow-[0_10px_28px_rgba(46,125,50,0.35)] hover:bg-[#1B5E20]'
                            : 'bg-[#9D497E] shadow-[0_10px_28px_rgba(157,73,126,0.35)] hover:bg-[#8a3e6f]',
                  )}
                >
                  SEARCH NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
