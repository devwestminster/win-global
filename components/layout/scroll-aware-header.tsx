"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import styles from "./site-header.module.css";

const heroOverlayPaths = new Set([
  "/study-abroad/united-kingdom",
  "/study-abroad/australia",
  "/study-abroad/usa",
  "/study-abroad/new-zealand",
  "/study-abroad/singapore",
  "/study-abroad/malaysia",
  "/study-abroad/canada",
]);

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
  const pathname = usePathname();
  const snapshot = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );
  const isScrolled = (snapshot & 1) !== 0;
  const isHidden = (snapshot & 2) !== 0;
  const overlaysHero = heroOverlayPaths.has(pathname);
  const usesLightTone = overlaysHero && !isScrolled;

  return (
    <header
      className={`${styles.header} ${overlaysHero ? styles.headerOverHero : ""} ${isScrolled ? styles.headerScrolled : ""} ${isHidden ? styles.headerHidden : ""}`}
      data-header-tone={usesLightTone ? "light" : undefined}
      aria-hidden={isHidden || undefined}
      inert={isHidden}
    >
      {children}
    </header>
  );
}
