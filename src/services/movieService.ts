import axios from "axios";
import { type Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesProps {
  query: string;
  currentPage: number;
}

interface MoviesHttpResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies({
  query,
  currentPage,
}: FetchMoviesProps): Promise<MoviesHttpResponse> {
  const response = await axios.get<MoviesHttpResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${currentPage}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
}
