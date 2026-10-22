import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import styles from "./site-footer.module.css";

const destinations = [
  ["United Kingdom", "/study-abroad/united-kingdom"],
  ["Australia", "/study-abroad/australia"],
  ["USA", "/study-abroad/usa"],
  ["Singapore", "/study-abroad/singapore"],
  ["New Zealand", "/study-abroad/new-zealand"],
  ["Malaysia", "/study-abroad/malaysia"],
  ["Canada", "/study-abroad/canada"],
] as const;

const siteMap = [
  ["Home", "/"],
  ["How We Help", "/how-we-help"],
  ["Scholarships", "/scholarships"],
  ["Our Offices", "/our-offices"],
  ["Blog", "/blog"],
] as const;

export function SiteFooter() {
  const whatsappHref = siteConfig.social.whatsapp || siteConfig.consultationPath;

  return (
    <footer className={styles.footer}>
      <section className={styles.cta} aria-labelledby="footer-cta-title">
        <div className={styles.ctaMedia} aria-hidden="true">
          <Image
            className={styles.ctaImage}
            src="/assets/footer/students-cta.jpg"
            alt=""
            fill
            sizes="100vw"
          />
        </div>
        <div className={styles.ctaFade} aria-hidden="true" />

        <div className={styles.ctaInner}>
          <div className={styles.ctaCopy}>
            <div>
              <h2 className={styles.ctaTitle} id="footer-cta-title">
                Your study abroad plan
                <span>starts with one chat.</span>
              </h2>
              <p className={styles.ctaDescription}>
                Tell us your goals and get clear, one-to-one guidance on destinations, courses,
                applications and visas.
              </p>
            </div>

            <div className={styles.ctaActions}>
              <Link
                className={`${styles.ctaButton} ${styles.ctaButtonPrimary}`}
                href={siteConfig.consultationPath}
              >
                Book a free consultation
              </Link>
              <a
                className={`${styles.ctaButton} ${styles.ctaButtonSecondary}`}
                href={whatsappHref}
                {...(siteConfig.social.whatsapp
                  ? { rel: "noreferrer", target: "_blank" }
                  : {})}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className={styles.mainFooter}>
        <div className={styles.footerGrid}>
          <div className={styles.brandColumn}>
            <Image
              className={styles.footerLogo}
              src="/assets/footer/win-logo-white.svg"
              alt="WIN — One Stop Service for study abroad"
              width={347}
              height={43}
            />
            <div className={styles.brandCopy}>
              <p>
                Operating hours
                <br />
                09:00–18:00.
              </p>
              <p>Free counselling for course selection, applications, visas and pre-departure preparation.</p>
            </div>
          </div>

          <nav className={styles.linkColumn} aria-labelledby="footer-destinations-title">
            <h2 id="footer-destinations-title">Study Abroad</h2>
            <ul>
              {destinations.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.linkColumn} aria-labelledby="footer-sitemap-title">
            <h2 id="footer-sitemap-title">Site map</h2>
            <ul>
              {siteMap.map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.bottomBarInner}>
          <p>© 2026 Westminster International Co., Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
