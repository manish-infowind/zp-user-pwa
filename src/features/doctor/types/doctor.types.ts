import type { ConsultationMode } from '@/features/landing/config/searchConfig'

export type { ConsultationMode }

/** Figma Consulting — “Doctor Specialties” product cards. */
export type ConsultingSpecialtyCard = {
  categoryLabel: string
  specialtyLabel: string
  specialtyValue: string
  image: string
  imageClassName?: string
  borderClass: string
  bgClass: string
  textClass: string
  shadowColor?: string
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

export type HeroDoctorCardData = {
  image: string
  name: string
  specialty: string
  featured?: boolean
}
