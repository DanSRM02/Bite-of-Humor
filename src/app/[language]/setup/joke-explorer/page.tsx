"use client";
import LeadIn from "@/components/dataDisplay/LeadIn";
// import classes from "./JokePage.module.scss";
import useJoke from "@/services/useJoke";
import { useEffect, useState, useMemo, useContext, ChangeEvent, use } from "react";
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
      <section aria-label="Joke explorer section" tabIndex={0}>
        <span>
          <Link href={"final"}>
            <FaArrowLeftLong size={"2rem"} />
          </Link>
          <div
            // className={classes["joke__header"]}
            aria-label="Joke search and filters"
            tabIndex={0}
          >
            <LeadIn
              variant="secondary"
              heading={translations.searchFilters.heading}
              paragraph={translations.searchFilters.paragraph}
            />

            <span
              // className={classes["joke__header-filter"]}
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
                label={translations.searchForm.categoryLabel}
                value={filter.category}
                onChange={handleInputChange}
                aria-label={translations.searchForm.categoryLabel}
              >
                <option value="Any">Any</option>
                {_AVAILABLE_CATEGORIES.map((optionValue) => (
                  <option key={optionValue} value={optionValue}>
                    {optionValue}
                  </option>
                ))}
              </SelectField>
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
        {jokeState.error && <p role="alert">{jokeState.error}</p>}
        {jokeState.isLoading && (
          <p aria-live="polite">{translations.loadingMessage}</p>
        )}
        {/* Show warning only if category is 'Dark' */}
        {filter.category === "Dark" && (
          <span>{translations.safeModeWarning}</span>
        )}
        <menu aria-label="Joke results list">
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
