"use client";

import Image from "next/image";
import { useState } from "react";
import { universityCountries } from "@/data/universities";
import styles from "./uk-study-page.module.css";

const ukPartners = universityCountries.find(({ id }) => id === "uk")?.logos ?? [];

export function UkPartnerLogos() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={styles.partnerExplorer}>
      <ul className={styles.partnerGrid} data-expanded={isExpanded} id="uk-partner-logos">
        {ukPartners.map((partner) => (
          <li className={styles.partnerCard} key={partner.name}>
            <Image
              src={partner.src}
              alt={partner.name}
              width={180}
              height={104}
              sizes="(max-width: 600px) 38vw, (max-width: 1024px) 27vw, 180px"
            />
          </li>
        ))}
      </ul>

      <button
        className={styles.partnerToggle}
        type="button"
        aria-controls="uk-partner-logos"
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Show fewer university partners" : "Show all university partners"}
        onClick={() => setIsExpanded((value) => !value)}
      >
        <Image
          className={isExpanded ? styles.partnerToggleExpanded : ""}
          src="/assets/home/universities/show-more.svg"
          alt=""
          width={106}
          height={106}
        />
      </button>
    </div>
  );
}
