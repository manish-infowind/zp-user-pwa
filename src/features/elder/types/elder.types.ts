/** Elder / senior care caregiver card — Book Elder Care (Figma). */
export type BookElderProfile = {
  id: string
  name: string
  location: string
  credentialLine: string
  /** Matches `elderCaregiverTypes` for filtering. */
  caregiverTag: string
  /** Matches `elderCareCategories` for filtering. */
  categoryTag: string
  /** Display e.g. “24-Hour Care”. */
  durationTag: string
  availability: string
  rating: number
  fee: number
  originalFee: number
  image: string
  featureLine: string
  serviceTags: string[]
}
