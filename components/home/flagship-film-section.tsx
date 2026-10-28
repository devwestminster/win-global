"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./flagship-film-section.module.css";

const VIDEO_SRC = "/assets/home/hero/win-flagship-global-v2.mp4";
const POSTER_SRC = "/assets/home/hero/win-flagship-global-v2-poster.jpg";

export function FlagshipFilmSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasEnteredPlaybackRange, setHasEnteredPlaybackRange] = useState(false);
  const [isWithinPlaybackRange, setIsWithinPlaybackRange] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setPrefersReducedMotion(motionPreference.matches);

    updateMotionPreference();
    motionPreference.addEventListener("change", updateMotionPreference);

    return () => motionPreference.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsWithinPlaybackRange(entry.isIntersecting);

        if (entry.isIntersecting) {
          setHasEnteredPlaybackRange(true);
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !hasEnteredPlaybackRange) {
      return;
    }

    if (prefersReducedMotion || !isWithinPlaybackRange) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      // The poster remains visible if the browser blocks autoplay.
    });
  }, [hasEnteredPlaybackRange, isWithinPlaybackRange, prefersReducedMotion]);

  const shouldLoadVideo = hasEnteredPlaybackRange && !prefersReducedMotion;

  return (
    <div ref={containerRef} className={styles.section} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay={shouldLoadVideo}
        loop
        muted
        playsInline
        poster={POSTER_SRC}
        preload={shouldLoadVideo ? "metadata" : "none"}
        tabIndex={-1}
      >
        {shouldLoadVideo ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
      </video>
    </div>
  );
}
