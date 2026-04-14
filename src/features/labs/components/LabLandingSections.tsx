import { useState } from 'react'

import { AppBannerSection } from '@/features/landing/components/AppBannerSection'
import { BlogGuidesSection } from '@/features/landing/components/BlogGuidesSection'
import { FaqSection } from '@/features/landing/components/FaqSection'
import { HappyPatientsSection } from '@/features/landing/components/HappyPatientsSection'
import { PopularDoctorsSection } from '@/features/landing/components/PopularDoctorsSection'
import type { LandingBookingKind } from '@/features/landing/config/searchConfig'
import {
  bookLabPackages,
  expandedLabLandingCategories,
  labCareServices,
  labLandingCategories,
  labLandingSymptoms,
  labTestProcessImage,
  popularLabCards,
} from '@/features/labs/data/labsData'
import { cn } from '@/utils/cn'

import { LabCard } from './LabCard'

type LabLandingSectionsProps = {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}

function LabSectionActionButton({
  label,
  expanded = false,
  onClick,
}: {
  label?: string
  expanded?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 border-0 border-b border-[#E4E4E4] bg-transparent px-0 py-2 text-[0.875rem] font-black uppercase leading-[1.4] tracking-[0.02em] text-[#8D8D8D]"
    >
      {label ?? (expanded ? 'View Less' : 'View More')}
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

function LabSectionHeading({
  eyebrow,
  title,
  maxWidthClassName = 'max-w-[693px]',
  actionLabel,
  expanded = false,
  onAction,
}: {
  eyebrow: string
  title: string
  maxWidthClassName?: string
  actionLabel?: string
  expanded?: boolean
  onAction?: () => void
}) {
  return (
    <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
      <div className={cn('max-w-[693px]', maxWidthClassName)}>
        <p
          className="mb-1 text-[clamp(1.15rem,2.2vw,1.75rem)] font-normal leading-[1.25] text-[#B68000]"
          style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
        >
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(1.45rem,2.8vw,2.25rem)] font-bold uppercase leading-[1.1] text-[#1F1F1F]">
          {title}
        </h2>
      </div>
      {onAction ? <LabSectionActionButton label={actionLabel} expanded={expanded} onClick={onAction} /> : null}
    </div>
  )
}

function LabCategoriesSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleCategories = isExpanded ? expandedLabLandingCategories : labLandingCategories

  return (
    <section id="services" className="pt-10 sm:pt-12">
      <div className="app-container">
        <LabSectionHeading
          eyebrow="Meet Our Heroes"
          title="Lab Test Categories"
          maxWidthClassName="max-w-[545px]"
          actionLabel={isExpanded ? undefined : 'View All Tests'}
          expanded={isExpanded}
          onAction={() => setIsExpanded((current) => !current)}
        />

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visibleCategories.map((category, index) => (
            <article
              key={`${category.title}-${index}`}
              className="max-w-full overflow-hidden rounded-[12px] border px-2 pb-4 pt-4 text-center"
              style={{ borderColor: category.borderColor, backgroundColor: category.bgColor }}
            >
              <div className="mx-auto flex max-w-[240px] flex-col items-center gap-2.5">
                <div className="space-y-1.5">
                  <p className="text-[15px] font-medium leading-none" style={{ color: category.titleColor }}>
                    {category.eyebrowLabel}
                  </p>
                  <h3 className="text-[1.05rem] font-bold leading-none" style={{ color: category.titleColor }}>
                    {category.title}
                  </h3>
                </div>

                <div className="relative w-full">
                  <img
                    src={category.image}
                    alt={category.title}
                    className={cn('mx-auto', category.imageClassName)}
                    loading="lazy"
                    decoding="async"
                  />
                  <div
                    className="mx-auto -mt-3 h-6 w-[210px] rounded-full blur-[10px]"
                    style={{ backgroundColor: category.shadowColor, opacity: 0.35 }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBookingResults('lab')}
                  className="inline-flex items-center gap-2 rounded-[8px] bg-[#1F1F1F] px-4 py-2 text-[0.8125rem] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                >
                  Book Test
                  <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M20 11.9998L4 11.9998" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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

function LabSymptomsSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section className="py-10 sm:py-12">
      <div className="app-container">
        <LabSectionHeading
          eyebrow="Meet Our Heroes"
          title="Check Your Health Symptoms"
          maxWidthClassName="max-w-[752px]"
          onAction={() => onOpenBookingResults('lab')}
        />

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {labLandingSymptoms.map((symptom) => (
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
                    onClick={() => onOpenBookingResults('lab')}
                    className="inline-flex h-8 w-10 items-center justify-center rounded-[8px] bg-[#1F1F1F] text-white transition hover:bg-[#333538]"
                    aria-label={`Explore lab tests for ${symptom.title}`}
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
                  <p className="text-[15px] font-medium leading-none text-[#6B6B6B]">{symptom.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function LabProcessSection() {
  return (
    <section className="py-10 sm:py-12">
      <div className="app-container">
        <LabSectionHeading
          eyebrow="Quick Services"
          title="Easy Lab Test Process"
          maxWidthClassName="max-w-[635px]"
        />

        <img
          src={labTestProcessImage}
          alt="Easy lab test process"
          className="h-[220px] w-full rounded-[16px] object-cover sm:h-[300px] lg:h-[380px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

function LabCareServicesSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section className="py-12 sm:py-14">
      <div className="app-container">
        <LabSectionHeading
          eyebrow="Quick Services"
          title="More Ways We Care for You"
          maxWidthClassName="max-w-[693px]"
          onAction={() => onOpenBookingResults('lab')}
        />

        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {labCareServices.map((service) => (
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

                <img
                  src={service.image}
                  alt=""
                  aria-hidden
                  className={service.imageClassName}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PopularHealthPackagesSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section className="py-10 sm:py-12">
      <div className="app-container">
        <LabSectionHeading
          eyebrow="Meet Our Heroes"
          title="Popular Health Checkup Packages"
          maxWidthClassName="max-w-[891px]"
          onAction={() => onOpenBookingResults('lab')}
        />

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {bookLabPackages.slice(0, 4).map((pkg) => (
            <LabCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  )
}

export function LabLandingSections({ onOpenBookingResults }: LabLandingSectionsProps) {
  return (
    <div className="bg-white">
      <LabCategoriesSection onOpenBookingResults={onOpenBookingResults} />
      <LabSymptomsSection onOpenBookingResults={onOpenBookingResults} />
      <PopularDoctorsSection
        doctors={popularLabCards}
        onBook={() => onOpenBookingResults('lab')}
        variant="lab"
        title="Trusted Diagnostic Labs"
        buttonLabel="View All Labs"
        featuredCtaLabel="Book Lab Test"
      />
      <LabProcessSection />
      <LabCareServicesSection onOpenBookingResults={onOpenBookingResults} />
      <PopularHealthPackagesSection onOpenBookingResults={onOpenBookingResults} />
      <HappyPatientsSection variant="lab" />
      <AppBannerSection variant="lab" />
      <FaqSection variant="lab" />
      <BlogGuidesSection variant="lab" />
    </div>
  )
}
