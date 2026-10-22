"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type KeyboardEvent,
  type TransitionEvent,
  useId,
  useRef,
  useState,
} from "react";
import { type UniversityCountry, universityCountries } from "@/data/universities";
import styles from "./university-partners-section.module.css";

function calculateGridHeight(itemCount: number, columns: number, cardHeight: number, gap: number) {
  const rows = Math.ceil(itemCount / columns);

  return rows > 0 ? rows * cardHeight + (rows - 1) * gap : 0;
}

export function UniversityPartnerTabs() {
  const [activeCountryId, setActiveCountryId] = useState<UniversityCountry["id"]>(
    universityCountries[0].id,
  );
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const tabScrollerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const panelId = useId();
  const activeCountry =
    universityCountries.find(({ id }) => id === activeCountryId) ?? universityCountries[0];
  const hasLogos = activeCountry.logos.length > 0;
  const showAllLogos = isExpanded || isCollapsing;
  const gridStyle = {
    "--expanded-height-desktop": `${calculateGridHeight(activeCountry.logos.length, 4, 152, 32)}px`,
    "--expanded-height-tablet": `${calculateGridHeight(activeCountry.logos.length, 3, 152, 20)}px`,
    "--expanded-height-mobile": `${calculateGridHeight(activeCountry.logos.length, 2, 116, 12)}px`,
  } as CSSProperties;
  const toggleClassName = [
    styles.toggle,
    activeCountry.logos.length <= 8 ? styles.noDesktopOverflow : "",
    activeCountry.logos.length <= 6 ? styles.noTabletOverflow : "",
    activeCountry.logos.length <= 4 ? styles.noMobileOverflow : "",
  ]
    .filter(Boolean)
    .join(" ");

  function scrollTabIntoView(index: number) {
    const scroller = tabScrollerRef.current;
    const tab = tabRefs.current[index];

    if (!scroller || !tab || scroller.scrollWidth <= scroller.clientWidth) return;

    const centeredPosition = tab.offsetLeft - (scroller.clientWidth - tab.offsetWidth) / 2;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    scroller.scrollTo({
      left: centeredPosition,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }

  function selectCountry(id: (typeof universityCountries)[number]["id"], index: number) {
    setActiveCountryId(id);
    setIsExpanded(false);
    setIsCollapsing(false);
    scrollTabIntoView(index);
  }

  function toggleLogos() {
    if (isExpanded) {
      setIsCollapsing(true);
      setIsExpanded(false);
      return;
    }

    setIsCollapsing(false);
    setIsExpanded(true);
  }

  function handleGridTransitionEnd(event: TransitionEvent<HTMLUListElement>) {
    if (event.propertyName === "max-height" && !isExpanded) {
      setIsCollapsing(false);
    }
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % universityCountries.length;
    else if (event.key === "ArrowLeft")
      nextIndex = (index - 1 + universityCountries.length) % universityCountries.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = universityCountries.length - 1;
    else return;

    event.preventDefault();
    const nextCountry = universityCountries[nextIndex];
    selectCountry(nextCountry.id, nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className={styles.explorer}>
      <div className={styles.tabScroller} ref={tabScrollerRef}>
        <div className={styles.tabs} role="tablist" aria-label="University partners by country">
          {universityCountries.map((country, index) => {
            const isActive = country.id === activeCountry.id;

            return (
              <button
                className={`${styles.tab} ${isActive ? styles.activeTab : ""}`}
                id={`${panelId}-${country.id}-tab`}
                key={country.id}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                aria-controls={panelId}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => selectCountry(country.id, index)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
              >
                {country.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={styles.panel}
        id={panelId}
        role="tabpanel"
        aria-labelledby={`${panelId}-${activeCountry.id}-tab`}
        tabIndex={0}
      >
        {hasLogos ? (
          <>
            <ul
              className={styles.logoGrid}
              data-expanded={isExpanded}
              data-show-all={showAllLogos}
              id={`${panelId}-logos`}
              style={gridStyle}
              onTransitionEnd={handleGridTransitionEnd}
            >
              {activeCountry.logos.map((logo, index) => (
                <li
                  className={styles.logoCard}
                  key={logo.name}
                  style={{ "--logo-delay": `${(index % 8) * 22}ms` } as CSSProperties}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={180}
                    height={104}
                    sizes="(max-width: 650px) 38vw, (max-width: 1024px) 25vw, 180px"
                  />
                </li>
              ))}
            </ul>

            <button
              className={toggleClassName}
              type="button"
              aria-controls={`${panelId}-logos`}
              aria-expanded={isExpanded}
              aria-label={isExpanded ? "Show fewer university logos" : "Show all university logos"}
              onClick={toggleLogos}
            >
              <span
                className={`${styles.toggleIcon} ${isExpanded ? styles.expandedIcon : ""}`}
                aria-hidden="true"
              />
            </button>
          </>
        ) : (
          <div className={styles.comingSoon} role="status">
            <p>Coming soon</p>
            <span>{activeCountry.label} university partners will be added here.</span>
          </div>
        )}
      </div>
    </div>
  );
}
