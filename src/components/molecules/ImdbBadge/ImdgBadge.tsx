import {
  RatingsBadge,
  RatingsBadgeProps,
} from "@/components/atoms/RatingsBadge";

import styles from "./ImdbBadges.module.scss";

type ImdbBadgeProps = {} & RatingsBadgeProps;

export const ImdbBadge = ({ icon, text }: ImdbBadgeProps) => {
  return (
    <RatingsBadge className={styles["badge"]} icon={icon} text={text} />
  );
};
