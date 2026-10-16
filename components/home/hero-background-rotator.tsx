"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./hero-section.module.css";

const backgrounds = [
  "/assets/home/hero/hero-uk.jpg",
  "/assets/home/hero/hero-australia.jpg",
  "/assets/home/hero/hero-usa.jpg",
  "/assets/home/hero/hero-singapore.jpg",
  "/assets/home/hero/hero-singapore-skyline.jpg",
] as const;

const ROTATION_INTERVAL_MS = 6_000;
const FADE_DURATION_MS = 1_200;

export function HeroBackgroundRotator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [activeImageReady, setActiveImageReady] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reducedMotion.matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => {
        setPreviousIndex(currentIndex);
        setActiveImageReady(false);
        return (currentIndex + 1) % backgrounds.length;
      });
    }, ROTATION_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (previousIndex === null || !activeImageReady) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setPreviousIndex(null);
    }, FADE_DURATION_MS);

    return () => window.clearTimeout(timeout);
  }, [activeImageReady, previousIndex]);

  return (
    <div className={styles.backgrounds} aria-hidden="true">
      {previousIndex !== null ? (
        <Image
          className={styles.background}
          src={backgrounds[previousIndex]}
          alt=""
          fill
          sizes="100vw"
        />
      ) : null}

      <Image
        key={backgrounds[activeIndex]}
        className={`${styles.background} ${
          previousIndex !== null ? styles.incomingBackground : ""
        } ${activeImageReady ? styles.backgroundReady : ""}`}
        src={backgrounds[activeIndex]}
        alt=""
        fill
        {...(activeIndex === 0 ? { preload: true } : { loading: "eager" as const })}
        sizes="100vw"
        onLoad={() => setActiveImageReady(true)}
      />
    </div>
  );
}
