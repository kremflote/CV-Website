import type { FC } from "react";
import type { IProviderProps } from "../../interfaces/components/IProviderProps";

export const FullWidthLayout: FC<IProviderProps> = ({ children }) => {
  return <section className="flex w-full flex-col">{children}</section>;
};
