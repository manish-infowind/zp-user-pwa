import type { LandingBookingKind } from '@/features/landing/config/searchConfig'

const symptomIcons = {
  purple: 'https://api.builder.io/api/v1/image/assets/TEMP/dd9d565fce3f12e450c45542142ced00c60cd231?width=200',
  orange: 'https://api.builder.io/api/v1/image/assets/TEMP/2a9b54f8439e1d97a1419f5a0f4cde1eff91ce8c?width=200',
  blue: 'https://api.builder.io/api/v1/image/assets/TEMP/b60d7a758af126eedbc89af141be7b841962f3b5?width=200',
  violet: 'https://api.builder.io/api/v1/image/assets/TEMP/f49c49f682dc3ee0d33500a24dcfb311bf38d011?width=200',
} as const

const symptomTones = {
  purple: {
    image: symptomIcons.purple,
    borderColor: '#F499D5',
    bgColor: '#FFEDF9',
    textColor: '#9D497E',
  },
  orange: {
    image: symptomIcons.orange,
    borderColor: '#F6DDA1',
    bgColor: '#FFF4DB',
    textColor: '#E48F18',
  },
  blue: {
    image: symptomIcons.blue,
    borderColor: '#89A8E6',
    bgColor: '#EAF3FF',
    textColor: '#042D7D',
  },
  violet: {
    image: symptomIcons.violet,
    borderColor: '#BB9BF4',
    bgColor: '#F3EBFF',
    textColor: '#6F33D9',
  },
} as const

export const popularDoctorSymptoms = [
  {
    title: 'Headache',
    description: 'Migraine, tension pain',
    ...symptomTones.purple,
  },
  {
    title: 'Fever',
    description: 'High temperature, chills',
    ...symptomTones.orange,
  },
  {
    title: 'Toothache',
    description: 'Cavities, gum pain',
    ...symptomTones.blue,
  },
  {
    title: 'Hair Loss',
    description: 'Scalp & hair fall',
    ...symptomTones.violet,
  },
  {
    title: 'Chest Pain',
    description: 'Pressure • heart concern',
    ...symptomTones.violet,
  },
  {
    title: 'Stomach Pain',
    description: 'Acidity • cramps',
    ...symptomTones.blue,
  },
  {
    title: 'Skin Rash',
    description: 'Allergy • irritation',
    ...symptomTones.orange,
  },
  {
    title: 'Eye Irritation',
    description: 'Redness • itching',
    ...symptomTones.purple,
  },
  {
    title: 'Breathing Issues',
    description: 'Shortness • wheezing',
    ...symptomTones.orange,
  },
  {
    title: 'Cough & Cold',
    description: 'Cough • congestion',
    ...symptomTones.purple,
  },
  {
    title: 'Joint Pain',
    description: 'Swelling • stiffness',
    ...symptomTones.violet,
  },
  {
    title: 'Back Pain',
    description: 'Muscle strain • posture',
    ...symptomTones.blue,
  },
] as const

export const doctorLandingSymptoms = popularDoctorSymptoms.slice(0, 4)

export const doctorConsultationWorksImage =
  'https://api.builder.io/api/v1/image/assets/TEMP/30c034ce1c9220cb9cf1511eee8d02cc986c4043?width=2400'

export const doctorCareServices = [
  {
    title: 'Home Care',
    description: 'Professional nurses available for home medical care',
    ctaLabel: 'Book now',
    accentColor: '#12CE94',
    bookingKind: 'nurse' as LandingBookingKind,
    artVariant: 'home' as const,
  },
  {
    title: 'Mental Wellness',
    description: 'Therapy & support, anytime with best therapist',
    ctaLabel: 'Book now',
    accentColor: '#DA9EDE',
    bookingKind: 'doctor' as LandingBookingKind,
    artVariant: 'image' as const,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/0b2b9baeb761c249d1c1b61a3754ba87df42f7d9?width=416',
    imageClassName: 'absolute left-[85px] top-[150px] h-[230px] w-[208px] object-contain',
  },
  {
    title: 'Lab testS',
    description: 'Book diagnostic tests from trusted laboratories',
    ctaLabel: 'Book now',
    accentColor: '#FACD00',
    bookingKind: 'lab' as LandingBookingKind,
    artVariant: 'image' as const,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/b04b8f8d1fd3baaa25c298c54f2316c81b1bc522?width=564',
    imageClassName: 'absolute left-[25px] top-[210px] h-[184px] w-[282px] max-w-none object-contain',
  },
  {
    title: '24x7 Emergency',
    description: 'Quick emergency ambulance support available when you need it',
    ctaLabel: 'Book now',
    accentColor: '#FC5000',
    bookingKind: 'ambulance' as LandingBookingKind,
    artVariant: 'image' as const,
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/59874af0eea1c7164407497c33fa7dac4dcc05de?width=400',
    imageClassName: 'absolute left-[86px] top-[190px] h-[183px] w-[200px] object-contain',
  },
] as const
