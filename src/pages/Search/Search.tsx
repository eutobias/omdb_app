import { useState } from "react";
import { Col } from "@/components/atoms/Col";
import { SearchLoader } from "@/components/molecules/SearchLoader";
import { SearchForm } from "@/components/molecules/SearchForm";
import { SearchResults } from "@/components/molecules/SearchResults";
import { useSearch } from "@/hooks/useSearch";

import styles from "./Search.module.scss";
import { SearchPlaceHolder } from "@/components/molecules/SearchPlaceHolder";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { search, loading, results } = useSearch();

  const handleSubmit = (event: React.SyntheticEvent<SubmitEvent>) => {
    event.preventDefault();

    search(searchValue);

    return false;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Col className={styles["search-page"]}>
      <SearchForm onSubmit={handleSubmit} onChange={handleOnChange} />

      {!loading && results.length === 0 && <SearchPlaceHolder />}
      {loading && <SearchLoader />}
      {!loading && results.length > 0 && <SearchResults results={results} />}
    </Col>
  );
};
