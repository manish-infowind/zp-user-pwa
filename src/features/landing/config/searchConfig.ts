import { BOOKING_INTENT_KEY } from '@/utils/bookingIntent'

export type ConsultationMode = 'Clinic Visit' | 'Home Visit'

/** Values captured on the home hero when the user taps SEARCH NOW — drives filters + list below. */
export type HeroBookingSearchPayload =
  | {
      kind: 'doctor'
      specialty: string
      consultationMode: ConsultationMode
    }
  | {
      kind: 'nurse'
      nurseCareCategory: string
      nurseCareMode: string
    }
  | {
      kind: 'lab'
      /** Figma hero “All Tests” / “Blood Test” / … (Test Package Type). */
      testPackageType: string
      /** Figma: “Lab Visit” | “Home Sample Collection”. */
      sampleCollection: string
    }
  | {
      kind: 'ambulance'
      ambulanceType: string
      destination: string
    }
  | {
      kind: 'elder'
      elderCareCategory: string
      caregiverType: string
    }

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
  fields: {
    key: keyof LandingSearchForm
    label: string
    options: string[]
    icon: string
  }[]
}

export const bookingHashMap: Record<string, LandingBookingKind> = {
  'book-doctor': 'doctor',
  'book-nurse': 'nurse',
  'book-lab': 'lab',
  'book-ambulance': 'ambulance',
  'book-elder': 'elder',
}

/** Figma “Sample Collection” strip + dropdown: Lab Visit | Home Sample Collection. */
export const labSampleStripOptions = ['Lab Visit', 'Home Sample Collection'] as const

/** Figma “Test Package Type” dropdown (Book Lab / hero strip “All Tests”). */
export const labTestCategories = ['All Tests', 'Blood Test', 'Thyroid', 'Wellness'] as const

/** Sidebar filters: first entry = no category filter. */
export const labCategoryFilterOptions = ['All', ...labTestCategories] as const

export const searchTabs: LandingHeroSearchTab[] = [
  {
    kind: 'doctor',
    label: 'Book Doctor',
    searchLabel: 'Choose Doctor Type',
    fields: [
      { key: 'location', label: 'Location', options: ['Ahmedabad', 'Mumbai', 'Delhi'], icon: 'location' },
      { key: 'primary', label: 'Speciality', options: ['Orthopedics', 'General Physician', 'Dermatology', 'Cardiology'], icon: 'specialty' },
      { key: 'secondary', label: 'Visit Type', options: ['Clinic Visit', 'Home Visit'], icon: 'mode' },
    ],
  },
  {
    kind: 'nurse',
    label: 'Book Nurse',
    searchLabel: 'Choose Care Type',
    fields: [
      { key: 'location', label: 'Location', options: ['Ahmedabad', 'Mumbai', 'Delhi'], icon: 'location' },
      { key: 'primary', label: 'Care Category', options: ['General Care', 'Elder Care', 'Post-Surgery Care', 'Mother & Newborn Care'], icon: 'specialty' },
      { key: 'secondary', label: 'Care Mode', options: ['Home Visit', 'Hospital Duty'], icon: 'mode' },
    ],
  },
  {
    kind: 'lab',
    label: 'Lab Test',
    searchLabel: 'Choose Test Type',
    fields: [
      { key: 'location', label: 'Location', options: ['Ahmedabad', 'Mumbai', 'Delhi'], icon: 'location' },
      { key: 'primary', label: 'Package Type', options: [...labTestCategories], icon: 'specialty' },
      { key: 'secondary', label: 'Sample Collection', options: [...labSampleStripOptions], icon: 'mode' },
    ],
  },
  {
    kind: 'ambulance',
    label: 'Ambulance',
    searchLabel: 'Choose Ambulance Type',
    fields: [
      { key: 'location', label: 'Location', options: ['Ahmedabad', 'Mumbai', 'Delhi'], icon: 'location' },
      { key: 'primary', label: 'Vehicle Type', options: ['Basic', 'ALS', 'ICU', 'Neonatal'], icon: 'specialty' },
      { key: 'secondary', label: 'Destination', options: ['Apollo Hospital', 'Sterling Hospital', 'Civil Hospital', 'Any Nearby Hospital'], icon: 'mode' },
    ],
  },
  {
    kind: 'elder',
    label: 'Elder Care',
    searchLabel: 'Choose Service Type',
    fields: [
      { key: 'location', label: 'Location', options: ['Ahmedabad', 'Mumbai', 'Delhi'], icon: 'location' },
      { key: 'primary', label: 'Service Category', options: ['Daily Support', '24-Hour Care', 'Mobility Support', 'Companion Care'], icon: 'specialty' },
      { key: 'secondary', label: 'Caregiver Type', options: ['Attendant', 'Nurse', 'Physiotherapy Support', 'Companion'], icon: 'mode' },
    ],
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
