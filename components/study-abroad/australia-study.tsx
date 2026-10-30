import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./australia-study.module.css";

export function AustraliaStudyPage() {
  return <CountryStudyPage config={countryStudyConfigs.australia} styles={styles} />;
}
