import type { FC } from "react";
import type { IProviderProps } from "../../interfaces/components/IProviderProps";

export const WideLayout: FC<IProviderProps> = ({ children }) => {
  return (
    <section className="mx-auto flex max-w-[1800px] flex-col px-5">
      {children}
    </section>
  );
};
