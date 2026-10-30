"use client";

import Image from "next/image";
import { useId, useState } from "react";

type PartnerLogo = { name: string; src: string };
type PartnerStyles = {
  partnerExplorer: string;
  partnerGrid: string;
  partnerCard: string;
  partnerToggle: string;
  partnerToggleExpanded: string;
};

export function CountryPartnerLogos({
  country,
  logos,
  styles,
}: {
  country: string;
  logos: readonly PartnerLogo[];
  styles: PartnerStyles;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const listId = useId();

  return (
    <div className={styles.partnerExplorer}>
      <ul className={styles.partnerGrid} data-expanded={isExpanded} id={listId}>
        {logos.map((partner) => (
          <li className={styles.partnerCard} key={`${country}-${partner.name}`}>
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

      {logos.length > 8 ? (
        <button
          className={styles.partnerToggle}
          type="button"
          aria-controls={listId}
          aria-expanded={isExpanded}
          aria-label={isExpanded ? `Show fewer ${country} partners` : `Show all ${country} partners`}
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
      ) : null}
    </div>
  );
}
