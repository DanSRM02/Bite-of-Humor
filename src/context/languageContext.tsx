"use client";
import { LanguageCtxImpl } from "@/types/languageImpl";
import {
  COUNTRIES,
  DEFAULT_LANG,
  DEFAULT_LOCAL,
  SUPPORTED_LANGS,
} from "@/utils/const";
import { createContext, ReactNode, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n/config";
import { redirect } from "next/navigation";

export const LanguageContext = createContext<LanguageCtxImpl>({
  language: DEFAULT_LANG,
  locale: DEFAULT_LOCAL,
  localizationRouter: `${DEFAULT_LANG}-${DEFAULT_LOCAL}`,
});

type LanguageCtxProps = {
  languageParam: string;
  children: ReactNode;
};

const LanguageProvider = ({ languageParam, children }: LanguageCtxProps) => {
  const { i18n } = useTranslation();

  const languageConfig: LanguageCtxImpl = useMemo(() => {
    const [language, locale] = languageParam?.split("-") || [];

    const validatedLanguage =
      SUPPORTED_LANGS.find((supportedLang) => supportedLang === language) ??
      DEFAULT_LANG;

    const validatedLocaleObject = COUNTRIES.find(
      (country) => country.code === locale
    );

    const validatedLocaleCode = validatedLocaleObject?.code ?? DEFAULT_LOCAL;

    const localizationRouter = `${validatedLanguage}-${validatedLocaleCode}`;

    return {
      language: validatedLanguage,
      locale: validatedLocaleCode,
      localizationRouter: localizationRouter,
    };
  }, [languageParam]);

  useEffect(() => {
    i18n.changeLanguage(languageConfig.localizationRouter);
    document.documentElement.lang = languageConfig.localizationRouter;
  }, [languageConfig.localizationRouter, i18n]);

  useEffect(() => {
    const correctUrlLang = languageConfig.localizationRouter;
    const currentPath = location.pathname;
    if (languageParam !== correctUrlLang) {
      const pathSegmenths = currentPath.split("/").filter((space) => space);
      const correctPath = `/${correctUrlLang}/${pathSegmenths
        .slice(1)
        .join("/")}`;

      redirect(correctPath);
    }
  }, [languageConfig.localizationRouter, languageParam]);

  return (
    <LanguageContext.Provider value={languageConfig}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
