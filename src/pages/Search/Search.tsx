import { useState } from "react";
import { Col } from "@/components/atoms/Col";

import styles from "./Search.module.scss";

import { SearchPlaceHolder } from "@/components/molecules/SearchPlaceHolder";
import { SearchForm } from "@/components/molecules/SearchForm";
import { useSearch } from "@/hooks/useSearch";
import { SearchResults } from "@/components/molecules/SearchResults";

export const Search = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const { search, loading, results } = useSearch();

  const handleSubmit = (event: React.SyntheticEvent<SubmitEvent>) => {
    event.preventDefault();

    search(searchValue);

    return false;
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    setSearchValue(event.target.value);
  };

  return (
    <Col className={styles["search-page"]}>
      <SearchForm onSubmit={handleSubmit} onChange={handleOnChange} />

      {!loading && results.length === 0 && <SearchPlaceHolder />}

      {loading && <>CARREGANDO...</>}
      {!loading && results.length > 0 && (<SearchResults results={results} />)}
    </Col>
  );
};
