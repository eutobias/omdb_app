import { BaseContainer, BaseContainerProps } from "../BaseContainer";

type ColProps = {} & BaseContainerProps

export const Col = ({
  as,
  children,
  className,
}: ColProps) => {
  return (
    <BaseContainer
      type="col"
      as={as}
      className={className}
    >
      {children}
    </BaseContainer>
  );
};
