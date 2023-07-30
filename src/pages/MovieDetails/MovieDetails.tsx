import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetMovie } from "@/hooks/useGetMovie";
import { Button } from "@/components/atoms/Button";
import { SvgLoader } from "@/components/atoms/SvgLoader";
import { LikeIcon } from "@/components/atoms/LikeIcon";
import { Col } from "@/components/atoms/Col";
import { Row } from "@/components/atoms/Row";
import { ImdbBadge } from "@/components/molecules/ImdbBadge";
import { RottenTomatoesBadge } from "@/components/molecules/RottenTomatoesBadge";

import styles from "./MovieDetails.module.scss";

export const MovieDetails = () => {
  const { getMovie, loading, result } = useGetMovie();
  let { id } = useParams();

  useEffect(() => {
    if (id) getMovie(id);
  }, []);

  const renderImdbBadge = () => {
    const badge = result?.ratings.find((item) => {
      if (item.source === "Internet Movie Database") return item;
    });
    console.log("badge: ", badge);

    return badge ? <ImdbBadge text={badge.value} /> : <></>;
  };

  const renderRottenTomatoesBadge = () => {
    const badge = result?.ratings.find((item) => {
      if (item.source === "Rotten Tomatoes") return item;
    });
    console.log("badge: ", badge);

    return badge ? <RottenTomatoesBadge text={badge.value} /> : <></>;
  };

  return (
    <Row className={styles["details-container"]}>
      {result && (
        <>
          <Col>
            <Button className={styles["button-back"]}>
              <SvgLoader file="arrow_icon" />
            </Button>

            <Row className={styles["movie-info"]}>
              <span>{result.runtime}</span>
              <span>•</span>
              <span>{result.released}</span>
              <span>•</span>
              <span className="highlight">{result.rated}</span>
            </Row>

            <h2>{result?.title}</h2>

            <Row>
              {renderImdbBadge()}
              {renderRottenTomatoesBadge()}
              <Button className={styles["button-like"]}>
                <LikeIcon liked={false} className="icon" />
                <span className="text">Add to favorites</span>
              </Button>
            </Row>

            <h4>Plot</h4>
            <p>{result.plot}</p>

            <Row>
              <Col>
                <h4>Cast</h4>
                <ul>
                  {result.actors.split(",").map((actorName) => (
                    <li>{actorName}</li>
                  ))}
                </ul>
              </Col>

              <Col>
                <h4>Genre</h4>
                <ul>
                  {result.genre.split(",").map((genre) => (
                    <li>{genre}</li>
                  ))}
                </ul>
              </Col>
              <Col>
                <h4>Director</h4>
                <ul>
                  {result.director.split(",").map((directorName) => (
                    <li>{directorName}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>
          <Col>
                    <img src={result.poster} title={`Poster of: ${result.title}`} />
          </Col>
        </>
      )}
      {loading && "LOADING"}
    </Row>
  );
};
