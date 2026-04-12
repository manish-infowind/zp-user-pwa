import type { BookDoctorProfile } from '@/features/doctor/types/doctor.types'

/** 
 * Currently Nurse profiles share the same structure as Doctor profiles in the Landing data.
 * We reuse the type here to maintain behavior, but keeping it in its own file for future extension.
 */
export type BookNurseProfile = BookDoctorProfile
