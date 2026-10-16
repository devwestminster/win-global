"use client";

import { useEffect, useRef } from "react";
import styles from "./hero-section.module.css";

const VIDEO_SRC = "/assets/home/hero/win-flagship-global.mp4";
const POSTER_SRC = "/assets/home/hero/win-flagship-poster.jpg";

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePlayback = () => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      if (motionPreference.matches) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The poster remains visible if the browser blocks autoplay.
      });
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);

    return () => motionPreference.removeEventListener("change", updatePlayback);
  }, []);

  return (
    <div className={styles.backgrounds} aria-hidden="true">
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        loop
        muted
        playsInline
        poster={POSTER_SRC}
        preload="metadata"
        tabIndex={-1}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
