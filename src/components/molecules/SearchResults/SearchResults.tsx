import { LikeIcon } from "@/components/atoms/LikeIcon";
import { SearchListItem } from "@/types/search";

import { useFavorites } from "@/hooks/useStoreFavorites";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResults.module.scss";

type SearchResultProps = {
  results: SearchListItem[];
};

export const SearchResults = ({ results }: SearchResultProps) => {
  if (!results?.length) return <></>;

  const navigate = useNavigate();
  const favorites = useFavorites();

  const handleClick = (event: React.MouseEvent<HTMLElement>, imdbID:string) => {
    event.preventDefault()    
    navigate({
      pathname: `/movie/${imdbID}`,
    });
  }

  return (
    <ul className={styles["search-results"]}>
      {results.map((result, index) => {
        return (
          <li key={index + result.imdbID} onClick={(ev) => handleClick(ev, result.imdbID)}>
            <img
              src={result.poster}
              alt={`Poster of movie ${result.title}`}
              title={`Poster of movie ${result.title}`}
            />
            <div className={styles["overlay"]}>
              <h3>{result.title}</h3>
              <p>{result.year}</p>
              <LikeIcon className={styles["like-button"]} liked={favorites.items.includes(result.imdbID)}  />
            </div>
          </li>
        );
      })}
    </ul>
  );
};
