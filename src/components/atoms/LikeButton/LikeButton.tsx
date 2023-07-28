import classNames from "classnames";
import styles from "./LikeButton.module.scss";
import { SvgLoader } from "../SvgLoader";

type LikeButtonProps = {
  className?: string;
  liked: boolean;
  onClick: (event: React.MouseEvent<HTMLElement>, imdbID?: string) => void;
};

export const LikeButton = ({ className, liked, onClick }: LikeButtonProps) => {

  const handleClassNames = (className: string = "") => {
    return classNames(
      styles["like-button"],
      { [styles["liked"]]: liked },
      className
    );
  };

  return (
    <a href="#" className={handleClassNames(className)} onClick={onClick}>
      <SvgLoader file="heart_icon" />
    </a>
  );
};
