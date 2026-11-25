import type { FC, ReactNode } from "react";
import { layoutStyles } from "../../styles/styles";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`${layoutStyles.container} ${className}`}>{children}</div>
);
