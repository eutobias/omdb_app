
import { useState } from "react"
import * as searchData from "@/mock/search.json"
import { SearchItemResponse, SearchListItem } from "@/types/search"

type UseSearchReturn = {
  search : (query:string) => void,
  loading: boolean,
  results: SearchListItem[]
}

type UseSearchState = Pick<UseSearchReturn, "loading"|"results">

export const useSearch = ():UseSearchReturn => {

  const initialState: UseSearchState = {
    loading: false,
    results: []
  }
  const [state, setState] = useState<UseSearchState>(initialState)

  const search = (query:string) => {
    setState((state) => ({
      ...state,
      loading: true
    }))
    
    const results:SearchListItem[] = searchData.Search.map((item:SearchItemResponse) => ({
      title: item.Title,
      imdbID: item.imdbID,
      poster: item.Poster,
      type: item.Type,
      year: item.Year
    }))

    setTimeout(() => {
      setState((state) => ({
        ...state,
        loading: false,
        results: results
      }))
    }, 2000)
  }

  return { search, loading: state.loading, results: state.results }
}