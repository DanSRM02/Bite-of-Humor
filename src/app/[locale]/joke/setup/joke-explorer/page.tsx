import { JokeFilter } from "@/components/joke/JokeFilter";
import { getJokesInitialLoad } from "@/services/jokeService";
import { inputTypes } from "@/types/baseFieldTypes";
import { JokeImpl } from "@/types/jokeAPITypes";
import { _AVAILABLE_CATEGORIES } from "@/utils/constants";
import { getLocale } from "next-intl/server";
import { JokeFilterProvider } from "@/contexts/JokeFilterContext";

async function JokeExplorerPage() {
  const locale = await getLocale();
  const params = locale.split("-");
  const currentLanguage = params[0];

  const initialJokes: JokeImpl[] = await getJokesInitialLoad(currentLanguage);

  const filterFieldsWithoutDynamicAttributes = [
    {
      id: "category",
      type: "select" as inputTypes,
      label: "JokePage.searchForm.categoryLabel",
      nameInput: "category",
      color: "secondary",
      isTextRaw: false,
      disableLabel: "JokePage.searchForm.categoryLabel",
      options: _AVAILABLE_CATEGORIES.map((category) => ({
        isTextRaw: true,
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
      nameInput: "searchTerm",
    },
    {
      id: "isSafeMode",
      type: "checkbox" as inputTypes,
      label: "JokePage.searchForm.safeModeLabel",
      color: "primary",
      nameInput: "isSafeMode",
    },
    {
      id: "isMockData",
      type: "checkbox" as inputTypes,
      label: "Check to use mock data",
      color: "primary",
      nameInput: "isMockData",
      isTextRaw: true,
    },
  ];
  return (
    <JokeFilterProvider>
      <section aria-label="Joke explorer section" className="flex flex-col">
        <JokeFilter
          initialLoad={initialJokes}
          language={currentLanguage}
          fieldsBlueprint={filterFieldsWithoutDynamicAttributes}
        />
      </section>
    </JokeFilterProvider>
  );
}

export default JokeExplorerPage;
