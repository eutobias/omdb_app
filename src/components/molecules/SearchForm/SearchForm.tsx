import { InputText, InputTextProps } from "@/components/atoms/InputText";

import styles from "./SearchForm.module.scss"

type SearchFormProps = Pick<InputTextProps, "onChange"> & Pick<HTMLFormElement, "onSubmit">;

export const SearchForm = ({ onSubmit, onChange }: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className={styles["search-form"]}>
      <InputText onChange={onChange} name="query" placeholder="Search movies..." />
    </form>
  );
};
