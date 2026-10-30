import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./usa-study.module.css";

export function UsaStudyPage() {
  return <CountryStudyPage config={countryStudyConfigs.usa} styles={styles} />;
}
