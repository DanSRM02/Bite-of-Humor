import adultIcon from '@iconify-icons/bi/exclamation-circle-fill';
import religiousIcon from '@iconify-icons/bi/book-fill';
import politicalIcon from '@iconify-icons/bi/flag-fill';
import racialIcon from '@iconify-icons/bi/people-fill';
import genderIcon from '@iconify-icons/bi/gender-ambiguous';
import explicitIcon from '@iconify-icons/bi/eye-slash-fill';
import { UnorderedListImpl } from "@/types/unorderedListType";
import TextareaField from "@/components/inputs/field/textarea";
import DefaultField from "@/components/inputs/field/default";
import SelectField from "@/components/inputs/field/select";
import CheckboxField from "@/components/inputs/field/checkbox";
import { BaseFieldImpl, inputTypes } from "@/types/baseFieldTypes";
import { ComponentType } from "react";
import MultipleSelectField from "@/components/inputs/field/multipleSelect";
export {
  DEFAULT_LOCALE,
  SUPPORTED_LOCALES,
  SUPPORTED_LOCALES_STRING,  
} from "./baseConstants";

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
  { value: "Programming", label: "common.categories.Programming" },
  { value: "Miscellaneous", label: "common.categories.Miscellaneous" },
  { value: "Dark", label: "common.categories.Dark" },
  { value: "Pun", label: "common.categories.Pun" },
  { value: "Spooky", label: "common.categories.Spooky" },
  { value: "Christmas", label: "common.categories.Christmas" },
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
  { value: "nsfw", label: "common.flags.nsfw" },
  { value: "religious", label: "common.flags.religious" },
  { value: "political", label: "common.flags.political" },
  { value: "racist", label: "common.flags.racist" },
  { value: "sexist", label: "common.flags.sexist" },
  { value: "explicit", label: "common.flags.explicit" },
];

export const COUNTRIES = [
  { value: "US", label: "United States" },
  { value: "DE", label: "Germany" },
  { value: "FR", label: "France" },
];

export const SUPPORTED_LANGS = [
  { value: "en", label: "English" },
  { value: "fr", label: "French" },
  { value: "de", label: "German" },
];

export const flagConfig = {
  nsfw: {
    color: "#e11d48",
    solidColor: "#e11d48",
    borderColor: "#a21caf",
    iconComponent: adultIcon,
    tooltip: "Not Safe For Work",
  },
  religious: {
    color: "#2563eb",
    solidColor: "#2563eb",
    borderColor: "#0ea5e9",
    iconComponent: religiousIcon,
    tooltip: "Religious Content",
  },
  political: {
    color: "#f59e42",
    solidColor: "#f59e42",
    borderColor: "#ea580c",
    iconComponent: politicalIcon,
    tooltip: "Political Content",
  },
  racist: {
    color: "#10b981",
    solidColor: "#10b981",
    borderColor: "#047857",
    iconComponent: racialIcon,
    tooltip: "Racial Content",
  },
  sexist: {
    color: "#a21caf",
    solidColor: "#a21caf",
    borderColor: "#f472b6",
    iconComponent: genderIcon,
    tooltip: "Gender/Sexist Content",
  },
  explicit: {
    color: "#fbbf24",
    solidColor: "#fbbf24",
    borderColor: "#b45309",
    iconComponent: explicitIcon,
    tooltip: "Explicit Content",
  },
};

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
  selectMultiple: MultipleSelectField,
};

export const platformSectionsFinal: UnorderedListImpl[] = [
  {
    title: "communicationHub",
    iconName: "lucide:mail",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "socialFeatures",
    iconName: "lucide:users",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "premiumExperience",
    iconName: "lucide:crown",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
];

export const platformSectionsHome: UnorderedListImpl[] = [
  {
    title: "myCreations",
    iconName: "lucide:palette",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "humorHistory",
    iconName: "lucide:book-open",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
  {
    title: "communityForum",
    iconName: "lucide:message-circle",
    features: ["feature1", "feature2", "feature3", "feature4"],
    topics: [],
  },
];

export const plansForPremiumPage: UnorderedListImpl[] = [
  {
    title: "basic",
    iconName: "lucide:circle",
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 0,
    topics: [],
  },
  {
    title: "pro",
    iconName: "lucide:star",
    popular: true,
    features: ["feature1", "feature2", "feature3", "feature4"],
    price: 9.99,
    topics: [],
  },
  {
    title: "premium",
    iconName: "lucide:crown",
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
