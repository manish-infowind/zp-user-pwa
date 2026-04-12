import { BookDoctorSection } from '@/features/landing/components/BookDoctorSection'
import type { HeroBookingSearchPayload, LandingBookingKind } from '@/features/landing/config/searchConfig'

type BookingResultsPageProps = {
  bookingSearchKind: LandingBookingKind | null
  heroSearchSnapshot: HeroBookingSearchPayload | null
}

export function BookingResultsPage({
  bookingSearchKind,
  heroSearchSnapshot,
}: BookingResultsPageProps) {
  if (!bookingSearchKind) return null

  return (
    <div className="bg-white">
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div id="booking-results" className="mx-auto max-w-[1200px]">
          <BookDoctorSection
            bookingSearchKind={bookingSearchKind}
            heroSearchSnapshot={heroSearchSnapshot}
          />
        </div>
      </section>
    </div>
  )
}
