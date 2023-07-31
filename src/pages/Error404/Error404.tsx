import { Col } from "@/components/atoms/Col";

import bgImage from "@/assets/dead_horse.png";
import styles from "./Error404.module.scss"

export const Error404 = () => {
  return (
    <Col className={styles["container"]} style={{backgroundImage: `url(${bgImage})`}}>
      <h3>Error 404</h3>
      <p>Page not found!</p>
    </Col>
  );
};
