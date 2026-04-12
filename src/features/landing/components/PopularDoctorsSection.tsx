import { useEffect, useRef, useState } from 'react'

import { DoctorNetworkCard } from '@/features/doctor/components/DoctorNetworkCard'
import type { HeroDoctorCardData } from '@/features/doctor/types/doctor.types'
import { cn } from '@/utils/cn'

type PopularDoctorsSectionProps = {
  doctors: HeroDoctorCardData[]
  onBook: () => void
  variant?: 'default' | 'doctor' | 'nurse'
  title?: string
  buttonLabel?: string
  featuredCtaLabel?: string
}

function ViewMoreButton({
  label,
  onClick,
}: {
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-[10px] border-0 border-b border-[#E4E4E4] bg-transparent px-0 py-[10px] text-[16px] font-black uppercase leading-[1.4] tracking-[0.02em] text-[#8D8D8D]"
    >
      {label}
      <span className="relative inline-flex h-4 w-[26px] items-center justify-center rounded-full bg-[#8D8D8D]">
        <svg className="size-[10px] text-white" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

export function PopularDoctorsSection({
  doctors,
  onBook,
  variant = 'default',
  title,
  buttonLabel,
  featuredCtaLabel,
}: PopularDoctorsSectionProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const isWideVariant = variant !== 'default'
  const theme =
    variant === 'doctor'
      ? {
          eyebrowColor: '#9D497E',
          indicatorColor: '#9D497E',
          title: 'Popular Doctors Near You',
          buttonLabel: 'View More',
          featuredCtaLabel: 'Book Appointment',
        }
      : variant === 'nurse'
        ? {
            eyebrowColor: '#007954',
            indicatorColor: '#007954',
            title: 'Experienced Nurses Near You',
            buttonLabel: 'View All Nurses',
            featuredCtaLabel: 'Book Service',
          }
        : {
            eyebrowColor: '#FC5000',
            indicatorColor: '#FC5000',
            title: 'Book An Appointment',
            buttonLabel: 'View More',
            featuredCtaLabel: 'Book Appointment',
          }
  const [scrollProgress, setScrollProgress] = useState(isWideVariant ? 0 : 0.5)
  const indicatorWidth = 50.166
  const indicatorOffset = isWideVariant ? 0 : 1.25
  const indicatorTravel = 100 - indicatorWidth - indicatorOffset
  const indicatorLeft = indicatorOffset + indicatorTravel * scrollProgress
  const headingWidthClassName = variant === 'nurse' ? 'max-w-[744px]' : 'max-w-[692px]'

  useEffect(() => {
    const node = carouselRef.current
    if (!node) return

    const syncProgress = () => {
      const maxScroll = node.scrollWidth - node.clientWidth
      if (maxScroll <= 0) {
        setScrollProgress(isWideVariant ? 0 : 0.5)
        return
      }
      setScrollProgress(node.scrollLeft / maxScroll)
    }

    syncProgress()
    node.addEventListener('scroll', syncProgress, { passive: true })
    window.addEventListener('resize', syncProgress)

    return () => {
      node.removeEventListener('scroll', syncProgress)
      window.removeEventListener('resize', syncProgress)
    }
  }, [isWideVariant])

  if (isWideVariant) {
    return (
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-[30px] flex flex-wrap items-end justify-between gap-6">
            <div className={headingWidthClassName}>
              <p
                className="mb-1 text-[clamp(1.75rem,4vw,2.875rem)] font-normal leading-[1.42]"
                style={{ color: theme.eyebrowColor, fontFamily: 'HolidayFree, Caveat, cursive' }}
              >
                Meet Our Heroes
              </p>
              <h2 className="font-display text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-[1.42] text-[#1F1F1F]">
                {title ?? theme.title}
              </h2>
            </div>
            <ViewMoreButton label={buttonLabel ?? theme.buttonLabel} onClick={onBook} />
          </div>

          <div className="relative">
            <div ref={carouselRef} className="flex gap-[30px] overflow-x-auto pb-8 scrollbar-hide">
              {doctors.map((doctor, index) => (
                <DoctorNetworkCard
                  key={`${doctor.name}-${index}`}
                  doctor={doctor}
                  onBook={onBook}
                  variant={variant}
                  featuredCtaLabel={featuredCtaLabel ?? theme.featuredCtaLabel}
                />
              ))}
            </div>
            <div className="h-2 w-full rounded-[12px] bg-[#E4E4E4]">
              <div
                className="h-full rounded-[12px] transition-all duration-300"
                style={{ backgroundColor: theme.indicatorColor, width: `${indicatorWidth}%`, marginLeft: `${indicatorLeft}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="mt-32">
      <div className="mb-10 text-center">
        <p
          className="mb-1 text-[clamp(1.5rem,3.5vw,2.25rem)] font-normal normal-case leading-none text-[#FC5000]"
          style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
        >
          Meet Our Heroes
        </p>
        <h2 className="font-display text-[clamp(2.25rem,5vw,3.5rem)] font-bold uppercase tracking-tight text-[#1F1F1F]">
          Book An Appointment
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div ref={carouselRef} className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
          {doctors.map((doctor, index) => (
            <DoctorNetworkCard
              key={`${doctor.name}-${index}`}
              doctor={doctor}
              onBook={onBook}
            />
          ))}
        </div>
        <div className="mx-auto mt-4 h-1.5 w-[220px] rounded-full bg-[#E5E7EB]">
          <div
            className={cn('h-full rounded-full bg-[#FC5000] transition-all duration-300')}
            style={{ width: `${indicatorWidth}%`, marginLeft: `${indicatorLeft}%` }}
          />
        </div>
      </div>
    </section>
  )
}
