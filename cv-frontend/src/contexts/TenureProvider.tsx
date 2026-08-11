import type { FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import { tenures } from "../data/staticCvData";
import { TenureContext } from "./TenureContext";

export const TenureProvider: FC<IProviderProps> = ({ children }) => {
  return (
    <TenureContext.Provider
      value={{
        tenures,
        tenureIsLoading: false,
        initError: null,
      }}
    >
      {children}
    </TenureContext.Provider>
  );
};
