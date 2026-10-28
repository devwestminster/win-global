export const recommendedUniversities = [
  {
    name: "Durham University",
    image: "/assets/study-abroad/uk/university-01.jpg",
    logo: "/assets/home/universities/uk/logo-01.webp",
    details: ["Russell Group university", "Triple-Accredited Business Schools"],
  },
  {
    name: "Newcastle University",
    image: "/assets/study-abroad/uk/university-02.jpg",
    logo: "/assets/home/universities/uk/logo-08.webp",
    details: ["Russell Group university", "Triple-Accredited Business Schools"],
  },
  {
    name: "Queen Mary, University of London",
    image: "/assets/study-abroad/uk/university-03.jpg",
    logo: "/assets/home/universities/uk/logo-12.webp",
    details: ["Russell Group university"],
  },
  {
    name: "The University of Sheffield",
    image: "/assets/study-abroad/uk/university-04.jpg",
    logo: "/assets/home/universities/uk/logo-13.webp",
    details: ["Russell Group university", "Triple-Accredited Business Schools"],
  },
  {
    name: "University of Bath",
    image: "/assets/study-abroad/uk/university-05.jpg",
    logo: "/assets/home/universities/uk/logo-04.webp",
    details: ["Ranked 7th University in the UK by the Sunday Times 2026"],
  },
  {
    name: "University of Bristol",
    image: "/assets/study-abroad/uk/university-06.jpg",
    logo: "/assets/home/universities/uk/logo-14.webp",
    details: ["Russell Group university", "Ranked 10th University in the UK by the Sunday Times 2026"],
  },
  {
    name: "University of East Anglia",
    image: "/assets/study-abroad/uk/university-07.jpg",
    logo: "/assets/home/universities/uk/logo-06.webp",
    details: ["Ranked 7th in the UK for Biomedical Science"],
  },
  {
    name: "University of Exeter",
    image: "/assets/study-abroad/uk/university-08.jpg",
    logo: "/assets/home/universities/uk/logo-07.webp",
    details: ["Russell Group university", "Triple-Accredited Business Schools"],
  },
  {
    name: "University of Leeds",
    image: "/assets/study-abroad/uk/university-09.jpg",
    logo: "/assets/home/universities/uk/logo-03.webp",
    details: ["Russell Group university", "Ranked 10th University in the UK by the Sunday Times 2026"],
  },
  {
    name: "University of Nottingham",
    image: "/assets/study-abroad/uk/university-10.jpg",
    logo: "/assets/home/universities/uk/logo-10.webp",
    details: ["Russell Group university"],
  },
  {
    name: "University of Reading",
    image: "/assets/study-abroad/uk/university-11.jpg",
    logo: "/assets/home/universities/uk/logo-15.webp",
    details: ["Triple-Accredited Business Schools"],
  },
  {
    name: "University of York",
    image: "/assets/study-abroad/uk/university-12.jpg",
    logo: "/assets/home/universities/uk/logo-05.webp",
    details: ["Russell Group university"],
  },
] as const;

export const trustReasons = [
  {
    title: "Accredited & trained",
    description: "Counsellors trained by recognised international education organisations.",
  },
  {
    title: "Free counselling service",
    description: "Partner universities pay our service fee. You pay tuition directly to the university.",
  },
  {
    title: "One dedicated counsellor",
    description: "The same person guides you from course shortlist to arrival.",
  },
  {
    title: "Local & online support",
    description: "Meet us at selected offices or speak with your counsellor online from anywhere.",
  },
] as const;

export const popularSubjects = [
  {
    title: "Business & Management",
    image: "/assets/study-abroad/uk/subject-01.png",
    description: "Build strategic thinking and people-management skills for careers such as project manager, operations manager or general manager.",
  },
  {
    title: "Business Analytics",
    image: "/assets/study-abroad/uk/subject-02.png",
    description: "Develop expertise in brand strategy, consumer behaviour and digital marketing for careers across agencies, global brands and start-ups.",
  },
  {
    title: "Finance & Accounting",
    image: "/assets/study-abroad/uk/subject-03.png",
    description: "Learn to analyse and manage financial information for careers such as financial analyst, fund manager or risk manager.",
  },
  {
    title: "Law LLM",
    image: "/assets/study-abroad/uk/subject-04.png",
    description: "Study specialist areas of law and develop the skills to resolve complex disputes, preparing for legal and advisory careers.",
  },
  {
    title: "Engineering",
    image: "/assets/study-abroad/uk/subject-05.png",
    description: "Explore engineering project management, advanced structural design and the research and development of new technologies.",
  },
  {
    title: "Data Science",
    image: "/assets/study-abroad/uk/subject-06.png",
    description: "Combine programming, statistics and machine learning to prepare for careers such as data analyst, data scientist or data engineer.",
  },
] as const;

export const applicationSteps = [
  { timing: "Day 1", title: "Share your goals", description: "Tell us your grades, budget and ambitions—online, by phone or in person." },
  { timing: "Week 1", title: "Get your shortlist", description: "Compare 3–5 courses and universities matched to your goals, budget and eligibility." },
  { timing: "Weeks 2–6", title: "Submit strong applications", description: "We strengthen your personal statement, check every document and manage deadlines." },
  { timing: "After your offer", title: "Secure your visa", description: "Get step-by-step visa guidance and document checks so nothing is missed." },
  { timing: "Before departure", title: "Get ready to go", description: "Prepare with accommodation guidance, travel tips and a complete pre-departure briefing." },
] as const;

export const applicationDocuments = [
  ["Academic transcript", "Your official record of subjects studied and grades achieved."],
  ["Graduation certificate", "Proof that you have completed your current qualification."],
  ["Passport", "A valid passport with sufficient validity for your application and travel."],
  ["CV", "A concise summary of your education, experience and achievements."],
  ["Statement of Purpose (SOP)", "A focused statement explaining your goals, motivation and course choice."],
  ["Academic or professional references", "Letters from lecturers, teachers or employers who can support your application."],
  ["English language test result", "An accepted result, such as IELTS, where required by your chosen course."],
] as const;

export const ukBlogPosts = [
  { date: "October 10, 2026", time: "4 min read", title: "How to choose a study destination", description: "Compare courses, costs, lifestyle and career goals before deciding where to study.", tag: "Guide" },
  { date: "October 6, 2026", time: "5 min read", title: "Your application checklist", description: "The key documents, deadlines and steps to prepare for a stronger application.", tag: "Checklist" },
  { date: "October 1, 2026", time: "4 min read", title: "How to find scholarships", description: "A practical starting point for finding funding and preparing a competitive application.", tag: "Scholarships" },
] as const;
