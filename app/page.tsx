import { HeroSection } from "@/components/home/hero-section";
import { FlagshipFilmSection } from "@/components/home/flagship-film-section";
import { ImpactStatsSection } from "@/components/home/impact-stats-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { StudentSuccessSection } from "@/components/home/student-success-section";
import { StudyDestinationsSection } from "@/components/home/study-destinations-section";
import { UniversityPartnersSection } from "@/components/home/university-partners-section";
import { UniversityChoiceSection } from "@/components/home/university-choice-section";
import { WhyFamiliesChooseSection } from "@/components/home/why-families-choose-section";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <div className={styles.heroUniversityStack}>
        <div className={styles.heroLayer}>
          <HeroSection />
        </div>
        <div className={styles.universityLayer}>
          <UniversityChoiceSection />
        </div>
      </div>
      <ImpactStatsSection />
      <StudentSuccessSection />
      <UniversityPartnersSection />
      <FlagshipFilmSection />
      <HowItWorksSection />
      <StudyDestinationsSection />
      <WhyFamiliesChooseSection />
    </main>
  );
}
