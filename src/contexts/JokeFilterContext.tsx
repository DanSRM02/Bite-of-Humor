"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type JokeFilterData = {
  category: string;
  searchTerm: string;
  isSafeMode: boolean;
};

type JokeFilterContextType = {
  filterData: JokeFilterData;
  setFilterData: React.Dispatch<React.SetStateAction<JokeFilterData>>;
  updateFilter: (updates: Partial<JokeFilterData>) => void;
};

const JokeFilterContext = createContext<JokeFilterContextType | undefined>(undefined);

export function JokeFilterProvider({ children }: { children: ReactNode }) {
  const [filterData, setFilterData] = useState<JokeFilterData>({
    category: "Any",
    searchTerm: "",
    isSafeMode: true,
  });

  const updateFilter = (updates: Partial<JokeFilterData>) => {
    setFilterData(prev => ({ ...prev, ...updates }));
  };

  return (
    <JokeFilterContext.Provider
      value={{
        filterData,
        setFilterData,
        updateFilter,
      }}
    >
      {children}
    </JokeFilterContext.Provider>
  );
}

export function useJokeFilter() {
  const context = useContext(JokeFilterContext);
  if (!context) {
    throw new Error("useJokeFilter must be used within a JokeFilterProvider");
  }
  return context;
}
