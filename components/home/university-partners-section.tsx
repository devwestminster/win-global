import { UniversityPartnerTabs } from "./university-partner-tabs";
import styles from "./university-partners-section.module.css";

export function UniversityPartnersSection() {
  return (
    <section className={styles.section} aria-labelledby="university-partners-heading">
      <div className={styles.inner}>
        <h2 id="university-partners-heading">
          <span>Official representative for 200+</span>
          Universities Worldwide
        </h2>

        <UniversityPartnerTabs />
      </div>
    </section>
  );
}
