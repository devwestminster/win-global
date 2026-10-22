export type NavigationItem = {
  label: string;
  href: string;
  children?: readonly NavigationChild[];
};

export type NavigationChild = {
  label: string;
  href: string;
  external?: boolean;
};

export const navigation = [
  { label: "Home", href: "/" },
  {
    label: "Study Abroad",
    href: "/study-abroad",
    children: [
      { label: "United Kingdom", href: "/study-abroad/united-kingdom" },
      { label: "Australia", href: "/study-abroad/australia" },
      { label: "USA", href: "/study-abroad/usa" },
      { label: "Singapore", href: "/study-abroad/singapore" },
      { label: "Malaysia", href: "/study-abroad/malaysia" },
      { label: "New Zealand", href: "/study-abroad/new-zealand" },
      { label: "Canada", href: "/study-abroad/canada" },
    ],
  },
  {
    label: "How We Help",
    href: "/how-we-help",
    children: [
      { label: "Course guidance", href: "/how-we-help/course-guidance" },
      { label: "Applications", href: "/how-we-help/applications" },
      { label: "Visa support", href: "/how-we-help/visa-support" },
      {
        label: "Student Accommodation",
        href: "https://win-ed.studentacco.com/",
        external: true,
      },
    ],
  },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Our Offices", href: "/our-offices" },
  { label: "Blog", href: "/blog" },
] as const satisfies readonly NavigationItem[];

export const siteConfig = {
  name: "WIN Education",
  description:
    "One-to-one guidance for studying abroad, from choosing a course to applications, visas, and departure.",
  consultationPath: "/contact",
  social: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() || "",
    line: process.env.NEXT_PUBLIC_LINE_URL?.trim() || "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL?.trim() || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL?.trim() || "",
  },
} as const;
