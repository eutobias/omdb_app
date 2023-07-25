import { ReactNode } from "react";
import classNames from "classnames";

import { ReactComponent as SearchIcon } from '../../../assets/search_icon.svg';
import { Col } from "../Col";
import { Row } from "../Row";
import styles from "./InputText.module.scss";

type InputTextProps = {
  className?: string,
  error?: boolean,
  errorMessage?: string,
  icon?: ReactNode
} & Partial<HTMLInputElement>

export const InputText = (
  {
    className = "",
    error = false,
    errorMessage = "",
    placeholder = "",
    type = "text",
  }: InputTextProps
) => {

  const handleClassNames = (className: string) => {
    return classNames(styles['container'], className, { error: styles['error'] })
  }

  return (
    <Col className={handleClassNames(className)}>
      <Row className={styles['wrapper']} >
        <SearchIcon />
        <input
          placeholder={placeholder}
          type={type}
        />
      </Row>

      {error && (
        <span className={styles['error-message']}>
          {errorMessage}
        </span>
      )}
    </Col>
  );
};
