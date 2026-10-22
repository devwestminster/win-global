import Image from "next/image";
import { countryOffices, type OfficeLocation } from "@/data/offices";
import styles from "./offices-accordion.module.css";

function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}

function OfficeContact({ location }: { location: OfficeLocation }) {
  return (
    <article className={styles.location}>
      <div>
        <h3>{location.city}</h3>
        <p className={styles.address}>{location.address}</p>
      </div>

      <div className={styles.contactList}>
        {location.phones.map((phone) => (
          <a className={styles.contactLink} href={phoneHref(phone)} key={phone}>
            <span className={styles.contactIcon} aria-hidden="true">
              <Image src="/assets/offices/phone.svg" alt="" width={17} height={17} />
            </span>
            <span>{phone}</span>
          </a>
        ))}
        <a className={styles.contactLink} href={`mailto:${location.email}`}>
          <span className={styles.contactIcon} aria-hidden="true">
            <Image src="/assets/offices/mail.svg" alt="" width={16} height={16} />
          </span>
          <span>{location.email}</span>
        </a>
      </div>
    </article>
  );
}

export function OfficesAccordion() {
  return (
    <div className={styles.list}>
      {countryOffices.map((office) => {
        const panelId = `office-panel-${office.slug}`;

        return (
          <details className={styles.card} key={office.slug} open={office.slug === "pakistan"}>
            <summary className={styles.summary} aria-controls={panelId}>
              <span className={styles.countryHeading}>
                <span className={styles.flagFrame} aria-hidden="true">
                  <Image
                    className={styles.flag}
                    src={office.flag}
                    alt=""
                    width={50}
                    height={50}
                  />
                </span>
                <span>{office.country}</span>
              </span>
              <Image
                className={styles.chevron}
                src="/assets/offices/chevron-down.svg"
                alt=""
                width={44}
                height={44}
              />
            </summary>

            <div className={styles.panel} id={panelId}>
              <div className={styles.locations}>
                {office.locations.map((location) => (
                  <OfficeContact location={location} key={location.city} />
                ))}
              </div>

              <a
                className={styles.websiteLink}
                href={office.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit WIN Education ${office.country} website (opens in a new tab)`}
              >
                Go to Website
              </a>
            </div>
          </details>
        );
      })}
    </div>
  );
}
