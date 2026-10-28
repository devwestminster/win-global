"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navigation,
  siteConfig,
  type NavigationChild,
  type NavigationItem,
} from "@/data/site";
import { ActionLink } from "@/components/ui/action-link";
import styles from "./site-header.module.css";

const navigationItems: readonly NavigationItem[] = navigation;
const subscribeToHydration = () => () => undefined;
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

function isPathActive(pathname: string, href: string) {
  return href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
}

function DirectLink({
  item,
  pathname,
  onNavigate,
}: {
  item: NavigationItem;
  pathname: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      className={styles.navLink}
      href={item.href}
      aria-current={isPathActive(pathname, item.href) ? "page" : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

function ChildLink({
  child,
  pathname,
  onNavigate,
}: {
  child: NavigationChild;
  pathname: string;
  onNavigate: () => void;
}) {
  if (child.external) {
    return (
      <a
        href={child.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${child.label} (opens in a new tab)`}
        onClick={onNavigate}
      >
        {child.label}
      </a>
    );
  }

  return (
    <Link
      href={child.href}
      aria-current={pathname === child.href ? "page" : undefined}
      onClick={onNavigate}
    >
      {child.label}
    </Link>
  );
}

export function HeaderNavigation() {
  const pathname = usePathname();
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const activePathname = hydrated ? pathname : "";
  const [desktopMenu, setDesktopMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const desktopTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function closeDesktopMenu(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setDesktopMenu(null);
    }

    function closeWithEscape(event: globalThis.KeyboardEvent) {
      if (event.key !== "Escape") return;

      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
        requestAnimationFrame(() => mobileToggleRef.current?.focus());
      } else if (desktopMenu) {
        setDesktopMenu(null);
        requestAnimationFrame(() => desktopTriggerRef.current?.focus());
      }
    }

    document.addEventListener("pointerdown", closeDesktopMenu);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDesktopMenu);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, [desktopMenu, mobileMenuOpen]);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => mobileCloseRef.current?.focus());

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1101px)");

    function resetMenusForViewport() {
      if (desktopMedia.matches) {
        setMobileMenuOpen(false);
        setMobileSubmenu(null);
      } else {
        setDesktopMenu(null);
      }
    }

    desktopMedia.addEventListener("change", resetMenusForViewport);
    return () => desktopMedia.removeEventListener("change", resetMenusForViewport);
  }, []);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
    setMobileSubmenu(null);
    requestAnimationFrame(() => mobileToggleRef.current?.focus());
  }

  function trapDialogFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusable = Array.from(
      event.currentTarget.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable.at(0);
    const last = focusable.at(-1);

    if (!first || !last) return;
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div className={styles.navigationShell} ref={rootRef}>
      <nav className={styles.desktopNav} aria-label="Primary navigation">
        {navigationItems.map((item) => {
          if (!item.children?.length) {
            return <DirectLink item={item} pathname={activePathname} key={item.href} />;
          }

          const menuId = `desktop-menu-${item.href.replaceAll("/", "-")}`;
          const isOpen = desktopMenu === item.href;

          return (
            <div className={styles.navGroup} key={item.href}>
              <button
                type="button"
                aria-controls={menuId}
                aria-expanded={isOpen}
                data-current={isPathActive(activePathname, item.href) || undefined}
                onClick={(event) => {
                  desktopTriggerRef.current = event.currentTarget;
                  setDesktopMenu(isOpen ? null : item.href);
                }}
              >
                <span>{item.label}</span>
                <span className={styles.chevron} aria-hidden="true" />
              </button>

              {isOpen ? (
                <div className={styles.dropdown} id={menuId}>
                  {item.children.map((child) => (
                    <ChildLink
                      child={child}
                      key={child.href}
                      pathname={activePathname}
                      onNavigate={() => setDesktopMenu(null)}
                    />
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </nav>

      <ActionLink className={styles.desktopCta} href={siteConfig.consultationPath}>
        Contact us
      </ActionLink>

      <button
        className={styles.mobileToggle}
        type="button"
        aria-label="Open navigation menu"
        aria-controls="mobile-navigation"
        aria-expanded={mobileMenuOpen}
        ref={mobileToggleRef}
        onClick={() => setMobileMenuOpen(true)}
      >
        <span className={styles.menuIcon} aria-hidden="true" />
      </button>

      {mobileMenuOpen && hydrated
        ? createPortal(
            <div
              className={styles.mobileOverlay}
              id="mobile-navigation"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              onKeyDown={trapDialogFocus}
            >
              <div className={styles.mobileOverlayInner}>
                <div className={styles.mobileTopbar}>
                  <Link
                    className={styles.mobileLogo}
                    href="/"
                    aria-label="WIN Education home"
                    onClick={closeMobileMenu}
                  >
                    <span className={styles.mobileLogoImage} aria-hidden="true" />
                  </Link>
                  <button
                    className={styles.mobileClose}
                    type="button"
                    aria-label="Close navigation menu"
                    ref={mobileCloseRef}
                    onClick={closeMobileMenu}
                  >
                    <span aria-hidden="true" />
                  </button>
                </div>

                <nav className={styles.mobileNav} aria-label="Mobile navigation">
                  {navigationItems.map((item) => {
                    if (!item.children?.length) {
                      return (
                        <div className={styles.mobileNavRow} key={item.href}>
                          <DirectLink
                            item={item}
                            pathname={activePathname}
                            onNavigate={closeMobileMenu}
                          />
                        </div>
                      );
                    }

                    const submenuId = `mobile-menu-${item.href.replaceAll("/", "-")}`;
                    const isOpen = mobileSubmenu === item.href;

                    return (
                      <div className={styles.mobileNavRow} key={item.href}>
                        <button
                          className={styles.mobileAccordionButton}
                          type="button"
                          aria-controls={submenuId}
                          aria-expanded={isOpen}
                          data-current={isPathActive(activePathname, item.href) || undefined}
                          onClick={() => setMobileSubmenu(isOpen ? null : item.href)}
                        >
                          <span>{item.label}</span>
                          <span className={styles.chevron} aria-hidden="true" />
                        </button>

                        {isOpen ? (
                          <div className={styles.mobileSubmenu} id={submenuId}>
                            {item.children.map((child) => (
                              <ChildLink
                                child={child}
                                key={child.href}
                                pathname={activePathname}
                                onNavigate={closeMobileMenu}
                              />
                            ))}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </nav>

                <ActionLink
                  className={styles.mobileCta}
                  href={siteConfig.consultationPath}
                  onClick={closeMobileMenu}
                >
                  Book a free consultation
                </ActionLink>
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
