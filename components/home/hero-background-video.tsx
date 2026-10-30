"use client";

import { useEffect, useRef } from "react";
import { ResponsivePicture } from "@/components/ui/responsive-picture";
import styles from "./hero-section.module.css";

const H264_VIDEO_SRC = "/assets/home/hero/win-flagship-global.mp4";
const HEVC_VIDEO_SRC = "/assets/home/hero/win-flagship-global-hevc.mp4";

type NavigatorWithConnection = Navigator & {
  connection?: {
    saveData?: boolean;
  };
};

export function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = (navigator as NavigatorWithConnection).connection?.saveData === true;

    const updatePlayback = () => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      if (motionPreference.matches || saveData) {
        video.pause();
        video.currentTime = 0;
        return;
      }

      void video.play().catch(() => {
        // The optimized poster remains visible if the browser blocks autoplay.
      });
    };

    updatePlayback();
    motionPreference.addEventListener("change", updatePlayback);

    return () => {
      motionPreference.removeEventListener("change", updatePlayback);
    };
  }, []);

  return (
    <div className={styles.backgrounds} aria-hidden="true">
      <ResponsivePicture
        alt=""
        className={styles.backgroundPoster}
        fetchPriority="high"
        fill
        fallback={{
          height: 1080,
          quality: 90,
          sizes: "100vw",
          src: "/assets/home/hero/win-flagship-poster.jpg",
          width: 1920,
        }}
        loading="eager"
        sources={[
          {
            height: 1080,
            media: "(max-width: 767px)",
            quality: 90,
            sizes: "100vw",
            src: "/assets/home/hero/win-flagship-poster-mobile.jpg",
            width: 864,
          },
        ]}
      />
      <video
        ref={videoRef}
        autoPlay
        className={styles.backgroundVideo}
        height={1080}
        loop
        muted
        playsInline
        preload="none"
        tabIndex={-1}
        width={1920}
      >
        <source src={HEVC_VIDEO_SRC} type='video/mp4; codecs="hvc1"' />
        <source src={H264_VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
