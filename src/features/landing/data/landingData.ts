import type {
  BookAmbulanceProfile,
  BookDoctorProfile,
  BookElderProfile,
  BookLabPackage,
  BookingServiceTab,
  ConsultationMode,
  ConsultingSpecialtyCard,
  FaqItem,
  FooterColumn,
  LandingQuickService,
  MobileQuickAction,
  NavItem,
  ServiceItem,
  Testimonial,
  TrustPillar,
} from '../types'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Book Doctor', href: '#booking-results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
]

export const servicesDropdownItems = [
  { label: 'Home Care', href: '#download' },
  { label: 'Consult Doctor', href: '#booking-results', bookingIntent: 'doctor' as const },
  { label: 'Lab Test', href: '#booking-results', bookingIntent: 'lab' as const },
  { label: 'Ambulance', href: '#booking-results', bookingIntent: 'ambulance' as const },
  { label: '24x7 Emergency', href: '#faq' },
  { label: 'Elder care', href: '#booking-results', bookingIntent: 'elder' as const },
] as const

export const needHelpDropdownItems = [
  { label: 'FAQs', href: '#faq' },
  { label: 'Chat support', href: '#faq' },
  { label: 'Emergency Contact', href: '#faq' },
] as const

export const homeCareOffer = {
  title: 'Home Care',
  line1: 'Nurses, beds, and medical support delivered to your doorstep.',
  offer: 'FLAT ₹100 OFF',
}

export const mobileQuickActions: MobileQuickAction[] = [
  {
    title: 'Consult Now',
    subtitle: 'Instant doctor consults.',
    badge: 'Verified Doctor',
    href: '#booking-results',
    ctaLabel: 'Consult Now',
    variant: 'consult',
  },
  {
    title: '24x7 Emergency',
    subtitle: 'Instant emergency care.',
    badge: '24/7 Available',
    href: '#faq',
    ctaLabel: 'VIEW MORE',
    variant: 'emergency',
  },
]

export const happieTagline = {
  eyebrow: 'Happie Happie Oye!',
  subtitle: 'Because care should feel good.',
}

/** Doctor Theme hero — text overlays `public/Doctor Theme.svg` (legacy; non–Book Doctor tabs). */
export const doctorThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '300+ ZappieCare Heroes',
  headline: 'BOOK VERIFIED DOCTORS IN YOUR CITY',
}

/** Figma Consulting — Book Doctor gradient banner (tabs + hero + form). */
export const consultDoctorHeroCopy = {
  headline: 'CONSULT TRUSTED DOCTORS ANYTIME, ANYWHERE',
  subheadline:
    'Search And Book Appointments With Experienced Doctors Near You Or Consult Online.',
} as const

/** Figma Book Nurse — Frame 2147235729 (consulting strip + hero). */
export const consultNurseHeroCopy = {
  headline: 'PROFESSIONAL NURSING CARE AT HOME',
  subheadline: 'Book trained nurses for medical care, recovery support, and daily assistance.',
} as const

/** Figma Book Lab — Frame 2147235726 (consulting strip + hero). */
export const consultLabHeroCopy = {
  headline: 'FAST & RELIABLE LAB TESTS FROM CERTIFIED LABS',
  subheadline: 'Find the right health tests and get samples collected safely from your home.',
} as const

/** Homecare / Book Nurse hero — text overlays `public/Homecare Theme.svg` (Figma Book Nurse). */
export const homecareThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: 'Trusted Nurses for Every Need',
  headline: 'BOOK HOME NURSING IN YOUR CITY',
}

/** Lab tests hero — text overlays `public/Tests Theme.svg` (Figma Book Lab Grid View). */
export const labThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '1000+ ZappieCare Heroes',
  headline: 'AFFORDABLE DIAGNOSTIC TESTS NEAR YOU',
}

/** Emergency / Book Ambulance hero — text overlays `public/Emergency Theme.svg` (Figma Book Ambulance). */
export const ambulanceThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: '1000+ ZappieCare Heroes',
  headline: 'FAST AMBULANCE SERVICE NEAR YOU',
}

