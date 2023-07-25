import { BaseContainer, BaseContainerProps } from "../BaseContainer";

type RowProps = {} & BaseContainerProps

export const Row = ({
  as,
  children,
  className,
}: RowProps) => {
  return (
    <BaseContainer
      type="row"
      as={as}
      className={className}
    >
      {children}
    </BaseContainer>
  );
};
