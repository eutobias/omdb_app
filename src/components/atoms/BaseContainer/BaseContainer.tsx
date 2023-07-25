import { ReactNode } from "react";
import classNames from "classnames";

import styles from "./BaseContainer.module.scss";

export type BaseContainerProps = {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  type?: "row" | "col";
  children?: ReactNode | undefined
}

export const BaseContainer = ({
  as = "div",
  className = "",
  children,
  type = "row",
}: BaseContainerProps) => {
  const CustomTag: keyof JSX.IntrinsicElements = as;

  const handleClassNames = (className: string) => {
    const common = classNames(styles['flex'])
    if (type === "row")
      return classNames(common, styles['row'], className)

    return classNames(common, styles['col'], className)
  }

  return (
    <CustomTag
      className={handleClassNames(className)}
    >
      {children}
    </CustomTag>
  );
};
