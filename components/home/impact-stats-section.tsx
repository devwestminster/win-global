"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./impact-stats-section.module.css";

const stats = [
  { value: 15, suffix: "+", label: "Years guiding students abroad" },
  { value: 200, suffix: "+", label: "Official university partners" },
  { value: 7, suffix: "", label: "Study destinations worldwide" },
] as const;

export function ImpactStatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState<readonly number[]>(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    let animationFrame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return;
        }

        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setCounts(stats.map((stat) => stat.value));
          return;
        }

        const startedAt = performance.now();
        const duration = 1600;

        function updateCounter(now: number) {
          const progress = Math.min((now - startedAt) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          setCounts(stats.map((stat) => Math.round(stat.value * easedProgress)));

          if (progress < 1) {
            animationFrame = requestAnimationFrame(updateCounter);
          }
        }

        animationFrame = requestAnimationFrame(updateCounter);
      },
      { threshold: 0.25 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.section} aria-label="WIN Education in numbers">
      {stats.map((stat, index) => (
        <Fragment key={stat.label}>
          {index > 0 ? <div className={styles.divider} aria-hidden="true" /> : null}
          <div className={styles.stat}>
            <p className={styles.value}>
              <span aria-hidden="true">
                {counts[index]}
                {stat.suffix}
              </span>
              <span className={styles.srOnly}>
                {stat.value}
                {stat.suffix}
              </span>
            </p>
            <p className={styles.label}>{stat.label}</p>
          </div>
        </Fragment>
      ))}
    </section>
  );
}
