import Image from "next/image";
import { ActionLink } from "@/components/ui/action-link";
import { ResponsivePicture } from "@/components/ui/responsive-picture";
import styles from "./how-it-works-section.module.css";

const journeySteps = [
  {
    period: "Day 1",
    title: "Share your goals",
    description: "Tell us your grades, budget and ambitions—online, by phone or in person.",
  },
  {
    period: "Week 1",
    title: "Get your shortlist",
    description:
      "Compare 3–5 courses and universities matched to your goals, budget and eligibility.",
  },
  {
    period: "Weeks 2–6",
    title: "Submit strong applications",
    description:
      "We strengthen your personal statement, check every document and manage deadlines.",
  },
  {
    period: "After your offer",
    title: "Secure your visa",
    description: "Get step-by-step visa guidance and document checks so nothing is missed.",
  },
  {
    period: "Before departure",
    title: "Get ready to go",
    description:
      "Prepare with accommodation guidance, travel tips and a complete pre-departure briefing.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section className={styles.section} aria-labelledby="how-it-works-heading">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.skyLayer}>
          <ResponsivePicture
            alt=""
            className={styles.skyImage}
            fill
            fallback={{
              height: 2731,
              quality: 85,
              sizes: "100vw",
              src: "/assets/home/how-it-works/sky-clouds-desktop.jpg",
              width: 1600,
            }}
            sources={[
              {
                height: 2731,
                media: "(max-width: 767px)",
                quality: 85,
                sizes: "100vw",
                src: "/assets/home/how-it-works/sky-clouds-mobile.jpg",
                width: 600,
              },
            ]}
          />
        </div>
      </div>

      <div className={styles.decorations} aria-hidden="true">
        <div className={`${styles.decoration} ${styles.lineDecoration}`}>
          <Image
            src="/assets/home/how-it-works/line-3d.png"
            alt=""
            width={1254}
            height={1254}
            quality={85}
            sizes="(max-width: 767px) 96px, (max-width: 1100px) 140px, 200px"
          />
        </div>
        <div className={`${styles.decoration} ${styles.whatsappDecoration}`}>
          <Image
            src="/assets/home/how-it-works/whatsapp-3d.png"
            alt=""
            width={1254}
            height={1254}
            quality={85}
            sizes="(max-width: 767px) 96px, (max-width: 1100px) 140px, 200px"
          />
        </div>
        <div className={`${styles.decoration} ${styles.formDecoration}`}>
          <Image
            src="/assets/home/how-it-works/visa-form.png"
            alt=""
            width={1536}
            height={1024}
            quality={85}
            sizes="(max-width: 767px) 180px, (max-width: 1100px) 300px, 480px"
          />
        </div>
        <div className={`${styles.decoration} ${styles.passportDecoration}`}>
          <Image
            src="/assets/home/how-it-works/passport-tickets.png"
            alt=""
            width={1137}
            height={1383}
            quality={85}
            sizes="(max-width: 767px) 160px, (max-width: 1100px) 260px, 392px"
          />
        </div>
      </div>

      <div className={styles.content}>
        <header className={styles.heading}>
          <p className={styles.eyebrow}>How it works</p>
          <h2 id="how-it-works-heading">
            Your study-<span>abroad plan,</span>
            <span>made simple.</span>
          </h2>
          <p className={styles.intro}>
            Five clear steps. One dedicated counsellor from your first question to departure.
          </p>
        </header>

        <ol className={styles.steps}>
          {journeySteps.map((step, index) => (
            <li className={styles.step} key={step.title}>
              <article className={styles.card}>
                <span className={styles.stepNumber} aria-hidden="true">
                  {index + 1}
                </span>
                <p className={styles.period}>{step.period}</p>
                <h3>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </article>
            </li>
          ))}
        </ol>

        <div className={styles.cta}>
          <h3>
            Your Study Abroad
            <span>Journey Starts Here</span>
          </h3>
          <ActionLink href="/contact" variant="secondary">
            Book a free consultation
          </ActionLink>
        </div>
      </div>
    </section>
  );
}
