import type { LandingBookingKind } from '@/features/landing/config/searchConfig'
import type { HeroDoctorCardData } from '@/features/doctor/types/doctor.types'

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

export const labLandingCategories = [
  {
    eyebrowLabel: 'General Health Check',
    title: 'Blood Tests',
    titleColor: '#B68000',
    borderColor: '#B68000',
    bgColor: '#FFEDF9',
    shadowColor: '#DA9D9D',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a3f01d6c3a15b7b88e161d2df23773693efc9087?width=460',
    imageClassName: 'h-[176px] w-[176px] object-contain',
  },
  {
    eyebrowLabel: 'Heart Health',
    title: 'Cholesterol Test',
    titleColor: '#E48F18',
    borderColor: '#FF9555',
    bgColor: '#FFE9C9',
    shadowColor: '#DA9D9D',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/20784e93e7be4ae6df38fab828033f43deeedc21?width=460',
    imageClassName: 'h-[176px] w-[176px] object-contain',
  },
  {
    eyebrowLabel: 'Hormone Health',
    title: 'Thyroid Test',
    titleColor: '#E63E41',
    borderColor: '#9D1522',
    bgColor: '#FFC4C7',
    shadowColor: '#DA9D9D',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c9b75bcf76161380e0e9fbd6878b905828666f59?width=462',
    imageClassName: 'h-[176px] w-[177px] object-contain',
  },
  {
    eyebrowLabel: 'Diabetes Monitoring',
    title: 'Blood Sugar Test',
    titleColor: '#042D7D',
    borderColor: '#0E398C',
    bgColor: '#DDEDF9',
    shadowColor: '#7FB0D5',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/3153e72adbc8c9075fdf3cda1e9c3ff573417b18?width=465',
    imageClassName: 'h-[176px] w-[178px] object-contain',
  },
] as const

export const expandedLabLandingCategories = [
  labLandingCategories[0],
  labLandingCategories[1],
  labLandingCategories[2],
  labLandingCategories[3],
  labLandingCategories[1],
  labLandingCategories[0],
  labLandingCategories[3],
  labLandingCategories[2],
  labLandingCategories[2],
  labLandingCategories[3],
  labLandingCategories[0],
  labLandingCategories[1],
] as const

export const labLandingSymptoms = [
  {
    title: 'Headache',
    description: 'CBC & Vitamin Tests',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/dd9d565fce3f12e450c45542142ced00c60cd231?width=200',
    borderColor: '#F499D5',
    bgColor: '#FFEDF9',
    textColor: '#C4509D',
  },
  {
    title: 'Fever',
    description: 'Infection Blood Tests',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/2a9b54f8439e1d97a1419f5a0f4cde1eff91ce8c?width=200',
    borderColor: '#F6DDA1',
    bgColor: '#FFF4DB',
    textColor: '#CA9E35',
  },
  {
    title: 'Toothache',
    description: 'Infection Screening',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/b60d7a758af126eedbc89af141be7b841962f3b5?width=200',
    borderColor: '#89A8E6',
    bgColor: '#EAF3FF',
    textColor: '#5B7CBE',
  },
  {
    title: 'Hair Loss',
    description: 'Thyroid & Vitamin Tests',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/f49c49f682dc3ee0d33500a24dcfb311bf38d011?width=200',
    borderColor: '#BB9BF4',
    bgColor: '#F3EBFF',
    textColor: '#825FC0',
  },
] as const

export const popularLabCards: HeroDoctorCardData[] = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/5c5622d21175784aef6f8d86f0d9ed6ab1c182f5?width=556',
    name: 'HealthFirst Diagnostics',
    specialty: 'Certified pathology lab',
    featured: true,
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/189ac2e8943b22efe984767e6735449ac51e200a?width=556',
    name: 'MedCare Diagnostics',
    specialty: 'Advanced diagnostic services',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d2f6d6af4c169b3e7024b4ea5403111c75e91709?width=556',
    name: 'LifeLab Diagnostics',
    specialty: 'Trusted health testing center',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/98b611f977b1d0b262129a8abbe1a51d61dbf011?width=556',
    name: 'CarePlus Pathology',
    specialty: 'Comprehensive lab testing',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/e3af0d085b7f43f5f1fd818509bd7d326db22f6b?width=556',
    name: 'ZappieLab',
    specialty: 'Trusted health testing center',
  },
] as const

export const labTestProcessImage =
  'https://api.builder.io/api/v1/image/assets/TEMP/da7128f4eba35f254bb07eb424e44b7a093c521a?width=2394'

export const labCareServices = [
  {
    title: 'Consult Now',
    description: 'Book best doctors around you for your Health consultation',
    ctaLabel: 'Book now',
    accentColor: '#DA9EDE',
    bookingKind: 'doctor' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/78d19137ac8d2429d3ec8f6f9d5ff40520219819?width=536',
    imageClassName: 'absolute left-[58px] top-[146px] h-[214px] w-[214px] object-contain',
  },
  {
    title: 'Home Care',
    description: 'Professional nurses available for home medical care',
    ctaLabel: 'Book now',
    accentColor: '#12CE94',
    bookingKind: 'nurse' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fb8e93d96f846bbd59f75770505ee33c9f359ece?width=492',
    imageClassName: 'absolute left-[88px] top-[160px] h-[200px] w-[180px] object-contain',
  },
  {
    title: 'Lab tests',
    description: 'Book diagnostic tests from trusted laboratories',
    ctaLabel: 'Book now',
    accentColor: '#FACD00',
    bookingKind: 'lab' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/f2def876940ca4375ff0779e0f6e10a0fcfbd74d?width=564',
    imageClassName: 'absolute left-[25px] top-[210px] h-[150px] w-[232px] max-w-none object-contain',
  },
  {
    title: '24x7 Emergency',
    description: 'Quick emergency ambulance support available when you need it',
    ctaLabel: 'Book now',
    accentColor: '#FC5000',
    bookingKind: 'ambulance' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/60a68285ebbb8da5a9c6a6af8b6af023d152071a?width=400',
    imageClassName: 'absolute left-[86px] top-[190px] h-[158px] w-[172px] object-contain',
  },
] as const
