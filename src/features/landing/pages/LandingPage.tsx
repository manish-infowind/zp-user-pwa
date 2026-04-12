import { useCallback, useEffect, useMemo, useState } from 'react'

import { AppBannerSection } from '@/features/landing/components/AppBannerSection'
import { BlogGuidesSection } from '@/features/landing/components/BlogGuidesSection'
import { BookingResultsPage } from '@/features/landing/components/BookingResultsPage'
import { FaqSection } from '@/features/landing/components/FaqSection'
import { FooterSection } from '@/features/landing/components/FooterSection'
import { HappyPatientsSection } from '@/features/landing/components/HappyPatientsSection'
import { PopularDoctorsSection } from '@/features/landing/components/PopularDoctorsSection'
import { DoctorLandingSections } from '@/features/doctor/components/DoctorLandingSections'
import { DoctorHero } from '@/features/doctor/components/DoctorHero'
import { NurseLandingSections } from '@/features/nurse/components/NurseLandingSections'
import { NurseHero } from '@/features/nurse/components/NurseHero'
import { LabHero } from '@/features/labs/components/LabHero'
import { Logo } from '@/components/common/Logo'
import { SearchField } from '@/components/common/SearchField'

import {
  bookingHashMap,
  createSearchPayload,
  initialSearchForms,
  readInitialBookingState,
  searchTabs,
  type LandingBookingKind,
  type LandingSearchForm,
  type HeroBookingSearchPayload,
} from '@/features/landing/config/searchConfig'
import { BOOKING_INTENT_KEY, setBookingIntent } from '@/utils/bookingIntent'

import { quickServices } from '@/features/landing/data/heroData'
import { heroDoctors } from '@/features/doctor/data/doctorData'
import { trustHighlights, trustIntro } from '@/features/landing/data/statsData'

import { cn } from '@/utils/cn'

type BookingKind = LandingBookingKind
type SearchForm = LandingSearchForm

