import { Locale } from "@/types/countryTypes";

export const DEFAULT_LOCALE: string = "en-US";

export const SUPPORTED_LOCALES: Locale[] = [
  { language: "en-US", currency: "USD" },
  { language: "de-US", currency: "USD" },
  { language: "fr-US", currency: "USD" },
  { language: "fr-FR", currency: "EUR" },
  { language: "en-FR", currency: "EUR" },
  { language: "de-FR", currency: "EUR" },
  { language: "en-DE", currency: "EUR" },
  { language: "de-DE", currency: "EUR" },
  { language: "fr-DE", currency: "EUR" },
];

export const SUPPORTED_LOCALES_STRING = SUPPORTED_LOCALES.map(
  (locale) => locale.language
);

export const API_BASE: string = "https://v2.jokeapi.dev/";
