// DEFAULT LANGUAGE CONFIG
import { LuCrown, LuUsers, LuMail, LuCircle, LuStar } from "react-icons/lu";
import type { Country, Locale } from "@/types/countryTypes";
import { UnorderedListImpl } from "@/types/unorderedListType";

export const DEFAULT_LANG: string = "en";
export const DEFAULT_LOCAL: string = "US";
export const SUPPORTED_LANGS: string[] = ["en", "fr", "de"];

export const COUNTRIES: Country[] = [
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "US", name: "United States", flag: "🇺🇸" },
];

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

// JOKE API

export const API_BASE: string = "https://v2.jokeapi.dev/";

export const _AVAILABLE_CATEGORIES: string[] = [
  "Any",
  "Programming",
  "Christmas",
  "Spooky",
  "Miscellaneous",
  "Pun",
  "Dark",
];

export const _AVAILABLE_FLAGS: string[] = [
  "nsfw",
  "religious",
  "political",
  "racist",
  "sexist",
  "explicit",
];

// DATA CONST

export const platformSections: UnorderedListImpl[] = [
  {
    title: "communicationHub",
    icon: LuMail,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    title: "socialFeatures",
    icon: LuUsers,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    title: "premiumExperience",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
];

export const plans: UnorderedListImpl[] = [
  {
    title: "basic",
    icon: LuCircle,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 0,
  },
  {
    title: "pro",
    icon: LuStar,
    popular: true,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 9.99,
  },
  {
    title: "premium",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 19.99,
  },
];
