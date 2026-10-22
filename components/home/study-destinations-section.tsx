import { DestinationCarousel } from "./destination-carousel";
import styles from "./study-destinations-section.module.css";

export function StudyDestinationsSection() {
  return (
    <section className={styles.section} aria-labelledby="study-destinations-heading">
      <div className={styles.content}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>Study abroad</p>
          <h2 id="study-destinations-heading">
            <span>Explore Your Study Destination.</span>
            Discover Scholarships That Match You.
          </h2>
          <p className={styles.intro}>
            Select your preferred country and let us help you find the scholarships and bursaries
            that best match your academic profile, ambitions and study plans.
          </p>
        </header>

        <DestinationCarousel />
      </div>
    </section>
  );
}
