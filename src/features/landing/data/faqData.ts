export const faqGroups = {
  Application: [
    {
      question: 'How can I book a virtual appointment?',
      answer:
        'Choose your service, pick a preferred slot, and continue to booking. The app keeps the flow lightweight so you can confirm quickly.',
    },
    {
      question: 'Can I reschedule or cancel appointments?',
      answer:
        'Yes. Bookings can be managed from your dashboard, and supported providers can be rescheduled in just a few taps.',
    },
    {
      question: 'Can I manage my family health through the app?',
      answer:
        'Yes. You can store common details, switch profiles, and keep ongoing care journeys easier to access for family members.',
    },
    {
      question: 'Is the app available in regional languages?',
      answer:
        'The experience is designed to stay simple first, with multilingual support planned for common user journeys.',
    },
  ],
  'Data & Privacy': [
    {
      question: 'Is my health data private and secure?',
      answer:
        'Health information is handled with secure access controls and limited exposure so patients can trust what they share.',
    },
    {
      question: 'Who can see my reports and consultation notes?',
      answer:
        'Only the patient and the care workflow they explicitly continue with should need access to those details.',
    },
    {
      question: 'Can I delete my personal records?',
      answer:
        'Patients should be able to request account or data management support through the platform help team.',
    },
    {
      question: 'Do you track payment or prescription history?',
      answer:
        'Essential records are kept so users can revisit bookings, reports and purchases without losing their care timeline.',
    },
  ],
  Emergency: [
    {
      question: 'How fast can I book an ambulance?',
      answer:
        'Emergency discovery is meant to be fast: choose a vehicle type, confirm the destination and continue to the response flow.',
    },
    {
      question: 'Can I book oxygen or ICU ambulances?',
      answer:
        'Yes. The emergency options are grouped by vehicle type so urgent needs like ICU or ALS can be selected quickly.',
    },
    {
      question: 'Will I see pricing before confirming?',
      answer:
        'Yes. The booking journey is designed to surface clear fares and service tags before you proceed.',
    },
    {
      question: 'Can I use emergency support late at night?',
      answer:
        'The homepage and emergency shortcuts are structured for around-the-clock access from mobile and desktop.',
    },
  ],
  'Lab test': [
    {
      question: 'Can I book a home sample collection?',
      answer:
        'Yes. You can choose between a lab visit and home sample collection while searching for the right test package.',
    },
    {
      question: 'When will I receive my reports?',
      answer:
        'Timelines vary by test, but the flow is designed so reports and updates can live in one easy-to-follow place.',
    },
    {
      question: 'Do lab packages include fasting guidance?',
      answer:
        'Package details can include simple prep notes so patients know what to do before the collection window.',
    },
    {
      question: 'Can I compare prices before booking?',
      answer:
        'Yes. Discovery should make it easy to compare packages, sample collection modes and lab options in one place.',
    },
  ],
} as const

export type FaqCategory = keyof typeof faqGroups
