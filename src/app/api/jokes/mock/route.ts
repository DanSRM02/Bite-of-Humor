import { mockJokes } from "@/utils/mockData";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const language = request.nextUrl.searchParams.get("lang") || "en";
  const category = request.nextUrl.searchParams.get("category") || "Any";
  const searchTerm = request.nextUrl.searchParams.get("searchTerm") || "";
  const safeMode = request.nextUrl.searchParams.get("safeMode") === "true";
  
  let filteredJokes = mockJokes.filter(joke => {
    const matchesLanguage = joke.lang === language;
    const matchesCategory = category === "Any" || joke.category === category;
    const matchesSearchTerm = !searchTerm;
    const matchesSafeMode = !safeMode || !joke.flags?.nsfw;
    
    return matchesLanguage && matchesCategory && matchesSearchTerm && matchesSafeMode;
  });

  filteredJokes = filteredJokes.slice(0, 10);

  return NextResponse.json({
    jokes: filteredJokes,
    success: true,
    fallback: false,
    error: null,
    message: `Mock jokes fetched successfully for language: ${language}`,
  });
}


