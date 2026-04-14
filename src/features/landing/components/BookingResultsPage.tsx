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
      <section className="py-10 sm:py-14">
        <div id="booking-results" className="app-container">
          <BookDoctorSection
            bookingSearchKind={bookingSearchKind}
            heroSearchSnapshot={heroSearchSnapshot}
          />
        </div>
      </section>
    </div>
  )
}
