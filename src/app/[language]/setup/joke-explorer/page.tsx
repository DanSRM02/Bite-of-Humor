"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./JokePage.module.scss";
import useJoke from "@/services/useJoke";
import { useEffect, useState, useMemo, ChangeEvent, use } from "react";
import Card from "@/components/feedback/Card";
import { useTranslation } from "react-i18next";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FilterImpl } from "@/types/jokeAPITypes";
import { LanguageContext } from "@/context/languageContext";
import CheckboxField from "@/components/inputs/field/checkbox";
import SelectField from "@/components/inputs/field/select";
import DefaultField from "@/components/inputs/field/default";
import Link from "next/link";
function JokeExplorerPage() {
  const { jokeState, getInitialJokes, getFilteredJokes } = useJoke();
  const { t } = useTranslation();
  const { language } = use(LanguageContext);
  const [filter, setFilter] = useState<FilterImpl>({
    category: "Any",
    searchTerm: "",
    safeMode: true,
  });
  const isSafeModeAllowed = filter.category !== "Dark";

  const translations = useMemo(
    () => ({
      navkLink: {
        text: t("plans.Link.text"),
      },
      loadingMessage: t("JokePage.loadingMessage", "loading..."),
      safeModeWarning: t(
        "JokePage.safeModeWarning",
        "Safe mode is not allowed for the 'Dark' category."
      ),
      searchFilters: {
        heading: t("JokePage.searchFilters.heading"),
        paragraph: t("JokePage.searchFilters.paragraph"),
      },
      searchForm: {
        safeModeLabel: t("JokePage.searchForm.safeModeLabel"),
        categoryLabel: t("JokePage.searchForm.categoryLabel"),
        placeholder: t("JokePage.searchForm.placeholder"),
        label: t("JokePage.searchForm.label"),
      },
    }),
    [t]
  );

  const handleInputChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | ChangeEvent<HTMLInputElement>
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement;
    const value = target.value;
    const type = target.type;
    const checked = (target as HTMLInputElement).checked;

    setFilter((prevFilter) => {
      let newFilter = { ...prevFilter };
      switch (type) {
        case "search":
          newFilter.searchTerm = value;
          break;
        case "checkbox":
          if (isSafeModeAllowed) {
            newFilter.safeMode = checked;
          }
          break;
        case "select-one":
          newFilter.category = value;
          if (value === "Dark") {
            newFilter.safeMode = false;
          }
          break;
      }
      return newFilter;
    });
  };

  useEffect(() => {
    getInitialJokes(language);
  }, [language]);

  useEffect(() => {
    getFilteredJokes(filter, language);
  }, [filter.category, filter.searchTerm, filter.safeMode, language]);

  return (
    <>
      <section aria-label="Joke explorer section" tabIndex={0} className="flex flex-col">
        <span className="flex justify-center items-center gap-20">
          <Link href={"final"}>
            <FaArrowLeftLong size={"2rem"} className="hover:fill-secondary-bg hover:border-b-2 hover:border-secondary-bg" />
          </Link>
          <div
            className="flex flex-wrap justify-around items-center p-8 w-[85%] border border-solid border-gray-300 rounded-md"
            aria-label="Joke search and filters"
            tabIndex={0}
          >
            <LeadIn
              variant="secondary"
              heading={translations.searchFilters.heading}
              paragraph={translations.searchFilters.paragraph}
            />

            <span
              className="flex flex-wrap items-center gap-6"
              aria-label="Joke filter controls"
              tabIndex={0}
            >
              <CheckboxField
                color="primary"
                checked={isSafeModeAllowed ? filter.safeMode : false}
                disabled={!isSafeModeAllowed}
                label={translations.searchForm.safeModeLabel}
                onChange={handleInputChange}
                id="safeMode"
                aria-label={translations.searchForm.safeModeLabel}
              />
              <SelectField
                id="select-category"
                color="secondary"
                optDisabled="Select a category"
                label={translations.searchForm.categoryLabel}
                value={filter.category}
                onChange={handleInputChange}
                aria-label={translations.searchForm.categoryLabel}
                options={_AVAILABLE_CATEGORIES.map((category) => ({
                  value: category,
                  label: category,
                }))}
              />                                              
              <DefaultField
                onChange={handleInputChange}
                color="primary"
                id="search-term"
                placeholder={translations.searchForm.placeholder}
                type="search"
                label={translations.searchForm.label}
                aria-label={translations.searchForm.label}
                value={filter.searchTerm}
              />
            </span>
          </div>
        </span>
        <br />
        {jokeState.error && <p role="alert" className="text-red-700 bg-red-100 border border-red-300 font-medium p-4 rounded-md">{jokeState.error}</p>}
        {jokeState.isLoading && (          
          <p aria-live="polite" className="text-blue-700 bg-blue-100 border border-blue-300 p-4 rounded-md">{translations.loadingMessage}</p>
        )}        
        {filter.category === "Dark" && (
          <span className="text-yellow-700 bg-yellow-100 border border-yellow-300 font-medium p-4 rounded-md">{translations.safeModeWarning}</span>
        )}
        <menu aria-label="Joke results list" className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] m-8 gap-4">
          {jokeState.jokes &&
            jokeState.jokes.map((joke) => (
              <Card
                key={joke.id}
                variant="joke"
                title={joke.lang}
                jokePunchline={joke.delivery}
                jokeSetup={joke.setup || joke.joke}
                jokeType={joke.type}
                badge={joke.category}
              />
            ))}
        </menu>
      </section>
    </>
  );
}

export default JokeExplorerPage;
