import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { BookDoctorSection } from '@/features/landing/components/BookDoctorSection'
import { ConsultDoctorHero } from '@/features/landing/components/heroes/ConsultDoctorHero'
import { ConsultLabHero } from '@/features/landing/components/heroes/ConsultLabHero'
import { ConsultNurseHero } from '@/features/landing/components/heroes/ConsultNurseHero'
import {
  bookingHashMap,
  createSearchPayload,
  initialSearchForms,
  readInitialBookingState,
  searchTabs,
  type LandingBookingKind,
  type LandingSearchForm,
} from '@/features/landing/config/landingSearchConfig'
import type { HeroBookingSearchPayload } from '@/features/landing/types'
import { BOOKING_INTENT_KEY, setBookingIntent } from '@/features/landing/utils/landingBookingIntent'
import { cn } from '@/utils/cn'

type BookingKind = LandingBookingKind
type SearchForm = LandingSearchForm

type QuickServiceCard = {
  title: string
  description: string
  image: string
  imageAlt?: string
  accent: string
  /** Absolute wrapper for bottom artwork (Figma Frame 2087324546). */
  artSlotClassName: string
  imageClassName: string
  /** Consult card: extra corner mark from Figma. */
  consultCorner?: boolean
  kind: BookingKind
}

type TrustHighlight = {
  image: string
  label: string
}

type HeroDoctorCard = {
  image: string
  name: string
  specialty: string
  featured?: boolean
}

const quickServiceImg = (file: string) => `${import.meta.env.BASE_URL}${file}`

const quickServices: QuickServiceCard[] = [
  {
    title: 'Home Care',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    image: quickServiceImg('quick-service-home.png'),
    imageAlt: 'Home care service illustration',
    accent: '#12CE94',
    artSlotClassName: 'pointer-events-none absolute left-[113px] top-[166px] h-[212px] w-[175px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
    kind: 'nurse',
  },
  {
    title: 'Consult Now',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    image: quickServiceImg('quick-service-consult.png'),
    imageAlt: '',
    accent: '#DA9EDE',
    artSlotClassName: 'pointer-events-none absolute left-[49px] top-[146px] h-[268px] w-[277px]',
    imageClassName: 'absolute left-[9px] top-0 h-[268px] w-[268px] max-w-none object-contain',
    consultCorner: true,
    kind: 'doctor',
  },
  {
    title: 'Lab tests',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    image: quickServiceImg('quick-service-lab.png'),
    imageAlt: 'Lab tests illustration',
    accent: '#FACD00',
    artSlotClassName: 'pointer-events-none absolute left-[25px] top-[210px] h-[184px] w-[282px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
    kind: 'lab',
  },
  {
    title: '24x7 Emergency',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    image: quickServiceImg('quick-service-emergency.png'),
    imageAlt: 'Emergency ambulance',
    accent: '#FC5000',
    artSlotClassName: 'pointer-events-none absolute left-[86px] top-[190px] h-[183px] w-[200px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
    kind: 'ambulance',
  },
]

const trustHighlights: TrustHighlight[] = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/87e1271af1c9501fd2569ae3e2b18a73c8046578?width=262',
    label: 'Strong Verified Heroes Network',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/8d0b323365d86ff9fa204803bb84e5f4e9792318?width=262',
    label: '24×7 Transparent Support',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/7ddd20b639cf6f353f7e1d656007949817495c3b?width=262',
    label: 'Fast Response Guarantee',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fdff72a15c35f155475c0cc6f7eeea2d6ab7bd58?width=262',
    label: 'Clear Service Pricing',
  },
]

const heroDoctors: HeroDoctorCard[] = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d165d2c40b26574c596960c173f789e94a8bd761?width=556',
    name: 'Dr johnathon roman',
    specialty: 'Heart of cardioligist department',
    featured: true,
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Dr johnathon roman',
    specialty: 'Heart of cardioligist department',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Dr johnathon roman',
    specialty: 'Heart of cardioligist department',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Dr johnathon roman',
    specialty: 'Heart of cardioligist department',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Dr johnathon roman',
    specialty: 'Heart of cardioligist department',
  },
]

const patientTestimonials = [
  {
    quote:
      '“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”',
    name: 'John Carter',
    role: 'Web Designer',
    bgClassName: 'bg-[#F6F6F6]',
    starColor: '#7D7D7D',
    roleColor: '#7D7D7D',
    heightClassName: 'h-[444px]',
  },
  {
    quote:
      '“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”',
    name: 'John Carter',
    role: 'Web Designer',
    bgClassName: 'bg-[#FFE7DC]',
    starColor: '#F85001',
    roleColor: '#F85001',
    heightClassName: 'h-[526px]',
  },
  {
    quote:
      '“Lorem ipsum dolor sit amet conse ctetur adipiscing lectus a nunc mauris scelerisque sed egestas pharetraol quis pharetra arcu pharetra blandit.”',
    name: 'John Carter',
    role: 'Web Designer',
    bgClassName: 'bg-[#F6F6F6]',
    starColor: '#7D7D7D',
    roleColor: '#7D7D7D',
    heightClassName: 'h-[444px]',
  },
] as const

