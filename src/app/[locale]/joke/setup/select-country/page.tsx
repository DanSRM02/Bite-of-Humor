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
    if (selectedCountry && selectedLanguage) {
      const newLocale = `${selectedLanguage}-${selectedCountry}`;
      const newPath = pathname.replace("/select-country", "/final");
      router.push(newPath, { locale: newLocale });
    }
  };

  const translations = {
    intro: {
      heading: "introduction.heading",
      paragraph: "introduction.paragraph",
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
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <section
        className="bg-white rounded-2xl shadow-lg flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 sm:gap-8 lg:gap-12 p-6 sm:p-8 lg:p-14 w-full max-w-6xl mx-auto"
        aria-label={t("ariaLabels.selectYourCountry")}
      >
        <aside
          className="flex flex-col items-center text-center lg:text-left lg:items-start flex-1 max-w-md lg:max-w-lg"
          aria-label={t("ariaLabels.countrySelectionIntroduction")}
        >
          <LeadIn
            heading={t(translations.intro.heading)}
            paragraph={t(translations.intro.paragraph)}
            isTextRaw
          />
        </aside>
        <article
          className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 w-full lg:w-auto flex-1 max-w-md lg:max-w-lg"
          aria-label={t("ariaLabels.countryOptions")}
        >
          <FormRendered
            inputFields={translations.fields}
            handlerChange={handleSelect}
            variant="inline"
            className="w-full"
          />
          <Button 
            onClick={handleRedirect} 
            size="medium" 
            variant="secondary"
            className="w-full sm:w-auto min-w-[120px]"
          >
            Enter
          </Button>
        </article>
      </section>
    </div>
  );
}

export default SelectCountry;