/** Elder care hero — text overlays `public/Elder Care.svg` (Figma Frame 1597884554, #F0FAEF). */
export const elderThemeHero = {
  eyebrow: 'Happie Happie Oye!',
  scriptLine: 'Compassionate Care for Seniors',
  headline: 'BOOK TRUSTED ELDER CARE AT HOME',
}

/** Figma “Ambulance Type” strip + dropdown. */
export const ambulanceTypeStripOptions = [
  'Basic (Non-Emergency)',
  'Advanced Life Support (ALS)',
  'ICU Ambulance',
  'Neonatal / Pediatric',
] as const

/** Destination hospital — hero strip + filter (Book Ambulance). */
export const ambulanceDestinationOptions = [
  'Apollo International Hospital, Ahmedabad',
  'Zydus Hospital, Ahmedabad',
  'Civil Hospital, Ahmedabad',
  'Sterling Hospital, Ahmedabad',
] as const

/** Sidebar filter: any destination. */
export const ambulanceDestinationFilterOptions = ['Any', ...ambulanceDestinationOptions] as const

/** Default specialty shown on landing booking strip (matches Figma “Orthopedic”). */
export const landingStripDefaultSpecialty = 'Orthopedics'

export const landingQuickServices: LandingQuickService[] = [
  {
    title: 'Home Care',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#download',
    variant: 'home',
  },
  {
    title: 'Consult Now',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#booking-results',
    variant: 'consult',
    bookingIntent: 'doctor',
  },
  {
    title: 'Lab tests',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#booking-results',
    variant: 'lab',
    bookingIntent: 'lab',
  },
  {
    title: '24x7 Emergency',
    description: 'Nurses, beds, and medical support delivered to your doorstep.',
    ctaLabel: 'Book now',
    href: '#faq',
    variant: 'emergency',
  },
]

export const trustPillars: TrustPillar[] = [
  { label: 'Strong', sublabel: 'Verified Heroes Network' },
  { label: '24×7', sublabel: 'Transparent Support' },
  { label: 'Fast Response', sublabel: 'Guarantee' },
  { label: 'Clear Service', sublabel: 'Pricing' },
]

export const trustIntro =
  'Every nurse, doctor and ambulance partner is trained, background-checked and supported by hospital-certified teams.'

export const stats = [
  { value: '25+', label: 'Specialists on call' },
  { value: '98%', label: 'Patient satisfaction' },
  { value: '24/7', label: 'Digital support' },
]

export const services: ServiceItem[] = [
  {
    title: 'Virtual consultation',
    text: 'Book secure appointments, chat with doctors, and access a smooth follow-up flow from any device.',
  },
  {
    title: 'Lab test management',
    text: 'Track tests, compare reports, and receive timely updates in a single health dashboard.',
  },
  {
    title: 'Emergency support',
    text: 'Reach urgent assistance quickly with guided triage and saved care preferences.',
  },
]

export const bookingServiceTabs: BookingServiceTab[] = [
  { label: 'Book Doctor' },
  { label: 'Book Nurse' },
  { label: 'Lab Test' },
  { label: 'Ambulance' },
  { label: 'Elder Care' },
]

export const consultationSpecialties = [
  'General',
  'Cardiology',
  'Orthopedics',
  'Dermatology',
  'Neurology',
  'Gynecology',
  'Pediatrics',
  'Psychiatry',
  'Gastroenterology',
  'Urology',
  'Pulmonology',
  'ENT',
  'General Surgery',
  'Dentistry',
  'Endocrinology',
]

export const consultationModes: ConsultationMode[] = ['Clinic Visit', 'Home Visit']

/** Doctor-type filter on the landing booking strip (Figma desktop landing). */
export const landingStripDoctorTypes = ['General', 'Specialist', 'Surgeon'] as const

