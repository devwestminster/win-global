import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { StudentSuccessSection } from "@/components/home/student-success-section";
import { UniversityPartnersSection } from "@/components/home/university-partners-section";
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
      </main>
    </>
  );
}
