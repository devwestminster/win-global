"use client";

import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import styles from "./site-header.module.css";

function subscribeToScroll(updateSnapshot: () => void) {
  window.addEventListener("scroll", updateSnapshot, { passive: true });
  return () => window.removeEventListener("scroll", updateSnapshot);
}

function getScrollSnapshot() {
  return window.scrollY > 0;
}

function getServerScrollSnapshot() {
  return false;
}

export function ScrollAwareHeader({ children }: { children: ReactNode }) {
  const isScrolled = useSyncExternalStore(
    subscribeToScroll,
    getScrollSnapshot,
    getServerScrollSnapshot,
  );

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      {children}
    </header>
  );
}
