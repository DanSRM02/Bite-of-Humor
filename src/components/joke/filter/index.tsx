"use client";
import { FilterImpl } from "@/types/jokeAPITypes";
import { useEffect, useState, ChangeEvent } from "react";
import CheckboxField from "../../inputs/Field/checkbox";
import SelectField from "../../inputs/Field/select";
import DefaultField from "../../inputs/Field/default";
import useJoke from "@/services/useJoke";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";

const JokeFilter = () => {
  const { getFilteredJokes } = useJoke();
  const [filter, setFilter] = useState<FilterImpl>({
    category: "Any",
    searchTerm: "",
    safeMode: true,
  });
  const isSafeModeAllowed = filter.category !== "Dark";

  const translations = {
    loadingMessage: "JokePage.loadingMessage",
    safeModeWarning: "JokePage.safeModeWarning",
    searchForm: {
      safeModeLabel: "JokePage.searchForm.safeModeLabel",
      categoryLabel: "JokePage.searchForm.categoryLabel",
      placeholder: "JokePage.searchForm.placeholder",
      label: "JokePage.searchForm.label",
    },
  };

  useEffect(() => {
    getFilteredJokes(filter, "en-US");
  }, [filter.category, filter.searchTerm, filter.safeMode]);

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

  return (
    <>
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
      {filter.category === "Dark" && (
        <span className="text-yellow-700 bg-yellow-100 border border-yellow-300 font-medium p-4 rounded-md">
          {translations.safeModeWarning}
        </span>
      )}
    </>
  );
};

export default JokeFilter;
