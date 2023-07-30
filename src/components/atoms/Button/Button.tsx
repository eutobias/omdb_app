import { ReactNode } from "react"
import styles from "./Button.module.scss"
import classNames from "classnames"

type ButtonProps = {
  children: ReactNode,
  className?: string,
  onClick?: (event: React.MouseEvent<HTMLElement>) => void,
}

export const Button = ({children, className, onClick}:ButtonProps) => {

  const handleClassNames = (className:string="") => classNames(styles["button"], className)

  return (<a className={handleClassNames(className)} onClick={onClick}>
    {children}
  </a>)
}