export interface ApiErrorData {
  error?: boolean;
  internalError?: boolean;
  code?: number;
  message?: string;
  causedBy?: string[];
  additionalInfo?: string;
}

export interface FlagImpl {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}

export interface JokeImpl {
  category: string;
  delivery: string;
  flags: FlagImpl;
  joke?: string;
  id: number;
  lang: string;
  safe: boolean;
  setup: string;
  type: string;
}

export interface FilterImpl {
  safeMode?: boolean;
  searchTerm?: string;
  category?: string | string[];
}
[];
