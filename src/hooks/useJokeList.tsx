import type { JokeImpl, FilterImpl } from "@/types/jokeAPITypes";
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

export default function useJokeList() {
  const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);

  const getFilteredJokes = async (
    filter: FilterImpl,
    language: string,
    signal: AbortSignal
  ) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });      

      const params = new URLSearchParams();

      params.append("lang", language);
      params.append("category", filter.category || "Any");
      params.append("searchTerm", filter.searchTerm || "");
      params.append("safeMode", filter.isSafeMode ? "true" : "false");
      params.append("isMockData", String(filter.isMockData || false));
      
      const url = `/api/jokes?${params.toString()}`;
      
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
      jokeDispatch({
        type: "FETCH_FAILURE",
        payload: error instanceof Error ? error.message : String(error),
      });
    }
  };

  return {
    jokeState,
    getFilteredJokes,
  };
}
