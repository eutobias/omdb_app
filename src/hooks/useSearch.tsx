import { omdbApi } from "@/services/omdbApi";
import { SearchListItem } from "@/types/search";
import { useMemo, useState } from "react";

type UseSearchReturn = {
  search: (query: string) => void;
  loading: boolean;
  results: SearchListItem[];
};

type UseSearchState = { query: string } & Pick<
  UseSearchReturn,
  "loading" | "results"
>;

export const useSearch = (): UseSearchReturn => {
  const initialState: UseSearchState = {
    query: "",
    loading: false,
    results: [],
  };
  const [state, setState] = useState<UseSearchState>(initialState);

  useMemo(() => {
    if(!state.query)
      return

    const fetch = async () => {
      const results = await omdbApi.search(state.query);

      setState((state) => ({
        ...state,
        loading: false,
        results: results,
      }));
    };

    fetch()
  }, [state.query]);

  const search = async (query: string) => {
    setState((state) => ({
      ...state,
      query,
      loading: true,
    }));
  };

  return { search, loading: state.loading, results: state.results };
};
