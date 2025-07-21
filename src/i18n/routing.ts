import { DEFAULT_LOCALE, SUPPORTED_LOCALES_STRING } from "@/utils/constants";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: SUPPORTED_LOCALES_STRING,
  defaultLocale: DEFAULT_LOCALE,
});
