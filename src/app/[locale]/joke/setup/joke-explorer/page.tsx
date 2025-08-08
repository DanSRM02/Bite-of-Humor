import { JokeFilter } from "@/components/joke/jokeFilter";
import { getJokesInitialLoad } from "@/services/jokeService";
import { inputTypes } from "@/types/baseFieldTypes";
import { JokeImpl } from "@/types/jokeAPITypes";
import { _AVAILABLE_CATEGORIES } from "@/utils/constants";
import { getLocale, getTranslations } from "next-intl/server";
import { JokeFilterProvider } from "@/contexts/JokeFilterContext";

async function JokeExplorerPage() {
  const locale = await getLocale();
  const params = locale.split("-");
  const currentLanguage = params[0];
  const t = await getTranslations("JokePage");

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
      label: "JokePage.searchForm.mockDataLabel",
      color: "primary",
      nameInput: "isMockData",
      isTextRaw: false,
    },
  ];
  return (
    <JokeFilterProvider>
      <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <section 
            aria-label={t("ariaLabels.jokeExplorerSection")} 
            className="flex flex-col gap-6 sm:gap-8 lg:gap-10"
          >
            <JokeFilter
              initialLoad={initialJokes}
              language={currentLanguage}
              fieldsBlueprint={filterFieldsWithoutDynamicAttributes}
            />
          </section>
        </div>
      </div>
    </JokeFilterProvider>
  );
}

export default JokeExplorerPage;
