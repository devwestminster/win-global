import { countryStudyConfigs } from "@/data/country-study";
import { CountryStudyPage } from "./country-study-page";
import styles from "./new-zealand-study.module.css";

export function NewZealandStudyPage() {
  return (
    <CountryStudyPage
      config={countryStudyConfigs["new-zealand"]}
      styles={styles}
    />
  );
}
