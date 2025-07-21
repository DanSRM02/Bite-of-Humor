import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";
import { SUPPORTED_LOCALES } from "@/utils/baseConstants";


export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;


  const currency = SUPPORTED_LOCALES.find(
    (localeSupported) => localeSupported.language === locale
  );

  return {
    locale,
    formats: {
      number: {
        currency: {
          style: "currency",
          currency: currency?.currency,
        },
      },
    },
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
