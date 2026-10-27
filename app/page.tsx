import { HeroSection } from "@/components/home/hero-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
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
      <StudentSuccessSection />
      <UniversityPartnersSection />
      <HowItWorksSection />
      <StudyDestinationsSection />
      <WhyFamiliesChooseSection />
    </main>
  );
}
