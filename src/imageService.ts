import axios from "axios";
axios.defaults.baseURL = "https://api.unsplash.com";
import { Image } from "./image";

const API_KEY = "T2OkjVh-CQh56fAabpAAHCMVo1opbLPlGhHKgYfsclg";

interface Photos {
  results: Image[];
  totalPages: number;
}
interface UnsplashResponse {
  results: Image[];
  total_pages: number;
}

export default async function fetchFotos(
  searchQuery: string,
  page: number
): Promise<Photos> {
  const response = await axios.get<UnsplashResponse>("/search/photos", {
    params: {
      client_id: API_KEY,
      query: searchQuery,
      page,
      per_page: 12,
      orientation: "landscape",
    },
  });
  return {
    results: response.data.results,
    totalPages: response.data.total_pages,
  };
}
