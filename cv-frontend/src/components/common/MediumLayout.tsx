import type { FC } from "react";
import type { IProviderProps } from "../../interfaces/components/IProviderProps";

export const MediumLayout: FC<IProviderProps> = ({ children }) => {
  return (
    <section className="mx-auto flex w-full max-w-[1350px] flex-col px-5">
      {children}
    </section>
  );
};
