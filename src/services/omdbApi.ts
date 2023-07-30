import { Movie, MovieResponse } from "@/types/movie";
import { SearchItemResponse, SearchListItem } from "@/types/search";

export const BASE_URL: string = "http://www.omdbapi.com/?apikey=fd140ecc";

type OmdbApiService = {
  search: (query: string) => Promise<SearchListItem[]>;
  getMovieDetails: (id: string) => Promise<Movie | undefined>;
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
  getMovieDetails: async (id) => {
    const url = `${BASE_URL}&i=${id}`;
    const response = await fetch(url);
    const data = (await response.json()) as MovieResponse;

    if (!data) return;

    const result = {
      title: data.Title,
      year: data.Year,
      rated: data.Rated,
      released: data.Released,
      runtime: data.Runtime,
      genre: data.Genre,
      director: data.Director,
      writer: data.Writer,
      actors: data.Actors,
      plot: data.Plot,
      language: data.Language,
      country: data.Country,
      awards: data.Awards,
      poster: data.Poster,
      ratings: data?.Ratings?.map((item) => ({
        source: item.Source,
        value: item.Value,
      })),
      metascore: data.Metascore,
      imdbRating: data.imdbRating,
      imdbVotes: data.imdbVotes,
      imdbID: data.imdbID,
      type: data.Type,
      dvd: data.DVD,
      boxOffice: data.BoxOffice,
      production: data.Production,
      website: data.Website,
    } as Movie;

    return result;
  },
};
