import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./singapore-study.module.css";

export function SingaporeStudyPage() {
  return <CountryStudyPage config={countryStudyConfigs.singapore} styles={styles} />;
}
