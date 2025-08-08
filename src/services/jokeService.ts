import type { FilterImpl } from "@/types/jokeAPITypes";
import type { JokeWithFlag } from "@/types/databaseTypes";
import apiClient from "../utils/axios/apiClient";
import { createClientServer } from "@/utils/supabase/server";
import { JokeSubmissionData } from "@/validations/jokeSubmissionValidation";

export const getJokesInitialLoad = async (language: string) => {
  try {
    const response = await apiClient.get(
      `/joke/Any?safe-mode&lang=${language}&amount=10`
    );

    let jokes = [];
    if (response.data.jokes) {
      jokes = response.data.jokes;
    } else if (response.data.id) {
      jokes = [response.data];
    }

    return jokes;
  } catch {
    return [];
  }
};

export const getJokesWithFilter = async (
  filter: FilterImpl,
  language: string,
  signal?: AbortSignal
) => {
  const category = filter.category;
  const queryString = createQueryString(filter, language);

  try {
    const url = `/joke/${category}?${queryString}`;
    const headers = {
      isMockData: filter.isMockData,
    };

    const response = await apiClient.get(url, { signal, headers });

    let jokes = [];
    if (response.data.jokes) {
      jokes = response.data.jokes;
    } else if (response.data.id) {
      jokes = [response.data];
    }

    return {
      data: {
        jokes: jokes,
        success: true,
        fallback: false,
      },
    };
  } catch (error) {
    return {
      data: {
        error: error instanceof Error ? error.message : "Unknown error",
      },
    };
  }
};

export async function insertJoke(joke: JokeSubmissionData) {
  try {
    const supabase = await createClientServer();
    
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      throw new Error("User must be authenticated to submit jokes");
    }

    let flagId = null;

    if (joke.flags) {
      const { data: flagData, error: flagError } = await supabase
        .from("Flag")
        .insert({
          nsfw: joke.flags.nsfw,
          racist: joke.flags.racist,
          sexist: joke.flags.sexist,
          religious: joke.flags.religious,
          political: joke.flags.political,
          explicit: joke.flags.explicit,          
        })
        .select('id')
        .single();

      if (flagError) {
        throw flagError;
      }

      flagId = flagData?.id;
    }

    const { data: jokeData, error: jokeError } = await supabase
      .from("Joke")
      .insert({
        category: joke.category,
        setup: joke.setup,
        punchline: joke.punchline,
        user_id: user.id,
        flag_id: flagId,
      })
      .select()
      .single();

    if (jokeError) {
      throw jokeError;
    }

    return jokeData;
  } catch (error) {
    throw error;
  }
}

const createQueryString = (filter: FilterImpl, language: string) => {
  const queryParams = [];

  if (language) {
    queryParams.push(`lang=${language}`);
  }
  if (filter.isSafeMode) {
    queryParams.push("safe-mode");
  }
  if (filter.searchTerm) {
    queryParams.push(`contains=${encodeURIComponent(filter.searchTerm)}`);
  }

  queryParams.push("amount=10");

  return queryParams.join("&");
};

export interface CommunityJokeFilters {
  category?: string;
  searchTerm?: string;
  sortBy?: 'newest' | 'oldest' | 'popular';
}

export async function getCommunityJokes(filters?: CommunityJokeFilters): Promise<JokeWithFlag[]> {
  try {
    const supabase = await createClientServer();

    let query = supabase
      .from("Joke")
      .select(`
        *,
        flag:Flag(*)
      `);

    if (filters?.category && filters.category !== 'Any') {
      query = query.eq('category', filters.category);
    }

    if (filters?.searchTerm) {
      query = query.or(`setup.ilike.%${filters.searchTerm}%,punchline.ilike.%${filters.searchTerm}%`);
    }

    switch (filters?.sortBy) {
      case 'oldest':
        query = query.order('created_at', { ascending: true });
        break;
      case 'popular':
        query = query.order('created_at', { ascending: false });
        break;
      case 'newest':
      default:
        query = query.order('created_at', { ascending: false });
        break;
    }

    const { data: jokes, error } = await query.limit(20);

    if (error) {
      throw error;
    }

    return (jokes || []).map(joke => ({
      ...joke,
      created_at: joke.created_at ? String(joke.created_at) : '',
      updated_at: joke.updated_at ? String(joke.updated_at) : '',
      flag: joke.flag ? {
        ...joke.flag,
        created_at: joke.flag.created_at ? String(joke.flag.created_at) : ''
      } : null
    }));
  } catch (error) {
    throw error;
  }
}

export async function getUserJokes(): Promise<JokeWithFlag[]> {
  try {
    const supabase = await createClientServer();
    
    const { data: { user }, error: userError } = await supabase.auth.getUser();
    
    if (userError || !user) {
      throw new Error("User must be authenticated");
    }

    const { data: jokes, error } = await supabase
      .from("Joke")
      .select(`
        *,
        flag:Flag(*)
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return (jokes || []).map(joke => ({
      ...joke,
      created_at: joke.created_at ? String(joke.created_at) : '',
      updated_at: joke.updated_at ? String(joke.updated_at) : '',
      flag: joke.flag ? {
        ...joke.flag,
        created_at: joke.flag.created_at ? String(joke.flag.created_at) : ''
      } : null
    }));
  } catch (error) {
    throw error;
  }
}