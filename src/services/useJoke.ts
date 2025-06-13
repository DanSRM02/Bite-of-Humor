import { getJokesInitialLoad, getJokesWithFilter } from "./jokeService";
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

export default function useJoke() {
  const [jokeState, jokeDispatch] = useReducer(jokeReducer, initialState);

  const getInitialJokes = async (language: string) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });
      const response = await getJokesInitialLoad(language);
      jokeDispatch({
        type: "FETCH_SUCCESS",
        payload: response.data.jokes,
      });
    } catch (error) {
      jokeDispatch({
        type: "FETCH_FAILURE",
        payload: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };

  const getFilteredJokes = async (filter: FilterImpl, language: string) => {
    try {
      jokeDispatch({ type: "FETCH_INIT" });
      const response = await getJokesWithFilter(filter, language);
      jokeDispatch({
        type: "FETCH_SUCCESS",
        payload: response?.data.jokes,
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
    getInitialJokes,
    getFilteredJokes,
  };
}
