import type { FC, ReactNode } from "react";

interface FullBleedSectionProps {
  children?: ReactNode;
  className?: string;
}

export const FullBleedSection: FC<FullBleedSectionProps> = ({
  children,
  className = "",
}) => {
  return <section className={`w-full ${className}`}>{children}</section>;
};
