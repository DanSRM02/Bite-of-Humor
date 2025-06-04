export interface State<T> {
  isLoading: boolean;
  error: string;
  jokes: T[];
}

export type Action<T> =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: T[] }
  | { type: "FETCH_FAILURE"; payload: string };
