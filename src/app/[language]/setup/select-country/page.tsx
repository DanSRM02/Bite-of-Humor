"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./SelectCountry.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useMemo, useState } from "react";
import { COUNTRIES, SUPPORTED_LANGS } from "@/utils/const";
import SelectField from "@/components/inputs/field/select";
import { useRouter } from "next/navigation";

function SelectCountry() {
  const { t } = useTranslation();
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const translations = useMemo(
    () => ({
      intro: {
        heading: t("SelectCountry.introduction.heading"),
        paragraph: t("SelectCountry.introduction.paragraph"),
      },
      country: {
        label: t("SelectCountry.searchCountryControls.selectLabel"),
        placeholder: t("SelectCountry.searchCountryControls.selectPlaceholder"),
        disableLabel: t("SelectCountry.searchCountryControls.disableLabel"),
        options: COUNTRIES.map((country) => ({
          label: t(`SelectCountry.countryNames.${country.code}`),
          value: country.code,
        })),
      },
      language: {
        label: t("SelectCountry.searchLanguageControls.selectLabel"),
        placeholder: t(
          "SelectCountry.searchLanguageControls.selectPlaceholder"
        ),
        disableLabel: t("SelectCountry.searchLanguageControls.disableLabel"),
        options: SUPPORTED_LANGS.map((lang) => ({
          label: t(`SelectCountry.languagesNames.${lang}`),
          value: lang,
        })),
      },
    }),
    [t]
  );

  useEffect(() => {
    if (selectedCountry && selectedLanguage) {
      const newLangParam = `${selectedLanguage}-${selectedCountry}`;
      const currentPath = location.pathname.split("/");

      currentPath[1] = newLangParam;
      const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;
      router.push(pathToRedirect);
    }
  }, [selectedCountry, selectedLanguage, router]);

  return (
    <>
      <section
        className="bg-white rounded-2xl shadow-lg flex justify-center items-center flex-wrap gap-10 p-14"
        aria-label="Select your country"
        tabIndex={0}
      >
        <aside
          className="flex flex-col items-center gap-10"
          aria-label="Country selection introduction"
          tabIndex={0}
        >
          <LeadIn
            heading={translations.intro.heading}
            paragraph={translations.intro.paragraph}
          />
        </aside>
        <article
          className="flex justify-center items-center flex-wrap gap-10"
          aria-label="Country options"
          tabIndex={0}
        >
          <SelectField
            color="secondary"
            id="country-select"
            label={translations.country.label}
            optDisabled={translations.country.disableLabel}
            value={selectedCountry}
            onChange={(e) => {
              setSelectedCountry(e.target.value);
            }}
            required
            aria-label={translations.country.label}
            options={translations.country.options}
          />
          <SelectField
            color="secondary"
            id="language-select"
            label={translations.language.label}
            optDisabled={translations.language.disableLabel}
            value={selectedLanguage}
            onChange={(e) => {
              setSelectedLanguage(e.target.value);
            }}
            required
            aria-label={translations.language.label}
            options={translations.language.options}
          />
        </article>
      </section>
    </>
  );
}

export default SelectCountry;
