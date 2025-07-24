import { FilterImpl } from "@/types/jokeAPITypes";
import { getJokesWithFilter } from "../jokeService";
import MockAdapter from "axios-mock-adapter";
import apiClient from "../apiClient";
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

    const expectedUrl = `/joke/Programming?lang=en&safe-mode&amount=3`;

    mock.onGet(expectedUrl).reply(200, {
      jokes: [mockJokes],
    });

    const response = await getJokesWithFilter(mockFilter, language, signal);

  expect(response.data.jokes).toBeDefined();
  });

  it("should handle errors when fetching jokes", async () => {
    const mockFilter: FilterImpl = {
      category: "NonExistentCategory",
      isMockData: false,
    };
    const language = "en";
    const signal = new AbortController().signal;

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

    const response = await getJokesWithFilter(mockFilter, language, signal);

    expect(response.data.jokes).toBeDefined();
    expect(response.data.success).toBe(true);
  });
});
