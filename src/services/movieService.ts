import axios from "axios";
import { type Movie } from "../types/movie";

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

interface FetchMoviesProps {
  query: string;
  page?: number;
}

interface MoviesHttpResponse {
  page: number;
  results: Movie[];
  total_pages: number;
}

export async function fetchMovies({
  query,
  page = 1,
}: FetchMoviesProps): Promise<MoviesHttpResponse> {
  const response = await axios.get<MoviesHttpResponse>(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        accept: "application/json",
      },
    }
  );
  return response.data;
}
