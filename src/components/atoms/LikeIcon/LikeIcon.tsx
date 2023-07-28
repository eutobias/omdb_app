import classNames from "classnames";
import styles from "./LikeIcon.module.scss";
import { SvgLoader } from "../SvgLoader";

type LikeIconProps = {
  className?: string;
  liked: boolean;
};

export const LikeIcon = ({ className, liked }: LikeIconProps) => {

  const handleClassNames = (className: string = "") => {
    return classNames(
      styles["like-button"],
      { [styles["liked"]]: liked },
      className
    );
  };

  return (
    <span className={handleClassNames(className)}>
      <SvgLoader file="heart_icon" />
    </span>
  );
};