/** Sidebar + filters; first entry = no category filter (Figma “General Care”). */
export const nurseCareCategories = [
  'All',
  'Elder Care',
  'Patient Attendant',
  'Mother & Newborn Care',
  'Physiotherapy Assistance',
  'Post-Surgery Care',
  'ICU / Critical Care',
] as const

/** Horizontal strip “Care Type” labels (maps to `nurseCareCategories` values). */
export const nurseCareTypeStripOptions = [
  { label: 'General Care', value: 'All' as const },
  { label: 'Elder Care', value: 'Elder Care' as const },
  { label: 'Post-Surgery Care', value: 'Post-Surgery Care' as const },
  { label: 'ICU / Critical Care', value: 'ICU / Critical Care' as const },
  { label: 'Mother & Newborn Care', value: 'Mother & Newborn Care' as const },
] as const

/** Strip “Care Mode” dropdown (Figma) — subset of full nurse care modes. */
export const nurseCareStripModes = ['Home Visit', 'Hospital Duty'] as const

/** Figma Filter Nurse default fee range. */
export const nurseFeeRangeDefaults = { min: 500, max: 3000 } as const

export const nurseNurseTypes = ['General', 'Critical Care', 'Caretaker'] as const

export const nurseAvailability = ['Available Today', 'Available Tomorrow', 'Available This Week'] as const

export const nurseCareModes = ['Any', 'Home Visit', 'Hospital Duty', 'Day Shift', 'Night Shift'] as const

export const nurseVerification = ['ZappieCare Verified', 'Hospital-Trained'] as const

export const nurseBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

export const elderCareCategories = [
  'Daily Living Assistance',
  'Personal Hygiene Support',
  'Mobility and Physio Support',
  'Medication Management',
  'Dementia / Alzheimer’s Care',
  'Palliative / End-of-Life Care',
] as const

export const elderCaregiverTypes = ['Care Attendant', 'Certified Care Nurse', 'Physiotherapy Assistant'] as const

export const elderAvailability = ['Available Today', 'Available Tomorrow', 'Long Term Care'] as const

export const elderCareDuration = ['Hourly Care', 'Day Shift', 'Night Shift', '24-Hour Care'] as const

export const elderVerification = ['ZappieCare Verified', 'Background Checked'] as const

export const elderBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** Results sidebar filters — Book Elder Care grid + active filters row. */
export const elderCategoryFilterOptions = ['All', ...elderCareCategories] as const
export const elderCaregiverFilterOptions = ['Any', ...elderCaregiverTypes] as const

export const labTestCategories = [
  'Blood Tests',
  'Urine Tests',
  'X-Ray / Ultrasound',
  'Health Packages',
  'Diabetes Care',
  'Thyroid Care',
] as const

export const labAvailability = ['Available Today', 'Available Tomorrow', 'Available This Week'] as const

export const labReportDelivery = ['Digital', 'Physical'] as const

/** Figma “Sample Collection” strip + dropdown: Lab Visit | Home Sample Collection. */
export const labSampleStripOptions = ['Lab Visit', 'Home Sample Collection'] as const

/** Figma Filter Labs sidebar (legacy copy — map to strip options in UI). */
export const labSampleCollection = ['Home Sample Available', 'Lab Visit Only'] as const

/** Figma “Test Package Type” dropdown (Book Lab / hero strip “All Tests”). */
export const labTestPackageStripOptions = [
  'All Tests',
  'Blood Test',
  'Urine Test',
  'X-Ray / Imaging',
  'Full Body Checkup',
  'Diabetes Tests',
  'Thyroid Tests',
] as const

export const labVerification = ['ZappieCare Verified', 'NABL Certified'] as const

/** Figma “Explore 3000+ Labs in Ahmedabad”. */
export const bookLabExploreLabsLine = (city: string) => `Explore 3000+ Labs in ${city}`

/** Figma “Explore 300+ Ambulances in Ahmedabad”. */
export const bookAmbulanceExploreLine = (city: string) => `Explore 300+ Ambulances in ${city}`

