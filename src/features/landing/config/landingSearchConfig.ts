import type { HeroBookingSearchPayload } from '@/features/landing/types'
import { BOOKING_INTENT_KEY } from '@/features/landing/utils/landingBookingIntent'

export type LandingBookingKind = 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder'

export type LandingSearchForm = {
  location: string
  primary: string
  secondary: string
  date: string
  slot: string
}

export type LandingHeroSearchTab = {
  kind: LandingBookingKind
  label: string
  searchLabel: string
  primaryLabel: string
  primaryOptions: string[]
  secondaryLabel: string
  secondaryOptions: string[]
}

export const bookingHashMap: Record<string, LandingBookingKind> = {
  'book-doctor': 'doctor',
  'book-nurse': 'nurse',
  'book-lab': 'lab',
  'book-ambulance': 'ambulance',
  'book-elder': 'elder',
}

export const searchTabs: LandingHeroSearchTab[] = [
  {
    kind: 'doctor',
    label: 'Book Doctor',
    searchLabel: 'Choose Doctor Type',
    primaryLabel: 'Speciality',
    primaryOptions: ['Orthopedics', 'General Physician', 'Dermatology', 'Cardiology'],
    secondaryLabel: 'Visit Type',
    secondaryOptions: ['Clinic Visit', 'Home Visit'],
  },
  {
    kind: 'nurse',
    label: 'Book Nurse',
    searchLabel: 'Choose Care Type',
    primaryLabel: 'Care Category',
    primaryOptions: ['General Care', 'Elder Care', 'Post-Surgery Care', 'Mother & Newborn Care'],
    secondaryLabel: 'Care Mode',
    secondaryOptions: ['Home Visit', 'Hospital Duty'],
  },
  {
    kind: 'lab',
    label: 'Lab Test',
    searchLabel: 'Choose Test Type',
    primaryLabel: 'Package Type',
    primaryOptions: ['All Tests', 'Blood Test', 'Thyroid', 'Wellness'],
    secondaryLabel: 'Sample Collection',
    secondaryOptions: ['Lab Visit', 'Home Sample Collection'],
  },
  {
    kind: 'ambulance',
    label: 'Ambulance',
    searchLabel: 'Choose Ambulance Type',
    primaryLabel: 'Vehicle Type',
    primaryOptions: ['Basic', 'ALS', 'ICU', 'Neonatal'],
    secondaryLabel: 'Destination',
    secondaryOptions: ['Apollo Hospital', 'Sterling Hospital', 'Civil Hospital', 'Any Nearby Hospital'],
  },
  {
    kind: 'elder',
    label: 'Elder Care',
    searchLabel: 'Choose Service Type',
    primaryLabel: 'Service Category',
    primaryOptions: ['Daily Support', '24-Hour Care', 'Mobility Support', 'Companion Care'],
    secondaryLabel: 'Caregiver Type',
    secondaryOptions: ['Attendant', 'Nurse', 'Physiotherapy Support', 'Companion'],
  },
]

export const initialSearchForms: Record<LandingBookingKind, LandingSearchForm> = {
  doctor: {
    location: 'Ahmedabad',
    primary: 'Orthopedics',
    secondary: 'Clinic Visit',
    date: 'Today',
    slot: '9:30 AM',
  },
  nurse: {
    location: 'Ahmedabad',
    primary: 'General Care',
    secondary: 'Home Visit',
    date: 'Today',
    slot: '10:00 AM',
  },
  lab: {
    location: 'Ahmedabad',
    primary: 'All Tests',
    secondary: 'Home Sample Collection',
    date: 'Tomorrow',
    slot: '8:00 AM',
  },
  ambulance: {
    location: 'Ahmedabad',
    primary: 'Basic',
    secondary: 'Any Nearby Hospital',
    date: 'Now',
    slot: 'Within 15 mins',
  },
  elder: {
    location: 'Ahmedabad',
    primary: 'Daily Support',
    secondary: 'Attendant',
    date: 'This Week',
    slot: 'Flexible',
  },
}

export function createSearchPayload(kind: LandingBookingKind, form: LandingSearchForm): HeroBookingSearchPayload {
  switch (kind) {
    case 'doctor':
      return {
        kind: 'doctor',
        specialty: form.primary,
        consultationMode: form.secondary === 'Home Visit' ? 'Home Visit' : 'Clinic Visit',
      }
    case 'nurse':
      return {
        kind: 'nurse',
        nurseCareCategory: form.primary,
        nurseCareMode: form.secondary,
      }
    case 'lab':
      return {
        kind: 'lab',
        testPackageType: form.primary,
        sampleCollection: form.secondary,
      }
    case 'ambulance':
      return {
        kind: 'ambulance',
        ambulanceType: form.primary,
        destination: form.secondary,
      }
    case 'elder':
      return {
        kind: 'elder',
        elderCareCategory: form.primary,
        caregiverType: form.secondary,
      }
  }
}

export function readInitialBookingState() {
  if (typeof window === 'undefined' || typeof sessionStorage === 'undefined') {
    return {
      activeTab: 'doctor' as LandingBookingKind,
      selectedServiceKind: null as LandingBookingKind | null,
      bookingSearchKind: null as LandingBookingKind | null,
      heroSearchSnapshot: null as HeroBookingSearchPayload | null,
    }
  }

  const fromSession = sessionStorage.getItem(BOOKING_INTENT_KEY) as LandingBookingKind | null
  if (fromSession) {
    sessionStorage.removeItem(BOOKING_INTENT_KEY)
    return {
      activeTab: fromSession,
      selectedServiceKind: fromSession,
      bookingSearchKind: fromSession,
      heroSearchSnapshot: createSearchPayload(fromSession, initialSearchForms[fromSession]),
    }
  }

  const raw = window.location.hash.slice(1)
  const kind = bookingHashMap[raw]

  if (!kind) {
    return {
      activeTab: 'doctor' as LandingBookingKind,
      selectedServiceKind: null as LandingBookingKind | null,
      bookingSearchKind: null as LandingBookingKind | null,
      heroSearchSnapshot: null as HeroBookingSearchPayload | null,
    }
  }

  return {
    activeTab: kind,
    selectedServiceKind: kind,
    bookingSearchKind: kind,
    heroSearchSnapshot: createSearchPayload(kind, initialSearchForms[kind]),
  }
}
