import { BookDoctorSection } from '@/features/landing/components/BookDoctorSection'
import { BlogSection } from '@/features/landing/components/BlogSection'
import { DoctorsSection } from '@/features/landing/components/DoctorsSection'
import { FaqSection } from '@/features/landing/components/FaqSection'
import { HeroSection } from '@/features/landing/components/HeroSection'
import { LandingBookingStrip } from '@/features/landing/components/LandingBookingStrip'
import { MobileBottomNav } from '@/features/landing/components/MobileBottomNav'
import { MobileHomeDashboard } from '@/features/landing/components/MobileHomeDashboard'
import { PromoSection } from '@/features/landing/components/PromoSection'
import { QuickServicesSection } from '@/features/landing/components/QuickServicesSection'
import { ServicesSection } from '@/features/landing/components/ServicesSection'
import { SiteFooter } from '@/features/landing/components/SiteFooter'
import { SiteHeader } from '@/features/landing/components/SiteHeader'
import { TestimonialBanner } from '@/features/landing/components/TestimonialBanner'
import { TestimonialsSection } from '@/features/landing/components/TestimonialsSection'
import { TrustZappieSection } from '@/features/landing/components/TrustZappieSection'
import type { HeroBookingSearchPayload } from '@/features/landing/types'
import { BOOKING_INTENT_KEY } from '@/features/landing/utils/landingBookingIntent'
import { useCallback, useEffect, useState } from 'react'

export function LandingPage() {
  const [bookingSearchKind, setBookingSearchKind] = useState<
    'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder' | null
  >(null)
  const [heroSearchSnapshot, setHeroSearchSnapshot] = useState<HeroBookingSearchPayload | null>(null)

  const syncBookingFromHash = useCallback(() => {
    const intent = sessionStorage.getItem(BOOKING_INTENT_KEY) as
      | 'doctor'
      | 'nurse'
      | 'lab'
      | 'ambulance'
      | 'elder'
      | null
    if (
      intent === 'doctor' ||
      intent === 'nurse' ||
      intent === 'lab' ||
      intent === 'ambulance' ||
      intent === 'elder'
    ) {
      setBookingSearchKind(intent)
      sessionStorage.removeItem(BOOKING_INTENT_KEY)
      return
    }
    const raw = window.location.hash.slice(1)
    if (raw === 'book-doctor') setBookingSearchKind('doctor')
    else if (raw === 'book-nurse') setBookingSearchKind('nurse')
    else if (raw === 'book-lab') setBookingSearchKind('lab')
    else if (raw === 'book-ambulance') setBookingSearchKind('ambulance')
    else if (raw === 'book-elder') setBookingSearchKind('elder')
  }, [])

  useEffect(() => {
    syncBookingFromHash()
    window.addEventListener('hashchange', syncBookingFromHash)
    return () => window.removeEventListener('hashchange', syncBookingFromHash)
  }, [syncBookingFromHash])

  const handleHomeBookingSearch = useCallback((payload: HeroBookingSearchPayload) => {
    setBookingSearchKind(payload.kind)
    setHeroSearchSnapshot(payload)
    window.location.hash = 'booking-results'
    requestAnimationFrame(() => {
      document.getElementById('booking-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }, [])

  return (
    <div className="mx-auto w-full max-w-[1440px] overflow-x-hidden text-ink">
      <span id="profile" className="sr-only">
        Profile
      </span>
      <div id="booking" className="relative scroll-mt-[72px] overflow-hidden bg-[#FDF2F8]">
        <SiteHeader variant="hero" />
        <LandingBookingStrip onBookingSearch={handleHomeBookingSearch} />
      </div>
      <main className="w-full min-w-0 md:pb-0">
        <BookDoctorSection bookingSearchKind={bookingSearchKind} heroSearchSnapshot={heroSearchSnapshot} />
        <MobileHomeDashboard />
        <QuickServicesSection />
        <TrustZappieSection />
        <HeroSection />
        <ServicesSection />
        <DoctorsSection />
        <div className="flex flex-col-reverse md:contents">
          <TestimonialBanner />
          <TestimonialsSection />
        </div>
        <PromoSection />
        <BlogSection />
        <FaqSection />
      </main>
      <SiteFooter />
      <MobileBottomNav />
    </div>
  )
}
