import Image from "next/image";
import Link from "next/link";
import { navigation, siteConfig, type NavigationItem } from "@/data/site";
import { ActionLink } from "@/components/ui/action-link";
import styles from "./site-header.module.css";

function NavigationLink({ item }: { item: NavigationItem }) {
  if (!item.children?.length) {
    return (
      <Link className={styles.navLink} href={item.href} aria-current={item.href === "/" ? "page" : undefined}>
        {item.label}
      </Link>
    );
  }

  return (
    <details className={styles.navGroup}>
      <summary>
        <span>{item.label}</span>
        <Image src="/assets/icons/chevron-down.svg" alt="" width={24} height={24} />
      </summary>
      <div className={styles.dropdown}>
        <Link href={item.href}>Explore all</Link>
        {item.children.map((child) => (
          <Link href={child.href} key={child.href}>
            {child.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logo} href="/" aria-label="WIN Education home">
          <Image
            src="/assets/brand/win-logo.svg"
            alt="WIN — One stop service for study abroad"
            width={187}
            height={24}
            style={{ width: "100%", height: "auto" }}
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <NavigationLink item={item} key={item.href} />
          ))}
        </nav>

        <ActionLink className={styles.desktopCta} href={siteConfig.consultationPath}>
          Book a free consultation
        </ActionLink>

        <details className={styles.mobileMenu}>
          <summary aria-label="Open navigation menu">
            <span className={styles.menuLabel}>Menu</span>
            <span className={styles.menuIcon} aria-hidden="true" />
          </summary>
          <nav className={styles.mobilePanel} aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavigationLink item={item} key={item.href} />
            ))}
            <ActionLink href={siteConfig.consultationPath}>Book a free consultation</ActionLink>
          </nav>
        </details>
      </div>
    </header>
  );
}
