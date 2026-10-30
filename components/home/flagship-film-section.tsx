"use client";

import { useEffect, useRef, useState } from "react";
import { ResponsivePicture } from "@/components/ui/responsive-picture";
import styles from "./flagship-film-section.module.css";

const H264_VIDEO_SRC = "/assets/home/hero/win-flagship-global-v2.mp4";
const HEVC_VIDEO_SRC = "/assets/home/hero/win-flagship-global-v2-hevc.mp4";

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

    void video
      .play()
      .then(() => {
        video.dataset.ready = "true";
      })
      .catch(() => {
        // The poster remains visible if the browser blocks autoplay.
      });
  }, [hasEnteredPlaybackRange, isWithinPlaybackRange, prefersReducedMotion]);

  const shouldLoadVideo = hasEnteredPlaybackRange && !prefersReducedMotion;

  return (
    <div ref={containerRef} className={styles.section} aria-hidden="true">
      <ResponsivePicture
        alt=""
        className={styles.poster}
        fill
        fallback={{
          height: 1080,
          quality: 85,
          sizes: "100vw",
          src: "/assets/home/hero/win-flagship-global-v2-poster.jpg",
          width: 1920,
        }}
        sources={[
          {
            height: 1080,
            media: "(max-width: 767px)",
            quality: 85,
            sizes: "100vw",
            src: "/assets/home/hero/win-flagship-global-v2-poster-mobile.jpg",
            width: 864,
          },
        ]}
      />
      <video
        ref={videoRef}
        className={styles.video}
        autoPlay={shouldLoadVideo}
        height={1080}
        loop
        muted
        onPlaying={(event) => {
          event.currentTarget.dataset.ready = "true";
        }}
        playsInline
        preload={shouldLoadVideo ? "metadata" : "none"}
        tabIndex={-1}
        width={1920}
      >
        {shouldLoadVideo ? (
          <>
            <source src={HEVC_VIDEO_SRC} type='video/mp4; codecs="hvc1"' />
            <source src={H264_VIDEO_SRC} type="video/mp4" />
          </>
        ) : null}
      </video>
    </div>
  );
}
