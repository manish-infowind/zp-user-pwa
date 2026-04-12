import type { BookAmbulanceProfile } from '../types/ambulance.types'

/** Emergency / Book Ambulance hero — text overlays `public/Emergency Theme.svg` (Figma Book Ambulance). */
export const ambulanceThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '1000+ ZappieCare Heroes',
  headline: 'FAST AMBULANCE SERVICE NEAR YOU',
}

/** Figma “Ambulance Type” strip + dropdown. */
export const ambulanceTypeStripOptions = [
  'Basic (Non-Emergency)',
  'Advanced Life Support (ALS)',
  'ICU Ambulance',
  'Neonatal / Pediatric',
] as const

/** Destination hospital — hero strip + filter (Book Ambulance). */
export const ambulanceDestinationOptions = [
  'Apollo International Hospital, Ahmedabad',
  'Zydus Hospital, Ahmedabad',
  'Civil Hospital, Ahmedabad',
  'Sterling Hospital, Ahmedabad',
] as const

/** Sidebar filter: any destination. */
export const ambulanceDestinationFilterOptions = ['Any', ...ambulanceDestinationOptions] as const

export const ambulanceSupport = ['Oxygen Support', 'Paramedic Available', 'Doctor On-Board'] as const

export const ambulanceResponseTime = ['Under 10 minutes', 'Under 20 minutes', 'Scheduled'] as const

export const ambulanceVerification = ['ZappieCare Verified', 'Hospital-Linked Ambulance'] as const

export const ambulanceBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** Figma “Explore 300+ Ambulances in Ahmedabad”. */
export const bookAmbulanceExploreLine = (city: string) => `Explore 300+ Ambulances in ${city}`

/** Mock ambulances for grid (Book Ambulance Grid View). */
export const bookAmbulanceProfiles: BookAmbulanceProfile[] = [
  {
    id: 'amb-1',
    name: 'ZappieCare Rapid ALS Unit',
    location: 'Saraspur · 2.1 km',
    etaMins: 8,
    availability: 'Available now',
    tripsLine: '1200+ trips',
    rating: 4.9,
    typeLabel: 'Advanced Life Support (ALS)',
    featureLine: 'Defibrillator, ventilator, paramedic crew',
    serviceTags: ['ALS', 'Verified'],
    originalFare: 3200,
    fare: 2499,
    saveLabel: 'Save ₹701',
    image:
      'https://images.unsplash.com/photo-1587745416684-479cbf8d4b4a?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Advanced Life Support (ALS)',
    destination: 'Apollo International Hospital, Ahmedabad',
  },
  {
    id: 'amb-2',
    name: 'ICU Transfer Ambulance',
    location: 'Near Civil Hospital · 4 km',
    etaMins: 12,
    availability: 'Available in 15 min',
    tripsLine: '890+ trips',
    rating: 4.8,
    typeLabel: 'ICU Ambulance',
    featureLine: 'Portable ICU setup, doctor on board',
    serviceTags: ['ICU', 'Doctor onboard'],
    originalFare: 5500,
    fare: 4599,
    saveLabel: 'Save ₹901',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'ICU Ambulance',
    destination: 'Civil Hospital, Ahmedabad',
  },
  {
    id: 'amb-3',
    name: 'City Basic Response',
    location: 'Satellite · 6 km',
    etaMins: 18,
    availability: 'Available today',
    tripsLine: '2100+ trips',
    rating: 4.6,
    typeLabel: 'Basic (Non-Emergency)',
    featureLine: 'Stretcher, oxygen support',
    serviceTags: ['Basic', 'Non-emergency'],
    originalFare: 1200,
    fare: 899,
    image:
      'https://images.unsplash.com/photo-1564694202779-bc908c327862?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Basic (Non-Emergency)',
    destination: 'Sterling Hospital, Ahmedabad',
  },
  {
    id: 'amb-4',
    name: 'Neonatal Transport',
    location: 'Apollo corridor · 3.5 km',
    etaMins: 10,
    availability: 'Available now',
    tripsLine: '340+ trips',
    rating: 4.95,
    typeLabel: 'Neonatal / Pediatric',
    featureLine: 'Incubator, pediatric specialist',
    serviceTags: ['Neonatal', 'Pediatric'],
    originalFare: 4800,
    fare: 3999,
    saveLabel: 'Save ₹801',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Neonatal / Pediatric',
    destination: 'Apollo International Hospital, Ahmedabad',
  },
  {
    id: 'amb-5',
    name: 'ALS Express — West Zone',
    location: 'Bopal · 5 km',
    etaMins: 14,
    availability: 'Available in 20 min',
    tripsLine: '760+ trips',
    rating: 4.7,
    typeLabel: 'Advanced Life Support (ALS)',
    featureLine: 'Cardiac monitor, advanced airway',
    serviceTags: ['ALS'],
    originalFare: 3000,
    fare: 2599,
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Advanced Life Support (ALS)',
    destination: 'Zydus Hospital, Ahmedabad',
  },
  {
    id: 'amb-6',
    name: 'ICU Night Line',
    location: 'SG Highway · 7 km',
    etaMins: 22,
    availability: 'Available tonight',
    tripsLine: '500+ trips',
    rating: 4.85,
    typeLabel: 'ICU Ambulance',
    featureLine: 'Full ICU equipment, 2 paramedics',
    serviceTags: ['ICU', 'Night'],
    originalFare: 6000,
    fare: 5199,
    saveLabel: 'Save ₹801',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'ICU Ambulance',
    destination: 'Zydus Hospital, Ahmedabad',
  },
]
