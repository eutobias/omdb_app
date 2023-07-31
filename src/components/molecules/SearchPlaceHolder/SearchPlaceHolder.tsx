import top500Movies from "@/data/top500.json";
import { Col } from "@/components/atoms/Col"
import { Button } from "@/components/atoms/Button";
import { createSearchParams, useNavigate } from "react-router-dom";

import styles from "./SearchPlaceHolder.module.scss"

type SearchPlaceHolderProps = {}

export const SearchPlaceHolder = () => {

  const navigate = useNavigate()

  const suggestMovie = () => {
    const index = Math.floor(Math.random() * top500Movies.length)

    navigate({
      pathname: "/",
      search: `?${createSearchParams({ q: top500Movies[index] })}`,
    });
  }

  return (
    <Col className={styles["search-placeholder"]}>
      <h3>Don't know what to search?</h3>
      <Button onClick={suggestMovie} className={styles["suggestion-button"]}>Here's an offer you can't refuse</Button>
    </Col>
  )
}