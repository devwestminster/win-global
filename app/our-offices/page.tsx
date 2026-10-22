import type { Metadata } from "next";
import { OfficesAccordion } from "@/components/offices/offices-accordion";
import { ActionLink } from "@/components/ui/action-link";
import { topLevelPageContent } from "@/data/page-content";
import styles from "./our-offices.module.css";

const content = topLevelPageContent["our-offices"];

export const metadata: Metadata = {
  title: "Our Offices",
  description: content.description,
};

export default function OurOfficesPage() {
  return (
    <main>
      <section className={styles.hero} aria-labelledby="our-offices-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Our Offices</p>
          <h1 className={styles.title} id="our-offices-title">
            Meet your WIN counsellor in person or connect online.
          </h1>
          <p className={styles.description}>
            Find the most convenient WIN Education office and choose the way you would like to
            speak with our team.
          </p>
          <ActionLink href="/contact">Book a free consultation</ActionLink>
        </div>
      </section>

      <section className={styles.officeSection} aria-label="WIN Education office locations">
        <h2 className={styles.visuallyHidden}>WIN Education office locations</h2>
        <OfficesAccordion />
      </section>
    </main>
  );
}