/** Mock lab packages for grid (Book Lab Grid View). */
export const bookLabPackages: BookLabPackage[] = [
  {
    id: 'lab-1',
    title: 'Full Body Health Package',
    category: 'Health Packages',
    testPackageTag: 'Full Body Checkup',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 2400,
    originalPrice: 3400,
    rating: 5,
    testsIncluded: 'Includes 12 Tests',
    priceLabel: 'Package Price',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-2',
    title: 'Thyroid Profile',
    category: 'Thyroid Care',
    testPackageTag: 'Thyroid Tests',
    sampleCollection: 'Lab Visit',
    labName: 'Galaxy PathLabs',
    price: 499,
    originalPrice: 799,
    rating: 4,
    testsIncluded: 'TSH, T3, T4',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-3',
    title: 'Diabetes Care Panel',
    category: 'Diabetes Care',
    testPackageTag: 'Diabetes Tests',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 649,
    originalPrice: 999,
    rating: 4.9,
    testsIncluded: 'FBS, PPBS, HbA1c',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-4',
    title: 'Vitamin & Mineral Panel',
    category: 'Blood Tests',
    testPackageTag: 'Blood Test',
    sampleCollection: 'Home Sample Collection',
    labName: 'Wellness Labs',
    price: 1299,
    originalPrice: 1899,
    rating: 4.7,
    testsIncluded: 'Vit D, B12, Iron, Calcium',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1631549916768-4119b38e5f6c?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-5',
    title: 'Liver Function Test (LFT)',
    category: 'Blood Tests',
    testPackageTag: 'Blood Test',
    sampleCollection: 'Lab Visit',
    labName: 'Galaxy PathLabs',
    price: 300,
    originalPrice: 400,
    rating: 4.8,
    testsIncluded: 'SGPT, SGOT, Bilirubin',
    priceLabel: 'Test Price',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=560&h=420&q=80',
  },
  {
    id: 'lab-6',
    title: 'Women’s Wellness Package',
    category: 'Health Packages',
    testPackageTag: 'Full Body Checkup',
    sampleCollection: 'Home Sample Collection',
    labName: 'ZappieCare Diagnostics',
    price: 1599,
    originalPrice: 2499,
    rating: 4.9,
    testsIncluded: 'CBC, Thyroid, Vitamins',
    priceLabel: 'Package Price',
    image:
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=560&h=420&q=80',
  },
]

