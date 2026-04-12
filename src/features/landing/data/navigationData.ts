import type { MobileQuickAction, NavItem, BookingServiceTab } from '@/types/common.types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Book Doctor', href: '#booking-results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
]

export const servicesDropdownItems = [
  { label: 'Home Care', href: '#download' },
  { label: 'Consult Doctor', href: '#booking-results', bookingIntent: 'doctor' as const },
  { label: 'Lab Test', href: '#booking-results', bookingIntent: 'lab' as const },
  { label: 'Ambulance', href: '#booking-results', bookingIntent: 'ambulance' as const },
  { label: '24x7 Emergency', href: '#faq' },
  { label: 'Elder care', href: '#booking-results', bookingIntent: 'elder' as const },
] as const

export const needHelpDropdownItems = [
  { label: 'FAQs', href: '#faq' },
  { label: 'Chat support', href: '#faq' },
  { label: 'Emergency Contact', href: '#faq' },
] as const

export const mobileQuickActions: MobileQuickAction[] = [
  {
    title: 'Consult Now',
    subtitle: 'Instant doctor consults.',
    badge: 'Verified Doctor',
    href: '#booking-results',
    ctaLabel: 'Consult Now',
    variant: 'consult',
  },
  {
    title: '24x7 Emergency',
    subtitle: 'Instant emergency care.',
    badge: '24/7 Available',
    href: '#faq',
    ctaLabel: 'VIEW MORE',
    variant: 'emergency',
  },
]

export const bookingServiceTabs: BookingServiceTab[] = [
  { label: 'Book Doctor' },
  { label: 'Book Nurse' },
  { label: 'Lab Test' },
  { label: 'Ambulance' },
  { label: 'Elder Care' },
]

export const footerGroups = [
  {
    title: 'Company',
    links: ['What’s New', 'About', 'Press', 'Care+', 'Social Good', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Medicare for Business', '2022 Creator Report', 'Charities', 'Creator Profile Directory', 'Explore Templates'],
  },
  {
    title: 'Support',
    links: ['Help Topics', 'Getting Started', 'Link tree Pro', 'Features & How-Tops', 'FAQs', 'Report a Violation'],
  },
  {
    title: 'Trust & Legal',
    links: ['Terms & Conditions', 'Privacy Notice', 'Cookie Notice', 'Trust Centre', 'Cookie Preferences'],
  },
] as const
