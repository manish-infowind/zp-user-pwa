import type { LandingBookingKind } from '@/features/landing/config/searchConfig'
import type { HeroDoctorCardData } from '@/features/doctor/types/doctor.types'

export const nurseHomecareCategories = [
  {
    eyebrowLabel: 'Recovery support',
    title: 'Post Surgery Care',
    titleColor: '#5B7CBE',
    borderColor: '#5B7CBE',
    bgColor: '#DDEDF9',
    shadowColor: '#7FB0D5',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a8ab184875c60b4eb9b614988ad68af3466bc254?width=292',
    imageClassName: 'h-[230px] w-[146px] object-contain',
    artVariant: 'image',
  },
  {
    eyebrowLabel: 'Mother monitoring',
    title: 'Pregnancy Care',
    titleColor: '#9D497E',
    borderColor: '#C4509D',
    bgColor: '#FFE1F5',
    shadowColor: '#9D497E',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/a3f428883523a4b8428d89d3baf69eed41242387?width=276',
    imageClassName: 'h-[230px] w-[138px] object-contain',
    artVariant: 'image',
  },
  {
    eyebrowLabel: 'Senior assistance',
    title: 'Elderly Care',
    titleColor: '#E48F18',
    borderColor: '#FF9555',
    bgColor: '#FFE9C9',
    shadowColor: '#DA9D9D',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/fb8e93d96f846bbd59f75770505ee33c9f359ece?width=492',
    imageClassName: 'h-[230px] w-[246px] object-contain',
    artVariant: 'image',
  },
  {
    eyebrowLabel: 'Pain recovery',
    title: 'Phyisiotherapy',
    titleColor: '#007954',
    borderColor: '#007954',
    bgColor: '#D9F7EE',
    shadowColor: '#007954',
    artVariant: 'physio',
  },
] as const

const nurseSymptomTones = {
  purple: {
    borderColor: '#F499D5',
    bgColor: '#FFEDF9',
    textColor: '#9D497E',
  },
  orange: {
    borderColor: '#F6DDA1',
    bgColor: '#FFF4DB',
    textColor: '#E48F18',
  },
  blue: {
    borderColor: '#89A8E6',
    bgColor: '#EAF3FF',
    textColor: '#042D7D',
  },
  violet: {
    borderColor: '#BB9BF4',
    bgColor: '#F3EBFF',
    textColor: '#6F33D9',
  },
} as const

export const nurseLandingSymptoms = [
  {
    title: 'Oxygen Support',
    description: 'Breathing support',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0a9dacadb3fea6d863f55c77407937000eedbece?width=200',
    ...nurseSymptomTones.purple,
  },
  {
    title: 'Wound Dressing',
    description: 'Professional wound care',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/97dff495caee3b91ae4984412dc769ea27eeeacf?width=200',
    ...nurseSymptomTones.orange,
  },
  {
    title: 'IV Drip Care',
    description: 'IV fluid monitoring',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/bc3407f6591e06cbd5c9b5a0e4497536f2ceef67?width=200',
    ...nurseSymptomTones.blue,
  },
  {
    title: 'Injection Shot',
    description: 'Medicine shots',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/3be74c492da42909db5dd492b7e30cec13645b41?width=200',
    ...nurseSymptomTones.violet,
  },
] as const

export const popularNurseCards: HeroDoctorCardData[] = [
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d165d2c40b26574c596960c173f789e94a8bd761?width=556',
    name: 'Nurse Priya Sharma',
    specialty: 'Elderly & Home Patient Care',
    featured: true,
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Nurse Rahul Verma',
    specialty: 'Senior Care Specialist',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Nurse Anita Joseph',
    specialty: 'Post-Surgery Recovery Support',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Nurse Fatima Khan',
    specialty: 'Critical Homecare Support',
  },
  {
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c749118863aae6f77518367ecca9ba12a55d3faa?width=556',
    name: 'Nurse',
    specialty: 'Heart of cardioligist department',
  },
] as const

export const nurseHomecareWorksImage =
  'https://api.builder.io/api/v1/image/assets/TEMP/f0ff8e7cb77da0db344047abb4007f8623d66906?width=2400'

export const nurseCareServices = [
  {
    title: 'Consult Now',
    description: 'Book best doctors around you for your Health consultation',
    ctaLabel: 'Book now',
    accentColor: '#DA9EDE',
    bookingKind: 'doctor' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/4c75cc89f3406e889298eac2f5a85c00cbe24dc8?width=536',
    imageClassName: 'absolute left-[58px] top-[146px] h-[268px] w-[268px] object-contain',
  },
  {
    title: 'Mental Wellness',
    description: 'Therapy & support, anytime with best therapist',
    ctaLabel: 'Book now',
    accentColor: '#DA9EDE',
    bookingKind: 'doctor' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0b2b9baeb761c249d1c1b61a3754ba87df42f7d9?width=416',
    imageClassName: 'absolute left-[85px] top-[150px] h-[230px] w-[208px] object-contain',
  },
  {
    title: 'Lab testS',
    description: 'Book diagnostic tests from trusted laboratories',
    ctaLabel: 'Book now',
    accentColor: '#FACD00',
    bookingKind: 'lab' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/f2def876940ca4375ff0779e0f6e10a0fcfbd74d?width=564',
    imageClassName: 'absolute left-[25px] top-[210px] h-[184px] w-[282px] max-w-none object-contain',
  },
  {
    title: '24x7 Emergency',
    description: 'Quick emergency ambulance support available when you need it',
    ctaLabel: 'Book now',
    accentColor: '#FC5000',
    bookingKind: 'ambulance' as LandingBookingKind,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/e5b8f10425589f5f0db90ce3be536628c374d7cb?width=400',
    imageClassName: 'absolute left-[86px] top-[190px] h-[183px] w-[200px] object-contain',
  },
] as const