/** Mock ambulances for grid (Book Ambulance Grid View). */
export const bookAmbulanceProfiles: BookAmbulanceProfile[] = [
  {
    id: 'amb-1',
    name: 'ZappieCare Rapid ALS Unit',
    location: 'Saraspur · 2.1 km',
    etaMins: 8,
    availability: 'Available now',
    tripsLine: '1200+ trips',
    rating: 4.9,
    typeLabel: 'Advanced Life Support (ALS)',
    featureLine: 'Defibrillator, ventilator, paramedic crew',
    serviceTags: ['ALS', 'Verified'],
    originalFare: 3200,
    fare: 2499,
    saveLabel: 'Save ₹701',
    image:
      'https://images.unsplash.com/photo-1587745416684-479cbf8d4b4a?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Advanced Life Support (ALS)',
    destination: 'Apollo International Hospital, Ahmedabad',
  },
  {
    id: 'amb-2',
    name: 'ICU Transfer Ambulance',
    location: 'Near Civil Hospital · 4 km',
    etaMins: 12,
    availability: 'Available in 15 min',
    tripsLine: '890+ trips',
    rating: 4.8,
    typeLabel: 'ICU Ambulance',
    featureLine: 'Portable ICU setup, doctor on board',
    serviceTags: ['ICU', 'Doctor onboard'],
    originalFare: 5500,
    fare: 4599,
    saveLabel: 'Save ₹901',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'ICU Ambulance',
    destination: 'Civil Hospital, Ahmedabad',
  },
  {
    id: 'amb-3',
    name: 'City Basic Response',
    location: 'Satellite · 6 km',
    etaMins: 18,
    availability: 'Available today',
    tripsLine: '2100+ trips',
    rating: 4.6,
    typeLabel: 'Basic (Non-Emergency)',
    featureLine: 'Stretcher, oxygen support',
    serviceTags: ['Basic', 'Non-emergency'],
    originalFare: 1200,
    fare: 899,
    image:
      'https://images.unsplash.com/photo-1564694202779-bc908c327862?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Basic (Non-Emergency)',
    destination: 'Sterling Hospital, Ahmedabad',
  },
  {
    id: 'amb-4',
    name: 'Neonatal Transport',
    location: 'Apollo corridor · 3.5 km',
    etaMins: 10,
    availability: 'Available now',
    tripsLine: '340+ trips',
    rating: 4.95,
    typeLabel: 'Neonatal / Pediatric',
    featureLine: 'Incubator, pediatric specialist',
    serviceTags: ['Neonatal', 'Pediatric'],
    originalFare: 4800,
    fare: 3999,
    saveLabel: 'Save ₹801',
    image:
      'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Neonatal / Pediatric',
    destination: 'Apollo International Hospital, Ahmedabad',
  },
  {
    id: 'amb-5',
    name: 'ALS Express — West Zone',
    location: 'Bopal · 5 km',
    etaMins: 14,
    availability: 'Available in 20 min',
    tripsLine: '760+ trips',
    rating: 4.7,
    typeLabel: 'Advanced Life Support (ALS)',
    featureLine: 'Cardiac monitor, advanced airway',
    serviceTags: ['ALS'],
    originalFare: 3000,
    fare: 2599,
    image:
      'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'Advanced Life Support (ALS)',
    destination: 'Zydus Hospital, Ahmedabad',
  },
  {
    id: 'amb-6',
    name: 'ICU Night Line',
    location: 'SG Highway · 7 km',
    etaMins: 22,
    availability: 'Available tonight',
    tripsLine: '500+ trips',
    rating: 4.85,
    typeLabel: 'ICU Ambulance',
    featureLine: 'Full ICU equipment, 2 paramedics',
    serviceTags: ['ICU', 'Night'],
    originalFare: 6000,
    fare: 5199,
    saveLabel: 'Save ₹801',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=560&h=420&q=80',
    ambulanceTypeTag: 'ICU Ambulance',
    destination: 'Zydus Hospital, Ahmedabad',
  },
]

/** Figma “Explore … elder caregivers in …”. */
export const bookElderExploreLine = (city: string) => `Explore trusted elder caregivers in ${city}`

