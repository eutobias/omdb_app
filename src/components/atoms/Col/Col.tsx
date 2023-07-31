import { BaseContainer, BaseContainerProps } from "../BaseContainer";

type ColProps = {} & BaseContainerProps

export const Col = ({
  as,
  children,
  className,
  style
}: ColProps) => {
  return (
    <BaseContainer
      type="col"
      as={as}
      className={className}
      style={style}
    >
      {children}
    </BaseContainer>
  );
};
