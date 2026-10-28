import type { Metadata } from "next";
import { OfficesAccordion } from "@/components/offices/offices-accordion";
import { OfficeWorldMap } from "@/components/offices/office-world-map";
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
          <div className={styles.heroContent}>
            <div className={styles.headingGroup}>
              <p className={styles.eyebrow}>Our Offices</p>
              <h1 className={styles.title} id="our-offices-title">
                <span className={styles.titleLine}>Meet your WIN</span>
                <span className={styles.titleLine}>counsellor in person</span>
                <span className={styles.titleLine}>or connect online.</span>
              </h1>
            </div>
            <p className={styles.description}>
              Find the most convenient WIN Education office and choose the way you would like to
              speak with our team.
            </p>
            <ActionLink href="/contact">Book a free consultation</ActionLink>
          </div>

          <div className={styles.mapShell}>
            <OfficeWorldMap />
          </div>
        </div>
      </section>

      <section className={styles.officeSection} aria-label="WIN Education office locations">
        <h2 className={styles.visuallyHidden}>WIN Education office locations</h2>
        <OfficesAccordion />
      </section>
    </main>
  );
}
