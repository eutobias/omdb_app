import { ReactNode } from "react";
import classNames from "classnames";

import { ReactComponent as SearchIcon } from "../../../assets/search_icon.svg";
import { Col } from "../Col";
import { Row } from "../Row";
import styles from "./InputText.module.scss";

export type InputTextProps = {
  className?: string;
  error?: boolean;
  errorMessage?: string;
  icon?: ReactNode;
  id?: string;
  onChange?: (ev:React.ChangeEvent<HTMLInputElement>) => void
} & Partial<HTMLInputElement>;

export const InputText = ({
  className = "",
  defaultValue,
  error = false,
  errorMessage = "",
  id,
  placeholder,
  type = "text",
  value,

  onChange
}: InputTextProps) => {
  const handleClassNames = (className: string) => {
    return classNames(styles["container"], className, {
      error: styles["error"],
    });
  };

  return (
    <Col className={handleClassNames(className)}>
      <Row className={styles["wrapper"]}>
        <SearchIcon />
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          defaultValue={defaultValue}
          onChange={onChange}
        />
      </Row>

      {error && <span className={styles["error-message"]}>{errorMessage}</span>}
    </Col>
  );
};
