import { homeCareOffer } from '@/features/landing/data/landingData'

export function MobileHomeDashboard() {
  return (
    <div className="w-full space-y-4 bg-page px-4 pb-2 pt-2 md:hidden">
      <div className="rounded-2xl bg-mint px-4 py-3.5 text-white shadow-sm">
        <p className="text-xs font-bold uppercase tracking-wide text-white/90">{homeCareOffer.title}</p>
        <p className="mt-1 text-sm font-medium leading-snug text-white">{homeCareOffer.line1}</p>
        <p className="mt-2 inline-block rounded-lg bg-white/20 px-2.5 py-1 text-xs font-bold">{homeCareOffer.offer}</p>
      </div>
    </div>
  )
}
