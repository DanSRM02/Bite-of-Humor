"use client";
import {
  JokeSubmissionContextType,
  JokeSubmissionDataImpl,
} from "@/types/jokeSubmissionType";
import { createContext, ReactNode, useContext, useState } from "react";

const JokeSubmissionContext = createContext<
  JokeSubmissionContextType | undefined
>(undefined);

export function JokeSubmissionProvider({ children }: { children: ReactNode }) {
  const [jokeSubmissionData, setJokeSubmissionData] =
    useState<JokeSubmissionDataImpl>({
      category: "None",
      setup: "None",
      punchline: "None",
      flags: {
        nsfw: false,
        religious: false,
        political: false,
        sexist: false,
        explicit: false,
        racist: false,
      },
    });

  return (
    <JokeSubmissionContext.Provider
      value={{
        jokeSubmissionData,
        setJokeSubmissionData,
      }}
    >
      {children}
    </JokeSubmissionContext.Provider>
  );
}

export function useJokeSubmission() {
  const context = useContext(JokeSubmissionContext);
  if (!context) {
    throw new Error(
      "useJokeSubmission must be used within a JokeSubmissionProvider"
    );
  }
  return context;
}
