import type { FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import { portfolio } from "../data/portfolio";
import { ShowcaseContext } from "./ShowcaseContext";

export const ShowcaseProvider: FC<IProviderProps> = ({ children }) => {
  return (
    <ShowcaseContext.Provider
      value={{
        showcases: portfolio,
        showcaseIsLoading: false,
        initError: null,
      }}
    >
      {children}
    </ShowcaseContext.Provider>
  );
};