const footerGroups = [
  {
    title: 'Company',
    links: ['What’s New', 'About', 'Press', 'Care+', 'Social Good', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Medicare for Business', '2022 Creator Report', 'Charities', 'Creator Profile Directory', 'Explore Templates'],
  },
  {
    title: 'Support',
    links: ['Help Topics', 'Getting Started', 'Link tree Pro', 'Features & How-Tops', 'FAQs', 'Report a Violation'],
  },
  {
    title: 'Trust & Legal',
    links: ['Terms & Conditions', 'Privacy Notice', 'Cookie Notice', 'Trust Centre', 'Cookie Preferences'],
  },
] as const

const faqGroups = {
  Application: [
    {
      question: 'How can I book a virtual appointment?',
      answer:
        'Choose your service, pick a preferred slot, and continue to booking. The app keeps the flow lightweight so you can confirm quickly.',
    },
    {
      question: 'Can I reschedule or cancel appointments?',
      answer:
        'Yes. Bookings can be managed from your dashboard, and supported providers can be rescheduled in just a few taps.',
    },
    {
      question: 'Can I manage my family health through the app?',
      answer:
        'Yes. You can store common details, switch profiles, and keep ongoing care journeys easier to access for family members.',
    },
    {
      question: 'Is the app available in regional languages?',
      answer:
        'The experience is designed to stay simple first, with multilingual support planned for common user journeys.',
    },
  ],
  'Data & Privacy': [
    {
      question: 'Is my health data private and secure?',
      answer:
        'Health information is handled with secure access controls and limited exposure so patients can trust what they share.',
    },
    {
      question: 'Who can see my reports and consultation notes?',
      answer:
        'Only the patient and the care workflow they explicitly continue with should need access to those details.',
    },
    {
      question: 'Can I delete my personal records?',
      answer:
        'Patients should be able to request account or data management support through the platform help team.',
    },
    {
      question: 'Do you track payment or prescription history?',
      answer:
        'Essential records are kept so users can revisit bookings, reports and purchases without losing their care timeline.',
    },
  ],
  Emergency: [
    {
      question: 'How fast can I book an ambulance?',
      answer:
        'Emergency discovery is meant to be fast: choose a vehicle type, confirm the destination and continue to the response flow.',
    },
    {
      question: 'Can I book oxygen or ICU ambulances?',
      answer:
        'Yes. The emergency options are grouped by vehicle type so urgent needs like ICU or ALS can be selected quickly.',
    },
    {
      question: 'Will I see pricing before confirming?',
      answer:
        'Yes. The booking journey is designed to surface clear fares and service tags before you proceed.',
    },
    {
      question: 'Can I use emergency support late at night?',
      answer:
        'The homepage and emergency shortcuts are structured for around-the-clock access from mobile and desktop.',
    },
  ],
  'Lab test': [
    {
      question: 'Can I book a home sample collection?',
      answer:
        'Yes. You can choose between a lab visit and home sample collection while searching for the right test package.',
    },
    {
      question: 'When will I receive my reports?',
      answer:
        'Timelines vary by test, but the flow is designed so reports and updates can live in one easy-to-follow place.',
    },
    {
      question: 'Do lab packages include fasting guidance?',
      answer:
        'Package details can include simple prep notes so patients know what to do before the collection window.',
    },
    {
      question: 'Can I compare prices before booking?',
      answer:
        'Yes. Discovery should make it easy to compare packages, sample collection modes and lab options in one place.',
    },
  ],
} as const

type FaqCategory = keyof typeof faqGroups

function LogoMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={cn('inline-flex items-center gap-2', compact ? 'gap-1.5' : 'gap-2.5')}>
      <span
        className={cn(
          'grid shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#ffb56b_0%,#ff7f50_55%,#f84f01_100%)] shadow-[0_10px_22px_rgba(248,80,1,0.22)]',
          compact ? 'size-8' : 'size-10',
        )}
      >
        <svg className={compact ? 'size-4' : 'size-5'} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3.5v17M3.5 12h17" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
          <path d="m6.7 6.7 10.6 10.6M17.3 6.7 6.7 17.3" stroke="#fff5dd" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="min-w-0">
        <span className={cn('block font-sans font-black tracking-[-0.03em] text-[#3b3b3b]', compact ? 'text-xl' : 'text-[1.35rem]')}>
          ZappieCare
        </span>
      </span>
    </span>
  )
}

function StarRow({ color = '#f97316' }: { color?: string }) {
  return (
    <div className="flex items-center gap-[11px]" aria-hidden>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} className="size-[26px]" viewBox="0 0 26 26" fill="none">
          <path
            d="M12.1718 22.1833C12.6802 21.8764 13.3169 21.8764 13.8254 22.1833L19.0552 25.3399C20.2669 26.0712 21.7617 24.9848 21.4401 23.6065L20.0521 17.6579C19.9172 17.0795 20.1137 16.4739 20.5626 16.085L25.1854 12.0804C26.2552 11.1537 25.6833 9.39639 24.273 9.27678L18.1901 8.76087C17.5987 8.71072 17.0837 8.33739 16.8521 7.79099L14.4717 2.17479C13.9203 0.873986 12.0768 0.873989 11.5254 2.1748L9.14498 7.79099C8.91339 8.33739 8.39839 8.71072 7.80706 8.76087L1.72414 9.27678C0.313824 9.39639 -0.25806 11.1537 0.811731 12.0804L5.43449 16.085C5.88342 16.4739 6.07998 17.0795 5.94502 17.6579L4.55701 23.6065C4.2354 24.9848 5.73021 26.0712 6.94195 25.3399L12.1718 22.1833Z"
            fill={color}
          />
        </svg>
      ))}
    </div>
  )
}

