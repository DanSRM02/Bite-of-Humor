"use client";
import { SUPPORTED_LANGS } from "@/utils/constants";
import SelectField from "../field/select";
import { ChangeEvent, useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleSelect = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const fieldName = e.target.name;
    if (fieldName === "language") {
      setSelectedLanguage(e.target.value);
    }
  };

  useEffect(() => {
    if (selectedLanguage !== "") {
      const newLocale = `${selectedLanguage}-${locale.split("-")[1]}`;
      router.replace(pathname, { locale: newLocale });
      setSelectedLanguage("");
    }
  }, [selectedLanguage, locale, pathname, router]);

  const options = SUPPORTED_LANGS.map((lang) => ({
    label: `SelectCountry.languagesNames.${lang.value}`,
    value: lang.value,
    nameInput: `SelectCountry.languagesNames.${lang.value}`,
    isTextRaw: false,
  }));

  return (
    <SelectField
      deactivateLabel
      id="language"
      nameInput="language"
      onChange={handleSelect}
      options={options}
      color="secondary"
      placeholder="SelectCountry.searchLanguageControls.selectPlaceholder"
      disableLabel="SelectCountry.searchLanguageControls.disableLabel"
    />
  );
}
