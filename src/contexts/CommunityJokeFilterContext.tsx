"use client";
import { createContext, ReactNode, useContext, useState } from "react";
import { CommunityJokeFilters } from "@/services/jokeService";

type CommunityJokeFilterContextType = {
  filters: CommunityJokeFilters;
  setFilters: React.Dispatch<React.SetStateAction<CommunityJokeFilters>>;
  updateFilter: (updates: Partial<CommunityJokeFilters>) => void;
};

const CommunityJokeFilterContext = createContext<CommunityJokeFilterContextType | undefined>(undefined);

export function CommunityJokeFilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<CommunityJokeFilters>(() => ({
    category: "Any",
    searchTerm: "",
    sortBy: "newest",
  }));

  const updateFilter = (updates: Partial<CommunityJokeFilters>) => {
    setFilters(prev => ({ ...prev, ...updates }));
  };

  return (
    <CommunityJokeFilterContext.Provider
      value={{
        filters,
        setFilters,
        updateFilter,
      }}
    >
      {children}
    </CommunityJokeFilterContext.Provider>
  );
}

export function useCommunityJokeFilter() {
  const context = useContext(CommunityJokeFilterContext);
  if (!context) {
    throw new Error("useCommunityJokeFilter must be used within a CommunityJokeFilterProvider");
  }
  return context;
}
