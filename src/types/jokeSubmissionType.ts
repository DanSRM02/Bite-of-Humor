import { Dispatch, SetStateAction } from "react";

export interface JokeSubmissionDataImpl { 
  [key: string]: any; 
  category: string;
  setup: string;
  punchline: string;
  flags: {
    [key: string]: boolean;
    nsfw: boolean;
    religious: boolean;
    political: boolean;
    sexist: boolean;
    explicit: boolean;
    racist: boolean;
  };
}

export type JokeSubmissionContextType = {
  jokeSubmissionData: JokeSubmissionDataImpl;
  setJokeSubmissionData:  Dispatch<SetStateAction<JokeSubmissionDataImpl>>;
};
