import { ActionLink } from "@/components/ui/action-link";
import { WhyChooseCardDeck } from "./why-choose-card-deck";
import styles from "./why-families-choose-section.module.css";

export function WhyFamiliesChooseSection() {
  return (
    <section className={styles.section} aria-labelledby="why-families-choose-heading">
      <div className={styles.content}>
        <header className={styles.headingRow}>
          <div className={styles.headingCopy}>
            <p className={styles.eyebrow}>Why families choose WIN</p>
            <h2 id="why-families-choose-heading">
              Trusted guidance for one of life’s <span>biggest decisions.</span>
            </h2>
          </div>

          <div className={styles.introBlock}>
            <p>
              For over 25 years, students and families have trusted WIN for clear advice,
              transparent support and personal guidance from first conversation to arrival.
            </p>
            <ActionLink href="/contact">Talk to a counsellor</ActionLink>
          </div>
        </header>

        <WhyChooseCardDeck />
      </div>
    </section>
  );
}