/** Mock elder-care listings (Frame 2147225725). */
export const bookElderProfiles: BookElderProfile[] = [
  {
    id: 'eld-1',
    name: 'Meera Joshi',
    location: 'Satellite · 3 km',
    credentialLine: 'Certified geriatric care · 8 yrs',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Daily Living Assistance',
    durationTag: '24-Hour Care',
    availability: 'Available Today',
    rating: 4.9,
    fee: 1200,
    originalFee: 1500,
    image:
      'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Bathing, meals, mobility support, and friendly companionship.',
    serviceTags: ['Home visit', 'Verified'],
  },
  {
    id: 'eld-2',
    name: 'Rajesh Parmar',
    location: 'Maninagar · 4 km',
    credentialLine: 'Care attendant · Dementia training',
    caregiverTag: 'Care Attendant',
    categoryTag: 'Dementia / Alzheimer’s Care',
    durationTag: 'Day Shift',
    availability: 'Available Tomorrow',
    rating: 4.8,
    fee: 899,
    originalFee: 1100,
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Structured routines, safety checks, and family updates.',
    serviceTags: ['Dementia care'],
  },
  {
    id: 'eld-3',
    name: 'Anita Desai',
    location: 'Bopal · 5 km',
    credentialLine: 'Certified nurse · ICU step-down',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Medication Management',
    durationTag: 'Night Shift',
    availability: 'Long Term Care',
    rating: 4.95,
    fee: 1400,
    originalFee: 1800,
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Medication reminders, vitals logging, and doctor coordination.',
    serviceTags: ['Nursing', 'Long term'],
  },
  {
    id: 'eld-4',
    name: 'Vikram Singh',
    location: 'SG Highway · 6 km',
    credentialLine: 'Physiotherapy assistant',
    caregiverTag: 'Physiotherapy Assistant',
    categoryTag: 'Mobility and Physio Support',
    durationTag: 'Hourly Care',
    availability: 'Available Today',
    rating: 4.7,
    fee: 650,
    originalFee: 800,
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Gait training, fall prevention, and gentle mobility exercises.',
    serviceTags: ['Physio'],
  },
  {
    id: 'eld-5',
    name: 'Sunita Iyer',
    location: 'Vastrapur · 2 km',
    credentialLine: 'Palliative-certified caregiver',
    caregiverTag: 'Certified Care Nurse',
    categoryTag: 'Palliative / End-of-Life Care',
    durationTag: '24-Hour Care',
    availability: 'Available This Week',
    rating: 5,
    fee: 2200,
    originalFee: 2800,
    image:
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Comfort-focused care with empathy and clear family communication.',
    serviceTags: ['Palliative', 'Verified'],
  },
  {
    id: 'eld-6',
    name: 'Kiran Shah',
    location: 'Navrangpura · 3 km',
    credentialLine: 'Care attendant · hygiene specialist',
    caregiverTag: 'Care Attendant',
    categoryTag: 'Personal Hygiene Support',
    durationTag: 'Day Shift',
    availability: 'Available Tomorrow',
    rating: 4.85,
    fee: 750,
    originalFee: 950,
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=560&h=420&q=80',
    featureLine: 'Dignified assistance with bathing, dressing, and oral care.',
    serviceTags: ['Hygiene'],
  },
]

export const labBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

export const ambulanceSupport = ['Oxygen Support', 'Paramedic Available', 'Doctor On-Board'] as const

export const ambulanceResponseTime = ['Under 10 minutes', 'Under 20 minutes', 'Scheduled'] as const

export const ambulanceVerification = ['ZappieCare Verified', 'Hospital-Linked Ambulance'] as const

export const ambulanceBenefits = ['ZCard Discount Available', 'Earn ZapCoins'] as const

/** City label for “Explore … doctors in …” (Book Doctor Figma). */
export const bookDoctorExploreCity = 'Ahmedabad'

/** Sidebar specialty pills: label shown in UI, value matches `selectedSpecialty` / profile filters. */
export const bookDoctorSpecialtyPills = [
  { label: 'General Medicine', value: 'General' },
  { label: 'Cardiology', value: 'Cardiology' },
  { label: 'Dermatology', value: 'Dermatology' },
  { label: 'Pediatrics', value: 'Pediatrics' },
  { label: 'Gynecology', value: 'Gynecology' },
  { label: 'Orthopedics', value: 'Orthopedics' },
] as const

/** Consulting — Doctor Specialties row (Figma product cards). */
export const consultingSpecialtyCards: ConsultingSpecialtyCard[] = [
  {
    categoryLabel: 'General Health',
    specialtyLabel: 'General Physician',
    specialtyValue: 'General',
    image: '/consulting/specialty-general.jpg',
    borderClass: 'border-[#9D497E]',
    bgClass: 'bg-[#FFEDF9]',
    textClass: 'text-[#9D497E]',
  },
  {
    categoryLabel: 'Heart & Blood Circulation',
    specialtyLabel: 'Cardiology',
    specialtyValue: 'Cardiology',
    image: '/consulting/specialty-cardiology.jpg',
    borderClass: 'border-[#FF9555]',
    bgClass: 'bg-[#FFE9C9]',
    textClass: 'text-[#E48F18]',
  },
  {
    categoryLabel: 'Digestive Health',
    specialtyLabel: 'Gastroenterology',
    specialtyValue: 'Gastroenterology',
    image: '/consulting/specialty-gastro.jpg',
    borderClass: 'border-[#9D1522]',
    bgClass: 'bg-[#FFC4C7]',
    textClass: 'text-[#E63E41]',
  },
  {
    categoryLabel: 'Brain & Nervous System',
    specialtyLabel: 'Neurology',
    specialtyValue: 'Neurology',
    image: '/consulting/specialty-neuro.jpg',
    borderClass: 'border-[#0E398C]',
    bgClass: 'bg-[#DDEDF9]',
    textClass: 'text-[#042D7D]',
  },
]

