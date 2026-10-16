import styles from "./animated-win-logo.module.css";

const logoPath = "/assets/brand/win-logo.svg";

export function AnimatedWinLogo() {
  return (
    <svg
      className={styles.logo}
      viewBox="0 0 187 23.2257"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <mask
          id="win-logo-draw-mask"
          x="0"
          y="0"
          width="56"
          height="23.2257"
          maskUnits="userSpaceOnUse"
        >
          <path
            className={styles.drawW}
            d="M2 1.4 9.8 21 14.2 5.4 21.3 21 26 1.4"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            pathLength="1"
          />
          <path
            className={styles.drawI}
            d="M32.3 1.2v20.2"
            fill="none"
            stroke="#fff"
            strokeLinecap="square"
            strokeWidth="6"
            pathLength="1"
          />
          <path
            className={styles.drawN}
            d="M40.7 21V2.1L53.6 21V1.4"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="8"
            pathLength="1"
          />
        </mask>

        <clipPath id="win-logo-tagline-clip">
          <rect x="60" y="0" width="127" height="23.2257" />
        </clipPath>
      </defs>

      <image
        href={logoPath}
        width="187"
        height="23.2257"
        preserveAspectRatio="none"
        mask="url(#win-logo-draw-mask)"
      />
      <image
        className={styles.tagline}
        href={logoPath}
        width="187"
        height="23.2257"
        preserveAspectRatio="none"
        clipPath="url(#win-logo-tagline-clip)"
      />
    </svg>
  );
}
