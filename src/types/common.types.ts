export const COMMON_TYPES_VERSION = 1

export type NavItem = {
  label: string
  href: string
}

export type Testimonial = {
  name: string
  role: string
  quote: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ServiceItem = {
  title: string
  text: string
}

export type FooterColumn = {
  title: string
  links: string[]
}

export type MobileQuickAction = {
  title: string
  subtitle: string
  badge?: string
  href: string
  ctaLabel: string
  variant: 'consult' | 'emergency'
}

export type TrustPillar = {
  label: string
  sublabel: string
}

export type LandingQuickService = {
  title: string
  description: string
  ctaLabel?: string
  href?: string
  variant?: 'home' | 'consult' | 'lab' | 'emergency'
  /** When linking to `#booking-results`, which search flow to open. */
  bookingIntent?: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder'
  artSlotClassName?: string
  imageClassName?: string
  image?: string
  imageAlt?: string
  accent?: string
  kind?: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder'
  consultCorner?: boolean
}

export type BookingServiceTab = {
  label: string
}
