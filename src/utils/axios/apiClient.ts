import type { ApiErrorData } from "@/types/jokeAPITypes";
import { API_BASE } from "@/utils/baseConstants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_BASE,
});

apiClient.interceptors.request.use((config) => {
  const useMockData = config.headers["isMockData"];

  if (useMockData) {
    const originalUrl = config.url || "";
    const urlParts = originalUrl.split("?");
    const queryString = urlParts[1] || "";
    
    const mockUrl = `/api/jokes/mock${queryString ? `?${queryString}` : ""}`;
    
    config.url = mockUrl;
    config.baseURL = "http://localhost:3000";
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return Promise.reject(error);
    }

    if (axios.isAxiosError(error)) {
      if (error.response) {
        const { status, data } = error.response;
        const dataType = data as ApiErrorData;

        if (status === 404) {
          return Promise.reject(new Error("Resource not found"));
        }

        if (status === 400 && dataType.code === 106) {
          return Promise.reject(
            new Error(dataType.message || "Invalid category")
          );
        }

        return Promise.reject(dataType);
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
