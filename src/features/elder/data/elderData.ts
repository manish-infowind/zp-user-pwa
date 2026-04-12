import type { BookElderProfile } from '../types/elder.types'

/** Elder care hero — text overlays `public/Elder Care.svg` (Figma Frame 1597884554, #F0FAEF). */
export const elderThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: 'Compassionate Care for Seniors',
  headline: 'BOOK TRUSTED ELDER CARE AT HOME',
}

export const elderCareCategories = [
  'Daily Living Assistance',
  'Personal Hygiene Support',
  'Mobility and Physio Support',
  'Medication Management',
  'Dementia / Alzheimer’s Care',
  'Palliative / End-of-Life Care',
] as const

export const elderCaregiverTypes = ['Care Attendant', 'Certified Care Nurse', 'Physiotherapy Assistant'] as const

export const elderAvailability = ['Available Today', 'Available Tomorrow', 'Long Term Care'] as const

export const elderCareDuration = ['Hourly Care', 'Day Shift', 'Night Shift', '24-Hour Care'] as const

export const elderVerification = ['ZappieCare Verified', 'Background Checked'] as const

export const elderBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** Results sidebar filters — Book Elder Care grid + active filters row. */
export const elderCategoryFilterOptions = ['All', ...elderCareCategories] as const
export const elderCaregiverFilterOptions = ['Any', ...elderCaregiverTypes] as const

/** Figma “Explore … elder caregivers in …”. */
export const bookElderExploreLine = (city: string) => `Explore trusted elder caregivers in ${city}`

/** Mock elder-care listings (Frame 2147225725). */
export const bookElderProfiles: BookElderProfile[] = [
  {
    id: 'eld-1',
    name: 'Meera Joshi',
    location: 'Satellite · 3 km',
    credentialLine: 'Certified geriatric care · 8 yrs',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Daily Living Assistance',
    durationTag: '24-Hour Care',
    availability: 'Available Today',
    rating: 4.9,
    fee: 1200,
    originalFee: 1500,
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Bathing, meals, mobility support, and friendly companionship.',
    serviceTags: ['Home visit', 'Verified'],
  },
  {
    id: 'eld-2',
    name: 'Rajesh Parmar',
    location: 'Maninagar · 4 km',
    credentialLine: 'Care attendant · Dementia training',
    caregiverTag: 'Care Attendant',
    categoryTag: 'Dementia / Alzheimer’s Care',
    durationTag: 'Day Shift',
    availability: 'Available Tomorrow',
    rating: 4.8,
    fee: 899,
    originalFee: 1100,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Structured routines, safety checks, and family updates.',
    serviceTags: ['Dementia care'],
  },
  {
    id: 'eld-3',
    name: 'Anita Desai',
    location: 'Bopal · 5 km',
    credentialLine: 'Certified nurse · ICU step-down',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Medication Management',
    durationTag: 'Night Shift',
    availability: 'Long Term Care',
    rating: 4.95,
    fee: 1400,
    originalFee: 1800,
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Medication reminders, vitals logging, and doctor coordination.',
    serviceTags: ['Nursing', 'Long term'],
  },
  {
    id: 'eld-4',
    name: 'Vikram Singh',
    location: 'SG Highway · 6 km',
    credentialLine: 'Physiotherapy assistant',
    caregiverTag: 'Physiotherapy Assistant',
    categoryTag: 'Mobility and Physio Support',
    durationTag: 'Hourly Care',
    availability: 'Available Today',
    rating: 4.7,
    fee: 650,
    originalFee: 800,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Gait training, fall prevention, and gentle mobility exercises.',
    serviceTags: ['Physio'],
  },
  {
    id: 'eld-5',
    name: 'Sunita Iyer',
    location: 'Vastrapur · 2 km',
    credentialLine: 'Palliative-certified caregiver',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Palliative / End-of-Life Care',
    durationTag: '24-Hour Care',
    availability: 'Available This Week',
    rating: 5,
    fee: 2200,
    originalFee: 2800,
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Comfort-focused care with empathy and clear family communication.',
    serviceTags: ['Palliative', 'Verified'],
  },
  {
    id: 'eld-6',
    name: 'Kiran Shah',
    location: 'Navrangpura · 3 km',
    credentialLine: 'Care attendant · hygiene specialist',
    caregiverTag: 'Care Attendant',
    categoryTag: 'Personal Hygiene Support',
    durationTag: 'Day Shift',
    availability: 'Available Tomorrow',
    rating: 4.85,
    fee: 750,
    originalFee: 950,
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Dignified assistance with bathing, dressing, and oral care.',
    serviceTags: ['Hygiene'],
  },
]
