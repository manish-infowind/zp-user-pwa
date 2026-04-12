import type { BookNurseProfile } from '../types/nurse.types'

/** Figma Book Nurse — Frame 2147235729 (consulting strip + hero). */
export const consultNurseHeroCopy = {
  headline: 'PROFESSIONAL NURSING CARE AT HOME',
  subheadline: 'Book trained nurses for medical care, recovery support, and daily assistance.',
} as const

/** Homecare / Book Nurse hero — text overlays `public/Homecare Theme.svg` (Figma Book Nurse). */
export const homecareThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: 'Trusted Nurses for Every Need',
  headline: 'BOOK HOME NURSING IN YOUR CITY',
}

/** Sidebar + filters; first entry = no category filter (Figma “General Care”). */
export const nurseCareCategories = [
  'All',
  'Elder Care',
  'Patient Attendant',
  'Mother & Newborn Care',
  'Physiotherapy Assistance',
  'Post-Surgery Care',
  'ICU / Critical Care',
] as const

/** Horizontal strip “Care Type” labels (maps to `nurseCareCategories` values). */
export const nurseCareTypeStripOptions = [
  { label: 'General Care', value: 'All' as const },
  { label: 'Elder Care', value: 'Elder Care' as const },
  { label: 'Post-Surgery Care', value: 'Post-Surgery Care' as const },
  { label: 'ICU / Critical Care', value: 'ICU / Critical Care' as const },
  { label: 'Mother & Newborn Care', value: 'Mother & Newborn Care' as const },
] as const

/** Strip “Care Mode” dropdown (Figma) — subset of full nurse care modes. */
export const nurseCareStripModes = ['Home Visit', 'Hospital Duty'] as const

/** Figma Filter Nurse default fee range. */
export const nurseFeeRangeDefaults = { min: 500, max: 3000 } as const

export const nurseNurseTypes = ['General', 'Critical Care', 'Caretaker'] as const

export const nurseAvailability = ['Available Today', 'Available Tomorrow', 'Available This Week'] as const

export const nurseCareModes = ['Any', 'Home Visit', 'Hospital Duty', 'Day Shift', 'Night Shift'] as const

export const nurseVerification = ['ZappieCare Verified', 'Hospital-Trained'] as const

export const nurseBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** Book Nurse grid — care category in `specialtyFilter` matches `nurseCareCategories`. */
export const bookNurseProfiles: BookNurseProfile[] = [
  {
    name: 'Sister Anita Desai',
    location: 'Maninagar',
    specialty: 'Elder Care Nurse',
    specialtyFilter: 'Elder Care',
    nurseListingType: 'General',
    credentials: 'GNM, 8+ yrs',
    bioSnippet: 'Dedicated elder support, medication reminders, and daily living assistance at home.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '890 reviews',
    fee: 499,
    originalFee: 800,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Day Shift'],
  },
  {
    name: 'Nurse Priya Mehta',
    location: 'Saraspur',
    specialty: 'Mother & Newborn Care',
    specialtyFilter: 'Mother & Newborn Care',
    nurseListingType: 'General',
    credentials: 'B.Sc Nursing, 6+ yrs',
    bioSnippet: 'Newborn care, feeding support, and postpartum recovery guidance.',
    image:
      'https://images.unsplash.com/photo-1582750433447-56ed8432b214?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '720 reviews',
    fee: 599,
    originalFee: 900,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Night Shift'],
  },
  {
    name: 'Nurse Imran Khan',
    location: 'Bapunagar',
    specialty: 'Post-Surgery Care',
    specialtyFilter: 'Post-Surgery Care',
    nurseListingType: 'Critical Care',
    credentials: 'ICU-trained, 10+ yrs',
    bioSnippet: 'Wound care, mobility support, and vitals monitoring after surgery.',
    image:
      'https://images.unsplash.com/photo-1537368916865-24a68b754a8e?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 4.8,
    reviews: '540 reviews',
    fee: 649,
    originalFee: 950,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Hospital Duty', 'Day Shift'],
  },
  {
    name: 'Sister Kavita Joshi',
    location: 'Naranpura',
    specialty: 'Physiotherapy Assistance',
    specialtyFilter: 'Physiotherapy Assistance',
    nurseListingType: 'General',
    credentials: 'ANM, 7+ yrs',
    bioSnippet: 'Exercise assistance, mobility routines, and recovery-focused home visits.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879a1f?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '610 reviews',
    fee: 549,
    originalFee: 850,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Day Shift'],
  },
]
