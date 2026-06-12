import { useEffect, useState, type FC } from "react";
import type { IProviderProps } from "../interfaces/components/IProviderProps";
import type { ITenure } from "../interfaces/ITenure";
import { getTenures } from "../services/CvService";
import type { ITenureResponseList } from "../interfaces/IServiceResponses";
import { TenureContext } from "./TenureContext";

export const TenureProvider: FC<IProviderProps> = ({ children }) => {
  const [tenures, setTenures] = useState<ITenure[]>([]);
  const [tenureIsLoading, setTenureIsLoading] = useState<boolean>(true);
  const [initError, setInitError] = useState<string | null>(null);

  useEffect(() => {
    let isCancelled = false;

    const initializeTenures = async () => {
      const response: ITenureResponseList = await getTenures();

      if (isCancelled) return;

      if (!response.success) {
        setInitError(response.error ?? "Failed to load tenures");
        setTenureIsLoading(false);
        return;
      }

      setInitError(null);
      setTenures(response.data);
      setTenureIsLoading(false);
    };

    void initializeTenures();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <TenureContext.Provider
      value={{
        tenures,
        tenureIsLoading,
        initError,
      }}
    >
      {children}
    </TenureContext.Provider>
  );
};
