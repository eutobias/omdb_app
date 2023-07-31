import { Button } from "@/components/atoms/Button";
import { Col } from "@/components/atoms/Col";
import { createSearchParams, useNavigate } from "react-router-dom";

import top500Movies from "@/data/top500.json";
import bgImage from "@/assets/dead_horse.png";

import styles from "./SearchPlaceHolder.module.scss";

export const SearchPlaceHolder = () => {
  const navigate = useNavigate();

  const suggestMovie = () => {
    const index = Math.floor(Math.random() * top500Movies.length);

    navigate({
      pathname: "/",
      search: `?${createSearchParams({ q: top500Movies[index] })}`,
    });
  };

  return (
    <Col className={styles["search-placeholder"]} style={{backgroundImage: `url(${bgImage})`}}>
      <h3>Don't know what to search?</h3>
      <Button onClick={suggestMovie} className={styles["suggestion-button"]}>
        Here's an offer you can't refuse
      </Button>
    </Col>
  );
};
