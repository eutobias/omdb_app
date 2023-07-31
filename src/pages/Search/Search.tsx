import { Col } from "@/components/atoms/Col";
import { SearchForm } from "@/components/molecules/SearchForm";
import { SearchLoader } from "@/components/molecules/SearchLoader";
import { SearchResults } from "@/components/molecules/SearchResults";
import { useSearch } from "@/hooks/useSearch";
import { useEffect, useState } from "react";

import { SearchPlaceHolder } from "@/components/molecules/SearchPlaceHolder";
import { useQueryString } from "@/hooks/useQueryString";
import {
  createSearchParams,
  useNavigate
} from "react-router-dom";
import styles from "./Search.module.scss";

export const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const { search, reset, loading, results } = useSearch();

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
    
    if (q)
      search(q);
    else
      reset()

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
