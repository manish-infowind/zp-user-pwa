import { useState } from 'react'

import { AppBannerSection } from '@/features/landing/components/AppBannerSection'
import { BlogGuidesSection } from '@/features/landing/components/BlogGuidesSection'
import { FaqSection } from '@/features/landing/components/FaqSection'
import { HappyPatientsSection } from '@/features/landing/components/HappyPatientsSection'
import { PopularDoctorsSection } from '@/features/landing/components/PopularDoctorsSection'
import type { LandingBookingKind } from '@/features/landing/config/searchConfig'
import { consultingSpecialtyCards, heroDoctors, popularDoctorSpecialtyCards } from '@/features/doctor/data/doctorData'
import {
  doctorCareServices,
  doctorConsultationWorksImage,
  doctorLandingSymptoms,
  popularDoctorSymptoms,
} from '@/features/doctor/data/doctorLandingData'
import { cn } from '@/utils/cn'

type DoctorLandingSectionsProps = {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}

function ToggleSectionButton({
  expanded,
  onClick,
}: {
  expanded: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-[10px] border-0 border-b border-[#E4E4E4] bg-transparent px-0 py-[10px] text-[16px] font-black uppercase leading-[1.4] tracking-[0.02em] text-[#8D8D8D]"
    >
      {expanded ? 'View Less' : 'View More'}
      <span className="relative inline-flex h-4 w-[26px] items-center justify-center rounded-full bg-[#8D8D8D]">
        <svg
          className={cn('size-[10px] text-white transition-transform duration-200', expanded && 'rotate-180')}
          viewBox="0 0 10 10"
          fill="none"
          aria-hidden
        >
          <path d="M4 2L7 5L4 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </button>
  )
}

function DoctorSectionHeading({
  eyebrow,
  title,
  maxWidthClassName,
  expandable = false,
  expanded = false,
  onToggle,
}: {
  eyebrow: string
  title: string
  maxWidthClassName?: string
  expandable?: boolean
  expanded?: boolean
  onToggle?: () => void
}) {
  return (
    <div className="mb-[30px] flex flex-wrap items-end justify-between gap-6">
      <div className={cn('max-w-[693px]', maxWidthClassName)}>
        <p
          className="mb-1 text-[clamp(1.75rem,4vw,2.875rem)] font-normal leading-[1.42] text-[#9D497E]"
          style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
        >
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-[1.42] text-[#1F1F1F]">
          {title}
        </h2>
      </div>
      {expandable && onToggle ? <ToggleSectionButton expanded={expanded} onClick={onToggle} /> : null}
    </div>
  )
}

function DoctorSpecialtiesSection({ onViewDoctors }: { onViewDoctors: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCards = isExpanded ? popularDoctorSpecialtyCards : consultingSpecialtyCards

  return (
    <section id="services" className="px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <DoctorSectionHeading
          eyebrow={isExpanded ? 'Meet Our Heroes' : 'Meet Your Care Experts'}
          title={isExpanded ? 'Popular Doctor Specialties' : 'Doctor Specialties'}
          maxWidthClassName={isExpanded ? 'max-w-[737px]' : 'max-w-[670px]'}
          expandable
          expanded={isExpanded}
          onToggle={() => setIsExpanded((current) => !current)}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {visibleCards.map((specialty) => (
            <article
              key={specialty.specialtyLabel}
              className={cn(
                'overflow-hidden rounded-[12px] border px-2 pb-5 pt-5 text-center',
                specialty.borderClass,
                specialty.bgClass,
              )}
            >
              <div className="mx-auto flex max-w-[270px] flex-col items-center gap-3">
                <div className="space-y-2.5">
                  <p className={cn('text-[20px] font-medium leading-none', specialty.textClass)}>
                    {specialty.categoryLabel}
                  </p>
                  <h3 className={cn('text-[30px] font-bold leading-none', specialty.textClass)}>
                    {specialty.specialtyLabel}
                  </h3>
                </div>

                <div className="relative w-full">
                  <img
                    src={specialty.image}
                    alt={specialty.specialtyLabel}
                    className={cn('mx-auto', specialty.imageClassName ?? 'h-[230px] w-full object-contain')}
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="mx-auto -mt-4 h-7 w-[250px] rounded-full blur-[11px]"
                    style={{ backgroundColor: specialty.shadowColor ?? '#DA9D9D', opacity: 0.35 }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (!isExpanded) {
                      setIsExpanded(true)
                      return
                    }
                    onViewDoctors()
                  }}
                  className="inline-flex items-center gap-[14px] rounded-[8px] bg-[#1F1F1F] px-6 py-3 text-[18px] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                >
                  View Doctors
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DoctorSymptomsSection({ onOpenDoctor }: { onOpenDoctor: () => void }) {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleSymptoms = isExpanded ? popularDoctorSymptoms : doctorLandingSymptoms

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <DoctorSectionHeading
          eyebrow={isExpanded ? 'Meet Our Heroes' : 'Find the Right Doctor'}
          title="Consult for symptons"
          maxWidthClassName="max-w-[674px]"
          expandable
          expanded={isExpanded}
          onToggle={() => setIsExpanded((current) => !current)}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {visibleSymptoms.map((symptom) => (
            <article
              key={symptom.title}
              className="rounded-[12px] border"
              style={{ borderColor: symptom.borderColor, backgroundColor: symptom.bgColor }}
            >
              <div className="flex min-h-[220px] flex-col gap-5 px-5 py-6">
                <div className="flex items-start justify-between gap-5">
                  <img
                    src={symptom.image}
                    alt={symptom.title}
                    className="size-[100px] object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!isExpanded) {
                        setIsExpanded(true)
                        return
                      }
                      onOpenDoctor()
                    }}
                    className="inline-flex h-10 w-[50px] items-center justify-center rounded-[8px] bg-[#1F1F1F] text-white transition hover:bg-[#333538]"
                    aria-label={`Consult for ${symptom.title}`}
                  >
                    <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-[26px] font-bold leading-none" style={{ color: symptom.textColor }}>
                    {symptom.title}
                  </h3>
                  <p className="text-[16px] font-medium leading-none text-[#8D8D8D]">{symptom.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ConsultationWorksSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <DoctorSectionHeading
          eyebrow="Quick Services"
          title="How Consultation Works"
          maxWidthClassName="max-w-[635px]"
        />

        <img
          src={doctorConsultationWorksImage}
          alt="How consultation works"
          className="h-[260px] w-full rounded-[16px] object-cover sm:h-[320px] lg:h-[380px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

function DoctorCareServicesSection({ onOpenBookingResults }: { onOpenBookingResults: (kind: LandingBookingKind) => void }) {
  const homeCareImage = `${import.meta.env.BASE_URL}quick-service-home.png`

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <DoctorSectionHeading
          eyebrow="Quick Services"
          title="More Ways We Care for You"
          maxWidthClassName="max-w-[693px]"
          expandable
          expanded={false}
          onToggle={() => onOpenBookingResults('doctor')}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {doctorCareServices.map((service) => (
            <article key={service.title} className="relative h-[360px] overflow-hidden rounded-[12px] border border-[#E4E4E4] bg-white">
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[144px] opacity-20"
                style={{
                  background: `linear-gradient(144deg, transparent 0%, transparent 21%, ${service.accentColor} 21%, ${service.accentColor} 100%)`,
                }}
              />

              <div className="relative z-10 flex h-full flex-col px-3 py-3">
                <div className="max-w-[254px] space-y-[14px]">
                  <div className="space-y-1">
                    <h3 className="text-[24px] font-black uppercase leading-[1.4] text-[#1F1F1F]">{service.title}</h3>
                    <p className="text-[18px] font-normal capitalize leading-[1.2] text-[#8D8D8D]">{service.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBookingResults(service.bookingKind)}
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#1F1F1F] px-6 py-[14px] text-[16px] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                  >
                    {service.ctaLabel}
                  </button>
                </div>

                {service.artVariant === 'home' ? (
                  <img
                    src={homeCareImage}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-[113px] top-[166px] h-[212px] w-[175px] object-contain object-bottom"
                  />
                ) : (
                  <img
                    src={service.image}
                    alt=""
                    aria-hidden
                    className={service.imageClassName}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function DoctorLandingSections({ onOpenBookingResults }: DoctorLandingSectionsProps) {
  return (
    <div className="bg-white">
      <DoctorSpecialtiesSection onViewDoctors={() => onOpenBookingResults('doctor')} />
      <DoctorSymptomsSection onOpenDoctor={() => onOpenBookingResults('doctor')} />
      <PopularDoctorsSection doctors={heroDoctors} onBook={() => onOpenBookingResults('doctor')} variant="doctor" />
      <ConsultationWorksSection />
      <DoctorCareServicesSection onOpenBookingResults={onOpenBookingResults} />
      <BlogGuidesSection variant="doctor" />
      <HappyPatientsSection variant="doctor" />
      <AppBannerSection variant="doctor" />
      <FaqSection variant="doctor" />
    </div>
  )
}
