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
      className="inline-flex items-center gap-2 border-0 border-b border-[#E4E4E4] bg-transparent px-0 py-2 text-[0.875rem] font-black uppercase leading-[1.4] tracking-[0.02em] text-[#8D8D8D]"
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
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div className={cn('max-w-[693px]', maxWidthClassName)}>
        <p
          className="mb-1 text-[clamp(1.15rem,2.2vw,1.75rem)] font-normal leading-[1.25] text-[#9D497E]"
          style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
        >
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(1.45rem,2.8vw,2.25rem)] font-bold uppercase leading-[1.1] text-[#1F1F1F]">
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
    <section id="services" className="pt-10 sm:pt-12">
      <div className="app-container">
        <DoctorSectionHeading
          eyebrow={isExpanded ? 'Meet Our Heroes' : 'Meet Your Care Experts'}
          title={isExpanded ? 'Popular Doctor Specialties' : 'Doctor Specialties'}
          maxWidthClassName={isExpanded ? 'max-w-[737px]' : 'max-w-[670px]'}
          expandable
          expanded={isExpanded}
          onToggle={() => setIsExpanded((current) => !current)}
        />

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visibleCards.map((specialty, index) => (
            <article
              key={`${specialty.specialtyLabel}-${index}`}
              className={cn(
                'max-w-full overflow-hidden rounded-[12px] border px-2 pb-4 pt-4 text-center',
                specialty.borderClass,
                specialty.bgClass,
              )}
            >
              <div className="mx-auto flex max-w-[240px] flex-col items-center gap-2.5">
                <div className="space-y-1.5">
                  <p className={cn('text-[15px] font-medium leading-none', specialty.textClass)}>
                    {specialty.categoryLabel}
                  </p>
                  <h3 className={cn('text-[1.05rem] font-bold leading-none', specialty.textClass)}>
                    {specialty.specialtyLabel}
                  </h3>
                </div>

                <div className="relative w-full">
                  <img
                    src={specialty.image}
                    alt={specialty.specialtyLabel}
                    className={cn('mx-auto', specialty.imageClassName ?? 'h-[188px] w-full object-contain')}
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="mx-auto -mt-3 h-6 w-[210px] rounded-full blur-[10px]"
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
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[#1F1F1F] px-4 py-2 text-[0.8125rem] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                >
                  View Doctors
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <section className="py-10 sm:py-12">
      <div className="app-container">
        <DoctorSectionHeading
          eyebrow={isExpanded ? 'Meet Our Heroes' : 'Find the Right Doctor'}
          title="Consult for symptons"
          maxWidthClassName="max-w-[674px]"
          expandable
          expanded={isExpanded}
          onToggle={() => setIsExpanded((current) => !current)}
        />

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visibleSymptoms.map((symptom) => (
            <article
              key={symptom.title}
              className="max-w-full rounded-[12px] border"
              style={{ borderColor: symptom.borderColor, backgroundColor: symptom.bgColor }}
            >
              <div className="flex min-h-[168px] flex-col gap-3 px-4 py-4">
                <div className="flex items-start justify-between gap-4">
                  <img
                    src={symptom.image}
                    alt={symptom.title}
                    className="size-[72px] object-contain"
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
                    className="inline-flex h-8 w-10 items-center justify-center rounded-[8px] bg-[#1F1F1F] text-white transition hover:bg-[#333538]"
                    aria-label={`Consult for ${symptom.title}`}
                  >
                    <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M20 12H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-[1.05rem] font-bold leading-none" style={{ color: symptom.textColor }}>
                    {symptom.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-none text-[#8D8D8D]">{symptom.description}</p>
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
    <section className="py-10 sm:py-12">
      <div className="app-container">
        <DoctorSectionHeading
          eyebrow="Quick Services"
          title="How Consultation Works"
          maxWidthClassName="max-w-[635px]"
        />

        <img
          src={doctorConsultationWorksImage}
          alt="How consultation works"
          className="h-[190px] w-full rounded-[14px] object-cover sm:h-[240px] lg:h-[270px]"
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
    <section className="py-12 sm:py-14">
      <div className="app-container">
        <DoctorSectionHeading
          eyebrow="Quick Services"
          title="More Ways We Care for You"
          maxWidthClassName="max-w-[693px]"
          expandable
          expanded={false}
          onToggle={() => onOpenBookingResults('doctor')}
        />

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {doctorCareServices.map((service) => (
            <article
              key={service.title}
              className="relative max-w-full min-h-[260px] overflow-hidden rounded-[12px] border border-[#E4E4E4] bg-white sm:h-[300px] sm:min-h-[300px]"
            >
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] opacity-20"
                style={{
                  background: `linear-gradient(144deg, transparent 0%, transparent 21%, ${service.accentColor} 21%, ${service.accentColor} 100%)`,
                }}
              />

              <div className="relative z-10 flex h-full flex-col px-3 py-2.5">
                <div className="max-w-[220px] space-y-3">
                  <div className="space-y-1">
                    <h3 className="text-[1.05rem] font-black uppercase leading-[1.35] text-[#1F1F1F]">{service.title}</h3>
                    <p className="text-[15px] font-normal capitalize leading-[1.2] text-[#8D8D8D]">{service.description}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBookingResults(service.bookingKind)}
                    className="inline-flex items-center justify-center rounded-[8px] bg-[#1F1F1F] px-4 py-2.5 text-[0.8125rem] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                  >
                    {service.ctaLabel}
                  </button>
                </div>

                {service.artVariant === 'home' ? (
                  <img
                    src={homeCareImage}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-[96px] top-[138px] h-[178px] w-[148px] object-contain object-bottom"
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
