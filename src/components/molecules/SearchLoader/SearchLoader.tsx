import { Col } from "@/components/atoms/Col";
import { Loader } from "@/components/atoms/Loader/Loader";

import bgImage from "@/assets/dead_horse.png";
import styles from "./SearchLoader.module.scss";

export const SearchLoader = () => {
  return (
    <Col
      className={styles["search-loader"]}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Loader />
    </Col>
  );
};
