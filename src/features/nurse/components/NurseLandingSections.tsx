import { AppBannerSection } from '@/features/landing/components/AppBannerSection'
import { BlogGuidesSection } from '@/features/landing/components/BlogGuidesSection'
import { FaqSection } from '@/features/landing/components/FaqSection'
import { HappyPatientsSection } from '@/features/landing/components/HappyPatientsSection'
import { PopularDoctorsSection } from '@/features/landing/components/PopularDoctorsSection'
import type { LandingBookingKind } from '@/features/landing/config/searchConfig'
import {
  nurseCareServices,
  nurseHomecareCategories,
  nurseHomecareWorksImage,
  nurseLandingSymptoms,
  popularNurseCards,
} from '@/features/nurse/data/nurseLandingData'
import { cn } from '@/utils/cn'

type NurseLandingSectionsProps = {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}

function SectionActionButton({
  label = 'View More',
  onClick,
}: {
  label?: string
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

function NurseSectionHeading({
  eyebrow,
  title,
  maxWidthClassName = 'max-w-[693px]',
  actionLabel,
  onAction,
}: {
  eyebrow: string
  title: string
  maxWidthClassName?: string
  actionLabel?: string
  onAction?: () => void
}) {
  return (
    <div className="mb-[30px] flex flex-wrap items-end justify-between gap-6">
      <div className={cn('max-w-[693px]', maxWidthClassName)}>
        <p
          className="mb-1 text-[clamp(1.75rem,4vw,2.875rem)] font-normal leading-[1.42] text-[#007954]"
          style={{ fontFamily: 'HolidayFree, Caveat, cursive' }}
        >
          {eyebrow}
        </p>
        <h2 className="font-display text-[clamp(2.4rem,5vw,3.5rem)] font-bold uppercase leading-[1.42] text-[#1F1F1F]">
          {title}
        </h2>
      </div>
      {onAction ? <SectionActionButton label={actionLabel} onClick={onAction} /> : null}
    </div>
  )
}

function PhysioCategoryArt() {
  const nurseCharacterSrc = `${import.meta.env.BASE_URL}nurse.svg`

  return (
    <div className="relative mx-auto h-[234px] w-[250px]">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 250 234" fill="none" aria-hidden>
        <defs>
          <linearGradient id="nurse-physio-fill" x1="28" y1="18" x2="222" y2="214" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ECFFF7" />
            <stop offset="1" stopColor="#AEE7D3" />
          </linearGradient>
        </defs>
        <path d="M-0.793103 133.158L30.1035 115L85.2759 74.6491L80.8621 32.2807L120.586 18.1579L253 0V230H-3L-0.793103 133.158Z" fill="url(#nurse-physio-fill)" />
      </svg>
      <div className="absolute left-[126px] top-[26px] flex h-11 w-11 items-center justify-center rounded-full bg-white/75 text-[#007954] shadow-[0_10px_24px_rgba(0,121,84,0.14)]">
        <svg className="size-5" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M10 4V16M16 10H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <img
        src={nurseCharacterSrc}
        alt=""
        aria-hidden
        className="absolute bottom-0 left-[36px] h-[212px] w-[180px] object-contain object-bottom opacity-95"
      />
      <div className="absolute bottom-[28px] right-[22px] h-[82px] w-[82px] rounded-[30px] bg-white/45 blur-[2px]" />
      <div className="absolute bottom-[22px] left-[36px] h-[18px] w-[178px] rounded-full bg-[#007954]/18 blur-[9px]" />
    </div>
  )
}

function NurseHomecareCategoriesSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section id="services" className="px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <NurseSectionHeading
          eyebrow="Meet Our Heroes"
          title="Homecare Categories"
          maxWidthClassName="max-w-[583px]"
          onAction={() => onOpenBookingResults('nurse')}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {nurseHomecareCategories.map((category) => (
            <article
              key={category.title}
              className="overflow-hidden rounded-[12px] border px-2 pb-5 pt-5 text-center"
              style={{ borderColor: category.borderColor, backgroundColor: category.bgColor }}
            >
              <div className="mx-auto flex max-w-[270px] flex-col items-center gap-3">
                <div className="space-y-2.5">
                  <p className="text-[20px] font-medium leading-none text-[#6B6B6B]">{category.eyebrowLabel}</p>
                  <h3 className="text-[30px] font-bold leading-none" style={{ color: category.titleColor }}>
                    {category.title}
                  </h3>
                </div>

                <div className="relative w-full">
                  {category.artVariant === 'physio' ? (
                    <PhysioCategoryArt />
                  ) : (
                    <img
                      src={category.image}
                      alt={category.title}
                      className={cn('mx-auto', category.imageClassName)}
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                  <div
                    className="mx-auto -mt-4 h-7 w-[250px] rounded-full blur-[11px]"
                    style={{ backgroundColor: category.shadowColor, opacity: 0.35 }}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBookingResults('nurse')}
                  className="inline-flex items-center gap-[14px] rounded-[8px] bg-[#1F1F1F] px-6 py-3 text-[18px] font-bold capitalize leading-[1.4] text-white transition hover:bg-[#333538]"
                >
                  Book now
                  <svg className="size-6" viewBox="0 0 24 24" fill="none" aria-hidden>
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

function NurseSymptomsSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <NurseSectionHeading
          eyebrow="Meet Our Heroes"
          title="Care for symptons"
          maxWidthClassName="max-w-[674px]"
          onAction={() => onOpenBookingResults('nurse')}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {nurseLandingSymptoms.map((symptom) => (
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
                    onClick={() => onOpenBookingResults('nurse')}
                    className="inline-flex h-10 w-[50px] items-center justify-center rounded-[8px] bg-[#1F1F1F] text-white transition hover:bg-[#333538]"
                    aria-label={`Book nurse care for ${symptom.title}`}
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
                  <p className="text-[20px] font-medium leading-none text-[#6B6B6B]">{symptom.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function NurseHomecareWorksSection() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <NurseSectionHeading
          eyebrow="Quick Services"
          title="How homecare service Works"
          maxWidthClassName="max-w-[757px]"
        />

        <img
          src={nurseHomecareWorksImage}
          alt="How homecare service works"
          className="h-[260px] w-full rounded-[16px] object-cover sm:h-[320px] lg:h-[380px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

function NurseCareServicesSection({
  onOpenBookingResults,
}: {
  onOpenBookingResults: (kind: LandingBookingKind) => void
}) {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-[1200px]">
        <NurseSectionHeading
          eyebrow="Quick Services"
          title="More Ways We Care for You"
          maxWidthClassName="max-w-[693px]"
          onAction={() => onOpenBookingResults('nurse')}
        />

        <div className="grid gap-[30px] md:grid-cols-2 xl:grid-cols-4">
          {nurseCareServices.map((service) => (
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

export function NurseLandingSections({ onOpenBookingResults }: NurseLandingSectionsProps) {
  return (
    <div className="bg-white">
      <NurseHomecareCategoriesSection onOpenBookingResults={onOpenBookingResults} />
      <NurseSymptomsSection onOpenBookingResults={onOpenBookingResults} />
      <PopularDoctorsSection
        doctors={popularNurseCards}
        onBook={() => onOpenBookingResults('nurse')}
        variant="nurse"
        featuredCtaLabel="Book Service"
      />
      <NurseHomecareWorksSection />
      <NurseCareServicesSection onOpenBookingResults={onOpenBookingResults} />
      <BlogGuidesSection variant="nurse" />
      <HappyPatientsSection variant="nurse" />
      <AppBannerSection variant="nurse" />
      <FaqSection variant="nurse" />
    </div>
  )
}
