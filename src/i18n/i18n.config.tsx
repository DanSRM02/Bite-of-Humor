import i18next from "i18next";
import translationEN from "./locales/en/en.json";
import translationDE from "./locales/de/de.json";
import translationFR from "./locales/fr/fr.json";
import LanguageDetector from "i18next-browser-languagedetector";
import { SUPPORTED_LOCALES } from "@/utils/const";
import { initReactI18next } from "react-i18next";

const availableLanguages = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  de: { translation: translationDE },
};

const optionsLanguageDetector = {
  order: ["navigator", "htmlTag", "path"],
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    resources: availableLanguages,
    detection: optionsLanguageDetector,
    interpolation: {
      escapeValue: false,
      format: (value, format, language) => {
        if (format === "currency") {
          const supportedCurrency = SUPPORTED_LOCALES.find(
            (locale) => locale.language === language
          );
          return new Intl.NumberFormat(language, {
            style: "currency",
            currency: supportedCurrency?.currency || "USD",
          }).format(value);
        }
        return value;
      },
    },
  });

export default i18next;
