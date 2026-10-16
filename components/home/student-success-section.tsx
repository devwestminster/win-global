import { StudentSuccessShowcase } from "./student-success-showcase";
import styles from "./student-success-section.module.css";

export function StudentSuccessSection() {
  return (
    <section className={styles.section} aria-labelledby="student-success-heading">
      <header className={styles.heading}>
        <h2 id="student-success-heading">
          <span>Our students</span> success
        </h2>
        <p>
          See how WIN students found the right course, secured their offer and started their next
          chapter abroad.
        </p>
      </header>

      <StudentSuccessShowcase />
    </section>
  );
}
