import { BaseContainer, BaseContainerProps } from "../BaseContainer";

type RowProps = {} & BaseContainerProps

export const Row = ({
  as,
  children,
  className,  
  style
}: RowProps) => {
  return (
    <BaseContainer
      type="row"
      as={as}
      className={className}
      style={style}
    >
      {children}
    </BaseContainer>
  );
};
