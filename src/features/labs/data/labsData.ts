import type { BookLabPackage } from '../types/labs.types'

/** Figma Book Lab — Frame 2147235726 (consulting strip + hero). */
export const consultLabHeroCopy = {
  headline: 'FAST & RELIABLE LAB TESTS FROM CERTIFIED LABS',
  subheadline: 'Find the right health tests and get samples collected safely from your home.',
} as const

/** Lab tests hero — text overlays `public/Tests Theme.svg` (Figma Book Lab Grid View). */
export const labThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '1000+ ZappieCare Heroes',
  headline: 'AFFORDABLE DIAGNOSTIC TESTS NEAR YOU',
}

export const labCategoryFilterOptions = [
  'All',
  'Blood Tests',
  'Urine Tests',
  'X-Ray / Ultrasound',
  'Health Packages',
  'Diabetes Care',
  'Thyroid Care',
] as const

export const labAvailability = ['Available Today', 'Available Tomorrow', 'Available This Week'] as const

export const labReportDelivery = ['Digital', 'Physical'] as const

/** Figma “Sample Collection” strip + dropdown: Lab Visit | Home Sample Collection. */
export const labSampleStripOptions = ['Lab Visit', 'Home Sample Collection'] as const

/** Figma Filter Labs sidebar (legacy copy — map to strip options in UI). */
export const labSampleCollection = ['Home Sample Available', 'Lab Visit Only'] as const

/** Figma “Test Package Type” dropdown (Book Lab / hero strip “All Tests”). */
export const labTestPackageStripOptions = [
  'All Tests',
  'Blood Test',
  'Urine Test',
  'X-Ray / Imaging',
  'Full Body Checkup',
  'Diabetes Tests',
  'Thyroid Tests',
] as const

export const labVerification = ['ZappieCare Verified', 'NABL Certified'] as const

export const labBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** Figma “Explore 3000+ Labs in Ahmedabad”. */
export const bookLabExploreLabsLine = (city: string) => `Explore 3000+ Labs in ${city}`

/** Mock lab packages for grid (Book Lab Grid View). */
export const bookLabPackages: BookLabPackage[] = [
  {
    id: 'lab-1',
    title: 'Full Body Health Package',
    category: 'Health Packages',
    testPackageTag: 'Full Body Checkup',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 2400,
    originalPrice: 3400,
    rating: 5,
    testsIncluded: 'Includes 12 Tests',
    priceLabel: 'Package Price',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-2',
    title: 'Thyroid Profile',
    category: 'Thyroid Care',
    testPackageTag: 'Thyroid Tests',
    sampleCollection: 'Lab Visit',
    labName: 'Galaxy PathLabs',
    price: 499,
    originalPrice: 799,
    rating: 4,
    testsIncluded: 'TSH, T3, T4',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-3',
    title: 'Diabetes Care Panel',
    category: 'Diabetes Care',
    testPackageTag: 'Diabetes Tests',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 649,
    originalPrice: 999,
    rating: 4.9,
    testsIncluded: 'FBS, PPBS, HbA1c',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-4',
    title: 'Vitamin & Mineral Panel',
    category: 'Blood Tests',
    testPackageTag: 'Blood Test',
    sampleCollection: 'Home Sample Collection',
    labName: 'Wellness Labs',
    price: 1299,
    originalPrice: 1899,
    rating: 4.7,
    testsIncluded: 'Vit D, B12, Iron, Calcium',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1631549916768-4119b38e5f6c?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-5',
    title: 'Liver Function Test (LFT)',
    category: 'Blood Tests',
    testPackageTag: 'Blood Test',
    sampleCollection: 'Lab Visit',
    labName: 'Galaxy PathLabs',
    price: 300,
    originalPrice: 400,
    rating: 4.8,
    testsIncluded: 'SGPT, SGOT, Bilirubin',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-6',
    title: 'Women’s Wellness Package',
    category: 'Health Packages',
    testPackageTag: 'Full Body Checkup',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 1599,
    originalPrice: 2499,
    rating: 4.9,
    testsIncluded: 'CBC, Thyroid, Vitamins',
    priceLabel: 'Package Price',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=560&h=420&q=80',
  },
]
