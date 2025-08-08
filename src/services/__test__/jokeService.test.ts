import { FilterImpl } from "@/types/jokeAPITypes";
import { getJokesWithFilter } from "../jokeService";
import MockAdapter from "axios-mock-adapter";
import apiClient from "../../utils/axios/apiClient";
import { mockJokes } from "@/utils/mockData";

describe("Joke Service", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should fetch jokes successfully without mock data", async () => {
    const mockFilter: FilterImpl = {
      category: "Programming",
      isMockData: false,
    };
    const language = "en";
    const signal = new AbortController().signal;

    const expectedUrl = `/joke/Programming?lang=en&amount=10`;

    mock.onGet(expectedUrl).reply(200, {
      jokes: mockJokes,
    });

    const response = await getJokesWithFilter(mockFilter, language, signal);

    expect(response.data).toBeDefined();
    expect(response.data.jokes).toEqual(mockJokes);
    expect(response.data.success).toBe(true);
  });

  it("should handle errors when fetching jokes", async () => {
    const mockFilter: FilterImpl = {
      category: "NonExistentCategory",
      isMockData: false,
    };
    const language = "en";
    const signal = new AbortController().signal;

    const expectedUrl = `/joke/NonExistentCategory?lang=en&amount=10`;

    mock.onGet(expectedUrl).reply(404, {
      error: true,
      message: "No matching joke found",
      code: 106,
    });

    const response = await getJokesWithFilter(mockFilter, language, signal);

    expect(response.data.error).toBeDefined();
    expect(response.data.error).toBe("Resource not found");
  });

  it("should handle mock data requests", async () => {
    const mockFilter: FilterImpl = {
      category: "Programming",
      isMockData: true,
    };
    const language = "en";
    const signal = new AbortController().signal;

    mock.onGet("/api/jokes/mock?lang=en&amount=10").reply(200, {
      jokes: mockJokes,
    });

    const response = await getJokesWithFilter(mockFilter, language, signal);

    expect(response.data).toBeDefined();        
    expect(response.data.success).toBe(true);
    expect(response.data.jokes).toEqual(mockJokes);
  });
});
