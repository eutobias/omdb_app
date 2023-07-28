import { ReactNode } from "react";
import styles from "./PageContainer.module.scss";
import { Col } from "@/components/atoms/Col";

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return <Col className={styles["container"]}>{children}</Col>;
};
