import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./canada-study.module.css";

export function CanadaStudyPage() {
  return <CountryStudyPage config={countryStudyConfigs.canada} styles={styles} />;
}
