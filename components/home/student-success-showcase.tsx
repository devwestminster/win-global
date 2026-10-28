"use client";

import Image from "next/image";
import {
  type FocusEvent,
  type KeyboardEvent,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./student-success-section.module.css";

const assetRoot = "/assets/home/student-success";

const slides = [
  {
    students: `${assetRoot}/slide-1-students.png`,
    studentsAlt: "WIN students who received offers from partner universities",
    universities: [
      ["Loughborough University", `${assetRoot}/slide-1-loughborough.png`],
      ["University of Exeter", `${assetRoot}/slide-1-exeter.png`],
      ["UNSW Sydney", `${assetRoot}/slide-1-unsw.png`],
      ["Durham University", `${assetRoot}/slide-1-durham.png`],
      ["University of Bath", `${assetRoot}/slide-1-bath.png`],
      ["University of Southampton", `${assetRoot}/slide-1-southampton.png`],
    ],
  },
  {
    students: `${assetRoot}/slide-2-students.png`,
    studentsAlt: "WIN students continuing their education at universities abroad",
    universities: [
      ["University of Bristol", `${assetRoot}/slide-2-bristol.png`],
      ["University of Exeter", `${assetRoot}/slide-2-exeter.png`],
      ["Durham University", `${assetRoot}/slide-2-durham.png`],
      ["University of Bath", `${assetRoot}/slide-2-bath.png`],
      ["University of Surrey", `${assetRoot}/slide-2-surrey.jpg`],
      ["University of Reading", `${assetRoot}/slide-2-reading.png`],
    ],
  },
  {
    students: `${assetRoot}/slide-3-students.png`,
    studentsAlt: "WIN students beginning the next chapter of their studies abroad",
    universities: [
      ["Oregon State University", `${assetRoot}/slide-3-oregon.jpg`],
      ["University of Bath", `${assetRoot}/slide-3-bath.png`],
      ["University of Leeds", `${assetRoot}/slide-3-leeds.png`],
      ["Durham University", `${assetRoot}/slide-3-durham.png`],
      ["University of Bristol", `${assetRoot}/slide-3-bristol.png`],
      ["UNSW Sydney", `${assetRoot}/slide-3-unsw.png`],
    ],
  },
] as const;

function wrapSlide(index: number) {
  return (index + slides.length) % slides.length;
}

export function StudentSuccessShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [hasFocus, setHasFocus] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [interactionEpoch, setInteractionEpoch] = useState(0);
  const pointerStartX = useRef<number | null>(null);
  const isPaused = hasFocus || isHovered;

  function showSlide(index: number) {
    setActiveSlide(wrapSlide(index));
    setInteractionEpoch((current) => current + 1);
  }

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (isPaused || reducedMotion.matches) return;

    const interval = window.setInterval(() => {
      if (!document.hidden) setActiveSlide((current) => wrapSlide(current + 1));
    }, 5500);

    return () => window.clearInterval(interval);
  }, [interactionEpoch, isPaused]);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showSlide(activeSlide - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      showSlide(activeSlide + 1);
    }
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    pointerStartX.current = event.clientX;
  }

  function handlePointerUp(event: PointerEvent<HTMLDivElement>) {
    if (pointerStartX.current === null) return;

    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(distance) < 42) return;
    showSlide(activeSlide + (distance < 0 ? 1 : -1));
  }

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setHasFocus(false);
  }

  return (
    <div className={styles.showcase}>
      <div
        className={styles.carousel}
        role="region"
        aria-roledescription="carousel"
        aria-label="WIN student success stories"
        tabIndex={0}
        onBlur={handleBlur}
        onFocus={() => setHasFocus(true)}
        onKeyDown={handleKeyDown}
        onPointerCancel={() => {
          pointerStartX.current = null;
        }}
        onPointerDown={handlePointerDown}
        onPointerEnter={() => setIsHovered(true)}
        onPointerLeave={() => setIsHovered(false)}
        onPointerUp={handlePointerUp}
      >
        {slides.map((slide, slideIndex) => {
          const isActive = slideIndex === activeSlide;

          return (
            <div
              className={`${styles.slide} ${isActive ? styles.activeSlide : ""}`}
              aria-hidden={!isActive}
              aria-label={`Slide ${slideIndex + 1} of ${slides.length}`}
              aria-roledescription="slide"
              key={slide.students}
              role="group"
            >
              <div
                className={styles.universityGrid}
                role="group"
                aria-label="University partners"
              >
                {slide.universities.map(([university, logo]) => (
                  <div className={styles.universityCard} key={`${slide.students}-${university}`}>
                    <Image
                      src={logo}
                      alt={university}
                      width={133}
                      height={76}
                      sizes="(max-width: 767px) 12vw, (max-width: 1100px) 14vw, 133px"
                    />
                  </div>
                ))}
              </div>

              <Image
                className={styles.studentsImage}
                src={slide.students}
                alt={slide.studentsAlt}
                width={2172}
                height={724}
                sizes="(max-width: 767px) 96vw, (max-width: 1300px) 94vw, 1236px"
              />
            </div>
          );
        })}

        <button
          className={`${styles.carouselButton} ${styles.previousButton}`}
          type="button"
          aria-label="Show previous student group"
          onClick={() => showSlide(activeSlide - 1)}
        >
          <Image src={`${assetRoot}/arrow-left.svg`} alt="" width={106} height={106} />
        </button>
        <button
          className={`${styles.carouselButton} ${styles.nextButton}`}
          type="button"
          aria-label="Show next student group"
          onClick={() => showSlide(activeSlide + 1)}
        >
          <Image src={`${assetRoot}/arrow-right.svg`} alt="" width={106} height={106} />
        </button>
      </div>
    </div>
  );
}
