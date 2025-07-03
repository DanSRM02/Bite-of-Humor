// DEFAULT LANGUAGE CONFIG
import { LuCrown, LuUsers, LuMail, LuCircle, LuStar } from "react-icons/lu";
import type { Country, Locale } from "@/types/countryTypes";
import { UnorderedListImpl } from "@/types/unorderedListType";
import TextareaField from "@/components/inputs/field/textarea";
import DefaultField from "@/components/inputs/field/default";
import SelectField from "@/components/inputs/field/select";
import CheckboxField from "@/components/inputs/field/checkbox";
import { BaseFieldImpl, inputTypes } from "@/types/baseFieldTypes";
import { ComponentType } from "react";


export const DEFAULT_LANG: string = "en";
export const DEFAULT_REGION: string = "US";
export const DEFAULT_LOCALE: string = "en-US";
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

export const SUPPORTED_LOCALES_STRING = SUPPORTED_LOCALES.map(locale => locale.language);

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

export const fieldTypeToComponent: Record<
  inputTypes,
  ComponentType<BaseFieldImpl>
> = {
  text: DefaultField,
  textarea: TextareaField,
  email: DefaultField,
  password: DefaultField,
  select: SelectField,
  checkbox: CheckboxField,
  search: DefaultField,
};

export const platformSectionsFinal: UnorderedListImpl[] = [
  {
    title: "communicationHub",
    icon: LuMail,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "socialFeatures",
    icon: LuUsers,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "premiumExperience",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
];

export const platformSectionsHome: UnorderedListImpl[] = [
  {
    title: "workshop",
    icon: LuMail,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "nothingYet",
    icon: LuUsers,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "nothingYet",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
];

export const plans: UnorderedListImpl[] = [
  {
    title: "basic",
    icon: LuCircle,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 0,
    topics: [],
  },
  {
    title: "pro",
    icon: LuStar,
    popular: true,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 9.99,
    topics: [],
  },
  {
    title: "premium",
    icon: LuCrown,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 19.99,
    topics: [],
  },
];
