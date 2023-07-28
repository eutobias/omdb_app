import { Col } from "@/components/atoms/Col"
import styles from "./SearchLoader.module.scss"
import { Loader } from "@/components/atoms/Loader/Loader"

type SearchLoaderProps = {}

export const SearchLoader = () => {
  return (
    <Col className={styles["search-loader"]}>
      <Loader />
    </Col>
  )
}