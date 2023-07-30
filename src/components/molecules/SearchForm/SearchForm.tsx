import { InputText, InputTextProps } from "@/components/atoms/InputText";

import styles from "./SearchForm.module.scss";

type SearchFormProps = { value: string } & Pick<InputTextProps, "onChange"> &
  Pick<HTMLFormElement, "onSubmit">;

export const SearchForm = ({ onSubmit, onChange, value }: SearchFormProps) => {
  return (
    <form onSubmit={onSubmit} className={styles["search-form"]}>
      <InputText
        onChange={onChange}
        value={value}
        name="query"
        placeholder="Search movies..."
      />
    </form>
  );
};
