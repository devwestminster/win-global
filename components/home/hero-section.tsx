import localFont from "next/font/local";
import { siteConfig } from "@/data/site";
import { ActionLink } from "@/components/ui/action-link";
import { HeroBackgroundVideo } from "./hero-background-video";
import styles from "./hero-section.module.css";

const caveat = localFont({
  src: "../../public/fonts/caveat-latin-500.woff2",
  display: "swap",
  weight: "500",
});

export function HeroSection() {
  const whatsappHref = siteConfig.social.whatsapp || siteConfig.consultationPath;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <HeroBackgroundVideo />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-heading">
            <span>Your Study Abroad Journey Deserves</span>{" "}
            <strong className={`${styles.handwriting} ${caveat.className}`}>
              Trusted Guidance.
            </strong>
          </h1>
          <p>
            Get free one-to-one guidance—from choosing a country and course to applications,
            visas and your first day on campus.
          </p>
          <div className={styles.actions}>
            <ActionLink href={siteConfig.consultationPath}>Book a free consultation</ActionLink>
            <ActionLink href={whatsappHref} variant="secondary">Chat on WhatsApp</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
