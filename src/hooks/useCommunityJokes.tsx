import type { JokeImpl } from "@/types/jokeAPITypes";
import type { Action, State } from "@/types/reducerTypes";
import { useReducer } from "react";

const initialState: State<JokeImpl> = {
  isLoading: false,
  error: "",
  jokes: [],
};

const jokeReducer = (state: State<JokeImpl>, action: Action<JokeImpl>) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, jokes: [], isLoading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, jokes: action.payload, error: "" };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};

export interface CommunityJokeFilters {
  category?: string;
  searchTerm?: string;
  sortBy?: "newest" | "oldest" | "popular";
}

export default function useCommunityJokes() {
  const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);

  const getCommunityJokes = async (
    filters?: CommunityJokeFilters,
    signal?: AbortSignal
  ) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });

      const params = new URLSearchParams();

      if (filters?.category) {
        params.append("category", filters.category);
      }
      if (filters?.searchTerm) {
        params.append("searchTerm", filters.searchTerm);
      }
      if (filters?.sortBy) {
        params.append("sortBy", filters.sortBy);
      }

      const url = `/api/jokes/community?${params.toString()}`;

      const response = await fetch(url, {
        signal: signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      jokeDispatch({
        type: "FETCH_SUCCESS",
        payload: data.jokes || [],
      });
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      jokeDispatch({
        type: "FETCH_FAILURE",
        payload: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return {
    jokeState,
    getCommunityJokes,
  };
}
