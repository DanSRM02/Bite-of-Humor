import { NextRequest, NextResponse } from "next/server";
import { getCommunityJokes } from "@/services/jokeService";

export async function GET(request: NextRequest) {
  const category = request.nextUrl.searchParams.get("category") || "Any";
  const searchTerm = request.nextUrl.searchParams.get("searchTerm") || "";
  const sortBy = request.nextUrl.searchParams.get("sortBy") || "newest";

  const filters = {
    category: category !== "Any" ? category : undefined,
    searchTerm: searchTerm || undefined,
    sortBy: (sortBy as "newest" | "oldest" | "popular") || "newest",
  };

  try {
    const jokes = await getCommunityJokes(filters);

    return NextResponse.json({
      jokes: jokes.map(joke => ({
        id: joke.id,
        category: joke.category,
        setup: joke.setup,
        punchline: joke.punchline,
        type: "twopart",
        flags: joke.flag ? {
          nsfw: joke.flag.nsfw || false,
          religious: joke.flag.religious || false,
          political: joke.flag.political || false,
          racist: joke.flag.racist || false,
          sexist: joke.flag.sexist || false,
          explicit: joke.flag.explicit || false
        } : {
          nsfw: false,
          religious: false,
          political: false,
          racist: false,
          sexist: false,
          explicit: false
        }
      })),
      success: true,
      message: "Community jokes fetched successfully",
    });
  } catch (error) {
    console.error("Error fetching community jokes:", error);
    
    return NextResponse.json(
      {
        jokes: [],
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        message: "Failed to fetch community jokes",
      },
      { status: 500 }
    );
  }
}
