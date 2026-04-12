/** Session flag so links to `#booking-results` can open doctor vs nurse flows. */
export const BOOKING_INTENT_KEY = 'zcBookingIntent'

/** Optional `consultationSpecialties` value when opening doctor flow from consulting chips. */
export const DOCTOR_SPECIALTY_KEY = 'zcDoctorSpecialty'

export function setBookingIntent(kind: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder') {
  sessionStorage.setItem(BOOKING_INTENT_KEY, kind)
}

/** Doctor consulting landing — specialty chip → Book Doctor results with that filter. */
export function setDoctorBrowseIntent(specialty?: string) {
  setBookingIntent('doctor')
  if (specialty) {
    sessionStorage.setItem(DOCTOR_SPECIALTY_KEY, specialty)
  }
}
