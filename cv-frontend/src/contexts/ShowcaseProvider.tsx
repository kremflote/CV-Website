import type { FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import { showcases } from "../data/staticCvData";
import { ShowcaseContext } from "./ShowcaseContext";

export const ShowcaseProvider: FC<IProviderProps> = ({ children }) => {
  return (
    <ShowcaseContext.Provider
      value={{
        showcases,
        showcaseIsLoading: false,
        initError: null,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};
