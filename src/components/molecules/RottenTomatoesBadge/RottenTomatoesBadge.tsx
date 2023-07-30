import {
  RatingsBadge,
  RatingsBadgeProps,
} from "@/components/atoms/RatingsBadge";

import styles from "./RottenTomatoesBadge.module.scss";

type RottenTomatoesBadgeProps = {} & RatingsBadgeProps;

export const RottenTomatoesBadge = ({
  text,
}: RottenTomatoesBadgeProps) => {
  return (
    <RatingsBadge
      className={styles["badge"]}
      icon="rotten_tomatoes_logo"
      text={text}
    />
  );
};
