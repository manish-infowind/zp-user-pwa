import type { BookDoctorProfile, ConsultingSpecialtyCard, HeroDoctorCardData } from '../types/doctor.types'

/** Figma Consulting — Book Doctor gradient banner (tabs + hero + form). */
export const consultDoctorHeroCopy = {
  headline: 'CONSULT TRUSTED DOCTORS ANYTIME, ANYWHERE',
  subheadline:
    'Search And Book Appointments With Experienced Doctors Near You Or Consult Online.',
} as const

/** Doctor Theme hero — text overlays `public/Doctor Theme.svg` (legacy; non–Book Doctor tabs). */
export const doctorThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '300+ ZappieCare Heroes',
  headline: 'BOOK VERIFIED DOCTORS IN YOUR CITY',
}

/** Default specialty shown on landing booking strip (matches Figma “Orthopedic”). */
export const landingStripDefaultSpecialty = 'Orthopedics'

/** Doctor-type filter on the landing booking strip (Figma desktop landing). */
export const landingStripDoctorTypes = ['General', 'Specialist', 'Surgeon'] as const

export const consultationSpecialties = [
  'General',
  'Cardiology',
  'Orthopedics',
  'Dermatology',
  'Neurology',
  'Gynecology',
  'Pediatrics',
  'Psychiatry',
  'Gastroenterology',
  'Urology',
  'Pulmonology',
  'ENT',
  'General Surgery',
  'Dentistry',
  'Endocrinology',
]

/** Consulting — Doctor Specialties row (Figma product cards). */
export const popularDoctorSpecialtyCards: ConsultingSpecialtyCard[] = [
  {
    categoryLabel: 'General Health',
    specialtyLabel: 'General Physician',
    specialtyValue: 'General',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a6d79053f55ac278aafc1322abf0a3bec00e4722?width=500',
    imageClassName: 'h-[230px] w-full object-contain',
    borderClass: 'border-[#9D497E]',
    bgClass: 'bg-[#FFEDF9]',
    textClass: 'text-[#9D497E]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Heart & Blood Circulation',
    specialtyLabel: 'Cardiology',
    specialtyValue: 'Cardiology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/5d42382b246ac35f05c6c26910d0dd42416668a2?width=336',
    imageClassName: 'h-[230px] w-[168px] object-contain',
    borderClass: 'border-[#FF9555]',
    bgClass: 'bg-[#FFE9C9]',
    textClass: 'text-[#E48F18]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Digestive Health',
    specialtyLabel: 'Gastroenterology',
    specialtyValue: 'Gastroenterology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a05a0542cc01dc813e494198e6708547452c0920?width=428',
    imageClassName: 'h-[230px] w-[214px] object-contain',
    borderClass: 'border-[#9D1522]',
    bgClass: 'bg-[#FFC4C7]',
    textClass: 'text-[#E63E41]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Brain & Nervous System',
    specialtyLabel: 'Neurology',
    specialtyValue: 'Neurology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d3cf0059567cdc496f5f7b935c54247e89ba01c2?width=502',
    imageClassName: 'h-[230px] w-[251px] object-contain',
    borderClass: 'border-[#0E398C]',
    bgClass: 'bg-[#DDEDF9]',
    textClass: 'text-[#042D7D]',
    shadowColor: '#6CA3CC',
  },
  {
    categoryLabel: 'Skin, Hair & Nails',
    specialtyLabel: 'Dermatologist',
    specialtyValue: 'Dermatology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/5d42382b246ac35f05c6c26910d0dd42416668a2?width=336',
    imageClassName: 'h-[230px] w-[168px] object-contain',
    borderClass: 'border-[#FF9555]',
    bgClass: 'bg-[#FFE9C9]',
    textClass: 'text-[#E48F18]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Bones & Joints',
    specialtyLabel: 'Orthopedic',
    specialtyValue: 'Orthopedics',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a05a0542cc01dc813e494198e6708547452c0920?width=428',
    imageClassName: 'h-[230px] w-[214px] object-contain',
    borderClass: 'border-[#9D1522]',
    bgClass: 'bg-[#FFC4C7]',
    textClass: 'text-[#E63E41]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Ear, Nose & Throat',
    specialtyLabel: 'ENT Specialist',
    specialtyValue: 'ENT',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d3cf0059567cdc496f5f7b935c54247e89ba01c2?width=502',
    imageClassName: 'h-[230px] w-[251px] object-contain',
    borderClass: 'border-[#0E398C]',
    bgClass: 'bg-[#DDEDF9]',
    textClass: 'text-[#042D7D]',
    shadowColor: '#6CA3CC',
  },
  {
    categoryLabel: 'Mental Health',
    specialtyLabel: 'Psychiatrist',
    specialtyValue: 'Psychiatry',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a6d79053f55ac278aafc1322abf0a3bec00e4722?width=500',
    imageClassName: 'h-[230px] w-full object-contain',
    borderClass: 'border-[#9D497E]',
    bgClass: 'bg-[#FFEDF9]',
    textClass: 'text-[#9D497E]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Eye Care',
    specialtyLabel: 'Ophthalmologist',
    specialtyValue: 'Ophthalmology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a05a0542cc01dc813e494198e6708547452c0920?width=428',
    imageClassName: 'h-[230px] w-[214px] object-contain',
    borderClass: 'border-[#9D1522]',
    bgClass: 'bg-[#FFC4C7]',
    textClass: 'text-[#E63E41]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Lungs & Breathing',
    specialtyLabel: 'Pulmonologist',
    specialtyValue: 'Pulmonology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d3cf0059567cdc496f5f7b935c54247e89ba01c2?width=502',
    imageClassName: 'h-[230px] w-[251px] object-contain',
    borderClass: 'border-[#0E398C]',
    bgClass: 'bg-[#DDEDF9]',
    textClass: 'text-[#042D7D]',
    shadowColor: '#6CA3CC',
  },
  {
    categoryLabel: 'Urinary Health',
    specialtyLabel: 'Urologist',
    specialtyValue: 'Urology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a6d79053f55ac278aafc1322abf0a3bec00e4722?width=500',
    imageClassName: 'h-[230px] w-full object-contain',
    borderClass: 'border-[#9D497E]',
    bgClass: 'bg-[#FFEDF9]',
    textClass: 'text-[#9D497E]',
    shadowColor: '#DA9D9D',
  },
  {
    categoryLabel: 'Cancer Care',
    specialtyLabel: 'Oncologist',
    specialtyValue: 'Oncology',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/5d42382b246ac35f05c6c26910d0dd42416668a2?width=336',
    imageClassName: 'h-[230px] w-[168px] object-contain',
    borderClass: 'border-[#FF9555]',
    bgClass: 'bg-[#FFE9C9]',
    textClass: 'text-[#E48F18]',
    shadowColor: '#DA9D9D',
  },
]

