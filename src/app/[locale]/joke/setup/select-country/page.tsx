"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { ChangeEvent, useState } from "react";
import { COUNTRIES, SUPPORTED_LANGS } from "@/utils/const";
import { useRouter } from "next/navigation";
import { inputTypes } from "@/types/baseFieldTypes";
import FormRendered from "@/components/dataDisplay/formRendered";
import Button from "@/components/inputs/button";

function SelectCountry() {
  const router = useRouter();
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
      const newLangParam = `${selectedLanguage}-${selectedCountry}`;
      const currentPath = location.pathname.split("/");
      currentPath[1] = newLangParam;
      const pathToRedirect = `/${currentPath.slice(1, -1).join("/")}/final`;      
      router.push(pathToRedirect);
    }
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
        placeholder: "SelectCountry.searchCountryControls.selectPlaceholder",
        disableLabel: "SelectCountry.searchCountryControls.disableLabel",
        options: COUNTRIES.map((country) => ({
          label: `SelectCountry.countryNames.${country.code}`,
          value: country.code,
        })),
        color: "secondary",
      },
      {
        label: "SelectCountry.searchLanguageControls.selectLabel",
        type: "select" as inputTypes,
        id: "language",
        placeholder: "SelectCountry.searchLanguageControls.selectPlaceholder",
        disableLabel: "SelectCountry.searchLanguageControls.disableLabel",
        options: SUPPORTED_LANGS.map((lang) => ({
          label: `SelectCountry.languagesNames.${lang}`,
          value: lang,
        })),
        color: "secondary",
      },
    ],
  };

  return (
    <section
      className="bg-white rounded-2xl shadow-lg flex justify-center items-center flex-wrap gap-10 p-14"
      aria-label="Select your country"
    >
      <aside
        className="flex flex-col items-center gap-10"
        aria-label="Country selection introduction"
      >
        <LeadIn
          heading={translations.intro.heading}
          paragraph={translations.intro.paragraph}
        />
      </aside>
      <article
        className="flex justify-center items-center flex-wrap gap-10"
        aria-label="Country options"
      >
        <FormRendered
          inputFields={translations.fields}
          handlerChange={handleSelect}
        />
        <Button onClick={handleRedirect} size="medium" variant="outline">
          Enter
        </Button>
      </article>
    </section>
  );
}

export default SelectCountry;
