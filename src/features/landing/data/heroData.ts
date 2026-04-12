import type { LandingQuickService } from '@/types/common.types'

export const happieTagline = {
  eyebrow: 'Happie Happie Oye!',
  subtitle: 'Because care should feel good.',
}

export const landingQuickServices: LandingQuickService[] = [
  {
    title: 'Home Care',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#download',
    variant: 'home',
  },
  {
    title: 'Consult Now',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#booking-results',
    variant: 'consult',
    bookingIntent: 'doctor',
  },
  {
    title: 'Lab tests',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#booking-results',
    variant: 'lab',
    bookingIntent: 'lab',
  },
  {
    title: '24x7 Emergency',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#faq',
    variant: 'emergency',
  },
]

const quickServiceImg = (file: string) => `${import.meta.env.BASE_URL}${file}`

export const quickServices: LandingQuickService[] = [
  {
    title: 'HOME CARE',
    description: 'Nurses, Beds, And Medical Support Delivered To Your Doorstep.',
    image: quickServiceImg('quick-service-home.png'),
    imageAlt: 'Home care service illustration',
    accent: '#12CE94',
    artSlotClassName: 'pointer-events-none absolute left-[113px] top-[166px] h-[212px] w-[175px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
    kind: 'nurse',
  },
  {
    title: 'CONSULT NOW',
    description: 'Nurses, Beds, And Medical Support Delivered To Your Doorstep.',
    image: quickServiceImg('quick-service-consult.png'),
    imageAlt: '',
    accent: '#DA9EDE',
    artSlotClassName: 'pointer-events-none absolute left-[49px] top-[146px] h-[268px] w-[277px]',
    imageClassName: 'absolute left-[9px] top-0 h-[268px] w-[268px] max-w-none object-contain',
    consultCorner: true,
    kind: 'doctor',
  },
  {
    title: 'LAB TESTS',
    description: 'Nurses, Beds, And Medical Support Delivered To Your Doorstep.',
    image: quickServiceImg('quick-service-lab.png'),
    imageAlt: 'Lab tests illustration',
    accent: '#FACD00',
    artSlotClassName: 'pointer-events-none absolute left-[25px] top-[210px] h-[184px] w-[282px]',
    imageClassName: 'h-full w-full object-contain object-bottom',
    kind: 'lab',
  },
]
