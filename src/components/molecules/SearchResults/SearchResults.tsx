import { SearchListItem } from "@/types/search";

import styles from "./SearchResults.module.scss";
import { LikeButton } from "@/components/atoms/LikeButton";

type SearchResultProps = {
  results: SearchListItem[];
};

export const SearchResults = ({ results }: SearchResultProps) => {
  if (!results?.length) return <></>;

  const handleClick = (event: React.MouseEvent<HTMLElement>, imdbID:string) => {
    console.log("click", event, imdbID)
  }

  return (
    <ul className={styles["search-results"]}>
      {results.map((result, index) => {
        return (
          <li key={index + result.imdbID}>
            <img
              src={result.poster}
              alt={`Poster of movie ${result.title}`}
              title={`Poster of movie ${result.title}`}
            />
            <div className={styles["overlay"]}>
              <h3>{result.title}</h3>
              <p>{result.year}</p>
              <LikeButton className={styles["like-button"]} liked={false} onClick={(ev) => handleClick(ev, result.imdbID)} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
