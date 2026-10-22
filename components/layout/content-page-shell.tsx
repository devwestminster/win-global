import { ActionLink } from "@/components/ui/action-link";
import type { PageContent } from "@/data/page-content";
import styles from "./content-page-shell.module.css";

type ContentPageShellProps = PageContent & {
  showConsultationAction?: boolean;
};

export function ContentPageShell({
  eyebrow,
  title,
  description,
  showConsultationAction = true,
}: ContentPageShellProps) {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="page-title">
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title} id="page-title">
            {title}
          </h1>
          <p className={styles.description}>{description}</p>

          <div className={styles.actions}>
            {showConsultationAction ? (
              <ActionLink href="/contact">Book a free consultation</ActionLink>
            ) : null}
            <ActionLink href="/" variant="secondary">
              Back to home
            </ActionLink>
          </div>
        </div>
      </section>
    </main>
  );
}
