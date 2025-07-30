"use client";

import { useEffect, useState } from "react";
import LeadIn from "../dataDisplay/leadIn";
import Chip from "../feedback/chip";
import { BaseFieldImpl } from "@/types/baseFieldTypes";
import useJokeList from "@/hooks/useJokeList";
import CardGrid from "../layout/cardGrid";
import Card from "../feedback/card";
import { JokeImpl } from "@/types/jokeAPITypes";
import { useJokeFilter } from "@/contexts/JokeFilterContext";
import FormRendered from "../dataDisplay/formRendered";

type jokeFilterProps = {
  initialLoad: JokeImpl[];
  language: string;
  fieldsBlueprint: BaseFieldImpl[];
};
export const JokeFilter = ({
  initialLoad,
  language,
  fieldsBlueprint,
}: jokeFilterProps) => {
  const { getFilteredJokes, jokeState } = useJokeList();
  const { filterDataInputs, updateFilter } = useJokeFilter();
  const [displayedJokes, setDisplayedJokes] = useState(initialLoad);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    updateFilter({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { category, searchTerm, isSafeMode, isMockData } = filterDataInputs;

  const isDarkMode = category === "Dark";
  const filter = { category, searchTerm, isSafeMode, isMockData };

  const fieldsWithDynamicAttributes = fieldsBlueprint.map((field) => {
    if (field.id === "category") {
      return { ...field, value: category };
    }
    if (field.id === "searchTerm") {
      return { ...field, value: searchTerm };
    }

    if (field.id === "isMockData") {
      return { ...field, checked: isMockData };
    }

    if (field.id === "isSafeMode") {
      return {
        ...field,
        checked: isDarkMode ? false : isSafeMode,
        disabled: isDarkMode,
      };
    }
    return field;
  });

  useEffect(() => {
    const controller = new AbortController();

    getFilteredJokes(filter, language, controller.signal);

    return () => {
      controller.abort();
    };
  }, [category, searchTerm, isSafeMode]);

  useEffect(() => {
    const controller = new AbortController();
    document.cookie = `useMockData=${isMockData}; path=/; max-age=31536000`;
    getFilteredJokes(filter, language, controller.signal);

    return () => {
      controller.abort();
    };
  }, [isMockData]);

  useEffect(() => {
    if (Array.isArray(jokeState.jokes)) {
      setDisplayedJokes(jokeState.jokes);
    }
  }, [jokeState.jokes]);

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
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-20 mb-8">
        <LeadIn
          variant="fourth"
          redirect={"/joke/setup/final"}
          heading={translations.searchFilters.heading}
          paragraph={translations.searchFilters.paragraph}
        />
        <div
          className="flex-1 max-w-none lg:max-w-[55%] p-4 sm:p-6 lg:p-8 border border-solid border-gray-300 rounded-md bg-white shadow-sm"
          aria-label="Joke Filter"
        >
          <FormRendered
            inputFields={fieldsWithDynamicAttributes}
            handlerChange={handleInputChange}
            variant="filter"
          />
        </div>
      </div>
      {isDarkMode && (
        <Chip color="yellow" textChip="JokePage.safeModeWarning" />
      )}
      {jokeState.isLoading && (
        <Chip color="blue" textChip="JokePage.loadingMessage" />
      )}
      {jokeState.error && (
        <Chip isTextRaw color="red" textChip={jokeState.error} />
      )}
      <div className="mt-6">
        <CardGrid ariaLabel="Joke results list">
          {displayedJokes.map((joke) => (
            <Card
              key={joke.id}
              badge={joke.category}
              variant="joke"
              isTextRaw
              jokeSetup={joke.setup || joke.joke}
              jokePunchline={joke.delivery}
              jokeType={joke.type}
            />
          ))}
        </CardGrid>
      </div>
    </>
  );
};
