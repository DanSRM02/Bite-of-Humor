import type { FilterImpl } from "@/types/jokeAPITypes";
import apiClient from "./apiClient";

export const getJokesInitialLoad = async (language: string) => {
  try {
    const response = await apiClient.get(
      `/joke/Any?safe-mode&lang=${language}&amount=10`
    );

    let jokes = [];
    if (response.data.jokes) {
      jokes = response.data.jokes;
    } else if (response.data.id) {
      jokes = [response.data];
    }

    return jokes;
  } catch (error) {
    const mockJokes = [
      {
        category: "Misc",
        type: "twopart",
        setup: "Welcome to Bite of Humor!",
        delivery:
          "We're experiencing some technical difficulties, but here's a joke anyway!",
        flags: {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false,
        },
        id: 999,
        safe: true,
        lang: language,
      },
    ];

    return mockJokes;
  }
};

export const getJokesWithFilter = async (
  filter: FilterImpl,
  language: string,
  signal?: AbortSignal
) => {
  const category = filter.category;
  const queryString = createQueryString(filter, language);

  try {
    const url = `/joke/${category}?${queryString}`;
    const response = await apiClient.get(url, { signal });
    
    let jokes = [];
    if (response.data.jokes) {
      jokes = response.data.jokes;
    } else if (response.data.id) {
      jokes = [response.data];
    }

    return {
      data: {
        jokes: jokes,
        success: true,
        fallback: false
      }
    };
  } catch (error) {
    const mockJokes = [
      {
        category: "Programming",
        type: "twopart",
        setup: "Why do programmers prefer dark mode?",
        delivery: "Because light attracts bugs!",
        flags: { nsfw: false, religious: false, political: false, racist: false, sexist: false, explicit: false },
        id: 1,
        safe: true,
        lang: language
      },
      {
        category: "Programming",
        type: "single",
        joke: "There are only 10 types of people in the world: those who understand binary and those who don't.",
        flags: { nsfw: false, religious: false, political: false, racist: false, sexist: false, explicit: false },
        id: 2,
        safe: true,
        lang: language
      }
    ];

    return {
      data: {
        jokes: mockJokes,
        success: false,
        fallback: true,
        error: error instanceof Error ? error.message : "Unknown error"
      }
    };
  }
};

const createQueryString = (filter: FilterImpl, language: string) => {
  const queryParams = [];

  if (language) {
    queryParams.push(`lang=${language}`);
  }
  if (filter.isSafeMode) {
    queryParams.push("safe-mode");
  }
  if (filter.searchTerm) {
    queryParams.push(`contains=${encodeURIComponent(filter.searchTerm)}`);
  }

  queryParams.push("amount=10");

  return queryParams.join("&");
};
