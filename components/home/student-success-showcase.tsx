import Image from "next/image";
import styles from "./student-success-section.module.css";

const assetRoot = "/assets/home/student-success";

const studentStories = [
  {
    name: "Maadh",
    university: "University of Surrey",
    image: `${assetRoot}/maadh.png`,
  },
  {
    name: "Kriti",
    university: "Newcastle University",
    image: `${assetRoot}/kriti.png`,
  },
  {
    name: "Masha",
    university: "UNSW Sydney",
    image: `${assetRoot}/masha.png`,
  },
  {
    name: "Steve",
    university: "University Tasmania",
    image: `${assetRoot}/steve.png`,
  },
  {
    name: "Lucas",
    university: "Manchester Metropolitan University",
    image: `${assetRoot}/lucas.png`,
  },
] as const;

function StoryCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul className={styles.storyGroup} aria-hidden={duplicate || undefined}>
      {studentStories.map((story) => (
        <li className={styles.storyCard} key={`${duplicate ? "duplicate-" : ""}${story.name}`}>
          <Image
            src={story.image}
            alt={`${story.name}, ${story.university}`}
            width={497}
            height={493}
            sizes="(max-width: 767px) 84vw, (max-width: 1100px) 430px, 497px"
          />
        </li>
      ))}
    </ul>
  );
}

export function StudentSuccessShowcase() {
  return (
    <div
      className={styles.carouselViewport}
      role="region"
      aria-label="WIN student success stories"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      <p className={styles.visuallyHidden}>
        A continuously moving carousel of five student stories. Focus or hover over the carousel to
        pause it.
      </p>
      <div className={styles.carouselTrack}>
        <StoryCards />
        <StoryCards duplicate />
      </div>
    </div>
  );
}