export const bookDoctorSortOptions = ['Top Reviewed', 'Price: Low to High', 'Experience'] as const

export const bookDoctorAvailabilityFilters = [
  'Available Today',
  'Available Tomorrow',
  'Available This Week',
] as const

export const bookDoctorProfiles: BookDoctorProfile[] = [
  {
    name: 'Dr. Aastha Chawan',
    location: 'Maninagar',
    specialty: 'Gynecologist',
    specialtyFilter: 'Gynecology',
    credentials: 'MBBS, DGO',
    bioSnippet:
      "Women's health, prenatal care, and minimally invasive procedures with 12+ years of practice.",
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '1,260 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit', 'Home Visit'],
  },
  {
    name: 'Dr. Karan Patel',
    location: 'Saraspur',
    specialty: 'Orthopedics',
    specialtyFilter: 'Orthopedics',
    credentials: 'MS Ortho',
    bioSnippet: 'Sports injuries, joint replacement planning, and post-op recovery support.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '980 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit'],
  },
  {
    name: 'Dr. Riya Shah',
    location: 'Bapunagar',
    specialty: 'Dermatology',
    specialtyFilter: 'Dermatology',
    credentials: 'MBBS, DDVL',
    bioSnippet: 'Acne, pigmentation, and cosmetic dermatology with evidence-based treatment plans.',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '640 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit', 'Home Visit'],
  },
  {
    name: 'Dr. Mehul Desai',
    location: 'Naranpura',
    specialty: 'Cardiology',
    specialtyFilter: 'Cardiology',
    credentials: 'DM Cardiology',
    bioSnippet: 'Hypertension, heart failure management, and preventive cardiac screening.',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '1,120 reviews',
    fee: 424,
    originalFee: 1000,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Clinic Visit'],
  },
]

/** Book Nurse grid — care category in `specialtyFilter` matches `nurseCareCategories`. */
export const bookNurseProfiles: BookDoctorProfile[] = [
  {
    name: 'Sister Anita Desai',
    location: 'Maninagar',
    specialty: 'Elder Care Nurse',
    specialtyFilter: 'Elder Care',
    nurseListingType: 'General',
    credentials: 'GNM, 8+ yrs',
    bioSnippet: 'Dedicated elder support, medication reminders, and daily living assistance at home.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '890 reviews',
    fee: 499,
    originalFee: 800,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Day Shift'],
  },
  {
    name: 'Nurse Priya Mehta',
    location: 'Saraspur',
    specialty: 'Mother & Newborn Care',
    specialtyFilter: 'Mother & Newborn Care',
    nurseListingType: 'General',
    credentials: 'B.Sc Nursing, 6+ yrs',
    bioSnippet: 'Newborn care, feeding support, and postpartum recovery guidance.',
    image:
      'https://images.unsplash.com/photo-1582750433447-56ed8432b214?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '720 reviews',
    fee: 599,
    originalFee: 900,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Night Shift'],
  },
  {
    name: 'Nurse Imran Khan',
    location: 'Bapunagar',
    specialty: 'Post-Surgery Care',
    specialtyFilter: 'Post-Surgery Care',
    nurseListingType: 'Critical Care',
    credentials: 'ICU-trained, 10+ yrs',
    bioSnippet: 'Wound care, mobility support, and vitals monitoring after surgery.',
    image:
      'https://images.unsplash.com/photo-1537368916865-24a68b754a8e?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 4.8,
    reviews: '540 reviews',
    fee: 649,
    originalFee: 950,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Hospital Duty', 'Day Shift'],
  },
  {
    name: 'Sister Kavita Joshi',
    location: 'Naranpura',
    specialty: 'Physiotherapy Assistance',
    specialtyFilter: 'Physiotherapy Assistance',
    nurseListingType: 'General',
    credentials: 'ANM, 7+ yrs',
    bioSnippet: 'Exercise assistance, mobility routines, and recovery-focused home visits.',
    image:
      'https://images.unsplash.com/photo-1551190822-a9333d879a1f?auto=format&fit=crop&w=560&h=560&q=80',
    rating: 5,
    reviews: '610 reviews',
    fee: 549,
    originalFee: 850,
    discountLabel: 'ZCard Save Rs75',
    verifiedLabel: 'ZappiCare Verified',
    consultationModes: ['Home Visit'],
    nurseModeLabels: ['Home Visit', 'Day Shift'],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'John Carter',
    role: 'Web Designer',
    quote:
      'The whole booking flow felt effortless. I could talk to a doctor, get my reports, and keep everything organized in one place.',
  },
  {
    name: 'Sophie Lee',
    role: 'Marketing Lead',
    quote:
      'ZappiCare makes healthcare feel calm and clear. The reminders and mobile-first experience are genuinely helpful.',
  },
  {
    name: 'Kevin Brooks',
    role: 'Product Manager',
    quote:
      'From consultation to lab coordination, every touchpoint feels polished and trustworthy.',
  },
]

