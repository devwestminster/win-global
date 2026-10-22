import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { StudentSuccessSection } from "@/components/home/student-success-section";
import { StudyDestinationsSection } from "@/components/home/study-destinations-section";
import { UniversityPartnersSection } from "@/components/home/university-partners-section";
import { WhyFamiliesChooseSection } from "@/components/home/why-families-choose-section";
import { SiteHeader } from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StudentSuccessSection />
        <UniversityPartnersSection />
        <HowItWorksSection />
        <StudyDestinationsSection />
        <WhyFamiliesChooseSection />
      </main>
    </>
  );
}
