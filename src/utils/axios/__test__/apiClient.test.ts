import MockAdapter from "axios-mock-adapter";
import { mockJokes } from "@/utils/mockData";
import apiClient from "../apiClient";

describe("API Client", () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    mock.restore();
  });

  it("should accept the request and return code 200", async () => {
    mock.onGet("/api/jokes/mock").reply(200, {
      jokes: mockJokes,
    });

    const response = await apiClient.get("/api/jokes/mock");    

    expect(response.status).toBe(200);
    expect(response.data.jokes).toEqual(mockJokes);
  });

  it('should reject with a "Resource not found" error on a 404 status', async () => {
    mock.onGet("/not-found").reply(404, { message: "Not Found" });

    await expect(apiClient.get("/not-found")).rejects.toThrow(
      "Resource not found"
    );
  });

  it('should reject with an "Invalid category" error on a 400 status with code 106', async () => {
    mock.onGet("/api/jokes/mock").reply(400, {
      code: 106,
      message: "Invalid category",
    });

    await expect(apiClient.get("/api/jokes/mock")).rejects.toThrow(
      "Invalid category"
    );
  });
});
