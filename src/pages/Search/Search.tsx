import { useEffect, useState } from "react";
import { Col } from "@/components/atoms/Col";
import { SearchLoader } from "@/components/molecules/SearchLoader";
import { SearchForm } from "@/components/molecules/SearchForm";
import { SearchResults } from "@/components/molecules/SearchResults";
import { useSearch } from "@/hooks/useSearch";

import styles from "./Search.module.scss";
import { SearchPlaceHolder } from "@/components/molecules/SearchPlaceHolder";
import {
  Route,
  Routes,
  createSearchParams,
  useNavigate,
} from "react-router-dom";
import { useQueryString } from "@/hooks/useQueryString";

export const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const { search, loading, results } = useSearch();

  let query = useQueryString();

  const handleSubmit = (event: React.SyntheticEvent<SubmitEvent>) => {
    event.preventDefault();

    navigate({
      pathname: "/",
      search: `?${createSearchParams({ q: searchValue })}`,
    });

    return false;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    const q = query.get("q")
    setSearchValue(q || "")
    if (q) {
      search(q);
    }

  }, [query])

  return (
    <Col className={styles["search-page"]}>
      <SearchForm value={searchValue} onSubmit={handleSubmit} onChange={handleOnChange} />

      {!loading && !results?.length && <SearchPlaceHolder />}
      {loading && <SearchLoader />}
      {!loading && results?.length > 0 && <SearchResults results={results} />}
    </Col>
  );
};
