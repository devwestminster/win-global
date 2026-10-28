import Image from "next/image";
import type { CSSProperties } from "react";
import styles from "./office-world-map.module.css";

type MapLocation = {
  key: string;
  x: string;
  y: string;
  order: number;
  label?: string;
  detail?: string;
  labelClassName?: string;
};

const mapLocations: readonly MapLocation[] = [
  { key: "uk", x: "10.66%", y: "31%", order: 0 },
  { key: "lagos", x: "10.8%", y: "63.9%", order: 1 },
  {
    key: "abuja",
    x: "12.3%",
    y: "61%",
    order: 2,
    label: "Nigeria",
    detail: "Lagos & Abuja",
  },
  {
    key: "pakistan",
    x: "44.67%",
    y: "46.16%",
    order: 3,
    label: "Pakistan",
    detail: "Lahore",
    labelClassName: styles.labelPakistan,
  },
  {
    key: "india",
    x: "48.76%",
    y: "48.72%",
    order: 4,
    label: "India",
    detail: "New Delhi",
    labelClassName: styles.labelIndia,
  },
  { key: "thailand", x: "59.69%", y: "63.03%", order: 5, label: "Thailand" },
  {
    key: "taiwan",
    x: "81.35%",
    y: "41.9%",
    order: 6,
    label: "Taiwan",
    detail: "Taipei",
  },
];

type LocationStyle = CSSProperties & {
  "--location-x": string;
  "--location-y": string;
  "--location-order": number;
};

export function OfficeWorldMap() {
  return (
    <div className={styles.map} aria-hidden="true">
      <Image
        className={styles.base}
        src="/assets/offices/map/world-map-base.jpg"
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 80vw, 644px"
        fetchPriority="high"
      />
      <Image
        className={styles.correction}
        src="/assets/offices/map/world-map-correction.svg"
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1100px) 80vw, 644px"
        loading="eager"
        unoptimized
      />

      <div className={styles.coordinateLayer}>
        {mapLocations.map((location) => {
          const locationStyle: LocationStyle = {
            "--location-x": location.x,
            "--location-y": location.y,
            "--location-order": location.order,
          };

          return (
            <span className={styles.location} key={location.key} style={locationStyle}>
              <span className={styles.shadow} />
              <span className={styles.pin} />
              {location.label ? (
                <span className={`${styles.label} ${location.labelClassName ?? ""}`}>
                  <strong>{location.label}</strong>
                  {location.detail ? <small>({location.detail})</small> : null}
                </span>
              ) : null}
            </span>
          );
        })}
      </div>
    </div>
  );
}
