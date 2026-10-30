import { universityCountries } from "./universities";

export type CountryStudyConfig = {
  slug: "australia" | "usa" | "new-zealand" | "singapore" | "malaysia" | "canada";
  country: string;
  shortName: string;
  heroImage: string;
  heroSources: {
    desktop: readonly { src: string; width: number }[];
    mobile: readonly { src: string; width: number }[];
  };
  heroAlt: string;
  heroDescription: string;
  overviewTitle: string;
  overviewParagraphs: readonly string[];
  overviewImages: readonly [string, string, string, string, string];
  partnerCount: string;
  partnerLogos: readonly { name: string; src: string }[];
  recommended: readonly {
    name: string;
    image: string;
    logo?: string;
    details: readonly string[];
  }[];
  subjectImages: readonly string[];
  subjects?: readonly { title: string; description: string }[];
  blogImage: string;
};

const countryLogos = Object.fromEntries(
  universityCountries.map(({ id, logos }) => [id, logos]),
) as Record<string, readonly { name: string; src: string }[]>;

const subjectNames = [
  "Business & Management",
  "Media and Communication",
  "Engineering",
  "Data Science",
] as const;

const subjectDescriptions = [
  "Build strategic thinking and people-management skills for careers in projects, operations and general management.",
  "Develop communication strategy, audience insight and digital storytelling skills for modern organisations.",
  "Explore engineering project management, structural design and the development of new technologies.",
  "Combine programming, statistics and machine learning for careers in data analysis and data science.",
] as const;

export const sharedCountrySubjects = subjectNames.map((title, index) => ({
  title,
  description: subjectDescriptions[index],
}));

function asset(slug: CountryStudyConfig["slug"], file: string) {
  return `/assets/study-abroad/${slug}/${file}`;
}

function heroSources(
  slug: CountryStudyConfig["slug"],
  desktopWidths: readonly number[] = [1440, 1920, 2880, 3840],
  mobileWidths: readonly number[] = [480, 780, 1170, 1440, 1900],
) {
  return {
    desktop: desktopWidths.map((width) => ({
      src: asset(slug, `hero-desktop-${width}.webp`),
      width,
    })),
    mobile: mobileWidths.map((width) => ({
      src: asset(slug, `hero-mobile-${width}.webp`),
      width,
    })),
  };
}

function recommended(
  slug: CountryStudyConfig["slug"],
  names: readonly string[],
  logos: readonly { name: string; src: string }[],
  count: number,
  imageFiles?: readonly string[],
) {
  return names.slice(0, count).map((name, index) => ({
    name,
    image: asset(slug, imageFiles?.[index] ?? `container${index || ""}.png`),
    logo: logos[index]?.src,
    details: ["Internationally recognised university", "Support for international students"],
  }));
}

const singaporePartnerNames = [
  "James Cook University Singapore",
  "SIM Global Education",
  "Curtin Singapore",
  "Kaplan Singapore",
  "PSB Academy",
  "LASALLE College of the Arts",
  "MDIS",
  "Embry-Riddle Asia",
];

const malaysiaPartnerNames = [
  "Monash University Malaysia",
  "University of Nottingham Malaysia",
  "Taylor's University",
  "Sunway University",
  "UCSI University",
  "Heriot-Watt University Malaysia",
  "Asia Pacific University",
  "INTI International University",
];

const canadaPartnerNames = [
  "MLC College of Business Technology and Healthcare",
  "Simon Fraser University",
  "Toronto Metropolitan University",
  "Trinity Western University",
  "University Canada West",
  "University of Alberta",
  "University of Manitoba",
  "University of Niagara Falls Canada",
  "University of Victoria",
  "Wilfrid Laurier University",
  "SAE Institute",
  "Western International College",
];

const canadaRecommendedNames = canadaPartnerNames.filter(
  (name) => name !== "Trinity Western University",
);

function figmaPartnerLogos(slug: "singapore" | "malaysia", names: readonly string[]) {
  const files = [
    "frame1000008182.png",
    "frame1000008183.png",
    "aston-university.png",
    "frame1000008184.png",
    "frame1000008185.png",
    "aston-university1.png",
    "frame1000008186.png",
    "frame1000008187.png",
  ];
  return names.map((name, index) => ({ name, src: asset(slug, files[index]) }));
}

const australiaNames = countryLogos.australia.map(({ name }) => name);
const usaNames = countryLogos.usa.map(({ name }) => name);
const newZealandNames = countryLogos["new-zealand"].map(({ name }) => name);
const singaporeLogos = figmaPartnerLogos("singapore", singaporePartnerNames);
const malaysiaLogos = figmaPartnerLogos("malaysia", malaysiaPartnerNames);
const canadaPartnerLogos = canadaPartnerNames.map((name, index) => ({
  name,
  src: asset("canada", `partner${String(index + 1).padStart(2, "0")}${index >= 8 ? ".jpg" : ".png"}`),
}));
const canadaRecommendedLogos = canadaRecommendedNames.map((name, index) => ({
  name,
  src: asset("canada", `logo${String(index + 1).padStart(2, "0")}${index >= 7 ? ".jpg" : ".png"}`),
}));