export function LandingPage() {
  const [initialBookingState] = useState(readInitialBookingState)
  const [activeTab, setActiveTab] = useState<BookingKind>(initialBookingState.activeTab)
  const [selectedServiceKind, setSelectedServiceKind] = useState<BookingKind | null>(
    initialBookingState.selectedServiceKind,
  )
  const [searchForms, setSearchForms] = useState<Record<BookingKind, SearchForm>>(initialSearchForms)
  const [bookingSearchKind, setBookingSearchKind] = useState<BookingKind | null>(initialBookingState.bookingSearchKind)
  const [heroSearchSnapshot, setHeroSearchSnapshot] = useState<HeroBookingSearchPayload | null>(
    initialBookingState.heroSearchSnapshot,
  )

  const activeConfig = useMemo(
    () => searchTabs.find((tab) => tab.kind === activeTab) ?? searchTabs[0],
    [activeTab],
  )

  const activeForm = searchForms[activeTab]

  const selectBookingTab = useCallback(
    (kind: BookingKind) => {
      setActiveTab(kind)
      setSelectedServiceKind(kind)

      if (bookingSearchKind !== kind) {
        setBookingSearchKind(null)
        setHeroSearchSnapshot(null)

        if (window.location.hash === '#booking-results') {
          window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`)
        }
      }
    },
    [bookingSearchKind],
  )

  const isDoctorHeader = selectedServiceKind === 'doctor'
  const isNurseHeader = selectedServiceKind === 'nurse'
  const isLabHeader = selectedServiceKind === 'lab'
  const useConsultDesktopHeader = isDoctorHeader || isNurseHeader || isLabHeader
  const consultTabTheme: 'doctor' | 'nurse' | 'lab' | null = isDoctorHeader
    ? 'doctor'
    : isNurseHeader
      ? 'nurse'
      : isLabHeader
        ? 'lab'
        : null
  const isDoctorLandingActive = selectedServiceKind === 'doctor' && activeTab === 'doctor'
  const isNurseLandingActive = selectedServiceKind === 'nurse' && activeTab === 'nurse'
  const isBookingResultsPageActive = bookingSearchKind !== null

  const setFormValue = useCallback(
    <K extends keyof SearchForm>(field: K, value: SearchForm[K]) => {
      setSearchForms((current) => ({
        ...current,
        [activeTab]: {
          ...current[activeTab],
          [field]: value,
        },
      }))
    },
    [activeTab],
  )

  const buildPayload = useCallback(
    (kind: BookingKind): HeroBookingSearchPayload => createSearchPayload(kind, searchForms[kind]),
    [searchForms],
  )

  const openBookingResults = useCallback(
    (kind: BookingKind, payload?: HeroBookingSearchPayload) => {
      const nextPayload = payload ?? buildPayload(kind)
      setActiveTab(kind)
      setSelectedServiceKind(kind)
      setBookingSearchKind(kind)
      setHeroSearchSnapshot(nextPayload)
      setBookingIntent(kind)
      window.location.hash = 'booking-results'
      requestAnimationFrame(() => {
        document.getElementById('booking-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    },
    [buildPayload],
  )

  const syncBookingFromHash = useCallback(() => {
    const fromSession = sessionStorage.getItem(BOOKING_INTENT_KEY) as BookingKind | null
    if (fromSession) {
      sessionStorage.removeItem(BOOKING_INTENT_KEY)
      setActiveTab(fromSession)
      setSelectedServiceKind(fromSession)
      setBookingSearchKind(fromSession)
      setHeroSearchSnapshot(buildPayload(fromSession))
      return
    }

    const raw = window.location.hash.slice(1)
    const kind = bookingHashMap[raw]

    if (kind) {
      setActiveTab(kind)
      setSelectedServiceKind(kind)
      setBookingSearchKind(kind)
      setHeroSearchSnapshot(buildPayload(kind))
      return
    }

    if (raw === 'booking-results') return

    setBookingSearchKind(null)
    setSelectedServiceKind(null)
    setActiveTab('doctor')
  }, [buildPayload])

  useEffect(() => {
    window.addEventListener('hashchange', syncBookingFromHash)
    return () => window.removeEventListener('hashchange', syncBookingFromHash)
  }, [syncBookingFromHash])

  const landingHeroBlobSrc = `${import.meta.env.BASE_URL}landing-hero-blob.svg`
  const landingHeroBottomWaveSrc = `${import.meta.env.BASE_URL}landing-hero-bottom-wave.png`
  const doctorHeroBlobSrc = `${import.meta.env.BASE_URL}hero-doctor-blob.svg`
  /** Full-bleed page background behind header (not the inner hero card frames). */
  const nurseHeroPageBackgroundSrc = `${import.meta.env.BASE_URL}nurse-hero-page-background.svg`
  const labHeroPageBackgroundSrc = `${import.meta.env.BASE_URL}lab-hero-page-background.svg`
  const doctorHeroWaveSrc = `${import.meta.env.BASE_URL}hero-doctor-wave.png`
  const doctorBgFrameSrc = `${import.meta.env.BASE_URL}doctor-bg-frame.svg`
  const doctorCharacterSrc = `${import.meta.env.BASE_URL}hero-doctor-character.png`
  const doctorHeaderLogoSrc = `${import.meta.env.BASE_URL}hero-doctor-logo.png`
  const nurseBgFrameSrc = `${import.meta.env.BASE_URL}nurse-bg-frame.svg`
  const nurseCharacterSrc = `${import.meta.env.BASE_URL}nurse.svg`
  const labBgFrameSrc = `${import.meta.env.BASE_URL}lab-bg-frame.svg`
  const labCharacterSrc = `${import.meta.env.BASE_URL}lab-nurse.svg`

  const heroPageBlobSrc = isDoctorHeader
    ? doctorHeroBlobSrc
    : isNurseHeader
      ? nurseHeroPageBackgroundSrc
      : isLabHeader
        ? labHeroPageBackgroundSrc
        : landingHeroBlobSrc
  const heroBottomWaveSrc = isDoctorHeader ? doctorHeroWaveSrc : landingHeroBottomWaveSrc

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[1440px] overflow-x-clip bg-white text-[#2f2c28]">
      <span id="profile" className="sr-only">
        Profile
      </span>

      {/* Top hero: cream default; Book Doctor / Nurse / Lab use themed strip + blob (Figma consulting frames). */}
      <div
        className={cn(
          'relative overflow-x-clip',
          isDoctorHeader && 'bg-[#FFECF8]',
          isNurseHeader && 'bg-[#E8FAF4]',
          isLabHeader && 'bg-[#FFF8EB]',
          !isDoctorHeader && !isNurseHeader && !isLabHeader && 'bg-[#FEFAE7]',
        )}
      >
        <img
          src={heroPageBlobSrc}
          alt=""
          width={1874}
          height={1418}
          decoding="async"
          className="pointer-events-none absolute -left-[clamp(5rem,18vw,219px)] -top-[clamp(2rem,8vw,63px)] z-0 aspect-[1874/1418] w-[min(1874px,220vw)] max-w-none md:-left-[219px] md:-top-[63px] md:w-[min(2180px,150vw)] md:max-w-none"
          aria-hidden
        />

        <header id="home" className="relative z-10 px-4 pb-2 pt-3 sm:px-6 lg:px-8">
          <div className="md:hidden">
            <div className="flex items-center justify-between gap-3 rounded-[24px] bg-white/88 px-4 py-3 shadow-[0_18px_40px_rgba(57,46,25,0.08)] backdrop-blur">
              <a href="#home" className="text-inherit no-underline">
                <Logo compact />
              </a>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="grid size-10 place-items-center rounded-full bg-[#fff4c4] text-[#f59f00]"
                  aria-label="Notifications"
                >
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23 23 0 0 1-5.714 0" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 17.082a23 23 0 0 0 18 0M11.999 4.5a4.5 4.5 0 0 1 4.5 4.5v1.05a7.5 7.5 0 0 0 1.41 4.41l.59.825H5.5l.59-.825a7.5 7.5 0 0 0 1.41-4.41V9a4.5 4.5 0 0 1 4.5-4.5Z"
                    />
                  </svg>
                </button>
                <span className="grid size-10 place-items-center rounded-full bg-[#ffe27f] text-sm font-bold text-[#5a3d00]">
                  A
                </span>
              </div>
            </div>
            <label className="mt-4 flex min-h-[52px] items-center gap-3 rounded-2xl border border-[#efe2cd] bg-white px-4 shadow-[0_14px_30px_rgba(57,46,25,0.05)]">
              <svg className="size-4 text-[#9e907f]" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={2}>
                <circle cx="9" cy="9" r="5.75" />
                <path strokeLinecap="round" d="m13.5 13.5 3 3" />
              </svg>
              <input
                value={activeForm.location}
                onChange={(event) => setFormValue('location', event.target.value)}
                placeholder="Search anything..."
                className="w-full border-0 bg-transparent text-sm font-medium text-[#5a5248] outline-none"
                aria-label="Search anything"
              />
            </label>
          </div>

          <div className="hidden md:block">
            {useConsultDesktopHeader ? (
              <div className="mx-auto max-w-[1200px] rounded-[12px] border border-black/[0.03] bg-white/[0.97] px-5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-[2.5px] lg:px-6">
                <div className="flex items-center justify-between gap-4">
                  <a href="#home" className="shrink-0 text-inherit no-underline">
                    <img
                      src={doctorHeaderLogoSrc}
                      alt="ZappieCare"
                      width={209}
                      height={43}
                      decoding="async"
                      fetchPriority="high"
                      className="h-[43px] w-auto max-w-[209px] object-contain"
                    />
                  </a>
                  <nav className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2 text-base font-normal text-[#1F1F1F]" aria-label="Primary">
                    <a href="#services" className="inline-flex items-center gap-1.5 no-underline hover:opacity-80">
                      <svg className="size-[18px] shrink-0" viewBox="0 0 18 18" fill="none" aria-hidden>
                        <path
                          d="M14.563 11.785C17.526 8.02785 16.7255 4.30131 14.597 2.99561C12.5857 1.76192 10.8303 2.25908 9.7758 3.05101L8.99985 3.63119M14.563 11.785C13.8517 12.6867 12.9238 13.5903 11.7454 14.4626C10.5857 15.3209 10.0059 15.75 9 15.75C7.9941 15.75 7.41429 15.3209 6.25465 14.4626C0.166289 9.95618 0.763552 4.6147 3.40308 2.99561C5.41432 1.76192 7.16971 2.25908 8.2242 3.05101L8.99985 3.63119"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Services
                      <svg className="size-2 shrink-0" viewBox="0 0 8 4" fill="none" aria-hidden>
                        <path d="M0 0L4 4L8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                    <a href="#services" className="inline-flex items-center gap-1.5 no-underline hover:opacity-80">
                      <svg className="size-[18px] shrink-0" viewBox="0 0 18 18" fill="none" aria-hidden>
                        <path
                          d="M5.76878 14.7121C6.21205 14.7121 6.43369 14.7121 6.6356 14.787C6.66364 14.7973 6.69129 14.8088 6.71848 14.8213C6.91423 14.9111 7.07095 15.0678 7.38439 15.3812C8.10585 16.1026 8.46652 16.4634 8.91037 16.4966C8.97 16.5011 9.03 16.5011 9.08962 16.4966C9.53347 16.4634 9.89422 16.1026 10.6156 15.3812C10.9291 15.0678 11.0857 14.9111 11.2815 14.8213C11.3087 14.8088 11.3363 14.7973 11.3644 14.787C11.5663 14.7121 11.788 14.7121 12.2312 14.7121H12.313C13.4439 14.7121 14.0094 14.7121 14.3607 14.3607C14.7121 14.0094 14.7121 13.4439 14.7121 12.313V12.2312C14.7121 11.788 14.7121 11.5663 14.787 11.3644C14.7973 11.3363 14.8088 11.3087 14.8213 11.2815C14.9111 11.0857 15.0678 10.9291 15.3812 10.6156C16.1026 9.89422 16.4634 9.53347 16.4966 9.08962C16.5011 9.03 16.5011 8.97 16.4966 8.91037C16.4634 8.46652 16.1026 8.10585 15.3812 7.38439C15.0678 7.07095 14.9111 6.91423 14.8213 6.71848C14.8088 6.69129 14.7973 6.66364 14.787 6.6356C14.7121 6.43369 14.7121 6.21205 14.7121 5.76878V5.68702C14.7121 4.55609 14.7121 3.99062 14.3607 3.63929C14.0094 3.28795 13.4439 3.28796 12.313 3.28796H12.2312C11.788 3.28796 11.5663 3.28795 11.3644 3.21304C11.3363 3.20263 11.3087 3.19118 11.2815 3.17871C11.0857 3.08891 10.9291 2.93219 10.6156 2.61875C9.89422 1.89733 9.53347 1.53661 9.08962 1.50335C9.03 1.49888 8.97 1.49888 8.91037 1.50335C8.46652 1.53661 8.10585 1.89733 7.38439 2.61875C7.07095 2.93219 6.91423 3.08891 6.71848 3.17871C6.69129 3.19118 6.66364 3.20263 6.6356 3.21304C6.43369 3.28795 6.21205 3.28796 5.76878 3.28796H5.68702C4.55609 3.28796 3.99062 3.28795 3.63929 3.63929C3.28795 3.99062 3.28796 4.55609 3.28796 5.68702V5.76878C3.28796 6.21205 3.28795 6.43369 3.21304 6.6356C3.20263 6.66364 3.19118 6.69129 3.17871 6.71848C3.08891 6.91423 2.93219 7.07095 2.61875 7.38439C1.89733 8.10585 1.53661 8.46652 1.50335 8.91037C1.49888 8.97 1.49888 9.03 1.50335 9.08962C1.53661 9.53347 1.89733 9.89422 2.61875 10.6156C2.93219 10.9291 3.08891 11.0857 3.17871 11.2815C3.19118 11.3087 3.20263 11.3363 3.21304 11.3644C3.28795 11.5663 3.28796 11.788 3.28796 12.2312V12.313C3.28796 13.4439 3.28795 14.0094 3.63929 14.3607C3.99062 14.7121 4.55609 14.7121 5.68702 14.7121H5.76878Z"
                          stroke="currentColor"
                        />
                      </svg>
                      Offers
                    </a>
                    <button
                      type="button"
                      onClick={() => openBookingResults(selectedServiceKind ?? activeTab)}
                      className="inline-flex items-center gap-1 border-0 bg-transparent p-0 font-normal text-inherit hover:opacity-80"
                    >
                      <svg className="size-[18px] shrink-0" viewBox="0 0 18 18" fill="none" aria-hidden>
                        <path
                          d="M3.75 2.25h10.5a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H3.75A.75.75 0 0 1 3 15V3a.75.75 0 0 1 .75-.75Z"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinejoin="round"
                        />
                      </svg>
                      My Booking
                    </button>
                    <a href="#faq" className="no-underline hover:opacity-80">
                      Need Help?
                    </a>
                    <a href="#profile" className="no-underline hover:opacity-80">
                      Login/SignUp
                    </a>
                  </nav>
                </div>
              </div>
            ) : (
              <div className="mx-auto rounded-full border border-white/80 bg-white/92 px-5 py-3 shadow-[0_20px_50px_rgba(57,46,25,0.08)] backdrop-blur lg:px-6">
                <div className="flex items-center justify-between gap-6">
                  <a href="#home" className="text-inherit no-underline">
                    <Logo />
                  </a>
                  <nav className="flex items-center gap-6 text-sm font-semibold text-[#7f7363]" aria-label="Primary">
                    <a href="#services" className="no-underline transition hover:text-[#2f2c28]">
                      Services
                    </a>
                    <a href="#trust" className="no-underline transition hover:text-[#2f2c28]">
                      Cities
                    </a>
                    <a href="#booking" className="no-underline transition hover:text-[#2f2c28]">
                      My Booking
                    </a>
                    <a href="#faq" className="no-underline transition hover:text-[#2f2c28]">
                      Need Help?
                    </a>
                    <a href="#profile" className="no-underline transition hover:text-[#2f2c28]">
                      Login/SignUp
                    </a>
                  </nav>
                </div>
              </div>
            )}

            {!useConsultDesktopHeader ? (
              <div className="px-4 pb-4 pt-6 text-center lg:px-12">
                <p
                  className="mb-1 text-[clamp(2rem,4.5vw,2.875rem)] font-normal normal-case leading-[1.42] text-[#FC5000]"
                  style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
                >
                  Happie Happie Oye!
                </p>
                <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.75rem,5vw,4rem)] font-bold uppercase leading-[1.42] tracking-[-0.02em] text-[#1F1F1F]">
                  Because care should feel good.
                </h1>
              </div>
            ) : (
              <div className="pb-2 pt-4 lg:pt-6" aria-hidden />
            )}


            <div
              id="booking"
              className={cn(
                'mx-auto max-w-[1180px] rounded-[34px] border p-4 shadow-[0_30px_60px_rgba(57,46,25,0.08)] backdrop-blur lg:p-5',
                isDoctorHeader || isNurseHeader || isLabHeader ? 'border-white/60 bg-white/95' : 'border-white/80 bg-white/92',
              )}
            >
              <div className={cn('flex flex-wrap gap-2', consultTabTheme && 'rounded-t-2xl bg-[#ececec] p-2')}>
                {searchTabs.map((tab) => {
                  const selected = selectedServiceKind === tab.kind
                  const theme = consultTabTheme
                  return (
                    <button
                      key={tab.kind}
                      type="button"
                      onClick={() => selectBookingTab(tab.kind)}
                      className={cn(
                        'min-h-11 rounded-2xl px-4 text-sm font-bold transition',
                        selected
                          ? theme === 'doctor'
                            ? 'bg-[#F8BFE3] text-[#9D497E] shadow-[0_8px_20px_rgba(248,191,227,0.45)]'
                            : theme === 'nurse'
                              ? 'bg-[#C5EFE3] text-[#0F6B57] shadow-[0_8px_22px_rgba(15,107,87,0.2)]'
                              : theme === 'lab'
                                ? 'bg-[#FFF3C4] text-[#713F12] shadow-[0_8px_22px_rgba(180,119,0,0.22)]'
                                : 'bg-[#9D497E] text-white shadow-[0_10px_24px_rgba(157,73,126,0.35)]'
                          : theme === 'doctor' || theme === 'nurse' || theme === 'lab'
                            ? 'border border-[#e8e8e8] bg-white text-[#1F1F1F] hover:bg-[#fafafa]'
                            : 'bg-[#E4E4E4] text-[#1F1F1F] hover:bg-[#dadada]',
                      )}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              {selectedServiceKind === 'doctor' && activeTab === 'doctor' ? (
                <DoctorHero
                  frameSrc={doctorBgFrameSrc}
                  characterSrc={doctorCharacterSrc}
                  onBookNow={() => openBookingResults('doctor')}
                />
              ) : selectedServiceKind === 'nurse' && activeTab === 'nurse' ? (
                <NurseHero
                  frameSrc={nurseBgFrameSrc}
                  characterSrc={nurseCharacterSrc}
                  onBookNow={() => openBookingResults('nurse')}
                />
              ) : selectedServiceKind === 'lab' && activeTab === 'lab' ? (
                <LabHero
                  frameSrc={labBgFrameSrc}
                  characterSrc={labCharacterSrc}
                  onBookNow={() => openBookingResults('lab')}
                />
              ) : (
                <div className="mt-3 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:mt-4 lg:grid-cols-[1fr_1fr_1fr_auto] lg:gap-3">
                  {activeConfig.fields.map((field) => (
                    <SearchField
                      key={field.key}
                      label={field.label}
                      value={activeForm[field.key as keyof SearchForm] as string}
                      onChange={(value) => setFormValue(field.key as keyof SearchForm, value)}
                      options={field.options}
                      icon={field.icon}
                    />
                  ))}
                  <button
                    type="button"
                    onClick={() => openBookingResults(activeTab)}
                    className="grid min-h-[64px] place-items-center rounded-2xl bg-[#FC5000] px-8 text-lg font-bold text-white shadow-[0_12px_24px_rgba(252,80,0,0.25)] transition hover:bg-[#e04a00] active:scale-[0.98] [touch-action:manipulation]"
                  >
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="relative -mt-1 lg:-mt-2">
            <img
              src={heroBottomWaveSrc}
              alt=""
              className="w-full"
              aria-hidden
            />
          </div>
        </header>
      </div>

      {isBookingResultsPageActive ? (
        <BookingResultsPage
          bookingSearchKind={bookingSearchKind}
          heroSearchSnapshot={heroSearchSnapshot}
        />
      ) : isDoctorLandingActive ? (
        <DoctorLandingSections
          onOpenBookingResults={openBookingResults}
        />
      ) : isNurseLandingActive ? (
        <NurseLandingSections
          onOpenBookingResults={openBookingResults}
        />
      ) : (
        <div className="bg-white">
          <section id="services" className="relative z-10 px-4 pb-20 pt-10 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-12">
                <div>
                  <p
                    className="mb-1 text-[clamp(1.75rem,4vw,2.5rem)] font-normal normal-case leading-none text-[#FC5000]"
                    style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
                  >
                    Quick Services
                  </p>
                  <h2 className="max-w-2xl font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold uppercase leading-[0.9] tracking-[-0.01em] text-[#1F1F1F]">
                    Book what you need in one tap.
                  </h2>
                </div>
                <a
                  href="#booking-results"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E5E7EB] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#5a5248] transition hover:bg-[#D1D5DB]"
                >
                  View More
                  <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {quickServices.map((service) => (
                  <div
                    key={service.title}
                    onClick={() => service.kind && openBookingResults(service.kind)}
                    className="group relative flex min-h-[440px] cursor-pointer flex-col overflow-hidden rounded-[40px] border-2 border-transparent bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all hover:-translate-y-2 hover:border-[#FC5000]/10 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] active:scale-[0.98]"
                  >
                    <div className="flex flex-1 flex-col p-8">
                      <h3 className="text-2xl font-black uppercase text-[#121316]">{service.title}</h3>
                      <p className="mt-2.5 max-w-[200px] text-[15px] font-medium leading-relaxed text-[#7e828a]">
                        {service.description}
                      </p>
                      <div className="mt-6">
                        <button className="rounded-xl bg-[#1d1e20] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#333538]">
                          Book Now
                        </button>
                      </div>
                    </div>

                    <div className={cn(service.artSlotClassName, 'z-0')}>
                      <img src={service.image} alt={service.imageAlt} className={service.imageClassName} />
                      {service.consultCorner && (
                        <div className="absolute right-0 top-0 size-8 animate-pulse rounded-full bg-[#f84f01]/20 blur-xl" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="trust" className="px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1240px]">
              <div className="mb-14 text-center">
                <h2 className="mb-1 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-bold uppercase leading-none tracking-tight text-[#2D5FB4]">
                  Why Trust ZappieCare?
                </h2>
                <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#7e828a] sm:text-lg">
                  {trustIntro}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4 lg:gap-x-12">
                {trustHighlights.map((hl, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className="mb-6 flex aspect-square w-full max-w-[120px] items-center justify-center sm:max-w-none">
                      <img src={hl.image} alt="" className="size-full object-contain" />
                    </div>
                    <div className="space-y-1">
                      {hl.title && (
                        <p className="text-2xl font-black text-[#1F1F1F] sm:text-3xl">{hl.title}</p>
                      )}
                      <p className="mx-auto max-w-[160px] text-base font-bold leading-tight text-[#1F1F1F]">
                        {hl.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <PopularDoctorsSection doctors={heroDoctors} onBook={() => openBookingResults('doctor')} />
            </div>
          </section>

          <AppBannerSection />

          <HappyPatientsSection />

          <BlogGuidesSection />

          <FaqSection />
        </div>
      )}

      <FooterSection />
    </div>
  )
}
