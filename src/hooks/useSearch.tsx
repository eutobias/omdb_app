import { omdbApi } from "@/services/omdbApi";
import { SearchListItem } from "@/types/search";
import { useState } from "react";

type UseSearchReturn = {
  search: (query: string) => void;
  loading: boolean;
  results: SearchListItem[];
};

type UseSearchState = Pick<UseSearchReturn, "loading" | "results">;

export const useSearch = (): UseSearchReturn => {
  const initialState: UseSearchState = {
    loading: false,
    results: [],
  };
  const [state, setState] = useState<UseSearchState>(initialState);

  const search = async (query: string) => {
    setState((state) => ({
      ...state,
      loading: true,
    }));

    const results = await omdbApi.search(query);

    setState((state) => ({
      ...state,
      loading: false,
      results: results,
    }));
  };

  return { search, loading: state.loading, results: state.results };
};