const canadaSubjects = [
  {
    title: "Business & Management",
    description:
      "Build strategic thinking and people-management skills for careers in projects, operations and general management.",
  },
  {
    title: "Media and Communication",
    description:
      "Develop communication strategy, audience insight and digital storytelling skills for modern organisations.",
  },
  {
    title: "Health & Nursing",
    description:
      "Build evidence-based healthcare skills for clinical, community and health-service careers.",
  },
  {
    title: "Education & Teaching",
    description:
      "Explore curriculum design, inclusive learning and educational leadership for teaching and learning careers.",
  },
  {
    title: "Engineering",
    description:
      "Explore engineering project management, structural design and the development of new technologies.",
  },
  {
    title: "Data Science",
    description:
      "Combine programming, statistics and machine learning for careers in data analysis and data science.",
  },
] as const;

export const countryStudyConfigs: Record<CountryStudyConfig["slug"], CountryStudyConfig> = {
  australia: {
    slug: "australia",
    country: "Australia",
    shortName: "Australia",
    heroImage: asset("australia", "hero-desktop-3840.webp"),
    heroSources: heroSources("australia"),
    heroAlt: "Sydney Opera House and Sydney Harbour",
    heroDescription:
      "Discover world-class universities and welcoming student cities. We’ll help you compare courses, costs, entry requirements and scholarships.",
    overviewTitle: "study in Australia",
    overviewParagraphs: [
      "Australia is one of the world’s leading study destinations, renowned for high-quality education and internationally recognised universities.",
      "Universities provide comprehensive support for international students, including academic guidance, English-language assistance and student welfare services.",
      "With strong graduate opportunities and clear post-study pathways, Australia offers an excellent environment for academic and personal growth.",
    ],
    overviewImages: [
      asset("australia", "frame1000009686.png"),
      asset("australia", "frame1000009685.png"),
      asset("australia", "frame1000009694.png"),
      asset("australia", "frame1000009695.png"),
      asset("australia", "frame1000009696.png"),
    ],
    partnerCount: "10+",
    partnerLogos: countryLogos.australia,
    recommended: recommended("australia", australiaNames, countryLogos.australia, 7),
    subjectImages: ["container-2.png", "container1-2.png", "container2-2.png", "container3-2.png"].map((file) => asset("australia", file)),
    blogImage: asset("australia", "container-3.png"),
  },
  usa: {
    slug: "usa",
    country: "United States of America",
    shortName: "USA",
    heroImage: asset("usa", "hero-desktop-3840.webp"),
    heroSources: heroSources("usa"),
    heroAlt: "New York City skyline",
    heroDescription:
      "Explore flexible study pathways across leading US institutions, matched to your goals, eligibility and budget.",
    overviewTitle: "study in the USA",
    overviewParagraphs: [
      "The USA offers one of the world’s widest ranges of universities, majors and flexible study pathways for international students.",
      "Students can combine subjects, explore practical learning and access academic support while building an international network.",
      "Your WIN counsellor will help you compare locations, entry requirements, costs and scholarship opportunities.",
    ],
    overviewImages: [
      asset("usa", "frame1000009685.png"),
      asset("usa", "frame1000009686.png"),
      asset("usa", "frame1000009694.png"),
      asset("usa", "frame1000009695.png"),
      asset("usa", "frame1000009696.png"),
    ],
    partnerCount: "15+",
    partnerLogos: countryLogos.usa,
    recommended: recommended("usa", usaNames, countryLogos.usa, 9),
    subjectImages: ["container9.png", "container10.png", "container11.png", "container12.png"].map((file) => asset("usa", file)),
    blogImage: asset("usa", "container13.png"),
  },
  "new-zealand": {
    slug: "new-zealand",
    country: "New Zealand",
    shortName: "New Zealand",
    heroImage: asset("new-zealand", "hero-desktop-3840.webp"),
    heroSources: heroSources("new-zealand"),
    heroAlt: "Auckland skyline and harbour",
    heroDescription:
      "Discover globally recognised education, practical learning and a supportive student experience in New Zealand.",
    overviewTitle: "study in New Zealand",
    overviewParagraphs: [
      "New Zealand combines respected qualifications with practical, research-led teaching in a safe and welcoming environment.",
      "International students benefit from supportive campuses, close academic communities and strong links between study and industry.",
      "We’ll help you compare programs, entry requirements, costs and the city that best fits your plans.",
    ],
    overviewImages: [
      asset("new-zealand", "frame1000009685.png"),
      asset("new-zealand", "frame1000009686.png"),
      asset("new-zealand", "frame1000009694.png"),
      asset("new-zealand", "frame1000009695.png"),
      asset("new-zealand", "frame1000009696.png"),
    ],
    partnerCount: "8+",
    partnerLogos: countryLogos["new-zealand"],
    recommended: recommended("new-zealand", newZealandNames, countryLogos["new-zealand"], 8),
    subjectImages: ["container9.png", "container10.png", "container11.png", "container12.png"].map((file) => asset("new-zealand", file)),
    blogImage: asset("new-zealand", "container13.png"),
  },
  singapore: {
    slug: "singapore",
    country: "Singapore",
    shortName: "Singapore",
    heroImage: asset("singapore", "hero-desktop-3840.webp"),
    heroSources: heroSources("singapore"),
    heroAlt: "Singapore skyline and Marina Bay",
    heroDescription:
      "Study in a global education and business hub with respected degrees and strong international career connections.",
    overviewTitle: "study in Singapore",
    overviewParagraphs: [
      "Singapore is a connected global education hub offering respected qualifications in a safe, modern and multicultural city.",
      "Students benefit from career-focused programs, strong industry links and an international business environment at the heart of Asia.",
      "Your counsellor will help you compare institutions, entry requirements, costs and progression options.",
    ],
    overviewImages: [
      asset("singapore", "frame1000009685.png"),
      asset("singapore", "frame1000009686.png"),
      asset("singapore", "frame1000009694.png"),
      asset("singapore", "frame1000009695.png"),
      asset("singapore", "frame1000009696.png"),
    ],
    partnerCount: "8+",
    partnerLogos: singaporeLogos,
    recommended: recommended("singapore", singaporePartnerNames, singaporeLogos, 8),
    subjectImages: ["container9.png", "container10.png", "container11.png", "container12.png"].map((file) => asset("singapore", file)),
    blogImage: asset("singapore", "container13.png"),
  },
  malaysia: {
    slug: "malaysia",
    country: "Malaysia",
    shortName: "Malaysia",
    heroImage: asset("malaysia", "hero-desktop-3840.webp"),
    heroSources: heroSources("malaysia"),
    heroAlt: "Kuala Lumpur skyline and Petronas Towers",
    heroDescription:
      "Access international degrees at competitive costs in a welcoming, multicultural study destination.",
    overviewTitle: "study in Malaysia",
    overviewParagraphs: [
      "Malaysia offers recognised international degrees, branch campuses and competitive study costs in a diverse, welcoming environment.",
      "Students can access career-focused programs and global university pathways while living in one of Southeast Asia’s most connected destinations.",
      "We’ll help you compare courses, entry requirements, costs and the right institution for your goals.",
    ],
    overviewImages: [
      asset("malaysia", "frame1000009685.png"),
      asset("malaysia", "frame1000009686.png"),
      asset("malaysia", "frame1000009694.png"),
      asset("malaysia", "frame1000009695.png"),
      asset("malaysia", "frame1000009696.png"),
    ],
    partnerCount: "8+",
    partnerLogos: malaysiaLogos,
    recommended: recommended("malaysia", malaysiaPartnerNames, malaysiaLogos, 8),
    subjectImages: ["container9.png", "container10.png", "container11.png", "container12.png"].map((file) => asset("malaysia", file)),
    blogImage: asset("malaysia", "container13.png"),
  },
  canada: {
    slug: "canada",
    country: "Canada",
    shortName: "Canada",
    heroImage: asset("canada", "hero-desktop-1536.webp"),
    heroSources: heroSources("canada", [768, 1200, 1536], [480, 780, 950]),
    heroAlt: "Canadian flag, Rocky Mountains and Toronto skyline",
    heroDescription:
      "Study in a global education and business hub with respected degrees and strong international career connections.",
    overviewTitle: "study in Canada",
    overviewParagraphs: [
      "Canada combines respected qualifications with practical, career-focused learning in welcoming and diverse student cities.",
      "International students can choose from universities, colleges and specialist institutions with strong links to industry and supportive campus communities.",
      "Your WIN counsellor will help you compare programs, entry requirements, costs and the location that best fits your goals.",
    ],
    overviewImages: [
      asset("canada", "frame1000009685.png"),
      asset("canada", "frame1000009686.png"),
      asset("canada", "frame1000009695.jpg"),
      asset("canada", "frame1000009694.jpg"),
      asset("canada", "frame1000009696.png"),
    ],
    partnerCount: "10+",
    partnerLogos: canadaPartnerLogos,
    recommended: recommended(
      "canada",
      canadaRecommendedNames,
      canadaRecommendedLogos,
      canadaRecommendedNames.length,
      [
        "container.png",
        "container1.png",
        "container2.png",
        "container3.jpg",
        "container4.png",
        "container5.jpg",
        "container6.jpg",
        "container7.png",
        "container8.png",
        "container9.jpg",
        "container10.jpg",
      ],
    ),
    subjectImages: canadaSubjects.map((_, index) =>
      asset("canada", `subject${String(index + 1).padStart(2, "0")}.png`),
    ),
    subjects: canadaSubjects,
    blogImage: asset("canada", "blog.png"),
  },
};
