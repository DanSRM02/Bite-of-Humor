"use client";
import LeadIn from "@/components/dataDisplay/leadIn";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";
import CardGrid from "@/components/layout/cardGrid";
import { useContext, useEffect } from "react";
import { inputTypes } from "@/types/baseFieldTypes";
import FormRendered from "@/components/dataDisplay/formRendered";
import useJokeFilter from "@/hooks/useJokeFilter";
import useJokeList from "@/hooks/useJokeList";
import Card from "@/components/feedback/card";
import { LanguageContext } from "@/contexts/languageContext";
import Chip from "@/components/feedback/chip";

function JokeExplorerPage() {
  const { getFilteredJokes, jokeState } = useJokeList();
  const { language } = useContext(LanguageContext);
  const {
    searchTerm,
    category,
    isDarkMode,
    isSafeMode,
    handleInputChange,
  } = useJokeFilter();

  const fields = [
    {
      id: "safeMode",
      type: "checkbox" as inputTypes,
      label: "JokePage.searchForm.safeModeLabel",
      color: "primary",
      checked: isDarkMode ? isSafeMode : false,
      disabled: !isDarkMode,
      onChange: handleInputChange,
    },
    {
      id: "category",
      type: "select" as inputTypes,
      label: "JokePage.searchForm.categoryLabel",
      color: "secondary",
      value: category,
      disableLabel: "Select a category",
      onChange: handleInputChange,
      options: _AVAILABLE_CATEGORIES.map((category) => ({
        value: category,
        label: category,
      })),
    },

    {
      id: "searchTerm",
      type: "search" as inputTypes,
      label: "JokePage.searchForm.label",
      placeholder: "JokePage.searchForm.placeholder",
      color: "secondary",
      value: searchTerm,
      onChange: handleInputChange,
    },
  ];

  useEffect(() => {
    getFilteredJokes({ category, searchTerm, isSafeMode }, language);
  }, [category, searchTerm, isSafeMode, language, getFilteredJokes]);

  const translations = {
    navkLink: {
      text: "plans.Link.text",
    },

    searchFilters: {
      heading: "JokePage.searchFilters.heading",
      paragraph: "JokePage.searchFilters.paragraph",
    },
  };

  return (
    <>
      <section aria-label="Joke explorer section" className="flex flex-col">
        <span className="flex flex-wrap justify-center items-center gap-20">
          <LeadIn
            variant="fourth"
            redirect={"final"}
            heading={translations.searchFilters.heading}
            paragraph={translations.searchFilters.paragraph}
          />
          <div
            className="flex flex-wrap justify-around  items-center p-8 w-[55%] border border-solid border-gray-300 rounded-md"
            aria-label="Joke Filter"
          >
            <FormRendered inputFields={fields} />
          </div>
        </span>
        <br />
        {category === "Dark" && (
          <Chip color="yellow" textChip="JokePage.safeModeWarning" />
        )}
        {jokeState.isLoading && (
          <Chip color="blue" textChip="JokePage.loadingMessage" />
        )}
        {jokeState.error && <Chip color="red" textChip={jokeState.error} />}
        <br />
        <CardGrid ariaLabel="Joke results list">
          {jokeState.jokes?.map((joke) => (
            <Card
              key={joke.id}
              badge={joke.category}
              variant="joke"
              jokeSetup={joke.setup || joke.joke}
              jokePunchline={joke.delivery}
              jokeType={joke.type}
            />
          ))}
        </CardGrid>
      </section>
    </>
  );
}

export default JokeExplorerPage;
