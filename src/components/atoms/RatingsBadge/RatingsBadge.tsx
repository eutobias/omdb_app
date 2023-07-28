import { Row } from "../Row";
import { SvgLoader } from "../SvgLoader";

import styles from "./RatingsBadge.module.scss";
import classNames from "classnames";

export type RatingsBadgeProps = {
  className?: string;
  icon: string;
  text: string;
};

export const RatingsBadge = ({ icon, text, className }: RatingsBadgeProps) => {
  return (
    <Row className={classNames(styles["badges"], className)}>
      <span className={styles["icon"]}>{icon && <SvgLoader file={icon} />}</span>
      <span className={styles["text"]}>{text}</span>
    </Row>
  );
};
