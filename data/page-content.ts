export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
};

export const topLevelPageContent = {
  "study-abroad": {
    eyebrow: "Study Abroad",
    title: "Find the right destination, course and university for you.",
    description:
      "Explore your study options with clear, one-to-one guidance from your first shortlist through to departure.",
  },
  "how-we-help": {
    eyebrow: "How We Help",
    title: "Practical support at every step of your study-abroad journey.",
    description:
      "Get personal guidance for course selection, applications and visas from a dedicated WIN counsellor.",
  },
  scholarships: {
    eyebrow: "Scholarships",
    title: "Discover funding opportunities matched to your study plan.",
    description:
      "Compare scholarships and bursaries with support that helps you understand eligibility, deadlines and next steps.",
  },
  "our-offices": {
    eyebrow: "Our Offices",
    title: "Meet your WIN counsellor in person or connect online.",
    description:
      "Find the most convenient WIN Education office and choose the way you would like to speak with our team.",
  },
  blog: {
    eyebrow: "WIN Insights",
    title: "Clear advice for planning your studies abroad.",
    description:
      "Read practical guides, destination updates and application tips from the WIN Education team.",
  },
  contact: {
    eyebrow: "Contact Us",
    title: "Your study-abroad plan starts with one conversation.",
    description:
      "Tell us your goals and our counsellors will help you understand the best next step for your plans.",
  },
} as const satisfies Record<string, PageContent>;

export const destinationPageContent = {
  "united-kingdom": {
    eyebrow: "Study in the UK",
    title: "Build your UK study plan with expert guidance.",
    description:
      "Compare universities, one-year master’s degrees, entry requirements, costs and scholarships with WIN.",
  },
  australia: {
    eyebrow: "Study in Australia",
    title: "Find the Australian university that fits your goals.",
    description:
      "Explore respected degrees, welcoming student cities and scholarship opportunities with personal support.",
  },
  usa: {
    eyebrow: "Study in the USA",
    title: "Explore flexible study pathways across the USA.",
    description:
      "Compare bachelor’s and postgraduate options across leading institutions, matched to your goals and budget.",
  },
  singapore: {
    eyebrow: "Study in Singapore",
    title: "Study in a connected global education hub.",
    description:
      "Discover respected qualifications and career-focused programs in one of Asia’s leading student destinations.",
  },
  malaysia: {
    eyebrow: "Study in Malaysia",
    title: "Access international degrees at competitive costs.",
    description:
      "Explore branch campuses and recognised programs in a welcoming, multicultural study destination.",
  },
  "new-zealand": {
    eyebrow: "Study in New Zealand",
    title: "Learn through practical, globally recognised education.",
    description:
      "Find hands-on programs, research opportunities and a supportive student experience in New Zealand.",
  },
  canada: {
    eyebrow: "Study in Canada",
    title: "Find a career-focused program in Canada.",
    description:
      "Compare respected institutions and courses across diverse, student-friendly Canadian cities.",
  },
} as const satisfies Record<string, PageContent>;

export const servicePageContent = {
  "course-guidance": {
    eyebrow: "Course Guidance",
    title: "Turn your goals into a focused course shortlist.",
    description:
      "Work one-to-one with a counsellor to compare subjects, entry requirements, costs and career outcomes.",
  },
  applications: {
    eyebrow: "Application Support",
    title: "Submit a clear, complete and confident application.",
    description:
      "We help you organise requirements, documents and timelines so every application moves forward smoothly.",
  },
  "visa-support": {
    eyebrow: "Visa Support",
    title: "Prepare your student visa with clarity.",
    description:
      "Get practical guidance on documents, key stages and preparation before you submit your visa application.",
  },
} as const satisfies Record<string, PageContent>;
