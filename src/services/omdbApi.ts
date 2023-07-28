import { Movie } from "@/types/movie";
import { SearchItemResponse, SearchListItem } from "@/types/search";

export const BASE_URL: string = "http://www.omdbapi.com/?apikey=fd140ecc";

type OmdbApiService = {
  search: (query: string) => Promise<SearchListItem[]>;
  getMovieDetails?: (id: string) => Promise<Movie>;
};

export const omdbApi: OmdbApiService = {
  search: async (query) => {
    const searchUrl = `${BASE_URL}&s=${query}`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    if (!data?.Search?.length) return [] as SearchListItem[];

    const results: SearchListItem[] = data.Search.map(
      (result: SearchItemResponse) => {
        return {
          title: result.Title,
          poster: result.Poster,
          type: result.Type,
          imdbID: result.imdbID,
          year: result.Year,
        } as SearchListItem;
      }
    );

    return results;
  },
  // getMovieDetails: async (id) => {},
};
