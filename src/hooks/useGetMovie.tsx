import { omdbApi } from "@/services/omdbApi";
import { Movie } from "@/types/movie";
import { useMemo, useState } from "react";

type UseGetMovieReturn = {
  getMovie: (id: string) => void;
  loading: boolean;
  result: Movie | undefined;
};

type UseGetMovieState = { id: string } & Pick<
  UseGetMovieReturn,
  "loading" | "result"
>;

export const useGetMovie = (): UseGetMovieReturn => {
  const initialState: UseGetMovieState = {
    id: "",
    loading: false,
    result: undefined,
  };
  const [state, setState] = useState<UseGetMovieState>(initialState);

  useMemo(() => {
    if (!state.id)
      return

    const fetch = async () => {
      const result = await omdbApi.getMovieDetails(state.id);

      setState((state) => ({
        ...state,
        loading: false,
        result: result,
      }));
    };

    fetch();
  }, [state.id]);

  const getMovie = (id: string) => {
    setState((state) => ({
      ...state,
      id,
      loading: true,
    }));
  };

  return { getMovie, loading: state.loading, result: state.result };
};
