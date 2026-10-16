import Link from "next/link";
import { AnimatedWinLogo } from "./animated-win-logo";
import { HeaderNavigation } from "./header-navigation";
import { ScrollAwareHeader } from "./scroll-aware-header";
import styles from "./site-header.module.css";

export function SiteHeader() {
  return (
    <ScrollAwareHeader>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="WIN Education home">
          <AnimatedWinLogo />
        </Link>

        <HeaderNavigation />
      </div>
    </ScrollAwareHeader>
  );
}
