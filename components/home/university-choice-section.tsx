"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteConfig } from "@/data/site";
import { ActionLink } from "@/components/ui/action-link";
import styles from "./university-choice-section.module.css";

const fairImages = [
  { src: "/assets/home/university-choice/fair-01.jpg", className: styles.image01 },
  { src: "/assets/home/university-choice/fair-02.jpg", className: styles.image02 },
  { src: "/assets/home/university-choice/fair-03.jpg", className: styles.image03 },
  { src: "/assets/home/university-choice/fair-04.jpg", className: styles.image04 },
  { src: "/assets/home/university-choice/fair-05.jpg", className: styles.image05 },
  { src: "/assets/home/university-choice/fair-06.jpg", className: styles.image06 },
  { src: "/assets/home/university-choice/fair-07.jpg", className: styles.image07 },
  { src: "/assets/home/university-choice/fair-08.jpg", className: styles.image08 },
  { src: "/assets/home/university-choice/fair-09.jpg", className: styles.image09 },
  { src: "/assets/home/university-choice/fair-10.jpg", className: styles.image10 },
] as const;

function clamp(value: number, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max);
}

function smoothstep(start: number, end: number, value: number) {
  const progress = clamp((value - start) / (end - start));
  return progress * progress * (3 - 2 * progress);
}

export function UniversityChoiceSection() {
  const trackRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      const trackRect = track.getBoundingClientRect();
      const scrollRange = Math.max(track.offsetHeight - window.innerHeight, 1);
      const progress = reducedMotion.matches ? 0.5 : clamp(-trackRect.top / scrollRange);
      const focusProgress = reducedMotion.matches ? 1 : smoothstep(0.04, 0.38, progress);
      const detailProgress = reducedMotion.matches ? 1 : smoothstep(0.2, 0.5, progress);
      const mediaRevealProgress = reducedMotion.matches ? 1 : smoothstep(0.06, 0.38, progress);
      const exitProgress = reducedMotion.matches ? 0 : smoothstep(0.64, 0.88, progress);
      const headingOpacity = clamp(0.2 + focusProgress * 0.8);

      stage.style.setProperty("--content-opacity", (1 - exitProgress).toFixed(3));

      stage.style.setProperty(
        "--heading-y",
        `${Math.round((1 - focusProgress) * 82 - exitProgress * 104)}px`,
      );
      stage.style.setProperty(
        "--heading-blur",
        `${((1 - focusProgress) * 12 + exitProgress * 7).toFixed(2)}px`,
      );
      stage.style.setProperty("--heading-opacity", headingOpacity.toFixed(3));
      stage.style.setProperty(
        "--heading-scale",
        (0.92 + focusProgress * 0.08 - exitProgress * 0.025).toFixed(4),
      );
      stage.style.setProperty("--details-opacity", detailProgress.toFixed(3));
      stage.style.setProperty(
        "--details-y",
        `${Math.round((1 - detailProgress) * 24 - exitProgress * 54)}px`,
      );

      const centeredProgress = progress - 0.5;
      stage.style.setProperty("--drift-up", `${Math.round(centeredProgress * -180)}px`);
      stage.style.setProperty("--drift-up-fast", `${Math.round(centeredProgress * -260)}px`);
      stage.style.setProperty("--drift-down", `${Math.round(centeredProgress * 130)}px`);
      stage.style.setProperty("--drift-down-fast", `${Math.round(centeredProgress * 210)}px`);
      stage.style.setProperty(
        "--media-opacity",
        clamp(mediaRevealProgress * (1 - exitProgress) * 0.88).toFixed(3),
      );
    };

    const requestUpdate = () => {
      if (frameRef.current !== 0) return;

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = 0;
        update();
      });
    };

    const resizeObserver = new ResizeObserver(requestUpdate);
    resizeObserver.observe(track);
    reducedMotion.addEventListener("change", requestUpdate);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();

    return () => {
      window.cancelAnimationFrame(frameRef.current);
      resizeObserver.disconnect();
      reducedMotion.removeEventListener("change", requestUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <section
      className={styles.track}
      aria-labelledby="university-choice-heading"
      data-site-header-hide-region
      ref={trackRef}
    >
      <div className={styles.stage} data-site-header-hide-stage ref={stageRef}>
        <div className={styles.mediaLayer} aria-hidden="true">
          {fairImages.map((image) => (
            <div className={`${styles.media} ${image.className}`} key={image.src}>
              <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 767px) 104px, (max-width: 1100px) 140px, 196px"
              />
              <span className={styles.mediaShade} />
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <p className={styles.eyebrow}>200+ University Partners</p>
          <h2 id="university-choice-heading">
            <span>200+ Leading Universities.</span>
            Find Your Perfect Match.
          </h2>
          <div className={styles.details}>
            <p>
              Compare courses, tuition fees, entry requirements, and scholarships with expert
              guidance tailored to your goals.
            </p>
            <ActionLink href={siteConfig.consultationPath}>Book a free consultation</ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
