import Image from "next/image";
import { siteConfig } from "@/data/site";
import styles from "./social-rail.module.css";

type SocialItem = {
  label: string;
  href: string;
  icon?: string;
  size?: number;
  text?: string;
};

const socialItems: readonly SocialItem[] = [
  { label: "WhatsApp", href: siteConfig.social.whatsapp, icon: "/assets/icons/whatsapp.svg", size: 27 },
  { label: "LINE", href: siteConfig.social.line, icon: "/assets/icons/line.svg", size: 30 },
  { label: "Facebook", href: siteConfig.social.facebook, text: "f" },
  { label: "YouTube", href: siteConfig.social.youtube, icon: "/assets/icons/youtube.svg", size: 26 },
] as const;

export function SocialRail() {
  return (
    <aside className={styles.rail} aria-label="Contact and social media">
      {socialItems.map((item) => {
        const content = item.icon ? (
          <Image src={item.icon} alt="" width={item.size ?? 26} height={item.size ?? 26} />
        ) : (
          <span className={styles.facebookGlyph} aria-hidden="true">{item.text}</span>
        );

        if (!item.href) {
          return (
            <span className={styles.item} aria-label={`${item.label} link coming soon`} aria-disabled="true" key={item.label}>
              {content}
            </span>
          );
        }

        return (
          <a className={styles.item} href={item.href} aria-label={item.label} key={item.label} rel="noreferrer" target="_blank">
            {content}
          </a>
        );
      })}
    </aside>
  );
}
