import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ui/action-link";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import type { CountryStudyConfig } from "@/data/country-study";
import { sharedCountrySubjects } from "@/data/country-study";
import {
  applicationDocuments,
  trustReasons,
  ukBlogPosts,
} from "@/data/uk-study";
import { CountryHeroPicture } from "./country-hero-picture";
import { CountryPartnerLogos } from "./country-partner-logos";

const consultationHref = "/contact";

export function CountryStudyPage({
  config,
  styles,
}: {
  config: CountryStudyConfig;
  styles: Readonly<Record<string, string>>;
}) {
  const id = config.slug;
  const subjects = config.subjects ?? sharedCountrySubjects;

  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby={`${id}-page-title`}>
        <CountryHeroPicture
          alt={config.heroAlt}
          className={styles.heroImage}
          desktopSrc={config.heroImage}
          mobileSrc={config.heroMobileImage}
        />
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            <p className={styles.eyebrow}>Study in</p>
            <h1 id={`${id}-page-title`}>{config.country}</h1>
          </div>
          <p className={styles.heroDescription}>{config.heroDescription}</p>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby={`${id}-overview-title`}>
        <div className={styles.overviewInner}>
          <div className={`${styles.photoCard} ${styles.consultationPhoto}`}>
            <Image
              src={config.overviewImages[0]}
              alt={`International students preparing to study in ${config.country}`}
              fill
              sizes="(max-width: 900px) 100vw, 604px"
            />
          </div>

          <div className={styles.overviewCopy}>
            <h2 id={`${id}-overview-title`}>
              Your guide to undergraduate <span>{config.overviewTitle}</span>
            </h2>
            {config.overviewParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ActionLink href={consultationHref}>Book a free consultation</ActionLink>
          </div>

          <div className={`${styles.photoCard} ${styles.bridgePhoto}`}>
            <Image
              src={config.overviewImages[1]}
              alt={`${config.country} city and student life`}
              fill
              sizes="(max-width: 900px) 100vw, 604px"
            />
          </div>

          <div className={`${styles.statCard} ${styles.yearsStat}`}>
            <strong>15+</strong>
            <span>Years guiding students abroad</span>
          </div>

          <div className={`${styles.photoCard} ${styles.studentsPhoto}`}>
            <Image
              src={config.overviewImages[2]}
              alt={`International students in ${config.country}`}
              fill
              sizes="(max-width: 900px) 100vw, 573px"
            />
            <p>Local guidance, global opportunities and support at every step.</p>
          </div>

          <div className={`${styles.statCard} ${styles.partnersStat}`}>
            <strong>{config.partnerCount}</strong>
            <span>Official university partners</span>
          </div>

          <div className={`${styles.photoCard} ${styles.telephonePhoto}`}>
            <Image
              src={config.overviewImages[3]}
              alt={`Students studying in ${config.country}`}
              fill
              sizes="(max-width: 900px) 100vw, 604px"
            />
            <p>Trusted university partnerships. More opportunities for every student.</p>
          </div>

          <div className={`${styles.photoCard} ${styles.abbeyPhoto}`}>
            <Image
              src={config.overviewImages[4]}
              alt={`${config.country} landmark`}
              fill
              sizes="(max-width: 900px) 100vw, 573px"
            />
          </div>
        </div>
      </section>

      <section className={styles.partners} aria-labelledby={`${id}-partners-title`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.centeredTitle} id={`${id}-partners-title`}>
            Our {config.shortName} <span>University Partners</span>
          </h2>
          <CountryPartnerLogos
            country={config.shortName}
            logos={config.partnerLogos}
            styles={{
              partnerExplorer: styles.partnerExplorer,
              partnerGrid: styles.partnerGrid,
              partnerCard: styles.partnerCard,
              partnerToggle: styles.partnerToggle,
              partnerToggleExpanded: styles.partnerToggleExpanded,
            }}
          />
        </div>
      </section>

      <section className={styles.recommended} aria-labelledby={`${id}-recommended-title`}>
        <div className={styles.recommendedPanel}>
          <div className={styles.sectionHeading}>
            <h2 id={`${id}-recommended-title`}>
              Recommended <span>{config.shortName} Universities</span>
            </h2>
            <p>
              As an official representative of leading universities, WIN helps you compare the
              right options for your goals, eligibility and budget.
            </p>
          </div>

          <div className={styles.universityGrid}>
            {config.recommended.map((university) => (
              <article className={styles.universityCard} key={university.name}>
                <div className={styles.universityPhoto}>
                  <Image
                    src={university.image}
                    alt={`${university.name} campus`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                  {university.logo ? (
                    <span className={styles.universityLogo}>
                      <Image src={university.logo} alt="" width={115} height={61} sizes="115px" />
                    </span>
                  ) : null}
                </div>
                <div className={styles.universityCopy}>
                  <h3>{university.name}</h3>
                  <div>
                    {university.details.map((detail) => (
                      <p key={detail}>{detail}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.trust} aria-labelledby={`${id}-trust-title`}>
        <div className={styles.sectionInner}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.kicker}>Why families choose WIN</p>
              <h2 id={`${id}-trust-title`}>
                Trusted guidance for one of life’s <span>biggest decisions.</span>
              </h2>
            </div>
            <div className={styles.splitAside}>
              <p>
                For over 15 years, students and families have trusted WIN for clear advice,
                transparent support and personal guidance from the first conversation to arrival.
              </p>
              <ActionLink href={consultationHref}>Book a free consultation</ActionLink>
            </div>
          </div>

          <ol className={styles.trustGrid}>
            {trustReasons.map((reason, index) => (
              <li key={reason.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.subjects} aria-labelledby={`${id}-subjects-title`}>
        <div className={styles.subjectsInner}>
          <div className={styles.subjectIntro}>
            <p className={styles.kicker}>Popular subject areas</p>
            <h2 id={`${id}-subjects-title`}>
              <span>Popular {config.shortName} subjects</span> for international students
            </h2>
            <p>
              Explore popular subject areas and the careers they can lead to. Your counsellor will
              help you compare courses, entry requirements and universities.
            </p>
            <ActionLink href={consultationHref}>Book a free consultation</ActionLink>
          </div>

          <div className={styles.subjectList}>
            {subjects.map((subject, index) => (
              <article className={styles.subjectCard} key={subject.title}>
                <div className={styles.subjectImage}>
                  <Image src={config.subjectImages[index]} alt="" fill sizes="(max-width: 900px) 100vw, 540px" />
                </div>
                <h3>{subject.title}</h3>
                <p>{subject.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <section className={styles.documents} aria-labelledby={`${id}-documents-title`}>
        <div className={styles.sectionInner}>
          <div className={styles.documentsHeading}>
            <h2 id={`${id}-documents-title`}>
              <span>Documents</span> you’ll need to apply
            </h2>
            <div>
              <p>
                Your counsellor will check every document, explain what is required and help you
                prepare a complete application with confidence.
              </p>
              <ActionLink href={consultationHref}>Check your eligibility</ActionLink>
            </div>
          </div>

          <ol className={styles.documentList}>
            {applicationDocuments.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.blog} aria-labelledby={`${id}-blog-title`}>
        <div className={styles.sectionInner}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.kicker}>Resources</p>
              <h2 id={`${id}-blog-title`}>Blog</h2>
            </div>
            <div className={styles.splitAside}>
              <p>
                Practical guides to help you compare destinations, prepare a strong application
                and plan your journey with confidence.
              </p>
              <ActionLink href="/blog">See more</ActionLink>
            </div>
          </div>

          <div className={styles.blogGrid}>
            {ukBlogPosts.map((post) => (
              <Link className={styles.blogCard} href="/blog" key={post.title}>
                <div className={styles.blogImage}>
                  <Image
                    src={config.blogImage}
                    alt={`Students preparing to study in ${config.country} with WIN Education`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 392px"
                  />
                </div>
                <div className={styles.blogCopy}>
                  <p className={styles.blogMeta}>
                    <span>{post.date}</span><i>•</i><span>{post.time}</span>
                  </p>
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  <span className={styles.blogTag}>{post.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
