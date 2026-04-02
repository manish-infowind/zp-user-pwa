export type NavItem = {
  label: string
  href: string
}

/** Figma Consulting — “Doctor Specialties” product cards. */
export type ConsultingSpecialtyCard = {
  categoryLabel: string
  specialtyLabel: string
  specialtyValue: string
  image: string
  borderClass: string
  bgClass: string
  textClass: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ServiceItem = {
  title: string
  text: string
}

export type FooterColumn = {
  title: string
  links: string[]
}

export type MobileQuickAction = {
  title: string
  subtitle: string
  badge?: string
  href: string
  ctaLabel: string
  variant: 'consult' | 'emergency'
}

export type TrustPillar = {
  label: string
  sublabel: string
}

export type LandingQuickService = {
  title: string
  description: string
  ctaLabel: string
  href: string
  variant: 'home' | 'consult' | 'lab' | 'emergency'
  /** When linking to `#booking-results`, which search flow to open. */
  bookingIntent?: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder'
}

export type BookingServiceTab = {
  label: string
}

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

/** Lab test package card — Book Lab grid (Figma). */
export type BookLabPackage = {
  id: string
  title: string
  category: string
  /** Matches `labTestPackageStripOptions` for hero + filters (e.g. Blood Test, All Tests). */
  testPackageTag: string
  sampleCollection: string
  labName: string
  price: number
  originalPrice: number
  image: string
  rating: number
  testsIncluded: string
  /** Figma cards show “Test Price” vs “Package Price”. */
  priceLabel?: 'Test Price' | 'Package Price'
}

/** Ambulance listing card — Book Ambulance Grid View (Figma). */
export type BookAmbulanceProfile = {
  id: string
  name: string
  location: string
  etaMins: number
  availability: string
  tripsLine: string
  rating: number
  typeLabel: string
  featureLine: string
  serviceTags: string[]
  originalFare: number
  fare: number
  saveLabel?: string
  image: string
  /** Matches `ambulanceTypeStripOptions` for filtering. */
  ambulanceTypeTag: string
  /** Hospital / drop-off — matches hero destination + sidebar filter. */
  destination: string
}

/** Elder / senior care caregiver card — Book Elder Care (Figma). */
export type BookElderProfile = {
  id: string
  name: string
  location: string
  credentialLine: string
  /** Matches `elderCaregiverTypes` for filtering. */
  caregiverTag: string
  /** Matches `elderCareCategories` for filtering. */
  categoryTag: string
  /** Display e.g. “24-Hour Care”. */
  durationTag: string
  availability: string
  rating: number
  fee: number
  originalFee: number
  image: string
  featureLine: string
  serviceTags: string[]
}

export type BookDoctorProfile = {
  name: string
  location: string
  /** Display label on the card */
  specialty: string
  /** Must match an entry in `consultationSpecialties` (except "General") for filtering */
  specialtyFilter: string
  credentials: string
  /** Short line for list-view cards (Figma doctor row). */
  bioSnippet: string
  image: string
  rating: number
  reviews: string
  fee: number
  originalFee: number
  discountLabel: string
  verifiedLabel: string
  consultationModes: ConsultationMode[]
  /** When set (nurse listings), mode pills use these labels instead of consultationModes. */
  nurseModeLabels?: string[]
  /** Nurse grid filter (Figma nurse type / ICU). */
  nurseListingType?: 'General' | 'Critical Care' | 'Caretaker'
}
