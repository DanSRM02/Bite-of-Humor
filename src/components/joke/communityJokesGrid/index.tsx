"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Card from "@/components/feedback/card";
import CardGrid from "@/components/layout/cardGrid";
import Chip from "@/components/feedback/chip";
import { getCommunityJokes } from "@/services/jokeService";
import { JokeWithFlag } from "@/types/databaseTypes";
import { useCommunityJokeFilter } from "@/contexts/CommunityJokeFilterContext";

const CommunityJokesGrid = () => {
  const [jokes, setJokes] = useState<JokeWithFlag[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { filters } = useCommunityJokeFilter();
  const t = useTranslations();

  useEffect(() => {
    const fetchCommunityJokes = async () => {
      try {
        setLoading(true);
        setError(null);
        const communityJokes = await getCommunityJokes(filters);
        setJokes(communityJokes);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchCommunityJokes();
  }, [filters]);

  if (loading) {
    return (
      <div className="flex justify-center p-8">
        <Chip variant="info" textChip="CommunityPage.loading" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center p-8">
        <Chip variant="error" isTextRaw textChip={error} />
      </div>
    );
  }

  if (jokes.length === 0) {
    return (
      <div className="text-center p-8">
        <div className="border-2 border-dashed border-stone-300 bg-stone-50 rounded-xl p-8">
          <h3 className="text-lg font-medium text-stone-700 mb-2">
            {t("CommunityPage.noJokes.title")}
          </h3>
          <p className="text-stone-500">
            {t("CommunityPage.noJokes.description")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <CardGrid ariaLabel="Community jokes grid">
      {jokes.map((joke) => (
        <Card
          key={joke.id}
          badge={joke.category}
          variant="joke"
          isTextRaw
          jokeSetup={joke.setup}
          jokePunchline={joke.punchline}
          jokeType="twopart"
        />
      ))}
    </CardGrid>
  );
};

export default CommunityJokesGrid;
