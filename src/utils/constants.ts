import { Locale } from "@/types/countryTypes";
import { LuCrown, LuUsers, LuMail, LuCircle, LuStar } from "react-icons/lu";
import { UnorderedListImpl } from "@/types/unorderedListType";
import TextareaField from "@/components/inputs/field/textarea";
import DefaultField from "@/components/inputs/field/default";
import SelectField from "@/components/inputs/field/select";
import CheckboxField from "@/components/inputs/field/checkbox";
import { BaseFieldImpl, inputTypes } from "@/types/baseFieldTypes";
import { ComponentType } from "react";
import MultipleSelectField from "@/components/inputs/field/multipleSelect";

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

export const _AVAILABLE_CATEGORIES: string[] = [
  "Any",
  "Programming",
  "Christmas",
  "Spooky",
  "Miscellaneous",
  "Pun",
  "Dark",
];

export const AVAILABLE_CATEGORIES_OPTIONS = [
  { value: "Programming", label: "Programming" },
  { value: "Miscellaneous", label: "Miscellaneous" },
  { value: "Dark", label: "Dark" },
  { value: "Pun", label: "Pun" },
  { value: "Spooky", label: "Spooky" },
  { value: "Christmas", label: "Christmas" },
];

export const _AVAILABLE_FLAGS: string[] = [
  "nsfw",
  "religious",
  "political",
  "racist",
  "sexist",
  "explicit",
];

export const AVAILABLE_FLAGS_OPTIONS = [
  { value: "nsfw", label: "NSFW" },
  { value: "religious", label: "Religious" },
  { value: "political", label: "Political" },
  { value: "racist", label: "Racist" },
  { value: "sexist", label: "Sexist" },
  { value: "explicit", label: "Explicit" },
];

export const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
  { value: "ES", label: "Spain" },
  { value: "IT", label: "Italy" },
  { value: "GB", label: "United Kingdom" },
];

export const SUPPORTED_LANGS = [
  { value: "en", label: "English" },
  { value: "es", label: "Spanish" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
];

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
  selectMultiple: MultipleSelectField
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

export const plansForPremiumPage: UnorderedListImpl[] = [
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

export const API_CONFIG = {
  BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://v2.jokeapi.dev",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
} as const;

export const HTTP_STATUS = {
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const ERROR_CODES = {
  INVALID_CATEGORY: 106,
  NETWORK_ERROR: "NETWORK_ERROR",
  TIMEOUT_ERROR: "TIMEOUT_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

export const FORM_CONFIG = {
  MIN_NAME_LENGTH: 2,
  MIN_JOKE_LENGTH: 10,
  MAX_NAME_LENGTH: 50,
  MAX_JOKE_LENGTH: 1000,
} as const;

export const UI_CONFIG = {
  LOADING_TEXT: "Loading...",
  DEFAULT_JOKES_AMOUNT: 10,
  MAX_JOKES_AMOUNT: 10,
} as const;

export const VALIDATION_MESSAGES = {
  REQUIRED_FIELD: (field: string) => `${field} is required`,
  MIN_LENGTH: (field: string, length: number) =>
    `${field} must be at least ${length} characters long`,
  MAX_LENGTH: (field: string, length: number) =>
    `${field} must not exceed ${length} characters`,
  INVALID_EMAIL: "Please enter a valid email address",
} as const;
