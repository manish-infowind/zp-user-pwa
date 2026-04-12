import { DoctorResults } from '@/features/doctor/components/DoctorResults'
import { NurseResults } from '@/features/nurse/components/NurseResults'
import { LabsResults } from '@/features/labs/components/LabsResults'
import { AmbulanceResults } from '@/features/ambulance/components/AmbulanceResults'
import { ElderResults } from '@/features/elder/components/ElderResults'
import type { HeroBookingSearchPayload } from '../config/searchConfig'

type BookDoctorSectionProps = {
  bookingSearchKind: 'doctor' | 'nurse' | 'lab' | 'ambulance' | 'elder' | null
  heroSearchSnapshot: HeroBookingSearchPayload | null
}

export function BookDoctorSection({ bookingSearchKind, heroSearchSnapshot }: BookDoctorSectionProps) {
  switch (bookingSearchKind) {
    case 'doctor':
      return <DoctorResults heroSearchSnapshot={heroSearchSnapshot} />
    case 'nurse':
      return <NurseResults heroSearchSnapshot={heroSearchSnapshot} />
    case 'lab':
      return <LabsResults heroSearchSnapshot={heroSearchSnapshot} />
    case 'ambulance':
      return <AmbulanceResults heroSearchSnapshot={heroSearchSnapshot} />
    case 'elder':
      return <ElderResults heroSearchSnapshot={heroSearchSnapshot} />
    default:
      return null
  }
}
