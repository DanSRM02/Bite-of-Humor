export type ComedianLoginData = {
  email: string;
  password: string;
};

export type ComedianSignUpData = {
  email: string;
  password: string;
  name: string;
  joke: string;
};

export interface ComedianProfile {
  id: string;
  comedian_name: string;
  email: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

export interface UserJoke {
  id: string;
  user_id: string;
  category: string;
  setup: string;
  punchline: string;
  flags: string[];
  is_from_signup: boolean;
  is_approved: boolean;
  created_at: string;
  updated_at: string;
}
