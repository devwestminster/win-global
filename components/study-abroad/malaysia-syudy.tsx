import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./malaysia-syudy.module.css";

export function MalaysiaStudyPage() {
  return <CountryStudyPage config={countryStudyConfigs.malaysia} styles={styles} />;
}
