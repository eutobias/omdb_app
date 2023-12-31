import { HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

import styles from "./BaseContainer.module.scss";

type ContainerType = "row" | "col" | "col-reverse" | "row-reverse"
export type BaseContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: ReactNode | undefined
  style?: React.DetailedHTMLProps<React.StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>;
  type?: ContainerType;
} & HTMLAttributes<HTMLFormElement>

export const BaseContainer = ({
  as = "div",
  className = "",
  children,
  type = "row",
  style
}: BaseContainerProps) => {
  const CustomTag: keyof JSX.IntrinsicElements = as;

  const handleClassNames = (className: string) => {
    const classes: { [key in ContainerType]: string } = {
      "col": styles["col"],
      "row": styles["row"],
      "col-reverse": styles["col-reverse"],
      "row-reverse": styles["row-reverse"]
    } 
    
    return classNames(styles['flex'], classes[type], className)
  }

  return (
    <CustomTag
      className={handleClassNames(className)}
      style={style}
    >
      {children}
    </CustomTag>
  );
};
