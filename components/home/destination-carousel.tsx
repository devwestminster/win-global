"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ActionLink } from "@/components/ui/action-link";
import styles from "./study-destinations-section.module.css";

const destinations = [
  {
    slug: "uk",
    country: "UK",
    description:
      "Discover world-class universities and one-year master’s degrees. We’ll help you compare courses, costs, entry requirements and scholarships.",
    image: "/assets/home/hero/hero-uk.jpg",
    imageClassName: styles.ukImage,
    highlights: ["One-year master’s", "Scholarships"],
    cta: "Get free UK guidance",
  },
  {
    slug: "australia",
    country: "Australia",
    description:
      "Earn a globally recognised degree in welcoming cities—with guidance on courses, applications, visas and scholarships.",
    image: "/assets/home/destinations/australia.png",
    imageClassName: styles.australiaImage,
    highlights: ["Globally recognised", "Scholarships"],
    cta: "Get free Australia guidance",
  },
  {
    slug: "usa",
    country: "USA",
    description:
      "Explore flexible pathways across leading universities, from bachelor’s to postgraduate programs, matched to your goals and budget.",
    image: "/assets/home/destinations/usa.jpg",
    imageClassName: styles.usaImage,
    highlights: ["Flexible pathways", "Bachelor’s & postgraduate"],
    cta: "Get free USA guidance",
  },
  {
    slug: "singapore",
    country: "Singapore",
    description:
      "Study in a global education and business hub with respected degrees and strong international career connections.",
    image: "/assets/home/destinations/singapore.png",
    imageClassName: styles.singaporeImage,
    highlights: ["Global business hub", "Career connections"],
    cta: "Get free Singapore guidance",
  },
  {
    slug: "new-zealand",
    country: "New Zealand",
    description:
      "Choose a safe, welcoming destination known for hands-on learning, research and an excellent quality of life.",
    image: "/assets/home/destinations/new-zealand.jpg",
    imageClassName: styles.newZealandImage,
    highlights: ["Hands-on learning", "Research opportunities"],
    cta: "Get free New Zealand guidance",
  },
  {
    slug: "malaysia",
    country: "Malaysia",
    description:
      "Access internationally recognised degrees and branch campuses at competitive costs in a multicultural study destination.",
    image: "/assets/home/destinations/malaysia.jpg",
    imageClassName: styles.malaysiaImage,
    highlights: ["Competitive costs", "Branch campuses"],
    cta: "Get free Malaysia guidance",
  },
  {
    slug: "canada",
    country: "Canada",
    description:
      "Find career-focused programs and respected institutions in diverse, student-friendly cities.",
    image: "/assets/home/destinations/canada.png",
    imageClassName: styles.canadaImage,
    highlights: ["Career-focused", "Student-friendly cities"],
    cta: "Get free Canada guidance",
  },
] as const;

export function DestinationCarousel() {
  const countryNavRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLOListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll<HTMLElement>(`[data-carousel-slide]`));
    let frameId = 0;

    const updateActiveSlide = () => {
      frameId = 0;
      const carouselLeft = carousel.getBoundingClientRect().left;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      slides.forEach((slide, index) => {
        const distance = Math.abs(slide.getBoundingClientRect().left - carouselLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex((current) => (current === closestIndex ? current : closestIndex));
    };

    const requestUpdate = () => {
      if (frameId === 0) frameId = window.requestAnimationFrame(updateActiveSlide);
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(carousel);
    carousel.addEventListener("scroll", requestUpdate, { passive: true });
    requestUpdate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      carousel.removeEventListener("scroll", requestUpdate);
    };
  }, []);

  useEffect(() => {
    const countryNav = countryNavRef.current;
    if (!countryNav) return;

    const activeButton = countryNav.querySelectorAll<HTMLButtonElement>("button")[activeIndex];
    if (!activeButton) return;

    const navBounds = countryNav.getBoundingClientRect();
    const buttonBounds = activeButton.getBoundingClientRect();

    countryNav.scrollTo({
      left:
        countryNav.scrollLeft +
        buttonBounds.left -
        navBounds.left -
        (countryNav.clientWidth - activeButton.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [activeIndex]);

  const scrollToDestination = (index: number) => {
    const carousel = carouselRef.current;
    const slide = carousel?.querySelectorAll<HTMLElement>(`[data-carousel-slide]`)[index];
    if (!carousel || !slide) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    const carouselBounds = carousel.getBoundingClientRect();
    const slideBounds = slide.getBoundingClientRect();

    carousel.scrollTo({
      left: carousel.scrollLeft + slideBounds.left - carouselBounds.left,
      behavior,
    });

    setActiveIndex(index);
  };

  return (
    <>
      <nav
        className={styles.countryNav}
        aria-label="Choose a study destination"
        ref={countryNavRef}
      >
        <div className={styles.countryList}>
          {destinations.map((destination, index) => (
            <button
              className={styles.countryButton}
              aria-controls={`destination-${destination.slug}`}
              aria-pressed={activeIndex === index}
              key={destination.slug}
              onClick={() => scrollToDestination(index)}
              type="button"
            >
              {destination.country}
            </button>
          ))}
        </div>
      </nav>

      <ol
        className={styles.carousel}
        ref={carouselRef}
        aria-label="Study destinations"
        aria-roledescription="carousel"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" && activeIndex > 0) {
            event.preventDefault();
            scrollToDestination(activeIndex - 1);
          }

          if (event.key === "ArrowRight" && activeIndex < destinations.length - 1) {
            event.preventDefault();
            scrollToDestination(activeIndex + 1);
          }
        }}
        tabIndex={0}
      >
        {destinations.map((destination, index) => (
          <li
            className={styles.slide}
            data-carousel-slide
            id={`destination-${destination.slug}`}
            key={destination.slug}
            aria-current={activeIndex === index ? "true" : undefined}
            aria-label={`${destination.country}, slide ${index + 1} of ${destinations.length}`}
          >
            <article className={styles.card}>
              <Image
                className={`${styles.cardImage} ${destination.imageClassName}`}
                src={destination.image}
                alt=""
                fill
                sizes="(max-width: 767px) calc(100vw - 76px), (max-width: 1100px) 85vw, 1144px"
              />
              <div className={styles.cardShade} aria-hidden="true" />
              <div className={styles.cardContent}>
                <p className={styles.cardEyebrow}>Study in</p>
                <h3>{destination.country}</h3>
                <p className={styles.cardDescription}>{destination.description}</p>
                <ul className={styles.highlights} aria-label={`${destination.country} highlights`}>
                  {destination.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <ActionLink href="/contact">{destination.cta}</ActionLink>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
