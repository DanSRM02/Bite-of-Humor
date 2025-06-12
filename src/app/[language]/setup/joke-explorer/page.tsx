import LeadIn from "@/components/dataDisplay/LeadIn";
import { _AVAILABLE_CATEGORIES } from "@/utils/const";
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from "next/link";
import { Suspense } from "react";
function JokeExplorerPage() {
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
      <section
        aria-label="Joke explorer section"
        tabIndex={0}
        className="flex flex-col"
      >
        <span className="flex justify-center items-center gap-20">
          <Link href={"final"}>
            <FaArrowLeftLong
              size={"2rem"}
              className="hover:fill-secondary-bg hover:border-b-2 hover:border-secondary-bg"
            />
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
              {/* JokeFilter */}
            </span>
          </div>
        </span>
        <br />

        <menu
          aria-label="Joke results list"
          className="grid grid-cols-[repeaauto-fill,minmax(20rem,1fr))] m-8 gap-"
        >
          <Suspense>{/* <JokeGrid /> */}</Suspense>
        </menu>
      </section>
    </>
  );
}

export default JokeExplorerPage;
