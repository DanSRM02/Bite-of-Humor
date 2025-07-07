import { JokeFilter } from "@/components/joke/JokeFilter";
import { getJokesInitialLoad } from "@/services/jokeService";
import { inputTypes } from "@/types/baseFieldTypes";
import { JokeImpl } from "@/types/jokeAPITypes";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";
import { getLocale } from "next-intl/server";

async function JokeExplorerPage() {
  const locale = await getLocale();
  const params = locale.split("-");
  const currentLanguage = params[0];

  const initialJokes: JokeImpl[] = await getJokesInitialLoad(currentLanguage);

  const filterFields = [
    {
      id: "safeMode",
      type: "checkbox" as inputTypes,
      label: "JokePage.searchForm.safeModeLabel",
      color: "primary",
    },
    {
      id: "category",
      type: "select" as inputTypes,
      label: "JokePage.searchForm.categoryLabel",
      color: "secondary",
      isTextRaw: false,
      disableLabel: "JokePage.searchForm.categoryLabel",
      options: _AVAILABLE_CATEGORIES.map((category) => ({
        isTextRawOpt: true,
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
    },
  ];
  return (
    <>
      <section aria-label="Joke explorer section" className="flex flex-col">
        <JokeFilter
          initialLoad={initialJokes}
          language={currentLanguage}
          fieldsBlueprint={filterFields}
        />
      </section>
    </>
  );
}

export default JokeExplorerPage;
