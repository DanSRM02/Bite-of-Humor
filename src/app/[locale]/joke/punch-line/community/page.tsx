import { getTranslations } from "next-intl/server";
import CommunityHeader from "@/components/layout/communityHeader";
import CommunityCallToAction from "@/components/layout/communityCallToAction";
import { CommunityJokeFilterProvider } from "@/contexts/CommunityJokeFilterContext";
import CommunityJokeFilter from "@/components/joke/communityJokeFilter";
import CommunityJokesDisplay from "@/components/joke/communityJokesDisplay/index";

async function CommunityPage() {
  const t = await getTranslations();

  return (
    <CommunityJokeFilterProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <article className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <CommunityHeader
            title={t("CommunityPage.title")}
            description={t("CommunityPage.description")}
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <aside className="w-full lg:w-80 lg:flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t("CommunityPage.filters.title")}
                </h2>
                <CommunityJokeFilter/>
              </div>
            </aside>

            <div className="flex-1 min-w-0 space-y-8 lg:space-y-12">
              <CommunityJokesDisplay />
              <CommunityCallToAction />
            </div>
          </div>
        </article>
      </div>
    </CommunityJokeFilterProvider>
  );
}

export default CommunityPage;
