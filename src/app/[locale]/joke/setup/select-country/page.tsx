"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { ChangeEvent, useState } from "react";
import { COUNTRIES, SUPPORTED_LANGS } from "@/utils/constants";
import { inputTypes } from "@/types/baseFieldTypes";
import FormRendered from "@/components/dataDisplay/formRendered";
import Button from "@/components/inputs/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

function SelectCountry() {
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("SelectCountry");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const handleSelect = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name;
    if (fieldName === "country") {
      setSelectedCountry(e.target.value);
    }
    if (fieldName === "language") {
      setSelectedLanguage(e.target.value);
    }
  };

  const handleRedirect = () => {
    const newLocale = `${selectedLanguage}-${selectedCountry}`;
    const newPath = pathname.replace("/select-country", "/final");
    router.push(newPath, { locale: newLocale });
  };

  const translations = {
    intro: {
      heading: "SelectCountry.introduction.heading",
      paragraph: "SelectCountry.introduction.paragraph",
    },
    fields: [
      {
        label: "SelectCountry.searchCountryControls.selectLabel",
        type: "select" as inputTypes,
        id: "country",
        nameInput: "country",
        placeholder: "SelectCountry.searchCountryControls.selectPlaceholder",
        disableLabel: "SelectCountry.searchCountryControls.disableLabel",
        options: COUNTRIES.map((country) => ({
          label: `SelectCountry.countryNames.${country.value}`,
          value: country.value,
        })),
        color: "secondary",
      },
      {
        label: "SelectCountry.searchLanguageControls.selectLabel",
        type: "select" as inputTypes,
        id: "language",
        nameInput: "language",
        placeholder: "SelectCountry.searchLanguageControls.selectPlaceholder",
        disableLabel: "SelectCountry.searchLanguageControls.disableLabel",
        options: SUPPORTED_LANGS.map((lang) => ({
          label: `SelectCountry.languagesNames.${lang.value}`,
          value: lang.value,
        })),
        color: "secondary",
      },
    ],
  };

  return (
    <section
      className="bg-white rounded-2xl shadow-lg flex justify-center items-center flex-wrap gap-10 p-14"
      aria-label={t("ariaLabels.selectYourCountry")}
    >
      <aside
        className="flex flex-col items-center gap-10"
        aria-label={t("ariaLabels.countrySelectionIntroduction")}
      >
        <LeadIn
          heading={t(translations.intro.heading)}
          paragraph={t(translations.intro.paragraph)}
        />
      </aside>
      <article
        className="flex justify-center items-center flex-wrap gap-10"
        aria-label={t("ariaLabels.countryOptions")}
      >
        <FormRendered
          inputFields={translations.fields}
          handlerChange={handleSelect}
        />
        <Button onClick={handleRedirect} size="medium" variant="secondary">
          Enter
        </Button>
      </article>
    </section>
  );
}

export default SelectCountry;
