"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./SelectCountry.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { COUNTRIES, SUPPORTED_LANGS } from "@/utils/const";
import { redirect } from "next/navigation";
import SelectField from "@/components/inputs/field/select";

function SelectCountry() {
  const { t } = useTranslation();    
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languageNames = useMemo(
    () =>
      Object.fromEntries(
        SUPPORTED_LANGS.map((lang) => [
          lang,
          t(`SelectCountry.languagesNames.${lang}`),
        ])
      ),
    [t]
  );

  const countryNames = useMemo(
    () =>
      Object.fromEntries(
        COUNTRIES.map((country) => [
          country.code,
          t(`SelectCountry.countryNames.${country.code}`),
        ])
      ),
    [t]
  );

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("SelectCountry.introduction.heading"),
        paragraph: t("SelectCountry.introduction.paragraph"),
      },
      country: {
        label: t("SelectCountry.searchCountryControls.selectLabel"),
        placeholder: t("SelectCountry.searchCountryControls.selectPlaceholder"),
      },
      language: {
        label: t("SelectCountry.searchLanguageControls.selectLabel"),
        placeholder: t(
          "SelectCountry.searchLanguageControls.selectPlaceholder"
        ),
        names: languageNames,
      },
      countryNames: countryNames,
    }),
    [t, languageNames, countryNames]
  );

  useEffect(() => {
    if (selectedCountry && selectedLanguage) {
      const newLangParam = `${selectedLanguage}-${selectedCountry}`;
      const currentPath = location.pathname.split("/");
      currentPath[1] = newLangParam;
      const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;
      redirect(pathToRedirect);
    }
  }, [selectedCountry, selectedLanguage, location]);

  const renderCountryOptions = () => [
    <option key="placeholder" value="" disabled>
      {translations.country.placeholder}
    </option>,
    ...COUNTRIES.map((country) => (
      <option key={country.code} value={country.code}>
        {translations.countryNames[country.code]}
      </option>
    )),
  ];

  const renderLanguageOptions = () => [
    <option key="placeholder" value="" disabled>
      {translations.language.placeholder}
    </option>,
    ...SUPPORTED_LANGS.map((lang) => (
      <option key={lang} value={lang}>
        {translations.language.names[lang]}
      </option>
    )),
  ];

  return (
    <>
      <section
        // className={classes["select-country"]}
        aria-label="Select your country"
        tabIndex={0}
      >
        <aside
        //   className={classes["select-country__aside"]}
          aria-label="Country selection introduction"
          tabIndex={0}
        >
          <LeadIn
            heading={translations.intro.heading}
            paragraph={translations.intro.paragraph}
          />
        </aside>
        <article
        //   className={classes["select-country__article"]}
          aria-label="Country options"
          tabIndex={0}
        >
          <SelectField
            color="secondary"
            id="country-select"
            label={translations.country.label}            
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            required
            aria-label={translations.country.label}
          >
            {renderCountryOptions()}
          </SelectField>
          <SelectField
            color="secondary"
            id="language-select"
            label={translations.language.label}            
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
            }}
            required
            aria-label={translations.language.label}
          >
            {renderLanguageOptions()}
          </SelectField>
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
