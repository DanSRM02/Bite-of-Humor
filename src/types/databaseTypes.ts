export interface DatabaseJoke {
  id: number;
  category: string;
  setup: string;
  punchline: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  approved?: boolean;
  flag_id?: number;
}

export interface DatabaseFlag {
  id: number;
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
  created_at: string;
}

export interface DatabaseUser {
  id: string;
  email: string;
  comedian_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface JokeWithFlag extends DatabaseJoke {
  flag: DatabaseFlag | null;
}

export interface JokeWithUser extends DatabaseJoke {
  user: DatabaseUser;
}

export interface JokeWithFlagAndUser extends DatabaseJoke {
  flag: DatabaseFlag | null;
  user: DatabaseUser;
}
