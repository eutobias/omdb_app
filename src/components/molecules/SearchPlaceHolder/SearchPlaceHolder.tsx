import { Col } from "@/components/atoms/Col"
import styles from "./SearchPlaceHolder.module.scss"

type SearchPlaceHolderProps = {}

export const SearchPlaceHolder = () => {
  return (
    <Col className={styles["search-placeholder"]}>
      <h3>Don't know what to search?</h3>
      <p>Here's an offer you can't refuse</p>
    </Col>
  )
}