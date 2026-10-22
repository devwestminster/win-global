"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./why-families-choose-section.module.css";

const reasons = [
  {
    number: "01",
    title: "Accredited & trained",
    description: "Counsellors trained by recognised international education organisations.",
    rotation: "-2.88deg",
  },
  {
    number: "02",
    title: "Free counselling service",
    description:
      "Partner universities pay our service fee. You pay tuition directly to the university.",
    rotation: "4.6deg",
  },
  {
    number: "03",
    title: "One dedicated counsellor",
    description: "The same person guides you from course shortlist to arrival.",
    rotation: "-2.05deg",
  },
  {
    number: "04",
    title: "Local & online support",
    description:
      "Meet us at selected offices or speak with your counsellor online from anywhere.",
    rotation: "2.1deg",
  },
] as const;

type CardStyle = CSSProperties & {
  "--card-delay": string;
  "--card-rotation": string;
  "--card-z": number;
};

export function WhyChooseCardDeck() {
  const deckRef = useRef<HTMLDivElement>(null);
  const [isPrepared, setIsPrepared] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const deck = deckRef.current;
    if (!deck || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (deck.getBoundingClientRect().top <= window.innerHeight * 0.9) {
      setIsRevealed(true);
      return;
    }

    setIsPrepared(true);
    let completionTimer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsRevealed(true);
        observer.disconnect();
        completionTimer = window.setTimeout(() => setIsPrepared(false), 1200);
      },
      { rootMargin: "0px 0px -12%", threshold: 0.18 },
    );

    observer.observe(deck);

    return () => {
      observer.disconnect();
      window.clearTimeout(completionTimer);
    };
  }, []);

  const deckClasses = [
    styles.cardDeck,
    isPrepared ? styles.isPrepared : "",
    isRevealed ? styles.isRevealed : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={deckClasses} ref={deckRef}>
      {reasons.map((reason, index) => {
        const cardStyle: CardStyle = {
          "--card-delay": `${index * 100}ms`,
          "--card-rotation": reason.rotation,
          "--card-z": reasons.length - index,
        };

        return (
          <article className={styles.reasonCard} key={reason.number} style={cardStyle}>
            <p className={styles.cardNumber}>{reason.number}</p>
            <h3>{reason.title}</h3>
            <p className={styles.cardDescription}>{reason.description}</p>
          </article>
        );
      })}
    </div>
  );
}
