import type { FilterImpl } from "@/types/jokeAPITypes";
import apiClient from "../utils/axios/apiClient";

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
    console.error("Error fetching jokes:", error);
    return [];
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
    const headers = {
      isMockData: filter.isMockData,
    };

    const response = await apiClient.get(url, { signal, headers });       

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
        fallback: false,
      },
    };
  } catch (error) {
    return {
      data: {
        error: error instanceof Error ? error.message : "Unknown error",
      },
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
