import { Button } from "@/components/atoms/Button";
import { Col } from "@/components/atoms/Col";
import { LikeIcon } from "@/components/atoms/LikeIcon";
import { Row } from "@/components/atoms/Row";
import { SvgLoader } from "@/components/atoms/SvgLoader";
import { ImdbBadge } from "@/components/molecules/ImdbBadge";
import { RottenTomatoesBadge } from "@/components/molecules/RottenTomatoesBadge";
import { useGetMovie } from "@/hooks/useGetMovie";
import { useFavorites } from "@/hooks/useStoreFavorites";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import styles from "./MovieDetails.module.scss";

export const MovieDetails = () => {
  const navigate = useNavigate();
  const favorites = useFavorites();
  const { getMovie, loading, result } = useGetMovie();

  let { id } = useParams();

  const renderImdbBadge = () => {
    const badge = result?.ratings.find((item) => {
      if (item.source === "Internet Movie Database") return item;
    });

    return badge ? <ImdbBadge text={badge.value} /> : <></>;
  };

  const renderRottenTomatoesBadge = () => {
    const badge = result?.ratings.find((item) => {
      if (item.source === "Rotten Tomatoes") return item;
    });

    return badge ? <RottenTomatoesBadge text={badge.value} /> : <></>;
  };

  const handleBackButton = () => navigate(-1);

  // const removeFromFavorites = () => {
  //   if (result?.imdbID) {
  //     storedFavorites.remove(result?.imdbID);
  //     const items = favorites;
  //     items.splice(items.indexOf(result?.imdbID), 1);
  //     setFavorites(items);
  //   }
  // };

  // const addToFavorites = () => {
  //   if (result?.imdbID && !favorites.includes(result?.imdbID)) {
  //     storedFavorites.add(result.imdbID);
  //     const items = favorites;
  //     items.push(result?.imdbID);
  //     setFavorites(items);
  //   }
  // };

  const handleAddToFavorites = () => {
    if (!result?.imdbID) return;

    favorites.items.includes(result?.imdbID)
      ? favorites.remove(result?.imdbID)
      : favorites.add(result?.imdbID)
  };

  useEffect(() => {
    if (id) {
      getMovie(id);
    }
  }, []);


  return (
    <Row className={styles["details-container"]}>
      {result && (
        <>
          <Col className={styles["content-wrapper"]}>
            <Button
              className={styles["button-back"]}
              onClick={handleBackButton}
            >
              <SvgLoader file="arrow_icon" />
            </Button>

            <Row className={styles["movie-info"]}>
              <span>{result.runtime}</span>
              <span>•</span>
              <span>{result.released}</span>
              <span>•</span>
              <span className={styles["highlight"]}>{result.rated}</span>
            </Row>

            <h2>{result?.title}</h2>

            <Row className={styles["ratings"]}>
              {renderImdbBadge()}
              {renderRottenTomatoesBadge()}
              <Button
                className={styles["button-like"]}
                onClick={handleAddToFavorites}
              >
                <LikeIcon liked={favorites.items.includes(result?.imdbID)} className={styles["icon"]} />
                <span className="text">Add to favorites</span>
              </Button>
            </Row>

            <h4>Plot</h4>
            <p className={styles["plot"]}>{result.plot}</p>

            <Row className={styles["details"]}>
              <Col className={styles["column"]}>
                <h4>Cast</h4>
                <ul>
                  {result.actors.split(",").map((actorName) => (
                    <li key={actorName}>{actorName}</li>
                  ))}
                </ul>
              </Col>

              <Col className={styles["column"]}>
                <h4>Genre</h4>
                <ul>
                  {result.genre.split(",").map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
              </Col>
              <Col className={styles["column"]}>
                <h4>Director</h4>
                <ul>
                  {result.director.split(",").map((directorName) => (
                    <li key={directorName}>{directorName}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              src={result.poster}
              title={`Poster of: ${result.title}`}
              className={styles["poster"]}
            />
          </Col>
        </>
      )}
      {loading && "LOADING"}
    </Row>
  );
};
