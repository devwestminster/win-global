import Link from "next/link";
import { AnimatedWinLogo } from "./animated-win-logo";
import { HeaderNavigation } from "./header-navigation";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="WIN Education home">
          <AnimatedWinLogo />
        </Link>

        <HeaderNavigation />
      </div>
    </header>
  );
}
