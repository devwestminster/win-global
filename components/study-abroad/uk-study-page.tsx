import Image from "next/image";
import Link from "next/link";
import { ActionLink } from "@/components/ui/action-link";
import {
  applicationDocuments,
  applicationSteps,
  popularSubjects,
  recommendedUniversities,
  trustReasons,
  ukBlogPosts,
} from "@/data/uk-study";
import { UkPartnerLogos } from "./uk-partner-logos";
import styles from "./uk-study-page.module.css";

const consultationHref = "/contact";

export function UkStudyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="uk-page-title">
        <Image
          className={styles.heroImage}
          src="/assets/study-abroad/uk/uk.png"
          alt="Palace of Westminster and Big Ben in London"
          fill
          unoptimized
          fetchPriority="high"
          loading="eager"
        />
        <div className={styles.heroFade} aria-hidden="true" />
        <div className={styles.heroContent}>
          <div className={styles.heroHeading}>
            <p className={styles.eyebrow}>Study in</p>
            <h1 id="uk-page-title">United Kingdom</h1>
          </div>
          <p className={styles.heroDescription}>
            Discover world-class universities and one-year master’s degrees. We’ll help you
            compare courses, costs, entry requirements and scholarships.
          </p>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="uk-overview-title">
        <div className={styles.overviewInner}>
          <div className={`${styles.photoCard} ${styles.consultationPhoto}`}>
            <Image
              src="/assets/study-abroad/uk/overview-consultation.jpg"
              alt="Student speaking with an education counsellor"
              fill
              sizes="(max-width: 900px) 100vw, 604px"
            />
          </div>

          <div className={styles.overviewCopy}>
            <div>
              <h2 id="uk-overview-title">
                Your guide to undergraduate <span>study in the UK</span>
              </h2>
              <p className={styles.lead}>
                A clear overview of what to expect before you begin your UK university application.
              </p>
            </div>
            <p>
              The United Kingdom comprises England, Scotland, Wales and Northern Ireland. Most
              undergraduate degrees take three years, or four years in Scotland. Applications are
              usually made through UCAS using qualifications such as A levels or an accepted
              equivalent. Some universities may also accept direct applications. Your WIN
              counsellor will explain the right route, entry requirements and deadlines for you.
            </p>
            <ActionLink href={consultationHref}>Book a free consultation</ActionLink>
          </div>

          <div className={`${styles.photoCard} ${styles.bridgePhoto}`}>
            <Image
              src="/assets/study-abroad/uk/tower-bridge.png"
              alt="Tower Bridge in London"
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
              src="/assets/study-abroad/uk/students.jpg"
              alt="University students walking together"
              fill
              sizes="(max-width: 900px) 100vw, 573px"
            />
            <p>Local guidance, global opportunities and support at every step.</p>
          </div>

          <div className={`${styles.statCard} ${styles.partnersStat}`}>
            <strong>200+</strong>
            <span>Official university partners</span>
          </div>

          <div className={`${styles.photoCard} ${styles.telephonePhoto}`}>
            <Image
              src="/assets/study-abroad/uk/telephone.jpg"
              alt="British telephone box, umbrella and Big Ben"
              fill
              sizes="(max-width: 900px) 100vw, 604px"
            />
            <p>Trusted university partnerships. More opportunities for every student.</p>
          </div>

          <div className={`${styles.photoCard} ${styles.abbeyPhoto}`}>
            <Image
              src="/assets/study-abroad/uk/westminster-abbey.jpg"
              alt="Westminster Abbey"
              fill
              sizes="(max-width: 900px) 100vw, 573px"
            />
          </div>
        </div>
      </section>

      <section className={styles.partners} aria-labelledby="uk-partners-title">
        <div className={styles.sectionInner}>
          <h2 className={styles.centeredTitle} id="uk-partners-title">
            Our UK <span>University Partners</span>
          </h2>
          <UkPartnerLogos />
        </div>
      </section>

      <section className={styles.recommended} aria-labelledby="recommended-title">
        <div className={styles.recommendedPanel}>
          <div className={styles.sectionHeading}>
            <h2 id="recommended-title">
              Recommended <span>UK Universities</span>
            </h2>
            <p>
              As an official representative of leading UK universities, including Russell Group
              members, WIN helps you compare the right options for your goals.
            </p>
          </div>

          <div className={styles.universityGrid}>
            {recommendedUniversities.map((university) => (
              <article className={styles.universityCard} key={university.name}>
                <div className={styles.universityPhoto}>
                  <Image
                    src={university.image}
                    alt={`${university.name} campus`}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 380px"
                  />
                  <span className={styles.universityLogo}>
                    <Image
                      src={university.logo}
                      alt=""
                      width={115}
                      height={61}
                      sizes="115px"
                    />
                  </span>
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

      <section className={styles.trust} aria-labelledby="trust-title">
        <div className={styles.sectionInner}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.kicker}>Why families choose WIN</p>
              <h2 id="trust-title">
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

      <section className={styles.subjects} aria-labelledby="subjects-title">
        <div className={styles.subjectsInner}>
          <div className={styles.subjectIntro}>
            <p className={styles.kicker}>Popular subject areas</p>
            <h2 id="subjects-title">
              <span>Popular UK subjects</span> for international students
            </h2>
            <p>
              Explore popular subject areas and the careers they can lead to. Your counsellor will
              help you compare courses, entry requirements and universities.
            </p>
            <ActionLink href={consultationHref}>Book a free consultation</ActionLink>
          </div>

          <div className={styles.subjectList}>
            {popularSubjects.map((subject) => (
              <article className={styles.subjectCard} key={subject.title}>
                <div className={styles.subjectImage}>
                  <Image
                    src={subject.image}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 540px"
                  />
                </div>
                <h3>{subject.title}</h3>
                <p>{subject.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <Image
          className={styles.processBackground}
          src="/assets/home/how-it-works/sky-clouds.jpg"
          alt=""
          fill
          sizes="100vw"
        />
        <div className={styles.processFade} />
        <Image className={styles.lineIcon} src="/assets/home/how-it-works/line-3d.png" alt="" width={200} height={200} />
        <Image className={styles.whatsappIcon} src="/assets/home/how-it-works/whatsapp-3d.png" alt="" width={200} height={200} />
        <Image className={styles.visaImage} src="/assets/home/how-it-works/visa-form.png" alt="" width={481} height={584} />
        <Image className={styles.passportImage} src="/assets/home/how-it-works/passport-tickets.png" alt="" width={392} height={477} />

        <div className={styles.processInner}>
          <div className={styles.processHeading}>
            <p className={styles.eyebrow}>How it works</p>
            <h2 id="process-title">
              Your study-<span>abroad plan, made simple.</span>
            </h2>
            <p>Five clear steps. One dedicated counsellor from your first question to departure.</p>
          </div>

          <ol className={styles.steps}>
            {applicationSteps.map((step, index) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <small>{step.timing}</small>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <div className={styles.processCta}>
            <h3>
              Your Study Abroad <span>Journey Starts Here</span>
            </h3>
            <ActionLink href={consultationHref} variant="secondary">
              Book a free consultation
            </ActionLink>
          </div>
        </div>
      </section>

      <section className={styles.documents} aria-labelledby="documents-title">
        <div className={styles.sectionInner}>
          <div className={styles.documentsHeading}>
            <h2 id="documents-title">
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

      <section className={styles.blog} aria-labelledby="uk-blog-title">
        <div className={styles.sectionInner}>
          <div className={styles.splitHeading}>
            <div>
              <p className={styles.kicker}>Resources</p>
              <h2 id="uk-blog-title">Blog</h2>
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
                    src="/assets/study-abroad/uk/blog-study-uk.jpg"
                    alt="Students preparing to study in the UK with WIN Education"
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