export const consultingSpecialtyCards: ConsultingSpecialtyCard[] = popularDoctorSpecialtyCards.slice(0, 4)

export const bookDoctorSortOptions = ['Top Reviewed', 'Price: Low to High', 'Experience'] as const

export const bookDoctorAvailabilityFilters = [
  'Available Today',
  'Available Tomorrow',
  'Available This Week',
] as const

/** City label for “Explore … doctors in …” (Book Doctor Figma). */
export const bookDoctorExploreCity = 'Ahmedabad'
export const bookDoctorMapPreview =
  'https://api.builder.io/api/v1/image/assets/TEMP/0c3bc7c498cb5a6e36b1e673b04fbe9a1d417b18?width=592'

/** Sidebar specialty pills: label shown in UI, value matches `selectedSpecialty` / profile filters. */
export const bookDoctorSpecialtyPills = [
  { label: 'General Medicine', value: 'General' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Dermatology', value: 'Dermatology' },
  { label: 'Pediatrics', value: 'Pediatrics' },
  { label: 'Gynecology', value: 'Gynecology' },
  { label: 'Orthopedics', value: 'Orthopedics' },
] as const

export const bookDoctorProfiles: BookDoctorProfile[] = [
  {
    name: 'Dr. Aastha Chawan',
    location: 'Maninagar',
    specialty: 'Gynecologist',
    specialtyFilter: 'Gynecology',
    credentials: 'MBBS, DGO',
    bioSnippet:
      "Women's health, prenatal care, and minimally invasive procedures with 12+ years of practice.",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '1,260 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit', 'Home Visit'],
  },
  {
    name: 'Dr. Karan Patel',
    location: 'Saraspur',
    specialty: 'Orthopedics',
    specialtyFilter: 'Orthopedics',
    credentials: 'MS Ortho',
    bioSnippet: 'Sports injuries, joint replacement planning, and post-op recovery support.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '980 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit'],
  },
  {
    name: 'Dr. Riya Shah',
    location: 'Bapunagar',
    specialty: 'Dermatology',
    specialtyFilter: 'Dermatology',
    credentials: 'MBBS, DDVL',
    bioSnippet: 'Acne, pigmentation, and cosmetic dermatology with evidence-based treatment plans.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '640 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit', 'Home Visit'],
  },
  {
    name: 'Dr. Mehul Desai',
    location: 'Naranpura',
    specialty: 'Cardiology',
    specialtyFilter: 'Cardiology',
    credentials: 'DM Cardiology',
    bioSnippet: 'Hypertension, heart failure management, and preventive cardiac screening.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '1,120 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit'],
  },
]

export const heroDoctors: HeroDoctorCardData[] = [
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
