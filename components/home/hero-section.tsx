import Image from "next/image";
import { siteConfig } from "@/data/site";
import { ActionLink } from "@/components/ui/action-link";
import { SocialRail } from "./social-rail";
import styles from "./hero-section.module.css";

export function HeroSection() {
  const whatsappHref = siteConfig.social.whatsapp || siteConfig.consultationPath;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <Image
        className={styles.background}
        src="/assets/home/hero/hero-background.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-heading">
            <span>Study abroad with</span>
            <strong>a plan that fits you.</strong>
          </h1>
          <p>
            Get free one-to-one guidance—from choosing a country and course to applications,
            visas and your first day on campus.
          </p>
          <div className={styles.actions}>
            <ActionLink href={siteConfig.consultationPath}>Book a free consultation</ActionLink>
            <ActionLink href={whatsappHref} variant="secondary">Chat on WhatsApp</ActionLink>
          </div>
          <div className={styles.mobileSocials}>
            <SocialRail />
          </div>
        </div>

        <div className={styles.student} aria-hidden="true">
          <Image
            src="/assets/home/hero/hero-student.png"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 90vw, (max-width: 1100px) 48vw, 495px"
          />
        </div>
      </div>

      <div className={styles.desktopSocials}>
        <SocialRail />
      </div>
    </section>
  );
}
