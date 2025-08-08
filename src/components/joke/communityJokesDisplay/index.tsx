"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Card from "@/components/feedback/Card";
import CardGrid from "@/components/layout/CardGrid";
import useCommunityJokes from "@/hooks/useCommunityJokes";
import { useCommunityJokeFilter } from "@/contexts/CommunityJokeFilterContext";

const CommunityJokesDisplay = () => {
  const t = useTranslations();
  const { jokeState, getCommunityJokes } = useCommunityJokes();
  const { filters } = useCommunityJokeFilter();

  useEffect(() => {
    const controller = new AbortController();
        
    getCommunityJokes(filters, controller.signal);

    return () => {
      controller.abort();
    };
  }, [filters]);

  if (jokeState.isLoading) {
    return (
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-center py-12">
          <div className="text-gray-600">{t("CommunityPage.loading")}</div>
        </div>
      </section>
    );
  }

  if (jokeState.error) {
    return (
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-center py-12">
          <div className="text-red-600">{jokeState.error}</div>
        </div>
      </section>
    );
  }

  if (jokeState.jokes.length === 0) {
    return (
      <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="text-center py-12">
          <div className="text-gray-600 space-y-2">
            <div className="text-4xl">🎭</div>
            <h3 className="text-lg font-medium text-gray-900">{t("CommunityPage.noJokes.title")}</h3>
            <p className="text-sm">{t("CommunityPage.noJokes.description")}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
      <CardGrid ariaLabel="Community jokes collection">
        {jokeState.jokes.map((joke) => (
          <Card
            key={joke.id}
            badge={joke.category}
            variant="joke"
            isTextRaw
            jokeSetup={joke.setup}
            jokePunchline={joke.punchline}
            jokeType="twopart"
            flags={joke.flags ? {
              nsfw: joke.flags.nsfw,
              religious: joke.flags.religious,
              political: joke.flags.political,
              racist: joke.flags.racist,
              sexist: joke.flags.sexist,
              explicit: joke.flags.explicit
            } : {}}
          />
        ))}
      </CardGrid>
    </section>
  );
};

export default CommunityJokesDisplay;
