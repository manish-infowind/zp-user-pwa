/** Ambulance listing card — Book Ambulance Grid View (Figma). */
export type BookAmbulanceProfile = {
  id: string
  name: string
  location: string
  etaMins: number
  availability: string
  tripsLine: string
  rating: number
  typeLabel: string
  featureLine: string
  serviceTags: string[]
  originalFare: number
  fare: number
  saveLabel?: string
  image: string
  /** Matches `ambulanceTypeStripOptions` for filtering. */
  ambulanceTypeTag: string
  /** Hospital / drop-off — matches hero destination + sidebar filter. */
  destination: string
}
