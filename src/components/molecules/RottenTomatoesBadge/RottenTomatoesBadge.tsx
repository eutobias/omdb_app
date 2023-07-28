import {
  RatingsBadge,
  RatingsBadgeProps,
} from "@/components/atoms/RatingsBadge";

import styles from "./RottenTomatoesBadge.module.scss";

type RottenTomatoesBadgeProps = {} & RatingsBadgeProps;

export const RottenTomatoesBadge = ({
  icon,
  text,
}: RottenTomatoesBadgeProps) => {
  return (
    <RatingsBadge
      className={styles["badge"]}
      icon={icon}
      text={text}
    />
  );
};