export const faqs: FaqItem[] = [
  {
    question: 'How can I book a virtual appointment?',
    answer:
      'Choose a doctor, pick a preferred time slot, and confirm the consultation directly from the app or web portal.',
  },
  {
    question: 'Can I access lab reports inside the app?',
    answer:
      'Yes. Reports, progress history, and doctor notes are available in one timeline so you can review them anytime.',
  },
  {
    question: 'Is my health data private and secure?',
    answer:
      'Your data is protected with secure access controls and encrypted transmission designed for healthcare workflows.',
  },
  {
    question: 'Does the app support emergencies?',
    answer:
      'Emergency guidance and rapid assistance shortcuts are built into the experience so you can act quickly when needed.',
  },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Company',
    links: ['What’s New', 'About', 'Press', 'Care+', 'Contact'],
  },
  {
    title: 'Community',
    links: ['Medicare for Business', 'Creator Report', 'Charities', 'Templates'],
  },
  {
    title: 'Support',
    links: ['Help Topics', 'Getting Started', 'Features', 'FAQs', 'Report a Violation'],
  },
  {
    title: 'Trust & Legal',
    links: ['Terms & Conditions', 'Privacy Notice', 'Cookie Notice', 'Trust Centre'],
  },
]

export const heroPhoneLeft =
  'https://api.builder.io/api/v1/image/assets/TEMP/5fe1209d7afd748fe69456ccd62c5f1d020c12be?width=323'
export const heroPhoneRight =
  'https://api.builder.io/api/v1/image/assets/TEMP/27c22fe53bce5c54df718ccfc50bb71c0bdfae42?width=323'
export const heroSticker =
  'https://api.builder.io/api/v1/image/assets/TEMP/ee48ed0649490dc29927f2a01633ee247be16496?width=96'
export const blogFeatureImg =
  'https://api.builder.io/api/v1/image/assets/TEMP/5e185413d1c8d01a2b4d663bff4f646e2272e2c1?width=918'
export const blogProductImgs = [
  'https://api.builder.io/api/v1/image/assets/TEMP/d86d88b728ff1567109620ad0d1250be4a5a8928?width=264',
  'https://api.builder.io/api/v1/image/assets/TEMP/a1d4619b7e1451fd54a60071a324045ebbb63e26?width=264',
  'https://api.builder.io/api/v1/image/assets/TEMP/25b047594c094f9e62bcf87a19c3ae4947593014?width=264',
]
