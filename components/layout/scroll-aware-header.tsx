"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import styles from "./site-header.module.css";

function subscribeToScroll(updateSnapshot: () => void) {
  let frameId = 0;

  const requestUpdate = () => {
    if (frameId !== 0) return;

    frameId = window.requestAnimationFrame(() => {
      frameId = 0;
      updateSnapshot();
    });
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });

  return () => {
    window.cancelAnimationFrame(frameId);
    window.removeEventListener("scroll", requestUpdate);
    window.removeEventListener("resize", requestUpdate);
  };
}

function getScrollSnapshot() {
  const regions = document.querySelectorAll<HTMLElement>("[data-site-header-hide-region]");
  const headerHeight = document.querySelector<HTMLElement>("header")?.offsetHeight ?? 0;
  let isHidden = false;

  for (const region of regions) {
    const stage = region.querySelector<HTMLElement>("[data-site-header-hide-stage]");
    if (!stage) continue;

    const regionRect = region.getBoundingClientRect();
    const stageStyles = window.getComputedStyle(stage);

    if (stageStyles.position !== "sticky") {
      isHidden = regionRect.top <= headerHeight && regionRect.bottom > headerHeight;
    } else {
      const stickyTop = Number.parseFloat(stageStyles.top) || 0;
      isHidden =
        regionRect.top <= stickyTop && regionRect.bottom >= stickyTop + stage.offsetHeight;
    }

    if (isHidden) break;
  }

  return (window.scrollY > 0 ? 1 : 0) | (isHidden ? 2 : 0);
}

function getServerScrollSnapshot() {
  return 0;
}

export function ScrollAwareHeader({ children }: { children: ReactNode }) {
  const snapshot = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
  const isScrolled = (snapshot & 1) !== 0;
  const isHidden = (snapshot & 2) !== 0;

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""} ${isHidden ? styles.headerHidden : ""}`}
      aria-hidden={isHidden || undefined}
      inert={isHidden}
    >
      {children}
    </header>
  );
}
