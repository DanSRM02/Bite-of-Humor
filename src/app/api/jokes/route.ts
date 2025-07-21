import { NextRequest, NextResponse } from "next/server";
import { getJokesWithFilter } from "@/services/jokeService";
import { FilterImpl } from "@/types/jokeAPITypes";

export async function GET(request: NextRequest) {
  const language = request.nextUrl.searchParams.get("lang") || "en";
  const safeMode = request.nextUrl.searchParams.get("safeMode") === "true";
  const category = request.nextUrl.searchParams.get("category") || "Any";
  const searchTerm = request.nextUrl.searchParams.get("searchTerm") || "";

  const filter: FilterImpl = {
    isSafeMode: safeMode,
    category: category,
    searchTerm: searchTerm,
  };

  try {
    const response = await getJokesWithFilter(filter, language);

    return NextResponse.json({
      jokes: response.data.jokes || [],
      success: response.data.success,
      fallback: response.data.fallback || false,
      error: response.data.error || null,
      message: response.data.fallback
        ? "Using mock data due to external API error"
        : "Jokes fetched successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        jokes: [],
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Unexpected error in API route",
      },
      { status: 500 }
    );
  }
}
