"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ActionLink } from "@/components/ui/action-link";
import { ResponsivePicture } from "@/components/ui/responsive-picture";
import { scrollActiveItemIntoView } from "@/components/ui/scroll-active-item-into-view";
import styles from "./study-destinations-section.module.css";

const destinations = [
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    description:
      "Discover world-class universities and one-year master’s degrees. We’ll help you compare courses, costs, entry requirements and scholarships.",
    image: "/assets/home/hero/hero-uk.jpg",
    imageHeight: 1113,
    imageWidth: 1920,
    mobileImage: "/assets/home/destinations/united-kingdom-mobile.jpg",
    mobileImageHeight: 1113,
    mobileImageWidth: 742,
    imageClassName: styles.ukImage,
    cta: "Explore the UK",
  },
  {
    slug: "australia",
    country: "Australia",
    description:
      "Earn a globally recognised degree in welcoming cities—with guidance on courses, applications, visas and scholarships.",
    image: "/assets/home/hero/hero-australia.jpg",
    imageHeight: 1280,
    imageWidth: 1920,
    mobileImage: "/assets/home/destinations/australia-mobile.jpg",
    mobileImageHeight: 1280,
    mobileImageWidth: 853,
    imageClassName: styles.australiaImage,
    cta: "Explore Australia",
  },
  {
    slug: "usa",
    country: "USA",
    description:
      "Explore flexible pathways across leading universities, from bachelor’s to postgraduate programs, matched to your goals and budget.",
    image: "/assets/home/hero/hero-usa.jpg",
    imageHeight: 750,
    imageWidth: 1440,
    mobileImage: "/assets/home/destinations/usa-mobile.jpg",
    mobileImageHeight: 1800,
    mobileImageWidth: 1200,
    imageClassName: styles.usaImage,
    cta: "Explore the USA",
  },
  {
    slug: "singapore",
    country: "Singapore",
    description:
      "Study in a global education and business hub with respected degrees and strong international career connections.",
    image: "/assets/home/destinations/singapore.png",
    imageHeight: 1024,
    imageWidth: 1536,
    mobileImage: "/assets/home/destinations/singapore-mobile.jpg",
    mobileImageHeight: 1024,
    mobileImageWidth: 683,
    imageClassName: styles.singaporeImage,
    cta: "Explore Singapore",
  },
  {
    slug: "new-zealand",
    country: "New Zealand",
    description:
      "Choose a safe, welcoming destination known for hands-on learning, research and an excellent quality of life.",
    image: "/assets/home/destinations/new-zealand-desktop.jpg",
    imageHeight: 2000,
    imageWidth: 2000,
    mobileImage: "/assets/home/destinations/new-zealand-mobile.jpg",
    mobileImageHeight: 1800,
    mobileImageWidth: 1200,
    imageClassName: styles.newZealandImage,
    cta: "Explore New Zealand",
  },
  {
    slug: "malaysia",
    country: "Malaysia",
    description:
      "Access internationally recognised degrees and branch campuses at competitive costs in a multicultural study destination.",
    image: "/assets/home/destinations/malaysia-desktop.jpg",
    imageHeight: 2000,
    imageWidth: 2000,
    mobileImage: "/assets/home/destinations/malaysia-mobile.jpg",
    mobileImageHeight: 1800,
    mobileImageWidth: 1200,
    imageClassName: styles.malaysiaImage,
    cta: "Explore Malaysia",
  },
  {
    slug: "canada",
    country: "Canada",
    description:
      "Find career-focused programs and respected institutions in diverse, student-friendly cities.",
    image: "/assets/home/destinations/canada.png",
    imageHeight: 1024,
    imageWidth: 1536,
    mobileImage: "/assets/home/destinations/canada-mobile.jpg",
    mobileImageHeight: 1024,
    mobileImageWidth: 683,
    imageClassName: styles.canadaImage,
    cta: "Explore Canada",
  },
] as const;