function SearchField({
  label,
  value,
  onChange,
  options,
  icon,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options?: string[]
  icon: React.ReactNode
}) {
  return (
    <label className="flex min-h-[64px] flex-col justify-center gap-1 rounded-2xl border border-[#eee5d8] bg-[#fbfaf6] px-4 py-3">
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#9c917f]">{label}</span>
      <span className="flex items-center gap-2 text-sm font-semibold text-[#463e35]">
        <span className="text-[#9f8f7a]">{icon}</span>
        {options ? (
          <select
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="w-full border-0 bg-transparent p-0 text-sm font-semibold text-[#463e35] outline-none"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            aria-label={label}
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="w-full border-0 bg-transparent p-0 text-sm font-semibold text-[#463e35] outline-none"
          />
        )}
      </span>
    </label>
  )
}

function HeroDoctorCard({
  doctor,
  onBook,
}: {
  doctor: HeroDoctorCard
  onBook: () => void
}) {
  return (
    <article className="flex w-[278px] shrink-0 flex-col items-start gap-3">
      <div className="relative h-[295px] w-full overflow-hidden rounded-[12px] bg-[#d9dee6]">
        <img src={doctor.image} alt={doctor.name} className="h-full w-full object-cover" loading="lazy" decoding="async" />
        {doctor.featured ? (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-7 pb-5 pt-[225px]">
            <div className="flex items-end">
              <button
                type="button"
                onClick={onBook}
                className="inline-flex h-[50px] items-center rounded-[12px] border border-[#FC5000] bg-[#FDFCFA] px-4 text-[16px] font-bold text-[#FC5000]"
              >
                Book Appointment
              </button>
              <button
                type="button"
                onClick={onBook}
                className="ml-0.5 inline-flex h-[50px] w-[50px] items-center justify-center rounded-[12px] bg-[#FC5000] text-white"
                aria-label={`Book ${doctor.name}`}
              >
                <svg className="size-8" viewBox="0 0 32 32" fill="none" aria-hidden>
                  <path d="M26.6669 16H5.33362" stroke="currentColor" strokeWidth="1.48966" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M20.0005 22.6668C20.0005 22.6668 26.6671 17.757 26.6671 16.0002C26.6671 14.2434 20.0004 9.3335 20.0004 9.3335"
                    stroke="currentColor"
                    strokeWidth="1.48966"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center gap-1 self-stretch">
        <h3 className="mb-0 w-full text-[24px] font-black capitalize leading-none text-[#1F1F1F]">{doctor.name}</h3>
        <p className="mb-0 w-full text-[18px] font-medium capitalize leading-none text-[#8D8D8D]">{doctor.specialty}</p>
      </div>
    </article>
  )
}

export function LandingPage() {
  const heroesCarouselRef = useRef<HTMLDivElement>(null)
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
  const [faqTab, setFaqTab] = useState<FaqCategory>('Application')
  const [openFaqIndex, setOpenFaqIndex] = useState(0)
  const [heroesScrollProgress, setHeroesScrollProgress] = useState(0.5)

  const activeConfig = useMemo(
    () => searchTabs.find((tab) => tab.kind === activeTab) ?? searchTabs[0],
    [activeTab],
  )

  const activeForm = searchForms[activeTab]
  const activeFaqs = faqGroups[faqTab]

  const selectBookingTab = useCallback((kind: BookingKind) => {
    setActiveTab(kind)
    setSelectedServiceKind(kind)
  }, [])

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
  const heroesIndicatorWidth = 50.166
  const heroesIndicatorOffset = 1.25
  const heroesIndicatorTravel = 100 - heroesIndicatorWidth - heroesIndicatorOffset
  const heroesIndicatorLeft = heroesIndicatorOffset + heroesIndicatorTravel * heroesScrollProgress

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

  useEffect(() => {
    const node = heroesCarouselRef.current
    if (!node) return

    const syncProgress = () => {
      const maxScroll = node.scrollWidth - node.clientWidth
      if (maxScroll <= 0) {
        setHeroesScrollProgress(0.5)
        return
      }
      setHeroesScrollProgress(node.scrollLeft / maxScroll)
    }

    syncProgress()
    node.addEventListener('scroll', syncProgress, { passive: true })
    window.addEventListener('resize', syncProgress)

    return () => {
      node.removeEventListener('scroll', syncProgress)
      window.removeEventListener('resize', syncProgress)
    }
  }, [])

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

        <header id="home" className="relative z-10 px-4 pb-4 pt-5 sm:px-6 lg:px-8">
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3 rounded-[24px] bg-white/88 px-4 py-3 shadow-[0_18px_40px_rgba(57,46,25,0.08)] backdrop-blur">
            <a href="#home" className="text-inherit no-underline">
              <LogoMark compact />
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
                        d="M14.563 11.785C17.526 8.02785 16.7255 4.30131 14.597 2.99561C12.5857 1.76192 10.8303 2.25908 9.7758 3.05101L8.99985 3.63119M14.563 11.785C13.8517 12.6867 12.9238 13.5903 11.7454 14.4626C10.5857 15.3209 10.0059 15.75 9 15.75C7.9941 15.75 7.41429 15.3209 6.25465 14.4626C0.166289 9.95618 0.763552 4.6147 3.40308 2.99561C5.41432 1.76192 7.16971 2.25908 8.2242 3.05101L8.99985 3.63119M14.563 11.785L10.4191 7.08359C10.2494 6.89115 9.96547 6.84972 9.7479 6.98568L8.10832 8.01045C7.53135 8.37105 6.7825 8.2899 6.29617 7.81403C5.65378 7.18547 5.71859 6.13327 6.43327 5.5883L8.99985 3.63119"
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
                      <path d="M11.25 6.75L6.75 11.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                      <path
                        d="M11.25 11.25H11.2419M6.75807 6.75H6.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
                      <path d="M6 1.5V3M12 1.5V3M3 5.25h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
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
                  <LogoMark />
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
            <div className="px-4 pb-6 pt-10 text-center lg:px-12">
              <p
                className="mb-2 text-[clamp(2rem,4.5vw,2.875rem)] font-normal normal-case leading-[1.42] text-[#FC5000]"
                style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
              >
                Happie Happie Oye!
              </p>
              <h1 className="mx-auto max-w-4xl font-display text-[clamp(2.75rem,5vw,4rem)] font-bold uppercase leading-[1.42] tracking-[-0.02em] text-[#1F1F1F]">
                Because care should feel good.
              </h1>
            </div>
          ) : (
            <div className="pb-4 pt-8 lg:pt-10" aria-hidden />
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
              <ConsultDoctorHero
                frameSrc={doctorBgFrameSrc}
                characterSrc={doctorCharacterSrc}
                onBookNow={() => openBookingResults('doctor', buildPayload('doctor'))}
              />
            ) : null}
            {selectedServiceKind === 'nurse' && activeTab === 'nurse' ? (
              <ConsultNurseHero
                frameSrc={nurseBgFrameSrc}
                characterSrc={nurseCharacterSrc}
                onBookNow={() => openBookingResults('nurse', buildPayload('nurse'))}
              />
            ) : null}
            {selectedServiceKind === 'lab' && activeTab === 'lab' ? (
              <ConsultLabHero
                frameSrc={labBgFrameSrc}
                characterSrc={labCharacterSrc}
                onBookNow={() => openBookingResults('lab', buildPayload('lab'))}
              />
            ) : null}

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr_1fr_0.9fr_0.9fr_auto]">
              <SearchField
                label="Your city / pin code"
                value={activeForm.location}
                onChange={(value) => setFormValue('location', value)}
                icon={
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 17s5-4.35 5-9a5 5 0 1 0-10 0c0 4.65 5 9 5 9Z"
                    />
                    <circle cx="10" cy="8" r="1.6" />
                  </svg>
                }
              />
              <SearchField
                label={activeConfig.searchLabel}
                value={activeForm.primary}
                onChange={(value) => setFormValue('primary', value)}
                options={activeConfig.primaryOptions}
                icon={
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 5.5h13m-13 4h13m-13 5h8" />
                  </svg>
                }
              />
              <SearchField
                label={activeConfig.secondaryLabel}
                value={activeForm.secondary}
                onChange={(value) => setFormValue('secondary', value)}
                options={activeConfig.secondaryOptions}
                icon={
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.75h10v10.5H5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h10" />
                  </svg>
                }
              />
              <SearchField
                label="Date"
                value={activeForm.date}
                onChange={(value) => setFormValue('date', value)}
                options={['Today', 'Tomorrow', 'This Week']}
                icon={
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3.5v2M15 3.5v2M4 7h12M4.5 5.5h11a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Z" />
                  </svg>
                }
              />
              <SearchField
                label="Time"
                value={activeForm.slot}
                onChange={(value) => setFormValue('slot', value)}
                options={['8:00 AM', '9:30 AM', '11:00 AM', 'Flexible']}
                icon={
                  <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <circle cx="10" cy="10" r="6.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6.8v3.8l2.3 1.4" />
                  </svg>
                }
              />
              <button
                type="button"
                onClick={() => openBookingResults(activeTab)}
                className="min-h-[64px] rounded-2xl bg-[linear-gradient(135deg,#ca77a8_0%,#a14e84_100%)] px-6 text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_20px_32px_rgba(161,78,132,0.3)] transition hover:translate-y-[-1px]"
              >
                Search Now
              </button>
            </div>
          </div>
        </div>
        </header>
      </div>

      {/* Torn / wave transition between hero and Quick Services (Figma). */}
      <div className="relative z-10 hidden w-full overflow-x-clip md:block">
        <img
          src={heroBottomWaveSrc}
          alt=""
          width={1440}
          height={153}
          decoding="async"
          className="pointer-events-none mx-auto block h-auto w-full max-w-[1440px]"
          aria-hidden
        />
      </div>

      <main className="relative z-10 pb-24 md:pb-12">
        {bookingSearchKind ? (
          <section id="booking-results" className="px-4 pt-14 sm:px-6 lg:px-8">
            <BookDoctorSection bookingSearchKind={bookingSearchKind} heroSearchSnapshot={heroSearchSnapshot} />
          </section>
        ) : (
          <>
        <section id="services" className="relative z-10 bg-white px-4 pb-2 pt-4 sm:px-6 sm:pt-6 lg:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-[34px]">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="relative z-20 w-full max-w-[782px]">
                <p
                  className="mb-0 pl-3 text-left text-[clamp(2rem,6vw,46px)] font-normal normal-case leading-[1.42] text-[#FC5000]"
                  style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
                >
                  Quick Services
                </p>
                <h2 className="mb-0 mt-6 max-w-[782px] text-balance text-left font-display text-[clamp(1.75rem,5.5vw,56px)] font-bold uppercase leading-[1.42] text-[#1F1F1F] lg:mt-[37px]">
                  Book what you need in one tap.
                </h2>
              </div>

              <a
                href="#appointment"
                className="inline-flex w-fit min-w-0 items-center justify-end gap-[10px] self-start border-b border-[#E4E4E4] px-0 py-[10px] text-[16px] font-black uppercase leading-[1.4] tracking-normal text-[#8D8D8D] no-underline lg:self-end"
              >
                <span className="font-sans">VIEW MORE</span>
                <span className="relative inline-flex h-4 w-[26px] items-center justify-center rounded-[34px] bg-[#8D8D8D]">
                  <svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M4 2L7 5L4 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>

            <div className="relative z-10 grid grid-cols-1 justify-items-center gap-[30px] sm:grid-cols-2 xl:grid-cols-4">
              {quickServices.map((card) => (
                <article
                  key={card.title}
                  className="relative isolate h-[360px] w-full max-w-[278px] overflow-hidden rounded-[12px] border border-[#E4E4E4] bg-white"
                >
                  <svg
                    className="pointer-events-none absolute left-0 top-[217px] h-[144px] w-full"
                    viewBox="0 0 278 144"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden
                  >
                    <path d="M60.7126 33.9512L278 0V72.8616V144H0L60.7126 33.9512Z" fill={card.accent} fillOpacity="0.2" />
                  </svg>

                  <div className="absolute left-3 top-3 z-10 flex w-[254px] flex-col gap-[14px]">
                    <div className="flex flex-col gap-1">
                      <h3 className="mb-0 font-sans text-[24px] font-black uppercase leading-[1.4] text-[#1F1F1F]">
                        {card.title}
                      </h3>
                      <p className="mb-0 max-w-[254px] font-sans text-[18px] font-normal capitalize leading-[1.2] text-[#8D8D8D]">
                        {card.description}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => openBookingResults(card.kind)}
                      className="inline-flex items-center justify-center self-start rounded-lg bg-[#1F1F1F] px-6 py-3.5 font-sans text-[16px] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#111111]"
                    >
                      Book now
                    </button>
                  </div>

                  <div className={cn(card.artSlotClassName, 'z-[1]')}>
                    {card.consultCorner ? (
                      <svg
                        className="pointer-events-none absolute left-0 top-[205px] h-[13px] w-[10px]"
                        viewBox="0 0 10 13"
                        fill="none"
                        aria-hidden
                      >
                        <path d="M9.68061 12.2281V0L0 12.2281H9.68061Z" fill="#D6DAED" />
                      </svg>
                    ) : null}
                    <img
                      src={card.image}
                      alt={card.imageAlt ?? ''}
                      className={card.imageClassName}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="trust"
          className="relative mt-10 overflow-hidden border-y border-[#BCD9FF] bg-[linear-gradient(118deg,#E9F0FF_0%,#DDE8FF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-12"
        >
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/75d2525d11ef1d56d47142351a195e9956932db1?width=616"
            alt=""
            className="pointer-events-none absolute right-[-3rem] top-[-2.5rem] hidden h-[360px] w-auto rotate-90 opacity-[0.05] lg:block"
            loading="lazy"
            decoding="async"
          />
          <svg
            className="pointer-events-none absolute bottom-[-34rem] right-[-32rem] hidden h-[980px] w-[1060px] fill-[#33579F] opacity-[0.05] lg:block"
            viewBox="0 0 1490 1379"
            aria-hidden
          >
            <path d="M1099.68 198.651C1117.51 250.239 1107.19 302.772 1074.03 337.189C1020.18 393.028 935.923 424.053 852.804 423.133C852.642 386.278 845.99 349.559 832.405 315.155C819.429 282.314 802.81 258.156 781.664 241.297C753.231 218.619 716.539 211.088 685.926 221.689C662.969 229.624 644.516 247.389 633.975 271.69C621.514 300.395 621.525 334.225 633.968 362.223C656.906 413.78 708.093 439.969 747.001 452.884C765.096 458.872 783.847 463.271 802.889 466.033C794.377 521.48 768.721 574.343 728.333 613.493C697.696 643.229 660.569 664.908 621.256 687.874C599.262 700.712 576.555 714.006 554.966 728.871C456.228 796.86 393.417 892.882 382.559 992.417C375.277 1059.29 394.815 1126 431.832 1176.92C421.306 1196.97 414.033 1218.63 410.69 1241.11C406.387 1270.29 411.931 1298.74 427.22 1325.7L468.074 1302.53C452.998 1275.99 456.026 1255.71 457.16 1248.07C458.834 1236.75 461.857 1225.62 465.966 1214.96C488.315 1235.01 514.218 1250.33 542.641 1259.14C584.945 1272.22 626.244 1269.61 658.987 1251.8C661.263 1250.56 663.45 1249.28 665.585 1247.91C702.33 1224.41 721.871 1180.81 712.377 1141.56C704.536 1109.17 678.008 1082.15 643.181 1071.09C615.565 1062.33 583.633 1063.46 550.892 1074.31C515.726 1085.98 484.393 1107.74 460.148 1135.62C435.992 1096.11 423.885 1046.93 429.26 997.561C438.622 911.636 494.156 827.849 581.637 767.616C601.788 753.726 623.743 740.913 645 728.491C685.011 705.135 726.353 680.984 761.089 647.287C809.572 600.23 840.096 536.505 849.64 469.863C946.359 471.396 1044.91 435.187 1107.91 369.872C1156.35 319.609 1170.18 247.214 1140.22 174.901L1097.95 186.542C1099.33 189.838 1098.62 195.426 1099.73 198.73M531.165 1135.31C541.923 1128.43 553.451 1122.84 565.628 1118.79C581.842 1113.38 606.03 1108.5 628.907 1115.78C647.913 1121.8 662.723 1136.25 666.661 1152.51C671.625 1173.09 658.379 1198.56 636.44 1210.53C615.239 1222.08 586.076 1223.44 556.45 1214.24C531.368 1206.47 508.716 1192.14 489.654 1173.22C501.254 1158.34 515.343 1145.42 531.165 1135.31ZM693.706 269.672C695.96 268.23 698.485 266.95 701.277 266.001C716.616 260.707 736.664 265.391 752.395 277.964C766.97 289.603 778.838 307.378 788.746 332.371C799.697 360.041 805.302 389.458 805.965 419.08C790.929 416.655 776.123 413.022 761.769 408.266C737.28 400.122 693.647 380.864 676.856 343.104C669.785 327.167 669.842 306.951 677.059 290.351C680.014 283.556 685.123 275.16 693.745 269.647L693.706 269.672Z" />
          </svg>

          <div className="relative mx-auto flex max-w-[1164px] flex-col items-center gap-8 lg:gap-10">
            <div className="flex max-w-[584px] flex-col items-center gap-[6px]">
              <h2 className="mb-0 text-center text-[clamp(2.4rem,4vw,3.5rem)] leading-[1.2] tracking-[-0.03em] text-[#33579F]">
                Why trust ZappieCare?
              </h2>
              <p className="mb-0 text-center text-[16px] font-medium capitalize leading-[1.4] text-[#646D80]">
                Every nurse, doctor and ambulance partner is trained, background-checked and supported by hospital-certified teams.
              </p>
            </div>

            <div className="grid w-full gap-6 sm:grid-cols-2 xl:flex xl:items-center xl:justify-center xl:gap-[46px]">
              {trustHighlights.map((item, index) => (
                <div key={item.label} className="contents xl:contents">
                  <div className="flex flex-col items-center gap-[6px] text-center">
                    <img
                      src={item.image}
                      alt=""
                      className="h-[87px] w-[131px] object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <p className="mb-0 text-center text-[22px] font-bold capitalize leading-[1.2] text-[#1F1F1F]">
                      {item.label}
                    </p>
                  </div>
                  {index < trustHighlights.length - 1 ? (
                    <div className="hidden h-[133px] w-px bg-[linear-gradient(90deg,#E1EBFF_0%,#9CBDFF_47.12%,#E1EBFF_100%)] xl:block" />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="appointment" className="px-4 pb-2 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1231px]">
            <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[543px]">
                <p
                  className="mb-[6px] text-[clamp(2.35rem,4vw,2.875rem)] font-normal normal-case leading-[1.08] text-[#FC5000]"
                  style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
                >
                  Meet Our Heroes
                </p>
                <h2 className="mb-0 max-w-[543px] text-left text-[clamp(2.5rem,5vw,4.75rem)] leading-[1.02] tracking-[-0.03em] text-[#1F1F1F]">
                  Book AN appointment
                </h2>
              </div>

              <button
                type="button"
                onClick={() => openBookingResults('doctor')}
                className="inline-flex w-fit min-w-[190px] items-center justify-end gap-[10px] self-start border-b border-[#E4E4E4] px-0 py-[10px] text-base font-black uppercase text-[#8D8D8D] lg:self-end"
              >
                <span style={{ fontFamily: 'Satoshi Variable, Satoshi, sans-serif' }}>VIEW MORE</span>
                <span className="relative inline-flex h-4 w-[26px] items-center justify-center rounded-[34px] bg-[#8D8D8D]">
                  <svg className="h-[10px] w-[10px]" viewBox="0 0 10 10" fill="none" aria-hidden>
                    <path d="M4 2L7 5L4 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>

            <div
              ref={heroesCarouselRef}
              className="flex gap-[30px] overflow-x-auto pb-4 scrollbar-none"
              aria-label="Meet our heroes carousel"
            >
              {heroDoctors.map((doctor, index) => (
                <HeroDoctorCard
                  key={`${doctor.name}-${index}`}
                  doctor={doctor}
                  onBook={() =>
                    openBookingResults('doctor', {
                      kind: 'doctor',
                      specialty: 'Cardiology',
                      consultationMode: 'Clinic Visit',
                    })
                  }
                />
              ))}
            </div>

            <div className="mt-2 h-2 w-full rounded-[12px] bg-[#E4E4E4]">
              <div
                className="h-2 rounded-[12px] bg-[#1F1F1F] transition-[left] duration-200"
                style={{
                  width: `${heroesIndicatorWidth}%`,
                  marginLeft: `${heroesIndicatorLeft}%`,
                }}
              />
            </div>
          </div>
        </section>

        <section id="download" className="px-4 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1200px] rounded-[22px] bg-[#ECE6F6] p-4">
            <div className="relative overflow-hidden rounded-[12px] bg-[#382759] px-6 py-8 text-white sm:px-10 sm:py-12">
              <svg className="pointer-events-none absolute left-[-8rem] top-[-8rem] h-[900px] w-[1400px] opacity-[0.08]" viewBox="0 0 2322 1455" fill="none" aria-hidden>
                <path d="M2321.58 1454.02H0V0H2321.58L2321.58 1454.02ZM3.00075 1451.02H2318.58V3.00004H3.00075V1451.02Z" fill="#B3B3B3" />
              </svg>

              <div className="relative grid items-center gap-10 lg:grid-cols-[560px_1fr]">
                <div className="flex max-w-[560px] flex-col items-start gap-10">
                  <div className="flex flex-col items-start gap-[10px]">
                    <h2 className="mb-0 text-[clamp(2.7rem,5vw,3.75rem)] leading-[1.2] tracking-[-0.03em] text-white">
                      Smarter Healthcare in Your Pocket
                    </h2>
                    <p className="mb-0 text-[20px] leading-[1.2] text-white sm:text-[22px]">
                      Stay informed and in control. From symptom tracking to personalized care insights everything you need, right on your phone.
                    </p>
                  </div>
                  <a
                    href="#home"
                    className="inline-flex items-center justify-center rounded-[12px] bg-[#FC5000] px-[30px] py-5 text-[16px] font-bold capitalize text-white no-underline"
                  >
                    Download Now
                  </a>
                </div>

                <div className="relative mx-auto min-h-[360px] w-full max-w-[560px]">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/9a15e259d3877b7af99817e10cdd59813c7f0929?width=706"
                    alt=""
                    className="absolute left-[5%] top-[18%] w-[42%] max-w-[353px] -rotate-[13.279deg] rounded-[20px]"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fa26f0cd10e9050c23da5624aa63fd5b9552bec1?width=706"
                    alt=""
                    className="absolute right-0 top-0 w-[42%] max-w-[353px] rotate-[7.039deg] rounded-[20px] shadow-[-10px_0_20px_rgba(0,0,0,0.25)]"
                    loading="lazy"
                    decoding="async"
                  />
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/af298a50d337a99f6a01f0dfc6438601151068c5?width=212"
                    alt=""
                    className="absolute left-[39%] top-[8%] w-[106px] -rotate-[8.265deg]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden px-4 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex items-end justify-center gap-6 overflow-x-auto pb-4 scrollbar-none lg:gap-[30px]">
              {patientTestimonials.map((item, index) => (
                <article
                  key={`${item.name}-${index}`}
                  className={cn(
                    'shrink-0 rounded-[22px] px-7 py-7',
                    item.bgClassName,
                    item.heightClassName,
                    index === 1 ? 'w-[380px]' : 'w-[380px]',
                  )}
                >
                  <div className="flex h-full flex-col items-start gap-6">
                    <StarRow color={item.starColor} />
                    <p className="mb-0 max-w-[323px] text-[20px] font-medium leading-[30px] text-[#8D8D8D]">{item.quote}</p>
                    <div className="mt-auto flex flex-col items-start gap-1">
                      <p className="mb-0 text-[20px] font-bold leading-[20px] text-[#1F1F1F]">{item.name}</p>
                      <p className="mb-0 text-[18px] font-medium leading-[18px]" style={{ color: item.roleColor }}>
                        {item.role}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mx-auto mt-6 max-w-[1032px] text-center">
              <p
                className="mb-[6px] text-[clamp(2.35rem,4vw,2.875rem)] font-normal normal-case leading-[1.08] text-[#FC5000]"
                style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
              >
                Happy Patients
              </p>
              <h2 className="mb-0 text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.18] tracking-[-0.03em] text-[#1F1F1F]">
                take a look at what our customers says
              </h2>
            </div>
          </div>
        </section>

        <section id="blog" className="px-4 pt-12 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-[1137px] gap-[30px] lg:grid-cols-[651px_456px]">
            <article className="relative min-h-[542px] overflow-hidden rounded-[22px] bg-[#F0DA69]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e60196bc3cdd4a805d17c637471d32fbd92349da?width=616"
                alt=""
                className="pointer-events-none absolute bottom-[-6rem] left-[-1rem] h-[486px] w-[308px] rotate-90 opacity-[0.05]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute left-[30px] top-[30px] inline-flex h-9 items-center rounded-[6px] border border-[#1F1F1F] px-4 text-[16px] font-medium text-[#1F1F1F]">
                Blog Topic
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5f999b4760de8645571c3ffe8a8e023a0e6d8d46?width=918"
                alt=""
                className="absolute right-[-12px] top-10 h-[600px] w-[459px] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="relative z-10 flex h-full max-w-[372px] flex-col items-start gap-10 px-[30px] pb-[30px] pt-24">
                <h3 className="mb-0 text-[clamp(2rem,4vw,2.875rem)] font-bold normal-case leading-[1.2] tracking-[-0.03em] text-[#1F1F1F]">
                  Your Ultimate Guide to Health and Wellness
                </h3>
                <a
                  href="#home"
                  className="inline-flex items-center justify-center rounded-[12px] bg-[#695700] px-10 py-[22px] text-[20px] font-bold capitalize text-white no-underline"
                >
                  Read More
                </a>
              </div>
            </article>

            <article className="relative min-h-[542px] rounded-[22px] bg-[#E8EEF0] p-[30px]">
              <div className="inline-flex h-9 items-center rounded-[6px] border border-[#1F1F1F] px-4 text-[16px] font-medium text-[#1F1F1F]">
                Blog Topic
              </div>
              <div className="mt-[30px] flex gap-[13px]">
                {[
                  'https://api.builder.io/api/v1/image/assets/TEMP/1e58cb0b1f53e20511e8ea9a9d68d7f99e9f7292?width=264',
                  'https://api.builder.io/api/v1/image/assets/TEMP/451fd49b33eed24a077d4a6768037bba8e231db4?width=264',
                  'https://api.builder.io/api/v1/image/assets/TEMP/36c53c68669ca9199e2a880b427471fd133f5351?width=264',
                ].map((image) => (
                  <img key={image} src={image} alt="" className="h-[217px] w-[132px] rounded-[12px] object-cover" loading="lazy" decoding="async" />
                ))}
              </div>
              <h3 className="mb-0 mt-10 max-w-[422px] text-[clamp(2rem,4vw,2.75rem)] font-bold normal-case leading-[1.2] tracking-[-0.03em] text-[#1F1F1F]">
                Acne Care Combo of Cetaphil Oily Skin Cleanse.
              </h3>
            </article>
          </div>
        </section>

        <section id="faq" className="px-4 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1045px] flex-col items-center gap-[60px]">
            <div className="flex max-w-[897px] flex-col items-center gap-[30px]">
              <div className="flex max-w-[841px] flex-col items-center gap-5">
                <h2 className="mb-0 text-center text-[clamp(2.6rem,5vw,3.75rem)] leading-[1.2] tracking-[-0.03em] text-[#1F1F1F]">
                  Frequently asked <span className="text-[#F85001]">questions</span>
                </h2>
                <p className="mb-0 max-w-[461px] text-center text-[20px] leading-[1.2] text-[#8D8D8D]">
                  Have questions? We&apos;ve got answers to help you get started with confidence.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-px">
                {(Object.keys(faqGroups) as FaqCategory[]).map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => {
                      setFaqTab(category)
                      setOpenFaqIndex(0)
                    }}
                    className={cn(
                      'flex h-[59px] w-[190px] items-center justify-center rounded-[12px] border text-[20px] font-bold',
                      faqTab === category
                        ? 'border-[#2C1E45] bg-[#2C1E45] text-white'
                        : 'border-[#E4E4E4] bg-white text-[#1F1F1F]',
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full space-y-4">
              {activeFaqs.map((item, index) => {
                const open = openFaqIndex === index
                return (
                  <article
                    key={item.question}
                    className={cn(
                      'overflow-hidden rounded-[12px] border border-[#D5D5D5]',
                      open ? 'bg-[#F1F5F9]' : 'bg-white',
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(open ? -1 : index)}
                      className={cn(
                        'relative flex w-full items-center justify-between gap-4 border-0 bg-white px-[21px] text-left',
                        open ? 'h-[84px] rounded-t-[12px] border-b border-[#D5D5D5]' : 'h-[84px] rounded-[12px]',
                      )}
                    >
                      <span className="absolute left-0 top-[13px] h-[58px] w-[7px] rounded-r-[22px] bg-[#F85001]" />
                      <span className="pr-10 text-[18px] font-bold capitalize leading-[1.2] text-[#1F1F1F] sm:text-[22px]">
                        {item.question}
                      </span>
                      <span className="shrink-0 text-[24px] font-light text-[#F85001]">{open ? '−' : '+'}</span>
                    </button>
                    {open ? (
                      <p className="mb-0 px-[21px] py-7 text-[18px] font-medium leading-[1.4] text-[#1F1F1F] sm:text-[24px]">
                        {item.answer}
                      </p>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

          </>
        )}
      </main>

      <footer className="relative z-10 mt-12 overflow-hidden border border-[#E4E4E4] bg-white px-4 pb-[calc(5.75rem+env(safe-area-inset-bottom))] pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-5">
                <h3 className="mb-0 text-[22px] font-bold capitalize leading-[1.2] text-[#1F1F1F]">{group.title}</h3>
                <div className="flex flex-col items-start gap-[13px]">
                  {group.links.map((link) => (
                    <a key={link} href="#home" className="text-[18px] capitalize leading-[1.2] text-[#8D8D8D] no-underline">
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex items-center gap-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/f1b76b56ff0f16a89d83142db3346cc6874b1f9a?width=282"
                alt="App Store"
                className="h-[53px] w-[141px]"
                loading="lazy"
                decoding="async"
              />
              <div className="flex h-[53px] w-[141px] items-center justify-center rounded-[12px] bg-[#1F1F1F] text-white">
                <span className="text-sm font-bold">Google Play</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {['in', 'x', 'ig'].map((label) => (
                <a key={label} href="#home" className="grid size-10 place-items-center rounded-full bg-[#FC5000] text-sm font-bold uppercase text-white no-underline">
                  {label}
                </a>
              ))}
              <span className="ml-1 text-[22px] font-medium text-[#8D8D8D]">@zappiecare</span>
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-14 border-t border-[#E4E4E4]" />
        <div className="relative mx-auto max-w-[1380px] pb-8 pt-14 text-center">
          <div className="mx-auto flex h-[95px] w-[388px] max-w-full items-center justify-center rounded-[22px] border border-[#E4E4E4] bg-white">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/46d79280d296030b9ae7467ec6fe4b7901ed4695?width=642"
              alt="ZappieCare"
              className="h-[66px] w-[321px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/751b3ebc4296bd6dbbbde3399b9390790e28d820?width=1702"
            alt="Powered by Nemonttech"
            className="mx-auto mt-12 w-full max-w-[851px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </footer>

      <nav
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#e7dccb] bg-white/96 backdrop-blur md:hidden"
        aria-label="Mobile bottom navigation"
        style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
      >
        <div className="mx-auto flex max-w-md items-center justify-around px-2 pt-2">
          <a href="#home" className="flex min-h-[54px] min-w-[84px] flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#2f2c28] no-underline">
            <svg className="size-5 text-[#2f2c28]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m3 11.5 9-7 9 7M5.5 10.5v8h13v-8" />
            </svg>
            Home
          </a>
          <a href="#booking" className="flex min-h-[54px] min-w-[84px] flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#a7a093] no-underline">
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5v3M18 3.5v3M4.5 8.5h15M5 5.5h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1Z" />
            </svg>
            My Booking
          </a>
          <a href="#profile" className="flex min-h-[54px] min-w-[84px] flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#a7a093] no-underline">
            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
            </svg>
            Profile
          </a>
        </div>
      </nav>
    </div>
  )
}
