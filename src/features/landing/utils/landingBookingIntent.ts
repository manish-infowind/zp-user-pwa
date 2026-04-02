/** Session flag so links to `#booking-results` can open doctor vs nurse flows. */
export const BOOKING_INTENT_KEY = 'zcBookingIntent'

export function setBookingIntent(kind: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder') {
  sessionStorage.setItem(BOOKING_INTENT_KEY, kind)
}