const DESKTOP_QUERY = "(min-width: 768px)";

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function DestinationCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const countryNavRef = useRef<HTMLElement>(null);
  const activeIndexRef = useRef(0);
  const frameRef = useRef(0);
  const fallbackTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const setDestination = useCallback((index: number) => {
    const nextIndex = clamp(index, 0, destinations.length - 1);

    if (activeIndexRef.current === nextIndex) return;
    activeIndexRef.current = nextIndex;
    setActiveIndex(nextIndex);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const desktopQuery = window.matchMedia(DESKTOP_QUERY);
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      if (!desktopQuery.matches) {
        stage.style.setProperty("--rail-opacity", "1");
        stage.style.setProperty("--rail-offset", "0px");
        stage.style.setProperty("--rail-width", "100%");
        stage.style.setProperty("--rail-gap", "0px");
        return;
      }

      const trackRect = track.getBoundingClientRect();
      const stageRect = stage.getBoundingClientRect();
      const stageHeight = stage.offsetHeight;
      const scrollDistance = clamp(
        stageRect.top - trackRect.top,
        0,
        track.offsetHeight - stageHeight,
      );
      const revealDistance = clamp(window.innerHeight * 0.72, 360, 680);
      const revealProgress = reducedMotionQuery.matches
        ? 1
        : clamp(scrollDistance / revealDistance, 0, 1);
      const railWidth = stage.clientWidth >= 1120 ? 338 : clamp(stage.clientWidth * 0.27, 190, 286);
      const railGap = stage.clientWidth >= 1120 ? 60 : 32;

      stage.style.setProperty("--rail-opacity", revealProgress.toFixed(3));
      stage.style.setProperty("--rail-offset", `${(revealProgress - 1) * 18}px`);
      stage.style.setProperty("--rail-width", `${railWidth * revealProgress}px`);
      stage.style.setProperty("--rail-gap", `${railGap * revealProgress}px`);

      const stepRange = Math.max(track.offsetHeight - stageHeight - revealDistance, 1);
      const destinationProgress = clamp((scrollDistance - revealDistance) / stepRange, 0, 1);
      setDestination(Math.round(destinationProgress * (destinations.length - 1)));
    };

    const flushUpdate = () => {
      frameRef.current = 0;

      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
      }

      update();
    };

    const requestUpdate = () => {
      if (frameRef.current !== 0 || fallbackTimerRef.current !== null) return;

      frameRef.current = window.requestAnimationFrame(flushUpdate);
      fallbackTimerRef.current = window.setTimeout(() => {
        if (frameRef.current !== 0) window.cancelAnimationFrame(frameRef.current);
        flushUpdate();
      }, 80);
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(track);
    resizeObserver.observe(stage);
    desktopQuery.addEventListener("change", requestUpdate);
    reducedMotionQuery.addEventListener("change", requestUpdate);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      if (fallbackTimerRef.current !== null) window.clearTimeout(fallbackTimerRef.current);
      resizeObserver.disconnect();
      desktopQuery.removeEventListener("change", requestUpdate);
      reducedMotionQuery.removeEventListener("change", requestUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [setDestination]);

  useEffect(() => {
    const countryNav = countryNavRef.current;
    if (!countryNav || window.matchMedia(DESKTOP_QUERY).matches) return;

    const activeButton = countryNav.querySelectorAll<HTMLButtonElement>("button")[activeIndex];
    if (!activeButton) return;

    scrollActiveItemIntoView(
      countryNav,
      activeButton,
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    );
  }, [activeIndex]);

  const selectDestination = (index: number) => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    setDestination(index);

    if (!track || !stage || !window.matchMedia(DESKTOP_QUERY).matches) return;

    const trackTop = window.scrollY + track.getBoundingClientRect().top;
    const stickyOffset = Number.parseFloat(window.getComputedStyle(stage).top) || 0;
    const revealDistance = clamp(window.innerHeight * 0.72, 360, 680);
    const stepRange = Math.max(track.offsetHeight - stage.offsetHeight - revealDistance, 1);
    const destinationOffset = (stepRange * index) / (destinations.length - 1);

    window.scrollTo({
      top: trackTop - stickyOffset + revealDistance + destinationOffset,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  const activeDestination = destinations[activeIndex];

  return (
    <div className={styles.destinationTrack} data-site-header-hide-region ref={trackRef}>
      <div className={styles.destinationStage} data-site-header-hide-stage ref={stageRef}>
        <nav
          className={styles.countryNav}
          aria-label="Choose a study destination"
          ref={countryNavRef}
        >
          <div className={styles.countryList}>
            {destinations.map((destination, index) => (
              <button
                className={styles.countryButton}
                aria-controls="active-destination"
                aria-current={activeIndex === index ? "true" : undefined}
                key={destination.slug}
                onClick={() => selectDestination(index)}
                type="button"
              >
                {destination.country}
              </button>
            ))}
          </div>
        </nav>

        <article
          className={styles.card}
          id="active-destination"
          key={activeDestination.slug}
          aria-labelledby={`destination-${activeDestination.slug}`}
        >
          <ResponsivePicture
            className={`${styles.cardImage} ${activeDestination.imageClassName}`}
            alt=""
            fill
            fallback={{
              height: activeDestination.imageHeight,
              quality: 90,
              sizes: "(max-width: 1100px) calc(100vw - 108px), 1240px",
              src: activeDestination.image,
              width: activeDestination.imageWidth,
            }}
            sources={[
              {
                height: activeDestination.mobileImageHeight,
                media: "(max-width: 767px)",
                quality: 90,
                sizes: "calc(100vw - 40px)",
                src: activeDestination.mobileImage,
                width: activeDestination.mobileImageWidth,
              },
            ]}
          />
          <div className={styles.cardShade} aria-hidden="true" />
          <div className={styles.cardContent}>
            <p className={styles.cardEyebrow}>Study in</p>
            <h3 id={`destination-${activeDestination.slug}`}>{activeDestination.country}</h3>
            <p className={styles.cardDescription}>{activeDestination.description}</p>
            <ActionLink href={`/study-abroad/${activeDestination.slug}`}>
              {activeDestination.cta}
            </ActionLink>
          </div>
        </article>
      </div>
    </div>
  );
}
